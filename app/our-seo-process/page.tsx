import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Our SEO Process | Rank Higher in Oregon | Thomas David Jacob',
  description:
    'Our proven SEO methodology helps Oregon businesses rank on Google. Serving Portland metro, Oregon City, Lake Oswego, Wilsonville & beyond.',
}

const steps = [
  {
    number: '01',
    title: 'Research & Discovery',
    subtitle: 'Know the battlefield before the battle.',
    description:
      'Every successful SEO campaign starts with intelligence. We spend significant time at this stage because mistakes here compound downstream. We conduct a deep analysis of your current site health, your competitors\' strategies, and the full keyword landscape for your industry and location — including local Oregon searches and Portland metro keyword opportunities. We identify which terms have the highest commercial intent — meaning people searching them are ready to buy — and we uncover gaps your competitors have missed.',
    deliverables: [
      'Full site technical SEO audit',
      'Competitor keyword & backlink analysis',
      'Keyword universe mapping (volume, intent, difficulty)',
      'Local search landscape analysis',
      'Content gap identification',
      'Priority opportunity ranking',
    ],
  },
  {
    number: '02',
    title: 'Strategy Development',
    subtitle: 'A clear roadmap, not a collection of tactics.',
    description:
      'With the research complete, we build a comprehensive strategy document that outlines exactly what we\'ll do, in what order, and why. This isn\'t a generic "SEO plan" — it\'s a custom blueprint for your specific business, goals, and competitive landscape. You\'ll know precisely what\'s being done and what outcome to expect from each initiative before we execute a single tactic.',
    deliverables: [
      'Custom content strategy & editorial calendar',
      'Technical fix prioritization roadmap',
      'Link building target identification',
      'On-page optimization plan by page',
      'Local citation & Google Business strategy',
      'Timeline with milestones & expected outcomes',
    ],
  },
  {
    number: '03',
    title: 'Execution',
    subtitle: 'Strategy without execution is daydreaming.',
    description:
      'This is where the work happens. Our team executes the strategy with precision and consistency. On-page optimization covers everything from title tags and meta descriptions to internal linking architecture and content structure. We create or optimize content targeting your priority keywords. On the technical side, we resolve Core Web Vitals issues, fix crawl errors, and optimize site structure. Our outreach team builds high-authority backlinks through legitimate, white-hat methods that pass Google\'s scrutiny.',
    deliverables: [
      'On-page SEO optimization (all target pages)',
      'Technical fixes — speed, crawlability, structure',
      'Content creation & optimization',
      'Internal linking improvements',
      'Google Business Profile optimization',
      'Local citation building & cleanup',
      'White-hat link building & outreach',
      'Schema markup implementation',
    ],
  },
  {
    number: '04',
    title: 'Results Tracking & Reporting',
    subtitle: 'Transparency in everything we do.',
    description:
      'SEO is a long game, but that doesn\'t mean you should be left in the dark. We provide monthly reporting that shows exactly where your rankings stand, how organic traffic is trending, and what actions we took during the month. Every report is tied back to business outcomes — not just keyword positions. When something\'s working, we double down. When something needs adjustment, we adapt fast. You always know what\'s happening and why.',
    deliverables: [
      'Monthly keyword rank tracking report',
      'Google Analytics traffic analysis',
      'Google Search Console insights',
      'Backlink profile monitoring',
      'Conversion & lead tracking',
      'Next-month action plan',
      'Strategic review calls (quarterly)',
    ],
  },
]

const stats = [
  { value: '3–6 mo', label: 'Average time to first page rankings' },
  { value: '300%+', label: 'Organic traffic increase at 12 months*' },
  { value: '100%', label: 'White-hat only — zero algorithm risk' },
]

export default function OurSEOProcessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/hero-service.jpg"
          alt="Strategic SEO process planning workspace"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
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
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
              Methodology
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Our SEO
            <br />
            <span className="text-amber-400">Process</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
            A transparent, step-by-step look at how we take Oregon businesses from
            invisible to page one on Google — and keep them there. Serving the
            Portland metro, Oregon City, Lake Oswego, Wilsonville, and statewide.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-10 px-6 border-y border-zinc-800/50 bg-zinc-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="py-4">
                <p className="text-3xl md:text-4xl font-black text-amber-400 mb-1">{stat.value}</p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-600 text-xs text-center mt-6 max-w-2xl mx-auto leading-relaxed">
            * Results vary by industry and market competitiveness. Figures reflect performance in lower-to-mid competition markets. Highly competitive industries may see different timelines and growth rates.
          </p>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              The Four Phases
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              How We Do It
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              No black boxes. No vague promises. Here is exactly what we do and why.
            </p>
          </div>

          <div className="relative h-72 rounded-2xl overflow-hidden mb-16 border border-zinc-800/50">
            <Image
              src="/images/SEOProcess.jpg"
              alt="SEO analytics and data strategy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.number} className="relative md:pl-24">
                  {/* Step number marker */}
                  <div className="hidden md:flex absolute left-0 top-8 w-16 h-16 rounded-full bg-[#0a0a0a] border-2 border-amber-400 items-center justify-center z-10">
                    <span className="text-amber-400 text-xs font-black">{step.number}</span>
                  </div>

                  <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-amber-400/25 transition-colors">
                    {/* Mobile step badge */}
                    <div className="md:hidden inline-flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-400 text-xs font-black">
                        {step.number}
                      </span>
                      <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">
                        Phase {i + 1}
                      </span>
                    </div>

                    <div className="hidden md:block mb-2">
                      <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">
                        Phase {i + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{step.title}</h3>
                    <p className="text-amber-400/80 text-sm italic mb-5">{step.subtitle}</p>
                    <p className="text-zinc-400 leading-relaxed mb-8">{step.description}</p>

                    <div>
                      <p className="text-zinc-300 text-sm font-bold uppercase tracking-widest mb-4">
                        Deliverables
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-400">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-amber-400/15 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-amber-400/5 border border-amber-400/15 rounded-2xl p-10 md:p-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Ready to Rank?
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Start Your SEO Journey Today
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
              Let&apos;s audit your current SEO, identify your biggest opportunities in the Oregon and Portland metro market, and build a plan to get you to page one.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/20"
            >
              Get a Free SEO Audit
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
