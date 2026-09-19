import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import SmoothScroll from '@/components/providers/SmoothScroll'
import JsonLd from '@/components/seo/JsonLd'
import { authorPersonSchema, organizationSchema, websiteSchema } from '@/lib/seo/schema'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Virtual Bookkeeping & Accounting Services | FinAccSolutions',
  description:
    'Big 4-trained virtual accountants & bookkeepers. IFRS & US GAAP certified. Bookkeeping, payroll, group consolidation, budgeting & CFO services for businesses across 30+ countries. Book a free consultation.',
  keywords: [
    'virtual bookkeeper',
    'outsourced accounting services',
    'IFRS accountant',
    'US GAAP bookkeeping',
    'group consolidation service',
    'remote accountant',
    'outsourced CFO',
    'bookkeeping for small business',
    'virtual finance team',
    'IFRS 10 consolidation',
    'outsourced payroll services',
    'fundraising financial model',
    'Big 4 accountant remote',
    'virtual accounting firm',
  ],
  authors: [{ name: 'FinAccSolutions' }],
  creator: 'FinAccSolutions',
  metadataBase: new URL('https://www.finaccsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Virtual Bookkeeping & Accounting Services | FinAccSolutions',
    description:
      'Big 4-trained virtual accountants & bookkeepers. IFRS & US GAAP certified. Group consolidation, payroll, budgeting & CFO services. 30+ countries served.',
    type: 'website',
    url: 'https://www.finaccsolutions.com',
    siteName: 'FinAccSolutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Bookkeeping & Accounting Services | FinAccSolutions',
    description:
      'Big 4-trained virtual accountants. IFRS & US GAAP certified. Group consolidation, payroll & CFO services. 30+ countries served.',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png' },
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className="antialiased bg-white text-brand-navy">
        <SmoothScroll>{children}</SmoothScroll>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <JsonLd data={[organizationSchema, websiteSchema, authorPersonSchema]} />
      </body>
    </html>
  )
}
