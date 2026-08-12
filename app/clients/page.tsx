import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Our Clients | Thomas+David+Jacob — Oregon Web Design & SEO',
  description:
    'Oregon businesses we build for — web design, local SEO, and AI systems for clinics, restaurants, and service companies across Portland Metro and beyond.',
}

type Client = {
  name: string
  industry: string
  location: string
  summary: string
  work: string[]
  href?: string
  status?: string
  tag?: string
}

const clients: Client[] = [
  {
    name: 'Amore Coordination',
    industry: 'Wedding & Event Coordination',
    location: 'Portland, OR & SW Washington',
    summary:
      'Amy Elizabeth Ha has coordinated over 230 weddings in a decade-plus career. We built her a site that carries that experience the way she does in person — warm, personal, and welcoming to couples and families of every background — with inquiry flows that turn browsing couples into booked consultations.',
    work: [
      'Custom website design & build',
      'Inquiry & consultation capture',
      'Wedding-market local SEO',
      'Mobile-first, fast-loading pages',
    ],
    href: 'https://amorecoordination.com',
  },
  {
    name: 'La Fondita',
    industry: 'Authentic Mexican Food Cart',
    location: 'Medford, OR',
    summary:
      'A family-run Mexican food cart with a 4.9-star reputation and no website to match it. We built a fully bilingual site — English and Spanish — and gave their weekend-only menudo, birria, pozole, and barbacoa their own landing pages, because those are the dishes people plan a drive around.',
    work: [
      'Bilingual EN/ES website',
      'Dish-level landing pages',
      'Local SEO & Google Business Profile',
      'Zero ongoing hosting cost',
    ],
    href: 'https://lafondita.food',
    tag: 'Pro Bono',
  },
  {
    name: 'Diamond Bond Oregon',
    industry: 'Stone & Glass Surface Protection',
    location: 'Lake Oswego, OR — Portland/Vancouver',
    summary:
      'Twenty-five years of hands-on experience sealing shower glass, granite, marble, natural stone, and tile for homeowners and commercial clients. We built a site that explains a technical service in plain language and turns quote-shoppers into booked jobs.',
    work: [
      'Custom website design & build',
      'Service-page SEO',
      'Quote request & lead capture',
      'Residential + commercial positioning',
    ],
    href: 'https://diamondbondoregon.com',
  },
  {
    name: 'Phuong Ha — Mortgage Lending',
    industry: 'Mortgage / Home Loans',
    location: 'Oregon & Washington',
    summary:
      'A licensed loan originator competing against national lenders with ten-figure ad budgets. We built a conversion-focused site around fast pre-approvals and the loan programs borrowers actually search for — purchase, refinance, FHA, VA, and jumbo.',
    work: [
      'Conversion-focused website',
      'Loan program landing pages',
      'Pre-approval lead capture',
      'Statewide local SEO',
    ],
    href: 'https://phuongha.loans',
  },
]

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/webdesign_in_darkroom.jpg"
          alt="Web design studio workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
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
        <div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
              Who We Work With
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Real Oregon Businesses.
            <br />
            <span className="text-amber-400">Real Results.</span>
          </h1>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Clinics, restaurants, and service companies across Oregon trust us to build the
            websites, search presence, and AI systems that bring them customers.
          </p>
        </div>
      </section>

      {/* ── Client cards ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              Selected Clients
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              A Few of the Businesses We Build For
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Different industries, same approach — build the system, then make it earn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-black text-white leading-tight">{client.name}</h3>
                    <p className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase mt-2">
                      {client.industry}
                    </p>
                  </div>
                  {client.tag && (
                    <span className="flex-shrink-0 text-[10px] font-black tracking-[0.2em] uppercase text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1.5">
                      {client.tag}
                    </span>
                  )}
                </div>

                <p className="flex items-center gap-1.5 text-zinc-500 text-sm mb-5">
                  <svg
                    className="w-4 h-4 text-zinc-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {client.location}
                </p>

                <p className="text-zinc-400 leading-relaxed mb-7">{client.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                  {client.work.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
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
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  {client.href ? (
                    <a
                      href={client.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors group/btn"
                    >
                      Visit the site
                      <svg
                        className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-zinc-500 text-sm font-bold">
                      <span className="w-2 h-2 rounded-full bg-zinc-600" />
                      {client.status ?? 'Private engagement'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="py-28 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
              What Our Clients Get
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              One Team, Start to Finish
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              No account managers who don&apos;t build, no builders who don&apos;t answer the phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Built From Scratch',
                body: 'Every site is custom-coded for speed, search, and conversion — no templates, no page builders, no bloated plugins.',
              },
              {
                title: 'Found Locally',
                body: 'Local SEO, Google Business Profile, and content built around what your customers in Oregon actually search for.',
              },
              {
                title: 'Kept Running',
                body: 'Ongoing support, content, and AI systems that keep the site earning long after launch day.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.body}</p>
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
              Want to Be on This Page?
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Let&apos;s Build Yours Next
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
              Tell us about your business. We&apos;ll show you exactly what we&apos;d build and what
              it would cost — no pressure, no upsell.
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
