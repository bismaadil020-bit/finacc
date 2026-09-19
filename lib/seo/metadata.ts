import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './site'
import { AUTHOR } from './schema'

interface PageMeta {
  title: string
  description: string
  /** Route path, e.g. '/services/bookkeeping'. Used for canonical + og:url. */
  path: string
  type?: 'website' | 'article'
  image?: string
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
}

/**
 * Builds a full per-page Metadata object. Next.js does NOT deep-merge
 * `alternates` / `openGraph` from the root layout, so every page must
 * declare its own canonical + OG or it silently inherits the homepage's.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  image,
  publishedTime,
  modifiedTime,
  noIndex,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  // Child routes that define openGraph lose the file-based /opengraph-image, so set it explicitly.
  const ogImage = image ?? `${SITE_URL}/opengraph-image`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_GB',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === 'article' ? { publishedTime, modifiedTime, authors: [AUTHOR.name] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    ...(type === 'article' ? { authors: [{ name: AUTHOR.name, url: `${SITE_URL}/about` }] } : {}),
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}
