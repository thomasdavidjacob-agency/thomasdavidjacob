import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SpotlightCard from './components/SpotlightCard'
import BookCallButton from './components/BookCallButton'
import HeroRotator from './components/HeroRotator'
import AIAnswerCard from './components/AIAnswerCard'
import { siteGraph } from '@/lib/entity'
import { INDUSTRIES } from '@/lib/industries'
import { DEALKIT } from '@/lib/success-kit'
import { clients } from '@/lib/clients'

export const metadata: Metadata = {
  title: 'AI-Powered Creative Agency | SEO, AI Search & Web Design | Oregon City, OR',
  description:
    'Thomas+David+Jacob is a full-service creative agency in Oregon City, OR. Websites, SEO, AI search visibility, and AI systems that get businesses ranked on Google and recommended by ChatGPT, Gemini, Claude, Perplexity, and Copilot.',
}

const PLATFORMS = ['Google', 'ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'Copilot']

// The four things we do, in the order a customer meets them.
const pillars = [
  {
    eyebrow: 'AI Search Visibility',
    title: 'Get Recommended by AI',
    body: 'When customers ask ChatGPT, Gemini, Perplexity, or Google’s AI Overviews who to hire, the answer names a handful of businesses. We measure where you stand and build the signals that put you in it.',
    tags: ['AI visibility audit', 'Entity & schema', 'Answer-first content', 'Monthly AI tracking'],
    href: '/services/ai-search-visibility',
    cta: 'Explore AI visibility',
    feature: true,
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  },
  {
    eyebrow: 'Search Engine Optimization',
    title: 'Rank Where Buyers Search',
    body: 'Local and technical SEO built around what your customers actually type into Google, so the people ready to buy find you first.',
    tags: ['Local SEO', 'Technical SEO', 'Content strategy', 'Google Business Profile'],
    href: '/our-seo-process',
    cta: 'See our SEO process',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
  },
  {
    eyebrow: 'Website Design & Development',
    title: 'Sites Built to Win',
    body: 'Custom, hand-coded websites that load fast, look sharp on every phone, and turn visitors into calls, bookings, and sales.',
    tags: ['Custom design', 'Mobile-first', 'Speed optimized', 'Lead capture'],
    href: '/services',
    cta: 'See web design',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    eyebrow: 'AI Systems Architecture',
    title: 'Put Your Business on Autopilot',
    body: 'Custom AI assistants, workflow automation, and lead systems that answer, follow up, and report, so your team spends time on the work only people can do.',
    tags: ['Workflow automation', 'Custom AI assistants', 'AI lead systems', 'Live dashboards'],
    href: '/ai-systems',
    cta: 'Explore AI systems',
    feature: true,
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
]

const proof = [
  { value: '2020', label: 'Building for Oregon businesses since' },
  { value: `${clients.length}`, label: 'Live client sites you can visit today' },
  { value: '5', label: 'AI platforms we test your visibility on' },
  { value: '1', label: 'Team for strategy, design, code & SEO' },
]

const arrow = (
  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

export default function Home() {
  const featuredWork = clients.filter((c) => c.thumb && c.href).slice(0, 6)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
        {/* atmosphere: drifting gold + indigo light over a faint blueprint grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-[720px] h-[720px] rounded-full bg-amber-500/[0.09] blur-[140px] animate-aurora" />
          <div className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-indigo-600/[0.10] blur-[140px] animate-aurora [animation-delay:-11s]" />
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-5 py-2 mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
                AI-Powered Creative Agency · Oregon City, OR
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-black leading-[1.02] tracking-tight mb-7 opacity-0 animate-fade-up [animation-delay:120ms]">
              Be the Business
              <br />
              <HeroRotator words={PLATFORMS} />
              <br />
              Recommends.
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 animate-fade-up [animation-delay:240ms]">
              Thomas+David+Jacob is a full-service creative agency. We build the
              websites, win the search rankings, and design the AI systems that put
              your business at the top of Google and inside the answers on ChatGPT,
              Gemini, Claude, Perplexity, and Copilot.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-up [animation-delay:360ms]">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-amber-400 hover:bg-amber-300 text-black font-black px-9 py-4 rounded-full transition-all hover:scale-[1.03] tracking-wide shadow-lg shadow-amber-400/25"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                <span className="relative">Start Your Project</span>
                <span className="relative">{arrow}</span>
              </Link>
              <Link
                href="/clients"
                className="text-zinc-200 hover:text-white border border-white/15 hover:border-amber-400/50 px-8 py-4 rounded-full transition-all hover:bg-white/5 font-semibold"
              >
                See Our Work
              </Link>
              <BookCallButton />
            </div>

            <div className="mt-12 opacity-0 animate-fade-up [animation-delay:480ms]">
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-3">
                Built to be found on
              </p>
              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-zinc-400 font-semibold">
                {PLATFORMS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-8 opacity-0 animate-fade-up [animation-delay:420ms]">
            <Image
              src="/images/logo-tdj-glasses-white.png"
              alt="thomas+david+jacob logo"
              width={1200}
              height={515}
              priority
              className="w-full max-w-md h-auto"
            />
            <AIAnswerCard />
          </div>
        </div>
      </section>

      {/* ── Proof band ── */}
      <section className="border-y border-zinc-800/60 bg-zinc-950/60">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {proof.map((p) => (
            <div key={p.label} className="text-center md:text-left">
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-gradient-gold leading-none mb-2">
                {p.value}
              </p>
              <p className="text-sm text-zinc-400 leading-snug">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What we do ── */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              What We Do
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
              One Agency. Every Way
              <br />
              <span className="text-gradient-gold">Customers Find You.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Search changed. Customers still Google, but now they also ask AI.
              We cover both, with a website worth landing on and systems that keep
              the work coming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <SpotlightCard key={p.title} className="hover:-translate-y-1.5">
                <Link href={p.href} className="group flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                      </svg>
                    </div>
                    {p.feature && (
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-amber-400 bg-amber-400/10 border border-amber-400/25 rounded-full px-3 py-1">
                        AI-Powered
                      </span>
                    )}
                  </div>
                  <p className="text-amber-400/90 text-xs font-bold tracking-[0.25em] uppercase mb-2">{p.eyebrow}</p>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-black text-white mb-3">{p.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6 flex-1">{p.body}</p>
                  <ul className="flex flex-wrap gap-2 mb-7">
                    {p.tags.map((t) => (
                      <li key={t} className="text-xs text-zinc-300 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm">
                    {p.cta}
                    {arrow}
                  </span>
                </Link>
              </SpotlightCard>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/services#studio"
              className="group flex items-center justify-between gap-4 bg-[#0d0d0d] border border-zinc-800 hover:border-amber-400/40 rounded-2xl px-7 py-5 transition-colors"
            >
              <span>
                <span className="block font-bold text-white">Growth &amp; Content Studio</span>
                <span className="block text-sm text-zinc-500">Ads, social, video, email, and ghostwriting, powered by AI.</span>
              </span>
              <span className="text-amber-400">{arrow}</span>
            </Link>
            <Link
              href="/success-kit"
              className="group flex items-center justify-between gap-4 bg-[#0d0d0d] border border-zinc-800 hover:border-amber-400/40 rounded-2xl px-7 py-5 transition-colors"
            >
              <span>
                <span className="block font-bold text-white">Industry Success Kits</span>
                <span className="block text-sm text-zinc-500">Done-for-you websites and lead systems by industry.</span>
              </span>
              <span className="text-amber-400">{arrow}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="py-24 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">How We Work</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black tracking-tight">
              Strategy First. Then We Build.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Understand', d: 'A deep look at your goals, customers, competitors, and where you show up today on Google and in AI answers.' },
              { n: '02', t: 'Build', d: 'The website, SEO foundation, content, and AI systems your plan calls for, built by one team and reviewed by humans.' },
              { n: '03', t: 'Grow', d: 'We track rankings, AI mentions, and leads every month, and keep improving what moves the needle.' },
            ].map((s) => (
              <div key={s.n} className="relative bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 overflow-hidden hover:border-amber-400/30 transition-colors group">
                <span className="absolute -top-3 right-5 font-[family-name:var(--font-display)] text-8xl font-black text-white/[0.03] group-hover:text-amber-400/[0.06] transition-colors select-none">
                  {s.n}
                </span>
                <span className="relative inline-block text-xs text-amber-400 font-bold tracking-[0.3em] uppercase border border-amber-400/30 rounded-full px-3 py-1 mb-5">
                  Step {s.n}
                </span>
                <h3 className="relative text-2xl font-bold text-white mb-3">{s.t}</h3>
                <p className="relative text-zinc-400 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve (Success Kit) ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Built for Your Industry
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Industries We Serve
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
              Websites and lead systems made for how your industry wins customers. We build them and run them for you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ...INDUSTRIES.map((i) => ({ name: i.name, href: `/success-kit/${i.slug}`, note: i.group })),
              { name: DEALKIT.name, href: DEALKIT.href, note: DEALKIT.audience },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-3 bg-[#0d0d0d] border border-zinc-800 rounded-2xl px-5 py-4 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>
                  <span className="block font-bold text-white group-hover:text-amber-400 transition-colors">{item.name}</span>
                  <span className="block text-xs text-zinc-500 mt-0.5">{item.note}</span>
                </span>
                <svg className="w-4 h-4 flex-shrink-0 text-amber-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/success-kit" className="text-sm font-bold tracking-wide text-amber-400 hover:text-amber-300">
              See all industries →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Selected Work (real, live client sites) ── */}
      <section className="py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">Selected Work</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black tracking-tight mb-4">
                Real Businesses. Live Sites.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Every one of these is live right now. Click through and see the work for yourself.
              </p>
            </div>
            <Link href="/clients" className="group inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold">
              All client work {arrow}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWork.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#0d0d0d] border border-zinc-800 hover:border-amber-400/40 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[2/1] overflow-hidden border-b border-zinc-800">
                  <Image
                    src={c.thumb!}
                    alt={`${c.name} website`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-1.5">{c.industry}</p>
                  <h3 className="text-lg font-bold text-white mb-1">{c.name}</h3>
                  <p className="text-sm text-zinc-500">{c.location}</p>
                </div>
              </a>
            ))}
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
            <div className="mt-8 flex justify-center">
              <BookCallButton label="Or Book a 20-Min Call Now" />
            </div>
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
