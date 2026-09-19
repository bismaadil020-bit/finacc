import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import { breadcrumbSchema, serviceSchema } from '@/lib/seo/schema'
import JsonLd from '@/components/seo/JsonLd'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import { serviceFaqs } from '@/lib/seo/faqs'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, LineChart, Users, TrendingUp, FileText } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = pageMetadata({
  title: 'Fundraising Finance Support | Investor-Ready Financial Models | FinAccSolutions',
  description: 'Big 4-trained financial modelling for pre-Series A and growth-stage companies. Three-statement models, DCF valuations, and investor data room support — built to close rounds.',
  path: '/services/fundraising-support',
})

const deliverables = [
  '3-statement financial model (P&L, balance sheet, cash flow)',
  'Revenue and cost driver build — bottom-up, not top-down',
  'Scenario analysis & sensitivity tables',
  'DCF valuation & comparable company analysis',
  'Board-ready financial narrative & commentary',
  'Investor data room financial pack support',
]

const modelFeatures = [
  {
    icon: TrendingUp,
    title: 'Revenue Drivers',
    desc: 'Built from unit economics up — customer cohorts, ARR/MRR bridges, contract values, and churn. Investors interrogate the assumptions, not just the output.',
  },
  {
    icon: FileText,
    title: 'Cost Structure',
    desc: 'Headcount plan, COGS breakdown, opex phasing, and EBITDA bridge. Credible burn rate and runway analysis that holds up in due diligence.',
  },
  {
    icon: LineChart,
    title: 'Funding & Returns',
    desc: 'Pre-money and post-money cap table-ready outputs, funding waterfall, and use-of-proceeds schedule. Everything a lead investor needs to move to term sheet.',
  },
]

const audiences = [
  {
    icon: Users,
    title: 'Founders Raising Seed to Series B',
    points: [
      'First-time fundraisers who need a credible model fast',
      'Second-time founders who want Big 4-quality without Big 4 fees',
      'Companies going into accelerators or VC processes',
    ],
  },
  {
    icon: LineChart,
    title: 'CFOs Preparing for PE or VC Due Diligence',
    points: [
      'Management buyout or growth equity processes',
      'PE portfolio companies preparing for add-on acquisitions',
      'Companies responding to investor information requests',
    ],
  },
]

const schema = [
  serviceSchema({
    name: 'Fundraising Finance Support',
    serviceType: 'Financial Modelling & Valuation',
    description: 'Big 4-trained financial modelling for pre-Series A and growth-stage companies. Three-statement models, DCF valuations, and investor data room support — built to close rounds.',
    path: '/services/fundraising-support',
    offers: deliverables,
  }),
  breadcrumbSchema([{ name: 'Services', path: '/services' }, { name: 'Fundraising Finance Support', path: '/services/fundraising-support' }]),
]

export default function FundraisingSupportPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={schema} />
      <main className="min-h-screen bg-white pt-28">

        {/* Hero */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] right-[-10%] top-[-10%] rounded-full bg-brand-gold/10 blur-[130px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">
                FUNDRAISING SUPPORT
              </span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Get Your Financials Investor-Ready.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                Big 4-trained financial modelling for pre-Series A and growth-stage companies. We build the model, the narrative, and the data room pack — so you walk into investor meetings with complete confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?service=Fundraising+Support">
                  <Button variant="gold" size="lg">Book a Fundraising Readiness Call</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Talk to a Specialist</Button>
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.15}>
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
                {[
                  { stat: '$2.1M', label: 'Seed round closed in 8 weeks' },
                  { stat: '4 days', label: 'Full model delivered' },
                  { stat: 'DCF + comps', label: 'Valuation methodology' },
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

        {/* What We Deliver */}
        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="WHAT WE DELIVER"
                title="A Complete Investor-Ready Financial Package"
                subtitle="Not just a spreadsheet — a full financial story your investors can interrogate."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliverables.map((item, i) => (
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

        {/* The Model We Build */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                label="THE MODEL WE BUILD"
                title="Financial Models That Hold Up in Due Diligence"
                subtitle="Investors will stress-test every assumption. We build models that are designed to be challenged — and survive it."
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {modelFeatures.map((f, i) => {
                const Icon = f.icon
                return (
                  <AnimateIn key={f.title} direction="up" delay={i * 0.1}>
                    <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.10)] hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/8 text-brand-blue flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-sora font-bold text-brand-navy text-lg mb-3">{f.title}</h3>
                      <p className="font-dm-sans text-brand-muted text-sm leading-[1.7]">{f.desc}</p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 lg:py-28 bg-brand-navy">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader
                dark
                label="WHO IT'S FOR"
                title="Built for Founders and Finance Leaders Raising Capital"
              />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {audiences.map((a, i) => {
                const Icon = a.icon
                return (
                  <AnimateIn key={a.title} direction="up" delay={i * 0.1}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-sora font-bold text-white text-lg mb-4">{a.title}</h3>
                      <ul className="space-y-3">
                        {a.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span className="font-dm-sans text-slate-300 text-sm leading-[1.6]">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="py-20 lg:py-28">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <div className="bg-white border border-brand-border rounded-2xl p-10 shadow-[0_4px_24px_rgba(10,22,40,0.06)] max-w-3xl mx-auto text-center">
                <div className="font-sora font-bold text-brand-gold text-5xl mb-4" style={{ letterSpacing: '-0.02em' }}>$2.1M</div>
                <p className="font-sora font-bold text-brand-navy text-xl mb-3">Seed Round Closed in 8 Weeks</p>
                <p className="font-dm-sans text-brand-muted text-base leading-[1.7] mb-6">
                  FinAccSolutions built a full DCF, comparables analysis, and pitch deck financial slides in 4 days. The lead investor called out the quality of the model specifically. The round closed two months later.
                </p>
                <p className="font-dm-sans font-semibold text-brand-navy text-sm italic">— Sarah Al-Rashid, Founder, Verdana Capital</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <ServiceFAQ faqs={serviceFaqs['fundraising-support']} />

        <section className="bg-brand-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />
          <div className="max-w-content mx-auto px-6 text-center relative z-10">
            <AnimateIn direction="up">
              <h2 className="font-sora font-bold text-white text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>
                Ready to Walk Into Investor Meetings With Confidence?
              </h2>
              <p className="text-slate-300 font-dm-sans text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                Book a free 30-minute Fundraising Readiness Call. We'll assess your current financial position and tell you exactly what needs to be in place before you approach investors.
              </p>
              <Link href="/contact?service=Fundraising+Support">
                <Button variant="gold" size="lg">
                  Book a Fundraising Readiness Call <ArrowRight className="w-4 h-4 ml-1 inline" />
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
