// One canonical description of the business and its founder, reused by every
// page's JSON-LD so search engines and AI tools see the same facts everywhere.
// Only verified facts go here. Add `sameAs` profile URLs (Google Business
// Profile, LinkedIn, etc.) as they're confirmed.

export const BASE_URL = 'https://thomasdavidjacob.com'
export const ORG_ID = `${BASE_URL}/#organization`
export const FOUNDER_ID = `${BASE_URL}/#founder`

const AREA_SERVED = [
  { '@type': 'State', name: 'Oregon' },
  { '@type': 'City', name: 'Oregon City' },
  { '@type': 'City', name: 'Portland' },
  { '@type': 'City', name: 'Lake Oswego' },
  { '@type': 'City', name: 'West Linn' },
]

export const organization = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'Thomas+David+Jacob',
  alternateName: 'Thomas David Jacob',
  description:
    'Digital creative agency in Oregon City, Oregon: custom websites, local SEO, AI search visibility, and AI systems for local businesses and professionals.',
  url: BASE_URL,
  logo: `${BASE_URL}/images/Main_LogoWhite.png`,
  email: 'hello@thomasdavidjacob.com', // forwards to thomasdavidjacob@gmail.com
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oregon City',
    addressRegion: 'OR',
    addressCountry: 'US',
  },
  areaServed: AREA_SERVED,
  founder: { '@id': FOUNDER_ID },
  knowsAbout: [
    'Web design',
    'Local SEO',
    'Generative engine optimization',
    'AI search visibility',
    'AI automation',
  ],
}

export const founder = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Phuong Ha',
  jobTitle: 'Founder & AI Solutions Architect',
  worksFor: { '@id': ORG_ID },
  knowsAbout: ['AI solutions architecture', 'Prompt engineering', 'Local SEO', 'Real estate marketing'],
}

/** Home page graph: the business, its founder, and the website. */
export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    founder,
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Thomas+David+Jacob',
      publisher: { '@id': ORG_ID },
    },
  ],
}
