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
  title: 'Outsourced Payroll Services | International & Multi-Currency Payroll | FinAccSolutions',
  description: 'Accurate, on-time payroll for international teams. Statutory compliance, multi-currency processing, and full payroll reporting — delivered by Big 4-trained offshore specialists.',
  path: '/services/payroll',
})

const included = [
  'Monthly & weekly payroll runs',
  'Statutory payroll compliance & reporting',
  'Multi-currency international payroll',
  'Payslip generation & distribution',
  'Payroll journals & reconciliation',
  'Pension & retirement plan administration',
  'Government payroll filings & returns',
  'Year-end payroll reports & summaries',
]

const tools = [
  { name: 'Gusto', color: '#F45D48', desc: 'US payroll, benefits & contractor payments' },
  { name: 'ADP', color: '#D0021B', desc: 'Enterprise multi-jurisdiction payroll' },
  { name: 'Xero Payroll', color: '#13B5EA', desc: 'Integrated payroll & auto-enrolment' },
]

const forWhom = [
  { title: 'Growing SMEs With Expanding Headcount', desc: 'Payroll compliance gets complex quickly as you scale. Our specialists handle statutory filings, pension administration, and everything in between — accurately, every cycle.' },
  { title: 'Remote-First International Teams', desc: 'Multi-jurisdiction payroll across multiple markets and currencies. We process compliantly for each jurisdiction you operate in — without the overhead of local specialists in every country.' },
  { title: 'Businesses With Payroll Errors or Delays', desc: 'If your current payroll is running late or producing errors, that\'s a direct risk to employee trust and regulatory compliance. We fix it — from month one.' },
]

const schema = [
  serviceSchema({
    name: 'Outsourced Payroll',
    serviceType: 'Payroll Services',
    description: 'Accurate, on-time payroll for international teams. Statutory compliance, multi-currency processing, and full payroll reporting — delivered by Big 4-trained offshore specialists.',
    path: '/services/payroll',
    offers: included,
  }),
  breadcrumbSchema([{ name: 'Services', path: '/services' }, { name: 'Outsourced Payroll', path: '/services/payroll' }]),
]

export default function PayrollPage() {
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
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">PAYROLL SERVICES</span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Payroll That Runs On Time. Every Time.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                Multi-jurisdiction, multi-currency payroll processing — delivered accurately and on schedule by Big 4-trained offshore specialists.
              </p>
              <Link href="/contact?service=Payroll+Services">
                <Button variant="gold" size="lg">Get Accurate Payroll From Month One</Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader label="WHAT'S INCLUDED" title="End-to-End Payroll — Every Cycle" />
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {included.map((item, i) => (
                <AnimateIn key={item} direction="up" delay={i * 0.06}>
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
              <SectionHeader label="WHO IT'S FOR" title="Payroll That Scales With Your Team" />
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
              <p className="text-center text-xs font-dm-sans font-semibold uppercase tracking-widest text-brand-muted mb-8">Payroll platforms we work with</p>
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
              <h2 className="font-sora font-bold text-white text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>Ready for Payroll You Can Rely On?</h2>
              <p className="text-slate-300 font-dm-sans text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                No hard sell. Tell us your current payroll setup and we'll tell you where the risks are and how we'd fix them.
              </p>
              <Link href="/contact?service=Payroll+Services">
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
