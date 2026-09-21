import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AccordionFAQ from '../../components/AccordionFAQ'
import { studioServices, getStudioService } from '../../../lib/services'

const BASE_URL = 'https://thomasdavidjacob.com'

export const dynamicParams = false

export function generateStaticParams() {
  return studioServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getStudioService(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${BASE_URL}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BASE_URL}/services/${service.slug}`,
      siteName: 'Thomas David Jacob',
      images: [{ url: `${BASE_URL}/images/services/${service.slug}.webp` }],
      locale: 'en_US',
      type: 'website',
    },
  }
}

const industryMeta = [
  {
    key: 'mortgage',
    label: 'Mortgage Professionals',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    key: 'realEstate',
    label: 'Realtors & Brokers',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    key: 'weddings',
    label: 'Wedding & Event Pros',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    key: 'local',
    label: 'Local Businesses',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
] as const

function ArrowIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-amber-400/15 flex items-center justify-center">
      <svg className="w-2.5 h-2.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

export default async function StudioServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getStudioService(slug)
  if (!service) notFound()

  // Three other studio services, continuing in card order and wrapping around.
  const index = studioServices.findIndex((s) => s.slug === slug)
  const related = [1, 2, 3].map((n) => studioServices[(index + n) % studioServices.length])

  const url = `${BASE_URL}/services/${service.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.metaDescription,
        url,
        provider: {
          '@type': 'ProfessionalService',
          name: 'Thomas+David+Jacob',
          url: BASE_URL,
          areaServed: 'Oregon',
        },
        areaServed: [
          { '@type': 'State', name: 'Oregon' },
          { '@type': 'City', name: 'Portland' },
          { '@type': 'City', name: 'Oregon City' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.title} Packages`,
          itemListElement: service.tiers.map((tier) => ({
            '@type': 'Offer',
            name: `${service.title} — ${tier.name}`,
            description: tier.features.join('; '),
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Services', item: `${BASE_URL}/services` },
          { '@type': 'ListItem', position: 2, name: service.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-amber-500/10 blur-[140px]" />
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
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 text-sm font-bold tracking-wide mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Services
          </Link>
          <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-6">
            {service.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            {service.headline[0]}
            <br />
            <span className="text-amber-400">{service.headline[1]}</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            {service.heroCopy}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full text-base transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/25"
            >
              {service.cta}
            </Link>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white font-bold px-6 py-4 transition-colors"
            >
              See the Packages
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ── Feature Image ── */}
      <section className="px-6 mt-4 md:-mt-16 relative z-10">
        <div className="max-w-5xl mx-auto relative aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-amber-400/5">
          <Image
            src={`/images/services/${service.slug}.webp`}
            alt={`${service.title} illustration`}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-16 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              The Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              {service.problemHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.problems.map((problem, i) => (
              <div
                key={problem.title}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/25 transition-colors"
              >
                <p className="text-4xl font-black text-amber-400/80 mb-4">0{i + 1}</p>
                <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-16 md:py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              What&apos;s Included
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Inside the Package
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything below is built with AI tools for speed and finished by a human for quality. You approve the work before anything goes public.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.includes.map((item) => (
              <div
                key={item.title}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckIcon />
                  <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm pl-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="packages" className="py-16 md:py-28 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Packages
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Pick Your Starting Point
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every package is monthly and scoped to your business. Start where it makes sense and move up when you&apos;re ready.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {service.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  tier.featured
                    ? 'bg-amber-400/[0.06] border-2 border-amber-400/50 shadow-xl shadow-amber-400/10'
                    : 'bg-[#0d0d0d] border border-zinc-800'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 text-[10px] font-black tracking-[0.2em] uppercase bg-amber-400 text-black px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-black text-white mb-1">{tier.name}</h3>
                <p className="text-sm text-zinc-400 mb-6">{tier.bestFor}</p>
                <p className="text-3xl font-black text-amber-400 mb-1">{tier.price ?? 'Custom quote'}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-8">
                  {tier.price ? 'per month' : 'scoped to your business'}
                </p>
                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 font-black px-7 py-3.5 rounded-full transition-all text-sm tracking-wide ${
                    tier.featured
                      ? 'bg-amber-400 hover:bg-amber-300 text-black hover:scale-105 shadow-lg shadow-amber-400/20'
                      : 'border border-zinc-700 hover:border-amber-400/60 text-white hover:text-amber-400'
                  }`}
                >
                  Get {tier.name} Pricing
                  <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-16 md:py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Who It&apos;s For
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Built for Relationship Businesses
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We work with professionals whose business runs on trust and referrals — and we know the rules each industry plays by.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryMeta.map((industry) => (
              <div
                key={industry.key}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/25 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{industry.label}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">{service.industries[industry.key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-16 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              From Kickoff to Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div
                key={step.title}
                className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 overflow-hidden hover:border-amber-400/25 transition-colors group"
              >
                <span className="absolute -top-3 right-4 text-[7rem] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-amber-400/5 transition-colors">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <span className="inline-block text-xs text-amber-400 font-bold tracking-[0.3em] uppercase border border-amber-400/30 rounded-full px-3 py-1 mb-5">
                    Step 0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Straight Answers</h2>
          </div>

          {service.guardrail && (
            <div className="flex gap-4 bg-amber-400/5 border border-amber-400/20 rounded-2xl p-6 mb-10">
              <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider mb-2">How We Keep It Clean</p>
                <p className="text-zinc-400 leading-relaxed text-sm">{service.guardrail}</p>
              </div>
            </div>
          )}

          <AccordionFAQ faqs={service.faqs} />
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="py-16 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Pairs Well With
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">More From the Studio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-400/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-[16/9] border-b border-zinc-800 overflow-hidden">
                  <Image
                    src={`/images/services/${item.slug}.webp`}
                    alt={`${item.title} illustration`}
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{item.cardDescription}</p>
                  <span className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm">
                    View Package
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-amber-400/5 border border-amber-400/15 rounded-2xl p-10 md:p-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Let&apos;s Scope Your Package
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
              Tell us about your business and goals. We&apos;ll recommend the right package and send a clear quote — no pressure, no upsell.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/20"
            >
              {service.cta}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
