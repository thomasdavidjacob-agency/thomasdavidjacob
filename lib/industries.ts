// Done-for-you industry pages. TDJ builds and runs it; the owner gets the calls.
// One entry = one page at /success-kit/<slug>, one menu item and one demo-form option.
// To add an industry, copy an entry and edit it. Nothing else needs to change.

export type IndustryGroup = "Home services" | "Hospitality & events";

export type Industry = {
  slug: string;
  name: string; // menu label
  group: IndustryGroup;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  accent: string; // part of the headline shown in gold; must appear in headline
  subhead: string;
  cta?: string; // main button label; default "Get a Free Demo"
  problemsTitle?: string; // default "What's Costing You Jobs"
  problemsIntro?: string;
  problems?: string[];
  stats?: { value: string; label: string; body: string }[]; // shown instead of problems when set
  buildsTitle?: string; // default "Built and Run for You"
  buildsIntro?: string;
  builds: { title: string; body: string }[];
  worksWith: string[]; // software we connect to
  steps?: [string, string][]; // default 3-step process
  pricing?: { setup: number; monthly: number }; // omit to show "Pricing after your free audit"
  pricingNote?: string;
  proof?: { name: string; tag?: string; location: string; body: string; url?: string };
  demoTitle?: string;
  demoIntro?: string;
  faq: [string, string][];
  articles?: { title: string; href: string }[]; // related blog posts
  roles: string[]; // "I run a…" options in the demo form
};

// Set false to hide prices on industry pages and show "Get pricing" instead.
export const SHOW_INDUSTRY_PRICING = true;

export const MONTHLY_INCLUDES = [
  "Hosting, security and updates",
  "Content changes handled for you",
  "Lead alerts and monthly lead report",
  "Review requests running every month",
];

const tradeFaq = (trade: string, tools: string): [string, string][] => [
  [
    "Do I need to do anything technical?",
    `No. You give us 20 minutes on the phone about your ${trade} business. We build it, launch it and keep it running.`,
  ],
  [
    "Can I keep my website domain?",
    "Yes. We point your existing domain at the new site. You own your domain and your content.",
  ],
  [
    "Will it work with the software I already use?",
    `Yes. Leads can go to your phone and email, or straight into ${tools}.`,
  ],
  [
    "How fast will it be live?",
    "We set a launch date on the first call, once we know your services and service area.",
  ],
];

const HOME_TOOLS = "Jobber, Housecall Pro or ServiceTitan";

export const INDUSTRIES: Industry[] = [
  {
    slug: "plumbers",
    name: "Plumbers",
    group: "Home services",
    seoTitle: "Websites & Lead Systems for Plumbers | TDJ",
    seoDescription:
      "TDJ builds and runs plumber websites with click-to-call, quote requests, missed-call text-back and Google review requests. You fix pipes; we fill the schedule.",
    eyebrow: "For plumbing companies",
    headline: "Never lose an emergency call to voicemail again.",
    accent: "emergency call",
    subhead:
      "We build and run your website, quote requests and review engine. You stay on the job; the leads come to your phone.",
    problems: [
      "Calls go to voicemail while you're under a sink, and the customer calls the next plumber",
      "Your website hasn't been touched in years and doesn't work on a phone",
      "Competitors show up first when someone searches your town",
      "Happy customers never get around to leaving a review",
    ],
    builds: [
      { title: "Emergency-first website", body: "Tap-to-call on every screen, plus a page for every town you serve." },
      { title: "Quote requests with photos", body: "Customers send the leak, the clog or the water heater before you call back." },
      { title: "Missed-call text-back", body: "Miss a call and the customer gets an instant text from your business, so the job doesn't walk." },
      { title: "Review engine", body: "One text after each job asks for a Google review." },
      { title: "Leads where you work", body: `Alerts to your phone, or straight into ${HOME_TOOLS}.` },
      { title: "License on every page", body: "Your contractor license number and service area shown on every page." },
    ],
    worksWith: ["Jobber", "Housecall Pro", "ServiceTitan", "Google Business Profile"],
    pricing: { setup: 997, monthly: 297 },
    faq: tradeFaq("plumbing", HOME_TOOLS),
    roles: ["Owner", "Office manager", "Other"],
  },
  {
    slug: "electricians",
    name: "Electricians",
    group: "Home services",
    seoTitle: "Websites & Lead Systems for Electricians | TDJ",
    seoDescription:
      "TDJ builds and runs electrician websites with panel upgrade and EV charger pages, quote requests, missed-call text-back and review requests.",
    eyebrow: "For electrical contractors",
    headline: "Book more panel upgrades and EV chargers.",
    accent: "panel upgrades and EV chargers",
    subhead:
      "We build and run the website and lead system that brings in the jobs you want. You stay on the tools.",
    problems: [
      "Most calls are small fixes while the big jobs go to whoever ranks first",
      "No time to answer the phone on a job, so leads go cold",
      "Your site doesn't explain what you actually do best",
      "Reviews trickle in when they should pile up",
    ],
    builds: [
      { title: "Website built around your best jobs", body: "Dedicated pages for panel upgrades, EV chargers, generators, remodels and service calls." },
      { title: "Project quote requests", body: "Customers describe the job and send photos of the panel before you call." },
      { title: "Missed-call text-back", body: "Every missed call gets an instant text so the lead stays yours." },
      { title: "Review engine", body: "An automatic review request after every completed job." },
      { title: "Leads where you work", body: `Alerts to your phone, or straight into ${HOME_TOOLS}.` },
      { title: "License on every page", body: "Your license number and service area shown on every page." },
    ],
    worksWith: ["Jobber", "Housecall Pro", "ServiceTitan", "Google Business Profile"],
    pricing: { setup: 997, monthly: 297 },
    faq: tradeFaq("electrical", HOME_TOOLS),
    roles: ["Owner", "Office manager", "Other"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    group: "Home services",
    seoTitle: "Websites & Lead Systems for HVAC Companies | TDJ",
    seoDescription:
      "TDJ builds and runs HVAC websites with repair and install requests, maintenance plan signups, seasonal tune-up campaigns, missed-call text-back and review requests.",
    eyebrow: "For heating & cooling companies",
    headline: "Be the first call when the AC quits.",
    accent: "first call",
    subhead:
      "We build and run your website, service requests and seasonal campaigns, so peak season fills your board and the slow months don't sit empty.",
    problems: [
      "Peak-season calls pile up faster than the office can answer them",
      "Slow months leave crews with gaps on the schedule",
      "Maintenance plans are sold on the truck, if at all",
      "Install quotes go out and never get followed up",
    ],
    builds: [
      { title: "Repair-first website", body: "Tap-to-call, a no-heat / no-AC request form and a page for every town you serve." },
      { title: "Install and replacement requests", body: "Customers share system age and photos so your techs show up ready to quote." },
      { title: "Maintenance plan signup page", body: "Sell tune-up plans online, all year." },
      { title: "Seasonal tune-up campaigns", body: "Spring and fall reminders to past customers that fill the slow months." },
      { title: "Missed-call text-back", body: "Every missed call gets an instant text during the rush." },
      { title: "Review engine", body: "An automatic review request after every visit." },
    ],
    worksWith: ["ServiceTitan", "Housecall Pro", "Jobber", "Google Business Profile"],
    pricing: { setup: 997, monthly: 297 },
    faq: tradeFaq("HVAC", "ServiceTitan, Housecall Pro or Jobber"),
    roles: ["Owner", "Office manager", "Other"],
  },
  {
    slug: "roofers",
    name: "Roofers",
    group: "Home services",
    seoTitle: "Websites & Lead Systems for Roofing Companies | TDJ",
    seoDescription:
      "TDJ builds and runs roofing websites with inspection request funnels, project galleries, storm damage pages, missed-call text-back and review requests.",
    eyebrow: "For roofing contractors",
    headline: "Turn storm season into booked inspections.",
    accent: "booked inspections",
    subhead:
      "We build and run the website and inspection funnel that books estimates while your crews are on roofs.",
    problems: [
      "After a storm, every homeowner calls whoever answers first",
      "Estimates go out and nobody follows up",
      "Your best work lives on a phone, not on your website",
      "Out-of-town storm chasers outrank you in your own town",
    ],
    builds: [
      { title: "Inspection request funnel", body: "Homeowners book an inspection and upload photos of the damage." },
      { title: "Project gallery", body: "Before-and-after photos of your real jobs, organized by neighborhood." },
      { title: "Storm damage pages", body: "Clear pages explaining your inspection process for hail, wind and leaks." },
      { title: "Estimate follow-up", body: "Automatic reminders on open estimates so jobs don't go quiet." },
      { title: "Missed-call text-back", body: "Every missed call gets an instant text from your business." },
      { title: "Review engine", body: "An automatic review request after every finished roof." },
    ],
    worksWith: ["JobNimbus", "AccuLynx", "Jobber", "Google Business Profile"],
    pricing: { setup: 997, monthly: 297 },
    faq: tradeFaq("roofing", "JobNimbus, AccuLynx or Jobber"),
    roles: ["Owner", "Sales manager", "Office manager", "Other"],
  },
  {
    // Replaces the old /restaurant-tech page (redirected here). Copy carried over from it.
    slug: "restaurants",
    name: "Restaurants & food carts",
    group: "Hospitality & events",
    seoTitle: "Restaurant Tech & Toast POS Integration | Oregon | TDJ",
    seoDescription:
      "We connect your POS, website, online ordering, delivery apps, and reservations into one system. Toast, Square, and Clover integration for Oregon restaurants and food carts.",
    eyebrow: "Restaurant & hospitality tech",
    headline: "Your POS and your website should be talking.",
    accent: "should be talking.",
    subhead:
      "We connect Toast, Square, and Clover to commission-free online ordering, delivery apps, reservations, and live menu sync, so you update a price once instead of in six places and keep the margin the apps have been taking.",
    cta: "Get a Free Commission Audit",
    problemsTitle: "Disconnected Systems Are Expensive",
    problemsIntro:
      "Most restaurants did not choose a fragmented stack. It accumulated: a POS here, a delivery tablet there, a website someone's cousin built in 2019. The cost shows up quietly, every single ticket.",
    stats: [
      {
        value: "15–30%",
        label: "Typical third-party delivery commission",
        body: "On a $40 ticket that is $6 to $12 off the top, before food cost and labor. Every order routed through the apps is an order you rent instead of own.",
      },
      {
        value: "6+",
        label: "Places a menu change has to be made",
        body: "POS, website, DoorDash, Uber Eats, Grubhub, printed menu. Miss one and a customer orders something you stopped serving in March.",
      },
      {
        value: "0",
        label: "Customer records the apps hand back",
        body: "Every order placed through a delivery platform belongs to the platform. You cook the food; they keep the relationship.",
      },
    ],
    buildsTitle: "One System, Not Six Logins",
    buildsIntro:
      "We work with the equipment you already own. Nothing here requires you to replace your register or retrain your kitchen.",
    builds: [
      {
        title: "POS integration",
        body: "Toast, Square, or Clover. We connect the register you already use to everything else, so menu, prices and order flow live in one place.",
      },
      {
        title: "Commission-free online ordering",
        body: "Ordering built into your own website, feeding straight into your POS. An order placed on your own site keeps the margin in your business.",
      },
      {
        title: "Delivery app sync",
        body: "Stay on DoorDash, Uber Eats, or Grubhub without running them blind. An 86ed item disappears everywhere at once.",
      },
      {
        title: "One-source menu sync",
        body: "Change a price once and it updates on your site, your ordering page, and every delivery platform.",
      },
      {
        title: "Reservations & waitlist",
        body: "OpenTable, Resy, Tock, or a simple booking flow of your own, connected to your site so guests can hold a table without leaving the page.",
      },
      {
        title: "Reviews & repeat orders",
        body: "Review requests timed to the end of a meal, and a direct line back to people who already ordered once.",
      },
    ],
    worksWith: ["Toast", "Square", "Clover", "DoorDash", "Uber Eats", "Grubhub", "OpenTable", "Resy", "Tock"],
    steps: [
      ["Audit", "We sit down with your POS reports and delivery statements and put a real figure on what your current stack costs you every month."],
      ["Integration map", "A plain-English blueprint of what connects to what: which systems stay, which get replaced, and where every order will flow."],
      ["Build", "We build the site and ordering flow, wire up the integrations, and test against real orders before a single customer sees it."],
      ["Launch & train", "Your staff gets trained on the new flow, with documentation written for a busy kitchen. Then we watch the first weeks closely and tune."],
    ],
    pricingNote:
      "Every kitchen runs a different stack, so pricing comes after the free audit, once we know what you already use and what it costs you.",
    proof: {
      name: "La Fondita",
      tag: "Pro bono",
      location: "Authentic Mexican food cart · Medford, OR",
      body: "A family-run cart with a 4.9-star reputation and no website to match it. We built a fully bilingual English and Spanish site and gave their weekend-only menudo, birria, pozole and barbacoa their own landing pages, because those are the dishes people plan a drive around. Zero ongoing hosting cost to the family.",
      url: "https://lafondita.food",
    },
    demoTitle: "Find Out What Your Current Setup Costs You",
    demoIntro:
      "Send us a recent month of delivery statements and we'll put a real number on the commission you're paying, and what a direct ordering channel would keep in your business. No charge, no obligation.",
    faq: [
      [
        "Do I have to leave Toast to take direct orders?",
        "No. Toast stays exactly where it is. We build ordering into your own website and connect it to the POS you already run, so tickets print the way your kitchen expects.",
      ],
      [
        "What if I use Square or Clover instead of Toast?",
        "That works too. Square and Clover both expose the integrations we need. Tell us what you run and we'll confirm what's possible before you commit to anything.",
      ],
      [
        "Should I drop the delivery apps entirely?",
        "Usually not. The apps are a discovery channel. The goal is to stop paying commission on repeat customers who would order from you directly if the option existed and was easy to find.",
      ],
      [
        "How long does a build take?",
        "A straightforward site with ordering and POS integration typically runs three to five weeks from kickoff to launch. Reservations, loyalty or multi-location menu sync extend that. You get a real timeline after the audit.",
      ],
      [
        "Do you work with food carts, or only brick-and-mortar restaurants?",
        "Both. Food carts and trucks run on tighter margins, which makes commission savings matter more. We built La Fondita in Medford as a pro bono project for exactly this reason.",
      ],
      [
        "What happens if something breaks at 7pm on a Friday?",
        "Every build ships with documentation and a fallback path, so a failed integration never stops you from taking orders. Ongoing support is available, and we're local: Oregon City, not an overseas ticket queue.",
      ],
    ],
    articles: [
      { title: "Toast POS and the Direct Ordering Revolution for Oregon Restaurants", href: "/blog/toast-pos-direct-ordering-system-oregon-restaurants" },
      { title: "The True Cost of Grubhub and Uber Eats: What Oregon Restaurant Owners Need to See", href: "/blog/true-cost-of-grubhub-uber-eats-oregon-restaurants" },
      { title: "How Oregon Restaurants Are Escaping Grubhub and Uber Eats Commissions", href: "/blog/restaurants-escaping-delivery-app-commissions-oregon" },
      { title: "AI-Powered Food Cost Management: Cutting Waste and Boosting Margins", href: "/blog/ai-food-cost-reduction-oregon-restaurants" },
      { title: "AI Staff Scheduling: Cutting Labor Costs Without Cutting Quality", href: "/blog/ai-staff-scheduling-labor-cost-oregon-businesses" },
      { title: "API Integrations Explained: The Layer That Connects Your Business", href: "/blog/api-integrations-guide-oregon-business-owners" },
    ],
    roles: ["Owner", "General manager", "Food cart / truck owner", "Other"],
  },
  {
    slug: "weddings-events",
    name: "Wedding & event pros",
    group: "Hospitality & events",
    seoTitle: "Inquiry & Booking Systems for Wedding and Event Pros | TDJ",
    seoDescription:
      "TDJ builds and runs websites for wedding planners, venues and event pros: qualified inquiry funnels, package pages, consultation booking and review requests.",
    eyebrow: "For planners, venues & event pros",
    headline: "Turn inquiries into booked dates.",
    accent: "booked dates",
    subhead:
      "We build and run the website and inquiry system that filters tire-kickers and books consultations with real couples and clients.",
    problems: [
      "Inquiries arrive with no date, budget or guest count",
      "Hours go into replying to people who were never a fit",
      "Packages and pricing live in PDFs nobody opens",
      "Past clients love you but rarely leave reviews",
    ],
    builds: [
      { title: "Qualified inquiry funnel", body: "Captures date, budget, guest count and style before you reply." },
      { title: "Package pages", body: "Your packages, presented in your brand, so clients arrive informed." },
      { title: "Consultation booking", body: "Qualified inquiries book a call straight onto your calendar." },
      { title: "Portfolio gallery", body: "Your best events, organized so clients can picture theirs." },
      { title: "Review engine", body: "Review requests after every event." },
      { title: "Leads where you work", body: "Inquiries go to your email or straight into HoneyBook or Dubsado." },
    ],
    worksWith: ["HoneyBook", "Dubsado", "Google Calendar", "Google Business Profile"],
    pricing: { setup: 697, monthly: 197 },
    proof: {
      name: "Amore Coordination",
      location: "Wedding & event planning · Portland, OR & SW Washington",
      body: "Amy Elizabeth Ha has coordinated over 230 weddings in a decade-plus career. We built her a site that carries that experience the way she does in person, warm and welcoming to couples and families of every background, with inquiry flows that turn browsing couples into booked consultations.",
      url: "https://amorecoordination.com",
    },
    faq: [
      [
        "Do I need to do anything technical?",
        "No. Tell us about your packages and ideal clients. We build it, launch it and keep it running.",
      ],
      [
        "Will it work with my CRM?",
        "Yes. Inquiries can go to email or straight into HoneyBook or Dubsado.",
      ],
      [
        "Can I keep my website domain?",
        "Yes. You own your domain and your content.",
      ],
    ],
    roles: ["Planner / coordinator", "Venue", "Photographer / videographer", "Caterer", "Other event pro"],
  },
];

export const INDUSTRY_GROUPS: IndustryGroup[] = ["Home services", "Hospitality & events"];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
