// Live client sites shown on /clients and the home page. Order here is display order.

export type Client = {
  name: string
  industry: string
  location: string
  summary: string
  work: string[]
  /** Screenshot of the live site, shown at the top of the card. */
  thumb?: string
  href?: string
  status?: string
  tag?: string
}

export const clients: Client[] = [
  {
    name: 'Amore Coordination',
    industry: 'Wedding & Event Planning',
    location: 'Portland, OR & SW Washington',
    summary:
      'Amy Elizabeth Ha has coordinated over 230 weddings in a decade-plus career. We built her a site that carries that experience the way she does in person — warm, personal, and welcoming to couples and families of every background — with inquiry flows that turn browsing couples into booked consultations.',
    work: [
      'Custom website design & build',
      'Inquiry & consultation capture',
      'Wedding-market local SEO',
      'Journal & portfolio pages',
    ],
    thumb: '/images/client-amore.webp',
    href: 'https://amorecoordination.com',
  },
  {
    name: 'Phuong Ha — Mortgage Lending',
    industry: 'Mortgage / Home Loans',
    location: 'Oregon & Washington',
    summary:
      'A licensed loan originator competing against national lenders with ten-figure ad budgets. We built a conversion-focused site around fast pre-approvals and the questions buyers actually ask — loan programs, down payment help, and what they can afford — with a free home buyer class to start the conversation.',
    work: [
      'Conversion-focused website',
      'Loan program & down payment help pages',
      'Pre-approval lead capture',
      'Buyer quiz, calculator & class sign-up',
    ],
    thumb: '/images/client-phuongha.webp',
    href: 'https://phuongha.loans',
  },
  {
    name: 'Diamond Bond Oregon',
    industry: 'Shower Glass & Stone Protection',
    location: 'Lake Oswego, OR — Portland/Vancouver',
    summary:
      'Twenty-five years of sealing and restoring shower glass, granite, marble, tile, and porcelain for homeowners, builders, and commercial clients. We rebuilt their site from the ground up as a fast static site that explains a technical service in plain language, kept every old link working, and made the free estimate one tap away.',
    work: [
      'Full site rebuild',
      'Service & application pages',
      'Free-estimate lead capture',
      'Old URLs redirected to protect rankings',
    ],
    thumb: '/images/client-diamondbond.webp',
    href: 'https://diamondbondoregon.com',
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
    thumb: '/images/client-lafondita.webp',
    href: 'https://lafondita.food',
    tag: 'Pro Bono',
  },
  {
    name: 'Eel Sallad',
    industry: 'Band — Pacific Northwest GrungeGrass',
    location: 'Portland, OR',
    summary:
      'Dallas Lee started Eel Sallad in 2020, and the sound blends blues, grunge, rock, Americana, and folk. We built the band a home base that puts the new album front and center, with streaming links, live videos, shows, a photo gallery, and a direct line for booking.',
    work: [
      'Band website design & build',
      'Album & streaming links',
      'Live video & photo gallery',
      'Booking inquiries',
    ],
    thumb: '/images/client-eelsallad.webp',
    href: 'https://eelsallad.com',
  },
  {
    name: 'Brett Parker',
    industry: 'Charcoal Artist',
    location: 'Eastern Oregon',
    summary:
      'A self-taught artist drawing realistic wildlife, horses, pets, and portraits in charcoal, in black and white and in color. We built a gallery that lets the work speak, with shop links to his Etsy store for originals and prints, and a simple way to request a commission.',
    work: [
      'Portfolio gallery website',
      'Etsy-linked shop for originals & prints',
      'Commission inquiries',
      'Catalog with medium, size & availability',
    ],
    thumb: '/images/client-brettparker.webp',
    href: 'https://brettparkerartist.com',
  },
  {
    name: '10 Deadliest Disasters',
    industry: 'Disaster Education & Preparedness Publication',
    location: 'Portland, OR — Pacific Northwest',
    summary:
      'An independent publication that ranks history\'s deadliest disasters and turns them into practical preparedness steps for Pacific Northwest households, from Cascadia earthquakes to wildfire smoke. We expanded the site with new hazard pages, a live-tracking blog, a gear guide, and a partner program.',
    work: [
      'Cascadia & extreme heat hazard pages',
      'Blog with live disaster tracker',
      'Preparedness gear guide',
      'Brand partnership page',
    ],
    thumb: '/images/client-10deadliestdisasters.webp',
    href: 'https://10deadliestdisasters.com',
  },
  {
    name: 'Lakeridge Baseball',
    industry: 'Fan Site — Youth & Legion Baseball',
    location: 'Lake Oswego, OR',
    summary:
      'Four Lakeridge High School alumni played for the Post 158 Barbers, Northwest Region champions, at the 2026 American Legion World Series in Shelby, North Carolina. We built a fan site that gave all four the same spotlight, with a live countdown, the team\'s run to nationals, player cards, and game photos and video, plus matching social graphics for sharing.',
    work: [
      'Fan site design & build',
      'Live countdown & season stats',
      'Player cards, photos & video',
      'Social graphics package',
    ],
    thumb: '/images/client-lakeridgebaseball.webp',
    href: 'https://lakeridgebaseball.com',
    tag: 'In-House',
  },
]
