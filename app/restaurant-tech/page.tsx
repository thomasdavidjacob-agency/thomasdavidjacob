import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AccordionFAQ from '../components/AccordionFAQ'

export const metadata: Metadata = {
  title: 'Restaurant Tech & Toast POS Integration | Oregon',
  description:
    'We connect your POS, website, online ordering, delivery apps, and reservations into one system. Toast, Square, and Clover integration for Oregon restaurants and food carts.',
}

const integrations = [
  {
    title: 'POS Integration',
    description:
      'Toast, Square, or Clover — we connect the register you already use to everything else. Your menu, your prices, and your order flow stay in one place instead of being retyped across half a dozen dashboards.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Commission-Free Online Ordering',
    description:
      'Ordering built into your own website, feeding straight into your POS. Third-party apps commonly take 15–30% of every ticket. An order placed on your own site keeps that margin in your business.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Delivery App Sync',
    description:
      'Staying on DoorDash, Uber Eats, or Grubhub is fine — running them blind is not. We sync menus and availability across every channel so an 86ed item disappears everywhere at once, not just on the tablet nearest the pass.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
      </svg>
    ),
  },
  {
    title: 'One-Source Menu Sync',
    description:
      'Change a price once and it updates on your site, your ordering page, and every delivery platform. No more Tuesday afternoons spent logging into six portals to raise the price of a burrito by fifty cents.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Reservations & Waitlist',
    description:
      'OpenTable, Resy, Tock, or a simple booking flow of your own — connected to your site so a guest can find you and hold a table without leaving the page they landed on.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Reviews & Repeat Orders',
    description:
      'Automated review requests timed to the end of a meal, and a direct line back to the people who already ordered once. Owning your customer list is the part the delivery apps never give you.',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
]

const problems = [
  {
    stat: '15–30%',
    label: 'Typical third-party delivery commission',
    description:
      'On a $40 ticket that is $6 to $12 off the top — before food cost, before labor. The apps bring volume, but every order routed through them is an order you rent instead of own.',
  },
  {
    stat: '6+',
    label: 'Places a menu change has to be made',
    description:
      'POS, website, DoorDash, Uber Eats, Grubhub, printed menu. Miss one and a customer orders something you stopped serving in March — and leaves the review to prove it.',
  },
  {
    stat: '0',
    label: 'Customer records the apps hand back',
    description:
      'Every order placed through a delivery platform belongs to the platform. You cook the food, they keep the relationship, and you pay again next time to reach the same person.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We sit down with your actual numbers — POS reports, delivery statements, current ordering setup — and put a real figure on what the current stack costs you every month.',
  },
  {
    number: '02',
    title: 'Integration Map',
    description:
      'A plain-English blueprint of what connects to what: which systems stay, which get replaced, and where every order will flow once it is built.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We build the site and the ordering flow, wire up the integrations, and test it against real orders before a single customer sees it.',
  },
  {
    number: '04',
    title: 'Launch & Train',
    description:
      'Your staff gets trained on the new flow and you get documentation written for a busy kitchen, not an IT department. Then we watch the first weeks closely and tune.',
  },
]

const faqs = [
  {
    question: 'Do I have to leave Toast to take direct orders?',
    answer:
      'No. Toast stays exactly where it is. We build ordering into your own website and connect it to the POS you already run, so tickets print the way your kitchen expects. The goal is to add a channel you own, not to rip out the register your staff already knows.',
  },
  {
    question: 'What if I use Square or Clover instead of Toast?',
    answer:
      'That works too. Toast is the most common system we see in Oregon restaurants, but Square and Clover both expose the integrations we need. Tell us what you run and we will confirm what is possible before you commit to anything.',
  },
  {
    question: 'Should I drop the delivery apps entirely?',
    answer:
      'Usually not, and we will say so plainly. The apps are a discovery channel — people find you there. The goal is to stop paying commission on repeat customers who would have ordered from you directly if the option existed and was easy to find. Most restaurants we work with keep the apps and shift their regulars to direct ordering over time.',
  },
  {
    question: 'How long does a build take?',
    answer:
      'A straightforward site with ordering and POS integration typically runs three to five weeks from kickoff to launch. Adding reservations, loyalty, or multi-location menu sync extends that. You get a real timeline after the audit, not before.',
  },
  {
    question: 'Do you work with food carts, or only brick-and-mortar restaurants?',
    answer:
      'Both. Food carts and trucks are some of our favorite projects — the margins are tighter, which makes commission savings matter more, and the location and hours challenges are genuinely interesting problems to solve. We built La Fondita in Medford as a pro bono project for exactly this reason.',
  },
  {
    question: 'What happens if something breaks at 7pm on a Friday?',
    answer:
      'Every build ships with documentation and a fallback path, so a failed integration never stops you from taking orders. Ongoing support is available, and we are local — Oregon City, not an overseas ticket queue.',
  },
]

const relatedPosts = [
  {
    slug: 'toast-pos-direct-ordering-system-oregon-restaurants',
    title: 'Toast POS and the Direct Ordering Revolution for Oregon Restaurants',
  },
  {
    slug: 'true-cost-of-grubhub-uber-eats-oregon-restaurants',
    title: 'The True Cost of Grubhub and Uber Eats: What Oregon Restaurant Owners Need to See',
  },
  {
    slug: 'restaurants-escaping-delivery-app-commissions-oregon',
    title: 'How Oregon Restaurants Are Escaping Grubhub and Uber Eats Commissions',
  },
  {
    slug: 'ai-food-cost-reduction-oregon-restaurants',
    title: 'AI-Powered Food Cost Management: Cutting Waste and Boosting Margins',
  },
  {
    slug: 'ai-staff-scheduling-labor-cost-oregon-businesses',
    title: 'AI Staff Scheduling: Cutting Labor Costs Without Cutting Quality',
  },
  {
    slug: 'api-integrations-guide-oregon-business-owners',
    title: 'API Integrations Explained: The Layer That Connects Your Business',
  },
]

// Service + FAQPage structured data. The FAQ entries are generated from the same
// `faqs` array the accordion renders, so the markup can never drift from the page.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Restaurant Technology & POS Integration',
      serviceType: 'Restaurant POS integration and online ordering systems',
      provider: {
        '@type': 'ProfessionalService',
        name: 'Thomas+David+Jacob',
        url: 'https://thomasdavidjacob.com',
        areaServed: 'Oregon',
      },
      areaServed: [
        { '@type': 'State', name: 'Oregon' },
        { '@type': 'City', name: 'Portland' },
        { '@type': 'City', name: 'Oregon City' },
      ],
      description:
        'Integration of restaurant point-of-sale systems (Toast, Square, Clover) with commission-free online ordering, delivery app menu sync, reservations, and review automation for Oregon restaurants and food carts.',
      url: 'https://thomasdavidjacob.com/restaurant-tech',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
}

export default function RestaurantTechPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
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
          <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-6">
            Restaurant &amp; Hospitality Tech
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Your POS and Your Website
            <br />
            <span className="text-amber-400">Should Be Talking</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
            We connect Toast, Square, and Clover to commission-free online ordering, delivery apps, reservations, and live menu sync — so you update a price once instead of in six places, and keep the margin the apps have been taking.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full text-base transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/25"
          >
            Get a Free Commission Audit
          </Link>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-16 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              The Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Disconnected Systems Are Expensive
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Most restaurants did not choose a fragmented stack. It accumulated — a POS here, a delivery tablet there, a website someone&apos;s cousin built in 2019. The cost shows up quietly, every single ticket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.label}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/25 transition-colors"
              >
                <p className="text-5xl font-black text-amber-400 mb-3">{problem.stat}</p>
                <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                  {problem.label}
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Connect ── */}
      <section className="py-16 md:py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              What We Connect
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              One System, Not Six Logins
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We work with the equipment you already own. Nothing here requires you to replace your register or retrain your kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item) => (
              <div
                key={item.title}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400/15 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed flex-1">{item.description}</p>
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
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              From Audit to Launch
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

      {/* ── Proof ── */}
      <section className="py-16 md:py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Proof
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              We Build for Food Businesses
            </h2>
          </div>

          <div className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <h3 className="text-2xl font-black text-white">La Fondita</h3>
              <span className="text-xs font-black tracking-[0.15em] uppercase bg-amber-400/15 text-amber-400 border border-amber-400/25 px-3 py-1 rounded-full">
                Pro Bono
              </span>
            </div>
            <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-6">
              Authentic Mexican Food Cart — Medford, OR
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              A family-run cart with a 4.9-star reputation and no website to match it. We built a fully bilingual site — English and Spanish — and gave their weekend-only menudo, birria, pozole, and barbacoa their own landing pages, because those are the dishes people plan a drive around. Zero ongoing hosting cost to the family.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://lafondita.food"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors group/btn"
              >
                Visit lafondita.food
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/clients"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-bold text-sm transition-colors"
              >
                See all clients
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Straight Answers
            </h2>
          </div>
          <AccordionFAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Related Reading ── */}
      <section className="py-16 md:py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Go Deeper
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              More on Restaurant Tech
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              The reasoning behind everything above, in detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-7 hover:border-amber-400/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <h3 className="text-base font-bold text-white mb-4 flex-1 leading-snug group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm">
                  Read
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
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
            Find Out What Your
            <br className="hidden sm:block" /> Current Setup Costs You
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed mb-10">
            Send us a recent month of delivery statements and we will put a real number on the commission you are paying — and what a direct ordering channel would keep in your business. No charge, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-12 py-4 rounded-full text-base transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/25"
          >
            Get a Free Commission Audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
