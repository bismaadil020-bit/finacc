export const SITE_URL = 'https://www.finaccsolutions.com'
export const SITE_NAME = 'FinAccSolutions'

/** Canonical list of public pages. Single source of truth for sitemap + llms.txt. */
export const SITE_PAGES: {
  path: string
  name: string
  priority: number
  changeFrequency: 'weekly' | 'monthly' | 'yearly'
  lastModified: string
  summary: string
}[] = [
  { path: '/', name: 'Home', priority: 1, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Virtual bookkeeping & accounting services by Big 4-trained offshore professionals.' },
  { path: '/services', name: 'Services', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Overview of outsourced finance & accounting services.' },
  { path: '/services/bookkeeping', name: 'Outsourced Bookkeeping', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Outsourced bookkeeping: ledger maintenance, reconciliations, management accounts.' },
  { path: '/services/payroll', name: 'Outsourced Payroll', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Outsourced international, multi-currency payroll with statutory compliance.' },
  { path: '/services/budgeting-forecasting', name: 'Budgeting & Forecasting', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Annual budgets, rolling forecasts, KPI dashboards, board packs.' },
  { path: '/services/fundraising-support', name: 'Fundraising Support', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Investor-ready three-statement models, DCF valuations, data-room support.' },
  { path: '/services/group-consolidation', name: 'Group Consolidation (IFRS 10)', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'IFRS 10-compliant consolidated financial statements for multi-entity groups.' },
  { path: '/services/tax-compliance', name: 'Tax Records & Compliance', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Tax records, indirect tax returns, corporation tax workings, authority correspondence.' },
  { path: '/automation', name: 'Finance Automation', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Finance automation: cut month-end close from 21 days to 5.' },
  { path: '/talent', name: 'Offshore Finance Talent', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Dedicated offshore finance professionals with Big 4 / Big 10 credentials.' },
  { path: '/technology', name: 'Technology & Tools', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Tools we work in: LucaNet, SAP BPC, QuickBooks, Xero, NetSuite and more.' },
  { path: '/about', name: 'About', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'About FinAccSolutions: founding story, team credentials, values.' },
  { path: '/why-us', name: 'Why Us', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Why choose FinAccSolutions: Big 4 quality at offshore economics.' },
  { path: '/contact', name: 'Contact', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-23', summary: 'Book a free consultation.' },
  { path: '/blog', name: 'Blog', priority: 0.7, changeFrequency: 'weekly', lastModified: '2026-08-23', summary: 'Guides on bookkeeping, IFRS, consolidation, fundraising finance.' },
  { path: '/privacy-policy', name: 'Privacy Policy', priority: 0.3, changeFrequency: 'yearly', lastModified: '2026-08-23', summary: 'Privacy policy.' },
]
