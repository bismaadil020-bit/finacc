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
  title: 'Tax Records & Compliance | FinAccSolutions',
  description: 'Indirect tax returns, corporation tax records, tax provision workings, and tax authority correspondence support — organized and maintained by Big 4-trained offshore specialists.',
  path: '/services/tax-compliance',
})

const included = [
  'Indirect tax return preparation & submission',
  'Corporation tax records & schedules',
  'Tax provision workings & deferred tax',
  'Tax authority correspondence support',
  'R&D tax credit record-keeping',
  'Transfer pricing documentation',
]

const forWhom = [
  { title: 'SMEs Ahead of Their Annual Filing', desc: 'Disorganized records cost you time and money at filing. We maintain everything your accountants need throughout the year — so year-end is a handover, not a scramble.' },
  { title: 'Finance Directors Managing Tax Risk', desc: 'From indirect tax compliance to corporation tax schedules, we keep your records current, accurate, and audit-ready — so you\'re never exposed when tax authorities enquire.' },
  { title: 'Fast-Growing Businesses Adding Complexity', desc: 'New revenue streams, overseas entities, and intercompany transactions add tax complexity fast. We build the record-keeping infrastructure that scales with you.' },
]

const schema = [
  serviceSchema({
    name: 'Tax Records & Compliance',
    serviceType: 'Tax Compliance',
    description: 'Indirect tax returns, corporation tax records, tax provision workings, and tax authority correspondence support — organized and maintained by Big 4-trained offshore specialists.',
    path: '/services/tax-compliance',
    offers: included,
  }),
  breadcrumbSchema([{ name: 'Services', path: '/services' }, { name: 'Tax Records & Compliance', path: '/services/tax-compliance' }]),
]

export default function TaxCompliancePage() {
  return (
    <>
      <Navbar />
      <JsonLd data={schema} />
      <main className="min-h-screen bg-white pt-28">

        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] right-[-5%] top-0 rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">TAX RECORDS & COMPLIANCE</span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Organized Tax Records. Zero Surprises at Filing Time.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                Indirect tax returns, corporation tax records, and tax authority correspondence — maintained throughout the year by Big 4-trained offshore specialists, so your accountants have everything they need before they ask.
              </p>
              <Link href="/contact?service=Tax+Records+%26+Compliance">
                <Button variant="gold" size="lg">Book Your Free Consultation</Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader label="WHAT'S INCLUDED" title="Your Tax Records — Maintained All Year, Not Just at Filing" />
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
              <SectionHeader label="WHO IT'S FOR" title="For Businesses That Can't Afford a Tax Surprise" />
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

        <section className="bg-brand-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />
          <div className="max-w-content mx-auto px-6 text-center relative z-10">
            <AnimateIn direction="up">
              <h2 className="font-sora font-bold text-white text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>Stop Dreading Filing Season.</h2>
              <p className="text-slate-300 font-dm-sans text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                Book a free 30-minute conversation. Tell us what your accountants need at filing time and we'll tell you how to have it ready months in advance.
              </p>
              <Link href="/contact?service=Tax+Records+%26+Compliance">
                <Button variant="gold" size="lg">Book Your Free Consultation <ArrowRight className="w-4 h-4 ml-1 inline" /></Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
