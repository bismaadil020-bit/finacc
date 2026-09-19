import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import { breadcrumbSchema, serviceSchema } from '@/lib/seo/schema'
import JsonLd from '@/components/seo/JsonLd'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import { serviceFaqs } from '@/lib/seo/faqs'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Building2, Clock, Users, BarChart3, FileText, Globe } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = pageMetadata({
  title: 'Group Consolidation Services | IFRS 10 Specialists | FinAccSolutions',
  description: 'IFRS 10-compliant consolidated financial statements for multi-entity groups — delivered by Big 4-trained specialists in 5–7 working days. Cut your close cycle by up to 78%.',
  path: '/services/group-consolidation',
})

const included = [
  'Full consolidation workings & journals',
  'Intercompany elimination schedules',
  'Non-controlling interest (NCI) calculations',
  'Currency translation under IAS 21',
  'Goodwill impairment support (IAS 36)',
  'Consolidated trial balance & financials',
]

const personas = [
  {
    icon: Building2,
    title: 'Holding Group CFO',
    desc: 'Managing 3–10 legal entities across multiple jurisdictions. Monthly close is eating your team\'s time. You need a repeatable, auditor-ready consolidation process that doesn\'t require a Big 4 retainer.',
  },
  {
    icon: BarChart3,
    title: 'PE-Backed Portfolio FD',
    desc: 'Your PE sponsor wants consolidated management accounts within 7 days of month-end. Your current process takes three times that. We build the methodology, then run it.',
  },
  {
    icon: Globe,
    title: 'Listed Parent With Overseas Subsidiaries',
    desc: 'Multi-currency consolidation under IFRS 10 with IAS 21 translation. You need LucaNet or SAP BPC-level accuracy without the implementation headache.',
  },
]

const steps = [
  { num: '01', title: 'Subsidiary Data Collection', desc: 'We design and distribute a standardized reporting pack to all subsidiaries. Every entity submits in the same format — no reformatting required.' },
  { num: '02', title: 'Trial Balance Mapping', desc: 'We map each subsidiary\'s chart of accounts to the group chart, handling any structural differences between entities.' },
  { num: '03', title: 'Elimination Journal Preparation', desc: 'All intercompany balances are matched, reconciled, and eliminated. Investment eliminations, management fees, loans, dividends — nothing missed.' },
  { num: '04', title: 'Consolidated Financials', desc: 'We produce the consolidated P&L, balance sheet, and cash flow statement with NCI disclosures and currency translation reserve movements.' },
  { num: '05', title: 'Variance Commentary', desc: 'Each consolidated pack includes a written variance analysis — actuals vs. prior period and budget — ready for board or investor distribution.' },
]

const tools = ['LucaNet', 'SAP BPC', 'Hyperion', 'Tagetik', 'OneStream']

const schema = [
  serviceSchema({
    name: 'Group Consolidation (IFRS 10)',
    serviceType: 'Group Consolidation',
    description: 'IFRS 10-compliant consolidated financial statements for multi-entity groups — delivered by Big 4-trained specialists in 5–7 working days. Cut your close cycle by up to 78%.',
    path: '/services/group-consolidation',
    offers: included,
  }),
  breadcrumbSchema([{ name: 'Services', path: '/services' }, { name: 'Group Consolidation (IFRS 10)', path: '/services/group-consolidation' }]),
]

export default function GroupConsolidationPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={schema} />
      <main className="min-h-screen bg-white pt-28">

        {/* Hero */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] right-[-10%] top-[-10%] rounded-full bg-brand-blue/15 blur-[130px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">
                GROUP CONSOLIDATION
              </span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Group Consolidation in 5 Days. Not 21.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                IFRS 10-compliant consolidated accounts for multi-entity groups — delivered by Big 4-trained specialists with a proven process that cuts your close cycle by up to 78%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?service=Group+Consolidation">
                  <Button variant="gold" size="lg">Book a Free Consolidation Assessment</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Talk to a Specialist</Button>
                </Link>
              </div>
            </AnimateIn>

            {/* Stat bar */}
            <AnimateIn direction="up" delay={0.15}>
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
                {[
                  { stat: '78%', label: 'Reduction in close cycle' },
                  { stat: '5 days', label: 'Average consolidated close' },
                  { stat: 'IFRS 10', label: 'Full compliance guaranteed' },
                ].map((item) => (
                  <div key={item.stat}>
                    <div className="font-sora font-bold text-white text-3xl mb-1" style={{ letterSpacing: '-0.02em' }}>{item.stat}</div>
                    <div className="text-slate-400 text-sm font-dm-sans">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="WHAT'S INCLUDED"
                title="Everything in Your Consolidated Pack"
                subtitle="A complete, auditor-ready consolidation — not just a summary report."
              />
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

        {/* Who It's For */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="WHO IT'S FOR"
                title="Built for Finance Leaders Running Complex Groups"
                subtitle="If your group has more than two legal entities, you need a consolidation process that scales."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personas.map((p, i) => {
                const Icon = p.icon
                return (
                  <AnimateIn key={p.title} direction="up" delay={i * 0.1}>
                    <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/8 text-brand-blue flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-sora font-bold text-brand-navy text-lg mb-3">{p.title}</h3>
                      <p className="font-dm-sans text-brand-muted text-sm leading-[1.7]">{p.desc}</p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 lg:py-28 bg-brand-navy">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                dark
                label="HOW WE WORK"
                title="Our 5-Step Consolidation Process"
                subtitle="Documented, repeatable, and built to the same standard your auditors expect."
              />
            </AnimateIn>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <AnimateIn key={step.num} direction="up" delay={i * 0.08}>
                  <div className="flex gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-300">
                    <div className="font-sora font-bold text-brand-gold text-2xl flex-shrink-0 w-10">{step.num}</div>
                    <div>
                      <h3 className="font-sora font-bold text-white text-lg mb-2">{step.title}</h3>
                      <p className="font-dm-sans text-slate-300 text-sm leading-[1.7]">{step.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 lg:py-20 bg-brand-slate border-t border-brand-border">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <p className="text-center text-xs font-dm-sans font-semibold uppercase tracking-widest text-brand-muted mb-8">
                Consolidation tools we work with
              </p>
            </AnimateIn>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, i) => (
                <AnimateIn key={tool} direction="up" delay={i * 0.06}>
                  <div className="bg-white border border-brand-border rounded-xl px-6 py-3 font-dm-sans font-bold text-brand-navy text-sm shadow-[0_2px_12px_rgba(10,22,40,0.04)]">
                    {tool}
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn direction="up" delay={0.3}>
              <p className="text-center text-brand-muted text-xs font-dm-sans mt-6 italic">
                Working with a different platform? We adapt to your stack.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Result */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <div className="bg-white border border-brand-border rounded-2xl p-10 shadow-[0_4px_24px_rgba(10,22,40,0.06)] max-w-3xl mx-auto text-center">
                <div className="font-sora font-bold text-brand-gold text-5xl mb-4" style={{ letterSpacing: '-0.02em' }}>78%</div>
                <p className="font-sora font-bold text-brand-navy text-xl mb-3">Reduction in quarterly close cycle</p>
                <p className="font-dm-sans text-brand-muted text-base leading-[1.7] mb-6">
                  From 21 days to 5 days for a 7-entity holding group across 4 currencies, delivered under IFRS 10 using LucaNet. Auditors specifically noted the quality of the intercompany elimination workings.
                </p>
                <p className="font-dm-sans font-semibold text-brand-navy text-sm italic">— James Morrison, CFO, Northgate Holdings</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <ServiceFAQ faqs={serviceFaqs['group-consolidation']} />

        <section className="bg-brand-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />
          <div className="max-w-content mx-auto px-6 text-center relative z-10">
            <AnimateIn direction="up">
              <h2 className="font-sora font-bold text-white text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                Ready to Cut Your Close Cycle?
              </h2>
              <p className="text-slate-300 font-dm-sans text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                Start with a free 30-minute Consolidation Assessment. We'll review your current process, identify the bottlenecks, and tell you exactly what a streamlined close would look like.
              </p>
              <Link href="/contact?service=Group+Consolidation">
                <Button variant="gold" size="lg">
                  Book a Free Consolidation Assessment <ArrowRight className="w-4 h-4 ml-1 inline" />
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
