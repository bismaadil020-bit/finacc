import { createServerClient } from '@/lib/supabase/server'
import Link from 'next/link'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import type { BlogPost } from '@/lib/supabase/types'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Clock, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  title: 'Blog — Finance & Accounting Insights | FinAccSolutions',
  description: 'Expert articles on bookkeeping, IFRS, group consolidation, fundraising finance, and virtual accounting teams. Written by Big 4-trained professionals.',
  path: '/blog',
})

async function getPosts(): Promise<BlogPost[]> {
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, content, featured_image, tags, read_time, published_at, created_at, updated_at, status')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
    return data ?? []
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20">
        {/* Header */}
        <div className="bg-brand-navy py-16 -mt-28 pt-40 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] left-[-5%] top-0 rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <span className="inline-block text-brand-gold font-dm-sans font-bold text-xs uppercase tracking-[0.12em] mb-4">
              INSIGHTS & GUIDES
            </span>
            <h1 className="font-sora font-bold text-white text-4xl lg:text-5xl mb-4" style={{ letterSpacing: '-0.02em' }}>
              Finance & Accounting Blog
            </h1>
            <p className="text-slate-300 font-dm-sans text-lg max-w-2xl leading-relaxed">
              Practical guides on bookkeeping, IFRS, group consolidation, fundraising finance, and building efficient remote finance teams.
            </p>
          </div>
        </div>

        <div className="max-w-content mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-brand-muted font-dm-sans text-lg">Articles coming soon. Check back shortly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Featured image */}
                  {post.featured_image ? (
                    <div className="aspect-[16/9] overflow-hidden bg-brand-slate">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] bg-gradient-to-br from-brand-navy to-brand-blue flex items-center justify-center">
                      <span className="font-sora font-bold text-white/20 text-5xl">F</span>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="flex items-center gap-1 text-[11px] px-2 py-0.5 bg-brand-blue/5 text-brand-blue border border-brand-blue/10 rounded-full font-dm-sans font-semibold">
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="font-sora font-bold text-brand-navy text-base leading-snug mb-2 group-hover:text-brand-blue transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-brand-muted text-sm font-dm-sans leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-brand-muted font-dm-sans">
                        <Clock className="w-3.5 h-3.5" />
                        {post.read_time ?? 3} min read
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-brand-blue group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
