// "By Industry" verticals for the Services menu. The menu shows only vertical
// names; each links to ONE page. Verticals that already have a full page point
// at it (href). Verticals without one get an overview page at /industries/<slug>
// built from `page`. Set live: false to hide a vertical until its page is real.
// No "coming soon" pages ever ship.

import { INDUSTRIES } from "./industries";

export type Vertical = {
  slug: string;
  name: string;
  tagline: string;
  live: boolean;
  /** Existing page this vertical links to. Omit to use /industries/<slug>. */
  href?: string;
  page?: {
    eyebrow: string;
    headline: string;
    accent: string; // part of the headline shown in gold; must appear in headline
    summary: string;
    businesses: { name: string; href?: string }[];
    offers: { title: string; description: string }[];
    product?: { name: string; blurb: string; href: string };
    proof?: { client: string; note: string; href?: string }[];
  };
};

const kit = (slug: string) => {
  const i = INDUSTRIES.find((x) => x.slug === slug);
  return { name: i?.name ?? slug, href: `/success-kit/${slug}` };
};

export const VERTICALS: Vertical[] = [
  {
    slug: "real-estate-mortgage",
    name: "Real Estate & Mortgage",
    tagline: "DealKit lead apps for agents and loan officers",
    live: true,
    href: "/success-kit/dealkit",
  },
  {
    slug: "home-services",
    name: "Home Services & Trades",
    tagline: "Plumbers, electricians, HVAC, roofers and more",
    live: true,
    page: {
      eyebrow: "Home Services & Trades",
      headline: "Win the job before the next contractor picks up the phone.",
      accent: "Win the job",
      summary:
        "Websites, local SEO, and lead systems for trades that live and die by the phone. We build it, run it, and send the calls to you.",
      businesses: [
        kit("plumbers"),
        kit("electricians"),
        kit("hvac"),
        kit("roofers"),
        { name: "Shower glass & stone" },
      ],
      offers: [
        {
          title: "Phone-first website",
          description: "Tap-to-call on every screen, quote requests with photos, and a page for every town you serve.",
        },
        {
          title: "Missed-call text-back",
          description: "Miss a call on the job and the customer gets an instant text from your business, so the work doesn't walk.",
        },
        {
          title: "Local SEO & reviews",
          description: "Google Business Profile, service-area pages, and a review request after every job.",
        },
      ],
      product: {
        name: "Home Services Success Kits",
        blurb:
          "Done-for-you website and lead system for your trade, with hosting, updates, lead alerts, and monthly review requests handled for you. Pick your trade to see what's included.",
        href: "/success-kit/plumbers",
      },
      proof: [
        {
          client: "Diamond Bond Oregon",
          note: "Shower glass & stone protection, Lake Oswego. Full site rebuild with free-estimate lead capture, and every old URL redirected to protect rankings.",
          href: "https://diamondbondoregon.com",
        },
      ],
    },
  },
  {
    slug: "restaurants",
    name: "Restaurants & Food",
    tagline: "Restaurants, food carts, and online ordering",
    live: true,
    href: "/success-kit/restaurants",
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    tagline: "Chiropractic, clinics, and wellness practices",
    live: false, // no public page or shareable case study yet
  },
  {
    slug: "weddings-events",
    name: "Weddings & Events",
    tagline: "Planners, venues, and event pros",
    live: true,
    href: "/success-kit/weddings-events",
  },
  {
    slug: "education-students",
    name: "Education & Students",
    tagline: "Student Success Kit for families",
    live: false, // flip on when /services/success-kit/student ships
  },
  {
    slug: "creators-artists",
    name: "Creators & Artists",
    tagline: "Musicians, artists, and independent publishers",
    live: true,
    page: {
      eyebrow: "Creators & Artists",
      headline: "A home base that sells the work, not just shows it.",
      accent: "sells the work",
      summary:
        "Portfolio sites for musicians, visual artists, and independent publishers, built to turn fans into buyers, bookings, and commissions.",
      businesses: [
        { name: "Musicians & bands" },
        { name: "Visual artists" },
        { name: "Independent publishers" },
      ],
      offers: [
        {
          title: "Portfolio that converts",
          description: "A gallery, album, or archive that loads fast and looks right on every phone.",
        },
        {
          title: "Shop, stream & book",
          description: "Links to your Etsy shop or streaming platforms, plus booking and commission inquiries that reach you.",
        },
        {
          title: "Get found",
          description: "SEO and AI search visibility so the people looking for your kind of work can find it.",
        },
      ],
      proof: [
        {
          client: "Eel Sallad",
          note: "Pacific Northwest GrungeGrass band. Album and streaming links, live video, photo gallery, and booking inquiries.",
          href: "https://eelsallad.com",
        },
        {
          client: "Brett Parker",
          note: "Charcoal artist. Portfolio gallery with Etsy-linked shop for originals and prints, and commission requests.",
          href: "https://brettparkerartist.com",
        },
      ],
    },
  },
];

export const liveVerticals = VERTICALS.filter((v) => v.live);

/** Where a vertical's menu link goes. */
export const verticalHref = (v: Vertical) => v.href ?? `/industries/${v.slug}`;

/** Verticals that render an overview page at /industries/<slug>. */
export const pageVerticals = liveVerticals.filter((v) => !v.href && v.page);

export const getVertical = (slug: string) => pageVerticals.find((v) => v.slug === slug);

export const INTAKE_LINK = { label: "Don't see your industry? Let's talk", href: "/contact" };

// Core services column of the Services menu, pointing at real pages.
export const CORE_SERVICES = [
  { name: "AI Systems Architecture", blurb: "Automation, AI assistants, live dashboards.", href: "/ai-systems" },
  { name: "AI Search Visibility", blurb: "Get recommended by ChatGPT, Gemini & more.", href: "/services/ai-search-visibility" },
  { name: "Web Design", blurb: "Custom sites, live in as little as 7 days.", href: "/services/website-in-7-days" },
  { name: "SEO", blurb: "Rank where your buyers search.", href: "/our-seo-process" },
  { name: "Lead Generation", blurb: "AI lead capture and follow-up.", href: "/ai-systems" },
];
