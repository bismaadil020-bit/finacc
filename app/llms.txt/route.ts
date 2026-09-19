import { createClient } from '@supabase/supabase-js'
import { SITE_PAGES, SITE_URL } from '@/lib/seo/site'

export const revalidate = 3600

/**
 * /llms.txt — a plain-text map of the site for LLM crawlers and answer engines
 * (ChatGPT, Perplexity, Claude, Google AI Overviews). Spec: https://llmstxt.org
 */
export async function GET() {
  let blogLines = ''
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data } = await supabase
      .from('blog_posts')
      .select('title, slug, excerpt')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(50)
    blogLines = (data ?? [])
      .map(p => `- [${p.title}](${SITE_URL}/blog/${p.slug})${p.excerpt ? `: ${p.excerpt}` : ''}`)
      .join('\n')
  } catch {
    blogLines = ''
  }

  const services = SITE_PAGES.filter(p => p.path.startsWith('/services/') || p.path === '/automation')
  const company = SITE_PAGES.filter(p => ['/about', '/why-us', '/talent', '/technology', '/contact'].includes(p.path))

  const body = `# FinAccSolutions

> Big 4-trained virtual accountants and bookkeepers, IFRS & US GAAP certified, delivering outsourced bookkeeping, payroll, IFRS 10 group consolidation, budgeting & forecasting, fundraising finance support, tax compliance and finance automation to businesses in 30+ countries — at 60–80% less than an equivalent in-house hire.

FinAccSolutions is an offshore finance & accounting outsourcing firm founded in 2022, headquartered in Karachi, Pakistan, serving clients primarily in the UK, US, Germany, UAE, Australia and Canada. Staff are ex-Big 4 / Big 10 professionals. Typical engagements: dedicated bookkeeper or finance analyst embedded in a client team, monthly management accounts, multi-entity group consolidation, month-end close automation (21 days → 5), and investor-ready financial models for fundraising rounds.

Contact: hello@finaccsolutions.com · ${SITE_URL}/contact (free consultation)

## Services
${services.map(p => `- [${p.name}](${SITE_URL}${p.path}): ${p.summary}`).join('\n')}

## Company
${company.map(p => `- [${p.name}](${SITE_URL}${p.path}): ${p.summary}`).join('\n')}

## Blog
${blogLines || `- [Blog](${SITE_URL}/blog): Guides on bookkeeping, IFRS, consolidation and fundraising finance.`}

## Optional
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Sitemap](${SITE_URL}/sitemap.xml)
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  })
}
