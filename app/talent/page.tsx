import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, BookOpen, Users, TrendingUp, LineChart, Building2, Briefcase } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = pageMetadata({
  title: 'Offshore Finance Talent | Big 4-Trained Professionals | FinAccSolutions',
  description: 'Pre-vetted offshore finance professionals with Big 4 & Big 10 credentials, IFRS & US GAAP certified. Dedicated resources integrated into your team within 2 weeks.',
  path: '/talent',
})

const credentials = [
  {
    title: 'Qualifications',
    items: ['ACA (ICAEW)', 'ACCA', 'CPA (US)', 'CIMA', 'Big 4 & Big 10 trained'],
  },
  {
    title: 'Specialisms',
    items: ['IFRS & US GAAP reporting', 'Group consolidation (IFRS 10)', 'Financial modelling & DCF', 'Payroll & compliance', 'Management accounts'],
  },
  {
    title: 'Experience',
    items: ['5–15 years average experience', 'Public practice & industry', 'UK, UAE & US clients', 'Listed & private groups', 'Startup to enterprise'],
  },
]

const roles = [
  { icon: BookOpen, title: 'Senior Bookkeeper', desc: 'Monthly ledger maintenance, bank reconciliations, AP/AR management, and management accounts pack. Operational from day one.', when: 'When you need reliable month-end close without the overhead.' },
  { icon: Users, title: 'Payroll Specialist', desc: 'UK PAYE, US payroll (Gusto/ADP), and multi-currency international payroll. On-time, every cycle, fully compliant.', when: 'When payroll errors or delays are a recurring problem.' },
  { icon: TrendingUp, title: 'Management Accountant', desc: 'Monthly P&L, variance analysis, KPI dashboards, and board pack preparation. Insights your leadership team can act on.', when: 'When you need finance business partnering without the hire.' },
  { icon: LineChart, title: 'Financial Analyst', desc: '3-statement modelling, budgeting, forecasting, scenario analysis, and investor reporting. Built to Big 4 standards.', when: 'When you\'re fundraising or need a credible financial model.' },
  { icon: Building2, title: 'Group Consolidation Specialist', desc: 'IFRS 10 consolidation, intercompany eliminations, NCI calculations, and IAS 21 currency translation across multi-entity groups.', when: 'When your close cycle is measured in weeks, not days.' },
  { icon: Briefcase, title: 'Virtual CFO', desc: 'Strategic finance leadership — board reporting, lender relationships, financial strategy, and CFO-level oversight without the full-time cost.', when: 'When you\'ve outgrown a bookkeeper but can\'t yet justify a full-time CFO.' },
]

const processSteps = [
  { num: '01', title: 'Scoping Call', desc: 'A 30-minute call to understand your requirements — which roles, what systems, what timelines, and what level of seniority you need.' },
  { num: '02', title: 'Candidate Shortlist', desc: 'Within 5 working days, we present a shortlist of 2–3 pre-vetted candidates matched to your brief. You interview and choose.' },
  { num: '03', title: 'Trial Period', desc: 'A 4-week trial period gives you full visibility of the professional\'s output before you commit to a longer engagement.' },
  { num: '04', title: 'Fully Integrated', desc: 'Your dedicated professional operates as part of your team — in your systems, on your calls, and to your standards.' },
]

const terms = [
  { title: 'Dedicated Resource', desc: 'Your professional works exclusively on your account — not shared across multiple clients. You get their full attention and accountability.' },
  { title: '1-Month Notice Period', desc: 'No long lock-ins. Scale up, scale down, or change roles with a single month\'s notice. Your headcount stays flexible.' },
  { title: 'Fully Managed', desc: 'We handle recruitment, onboarding, performance management, and backfill. You manage the work — we manage the person.' },
]

export default function TalentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">

        {/* Hero */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] right-[-10%] top-[-5%] rounded-full bg-brand-blue/15 blur-[130px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">
                OFFSHORE TALENT
              </span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Big 4-Trained Finance Professionals, Built Into Your Team.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                Pre-vetted specialists with IFRS & US GAAP credentials — ready to deploy within 2 weeks, at 60–80% of the cost of an equivalent in-house hire.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="gold" size="lg">Build Your Offshore Finance Team</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">View All Services</Button>
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.15}>
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
                {[
                  { stat: '2 weeks', label: 'Average time to deploy' },
                  { stat: '60–80%', label: 'Cost saving vs. in-house hire' },
                  { stat: 'Big 4 & 10', label: 'Professional backgrounds' },
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

        {/* Credentials */}
        <section className="py-20 lg:py-28 bg-brand-navy border-t border-white/5">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                dark
                label="WHO OUR PROFESSIONALS ARE"
                title="Senior Finance Specialists — Not Junior Staff"
                subtitle="Every professional in our network has been through a rigorous vetting process. Qualifications are verified. References are checked. Trial periods are mandatory."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {credentials.map((cred, i) => (
                <AnimateIn key={cred.title} direction="up" delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors duration-300">
                    <h3 className="font-sora font-bold text-brand-gold text-lg mb-5">{cred.title}</h3>
                    <ul className="space-y-3">
                      {cred.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                          <span className="font-dm-sans text-slate-200 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="ROLES AVAILABLE"
                title="The Right Level of Expertise for Every Function"
                subtitle="From senior bookkeeper to Virtual CFO — we match the role to your actual requirements, not a job title template."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role, i) => {
                const Icon = role.icon
                return (
                  <AnimateIn key={role.title} direction="up" delay={i * 0.08}>
                    <div className="bg-white border border-brand-border rounded-2xl p-7 shadow-[0_4px_24px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="w-11 h-11 rounded-xl bg-brand-blue/8 text-brand-blue flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-sora font-bold text-brand-navy text-lg mb-2">{role.title}</h3>
                      <p className="font-dm-sans text-brand-muted text-sm leading-[1.7] mb-4 flex-1">{role.desc}</p>
                      <p className="font-dm-sans text-xs font-semibold text-brand-blue bg-brand-blue/6 rounded-lg px-3 py-2 leading-[1.5]">
                        Best fit: {role.when}
                      </p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="HOW IT WORKS"
                title="From Scoping Call to Fully Integrated — in 2 Weeks"
              />
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <AnimateIn key={step.num} direction="up" delay={i * 0.1}>
                  <div className="bg-white border border-brand-border rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,22,40,0.06)] h-full">
                    <div className="font-sora font-bold text-brand-gold text-3xl mb-4">{step.num}</div>
                    <h3 className="font-sora font-bold text-brand-navy text-lg mb-3">{step.title}</h3>
                    <p className="font-dm-sans text-brand-muted text-sm leading-[1.7]">{step.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Terms */}
        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="ENGAGEMENT TERMS"
                title="Flexible by Design"
                subtitle="We designed our engagement model around what growing businesses actually need."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {terms.map((term, i) => (
                <AnimateIn key={term.title} direction="up" delay={i * 0.1}>
                  <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,22,40,0.06)] text-center">
                    <h3 className="font-sora font-bold text-brand-navy text-xl mb-3">{term.title}</h3>
                    <p className="font-dm-sans text-brand-muted text-sm leading-[1.7]">{term.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />
          <div className="max-w-content mx-auto px-6 text-center relative z-10">
            <AnimateIn direction="up">
              <h2 className="font-sora font-bold text-white text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                Build Your Offshore Finance Team
              </h2>
              <p className="text-slate-300 font-dm-sans text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                Tell us what you need and we'll have a candidate shortlist ready within 5 working days. No recruitment fees. No long-term lock-ins.
              </p>
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Start the Conversation <ArrowRight className="w-4 h-4 ml-1 inline" />
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
