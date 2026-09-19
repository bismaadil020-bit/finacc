import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'
import { SITE_PAGES, SITE_URL } from '@/lib/seo/site'

// Revalidate at most hourly so new blog posts appear without a redeploy.
export const revalidate = 3600

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    // Plain client (no cookies) — sitemap is a static route, not a request-scoped one.
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data } = await supabase
      .from('blog_posts')
      .select('slug, published_at, updated_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    return (data ?? []).map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at ?? post.published_at ?? Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = SITE_PAGES.map(p => ({
    url: `${SITE_URL}${p.path === '/' ? '' : p.path}`,
    lastModified: new Date(p.lastModified),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  return [...staticEntries, ...(await getBlogEntries())]
}
