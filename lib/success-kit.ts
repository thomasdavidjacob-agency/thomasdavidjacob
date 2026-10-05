// Single source of truth for Success Kit menus, pages and pricing.
// Change prices or founding terms here and every page updates.

// DealKit is the self-serve product for real estate and lending.
// Industry pages (done for you) live in lib/industries.ts.
export const DEALKIT = {
  name: "DealKit",
  audience: "Realtors & loan officers",
  blurb: "Branded lead apps, calculators and funnels with disclosures built in.",
  href: "/success-kit/dealkit",
};

// "What we do" column of the Services menu, pointing at existing thomasdavidjacob.com pages.
export const AGENCY_SERVICES = [
  {
    name: "All Services",
    blurb: "Websites, SEO and marketing systems.",
    href: "/services",
  },
  {
    name: "AI Systems Architecture",
    blurb: "AI systems that automate and generate revenue.",
    href: "/ai-systems",
  },
  {
    name: "Our SEO Process",
    blurb: "How we get local businesses ranking.",
    href: "/our-seo-process",
  },
  {
    name: "Our Clients",
    blurb: "Businesses we've built for.",
    href: "/clients",
  },
];

// Founding terms. Seat counts stay as caps until checkout goes live;
// once Stripe is connected, show real "X of 50 left" numbers only.
export const FOUNDING = {
  opensLabel: "October 19, 2026",
  ultimateSeats: 50,
  teamBrokerages: 10,
  checkoutLive: false, // flip to true only after the launch gate passes
};

export const TEAM_EXTRA_SEAT = 49;

export type Plan = {
  name: string;
  price: number;
  foundingPrice?: number;
  unit: string;
  foundingNote?: string;
  highlight?: boolean;
  features: string[];
};

export const DEALKIT_PLANS: Plan[] = [
  {
    name: "Starter",
    price: 29,
    unit: "/month",
    features: [
      "2 templates: lead capture and payment calculator",
      "1 published app on a TDJ subdomain",
      "Basic brand kit",
      "Email lead alerts",
      "Disclosures built in",
    ],
  },
  {
    name: "Ultimate",
    price: 197,
    foundingPrice: 97,
    unit: "/month",
    foundingNote: `Founding rate for life, first ${FOUNDING.ultimateSeats} members`,
    highlight: true,
    features: [
      "Full template library",
      "Up to 10 published apps",
      "Custom domain",
      "Full brand kit",
      "CRM routing and webhooks",
      "Monthly AI editing credits",
    ],
  },
  {
    name: "Ultimate Plus",
    price: 297,
    foundingPrice: 197,
    unit: "/month",
    foundingNote: "Founding rate for life",
    features: [
      "Everything in Ultimate",
      "Larger AI editing allowance",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: 697,
    foundingPrice: 497,
    unit: "/month · 10 seats",
    foundingNote: `Founding rate for life, first ${FOUNDING.teamBrokerages} brokerages`,
    features: [
      `10 agent seats, +$${TEAM_EXTRA_SEAT}/seat after`,
      "One brokerage brand across every agent",
      "Broker dashboard to assign seats",
      "Each agent's own license on their pages",
      "Pooled AI editing credits",
    ],
  },
];

export const DEALKIT_TEMPLATES = [
  "Lead capture page",
  "Payment calculator",
  "Buyer guide funnel",
  "Home value request",
  "Open house sign-in",
  "First-time buyer quiz",
  "Refinance check",
  "Agent bio link page",
];
