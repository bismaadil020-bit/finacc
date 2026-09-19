import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Star, TrendingUp, Award, Users } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = pageMetadata({
  title: 'Why FinAccSolutions | Big 4-Trained. Offshore Economics.',
  description: 'Finance expertise you\'d pay Big 4 rates for, at a fraction of the cost. Trusted by holding groups, funded startups, and international finance teams.',
  path: '/why-us',
})

const differentiators = [
  {
    stat: 'Big 4 & Big 10',
    title: 'Credentials That Matter',
    desc: 'Our professionals hold ACA, ACCA, and CPA qualifications from Big 4 and Big 10 firms — PwC, Deloitte, KPMG, EY, BDO, and Grant Thornton. You get the quality standard without the retainer fee.',
  },
  {
    stat: 'IFRS & US GAAP',
    title: 'Standards-Certified',
    desc: 'Deep expertise across both major reporting frameworks. Whether you\'re preparing consolidated IFRS accounts or US GAAP financials for a Delaware-incorporated parent, our team has done it before.',
  },
  {
    stat: '60–80% less',
    title: 'Offshore Economics',
    desc: 'A dedicated offshore finance professional costs 60–80% less than an equivalent in-house hire in the UK or US — with no recruitment fees, no employer NI, and a 1-month notice period.',
  },
]

const caseStudies = [
  {
    metric: '78%',
    unit: 'reduction',
    title: 'Multi-Entity IFRS Consolidation',
    desc: 'Close cycle cut from 21 days to 5 days for a 7-entity holding group across 4 currencies under IFRS 10.',
    tags: ['Group Consolidation', 'IFRS 10', 'LucaNet'],
    name: 'James Morrison',
    role: 'CFO, Northgate Holdings',
  },
  {
    metric: '$2.1M',
    unit: 'raised',
    title: 'Series A Fundraising Support',
    desc: 'Seed round closed after FinAccSolutions built a full 3-statement model, DCF valuation, and investor data room pack in 4 days.',
    tags: ['Fundraising', 'Financial Modelling'],
    name: 'Sarah Al-Rashid',
    role: 'Founder, Verdana Capital',
  },
  {
    metric: '$38K',
    unit: 'saved/year',
    title: 'Outsourced Bookkeeping & Payroll',
    desc: 'Finance overhead reduced by $38K annually vs. previous in-house setup. Reconciliations landing on the 3rd of every month.',
    tags: ['Bookkeeping', 'Payroll'],
    name: 'David Chen',
    role: 'Operations Director, Pacific Rim Logistics',
  },
]

const testimonials = [
  {
    name: 'James Morrison',
    role: 'CFO, Northgate Holdings',
    text: 'FinAccSolutions took over our IFRS 10 group consolidation using LucaNet and cut our close cycle from 21 days to 5. The accuracy has been flawless — our auditors specifically commented on the quality of the intercompany eliminations.',
    initials: 'JM',
  },
  {
    name: 'Sarah Al-Rashid',
    role: 'Founder, Verdana Capital',
    text: 'The team delivered a full DCF, comparables analysis, and pitch deck financial slides in 4 days. Our lead investor called out the quality of the model. We closed our $2.1M round two months later.',
    initials: 'SA',
  },
  {
    name: 'David Chen',
    role: 'Operations Director, Pacific Rim Logistics',
    text: "We outsourced our bookkeeping and payroll 18 months ago and haven't looked back. Reconciliation lands on the 3rd of every month without fail, and we've reduced our finance overhead by over $38,000 annually.",
    initials: 'DC',
  },
]

const processSteps = [
  { step: '01', title: 'Understand', desc: 'A focused scoping call to understand your structure, reporting requirements, current pain points, and timelines.' },
  { step: '02', title: 'Propose', desc: 'A clear proposal: what we\'ll deliver, how we\'ll work, who\'s on your team, and what it costs. No surprises.' },
  { step: '03', title: 'Deploy', desc: 'Onboarding completed in 5–10 working days. Your dedicated professional is integrated into your systems and workflows.' },
  { step: '04', title: 'Optimize', desc: 'Monthly check-ins to review output quality, capacity, and any process improvements. Your team grows with your business.' },
]

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">

        {/* Hero */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] left-[-15%] top-[-10%] rounded-full bg-brand-blue/15 blur-[150px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">
                WHY FINACCSOLUTIONS
              </span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Finance Expertise You'd Pay Big 4 Rates For. At a Fraction of the Cost.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                Trusted by holding groups, funded startups, and international finance teams who need senior-level expertise without the overhead of a senior-level hire.
              </p>
              <Link href="/contact">
                <Button variant="gold" size="lg">Book Your Free Consultation</Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* 3 Differentiators */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="WHAT SETS US APART"
                title="Qualified Finance Professionals. Offshore Economics."
                subtitle="Not a software platform. Not a call centre. Senior-level expertise with offshore-level costs."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((d, i) => (
                <AnimateIn key={d.title} direction="up" delay={i * 0.1}>
                  <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="font-sora font-bold text-brand-gold text-2xl mb-2">{d.stat}</div>
                    <h3 className="font-sora font-bold text-brand-navy text-lg mb-3">{d.title}</h3>
                    <p className="font-dm-sans text-brand-muted text-sm leading-[1.7]">{d.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="PROVEN RESULTS"
                title="Real Outcomes for Real Finance Leaders"
                subtitle="Specific numbers. Named professionals. Auditable results."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((cs, i) => (
                <AnimateIn key={cs.title} direction="up" delay={i * 0.1}>
                  <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="mb-6">
                      <span className="font-sora font-bold text-brand-gold text-4xl" style={{ letterSpacing: '-0.02em' }}>{cs.metric}</span>
                      <span className="font-dm-sans text-brand-muted text-sm ml-2">{cs.unit}</span>
                    </div>
                    <h3 className="font-sora font-bold text-brand-navy text-lg mb-3">{cs.title}</h3>
                    <p className="font-dm-sans text-brand-muted text-sm leading-[1.7] mb-5 flex-1">{cs.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-dm-sans font-semibold px-2.5 py-1 bg-brand-blue/8 text-brand-blue rounded-full border border-brand-blue/15">{tag}</span>
                      ))}
                    </div>
                    <p className="font-dm-sans text-xs text-brand-muted border-t border-brand-border pt-4">
                      <span className="font-semibold text-brand-navy">{cs.name}</span> — {cs.role}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="CLIENT VOICES"
                title="What Finance Leaders Say"
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <AnimateIn key={t.name} direction="up" delay={i * 0.08}>
                  <div className="bg-white border border-brand-border rounded-xl p-6 shadow-[0_4px_24px_rgba(10,22,40,0.06)] flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="font-dm-sans text-brand-muted text-sm italic leading-[1.65] mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 border-t border-brand-border pt-4">
                      <div className="w-9 h-9 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs flex items-center justify-center font-sora">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-sora font-bold text-brand-navy text-xs">{t.name}</p>
                        <p className="font-dm-sans text-brand-muted text-[11px]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 lg:py-28 bg-brand-navy">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                dark
                label="OUR APPROACH"
                title="How We Work"
                subtitle="From first conversation to fully integrated team member — in under 2 weeks."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((s, i) => (
                <AnimateIn key={s.step} direction="up" delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-300">
                    <div className="font-sora font-bold text-brand-gold text-3xl mb-4">{s.step}</div>
                    <h3 className="font-sora font-bold text-white text-lg mb-3">{s.title}</h3>
                    <p className="font-dm-sans text-slate-300 text-sm leading-[1.7]">{s.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6 text-center">
            <AnimateIn direction="up">
              <h2 className="font-sora font-bold text-brand-navy text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                See If We're the Right Fit
              </h2>
              <p className="font-dm-sans text-brand-muted text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                A free 30-minute conversation — no commitment, no pitch deck, just an honest discussion about your finance function and whether we can help.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
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
