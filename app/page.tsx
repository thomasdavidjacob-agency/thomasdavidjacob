import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Digital Creative Agency | Oregon City, OR | Thomas David Jacob',
  description:
    'Full-service digital creative agency in Oregon City, OR. Web design, SEO & marketing for Portland, Lake Oswego, West Linn & all of Oregon.',
}

const steps = [
  {
    number: '01',
    title: 'We Understand Your Business',
    description:
      'We start with a deep-dive discovery session to understand your goals, target audience, competitive landscape, and current digital footprint. This intelligence shapes every decision we make — nothing is generic, everything is built for you.',
  },
  {
    number: '02',
    title: 'We Execute and Deliver Results',
    description:
      'With a clear strategy locked in, our team executes with precision — building high-converting websites, implementing technical SEO, and launching marketing campaigns that generate measurable growth and ROI you can see in your revenue.',
  },
]

const services = [
  {
    title: 'WordPress Web Design',
    description:
      'Custom WordPress websites engineered for speed, conversions, and top search rankings. Every site is mobile-first, ADA compliant, secure, and built to scale as your business grows.',
    features: ['Custom Design', 'Mobile-First', 'SEO-Ready Architecture', 'Speed Optimized'],
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Search Engine Optimization',
    description:
      'Data-driven SEO strategies that get your business to the top of Google. We drive high-intent organic traffic that converts into real customers — not just vanity metrics.',
    features: ['Keyword Research', 'Technical SEO', 'Link Building', 'Local SEO'],
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    ),
  },
  {
    title: 'Marketing and Sales',
    description:
      'Integrated digital marketing campaigns that transform your online presence into a revenue-generating machine. More leads, more qualified prospects, more closed deals.',
    features: ['PPC Advertising', 'Social Media', 'Email Marketing', 'Conversion Funnels'],
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/hero-home.jpg"
          alt="Digital creative agency workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-amber-500/6 blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Main_LogoWhite.png"
              alt="Thomas David Jacob Digital Creative Agency"
              width={200}
              height={60}
              className="w-[200px] h-auto"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
              Oregon City, OR — Est. 2020
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6">
            A Full-Service
            <br />
            <span className="text-amber-400">Digital Creative</span>
            <br />
            Agency
          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We build powerful websites, dominate search rankings, and create
            marketing systems that turn clicks into paying customers — for
            businesses across Oregon City, Portland, Lake Oswego, West Linn,
            and all of Oregon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full text-base transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/20"
            >
              Start Getting More Customers
            </Link>
            <Link
              href="#services"
              className="text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-full transition-all hover:bg-white/5"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Primary Objective ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Our Primary Objective
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
              We exist for one reason: to make your business measurably more
              successful online. From Oregon City to Portland and across the
              state, we help local businesses compete and win.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-10 overflow-hidden hover:border-amber-400/25 transition-colors group"
              >
                {/* Watermark number */}
                <span className="absolute -top-4 right-6 text-[9rem] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-amber-400/5 transition-colors">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <span className="inline-block text-xs text-amber-400 font-bold tracking-[0.3em] uppercase border border-amber-400/30 rounded-full px-3 py-1 mb-5">
                    Step {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Our Services
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
              Everything Oregon businesses need to dominate their local market
              and outpace the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 bg-amber-400/8 border border-amber-400/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400/15 transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-7 flex-1">
                  {service.description}
                </p>

                <ul className="space-y-2.5 border-t border-zinc-800 pt-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-amber-400/15 flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-amber-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Results ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Real Results
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Client Success Stories
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
              Real businesses. Real growth. Here&apos;s what happens when strategy meets execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Story 1 */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-amber-400/25 transition-colors flex flex-col">
              <div className="flex-1">
                <span className="inline-block text-xs text-amber-400 font-bold tracking-[0.3em] uppercase border border-amber-400/30 rounded-full px-3 py-1 mb-5">
                  Restaurant
                </span>
                <h3 className="text-2xl font-black text-white mb-4">
                  From Empty Tables to Fully Booked
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  A Portland-area restaurant owner running two locations — one in Portland, one in Beaverton — came to us frustrated. Business was inconsistent. Some nights packed, others painfully slow, with no reliable way to predict or drive traffic. We rebuilt his online presence with a conversion-focused website, local SEO targeting both locations, and a Google Business strategy that put him in front of hungry customers at exactly the right moment. Within 90 days, both locations saw a measurable increase in reservations and repeat customers. Today his restaurants run with confidence — not guesswork.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <blockquote className="text-white font-semibold text-lg leading-snug mb-3">
                  &ldquo;I stopped worrying about slow nights. The phone just rings now.&rdquo;
                </blockquote>
                <p className="text-amber-400 text-sm font-bold tracking-wide">
                  Restaurant Owner — Portland &amp; Beaverton, OR
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-amber-400/25 transition-colors flex flex-col">
              <div className="flex-1">
                <span className="inline-block text-xs text-amber-400 font-bold tracking-[0.3em] uppercase border border-amber-400/30 rounded-full px-3 py-1 mb-5">
                  Home Services
                </span>
                <h3 className="text-2xl font-black text-white mb-4">
                  Page One in Under 90 Days
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  A local plumber in the Portland metro area was doing good work but nobody could find him online. He was losing jobs to competitors who ranked higher on Google — not because they were better, but because they were more visible. We built him a clean, fast website and launched a targeted local SEO campaign focused on his specific service area. Within a few months he was ranking on the first page of Google for his primary service keywords. His phone started ringing with qualified leads — people who needed a plumber right now, in his area.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <blockquote className="text-white font-semibold text-lg leading-snug mb-3">
                  &ldquo;I went from invisible to page one. Best investment I made in my business.&rdquo;
                </blockquote>
                <p className="text-amber-400 text-sm font-bold tracking-wide">
                  Licensed Plumber — Portland Metro, OR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Let&apos;s Work Together
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Ready to grow your business? Send us a message and we&apos;ll get
              back to you within 24 hours.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
