import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import {
  AccentHeadline,
  Check,
  FaqList,
  PillBadge,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHeader,
  cardClass,
} from "@/components/tdj-ui";
import { INDUSTRIES, MONTHLY_INCLUDES, SHOW_INDUSTRY_PRICING, getIndustry } from "@/lib/industries";

type Params = { industry: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return INDUSTRIES.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const ind = getIndustry((await params).industry);
  if (!ind) return {};
  return { title: ind.seoTitle, description: ind.seoDescription };
}

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

const DEFAULT_STEPS: [string, string][] = [
  ["A 20-minute call", "Tell us about your business and the customers you want more of."],
  ["We build it", "Your website, lead forms and review requests, in your brand, connected to your tools."],
  ["You get the calls", "We keep it running, make your changes and send a monthly lead report."],
];

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const ind = getIndustry((await params).industry);
  if (!ind) notFound();
  const cta = ind.cta ?? "Get a Free Demo";
  const steps = ind.steps ?? DEFAULT_STEPS;

  // Service + FAQPage structured data, generated from the same entry the page renders.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: ind.seoTitle.replace(/\s*\|\s*TDJ$/, ""),
        serviceType: `Websites and lead systems for ${ind.name.toLowerCase()}`,
        description: ind.seoDescription,
        url: `https://thomasdavidjacob.com/success-kit/${ind.slug}`,
        provider: {
          "@type": "ProfessionalService",
          name: "Thomas+David+Jacob",
          url: "https://thomasdavidjacob.com",
        },
        areaServed: [
          { "@type": "State", name: "Oregon" },
          { "@type": "City", name: "Portland" },
          { "@type": "City", name: "Oregon City" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: ind.faq.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl">
          <PillBadge>{ind.eyebrow}</PillBadge>
          <AccentHeadline text={ind.headline} accent={ind.accent} className="mb-6" />
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl">{ind.subhead}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="#demo">{cta}</PrimaryButton>
            <SecondaryButton href="#what-we-build">See What We Build</SecondaryButton>
          </div>
          <p className="mt-8 text-sm text-zinc-500">Done for you. No tech skills needed.</p>
        </div>
      </section>

      {/* Problems */}
      <Section alt>
        <SectionHeader
          eyebrow={ind.stats ? "The Problem" : "Sound Familiar?"}
          title={ind.problemsTitle ?? "What's Costing You Jobs"}
          intro={ind.problemsIntro}
        />
        {ind.stats ? (
          <div className="grid gap-6 md:grid-cols-3">
            {ind.stats.map((st) => (
              <div key={st.label} className={cardClass()}>
                <p className="text-5xl font-black text-amber-400">{st.value}</p>
                <h3 className="mb-3 mt-3 text-lg font-black">{st.label}</h3>
                <p className="leading-relaxed text-zinc-400">{st.body}</p>
              </div>
            ))}
          </div>
        ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {(ind.problems ?? []).map((p) => (
            <li key={p} className="flex gap-4 rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6 text-zinc-300">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
              {p}
            </li>
          ))}
        </ul>
        )}
      </Section>

      {/* What we build */}
      <Section id="what-we-build">
        <SectionHeader
          eyebrow="What We Build"
          title={ind.buildsTitle ?? "Built and Run for You"}
          intro={ind.buildsIntro ?? "Everything your business needs to win more work online, set up and run by TDJ."}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ind.builds.map((b) => (
            <div key={b.title} className={`${cardClass()} hover:-translate-y-1`}>
              <h3 className="mb-3 text-xl font-black text-white">{b.title}</h3>
              <p className="leading-relaxed text-zinc-400">{b.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-zinc-500">
          Works with {ind.worksWith.slice(0, -1).join(", ")} and {ind.worksWith.at(-1)}.
        </p>
      </Section>

      {/* How it works */}
      <Section alt>
        <SectionHeader
          eyebrow="How It Works"
          title={steps.length === 3 ? "Three Steps. Zero Tech Work." : "From Audit to Launch"}
        />
        <ol className={`grid gap-6 ${steps.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
          {steps.map(([title, body], i) => (
            <li key={title} className={cardClass()}>
              <span className="text-sm font-black tracking-[0.2em] text-amber-400">0{i + 1}</span>
              <h3 className="mb-3 mt-3 text-xl font-black">{title}</h3>
              <p className="leading-relaxed text-zinc-400">{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Pricing */}
      <Section narrow>
        <SectionHeader
          eyebrow="Pricing"
          title={ind.pricing ? "Simple, Flat Pricing" : "Priced to Your Setup"}
          intro={
            ind.pricingNote ??
            "One setup fee to build it, then one monthly fee to run it. Priced so one extra job a month can cover it."
          }
        />
        <div className={`${cardClass(true)} mx-auto max-w-md text-center`}>
          {SHOW_INDUSTRY_PRICING && ind.pricing ? (
            <>
              <p>
                <span className="text-6xl font-black">{usd(ind.pricing.monthly)}</span>
                <span className="text-zinc-400"> /month</span>
              </p>
              <p className="mt-2 text-sm text-zinc-500">+ {usd(ind.pricing.setup)} one-time setup</p>
            </>
          ) : (
            <p className="text-3xl font-black">{ind.pricing ? "Pricing on your demo call" : "Pricing after your free audit"}</p>
          )}
          <ul className="my-8 space-y-3 text-left text-zinc-300">
            {MONTHLY_INCLUDES.map((f) => (
              <li key={f} className="flex gap-3">
                <Check />
                {f}
              </li>
            ))}
          </ul>
          <PrimaryButton href="#demo">{cta}</PrimaryButton>
        </div>
      </Section>

      {/* Proof */}
      {ind.proof && (
        <Section>
          <SectionHeader eyebrow="Proof" title="We Build for Businesses Like Yours" />
          <div className={`${cardClass(true)} mx-auto max-w-3xl`}>
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-black">{ind.proof.name}</h3>
              {ind.proof.tag && (
                <span className="rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  {ind.proof.tag}
                </span>
              )}
            </div>
            <p className="text-sm font-bold tracking-wide text-zinc-500">{ind.proof.location}</p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">{ind.proof.body}</p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm font-bold tracking-wide">
              {ind.proof.url && (
                <a href={ind.proof.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">
                  Visit {ind.proof.url.replace(/^https?:\/\//, "")} →
                </a>
              )}
              <Link href="/clients" className="text-zinc-300 hover:text-white">
                See all clients →
              </Link>
            </div>
          </div>
        </Section>
      )}

      {/* Demo form */}
      <Section id="demo" alt narrow>
        <SectionHeader
          eyebrow="Get Started"
          title={ind.demoTitle ?? "See What We'd Build for You"}
          intro={ind.demoIntro ?? "Tell us about your business. We'll show you the plan, no obligation."}
        />
        <div className={`${cardClass(true)} mx-auto max-w-2xl`}>
          <LeadForm type="demo" source={ind.slug} roles={ind.roles} roleLabel="I'm the…" cta={ind.cta ?? "Get My Free Demo"} />
        </div>
      </Section>

      {/* FAQ */}
      <Section narrow>
        <SectionHeader eyebrow="FAQ" title="Questions" />
        <FaqList items={ind.faq} />
        {ind.articles && (
          <div className="mt-16">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.35em] text-amber-400">Go Deeper</p>
            <ul className="grid gap-4 md:grid-cols-2">
              {ind.articles.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-5 font-bold transition-colors hover:border-amber-400/40"
                  >
                    {a.title}
                    <span className="flex-shrink-0 text-amber-400 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="mt-12 text-center text-sm text-zinc-500">
          Other industries:{" "}
          {INDUSTRIES.filter((i) => i.slug !== ind.slug).map((i, n) => (
            <span key={i.slug}>
              {n > 0 && " · "}
              <Link href={`/success-kit/${i.slug}`} className="text-zinc-400 transition-colors hover:text-amber-400">
                {i.name}
              </Link>
            </span>
          ))}
        </p>
      </Section>
    </main>
  );
}
