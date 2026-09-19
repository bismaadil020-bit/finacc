import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, TrendingUp, LineChart, Building2, ClipboardCheck } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = pageMetadata({
  title: 'Finance & Accounting Services | FinAccSolutions',
  description: 'Outsourced bookkeeping, payroll, group consolidation, fundraising support, budgeting & forecasting, and tax compliance — delivered by Big 4-trained offshore professionals.',
  path: '/services',
})

const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    tagline: 'Accurate books. On time. Every month.',
    desc: 'Monthly ledger maintenance, bank reconciliations, accounts payable and receivable, and management accounts — delivered consistently without the in-house overhead.',
    href: '/services/bookkeeping',
    keyword: 'outsourced bookkeeping UK',
  },
  {
    icon: Users,
    title: 'Payroll Services',
    tagline: 'Payroll that runs on time. Every time.',
    desc: 'Multi-jurisdiction and multi-currency international payroll processing. Accurate, compliant, and on schedule — every pay cycle.',
    href: '/services/payroll',
    keyword: 'international payroll service',
  },
  {
    icon: TrendingUp,
    title: 'Budgeting & Forecasting',
    tagline: 'Know your numbers before the month does.',
    desc: 'Annual budget builds, rolling 12-month forecasts, KPI dashboards, and board-ready variance commentary. Real-time financial visibility for better decisions.',
    href: '/services/budgeting-forecasting',
    keyword: 'financial forecasting service UK',
  },
  {
    icon: LineChart,
    title: 'Fundraising Support',
    tagline: 'Get your financials investor-ready.',
    desc: 'Three-statement models, DCF valuations, scenario analysis, and investor data room support. Built by Big 4-trained analysts for pre-Series A and growth-stage companies.',
    href: '/services/fundraising-support',
    keyword: 'investor ready financial model',
  },
  {
    icon: Building2,
    title: 'Group Consolidation',
    tagline: 'Group consolidation in 5 days. Not 21.',
    desc: 'IFRS 10-compliant consolidated accounts for multi-entity groups — intercompany eliminations, NCI calculations, currency translation, and auditor-ready workings.',
    href: '/services/group-consolidation',
    keyword: 'IFRS 10 group consolidation service',
  },
  {
    icon: ClipboardCheck,
    title: 'Tax Records & Compliance',
    tagline: 'Organized tax records. Zero surprises at filing time.',
    desc: 'Indirect tax returns, corporation tax records, tax provision workings, and tax authority correspondence support. Everything in order before your accountants need it.',
    href: '/services/tax-compliance',
    keyword: 'tax compliance service UK',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">

        {/* Hero */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] left-[-5%] top-0 rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">
                OUR SERVICES
              </span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Everything Your Finance Function Needs, Handled.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl">
                Six core services. One offshore finance team. Big 4-trained professionals integrated into your business — at a fraction of the in-house cost.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <AnimateIn key={service.title} direction="up" delay={i * 0.08}>
                    <Link
                      href={service.href}
                      className="group bg-white border border-brand-border rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,22,40,0.06)] hover:shadow-[0_16px_48px_rgba(10,22,40,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full block"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/8 text-brand-blue flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="font-sora font-bold text-brand-navy text-xl mb-2 group-hover:text-brand-blue transition-colors duration-300">{service.title}</h2>
                      <p className="font-dm-sans text-brand-gold text-sm font-semibold italic mb-4">{service.tagline}</p>
                      <p className="font-dm-sans text-brand-muted text-sm leading-[1.7] flex-1 mb-6">{service.desc}</p>
                      <span className="inline-flex items-center gap-2 text-brand-blue font-dm-sans font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />
          <div className="max-w-content mx-auto px-6 text-center relative z-10">
            <AnimateIn direction="up">
              <h2 className="font-sora font-bold text-white text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                Not Sure Which Service You Need?
              </h2>
              <p className="text-slate-300 font-dm-sans text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                Tell us where your finance function is today, and we'll tell you exactly where to start. No commitment required.
              </p>
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Book Your Free Consultation <ArrowRight className="w-4 h-4 ml-1 inline" />
                </Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
