import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { ArrowRight, Search, GitBranch, Zap } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = pageMetadata({
  title: 'Technology & Tools | FinAccSolutions',
  description: 'From LucaNet and SAP BPC to QuickBooks and Xero — we work with the tools your finance team already uses. No rip-and-replace required.',
  path: '/technology',
})

const consolidationTools = [
  { name: 'LucaNet', color: '#005CA9', use: 'Multi-entity consolidation & financial planning', ideal: 'Mid-market groups with 3–20 entities' },
  { name: 'SAP BPC', color: '#0070F2', use: 'Enterprise consolidation, planning & reporting', ideal: 'Large groups with complex intercompany flows' },
  { name: 'Hyperion', color: '#C74634', use: 'Oracle-based consolidation & EPBCS planning', ideal: 'Enterprise groups with Oracle ERP environments' },
  { name: 'Tagetik', color: '#6B21A8', use: 'CPM — consolidation, budgeting & regulatory reporting', ideal: 'Listed companies requiring statutory disclosure' },
  { name: 'OneStream', color: '#1D4ED8', use: 'Unified platform for consolidation & analytics', ideal: 'Growing groups replacing legacy consolidation tools' },
]

const bookkeepingTools = [
  { name: 'QuickBooks', color: '#2CA01C', use: 'Cloud bookkeeping & accounts payable/receivable', ideal: 'UK & US SMEs up to £10M revenue' },
  { name: 'Xero', color: '#13B5EA', use: 'Cloud accounting, payroll & bank reconciliation', ideal: 'UK SMEs and multi-currency businesses' },
  { name: 'Excel / Sheets', color: '#217346', use: 'Financial modelling, reporting & management accounts', ideal: 'All — used alongside any primary platform' },
  { name: 'Gusto', color: '#F45D48', use: 'US payroll, benefits & contractor payments', ideal: 'US-based companies or US-denominated payroll' },
  { name: 'ADP', color: '#D0021B', use: 'Enterprise payroll processing & HR administration', ideal: 'Larger teams requiring multi-jurisdiction payroll' },
]

const integrationSteps = [
  {
    icon: Search,
    title: 'Audit Your Stack',
    desc: 'We start by understanding what tools you\'re already using, how your data flows between systems, and where the manual handoffs are creating bottlenecks.',
  },
  {
    icon: GitBranch,
    title: 'Map to Your Workflows',
    desc: 'We configure our processes around your existing environment — chart of accounts, reporting calendars, approval workflows, and access permissions.',
  },
  {
    icon: Zap,
    title: 'Deploy in Days',
    desc: 'We\'re operational within 5–10 working days. No months-long implementation projects. No disruption to your existing team.',
  },
]

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">

        {/* Hero */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] right-[-5%] bottom-[-10%] rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">
                TOOLS & TECHNOLOGY
              </span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                The Tech Stack Behind Your Finance Function.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                We integrate into your existing environment — no rip-and-replace required. From enterprise consolidation platforms to cloud bookkeeping, we work with the tools your team already knows.
              </p>
              <Link href="/contact">
                <Button variant="gold" size="lg">Book a Free Tech Consultation</Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* Consolidation Tools */}
        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="GROUP CONSOLIDATION & PLANNING"
                title="Enterprise Consolidation Platforms"
                subtitle="We're certified across all major consolidation tools. You tell us what you have — we tell you how to get more out of it."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consolidationTools.map((tool, i) => (
                <AnimateIn key={tool.name} direction="up" delay={i * 0.08}>
                  <div className="bg-white border border-brand-border rounded-2xl p-6 shadow-[0_2px_12px_rgba(10,22,40,0.04)] hover:shadow-[0_12px_30px_rgba(10,22,40,0.08)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-sora font-extrabold text-sm text-white flex-shrink-0"
                        style={{ backgroundColor: tool.color }}
                      >
                        {tool.name.charAt(0)}
                      </div>
                      <span className="font-sora font-bold text-brand-navy text-lg">{tool.name}</span>
                    </div>
                    <p className="font-dm-sans text-brand-muted text-sm leading-[1.6] mb-3">{tool.use}</p>
                    <p className="font-dm-sans text-xs font-semibold text-brand-blue bg-brand-blue/6 rounded-lg px-3 py-1.5 inline-block">
                      Ideal for: {tool.ideal}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Bookkeeping Tools */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="BOOKKEEPING, PAYROLL & REPORTING"
                title="Cloud Accounting & Payroll Platforms"
                subtitle="Day-to-day finance operations run on these platforms. We know them inside out."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookkeepingTools.map((tool, i) => (
                <AnimateIn key={tool.name} direction="up" delay={i * 0.08}>
                  <div className="bg-white border border-brand-border rounded-2xl p-6 shadow-[0_2px_12px_rgba(10,22,40,0.04)] hover:shadow-[0_12px_30px_rgba(10,22,40,0.08)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-sora font-extrabold text-sm text-white flex-shrink-0"
                        style={{ backgroundColor: tool.color }}
                      >
                        {tool.name.charAt(0)}
                      </div>
                      <span className="font-sora font-bold text-brand-navy text-lg">{tool.name}</span>
                    </div>
                    <p className="font-dm-sans text-brand-muted text-sm leading-[1.6] mb-3">{tool.use}</p>
                    <p className="font-dm-sans text-xs font-semibold text-brand-blue bg-brand-blue/6 rounded-lg px-3 py-1.5 inline-block">
                      Ideal for: {tool.ideal}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* How We Integrate */}
        <section className="py-20 lg:py-28 bg-brand-navy">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                dark
                label="HOW WE INTEGRATE"
                title="We Adapt to Your Stack — Not the Other Way Around"
                subtitle="Most finance professionals take months to become productive. Our team is operational within two weeks."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrationSteps.map((step, i) => {
                const Icon = step.icon
                return (
                  <AnimateIn key={step.title} direction="up" delay={i * 0.1}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-sora font-bold text-white text-lg mb-3">{step.title}</h3>
                      <p className="font-dm-sans text-slate-300 text-sm leading-[1.7]">{step.desc}</p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6 text-center">
            <AnimateIn direction="up">
              <h2 className="font-sora font-bold text-brand-navy text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                Not Sure Which Tool Is Right for Your Group?
              </h2>
              <p className="font-dm-sans text-brand-muted text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                We help finance teams select and implement consolidation tools every month. Book a free 30-minute conversation and we'll give you our honest recommendation based on your group size, complexity, and budget.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Book a Free Tech Consultation <ArrowRight className="w-4 h-4 ml-1 inline" />
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
