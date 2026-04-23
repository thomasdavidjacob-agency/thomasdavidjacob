'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-zinc-400 text-lg">We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-2 tracking-wide">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-2 tracking-wide">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-zinc-300 mb-2 tracking-wide">Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="How can we help you?"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-zinc-300 mb-2 tracking-wide">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-400 hover:bg-amber-500 active:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl transition-all tracking-widest uppercase text-sm hover:scale-[1.01]"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
