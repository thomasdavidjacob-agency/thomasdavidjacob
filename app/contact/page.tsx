import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Thomas David Jacob | Oregon City, OR',
  description:
    'Get in touch with Thomas+David+Jacob. Serving all of the Portland metro — Oregon City, West Linn, Lake Oswego, Beaverton, Milwaukie & across Oregon.',
}

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@thomasdavidjacob.com',
    href: 'mailto:hello@thomasdavidjacob.com',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Response Time',
    value: 'Within 24 business hours',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Business Hours',
    value: 'Monday–Friday\n8:00 AM – 6:00 PM PST',
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const quickReasons = [
  'Request a website quote',
  'Ask about SEO services',
  'Discuss a marketing strategy',
  'General questions',
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/hero-contact.jpg"
          alt="Contact Thomas David Jacob agency"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-amber-500/6 blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
              Contact Us
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Let&apos;s Get
            <br />
            <span className="text-amber-400">In Touch</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            Ready to grow your business? Send us a message and we&apos;ll be in
            touch within 24 hours. We serve all of the Portland metro area and
            Oregon statewide.
          </p>
        </div>
      </section>

      {/* ── Contact Layout ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

            {/* ─ Form ─ */}
            <div className="md:col-span-3">
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-black text-white mb-2">Send Us a Message</h2>
                <p className="text-zinc-400 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within one business day.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* ─ Info sidebar ─ */}
            <div className="md:col-span-2 space-y-5">

              {/* Team image */}
              <div className="relative h-52 rounded-2xl overflow-hidden border border-zinc-800">
                <Image
                  src="/images/Customer_Service.jpg"
                  alt="Dedicated client support specialist"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Contact details */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-5">Contact Information</h3>
                <div className="space-y-5">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-9 h-9 bg-amber-400/10 border border-amber-400/20 rounded-lg flex items-center justify-center mt-0.5">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-1">
                          {detail.label}
                        </p>
                        {'href' in detail ? (
                          <a
                            href={detail.href}
                            className="text-amber-400 hover:text-amber-300 text-sm leading-relaxed transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-zinc-200 text-sm leading-relaxed whitespace-pre-line">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What can we help with */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-5">Common Reasons to Reach Out</h3>
                <ul className="space-y-3">
                  {quickReasons.map((reason) => (
                    <li key={reason} className="flex items-center gap-3 text-sm text-zinc-300">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-amber-400/15 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service area */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-3">Service Area</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Based in Oregon City, OR — we serve businesses across the entire Portland metro
                  including West Linn, Lake Oswego, Milwaukie, Gladstone, Wilsonville, Beaverton,
                  Hillsboro, and all of Oregon.
                </p>
              </div>

              {/* Promise card */}
              <div className="bg-amber-400/5 border border-amber-400/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Our Promise</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      No spam. No pushy sales calls. Just an honest conversation about your business and whether we&apos;re the right fit to help.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
