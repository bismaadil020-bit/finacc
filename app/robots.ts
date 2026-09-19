import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo/site'

// Note: this file overrides public/robots.txt in Next.js — keep rules here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/'],
      },
      // Explicitly welcome AI/answer-engine crawlers (GEO). Same rules as everyone else.
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'Google-Extended', 'Bingbot'],
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
