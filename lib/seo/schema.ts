import { SITE_NAME, SITE_URL } from './site'

const ORG_ID = `${SITE_URL}/#organization`
const AUTHOR_ID = `${SITE_URL}/about#sohail-khan`

export const AUTHOR = {
  name: 'Sohail Khan',
  jobTitle: 'Chief Executive Officer',
  bio: 'Founder and CEO of FinAccSolutions. Leads a team of Big 4-trained finance professionals delivering IFRS and US GAAP reporting, group consolidation and outsourced finance functions to businesses in the UK, US and Germany.',
}

export const authorPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': AUTHOR_ID,
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  description: AUTHOR.bio,
  worksFor: { '@id': ORG_ID },
  url: `${SITE_URL}/about`,
  knowsAbout: ['IFRS', 'US GAAP', 'Group Consolidation', 'Outsourced Finance', 'Bookkeeping', 'Financial Modelling'],
}

const SERVICE_CATALOG: [string, string][] = [
  ['Bookkeeping', '/services/bookkeeping'],
  ['Payroll Services', '/services/payroll'],
  ['Budgeting & Forecasting', '/services/budgeting-forecasting'],
  ['Fundraising Support', '/services/fundraising-support'],
  ['Group Consolidation', '/services/group-consolidation'],
  ['Tax Records & Compliance', '/services/tax-compliance'],
  ['Finance Automation', '/automation'],
]

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService', 'AccountingService'],
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: 'FinAccSolutions',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand-logo.png` },
  image: `${SITE_URL}/opengraph-image`,
  description:
    'Big 4-trained virtual accountants and bookkeepers. IFRS & US GAAP certified. Bookkeeping, payroll, group consolidation, budgeting and CFO services for businesses across 30+ countries.',
  foundingDate: '2022',
  founder: { '@id': AUTHOR_ID },
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  areaServed: ['United Kingdom', 'United States', 'Germany', 'United Arab Emirates', 'Australia', 'Canada'].map(name => ({
    '@type': 'Country',
    name,
  })),
  email: 'hello@finaccsolutions.com',
  priceRange: '$$',
  knowsAbout: [
    'IFRS',
    'US GAAP',
    'IFRS 10 Group Consolidation',
    'Bookkeeping',
    'Payroll',
    'Financial Modelling',
    'Budgeting and Forecasting',
    'Finance Automation',
  ],
  sameAs: ['https://www.linkedin.com/company/finaccsolutions', 'https://www.instagram.com/fin_accsolutions/'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Finance & Accounting Services',
    itemListElement: SERVICE_CATALOG.map(([name, path]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, url: `${SITE_URL}${path}` },
    })),
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === '/' ? '' : it.path}`,
    })),
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  path: string
  serviceType: string
  offers?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${opts.path}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/contact` },
    ...(opts.offers
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${opts.name} — what is included`,
            itemListElement: opts.offers.map(o => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o } })),
          },
        }
      : {}),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function articleSchema(opts: {
  title: string
  description?: string | null
  path: string
  image?: string | null
  publishedTime?: string | null
  modifiedTime?: string | null
  tags?: string[] | null
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description ?? undefined,
    image: opts.image ?? `${SITE_URL}/opengraph-image`,
    datePublished: opts.publishedTime ?? undefined,
    dateModified: opts.modifiedTime ?? opts.publishedTime ?? undefined,
    keywords: opts.tags?.join(', '),
    author: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${opts.path}` },
    inLanguage: 'en',
  }
}
