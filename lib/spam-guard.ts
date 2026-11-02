// Server-only: imported by API routes, never by client components.
import { createHmac, timingSafeEqual } from 'node:crypto'

/*
 * Shared spam stack for every form endpoint (/api/contact, /api/lead):
 *   1. honeypot            (checked in each route, fake 200 on hit)
 *   2. signed time token   (issued by /api/form-token, must be >= MIN_AGE_MS old)
 *   3. Cloudflare Turnstile (enforced whenever TURNSTILE_SECRET_KEY is set)
 *   4. server validation    (helpers below)
 *   5. per-IP rate limit
 *
 * Env: FORM_SIGNING_SECRET (falls back to RESEND_API_KEY), TURNSTILE_SECRET_KEY.
 */

const MIN_AGE_MS = 3_000
const MAX_AGE_MS = 1000 * 60 * 60 * 24

function signingKey(): string {
  const key = process.env.FORM_SIGNING_SECRET || process.env.RESEND_API_KEY
  if (!key) throw new Error('spam-guard: no FORM_SIGNING_SECRET or RESEND_API_KEY set')
  return key
}

function hmac(payload: string): string {
  return createHmac('sha256', signingKey()).update(payload).digest('base64url')
}

/** Token a form fetches on load: "<issuedAtMs>.<signature>". */
export function issueFormToken(now = Date.now()): string {
  const ts = String(now)
  return `${ts}.${hmac(ts)}`
}

/** True only for an untampered token issued between 3 seconds and 24 hours ago. */
export function verifyFormToken(token: unknown, now = Date.now()): boolean {
  if (typeof token !== 'string') return false
  const [ts, sig] = token.split('.')
  if (!ts || !sig || !/^\d{12,14}$/.test(ts)) return false
  const expected = Buffer.from(hmac(ts))
  const given = Buffer.from(sig)
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return false
  const age = now - Number(ts)
  return age >= MIN_AGE_MS && age <= MAX_AGE_MS
}

/* ── Rate limit ────────────────────────────────────────────────────────────
 * In-memory sliding window per serverless instance. Not global across Vercel
 * instances, but it stops a single bot hammering an endpoint, which is the
 * pattern that took the microsites down. Zero cost, no extra service. */
const hits = new Map<string, number[]>()

export function rateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs)
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k)
  }
  return recent.length > limit
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for')
  return (fwd?.split(',')[0] || req.headers.get('x-real-ip') || 'unknown').trim()
}

/* ── Turnstile ─────────────────────────────────────────────────────────── */
export async function turnstileOk(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.warn('spam-guard: TURNSTILE_SECRET_KEY not set, Turnstile check skipped')
    return true
  }
  if (typeof token !== 'string' || !token) return false
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    })
    const out = (await res.json()) as { success?: boolean }
    return out.success === true
  } catch (err) {
    console.error('spam-guard: Turnstile verify failed', err)
    return false
  }
}

/* ── Validation helpers ────────────────────────────────────────────────── */
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const LINK_RE = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|io|ru|xyz|top|info|biz|co|me|link|click|online|site)\b)/i

/** Names, companies and subjects never need a URL in them. */
export function hasLink(s: string): boolean {
  return LINK_RE.test(s)
}

/** A message that is mostly URLs (or packed with them) is spam. */
export function mostlyLinks(s: string): boolean {
  const urls = s.match(/(https?:\/\/|www\.)\S+/gi) ?? []
  if (urls.length >= 3) return true
  if (!urls.length) return false
  const urlChars = urls.join('').length
  return urlChars / Math.max(s.replace(/\s+/g, '').length, 1) > 0.5
}

export function clean(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
  )
}
