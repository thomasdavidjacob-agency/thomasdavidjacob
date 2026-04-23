import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'About Us | Thomas David Jacob | Oregon Digital Agency',
  description:
    'Learn about Thomas+David+Jacob — an Oregon City digital agency helping local businesses across the Portland metro and statewide grow online since 2020.',
}

const timeline = [
  {
    year: '2020',
    title: 'Founded in Oregon City',
    description:
      'Thomas+David+Jacob was born out of frustration — watching great local businesses get buried online while inferior competitors ranked above them. We started with one mission: fix that.',
  },
  {
    year: '2021',
    title: 'First 10 Clients',
    description:
      'Word spread fast. Our first clients saw measurable results within 90 days — increased rankings, more calls, more foot traffic. We grew entirely through referrals.',
  },
  {
    year: '2022',
    title: 'SEO Division Launch',
    description:
      'We formalized our SEO methodology into a repeatable, data-driven process after proving results across a dozen industries. The playbook still works today.',
  },
  {
    year: '2023',
    title: 'Marketing & Sales Arm Added',
    description:
      'Great websites and rankings weren\'t enough for some clients. We expanded into paid advertising, email marketing, and full-funnel sales strategies to close the loop.',
  },
  {
    year: '2024',
    title: 'A Growing Client Roster',
    description:
      'From solo contractors to multi-location businesses, our client base has grown steadily across Oregon and beyond — each one receiving the same dedicated, hands-on attention.',
  },
  {
    year: '2026',
    title: 'Expanding Nationwide',
    description:
      'Our remote-first model means geography is no longer a barrier. We now serve clients coast-to-coast while staying true to the small-business roots that built us.',
  },
]

const approachCards = [
  {
    title: 'Design-First Thinking',
    description:
      'We believe great design isn\'t decoration — it\'s strategy. Every visual decision we make is rooted in how it affects user behavior, trust, and conversion. We don\'t build pretty pages. We build pages that work.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Deep Market Research',
    description:
      'Before we write a single line of code or publish a single piece of content, we study your market. Who are your competitors? What are customers searching for? Where is the opportunity? Research is the foundation of everything we build.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Results Over Vanity Metrics',
    description:
      'We don\'t celebrate page views. We celebrate phone calls, form fills, sales, and revenue growth. Every strategy we execute is tied to a business outcome you can measure in your bank account.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/dark_laptop_desktop.jpg"
          alt="Professional dark workspace for digital strategy"
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
              Our Story
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Built to Help Local
            <br />
            <span className="text-amber-400">Businesses Win</span> Online
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We started with a frustration and turned it into a mission. Here&apos;s
            the story behind the agency.
          </p>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
                How We Started
              </p>
              <h2 className="text-4xl font-black tracking-tight mb-6">
                The Problem We Couldn&apos;t Ignore
              </h2>
              <div className="space-y-5 text-zinc-400 leading-relaxed">
                <p>
                  It started with a conversation at a local hardware store. The owner — a third-generation
                  tradesman with a loyal customer base and decades of expertise — was losing business to a
                  competitor with half the skill but a polished website and Google presence.
                </p>
                <p>
                  That felt wrong. Not just for him — but for every plumber, contractor, restaurateur, and
                  small business owner across Portland, Oregon City, and the greater metro who built
                  something real with their hands, only to be invisible online.
                </p>
                <p>
                  Thomas+David+Jacob was founded to close that gap. We believe that in 2026, digital
                  presence is not a luxury — it&apos;s the difference between a thriving business and a
                  struggling one. And every business deserves a fighting chance.
                </p>
                <p>
                  We&apos;re not a faceless agency. We&apos;re a small, dedicated team rooted in Oregon
                  City and serving clients across Portland, Lake Oswego, West Linn, Milwaukie, and
                  statewide — because your success is the only metric we care about.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-60 rounded-2xl overflow-hidden border border-zinc-800">
                <Image
                  src="/images/Blurred_Office_About.jpg"
                  alt="Modern digital agency office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 rounded-l-2xl" />
              <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
                Our Belief
              </p>
              <blockquote className="text-2xl font-bold text-white leading-snug mb-8">
                &ldquo;Every great local business deserves to be found by the customers looking for exactly
                what they offer.&rdquo;
              </blockquote>
              <p className="text-zinc-400 leading-relaxed">
                This isn&apos;t just a tagline. It&apos;s the filter through which we evaluate every project,
                every strategy, and every decision we make for our clients.
              </p>
              <div className="mt-8 pt-8 border-t border-zinc-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-400/15 flex items-center justify-center">
                  <span className="text-amber-400 font-black text-sm">TDJ</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Thomas+David+Jacob</p>
                  <p className="text-zinc-500 text-xs">Oregon City, OR</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Milestones
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              From a single conversation to a nationwide agency — here&apos;s how we got here.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-px" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const isRight = i % 2 === 0
                return (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year badge — centered on the line */}
                    <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                      <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-amber-400 flex items-center justify-center">
                        <span className="text-amber-400 text-xs font-black">{item.year}</span>
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-6 md:ml-0 md:w-[calc(50%-3rem)] ${
                        isRight ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                      }`}
                    >
                      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:border-amber-400/25 transition-colors">
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              How We Think
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Our Approach
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Three principles that guide every project we take on.
            </p>
          </div>

          <div className="relative h-72 rounded-2xl overflow-hidden mb-10 border border-zinc-800/50">
            <Image
              src="/images/About.jpg"
              alt="Creative agency team workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approachCards.map((card) => (
              <div
                key={card.title}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/25 transition-colors group"
              >
                <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400/15 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-amber-400/5 border border-amber-400/15 rounded-2xl p-10 md:p-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Ready to Grow?
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
              Tell us about your business and we&apos;ll put together a custom growth plan — no obligation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/20"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
