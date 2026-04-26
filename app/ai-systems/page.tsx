import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'AI Systems Architecture | Business Automation | Oregon',
  description:
    'Thomas David Jacob designs and implements AI systems that automate Oregon businesses, generate leads, and scale revenue. Serving Portland, Oregon City and beyond.',
}

const aiServices = [
  {
    title: 'AI Workflow Automation',
    description:
      'We map and automate your most time-consuming business processes. Connect your CRM, email, calendar, and invoicing into one seamless automated system.',
    price: '$1,500',
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Custom AI Assistant Development',
    description:
      'A branded AI assistant trained specifically on your business — handling customer inquiries, qualifying leads, and booking appointments automatically.',
    price: '$2,000',
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'AI Lead Generation Systems',
    description:
      'Automated lead capture, follow-up sequences, and pipeline management powered by AI. Never miss a lead again.',
    price: '$2,500',
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'AI Content & Marketing Systems',
    description:
      'Automated content creation, social media scheduling, email campaigns, and SEO pipelines — all running on autopilot.',
    price: '$1,500',
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Full AI Business Transformation',
    description:
      'A complete audit and overhaul of your business operations using AI. We identify every opportunity for automation and implement it end to end.',
    price: '$5,000',
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const packages = [
  {
    name: 'AI Starter',
    price: '$1,500',
    popular: false,
    items: [
      'One custom automation workflow',
      '2 week implementation',
      '30 days support',
    ],
    perfect: 'Businesses new to AI automation',
  },
  {
    name: 'AI Growth',
    price: '$3,500',
    popular: true,
    items: [
      '3 automation workflows',
      'Custom AI assistant',
      '60 day implementation',
      '60 days support',
    ],
    perfect: 'Growing businesses ready to scale',
  },
  {
    name: 'AI Transform',
    price: '$7,500',
    popular: false,
    items: [
      'Full business AI audit',
      'Unlimited workflow automations',
      'Custom AI assistant',
      '90 day implementation',
      '90 days ongoing support',
      'Monthly retainer option available',
    ],
    perfect: 'Businesses serious about AI transformation',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We audit your current business operations and identify every opportunity for AI automation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We design a custom AI architecture blueprint specifically for your business.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We implement the systems, test everything, and train your team.',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'We monitor performance and continuously improve your AI systems.',
  },
]

const trustPoints = [
  {
    title: 'We speak business, not tech',
    description: 'No jargon, no complexity. We translate AI into plain outcomes: time saved, revenue gained, tasks eliminated.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: 'We build systems that keep working without us',
    description: 'Every system we deliver is documented, tested, and designed to run independently — not dependent on us showing up every month.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'We measure everything — you see the ROI clearly',
    description: 'Hours saved, leads captured, revenue attributed. Every system ships with tracking so you know exactly what the investment is returning.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function AISystemsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/dark_laptop_desktop.jpg"
          alt="AI systems architecture dark laptop workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-amber-500/8 blur-[140px]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-6">
            AI Systems Architecture
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            AI Systems
            <br />
            <span className="text-amber-400">Architecture</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
            We design and implement AI-powered systems that automate your business, generate leads, and scale your revenue — without you needing to understand the technology.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full text-base transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/25"
          >
            Get Your Free AI Audit
          </Link>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-16 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Intelligent Systems, Built for Your Business
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Behind the scenes, we architect intelligent systems that work for your business 24/7. From automating repetitive tasks to building custom AI assistants — we handle the technology so you can focus on growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <div
                key={service.title}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 bg-amber-400/8 border border-amber-400/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400/15 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed flex-1 mb-6">{service.description}</p>
                <div className="border-t border-zinc-800 pt-5">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Starting at</span>
                  <p className="text-2xl font-black text-amber-400 mt-1">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-16 md:py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Packages
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Choose Your AI Package
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
              Flat-rate packages with everything included. No surprises, no hourly billing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular
                    ? 'mt-6 md:mt-0 bg-amber-400/5 border-2 border-amber-400/50 hover:border-amber-400'
                    : 'bg-[#0d0d0d] border border-zinc-800 hover:border-amber-400/30'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-black text-xs font-black tracking-[0.2em] uppercase px-5 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-3">Starting at</p>
                  <p className="text-4xl font-black text-amber-400 mt-1">{pkg.price}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-amber-400/15 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-zinc-800 pt-6 mb-6">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Perfect for</p>
                  <p className="text-sm text-zinc-400">{pkg.perfect}</p>
                </div>

                <Link
                  href="/contact"
                  className={`block text-center font-black py-3.5 rounded-full text-sm tracking-wide transition-all hover:scale-[1.02] ${
                    pkg.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-black'
                      : 'border border-amber-400/40 text-amber-400 hover:bg-amber-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              How We Build Your AI System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-10 overflow-hidden hover:border-amber-400/25 transition-colors group"
              >
                <span className="absolute -top-4 right-6 text-[9rem] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-amber-400/5 transition-colors">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <span className="inline-block text-xs text-amber-400 font-bold tracking-[0.3em] uppercase border border-amber-400/30 rounded-full px-3 py-1 mb-5">
                    Step {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="py-16 md:py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Why Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Why Businesses Choose Us for AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/25 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-400/8 border border-amber-400/15 rounded-xl flex items-center justify-center mb-6">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{point.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-6">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Ready to Put AI to Work<br className="hidden sm:block" /> in Your Business?
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed mb-10">
            Book a free 30-minute AI audit and discover exactly how AI can save you time and make you more money.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-12 py-4 rounded-full text-base transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/25"
          >
            Book Your Free AI Audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
