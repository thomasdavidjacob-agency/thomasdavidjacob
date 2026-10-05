import type { Metadata } from "next";
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
import { DEALKIT_PLANS, DEALKIT_TEMPLATES, FOUNDING, TEAM_EXTRA_SEAT } from "@/lib/success-kit";

export const metadata: Metadata = {
  title: "DealKit | Branded Lead Apps for Realtors & Loan Officers | TDJ",
  description:
    "DealKit gives Realtors, loan officers and brokerages branded lead pages, calculators and funnels with disclosures built in. Founding member pricing available.",
};

const STEPS = [
  ["Add your brand", "Logo, colors, headshot and license details, entered once."],
  ["Pick a template", "Lead capture, calculators, open house sign-in, home value requests and more."],
  ["Publish and collect leads", "Go live on your own domain and route leads to email or your CRM."],
];

const FAQ: [string, string][] = [
  [
    "Who owns the leads?",
    "You do. Leads go to you and your CRM. TDJ never sells, shares or routes your leads to anyone.",
  ],
  [
    "Can I leave and take my work with me?",
    "Yes. You can export your pages and leads any time.",
  ],
  [
    "How does the founding rate work?",
    "Founding members keep their rate for life as long as they stay subscribed. If you cancel and come back later, you rejoin at the current price.",
  ],
  [
    "Is there a free plan?",
    "No. Starter is $29/month, so you can try DealKit for little and upgrade when you're ready.",
  ],
  [
    "How does the Team plan work?",
    `The broker buys 10 seats, sets the brokerage brand once and assigns seats to agents. Every agent gets their own pages with their own license details. Extra seats are $${TEAM_EXTRA_SEAT}/month each.`,
  ],
];

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const plan = (name: string) => DEALKIT_PLANS.find((p) => p.name === name)!;
const ultimate = plan("Ultimate");
const team = plan("Team");

export default function DealKitPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl">
          <PillBadge>Success Kit · DealKit</PillBadge>
          <AccentHeadline
            text="Branded Lead Apps for Realtors and Loan Officers."
            accent="Realtors and Loan Officers."
            className="mb-6"
          />
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
            Lead pages, calculators and funnels with your brand on every page and the required disclosures built
            in. Pick a template, publish, and start collecting leads.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="#founding">Get a Founding Seat</PrimaryButton>
            <SecondaryButton href="#pricing">See Pricing</SecondaryButton>
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            {FOUNDING.ultimateSeats} founding seats at {usd(ultimate.foundingPrice!)}/month for life. Opens{" "}
            {FOUNDING.opensLabel}.
          </p>
        </div>
      </section>

      {/* How it works */}
      <Section alt>
        <SectionHeader eyebrow="How It Works" title="Live in Three Steps" />
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map(([title, body], i) => (
            <li key={title} className={cardClass()}>
              <span className="text-sm font-black tracking-[0.2em] text-amber-400">0{i + 1}</span>
              <h3 className="mb-3 mt-3 text-xl font-black">{title}</h3>
              <p className="leading-relaxed text-zinc-400">{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Templates */}
      <Section>
        <SectionHeader
          eyebrow="Templates"
          title="Templates That Win Business"
          intro="Built for how agents and loan officers actually win clients, with fair housing and lending disclosures handled automatically."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEALKIT_TEMPLATES.map((t) => (
            <li key={t} className="flex gap-3 rounded-2xl border border-zinc-800 bg-[#0d0d0d] px-5 py-4 font-bold">
              <Check />
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* Pricing */}
      <Section id="pricing" alt>
        <SectionHeader
          eyebrow="Pricing"
          title="One Price List for Everyone"
          intro="Founding rates are locked for life while you stay subscribed."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {DEALKIT_PLANS.map((p) => (
            <div key={p.name} className={`${cardClass(p.highlight)} flex flex-col`}>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-black">{p.name}</h3>
                {p.highlight && (
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                    Popular
                  </span>
                )}
              </div>
              {p.foundingPrice ? (
                <div className="mt-5">
                  <p>
                    <span className="text-5xl font-black">{usd(p.foundingPrice)}</span>
                    <span className="text-zinc-400"> {p.unit}</span>
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    <span className="line-through">{usd(p.price)}</span> regular price
                  </p>
                  <p className="mt-2 text-xs font-bold tracking-wide text-amber-400">{p.foundingNote}</p>
                </div>
              ) : (
                <p className="mt-5">
                  <span className="text-5xl font-black">{usd(p.price)}</span>
                  <span className="text-zinc-400"> {p.unit}</span>
                </p>
              )}
              <ul className="mt-6 flex-1 space-y-3 text-sm text-zinc-300">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#founding"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-black tracking-wide transition-all ${
                  p.highlight
                    ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20 hover:scale-105 hover:bg-amber-300"
                    : "border border-white/15 text-zinc-300 hover:border-zinc-500 hover:bg-white/5 hover:text-white"
                }`}
              >
                {FOUNDING.checkoutLive ? "Get Started" : "Join the Founding List"}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-zinc-500">
          Signature Skins: premium designs from $99 to $499, one-time.
        </p>
      </Section>

      {/* Team */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-amber-400">For Brokerages &amp; Teams</p>
            <h2 className="mb-5 text-4xl font-black tracking-tight md:text-5xl">One Brand. Every Agent.</h2>
            <p className="text-lg leading-relaxed text-zinc-400">
              Set your brokerage brand once and give every agent their own branded pages. Assign and swap seats
              from one dashboard. Each agent&apos;s license details appear on their own pages.
            </p>
          </div>
          <div className={cardClass(true)}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Team · 10 seats</p>
            <p className="mt-3">
              <span className="text-5xl font-black">{usd(team.foundingPrice!)}</span>
              <span className="text-zinc-400"> /month founding</span>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              <span className="line-through">{usd(team.price)}</span> regular · first {FOUNDING.teamBrokerages}{" "}
              brokerages lock {usd(team.foundingPrice!)} for life
            </p>
            <p className="mt-4 text-zinc-300">Extra seats {usd(TEAM_EXTRA_SEAT)}/month each.</p>
          </div>
        </div>
      </Section>

      {/* Founding list */}
      <Section id="founding" alt narrow>
        <SectionHeader
          eyebrow="Founding Members"
          title="Claim a Founding Seat"
          intro={`Founding seats open ${FOUNDING.opensLabel}. Join the list for first access. ${FOUNDING.ultimateSeats} seats only.`}
        />
        <div className={`${cardClass(true)} mx-auto max-w-2xl`}>
          <LeadForm
            type="waitlist"
            source="dealkit"
            roles={["Realtor", "Loan officer", "Broker / team lead", "Other"]}
            cta="Join the Founding List"
            successTitle="You're on the list."
            successBody="We'll email you the moment founding seats open."
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section narrow>
        <SectionHeader eyebrow="FAQ" title="Questions" />
        <FaqList items={FAQ} />
        <p className="mt-12 text-center text-xs leading-relaxed text-zinc-600">
          DealKit is software by Thomas+David+Jacob. It is not a lender or brokerage and does not offer mortgage or
          real estate services. Members are responsible for their own licensing and advertising.
        </p>
      </Section>
    </main>
  );
}
