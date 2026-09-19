import { createServerClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import { AUTHOR, articleSchema, breadcrumbSchema } from '@/lib/seo/schema'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Clock, ArrowLeft, Tag, Calendar, User } from 'lucide-react'

interface Props {
  params: { slug: string }
}

async function getPost(slug: string) {
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single()
    return data
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Not Found', robots: { index: false } }
  return pageMetadata({
    title: `${post.title} | FinAccSolutions Blog`,
    description: post.excerpt ?? `${post.title} — insights from FinAccSolutions' Big 4-trained finance team.`,
    path: `/blog/${post.slug}`,
    type: 'article',
    image: post.featured_image ?? undefined,
    publishedTime: post.published_at ?? undefined,
    modifiedTime: post.updated_at ?? undefined,
  })
}

// Simple markdown to HTML (no external lib needed for basic formatting)
function renderMarkdown(md: string): string {
  return md
    .replace(/^#### (.+)$/gm, '<h4 class="text-base font-bold text-brand-navy mt-5 mb-2">$1</h4>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-brand-navy mt-6 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-brand-navy mt-8 mb-3">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-brand-navy mt-8 mb-4">$1</h1>')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-brand-slate px-1.5 py-0.5 rounded text-sm font-mono text-brand-blue">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-brand-blue hover:underline font-medium" target="_blank" rel="noopener">$1</a>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-brand-blue pl-4 italic text-brand-muted my-4">$1</blockquote>')
    .replace(/^[-*] (.+)$/gm, '<li class="flex items-start gap-2 mb-1.5"><span class="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></span><span>$1</span></li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="flex items-start gap-2 mb-1.5 list-decimal ml-4"><span>$2</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="my-4 space-y-0.5">$&</ul>')
    .replace(/\n\n/g, '</p><p class="text-brand-navy font-dm-sans leading-[1.8] text-base mb-4">')
    .replace(/^/, '<p class="text-brand-navy font-dm-sans leading-[1.8] text-base mb-4">')
    .replace(/$/, '</p>')
    .replace(/<p[^>]*><\/p>/g, '')
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const schema = [
    articleSchema({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.featured_image,
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      tags: post.tags,
    }),
    breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]),
  ]

  return (
    <>
      <Navbar />
      <JsonLd data={schema} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="bg-brand-navy pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[600px] left-[-5%] top-0 rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-dm-sans mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="flex items-center gap-1 text-xs px-2.5 py-1 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full font-dm-sans font-semibold">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-sora font-bold text-white text-3xl lg:text-4xl leading-snug mb-6" style={{ letterSpacing: '-0.02em' }}>
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm font-dm-sans">
              <Link href="/about" rel="author" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <User className="w-4 h-4" />
                <span className="text-slate-200 font-semibold">{AUTHOR.name}</span>
                <span className="hidden sm:inline">· {AUTHOR.jobTitle}</span>
              </Link>
              {post.published_at && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.read_time ?? 3} min read
              </span>
            </div>
          </div>
        </div>

        {/* Featured image */}
        {post.featured_image && (
          <div className="max-w-3xl mx-auto px-6 -mt-0 pt-8">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full rounded-2xl shadow-lg aspect-[16/7] object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {post.content ? (
            <article
              className="max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
          ) : (
            <p className="text-brand-muted font-dm-sans">Content coming soon.</p>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 bg-brand-navy rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-sora font-bold text-white text-xl mb-2">Ready to get started?</h3>
              <p className="text-slate-300 font-dm-sans text-sm mb-5 leading-relaxed">
                Book a free 30-minute consultation with our senior advisors. No hard sell — just a straightforward conversation about your finance needs.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold rounded-xl text-sm transition-colors"
              >
                Book Your Free Consultation →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
