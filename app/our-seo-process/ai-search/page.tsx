import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AccordionFAQ from '../../components/AccordionFAQ'
import { BASE_URL, ORG_ID, organization } from '@/lib/entity'

const PATH = '/our-seo-process/ai-search'

export const metadata: Metadata = {
  title: 'AI Search vs. Google: Which Matters More? | Thomas+David+Jacob',
  description:
    'Is ranking in ChatGPT and Google AI Overviews more important than ranking on Google? An honest, sourced answer for Oregon businesses, and what to do about both.',
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: {
    title: 'AI Search vs. Google: Which Matters More?',
    description:
      'The honest, sourced answer for local businesses, and the one foundation that wins both.',
    images: [{ url: `${BASE_URL}/images/services/ai-search-visibility.webp` }],
  },
}

// Every figure here is sourced below. Update the numbers and sources together.
const numbers = [
  {
    value: '5T+',
    label: 'Google searches a year',
    source: 'Google, 2025',
  },
  {
    value: '2B+',
    label: 'Monthly users seeing Google AI Overviews',
    source: 'Alphabet Q2 2025 earnings',
  },
  {
    value: '8% vs 15%',
    label: 'Visits that clicked a result, with vs. without an AI Overview',
    source: 'Pew Research Center, 2025',
  },
  {
    value: '357%',
    label: 'Year-over-year growth in AI platform referrals to top sites',
    source: 'Similarweb, June 2025',
  },
]

const shifts = [
  {
    title: 'The answer comes before the links',
    body: 'When Google shows an AI Overview, Pew found people clicked a traditional result in 8% of visits, versus 15% when there was none, and clicked a link inside the summary just 1% of the time. The summary is often the whole visit.',
  },
  {
    title: 'The shortlist got shorter',
    body: 'A results page shows ten businesses and lets the customer compare. An AI answer usually names a few. If you are not one of them, the customer may never know you were an option.',
  },
  {
    title: 'It is growing from a small base',
    body: 'Similarweb measured AI platforms sending 1.13 billion referrals to the top 1,000 websites in June 2025, up 357% in a year. Google sent 191 billion in the same month. AI is a fast-growing slice, not a replacement.',
  },
]

const comparison = [
  { label: 'Where the customer sees you', google: 'A ranked list of links and the map pack', ai: 'A written answer that names a few businesses' },
  { label: 'How many get seen', google: 'About ten per page, plus ads', ai: 'Often three to five, sometimes one' },
  { label: 'What decides it', google: 'Relevance, links, reviews, proximity', ai: 'The same signals, plus how clearly and consistently you are described across the web' },
  { label: 'How you measure it', google: 'Rankings, clicks, Search Console', ai: 'Mention and citation rate on fixed questions, Bing AI Performance, AI referrals' },
  { label: 'Traffic it sends today', google: 'The large majority', ai: 'A small but fast-growing share' },
]

const actions = [
  {
    step: '01',
    title: 'Let the crawlers in',
    body: 'Make sure Google, Bing, and AI search crawlers such as OpenAI’s OAI-SearchBot can reach your site. A firewall or robots rule blocking them makes you invisible in their answers.',
  },
  {
    step: '02',
    title: 'Describe yourself the same way everywhere',
    body: 'Structured data, your Google Business Profile, and the directories in your industry should all agree on who you are, what you do, and where. AI tools trust consistency.',
  },
  {
    step: '03',
    title: 'Answer real questions on your site',
    body: 'Service, cost, comparison, and FAQ pages written in your customers’ words, with first-hand examples. That is the material AI answers quote.',
  },
  {
    step: '04',
    title: 'Measure it like any other channel',
    body: 'Ask the AI tools the same set of customer questions every month and track who gets named. Pair it with Bing’s AI citation report and your AI referral traffic.',
  },
]

const faqs = [
  {
    question: 'So is ranking in AI more important than ranking on Google?',
    answer:
      'Not yet, and anyone who says otherwise is selling something. Google still sends far more traffic than every AI platform combined. But AI answers now sit on top of Google itself and decide which few businesses get named. The good news is that it is mostly one job: the foundation that ranks you on Google is the same one AI tools draw from.',
  },
  {
    question: 'If people click less, is SEO still worth it?',
    answer:
      'Yes. AI Overviews are built from pages that search engines can find and trust, so strong SEO is how you get into the answer. What changes is that being named in the answer starts to matter as much as the click.',
  },
  {
    question: 'Which AI platforms matter for a local business?',
    answer:
      'Google AI Overviews reach the most people because they appear in regular Google searches. After that, ChatGPT, Gemini, Perplexity, Microsoft Copilot, and Claude. They do not share one ranking system, which is why we test all of them.',
  },
  {
    question: 'Can anyone guarantee ChatGPT will recommend me?',
    answer:
      'No. AI answers vary by wording, person, location, and day. What can be done is strengthening the signals these tools rely on and measuring how often you appear over time.',
  },
  {
    question: 'How do I find out where I stand?',
    answer:
      'Ask ChatGPT, Gemini, and Perplexity the questions your customers ask, such as “best [your service] in [your city],” and note who gets named. Our AI Visibility Audit does this across 40 questions and five platforms and compares you with your competitors.',
  },
]

const sources = [
  { name: 'Search Engine Land: Google now sees more than 5 trillion searches per year (2025)', url: 'https://searchengineland.com/google-5-trillion-searches-per-year-452928' },
  { name: 'TechCrunch: Google’s AI Overviews have 2B monthly users (July 2025)', url: 'https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india' },
  { name: 'Pew Research Center findings, via The Register (July 2025)', url: 'https://www.theregister.com/2025/07/22/google_ai_overviews_suppress_search/' },
  { name: 'Search Engine Journal: AI search isn’t replacing Google, it’s layering on top (Similarweb data)', url: 'https://searchenginejournal.com/ai-search-isnt-replacing-google-its-layering-on-top-similarweb-data/583378/' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    {
      '@type': 'Article',
      headline: 'AI Search vs. Google: Which Matters More for Your Business?',
      description: metadata.description,
      url: `${BASE_URL}${PATH}`,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      image: `${BASE_URL}/images/services/ai-search-visibility.webp`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Our SEO Process', item: `${BASE_URL}/our-seo-process` },
        { '@type': 'ListItem', position: 2, name: 'AI Search vs. Google', item: `${BASE_URL}${PATH}` },
      ],
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

export default function AISearchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-amber-500/6 blur-[120px]" />
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
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
              Our SEO Process · AI Search
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            AI Search vs. Google:
            <br />
            <span className="text-amber-400">Which Matters More?</span>
          </h1>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto leading-relaxed">
            The honest answer: Google still sends most of your traffic. But AI
            answers now decide which few businesses a customer hears about, and
            that includes the answers at the top of Google itself. Here is what
            the numbers say and what to do about both.
          </p>
        </div>
      </section>

      {/* ── By the numbers ── */}
      <section className="py-10 px-6 border-y border-zinc-800/50 bg-zinc-950/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {numbers.map((n) => (
              <div key={n.label} className="py-4">
                <p className="text-3xl md:text-4xl font-black text-amber-400 mb-2">{n.value}</p>
                <p className="text-zinc-300 text-sm leading-snug mb-1">{n.label}</p>
                <p className="text-zinc-600 text-xs">{n.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The short answer ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">The Short Answer</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">It&apos;s Not Either/Or</h2>
          <div className="space-y-5 text-zinc-400 text-lg leading-relaxed">
            <p>
              You will hear that AI is replacing Google. The data doesn&apos;t support that yet. In June 2025,
              Similarweb measured Google sending 191 billion referrals to the world&apos;s top 1,000 websites.
              AI platforms sent 1.13 billion, under 1% of Google&apos;s volume.
            </p>
            <p>
              What the data does show is that AI has moved inside search. Google says its AI Overviews reach
              more than 2 billion people a month, and when one appears, people click through to websites about
              half as often. The customer still gets an answer. It just names fewer businesses.
            </p>
            <p className="text-white">
              So the question isn&apos;t Google or AI. It&apos;s whether you are one of the few names in the
              answer, wherever the answer appears. The foundation that ranks you on Google is the same one AI
              tools draw from, so you build it once and win both.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's changing ── */}
      <section className="py-24 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">What&apos;s Changing</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Why the AI Layer Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shifts.map((s) => (
              <div key={s.title} className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">Side by Side</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Google Rankings vs. AI Answers</h2>
          </div>
          <div className="space-y-4">
            {comparison.map((row) => (
              <div key={row.label} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <p className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase md:pt-1">{row.label}</p>
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Google results</p>
                  <p className="text-zinc-300">{row.google}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">AI answers</p>
                  <p className="text-zinc-300">{row.ai}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to do ── */}
      <section className="py-24 px-6 bg-zinc-950/60 border-y border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">What to Do Now</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">One Foundation, Both Channels</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Google says its AI features run on the same fundamentals as regular search. No special file or
              markup guarantees a recommendation. These four steps do the real work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actions.map((a) => (
              <div key={a.step} className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-8">
                <span className="text-amber-400 text-xs font-black tracking-[0.3em]">STEP {a.step}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{a.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden mt-12 border border-zinc-800/50">
            <Image
              src="/images/services/ai-search-visibility.webp"
              alt="AI assistant answer naming a short list of businesses"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-10 text-center">Questions Owners Ask</h2>
          <AccordionFAQ faqs={faqs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-amber-400/5 border border-amber-400/15 rounded-2xl p-10 md:p-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">Find Out Where You Stand</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Does AI Recommend Your Business?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
              Our AI Visibility Audit tests 40 real customer questions across five AI platforms, compares you with
              three competitors, and hands you a prioritized plan. From $497.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services/ai-search-visibility"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/20"
              >
                See the AI Visibility Audit
              </Link>
              <Link
                href="/our-seo-process"
                className="text-zinc-300 hover:text-white border border-white/15 hover:border-zinc-500 px-8 py-4 rounded-full transition-all hover:bg-white/5"
              >
                Our SEO Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sources ── */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Sources</p>
          <ul className="space-y-2">
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}
