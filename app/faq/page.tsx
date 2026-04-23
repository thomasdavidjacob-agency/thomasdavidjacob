import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import AccordionFAQ from '../components/AccordionFAQ'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'FAQ | Oregon Web Design & SEO Agency | Thomas David Jacob',
  description:
    'Common questions about web design, SEO & marketing for Oregon businesses. Serving Oregon City, Portland metro, Beaverton, West Linn & statewide.',
}

const webDesignFAQs = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most custom WordPress websites take 3–6 weeks from kickoff to launch, depending on the number of pages, complexity of functionality, and how quickly you provide content and feedback. We\'ll give you a specific timeline during our initial consultation based on your project\'s scope.',
  },
  {
    question: 'Do I own my website when it\'s done?',
    answer:
      '100%. Everything we build belongs to you — the design, the code, the content, and the domain. We hand over full credentials and access when the project is complete. You are never locked into a proprietary platform that holds your site hostage.',
  },
  {
    question: 'Why WordPress? Why not Wix or Squarespace?',
    answer:
      'WordPress powers 43% of the entire web for good reason. It\'s the most flexible, SEO-friendly, and extensible CMS available. Unlike page builders, WordPress sites can scale to any size, support advanced SEO configurations, and aren\'t tied to a monthly subscription for basic functionality. It\'s simply the best long-term investment for a serious business.',
  },
  {
    question: 'Will my website work on phones and tablets?',
    answer:
      'Yes — every website we build is mobile-first. Over 60% of web traffic comes from mobile devices, and Google\'s ranking algorithm prioritizes mobile-friendly sites. We test on multiple devices and screen sizes before every launch.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'We need your brand assets (logo, colors, fonts if you have them), any existing content you want to keep, examples of sites you like, and your goals. If you\'re starting from scratch, no problem — we can guide you through all of it. The discovery call is designed to capture everything we need.',
  },
]

const seoFAQs = [
  {
    question: 'How long does SEO take to show results?',
    answer:
      'SEO is a long-term investment. Most clients see meaningful movement in rankings within 3–6 months, and significant traffic growth within 6–12 months. The timeline depends on your industry competitiveness, the current state of your site, and how aggressively we execute. We\'re always transparent about realistic expectations upfront.',
  },
  {
    question: 'Can you guarantee #1 rankings on Google?',
    answer:
      'No reputable SEO agency can guarantee specific rankings — and any that do are either lying or using black-hat tactics that will get your site penalized. What we guarantee is a rigorous, proven process, complete transparency, and measurable improvement in organic traffic and leads. Our track record speaks for itself.',
  },
  {
    question: 'What\'s the difference between local SEO and national SEO?',
    answer:
      'Local SEO focuses on ranking in your geographic area — the "near me" searches and Google Maps results that drive calls and foot traffic. National SEO targets broader, non-location-specific keywords. For Oregon businesses in competitive markets like Portland, Beaverton, or Lake Oswego, local SEO is typically the best starting point. We\'ll assess which approach (or combination) makes the most sense for your business during the strategy phase.',
  },
  {
    question: 'Will I see what you\'re doing each month?',
    answer:
      'Absolutely. We send a detailed monthly report covering keyword rank changes, organic traffic trends, actions taken during the month, and the plan for next month. We believe in complete transparency — you should always know exactly what you\'re paying for and what impact it\'s having.',
  },
  {
    question: 'Do I need to keep paying for SEO or can I stop once I rank?',
    answer:
      'SEO rankings are not permanent. Competitors are constantly trying to outrank you, Google updates its algorithm regularly, and new content needs to be produced to maintain authority. Think of SEO like a gym membership — the results come from consistent effort. That said, a well-established site does require less maintenance, so costs can decrease over time as you reach your goals.',
  },
]

const marketingFAQs = [
  {
    question: 'How much does it cost to work with you?',
    answer:
      'Pricing varies based on the scope and services selected. Web design projects typically range from a few thousand to ten-plus thousand dollars. SEO and marketing retainers are priced monthly based on the level of service. We don\'t publish fixed pricing because every business has different needs — we prefer to build a custom proposal that fits your budget and goals. Contact us and we\'ll be upfront about costs within 24 hours.',
  },
  {
    question: 'Are there any long-term contracts?',
    answer:
      'Website projects are one-time engagements with no ongoing commitment required. For SEO and marketing retainers, we ask for a 3-month initial commitment so we have enough time to properly execute and show results. After that, it\'s month-to-month. We don\'t believe in locking clients into long contracts — we want to keep your business because of results, not fine print.',
  },
  {
    question: 'What kind of ROI can I expect from digital marketing?',
    answer:
      'ROI varies by industry, budget, and baseline. Our clients typically see a significant positive return within the first year, with organic SEO delivering the best long-term ROI of any digital channel. During your consultation, we\'ll research your specific market and give you a realistic projection based on real data — not guesswork.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simple — fill out the contact form on our Contact page or send us a message. We\'ll schedule a free 30-minute discovery call to learn about your business, your goals, and your current situation. From there, we\'ll put together a custom proposal within 48 hours. No obligation, no pressure.',
  },
]

const categories = [
  { label: 'Web Design', faqs: webDesignFAQs },
  { label: 'Search Engine Optimization', faqs: seoFAQs },
  { label: 'Marketing & Pricing', faqs: marketingFAQs },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/dark_desktop_notebooks.jpg"
          alt="Dark creative agency workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full bg-amber-500/6 blur-[120px]" />
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
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
              Got Questions?
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Frequently Asked
            <br />
            <span className="text-amber-400">Questions</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            Everything you need to know about working with us — straight answers, no fluff.
            We serve businesses across Oregon and the greater Portland metro.
          </p>
        </div>
      </section>

      {/* ── FAQ Sections ── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {categories.map((category) => (
            <div key={category.label}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-8 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h2 className="text-2xl font-black text-white">{category.label}</h2>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl px-6 md:px-8">
                <AccordionFAQ faqs={category.faqs} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Still Have Questions ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-amber-400/5 border border-amber-400/15 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-[280px] md:min-h-0">
                <Image
                  src="/images/FAQ_Woman_Smiling.jpg"
                  alt="Friendly agency support representative"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p className="text-amber-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">
                  Still Curious?
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  We&apos;re Happy to Answer Anything
                </h2>
                <p className="text-zinc-400 text-lg mb-8 max-w-md">
                  Drop us a message and we&apos;ll get back to you within 24 hours — no sales pitch, just straight answers.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full transition-all hover:scale-105 tracking-wide shadow-lg shadow-amber-400/20"
                  >
                    Ask Us Anything
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
