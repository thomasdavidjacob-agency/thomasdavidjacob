import { NextRequest } from 'next/server'
import { Resend } from 'resend'

/* Only accept submissions that originate from our own site. */
const ALLOWED_HOSTS = ['thomasdavidjacob.com', 'www.thomasdavidjacob.com']

function originAllowed(request: NextRequest): boolean {
  const origin = request.headers.get('origin') || request.headers.get('referer') || ''
  if (!origin) return false
  try {
    const host = new URL(origin).hostname
    if (host === 'localhost' || host === '127.0.0.1') return true // local dev
    return ALLOWED_HOSTS.includes(host)
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Block bots that POST straight to the API (no/foreign Origin).
    if (!originAllowed(request)) {
      return Response.json({ error: 'Forbidden.' }, { status: 403 })
    }

    const { name, email, subject, message, website, t, turnstileToken } = await request.json()

    // Honeypot: humans never see/fill `website`. If it's set, silently accept
    // (return success so the bot thinks it worked) but send nothing.
    if (typeof website === 'string' && website.trim() !== '') {
      return Response.json({ success: true })
    }

    // Timing: real people take more than a couple seconds to fill the form.
    // A missing or too-fast timestamp is a bot — silently drop it.
    const elapsed = typeof t === 'number' ? Date.now() - t : NaN
    if (!Number.isFinite(elapsed) || elapsed < 2000 || elapsed > 1000 * 60 * 60 * 24) {
      return Response.json({ success: true })
    }

    // Cloudflare Turnstile — active ONLY when TURNSTILE_SECRET_KEY is set.
    // Until then this block is skipped and the form works on the other guards.
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (turnstileSecret) {
      if (typeof turnstileToken !== 'string' || !turnstileToken) {
        return Response.json({ error: 'Please complete the verification.' }, { status: 400 })
      }
      const verifyRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ secret: turnstileSecret, response: turnstileToken }),
        }
      )
      const outcome = (await verifyRes.json()) as { success?: boolean }
      if (!outcome.success) {
        return Response.json({ error: 'Verification failed. Please try again.' }, { status: 400 })
      }
    }

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Basic email sanity check.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'Thomas David Jacob <hello@thomasdavidjacob.com>',
      replyTo: email,
      to: 'thomasdavidjacob@gmail.com',
      subject: `[Contact Form] ${subject}`,
      html: `
        <h2 style="color:#f59e0b;font-family:sans-serif">New Contact Form Submission</h2>
        <p style="font-family:sans-serif"><strong>Name:</strong> ${name}</p>
        <p style="font-family:sans-serif"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p style="font-family:sans-serif"><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p style="font-family:sans-serif"><strong>Message:</strong></p>
        <p style="font-family:sans-serif;white-space:pre-wrap">${message}</p>
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
