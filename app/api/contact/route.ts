import { NextRequest } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'Thomas David Jacob <hello@thomasdavidjacob.com>',
      replyTo: email,
      to: 'hello@thomasdavidjacob.com',
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
