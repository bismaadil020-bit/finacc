import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import { breadcrumbSchema, serviceSchema } from '@/lib/seo/schema'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = pageMetadata({
  title: 'Outsourced Bookkeeping Services | FinAccSolutions',
  description: 'Accurate, organized bookkeeping delivered offshore by Big 4-trained professionals. Monthly ledger maintenance, bank reconciliations, and management accounts — at 60–80% less than in-house.',
  path: '/services/bookkeeping',
})

const included = [
  'Monthly ledger maintenance & transaction coding',
  'Bank & credit card reconciliations',
  'Accounts payable & receivable management',
  'Monthly management accounts pack',
  'Payables aging & cash position reporting',
  'Year-end preparation & accountant liaison',
]

const tools = [
  { name: 'QuickBooks', color: '#2CA01C', desc: 'Cloud bookkeeping for SMEs globally' },
  { name: 'Xero', color: '#13B5EA', desc: 'Multi-currency cloud accounting' },
  { name: 'Excel / Sheets', color: '#217346', desc: 'Management accounts & reporting' },
]

const forWhom = [
  { title: 'SME Owners (£500K–£5M revenue)', desc: 'You\'ve outgrown a spreadsheet but aren\'t ready for a full-time finance hire. Our senior bookkeepers give you the quality of an in-house accountant at a fraction of the cost.' },
  { title: 'Operations Directors', desc: 'Finance is a function you need to be reliable — not something you need to manage. We run it, you report on it.' },
  { title: 'Businesses Replacing a Local Bookkeeper', desc: 'Local bookkeepers are expensive and inconsistent. Our offshore professionals work to the same standard for significantly less.' },
]

const schema = [
  serviceSchema({
    name: 'Outsourced Bookkeeping',
    serviceType: 'Bookkeeping',
    description: 'Accurate, organized bookkeeping delivered offshore by Big 4-trained professionals. Monthly ledger maintenance, bank reconciliations, and management accounts — at 60–80% less than in-house.',
    path: '/services/bookkeeping',
    offers: included,
  }),
  breadcrumbSchema([{ name: 'Services', path: '/services' }, { name: 'Outsourced Bookkeeping', path: '/services/bookkeeping' }]),
]

export default function BookkeepingPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={schema} />
      <main className="min-h-screen bg-white pt-28">

        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] left-[-5%] top-0 rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">BOOKKEEPING</span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Accurate Books. On Time. Every Month.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                Outsourced bookkeeping delivered by Big 4-trained offshore professionals — at 60–80% of the cost of an equivalent in-house hire, with zero compromise on accuracy or timeliness.
              </p>
              <Link href="/contact?service=Bookkeeping">
                <Button variant="gold" size="lg">Get Your Free Finance Function Audit</Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader label="WHAT'S INCLUDED" title="Your Complete Monthly Bookkeeping Service" />
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item, i) => (
                <AnimateIn key={item} direction="up" delay={i * 0.07}>
                  <div className="bg-white border border-brand-border rounded-xl px-5 py-4 flex items-center gap-3 shadow-[0_2px_12px_rgba(10,22,40,0.04)]">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span className="font-dm-sans font-semibold text-brand-navy text-sm">{item}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader label="WHO IT'S FOR" title="Built for Businesses That Need Reliable Finance" />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {forWhom.map((item, i) => (
                <AnimateIn key={item.title} direction="up" delay={i * 0.1}>
                  <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] hover:-translate-y-1 transition-all duration-300 h-full">
                    <h3 className="font-sora font-bold text-brand-navy text-lg mb-3">{item.title}</h3>
                    <p className="font-dm-sans text-brand-muted text-sm leading-[1.7]">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-slate border-t border-brand-border">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <p className="text-center text-xs font-dm-sans font-semibold uppercase tracking-widest text-brand-muted mb-8">Tools we work with</p>
            </AnimateIn>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, i) => (
                <AnimateIn key={tool.name} direction="up" delay={i * 0.08}>
                  <div className="bg-white border border-brand-border rounded-xl px-6 py-4 flex items-center gap-3 shadow-[0_2px_12px_rgba(10,22,40,0.04)]">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-sora font-bold text-sm text-white" style={{ backgroundColor: tool.color }}>{tool.name.charAt(0)}</div>
                    <div>
                      <p className="font-dm-sans font-bold text-brand-navy text-sm">{tool.name}</p>
                      <p className="font-dm-sans text-brand-muted text-xs">{tool.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />
          <div className="max-w-content mx-auto px-6 text-center relative z-10">
            <AnimateIn direction="up">
              <h2 className="font-sora font-bold text-white text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>Ready for Books That Balance Every Month?</h2>
              <p className="text-slate-300 font-dm-sans text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                Start with a free finance function audit. We'll review your current bookkeeping process and tell you exactly what a cleaner, faster close would look like.
              </p>
              <Link href="/contact?service=Bookkeeping">
                <Button variant="gold" size="lg">Get Your Free Finance Function Audit <ArrowRight className="w-4 h-4 ml-1 inline" /></Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
