import { NextRequest } from 'next/server'
import { Resend } from 'resend'
import {
  EMAIL_RE,
  clean,
  clientIp,
  escapeHtml,
  hasLink,
  mostlyLinks,
  rateLimited,
  turnstileOk,
  verifyFormToken,
} from '@/lib/spam-guard'

/* Only accept submissions that originate from our own site. */
const ALLOWED_HOSTS = ['thomasdavidjacob.com', 'www.thomasdavidjacob.com']

function originAllowed(request: NextRequest): boolean {
  const origin = request.headers.get('origin') || request.headers.get('referer') || ''
  if (!origin) return false
  try {
    const host = new URL(origin).hostname
    if (host === 'localhost' || host === '127.0.0.1') return true // local dev
    if (host.endsWith('-thomasdavidjacob-agencys-projects.vercel.app')) return true // previews
    return ALLOWED_HOSTS.includes(host)
  } catch {
    return false
  }
}

// Bots get a fake success so they move on instead of retrying.
const fakeOk = () => Response.json({ success: true })

export async function POST(request: NextRequest) {
  try {
    if (!originAllowed(request)) {
      return Response.json({ error: 'Forbidden.' }, { status: 403 })
    }

    const ip = clientIp(request)
    if (rateLimited(`contact:${ip}`)) {
      return Response.json(
        { error: 'Too many messages from this connection. Please try again later.' },
        { status: 429 },
      )
    }

    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>

    // 1. Honeypot.
    if (clean(body.website, 200)) return fakeOk()

    // 2. Signed time token: missing, forged or too fast = bot.
    if (!verifyFormToken(body.formToken)) return fakeOk()

    // 3. Turnstile.
    if (!(await turnstileOk(body.turnstileToken, ip))) {
      return Response.json({ error: 'Verification failed. Please try again.' }, { status: 400 })
    }

    // 4. Validation.
    const name = clean(body.name, 100)
    const email = clean(body.email, 200)
    const subject = clean(body.subject, 150)
    const message = clean(body.message, 5000)

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    if (hasLink(name) || hasLink(subject)) {
      return Response.json({ error: 'Please remove links from your name and subject.' }, { status: 400 })
    }
    if (mostlyLinks(message)) return fakeOk()

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Thomas David Jacob <hello@thomasdavidjacob.com>',
      replyTo: email,
      to: process.env.LEAD_TO_EMAIL || 'thomasdavidjacob@gmail.com',
      subject: `[Contact Form] ${subject.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <h2 style="color:#f59e0b;font-family:sans-serif">New Contact Form Submission</h2>
        <p style="font-family:sans-serif"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="font-family:sans-serif"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="font-family:sans-serif"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p style="font-family:sans-serif"><strong>Message:</strong></p>
        <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return Response.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
  }
}
