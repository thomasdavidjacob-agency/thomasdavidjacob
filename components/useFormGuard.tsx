'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Script from 'next/script'

// Public site key, safe to expose. Without it the widget doesn't render and the
// server skips Turnstile (it only enforces when TURNSTILE_SECRET_KEY is set).
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string
      reset: (id?: string) => void
    }
  }
}

/**
 * Client half of lib/spam-guard.ts. Fetches a signed time token on mount and renders
 * Cloudflare Turnstile. Spread `guardFields()` into the POST body; render `widget`
 * inside the form.
 */
export function useFormGuard() {
  const [formToken, setFormToken] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const el = useRef<HTMLDivElement>(null)
  const id = useRef<string | null>(null)

  const loadToken = useCallback(() => {
    fetch('/api/form-token', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d: { token?: string }) => setFormToken(d.token ?? ''))
      .catch(() => setFormToken(''))
  }, [])

  useEffect(loadToken, [loadToken])

  const render = useCallback(() => {
    if (!SITE_KEY || !window.turnstile || !el.current || id.current) return
    id.current = window.turnstile.render(el.current, {
      sitekey: SITE_KEY,
      theme: 'dark',
      callback: (t: string) => setTurnstileToken(t),
      'error-callback': () => setTurnstileToken(''),
      'expired-callback': () => setTurnstileToken(''),
    })
  }, [])

  // Script may already be loaded by another form on the page.
  useEffect(() => {
    if (SITE_KEY && window.turnstile) render()
  }, [render])

  /** Call after a failed submit so the visitor can try again. */
  const reset = useCallback(() => {
    if (id.current && window.turnstile) window.turnstile.reset(id.current)
    setTurnstileToken('')
    loadToken()
  }, [loadToken])

  const needsChallenge = Boolean(SITE_KEY) && !turnstileToken

  const widget = SITE_KEY ? (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={render}
      />
      <div ref={el} className="min-h-[65px]" />
    </>
  ) : null

  const guardFields = () => ({ formToken, turnstileToken })

  return { widget, guardFields, needsChallenge, reset }
}
