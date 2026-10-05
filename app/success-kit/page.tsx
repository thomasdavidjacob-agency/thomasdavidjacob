import type { Metadata } from "next";
import Link from "next/link";
import { AccentHeadline, PillBadge, PrimaryButton, Section, SectionHeader, cardClass } from "@/components/tdj-ui";
import { INDUSTRIES, INDUSTRY_GROUPS } from "@/lib/industries";
import { DEALKIT } from "@/lib/success-kit";

export const metadata: Metadata = {
  title: "Industries We Serve | Websites & Lead Systems by TDJ",
  description:
    "TDJ builds and runs websites and lead systems for plumbers, electricians, HVAC, roofers, restaurants, event pros, Realtors and loan officers across Oregon.",
};

function Arrow() {
  return (
    <svg
      className="h-5 w-5 text-amber-400 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function IndustriesPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <section className="relative overflow-hidden px-6 pb-24 pt-40 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl">
          <PillBadge>TDJ Success Kit</PillBadge>
          <AccentHeadline text="Built for Your Industry. Run for You." accent="Run for You." className="mb-6" />
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
            You&apos;re busy running the business. We build and run the website, lead forms and review requests
            made for how your industry wins customers.
          </p>
          <PrimaryButton href="#industries">Find Your Industry</PrimaryButton>
        </div>
      </section>

      <Section id="industries" alt>
        <SectionHeader eyebrow="Who We Serve" title="Pick Your Industry" />
        <div className="space-y-14">
          {INDUSTRY_GROUPS.map((group) => (
            <div key={group}>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">{group}</p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {INDUSTRIES.filter((i) => i.group === group).map((i) => (
                  <Link
                    key={i.slug}
                    href={`/success-kit/${i.slug}`}
                    className={`${cardClass()} group flex flex-col hover:-translate-y-1`}
                  >
                    <h3 className="text-2xl font-black">{i.name}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-zinc-400">{i.headline}</p>
                    <span className="mt-6 flex items-center gap-2 text-sm font-bold tracking-wide text-amber-400">
                      See what we build <Arrow />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">Real estate &amp; lending</p>
            <Link href={DEALKIT.href} className={`${cardClass(true)} group block hover:-translate-y-1`}>
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-2xl font-black">{DEALKIT.name}</h3>
                    <span className="rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                      New
                    </span>
                  </div>
                  <p className="text-sm font-bold tracking-wide text-amber-400">{DEALKIT.audience}</p>
                  <p className="mt-3 text-base leading-relaxed text-zinc-400 md:text-lg">{DEALKIT.blurb}</p>
                </div>
                <Arrow />
              </div>
            </Link>
          </div>
        </div>
      </Section>

      <Section narrow>
        <div className={`${cardClass()} text-center`}>
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">Don&apos;t See Your Industry?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            We build custom AI systems, websites and lead funnels for any business.
          </p>
          <PrimaryButton href="/contact">Talk to TDJ</PrimaryButton>
        </div>
      </Section>
    </main>
  );
}
