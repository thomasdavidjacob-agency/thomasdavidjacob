import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Web Design, SEO & Marketing Services | Oregon City',
  description:
    'WordPress web design, SEO & digital marketing in Oregon City. Serving Portland, Beaverton, Hillsboro, Milwaukie & across Oregon.',
}

const coreServices = [
  {
    title: 'WordPress Web Design',
    tagline: 'Websites that work as hard as you do.',
    description:
      'Your website is the foundation of everything. It\'s where first impressions are formed, trust is built, and customers are converted. We design and develop custom WordPress websites that don\'t just look premium — they\'re engineered to rank on Google, load fast, and turn visitors into paying customers. No templates. No shortcuts. Every site is built from scratch to match your brand and goals — whether you\'re in Oregon City, Portland, or anywhere across the state.',
    image: '/images/services.jpg',
    imageAlt: 'Professional web design and development',
    features: [
      'Custom design — zero templates',
      'Mobile-first, responsive layout',
      'Page speed optimization',
      'SEO-ready architecture',
      'ADA accessibility compliance',
      'SSL, security hardening',
      'Contact forms & lead capture',
      'Google Analytics integration',
      'Training & handoff included',
      'Ongoing support available',
    ],
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Search Engine Optimization',
    tagline: 'Rank higher. Get found. Grow faster.',
    description:
      'Ranking on Google isn\'t luck — it\'s a science. Our SEO process combines deep keyword research, technical site optimization, content strategy, and authoritative link building into a cohesive system that compounds over time. We focus on the keywords your ideal customers actually search for, not vanity terms. The result: more organic traffic, more qualified leads, and a lower cost of customer acquisition — for businesses from Portland and Beaverton to Hillsboro and beyond.',
    image: '/images/search_keyboard.jpg',
    imageAlt: 'Search engine optimization services',
    features: [
      'Comprehensive keyword research',
      'Competitor gap analysis',
      'Technical SEO audit & fixes',
      'On-page optimization',
      'Local SEO & Google Business',
      'Content strategy & creation',
      'Link building & outreach',
      'Core Web Vitals optimization',
      'Monthly rank tracking reports',
      'Transparent ROI reporting',
    ],
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    title: 'Marketing and Sales',
    tagline: 'Turn traffic into revenue — at scale.',
    description:
      'Traffic means nothing without conversion. Our marketing and sales services bridge the gap between getting found and getting paid. From targeted PPC campaigns that put you in front of high-intent buyers, to email sequences that nurture leads until they\'re ready to buy, to social media strategies that build authority in your niche — we build integrated systems that generate consistent, predictable revenue growth for Oregon businesses of all sizes.',
    image: '/images/AI_Phone.jpg',
    imageAlt: 'AI powered digital marketing tools',
    features: [
      'Google & Meta PPC advertising',
      'Email marketing automation',
      'Lead funnel design & build',
      'Social media content strategy',
      'Retargeting campaigns',
      'Conversion rate optimization',
      'Landing page design',
      'CRM setup & integration',
      'A/B testing & optimization',
      'Monthly performance reporting',
    ],
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

const aLaCarteServices = [
  {
    title: 'Social Media Marketing',
    description:
      'Consistent, on-brand content that builds your audience, drives engagement, and positions you as the go-to authority in your market. Platform strategy, content creation, and community management — done for you.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: 'ChatGPT Prompts',
    description:
      'Custom, professionally crafted ChatGPT prompt libraries tailored to your business. Accelerate content creation, customer service scripts, sales copy, and internal workflows with AI prompts that actually produce results.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Shopify eCommerce',
    description:
      'Custom Shopify storefronts designed for conversion. Product page optimization, checkout flow improvement, app integrations, and performance tuning — everything you need to sell more online.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/hero-about2.jpg"
          alt="Web design and digital services workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-amber-500/6 blur-[120px]" />
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
              What We Offer
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Services Built to
            <br />
            <span className="text-amber-400">Drive Real Growth</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
            From your first website to full-scale digital marketing — we have everything
            businesses in Portland, Beaverton, Hillsboro, Milwaukie, Oregon City, and
            across Oregon need to dominate online.
          </p>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Core Offerings
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Our Three Pillars
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Each service is a complete system — not a one-time task.
            </p>
          </div>

          <div className="space-y-8">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-amber-400/25 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Icon + title */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400/15 transition-colors">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-2">
                      {service.tagline}
                    </p>
                    <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8">{service.description}</p>

                    <div className="relative h-52 rounded-xl overflow-hidden mb-8 border border-zinc-700/40">
                      <Image src={service.image} alt={service.imageAlt} fill className="object-cover" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-amber-400/15 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black px-7 py-3.5 rounded-full transition-all hover:scale-105 text-sm tracking-wide shadow-lg shadow-amber-400/20"
                    >
                      Get Pricing
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À La Carte ── */}
      <section className="py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Additional Services
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              À La Carte
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Specialized services to complement your core digital strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aLaCarteServices.map((service) => (
              <div
                key={service.title}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400/15 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-7 flex-1">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors group/btn"
                >
                  Get Pricing
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-amber-400/5 border border-amber-400/15 rounded-2xl p-10 md:p-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Not Sure Where to Start?
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Let&apos;s Figure It Out Together
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
              Tell us about your business and budget. We&apos;ll recommend the right starting point — no pressure, no upsell.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
