// Growth & Content Studio offers. Each entry renders a full package page at
// /services/[slug] and a card on /services. Order here is card order.
//
// Tier prices are intentionally unset — add `price` to a tier once pricing is
// decided and the page will show it; until then the tier reads "Custom quote".

export type ServiceTier = {
  name: string
  bestFor: string
  price?: string
  features: string[]
  featured?: boolean
}

export type StudioService = {
  slug: string
  /** Card on /services */
  title: string
  cardDescription: string
  /** SVG path data for the 24x24 outline icon */
  icon: string[]
  metaTitle: string
  metaDescription: string
  /** Hero */
  eyebrow: string
  headline: [string, string]
  heroCopy: string
  cta: string
  problemHeading: string
  problems: { title: string; description: string }[]
  includes: { title: string; description: string }[]
  tiers: ServiceTier[]
  industries: {
    mortgage: string
    realEstate: string
    weddings: string
    local: string
  }
  process: { title: string; description: string }[]
  /** Guardrail callout shown above the FAQ — used where the work is regulated. */
  guardrail?: string
  faqs: { question: string; answer: string }[]
}

export const studioServices: StudioService[] = [
  // ── #1 AI Meta Ads Studio ──
  {
    slug: 'ai-ad-creative-studio',
    title: 'AI Ad Creative Studio',
    cardDescription:
      'Meta ads wear out fast. We produce fresh static, video, and carousel creative every month — hooks, copy, and visuals made with AI and finished by a human — so your campaigns never run on tired ads.',
    icon: [
      'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
    ],
    metaTitle: 'AI Ad Creative Studio | Facebook & Instagram Ads | Oregon',
    metaDescription:
      'Monthly Facebook and Instagram ad creative — hooks, copy, static, carousel, and short-form video — produced with AI and finished by a human. For Oregon businesses, loan officers, Realtors, and wedding pros.',
    eyebrow: 'AI Ad Creative Studio',
    headline: ['Fresh Ad Creative,', 'Every Single Month'],
    heroCopy:
      'Facebook and Instagram ads wear out. The same image shown to the same audience for weeks stops working, and most businesses don’t have a designer on call to replace it. We produce a steady monthly supply of ad creative — scroll-stopping hooks, tested copy, static images, carousels, and short video — built with AI tools and reviewed by a human before anything goes live.',
    cta: 'Get a Free Ad Review',
    problemHeading: 'Why Most Small-Business Ads Stall',
    problems: [
      {
        title: 'Creative fatigue is real',
        description:
          'Meta’s delivery system rewards fresh creative. When the same ad runs too long, people scroll past it, clicks drop, and you pay more for the same result.',
      },
      {
        title: 'Designers are slow and expensive',
        description:
          'A traditional shop quotes days per ad. By the time a new set arrives, the season, the listing, or the promotion has already moved on.',
      },
      {
        title: 'Boosting posts is not a strategy',
        description:
          'Hitting “Boost” on last week’s post spends money without a test plan. You never learn which message actually brings in leads.',
      },
    ],
    includes: [
      {
        title: 'Competitor Ad Research',
        description:
          'We pull what your competitors are running in the Meta Ad Library and map the angles, offers, and formats that are working in your market.',
      },
      {
        title: 'Hooks & Ad Copy',
        description:
          'Headlines, primary text, and opening lines written in batches, each built to test a different angle — trust, urgency, education, local pride.',
      },
      {
        title: 'Static & Carousel Ads',
        description:
          'Sized for Feed, Stories, and Reels placements, on-brand, and built from your real photos, listings, or products wherever possible.',
      },
      {
        title: 'Short-Form Video Ads',
        description:
          'Vertical video built from your footage, stills, or AI-generated motion — captioned, because most people watch with the sound off.',
      },
      {
        title: 'Monthly Creative Refresh',
        description:
          'New creative every month, shaped by what the last round taught us. Winners get variations; losers get retired.',
      },
      {
        title: 'Performance Notes',
        description:
          'A plain-English monthly recap of which angles and formats pulled their weight, so the next batch starts smarter.',
      },
    ],
    tiers: [
      {
        name: 'Starter',
        bestFor: 'Businesses testing Meta ads for the first time',
        features: [
          'Competitor ad research',
          '8 static ad variations / month',
          'Ad copy & headline sets',
          'Sized for Feed + Stories',
          'One revision round',
        ],
      },
      {
        name: 'Growth',
        bestFor: 'Businesses running ads every month',
        featured: true,
        features: [
          'Everything in Starter',
          '16 static & carousel variations / month',
          '4 short-form video ads / month',
          'Monthly refresh based on results',
          'Performance notes',
        ],
      },
      {
        name: 'Full-Service',
        bestFor: 'Creative and campaign management together',
        features: [
          'Everything in Growth',
          'Campaign setup & management',
          'Audience & retargeting build',
          'A/B test planning',
          'Monthly strategy call',
        ],
      },
    ],
    industries: {
      mortgage:
        'Education-led creative — first-time buyer, down payment assistance, and pre-approval messaging — that doesn’t lean on rates. Credit ads run under Meta’s Special Ad Category, and every piece carries your NMLS number.',
      realEstate:
        'Just-listed, open house, and “what’s your home worth” creative built from your listing photos. Housing ads run under Meta’s Special Ad Category, so the creative has to do the work narrow targeting can’t.',
      weddings:
        'Styled, emotional creative for couples in planning season — built around your real weddings, your availability, and the moments couples are shopping for.',
      local:
        'Offer-driven creative for restaurants, clinics, trades, and shops — new-customer offers, seasonal promotions, and local messaging sized for a local budget.',
    },
    process: [
      {
        title: 'Research',
        description:
          'A review of your competitors’ ads, your current ads, and what your customers actually respond to.',
      },
      {
        title: 'Creative Batch',
        description:
          'Your first month of hooks, copy, statics, and video — delivered for your approval before anything runs.',
      },
      {
        title: 'Launch',
        description:
          'We load the creative into your ad account, or hand it to whoever runs it, with a clear test plan.',
      },
      {
        title: 'Refresh',
        description:
          'Every month: keep what works, retire what doesn’t, and build new variations on the winners.',
      },
    ],
    guardrail:
      'Mortgage and real estate ads are regulated. We build in NMLS and brokerage disclosures, keep rate and payment trigger terms out of the copy, and route every piece through your compliance review before it runs.',
    faqs: [
      {
        question: 'Do I need to already be running ads?',
        answer:
          'No. The Starter plan is built for businesses testing Meta ads for the first time. We can hand the creative to whoever runs your ad account, or run the campaigns ourselves on the Full-Service plan.',
      },
      {
        question: 'Is AI-generated creative any good?',
        answer:
          'AI gets us from a blank page to many options fast. A human picks, edits, and polishes every piece before you see it. We use your real photos, listings, and products whenever possible — AI fills gaps, it doesn’t replace your brand.',
      },
      {
        question: 'Who owns the ads?',
        answer:
          'You do. Final creative files are yours to keep and reuse, whether or not we keep working together.',
      },
      {
        question: 'Can you guarantee results?',
        answer:
          'No one honest can. What we commit to is volume, quality, and a disciplined test plan — which is what gives your ads the best chance of finding a winner.',
      },
      {
        question: 'Is ad spend included?',
        answer:
          'No. Ad spend is paid directly to Meta and is separate from our fee. We’ll recommend a starting budget that fits your market during the research step.',
      },
    ],
  },

  // ── #2 AI Design Studio ──
  {
    slug: 'ai-design-studio',
    title: 'AI Design Studio',
    cardDescription:
      'An on-call design team without the payroll. Landing pages, lead magnets, social graphics, flyers, and presentation decks — produced every month with AI tools and a designer’s eye.',
    icon: [
      'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    ],
    metaTitle: 'AI Design Studio | Monthly Design Retainer | Oregon',
    metaDescription:
      'A monthly design retainer for landing pages, lead magnets, flyers, social graphics, and presentation decks. AI-accelerated, human-finished. Serving Portland metro and Oregon.',
    eyebrow: 'AI Design Studio',
    headline: ['Your Design Team,', 'On Monthly Retainer'],
    heroCopy:
      'Every business needs a steady stream of design — a flyer for Saturday’s open house, a new lead magnet, a landing page for this month’s promotion, a deck for Thursday’s pitch. We work as your on-call design studio: send a request, get polished work back fast, all for one predictable monthly fee.',
    cta: 'Start a Design Retainer',
    problemHeading: 'Design Shouldn’t Be the Bottleneck',
    problems: [
      {
        title: 'Freelancers disappear',
        description:
          'You find a good designer, they get busy, and the next request sits for two weeks. Every new freelancer means re-explaining your brand from scratch.',
      },
      {
        title: 'DIY eats your week',
        description:
          'An hour in Canva becomes three. You’re the expert in your business, not in font pairing — and it shows.',
      },
      {
        title: 'The brand drifts',
        description:
          'When design comes from five different places, your flyers, website, and social all look like different companies.',
      },
    ],
    includes: [
      {
        title: 'Request Queue',
        description:
          'Submit design requests through one simple channel. We work them in priority order so the urgent thing gets done first.',
      },
      {
        title: 'Landing Pages',
        description:
          'Single-purpose pages for a campaign, an event, or a lead magnet — built to convert, not just to look good.',
      },
      {
        title: 'Lead Magnets & Guides',
        description:
          'Downloadable guides, checklists, and PDFs that trade real value for an email address.',
      },
      {
        title: 'Social & Print Graphics',
        description:
          'Post templates, flyers, postcards, signage, and event materials in one consistent brand style.',
      },
      {
        title: 'Presentation Decks',
        description:
          'Listing presentations, buyer consultations, client proposals, and workshop slides.',
      },
      {
        title: 'Brand Kit',
        description:
          'Colors, fonts, logo usage, and reusable templates documented once, so everything stays consistent.',
      },
    ],
    tiers: [
      {
        name: 'Starter',
        bestFor: 'Solo pros with occasional design needs',
        features: [
          'Brand kit setup',
          'One active request at a time',
          'Social & print graphics',
          'Standard turnaround',
          'Revisions included',
        ],
      },
      {
        name: 'Growth',
        bestFor: 'Growing teams with weekly design needs',
        featured: true,
        features: [
          'Everything in Starter',
          'Two active requests at a time',
          'Landing pages & lead magnets',
          'Presentation decks',
          'Priority turnaround',
        ],
      },
      {
        name: 'Full-Service',
        bestFor: 'Teams that need design and motion',
        features: [
          'Everything in Growth',
          'Motion graphics & animated social',
          'Website section refreshes',
          'Monthly creative planning call',
          'Dedicated project channel',
        ],
      },
    ],
    industries: {
      mortgage:
        'Buyer guides, pre-approval checklists, co-branded Realtor flyers, and workshop decks — each with your NMLS information and ready for compliance review.',
      realEstate:
        'Listing presentations, just-listed and just-sold postcards, open house signage, neighborhood guides, and single-property landing pages.',
      weddings:
        'Planning checklists, service brochures, styled social templates, and vendor pitch decks that match the aesthetic couples book you for.',
      local:
        'Menus, promo flyers, signage, seasonal campaigns, and landing pages — consistent everywhere customers see you.',
    },
    process: [
      {
        title: 'Brand Kit',
        description: 'We document your colors, fonts, logos, and voice so every piece starts on-brand.',
      },
      {
        title: 'Submit',
        description: 'Send a request with any notes, photos, or examples of what you like.',
      },
      {
        title: 'Design',
        description: 'AI speeds up the drafts. A human designs the final.',
      },
      {
        title: 'Deliver & Revise',
        description: 'You get production-ready files and we revise until it’s right.',
      },
    ],
    faqs: [
      {
        question: 'How is this different from hiring a freelancer?',
        answer:
          'A predictable monthly fee, a queue that doesn’t disappear, and one team that already knows your brand. No re-briefing, no chasing.',
      },
      {
        question: 'What counts as one request?',
        answer:
          'A single deliverable: one flyer, one landing page, one set of social templates. Larger projects, like a full website, are quoted separately.',
      },
      {
        question: 'Do I own the files?',
        answer: 'Yes. Final files and editable source files are yours.',
      },
      {
        question: 'Can I pause during a slow season?',
        answer:
          'We’ll walk through term and pause options before you sign. The goal is a retainer that fits how your year actually runs.',
      },
      {
        question: 'Do you handle printing?',
        answer:
          'We deliver print-ready files and can coordinate directly with the printer of your choice.',
      },
    ],
  },

  // ── #8 Instagram Content Agency ──
  {
    slug: 'social-media-content-engine',
    title: 'Social Media Content Engine',
    cardDescription:
      'Not hourly management — a system. We build the content engine: platform strategy, a repeatable posting calendar, Reels and graphics produced in batches, and engagement that turns followers into customers.',
    icon: [
      'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    ],
    metaTitle: 'Instagram & Social Media Content Engine | Oregon',
    metaDescription:
      'Monthly Instagram, Facebook, and TikTok content — strategy, calendar, carousels, Reels, and captions — built to turn followers into clients. For Oregon businesses, Realtors, loan officers, and wedding pros.',
    eyebrow: 'Social Media Content Engine',
    headline: ['Social Media That', 'Actually Brings Clients'],
    heroCopy:
      'Most businesses post on Instagram and Facebook the way they check the weather — whenever they remember. We build a content engine instead: a strategy, a posting calendar, carousels, Reels, stories, and captions produced in monthly batches, plus the engagement habits that turn followers into inquiries.',
    cta: 'Get a Free Profile Audit',
    problemHeading: 'Why Most Business Accounts Stall',
    problems: [
      {
        title: 'Posting without a plan',
        description:
          'Random posts get random results. Without content pillars and a calendar, the account drifts and growth stalls.',
      },
      {
        title: 'Reels take forever',
        description:
          'Short-form video is where the reach is — and it’s the format most businesses struggle to make consistently.',
      },
      {
        title: 'Followers don’t become clients',
        description:
          'A pretty feed isn’t a business result. Without calls to action, DM follow-up, and a link that converts, attention goes nowhere.',
      },
    ],
    includes: [
      {
        title: 'Content Strategy & Pillars',
        description:
          'Three to five content themes built around what your audience wants and what you sell.',
      },
      {
        title: 'Monthly Content Calendar',
        description:
          'Every post planned a month ahead and sent for your approval, so nothing is last-minute.',
      },
      {
        title: 'Carousels & Graphics',
        description: 'Educational carousels and branded graphics designed in batches.',
      },
      {
        title: 'Reels & Short-Form Video',
        description:
          'Scripts, shot lists, editing, and captions for Instagram, Facebook, and TikTok.',
      },
      {
        title: 'Captions & Hashtags',
        description:
          'Written in your voice, with local keywords and a clear next step in every post.',
      },
      {
        title: 'Profile & Link Optimization',
        description:
          'Bio, highlights, and link page set up to turn profile visits into inquiries.',
      },
    ],
    tiers: [
      {
        name: 'Starter',
        bestFor: 'Accounts that need consistency first',
        features: [
          'Content strategy & pillars',
          '12 posts / month',
          'Captions & hashtags',
          'Monthly calendar for approval',
          'Profile optimization',
        ],
      },
      {
        name: 'Growth',
        bestFor: 'Businesses ready to grow reach',
        featured: true,
        features: [
          'Everything in Starter',
          '16 posts / month, including 4 Reels',
          'Story templates',
          'Scheduling & publishing',
          'Monthly performance recap',
        ],
      },
      {
        name: 'Full-Service',
        bestFor: 'Social as a real lead channel',
        features: [
          'Everything in Growth',
          '8 edited Reels / month',
          'Community management & DM triage',
          'Cross-posting to Facebook & TikTok',
          'Quarterly strategy review',
        ],
      },
    ],
    industries: {
      mortgage:
        'Homebuying education carousels, myth-busters, and closing-day celebrations (with client permission) — NMLS on the profile and compliance review on every post.',
      realEstate:
        'Listings, neighborhood spotlights, market snapshots, and agent-life content that keeps your sphere engaged between transactions.',
      weddings:
        'Real weddings, planning tips, and behind-the-scenes Reels on the platforms where couples start their vendor search.',
      local:
        'Specials, new arrivals, events, and behind-the-counter moments that bring people through the door.',
    },
    process: [
      {
        title: 'Audit',
        description: 'We review your profiles, past posts, and what your competitors are doing well.',
      },
      {
        title: 'Strategy',
        description: 'Content pillars, posting rhythm, and a first-month calendar for your approval.',
      },
      {
        title: 'Produce',
        description: 'Graphics, carousels, Reels, and captions made in monthly batches.',
      },
      {
        title: 'Publish & Learn',
        description: 'We post, track what lands, and shape the next month around it.',
      },
    ],
    faqs: [
      {
        question: 'Do I have to be on camera?',
        answer:
          'Not necessarily. Many Reels work with voiceover, text on screen, or product and location footage. Showing your face does build trust faster, so we’ll help you ease into it.',
      },
      {
        question: 'Who films the content?',
        answer:
          'Usually you or your team, with our shot lists and scripts making it quick. We handle the editing and everything after.',
      },
      {
        question: 'Do you respond to comments and DMs?',
        answer:
          'On the Full-Service plan we manage community engagement and flag real inquiries to you right away.',
      },
      {
        question: 'Which platforms do you cover?',
        answer:
          'Instagram and Facebook are the core. TikTok, LinkedIn, and Google Business Profile posts can be added.',
      },
      {
        question: 'How do we know it’s working?',
        answer:
          'Monthly reports track reach, engagement, profile visits, link clicks, and inquiries — not just follower count.',
      },
    ],
  },

  // ── #4 AI Creator → Personal Brand ──
  {
    slug: 'personal-brand-studio',
    title: 'Personal Brand & Video Studio',
    cardDescription:
      'Become the name people think of first. We plan, script, and package your YouTube and short-form video presence so you show up as the local expert — without it becoming a second job.',
    icon: [
      'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    ],
    metaTitle: 'Personal Brand & YouTube Content Studio | Oregon',
    metaDescription:
      'Topic research, scripts, thumbnails, editing, and publishing for YouTube and short-form video. Build a personal brand as the local expert — for loan officers, Realtors, wedding planners, and owners.',
    eyebrow: 'Personal Brand & Video Studio',
    headline: ['Become the Go-To', 'Expert in Your Market'],
    heroCopy:
      'People hire the professional they feel like they already know. Video lets you build that trust before the first phone call. We run the behind-the-scenes creator studio — topic research, scripts, thumbnails, editing, and publishing — so all you have to do is show up and hit record.',
    cta: 'Plan My Channel',
    problemHeading: 'Why Most Pros Quit Video by Week Three',
    problems: [
      {
        title: 'You don’t know what to say',
        description:
          'Everyone says video builds trust. Nobody tells you what to talk about, how to structure it, or how to keep it going.',
      },
      {
        title: 'Random posting goes nowhere',
        description:
          'Without a topic strategy, content becomes whatever you thought of that morning — and the algorithm treats it that way.',
      },
      {
        title: 'It takes too long',
        description:
          'Scripting, filming, editing, thumbnails, captions, posting. Done alone, it’s hours per video.',
      },
    ],
    includes: [
      {
        title: 'Topic & Keyword Research',
        description:
          'We find the questions your future clients are already searching on YouTube and Google, and build your calendar around them.',
      },
      {
        title: 'Scripts & Talking Points',
        description:
          'Full scripts or bullet outlines in your voice, structured to hook viewers in the first few seconds.',
      },
      {
        title: 'Batch Filming Plan',
        description:
          'Shoot days planned in advance with shot lists, so one afternoon produces a month of content.',
      },
      {
        title: 'Editing & Thumbnails',
        description:
          'Editing direction or full editing, plus titles and thumbnails built to earn the click.',
      },
      {
        title: 'Channel Setup',
        description:
          'YouTube, Instagram, TikTok, and Facebook profiles set up to turn viewers into leads.',
      },
      {
        title: 'Repurposing',
        description:
          'Each long video cut into shorts, posts, and newsletter material, so one idea works everywhere.',
      },
    ],
    tiers: [
      {
        name: 'Starter',
        bestFor: 'Professionals just getting on camera',
        features: [
          'Channel audit & setup',
          'Topic research & 30-day calendar',
          '4 scripts / month',
          'Titles & thumbnails',
          'Monthly check-in',
        ],
      },
      {
        name: 'Growth',
        bestFor: 'Pros ready to post every week',
        featured: true,
        features: [
          'Everything in Starter',
          '8 scripts / month',
          'Batch filming plan',
          'Short-form cutdowns from each video',
          'Publishing & captions',
        ],
      },
      {
        name: 'Full-Service',
        bestFor: 'The whole studio handled',
        features: [
          'Everything in Growth',
          'Full video editing',
          'Cross-platform repurposing',
          'Monthly analytics review',
          'Quarterly content strategy session',
        ],
      },
    ],
    industries: {
      mortgage:
        'Explainers on first-time buyer programs, down payment assistance, VA and FHA basics, and the loan process — the questions buyers search before they call. Scripts avoid rate promises and go through your compliance review.',
      realEstate:
        'Neighborhood tours, market updates, relocation guides, and “living in” videos that make you the face of your farm area.',
      weddings:
        'Venue walkthroughs, planning tips, real-wedding recaps, and behind-the-scenes content that shows couples what working with you feels like.',
      local:
        'Behind-the-scenes, how-it’s-made, and owner-story content that turns a local business into a local brand.',
    },
    process: [
      {
        title: 'Positioning',
        description: 'Define your niche, your audience, and what you want to be known for.',
      },
      {
        title: 'Calendar',
        description: 'Research-backed topics mapped out a month at a time.',
      },
      {
        title: 'Batch & Produce',
        description: 'Scripts, one shoot day, and editing.',
      },
      {
        title: 'Publish & Learn',
        description: 'Publish, see what lands, and double down on it.',
      },
    ],
    faqs: [
      {
        question: 'I hate being on camera. Can this still work?',
        answer:
          'Most people do at first. Good scripts and a batch-filming plan make it much easier, and we can start with lighter formats — voiceover, screen share, or photo-led content.',
      },
      {
        question: 'Which platform should I start with?',
        answer:
          'Usually YouTube for long-term search traffic, plus Instagram or TikTok for reach. We’ll recommend based on where your clients actually spend time.',
      },
      {
        question: 'Do I need expensive equipment?',
        answer:
          'No. A recent phone, a clip-on mic, and window light go a long way. We’ll give you a simple setup list.',
      },
      {
        question: 'How long before this brings in business?',
        answer:
          'Content compounds. It’s a months-long play, not a next-week one — which is why we often pair it with faster channels when you need leads now.',
      },
      {
        question: 'Do you film for me?',
        answer:
          'The core package is remote: you film, we handle everything around it. If you want on-site production, ask and we’ll talk through options.',
      },
    ],
  },

  // ── #11 AI UGC → AI Video ──
  {
    slug: 'ai-video-studio',
    title: 'AI Video & Digital Presenter',
    cardDescription:
      'More video, less filming. We create AI-assisted video — a consented digital version of you, clearly labeled AI presenters, and custom AI visuals — so you can publish every week without a camera crew.',
    icon: [
      'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
      'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ],
    metaTitle: 'AI Video & Digital Presenter Content | Oregon',
    metaDescription:
      'AI-assisted video for Reels, TikTok, YouTube Shorts, and ads — consented digital twins, labeled AI presenters, and custom AI b-roll. Honest, disclosed, and never fake testimonials.',
    eyebrow: 'AI Video & Digital Presenter',
    headline: ['More Video.', 'Less Time on Camera.'],
    heroCopy:
      'Video is the format everyone wants and nobody has time to film. We use AI video tools to multiply your output — a consented digital version of you for routine explainers, clearly labeled AI presenters for how-to content, and custom AI visuals and b-roll — so you can publish every week without living in front of a camera.',
    cta: 'See What’s Possible',
    problemHeading: 'The Video Problem, and the AI Trap',
    problems: [
      {
        title: 'Filming is the bottleneck',
        description:
          'Scheduling, setup, retakes, and editing turn one short video into half a day.',
      },
      {
        title: 'Stock footage looks like stock',
        description: 'Generic clips make every business look the same.',
      },
      {
        title: 'The fake-testimonial trap',
        description:
          'Some AI video vendors invent “customers” praising a product. That’s deceptive, the FTC’s rule on fake reviews and testimonials prohibits it, and it can sink a brand’s credibility overnight. We don’t do it.',
      },
    ],
    includes: [
      {
        title: 'Digital Twin (With Consent)',
        description:
          'An AI avatar and voice of you, built from a short recording session and used only for scripts you approve.',
      },
      {
        title: 'AI Presenter Videos',
        description:
          'Explainers and how-tos with an AI presenter that is clearly labeled as AI — never presented as a real customer.',
      },
      {
        title: 'AI B-Roll & Visuals',
        description:
          'Custom scenes, product shots, and motion graphics generated to match your brand instead of generic stock.',
      },
      {
        title: 'Scriptwriting',
        description: 'Short scripts built to hook, explain, and end with a clear next step.',
      },
      {
        title: 'Captions & Formatting',
        description:
          'Vertical, square, and wide versions with captions, ready for Reels, TikTok, YouTube Shorts, and ads.',
      },
      {
        title: 'Disclosure & Labeling',
        description:
          'AI-generated content labeled the way platforms and regulators increasingly expect.',
      },
    ],
    tiers: [
      {
        name: 'Starter',
        bestFor: 'Testing AI video on your channels',
        features: [
          'Script development',
          '4 AI presenter or b-roll videos / month',
          'Captions & vertical formatting',
          'AI labeling on every piece',
          'One revision round',
        ],
      },
      {
        name: 'Growth',
        bestFor: 'Weekly video without weekly filming',
        featured: true,
        features: [
          'Everything in Starter',
          'Digital twin setup (your likeness, your consent)',
          '8 videos / month',
          'Multiple aspect ratios',
          'Monthly performance notes',
        ],
      },
      {
        name: 'Full-Service',
        bestFor: 'Video across organic and paid',
        features: [
          'Everything in Growth',
          '12+ videos / month',
          'Ad-ready video variations',
          'Spanish and other language versions',
          'Quarterly creative planning',
        ],
      },
    ],
    industries: {
      mortgage:
        'Short program explainers and loan-process walkthroughs delivered by your consented digital twin — scripted, compliance-reviewed, and never used to fake a client testimonial.',
      realEstate:
        'Listing highlight videos, neighborhood explainers, and virtual staging clips that are clearly disclosed as virtually staged.',
      weddings:
        'Styled inspiration reels, planning tips, and service explainers that keep your feed moving between wedding seasons.',
      local:
        'Product showcases, menu highlights, and promo videos made without shutting the shop down for a shoot.',
    },
    process: [
      {
        title: 'Plan',
        description: 'Pick the formats, topics, and channels where AI video makes sense for you.',
      },
      {
        title: 'Set Up',
        description: 'Record a short session for your digital twin (optional) and lock the brand look.',
      },
      {
        title: 'Produce',
        description: 'Scripts, generation, editing, captions, and labeling — sent to you for approval.',
      },
      {
        title: 'Publish & Refine',
        description: 'Post, measure, and adjust the mix of AI and real footage.',
      },
    ],
    guardrail:
      'We don’t create fake customers. AI presenters are labeled as AI, digital twins are made only from your own likeness with your written consent, and testimonials come only from real clients.',
    faqs: [
      {
        question: 'Is AI video OK to use in marketing and ads?',
        answer:
          'Yes, used honestly. What’s not OK is presenting AI people as real customers or putting claims in someone’s mouth they never made. We label AI content and never fabricate testimonials.',
      },
      {
        question: 'What is a digital twin?',
        answer:
          'An AI avatar and voice built from a short recording of you. It can deliver scripts you approve without a new shoot every time. It’s created only with your written consent and used only for your content.',
      },
      {
        question: 'Will people know it’s AI?',
        answer:
          'We label it. For routine explainers, audiences care most about whether the information is useful. For relationship-building content, we still recommend real footage of you.',
      },
      {
        question: 'Can I reach Spanish-speaking clients this way?',
        answer:
          'Yes. AI translation and dubbing make other-language versions practical. We recommend a fluent reviewer check every translation before it’s published.',
      },
      {
        question: 'Who owns the videos and my digital twin?',
        answer:
          'You own the finished videos. Your digital twin is used only for your content and can be deleted at your request.',
      },
    ],
  },

  // ── #6 AI Ghostwriting ──
  {
    slug: 'ghostwriting',
    title: 'LinkedIn & Content Ghostwriting',
    cardDescription:
      'Your expertise, written for you. We turn your voice, stories, and opinions into LinkedIn posts and articles that build authority and bring in referrals — every piece approved by you.',
    icon: [
      'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    ],
    metaTitle: 'LinkedIn Ghostwriting for Professionals | Oregon',
    metaDescription:
      'LinkedIn posts, articles, and thought-leadership content written in your voice from monthly interviews. For loan officers, Realtors, wedding planners, and business owners. Every piece approved by you.',
    eyebrow: 'LinkedIn & Content Ghostwriting',
    headline: ['Your Voice.', 'Written for You.'],
    heroCopy:
      'You have years of hard-won expertise and no time to write about it. We interview you, learn how you talk, and turn what you know into consistent LinkedIn posts, articles, and thought-leadership content — in your voice, under your name, and approved by you before anything goes live.',
    cta: 'Book a Voice Session',
    problemHeading: 'Your Expertise Is Invisible Online',
    problems: [
      {
        title: 'Referral partners don’t see you',
        description:
          'The people who would send you business don’t know what you actually know. A profile that hasn’t posted in two years says nothing.',
      },
      {
        title: 'The blank page wins',
        description:
          'You have opinions and stories worth sharing. Turning them into a post takes an hour you don’t have.',
      },
      {
        title: 'Generic AI posts backfire',
        description:
          'Copy-paste AI content all sounds the same, and your network can tell. Posts without your stories and opinions build no trust.',
      },
    ],
    includes: [
      {
        title: 'Voice Discovery',
        description:
          'A recorded interview plus a review of your past writing, emails, and videos, so we capture how you actually sound.',
      },
      {
        title: 'Monthly Content Interview',
        description:
          'A short monthly call where we pull out stories, opinions, and lessons — the raw material for a month of posts.',
      },
      {
        title: 'LinkedIn Posts',
        description:
          'Written, formatted, and ready to post — stories, lessons, market takes, and client wins shared with permission.',
      },
      {
        title: 'Long-Form Articles',
        description:
          'LinkedIn articles or blog posts that go deeper and double as website content.',
      },
      {
        title: 'Profile Optimization',
        description:
          'Headline, About section, featured links, and banner rebuilt to turn profile visitors into conversations.',
      },
      {
        title: 'Engagement Playbook',
        description:
          'A simple daily routine for commenting and connecting, so your posts reach beyond your current network.',
      },
    ],
    tiers: [
      {
        name: 'Starter',
        bestFor: 'Pros getting started on LinkedIn',
        features: [
          'Voice discovery session',
          'Profile optimization',
          '8 posts / month',
          'Monthly content interview',
          'Approval before posting',
        ],
      },
      {
        name: 'Growth',
        bestFor: 'Building a steady referral engine',
        featured: true,
        features: [
          'Everything in Starter',
          '12 posts / month',
          '1 long-form article / month',
          'Engagement playbook',
          'Monthly performance recap',
        ],
      },
      {
        name: 'Full-Service',
        bestFor: 'A full thought-leadership presence',
        features: [
          'Everything in Growth',
          '16+ posts / month',
          '2 articles / month',
          'Newsletter or video scripts in your voice',
          'Scheduling & publishing handled',
        ],
      },
    ],
    industries: {
      mortgage:
        'Posts that build trust with Realtor partners and past clients — loan-process insight, program explainers, and closing stories — with NMLS disclosure and compliance review built in.',
      realEstate:
        'Market observations, negotiation stories, and neighborhood expertise that keep you top of mind with your sphere and bring in agent-to-agent referrals.',
      weddings:
        'Behind-the-scenes stories, vendor relationships, and planning wisdom that make you the planner other vendors recommend.',
      local:
        'Owner stories, community involvement, and lessons from running the business — the human side that turns customers into advocates.',
    },
    process: [
      {
        title: 'Voice Discovery',
        description: 'An interview and a review of how you already write and speak.',
      },
      {
        title: 'Content Plan',
        description: 'Themes and a monthly calendar built around the referrals you want.',
      },
      {
        title: 'Write & Approve',
        description: 'Drafts come to you. Nothing posts without your sign-off.',
      },
      {
        title: 'Publish & Engage',
        description: 'Post consistently and follow the engagement playbook.',
      },
    ],
    faqs: [
      {
        question: 'Is ghostwriting honest?',
        answer:
          'It’s how most executives, authors, and public figures publish. The ideas, stories, and opinions are yours; we help shape them. You approve every word before it goes out.',
      },
      {
        question: 'Will it sound like AI wrote it?',
        answer:
          'Not if it’s done right. AI helps us draft; your stories and a human editor make it sound like you. We cut the phrases that give AI writing away.',
      },
      {
        question: 'How much of my time does it take?',
        answer:
          'About an hour a month for the content interview, plus a few minutes to review and approve drafts.',
      },
      {
        question: 'Do you post for me?',
        answer:
          'On the Full-Service plan we schedule and publish. On the other plans we deliver ready-to-post content and you hit publish.',
      },
      {
        question: 'Can you write for other platforms?',
        answer:
          'Yes — Facebook, X, newsletters, and blog posts. We start most professionals on LinkedIn because that’s where referral partners are.',
      },
    ],
  },

  // ── #3 Newsletter Operator ──
  {
    slug: 'email-newsletter',
    title: 'Email Newsletter Management',
    cardDescription:
      'Your email list is the one audience you own. We write, design, and send a newsletter people actually open — and build the follow-up sequences that turn readers into repeat clients.',
    icon: [
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    ],
    metaTitle: 'Email Newsletter Management | Done-For-You | Oregon',
    metaDescription:
      'Done-for-you email newsletters and nurture sequences — list cleanup, strategy, writing in your voice, design, sending, and reporting. For Oregon businesses, Realtors, loan officers, and wedding pros.',
    eyebrow: 'Email Newsletter Management',
    headline: ['Turn Your Email List', 'Into Repeat Business'],
    heroCopy:
      'Most businesses are sitting on a list of past clients, leads, and contacts they almost never email. That list is the one audience no algorithm can take away. We run your newsletter end to end — strategy, writing, design, sending, and reporting — so you stay top of mind with the people most likely to hire you again or refer a friend.',
    cta: 'Get a Free List Review',
    problemHeading: 'Your Best Audience Is Going Cold',
    problems: [
      {
        title: 'The list goes quiet',
        description:
          'Contacts who haven’t heard from you in a year don’t remember you. When they’re ready to buy or refer, they call whoever emailed last.',
      },
      {
        title: 'Writing is the bottleneck',
        description:
          'You know you should send something. Finding the time and the words every month is where it falls apart.',
      },
      {
        title: 'Newsletters that read like ads',
        description:
          'Emails that only pitch get ignored, then unsubscribed. Readers stay for useful information, stories, and local insight.',
      },
    ],
    includes: [
      {
        title: 'List Audit & Cleanup',
        description:
          'We review your contacts, segment them — past clients, active leads, partners — and clear out bad addresses that hurt deliverability.',
      },
      {
        title: 'Newsletter Strategy',
        description:
          'A content plan built around what your readers care about, not just what you want to sell this month.',
      },
      {
        title: 'Writing in Your Voice',
        description:
          'Every issue sounds like you — drafted with AI, edited by a human who knows your business.',
      },
      {
        title: 'Design & Sending',
        description:
          'Branded, mobile-friendly templates. We schedule, send, and manage the platform so you don’t have to.',
      },
      {
        title: 'Nurture Sequences',
        description:
          'Automated welcome and follow-up emails for new leads, so every signup gets a consistent first impression.',
      },
      {
        title: 'Monthly Reporting',
        description:
          'Opens, clicks, replies, and which topics earned attention — in plain English.',
      },
    ],
    tiers: [
      {
        name: 'Starter',
        bestFor: 'A list you’ve never really emailed',
        features: [
          'List audit & cleanup',
          '1 newsletter / month',
          'Branded template',
          'Scheduling & sending',
          'Basic reporting',
        ],
      },
      {
        name: 'Growth',
        bestFor: 'Emailing consistently',
        featured: true,
        features: [
          'Everything in Starter',
          '2 newsletters / month',
          'List segmentation',
          'Welcome sequence for new leads',
          'Monthly performance recap',
        ],
      },
      {
        name: 'Full-Service',
        bestFor: 'Email as a lead engine',
        features: [
          'Everything in Growth',
          'Weekly newsletter',
          'Multiple nurture sequences',
          'Lead magnet & signup form build',
          'Quarterly strategy review',
        ],
      },
    ],
    industries: {
      mortgage:
        'Past-client and Realtor-partner newsletters with homebuying education, local market notes, and homeownership tips — no rate quotes in the copy, and every issue ready for compliance review.',
      realEstate:
        'Sphere-of-influence newsletters with neighborhood updates, home-value conversations, and local events — the referral engine most agents never get around to building.',
      weddings:
        'Planning timelines for engaged couples, vendor spotlights, and seasonal inspiration — plus a sequence that nurtures inquiries until they book a consultation.',
      local:
        'New menu items, seasonal offers, events, and loyalty perks sent to the customers who already chose you once.',
    },
    process: [
      {
        title: 'Audit',
        description: 'Your list, your platform, and what you’ve sent before.',
      },
      {
        title: 'Plan',
        description: 'Segments and a content calendar for the next quarter.',
      },
      {
        title: 'Write & Design',
        description: 'Every issue comes to you for approval before it sends.',
      },
      {
        title: 'Send & Learn',
        description: 'Send, measure, and sharpen the next issue.',
      },
    ],
    faqs: [
      {
        question: 'Which email platform do you use?',
        answer:
          'The one you already have — Mailchimp, Constant Contact, Flodesk, or your CRM’s built-in email. If you’re starting fresh, we’ll recommend one that fits.',
      },
      {
        question: 'I only have a few hundred contacts. Is it worth it?',
        answer:
          'Yes. A few hundred past clients and referral partners is exactly the list that produces repeat and referral business. The relationship matters more than the size.',
      },
      {
        question: 'Will it sound like me?',
        answer:
          'That’s the point. We study how you write and talk, and you approve every issue before it goes out.',
      },
      {
        question: 'What about spam laws?',
        answer:
          'Every send follows CAN-SPAM basics: a clear sender, a physical mailing address, and a working unsubscribe link.',
      },
      {
        question: 'Can you email a list I bought?',
        answer:
          'We don’t recommend it. Purchased lists hurt deliverability and trust. We’d rather help you grow a list of people who asked to hear from you.',
      },
    ],
  },

  // ── #5 AI SEO / GEO / AEO ──
  {
    slug: 'ai-search-visibility',
    title: 'AI Search Visibility',
    cardDescription:
      'Your customers are asking ChatGPT, Perplexity, and Google AI Overviews for recommendations — and those answers cite a handful of sources. We structure your content and data so you’re one of the businesses the AI names.',
    icon: [
      'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    ],
    metaTitle: 'AI Search Visibility | GEO & AEO Services | Oregon',
    metaDescription:
      'Get recommended by ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews. Generative engine optimization plus traditional SEO for Oregon businesses, loan officers, Realtors, and wedding pros.',
    eyebrow: 'AI Search Visibility · SEO + GEO',
    headline: ['Get Named When', 'AI Answers the Question'],
    heroCopy:
      'Your customers are asking ChatGPT, Claude, Gemini, Perplexity, and Google’s AI Overviews who to hire. Those answers name a small handful of businesses. We combine traditional SEO with generative engine optimization — structured data, answer-first content, and consistent information across the web — so your business is one of the names the AI gives.',
    cta: 'Get a Free AI Visibility Check',
    problemHeading: 'Search Is Changing Shape',
    problems: [
      {
        title: 'The answer replaces the list',
        description:
          'More questions now end with an AI-written answer instead of ten blue links. If you’re not in the answer, you may not be seen at all.',
      },
      {
        title: 'AI trusts consistency',
        description:
          'AI tools pull from your website, directories, reviews, and articles about you. When those sources disagree — or don’t exist — you’re easy to skip.',
      },
      {
        title: 'Old SEO is only half the job',
        description:
          'Ranking still matters, but content written only for keywords often isn’t structured for an AI to quote.',
      },
    ],
    includes: [
      {
        title: 'AI Visibility Audit',
        description:
          'We ask the major AI assistants the questions your customers ask and record who gets named — you, a competitor, or nobody.',
      },
      {
        title: 'Structured Data & Schema',
        description:
          'Business, service, FAQ, and review markup that tells search engines and AI tools exactly who you are and what you do.',
      },
      {
        title: 'Answer-First Content',
        description:
          'Service pages, FAQs, and articles that answer real questions directly — the format AI tools prefer to cite.',
      },
      {
        title: 'Citation Consistency',
        description:
          'Your name, address, phone, and services aligned across Google Business Profile, directories, and industry sites.',
      },
      {
        title: 'Traditional SEO Foundation',
        description:
          'Technical fixes, keyword research, and on-page optimization — AI answers still lean heavily on pages that rank.',
      },
      {
        title: 'Monthly Visibility Tracking',
        description:
          'A recurring check of whether AI tools mention you, alongside your Google rankings and traffic.',
      },
    ],
    tiers: [
      {
        name: 'Audit',
        bestFor: 'Knowing where you stand',
        features: [
          'AI visibility audit across major assistants',
          'Schema & structured data setup',
          'Google Business Profile alignment',
          'Prioritized fix list',
          'One-time report',
        ],
      },
      {
        name: 'Growth',
        bestFor: 'Competing for AI answers',
        featured: true,
        features: [
          'Everything in Audit',
          '4 answer-first pages or articles / month',
          'Citation cleanup & building',
          'On-page SEO optimization',
          'Monthly visibility tracking',
        ],
      },
      {
        name: 'Full-Service',
        bestFor: 'Crowded, competitive markets',
        features: [
          'Everything in Growth',
          '8 pages or articles / month',
          'Competitor visibility monitoring',
          'Digital PR & mention outreach',
          'Quarterly strategy review',
        ],
      },
    ],
    industries: {
      mortgage:
        '“Best loan officer for first-time buyers near me.” “Who does VA loans in Oregon City?” We build the answer-ready content and credentials AI tools look for — NMLS ID, licensed states, and the programs you actually offer.',
      realEstate:
        'Neighborhood expertise, relocation content, and review signals that get you named when someone asks an AI which agent knows their area.',
      weddings:
        'Couples ask AI for planners by style, budget, and location. We make your services, service area, and reviews clear enough to be recommended.',
      local:
        '“Plumber in Oregon City open Saturday.” Local, specific questions are where AI answers are most decisive — and where we focus.',
    },
    process: [
      {
        title: 'Audit',
        description: 'Where you appear in AI answers and search today, and who appears instead.',
      },
      {
        title: 'Fix the Foundation',
        description: 'Schema, technical SEO, and consistent business information everywhere.',
      },
      {
        title: 'Publish',
        description: 'Answer-first pages and articles built around real customer questions.',
      },
      {
        title: 'Track & Expand',
        description: 'Monthly visibility checks and new content where the gaps are.',
      },
    ],
    faqs: [
      {
        question: 'What are GEO and AEO?',
        answer:
          'Generative engine optimization and answer engine optimization — two names for the same idea: making your business easy for AI assistants to understand, trust, and recommend.',
      },
      {
        question: 'Can you guarantee ChatGPT will recommend me?',
        answer:
          'No, and be wary of anyone who says they can. AI answers vary by question, person, and day. We strengthen the signals AI tools rely on and track how often you appear.',
      },
      {
        question: 'Is this different from regular SEO?',
        answer:
          'It builds on it. Strong SEO is the foundation; GEO adds structure, answer-first content, and cross-web consistency on top.',
      },
      {
        question: 'How long does it take?',
        answer:
          'Technical and structured-data fixes can be picked up as soon as your pages are recrawled. Content and citation work compounds over months.',
      },
      {
        question: 'Do you use AI to write the content?',
        answer:
          'AI helps us research and draft faster. A human edits every piece for accuracy, voice, and real expertise — mass-produced AI content is exactly what search engines are getting better at ignoring.',
      },
    ],
  },

  // ── #7 Growth Operator ──
  {
    slug: 'growth-partner',
    title: 'Growth Partner Program',
    cardDescription:
      'A fractional marketing partner for professionals with a reputation and no system behind it. We build the offer, funnel, emails, and follow-up that turn your name into a pipeline — then run it with you.',
    icon: ['M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'],
    metaTitle: 'Growth Partner Program | Fractional Marketing | Oregon',
    metaDescription:
      'A fractional growth partner that builds and runs your offer, funnel, email follow-up, workshops, and pipeline. For loan officers, Realtors, wedding planners, and owner-led businesses in Oregon.',
    eyebrow: 'Growth Partner Program',
    headline: ['A Growth Partner,', 'Not Another Vendor'],
    heroCopy:
      'You’ve built a reputation — referrals, reviews, maybe a following — but there’s no system turning that attention into predictable business. As your growth partner, we build and run the whole engine with you: the offer, the landing page, the lead magnet, the email follow-up, workshops, and the pipeline tracking behind it.',
    cta: 'Book a Growth Call',
    problemHeading: 'Reputation Without a System',
    problems: [
      {
        title: 'Attention with nowhere to go',
        description:
          'People know your name and follow your posts. But there’s no path from “I like this person” to “I’m booking a call.”',
      },
      {
        title: 'Too many vendors, no owner',
        description:
          'A website person, a social person, an ads person. Nobody owns the whole picture — so nobody is accountable for the result.',
      },
      {
        title: 'Leads leak everywhere',
        description:
          'Inquiries sit in DMs, email, and voicemail. Without follow-up, most of them quietly go cold.',
      },
    ],
    includes: [
      {
        title: 'Growth Audit & Roadmap',
        description:
          'We map where your business comes from today, where it leaks, and the highest-leverage fixes — in priority order.',
      },
      {
        title: 'Offer & Positioning',
        description:
          'Sharpen what you sell, who it’s for, and why you — so every piece of marketing says the same clear thing.',
      },
      {
        title: 'Funnel Build',
        description:
          'Landing page, lead magnet, booking flow, and thank-you sequence — one clear path from stranger to booked call.',
      },
      {
        title: 'Email & Follow-Up Automation',
        description:
          'Nurture sequences and speed-to-lead follow-up so no inquiry sits unanswered.',
      },
      {
        title: 'Workshops & Webinars',
        description:
          'Buyer seminars, planning workshops, or client events — planned, promoted, and followed up.',
      },
      {
        title: 'Pipeline Dashboard',
        description:
          'One view of leads, conversations, and conversions — reviewed together every month.',
      },
    ],
    tiers: [
      {
        name: 'Build',
        bestFor: 'A one-time system build',
        features: [
          'Growth audit & roadmap',
          'Offer & positioning',
          'Landing page + lead magnet',
          'Email follow-up sequence',
          'Handoff & training',
        ],
      },
      {
        name: 'Operate',
        bestFor: 'Ongoing monthly execution',
        featured: true,
        features: [
          'Everything in Build',
          'Monthly campaign execution',
          'A workshop or webinar each quarter',
          'Pipeline dashboard',
          'Monthly growth meeting',
        ],
      },
      {
        name: 'Partner',
        bestFor: 'A deep, long-term partnership',
        features: [
          'Everything in Operate',
          'Weekly working sessions',
          'Full funnel & content ownership',
          'Priority planning & access',
          'Performance terms where permitted',
        ],
      },
    ],
    industries: {
      mortgage:
        'A first-time buyer funnel, Realtor-partner co-marketing, homebuyer workshops, and past-client follow-up — on a flat fee, with compliance review on every public piece.',
      realEstate:
        'Seller lead magnets, buyer consultation funnels, sphere nurture, and open house follow-up that doesn’t depend on remembering.',
      weddings:
        'Inquiry-to-consultation funnels, styled lead magnets, and nurture that carries couples from “just engaged” to a signed contract.',
      local:
        'Offers, local promotions, and loyalty and reactivation campaigns — the repeatable system behind consistent months.',
    },
    process: [
      {
        title: 'Audit',
        description: 'Where your business comes from, where it leaks, and what to fix first.',
      },
      {
        title: 'Build',
        description: 'Offer, funnel, follow-up, and tracking — built and tested.',
      },
      {
        title: 'Launch',
        description: 'Turn it on, drive the first traffic, and watch the numbers.',
      },
      {
        title: 'Operate',
        description: 'Monthly campaigns and a standing growth meeting to keep improving.',
      },
    ],
    guardrail:
      'Performance-based pricing is offered only where it’s allowed. Mortgage and real estate partnerships are flat-fee — settlement-service and licensing rules prohibit tying marketing fees to referrals or closed transactions.',
    faqs: [
      {
        question: 'How is this different from hiring an agency?',
        answer:
          'An agency delivers tasks. A growth partner owns the outcome with you — strategy, build, and execution, reviewed against your pipeline every month.',
      },
      {
        question: 'Do you take a percentage of revenue?',
        answer:
          'For some businesses, a base fee plus a performance component lines up everyone’s incentives. For mortgage and real estate professionals it’s flat-fee only, because settlement-service and licensing rules restrict referral-based compensation.',
      },
      {
        question: 'What do you need from me?',
        answer:
          'Your expertise, your reputation, and a standing working session. We handle the systems and the execution.',
      },
      {
        question: 'What tools do you use?',
        answer:
          'Whatever fits — often the CRM you already have. We avoid stacking up new subscriptions unless they earn their keep.',
      },
      {
        question: 'Is there a minimum commitment?',
        answer:
          'Growth systems need a few months to show what they can do. We’ll agree on a term that gives the work a fair chance before you sign.',
      },
    ],
  },
]

export function getStudioService(slug: string) {
  return studioServices.find((s) => s.slug === slug)
}
