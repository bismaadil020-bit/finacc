import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import React from 'react'
import Link from 'next/link'
import {
  ArrowRight, FileText, RefreshCw, Users, BarChart3,
  Receipt, Building2, CheckCircle2, Search, Cpu, Rocket,
  BookOpen, Wallet, Zap, PieChart, Layers, BadgeDollarSign,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import CalendlyButton from '@/components/ui/CalendlyButton'
import Button from '@/components/ui/Button'
import SmoothScrollLink from '@/components/ui/SmoothScrollLink'
import ToolBadge from '@/components/ui/ToolBadge'

export const metadata: Metadata = pageMetadata({
  title: 'Finance Automation Services | FinAccSolutions',
  description: 'From 21-day close to 5 days. FinAccSolutions delivers finance automation that eliminates manual entry, accelerates reporting, and gives you real-time financial visibility — built around your existing stack.',
  path: '/automation',
})

const tracks = [
  {
    label: 'Track 1',
    title: 'Automation-Powered Finance Delivery',
    desc: 'We run your entire finance function using best-in-class automation tools — so you get faster output, fewer errors, and real-time visibility without adding headcount. We handle the tools, the workflows, and the execution.',
    ideal: ['SMEs ready to replace a manual bookkeeper', 'Startups that want outsourced finance done efficiently', 'Businesses tired of month-end bottlenecks'],
    cta: 'Outsource & Automate',
  },
  {
    label: 'Track 2',
    title: 'Finance Automation Consulting & Build',
    desc: 'Already have a finance team? We audit your workflows, identify the highest-ROI automation opportunities, design the architecture, and build it — handing over a fully operational automated finance stack your team can run.',
    ideal: ['Mid-market companies with in-house finance teams', 'CFOs looking to reduce their team\'s manual workload', 'Businesses preparing for scale or a growth event'],
    cta: 'Book an Automation Audit',
  },
]

const processes = [
  {
    icon: FileText,
    title: 'Invoice & AP Automation',
    desc: 'Auto-capture, categorise, and route supplier invoices for approval — eliminating manual entry and reducing processing time from days to minutes.',
  },
  {
    icon: RefreshCw,
    title: 'Bank Reconciliation',
    desc: 'Automated transaction matching across all accounts and currencies, with exception flagging so your team only touches what needs a human decision.',
  },
  {
    icon: Users,
    title: 'Payroll Workflow',
    desc: 'End-to-end payroll automation including calculation, compliance checking, and multi-jurisdiction filing — run on time, every time.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Reporting & Dashboards',
    desc: 'Live financial dashboards and automated monthly packs delivered to your inbox — replacing the manual export-and-format cycle with always-on visibility.',
  },
  {
    icon: Receipt,
    title: 'Expense Capture & Coding',
    desc: 'Receipt OCR, policy enforcement, and automatic GL coding — so expense management takes minutes instead of a full day at month-end.',
  },
  {
    icon: Building2,
    title: 'Multi-Entity Consolidation',
    desc: 'Automated intercompany eliminations, currency translations, and group reporting — reducing your close cycle from weeks to days across any number of entities.',
  },
]

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Workflow Audit',
    desc: 'We map every step of your current finance function — where data enters, how it moves, where humans are touching things they shouldn\'t be, and where errors compound. This is the foundation everything else is built on.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Automation Design',
    desc: 'We blueprint your future-state finance workflow — selecting the right tools for your stack, designing the data flows, and scoping exactly what gets automated, in what order, and why.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy & Run',
    desc: 'We build it, test it, and go live. For Track 1 clients we continue running it for you. For Track 2 clients we hand over a fully documented, operational system with team training included.',
  },
]

// iconSlug = Simple Icons slug (https://simpleicons.org). Omit for niche tools → falls back to abbr badge.
interface Tool {
  name: string
  abbr: string
  color: string
  iconSlug?: string
  darkText?: boolean
}

const toolGroups: { icon: React.ElementType; category: string; tools: Tool[] }[] = [
  {
    icon: BookOpen,
    category: 'Accounting Platforms',
    tools: [
      { name: 'Xero',        abbr: 'XE',  color: '#13B5EA', iconSlug: 'xero' },
      { name: 'QuickBooks',  abbr: 'QB',  color: '#2CA01C', iconSlug: 'quickbooks' },
      { name: 'Sage',        abbr: 'SG',  color: '#00B050', iconSlug: 'sage' },
      { name: 'FreeAgent',   abbr: 'FA',  color: '#ED7328' },
    ],
  },
  {
    icon: Wallet,
    category: 'AP & Expense Management',
    tools: [
      { name: 'Bill.com',   abbr: 'BC',  color: '#FF6B35' },
      { name: 'Dext',       abbr: 'DX',  color: '#0059FF' },
      { name: 'Expensify',  abbr: 'EX',  color: '#0185FF', iconSlug: 'expensify' },
      { name: 'Payhawk',    abbr: 'PH',  color: '#6B4FBB' },
    ],
  },
  {
    icon: Zap,
    category: 'Workflow & Integration',
    tools: [
      { name: 'Make',            abbr: 'MK',  color: '#6E3AFF', iconSlug: 'make' },
      { name: 'Zapier',          abbr: 'ZP',  color: '#FF4A00', iconSlug: 'zapier' },
      { name: 'Power Automate',  abbr: 'PA',  color: '#0066FF' },
      { name: 'n8n',             abbr: 'n8',  color: '#EA4B71', iconSlug: 'n8n' },
    ],
  },
  {
    icon: PieChart,
    category: 'Reporting & BI',
    tools: [
      { name: 'Power BI',       abbr: 'BI',  color: '#F2C811', darkText: true },
      { name: 'Looker Studio',  abbr: 'LS',  color: '#4285F4' },
      { name: 'Excel / Sheets', abbr: 'XL',  color: '#217346' },
      { name: 'Fathom',         abbr: 'FM',  color: '#7047EB' },
    ],
  },
  {
    icon: Layers,
    category: 'Consolidation',
    tools: [
      { name: 'LucaNet',   abbr: 'LN',  color: '#005CA9' },
      { name: 'OneStream', abbr: 'OS',  color: '#1E40AF' },
      { name: 'SAP BPC',   abbr: 'SAP', color: '#0070F2', iconSlug: 'sap' },
      { name: 'Tagetik',   abbr: 'TG',  color: '#7C3AED' },
    ],
  },
  {
    icon: BadgeDollarSign,
    category: 'Payroll',
    tools: [
      { name: 'Gusto',   abbr: 'GS',  color: '#F45D48', iconSlug: 'gusto' },
      { name: 'ADP',     abbr: 'ADP', color: '#D0021B', iconSlug: 'adp' },
      { name: 'Deel',    abbr: 'DL',  color: '#4F46E5' },
      { name: 'Remote',  abbr: 'RM',  color: '#00B4D8' },
    ],
  },
]

const results = [
  { value: '76%', label: 'Average reduction in manual finance tasks' },
  { value: '5 days', label: 'Typical month-end close after automation (vs 21+)' },
  { value: '99.8%', label: 'Reconciliation accuracy with automated matching' },
  { value: '60–80%', label: 'Cost saving vs equivalent in-house automation team' },
]

export default function AutomationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">

        {/* ── Hero ── */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] right-[-8%] top-[-15%] rounded-full bg-brand-blue/20 blur-[130px] pointer-events-none" />
          <div className="absolute w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] left-[-5%] bottom-0 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">Finance Automation</span>
              <h1
                className="font-sora font-bold text-white leading-[1.12] mb-6 max-w-4xl"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
              >
                From 21-Day Close to 5 Days.{' '}
                <span className="text-brand-gold">Finance Automation</span>{' '}
                That Actually Delivers.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                We eliminate the manual work that slows your finance function down — automating everything from invoice capture to multi-entity consolidation — so your team focuses on decisions, not data entry.
              </p>
              <div className="flex flex-wrap gap-4">
                <CalendlyButton variant="gold" size="lg">
                  Book Your Free Automation Audit
                </CalendlyButton>
                <SmoothScrollLink target="#how-it-works">
                  <Button variant="outline" size="lg" className="pointer-events-none">
                    See How It Works <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </SmoothScrollLink>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Results Bar ── */}
        <section className="bg-brand-slate border-b border-brand-border">
          <div className="max-w-content mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
              {results.map((r, i) => (
                <AnimateIn key={r.label} delay={i * 0.07}>
                  <div className="py-10 px-6 text-center">
                    <div className="font-sora font-bold text-brand-blue mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                      {r.value}
                    </div>
                    <div className="text-xs font-dm-sans text-brand-muted leading-snug">{r.label}</div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Two Tracks ── */}
        <section className="py-24 bg-white">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn>
              <SectionHeader
                label="Two Ways to Work With Us"
                title="Choose the Track That Fits Your Business"
                subtitle="Whether you want to fully outsource and automate your finance function, or build automation capability inside your own team — we have a model for you."
              />
            </AnimateIn>
            <div className="grid md:grid-cols-2 gap-8">
              {tracks.map((track, i) => (
                <AnimateIn key={track.label} delay={i * 0.15}>
                  <div className={`rounded-2xl p-10 h-full flex flex-col border ${i === 0 ? 'bg-white border-brand-border hover:border-brand-blue' : 'bg-brand-navy border-transparent'} transition-all duration-300 hover:shadow-[0_8px_40px_rgba(27,79,216,0.12)]`}>
                    <span className={`inline-block font-dm-sans font-medium text-[0.7rem] uppercase tracking-[0.14em] mb-4 ${i === 0 ? 'text-brand-blue' : 'text-brand-gold'}`}>
                      {track.label}
                    </span>
                    <h3 className={`font-sora font-bold text-xl mb-4 leading-[1.3] ${i === 0 ? 'text-brand-navy' : 'text-white'}`}>
                      {track.title}
                    </h3>
                    <p className={`font-dm-sans text-sm leading-[1.8] mb-8 flex-1 ${i === 0 ? 'text-brand-muted' : 'text-slate-300'}`}>
                      {track.desc}
                    </p>
                    <div className="space-y-2.5 mb-8">
                      <p className={`font-dm-sans font-semibold text-xs uppercase tracking-wider mb-3 ${i === 0 ? 'text-brand-navy' : 'text-slate-400'}`}>Ideal for</p>
                      {track.ideal.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${i === 0 ? 'text-brand-blue' : 'text-brand-gold'}`} />
                          <span className={`font-dm-sans text-sm ${i === 0 ? 'text-brand-muted' : 'text-slate-300'}`}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <CalendlyButton variant={i === 0 ? 'primary' : 'gold'} size="md">
                      {track.cta} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </CalendlyButton>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Automate ── */}
        <section className="py-24 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn>
              <SectionHeader
                label="Scope of Automation"
                title="Every Manual Finance Process Is a Target"
                subtitle="We automate across the full finance function — not just one area. The more we automate, the faster and cheaper your entire operation becomes."
              />
            </AnimateIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processes.map((p, i) => {
                const Icon = p.icon
                return (
                  <AnimateIn key={p.title} delay={i * 0.07}>
                    <div className="group bg-white rounded-2xl p-8 border border-brand-border hover:border-brand-blue hover:shadow-[0_8px_30px_rgba(27,79,216,0.1)] transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/8 text-brand-blue flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-sora font-bold text-brand-navy text-base mb-2.5">{p.title}</h3>
                      <p className="font-dm-sans text-brand-muted text-sm leading-[1.8]">{p.desc}</p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn>
              <SectionHeader
                label="The Process"
                title="Audit. Design. Deploy & Run."
                subtitle="Three structured phases that take you from a manual finance function to a fully automated one — with no disruption to your business in between."
              />
            </AnimateIn>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <AnimateIn key={step.title} delay={i * 0.15}>
                    <div className="bg-brand-slate rounded-2xl p-8 border border-brand-border h-full flex flex-col relative overflow-hidden group hover:border-brand-blue hover:shadow-[0_8px_30px_rgba(27,79,216,0.1)] transition-all duration-300">
                      {/* Large background number */}
                      <span
                        className="absolute right-6 top-4 font-sora font-bold text-brand-navy/[0.06] select-none pointer-events-none"
                        style={{ fontSize: '6rem', lineHeight: 1 }}
                      >
                        {step.number}
                      </span>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300 relative z-10">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      {/* Step label */}
                      <span className="font-dm-sans font-semibold text-[0.68rem] text-brand-blue uppercase tracking-widest mb-2 relative z-10">
                        Step {step.number}
                      </span>
                      <h3 className="font-sora font-bold text-brand-navy text-lg mb-3 relative z-10">{step.title}</h3>
                      <p className="font-dm-sans text-brand-muted text-sm leading-[1.8] relative z-10">{step.desc}</p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Tool Ecosystem ── */}
        <section className="py-24 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn>
              <SectionHeader
                dark
                label="Tool Ecosystem"
                title="We Adapt to Your Stack"
                subtitle="We don't lock you into a single platform. We work with what you have, recommend what fits, and build automation around your existing systems."
              />
            </AnimateIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolGroups.map((group, i) => {
                const CatIcon = group.icon
                return (
                  <AnimateIn key={group.category} delay={i * 0.07}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-brand-blue/40 transition-all duration-300 h-full">
                      {/* Category header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                          <CatIcon className="w-4.5 h-4.5 text-brand-gold" />
                        </div>
                        <h4 className="font-sora font-semibold text-white text-sm">
                          {group.category}
                        </h4>
                      </div>
                      {/* Tool rows */}
                      <div className="space-y-2">
                        {group.tools.map((tool) => (
                          <div
                            key={tool.name}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                          >
                            <ToolBadge
                              name={tool.name}
                              abbr={tool.abbr}
                              color={tool.color}
                              iconSlug={tool.iconSlug}
                              darkText={tool.darkText}
                            />
                            <span className="font-dm-sans text-slate-200 text-sm">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
            <AnimateIn delay={0.2}>
              <p className="text-center text-slate-500 font-dm-sans text-sm mt-10">
                Don't see your tool? We've likely worked with it — or can evaluate it as part of your audit.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-white">
          <div className="max-w-content mx-auto px-6">
            <div className="bg-brand-navy rounded-3xl p-12 md:p-16 relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[60%] h-full bg-brand-blue/15 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <AnimateIn>
                  <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">Get Started</span>
                  <h2
                    className="font-sora font-bold text-white mb-5"
                    style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
                  >
                    Your Finance Function Should Work for You — Not the Other Way Around.
                  </h2>
                  <p className="text-slate-300 font-dm-sans text-base leading-[1.8] mb-10">
                    Book a free 30-minute Automation Audit. We'll identify where your biggest manual bottlenecks are and show you exactly what a fully automated finance function could look like for your business.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <CalendlyButton variant="gold" size="lg">
                      Book Your Free Automation Audit
                    </CalendlyButton>
                    <Link href="/contact">
                      <Button variant="outline" size="lg">Talk to the Team</Button>
                    </Link>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
