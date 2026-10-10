// One template renders every vertical overview page from lib/verticals.ts.
// Only live verticals without an existing page get one; anything else 404s,
// so no "coming soon" pages ever ship.

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProofCard from '@/components/ProofCard'
import { getVertical, pageVerticals } from '@/lib/verticals'
import { BASE_URL, ORG_ID, organization } from '@/lib/entity'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return pageVerticals.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const v = getVertical(slug)
  if (!v?.page) return {}
  return {
    title: `${v.name} Marketing, Websites & SEO | Thomas+David+Jacob`,
    description: v.page.summary,
    alternates: { canonical: `${BASE_URL}/industries/${v.slug}` },
  }
}

const arrow = (
  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  const v = getVertical(slug)
  if (!v?.page) notFound()
  const p = v.page
  const [before, after] = p.headline.split(p.accent)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'Service',
        name: `${v.name} marketing & web design`,
        description: p.summary,
        url: `${BASE_URL}/industries/${v.slug}`,
        provider: { '@id': ORG_ID },
        audience: { '@type': 'BusinessAudience', name: v.name },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-[640px] h-[640px] rounded-full bg-amber-500/[0.08] blur-[140px] animate-aurora" />
          <div className="absolute inset-0 bg-grid" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">{p.eyebrow}</p>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6 max-w-4xl">
            {before}
            <span className="text-amber-400">{p.accent}</span>
            {after}
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">{p.summary}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-9 py-4 rounded-full transition-all hover:scale-[1.03] shadow-lg shadow-amber-400/20"
            >
              Get Started
            </Link>
            {p.product && (
              <Link
                href={p.product.href}
                className="inline-block border border-amber-400/40 hover:bg-amber-400/10 text-amber-400 font-bold px-8 py-4 rounded-full transition-colors"
              >
                Explore {p.product.name}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── Who we work with ── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Who We Work With</h2>
          <ul className="flex flex-wrap gap-3">
            {p.businesses.map((b) => (
              <li key={b.name}>
                {b.href ? (
                  <Link
                    href={b.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/[0.06] px-5 py-2.5 text-sm text-zinc-100 hover:border-amber-400/60 hover:text-amber-400 transition-colors"
                  >
                    {b.name} {arrow}
                  </Link>
                ) : (
                  <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-zinc-200">
                    {b.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What we build ── */}
      <section className="px-6 py-20 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-10">What We Build</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {p.offers.map((o) => (
              <div key={o.title} className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-7 hover:border-amber-400/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{o.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product callout ── */}
      {p.product && (
        <section className="px-6 pt-20">
          <div className="max-w-5xl mx-auto rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 to-transparent p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">{p.product.name}</h2>
            <p className="text-zinc-300 max-w-2xl leading-relaxed mb-5">{p.product.blurb}</p>
            <Link href={p.product.href} className="group inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300">
              See what&apos;s included {arrow}
            </Link>
          </div>
        </section>
      )}

      {/* ── Proof: only real, live client work ── */}
      {p.proof && p.proof.length > 0 && (
        <section className="px-6 pt-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-6">Recent Work</h2>
            <div className="grid gap-6">
              {p.proof.map((w) => (
                <ProofCard key={w.client} client={w.client} body={w.note} href={w.href} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Closing CTA ── */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-amber-400/15 bg-amber-400/5 p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Talk?</h2>
          <p className="text-zinc-400 text-lg mb-8">Tell us about your business and we&apos;ll map out the right system.</p>
          <Link
            href="/contact"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-400/20"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
