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
  title: 'Budgeting & Forecasting Services | FinAccSolutions',
  description: 'Annual budgets, rolling 12-month forecasts, KPI dashboards, and board pack preparation — delivered by Big 4-trained offshore finance professionals.',
  path: '/services/budgeting-forecasting',
})

const included = [
  'Annual budget build — bottom-up, by department',
  'Rolling 12-month forecast — updated monthly',
  'Actuals vs. budget variance analysis',
  'KPI dashboard & management reporting',
  'Board pack preparation & financial commentary',
  'Cash flow forecasting & runway analysis',
]

const forWhom = [
  { title: 'Founders Pre-Fundraise', desc: 'Investors don\'t just look at your current numbers — they look at how well you understand your own business. A credible budget and forecast signals financial maturity before your first pitch.' },
  { title: 'Finance Directors Presenting to Boards', desc: 'Your board needs numbers they can interrogate. We produce the variance analysis, KPI dashboards, and written commentary that make board meetings productive.' },
  { title: 'PE-Backed Management Teams', desc: 'Monthly reporting to sponsors, 100-day plan financials, and rolling reforecasts. We build the process and run it — so your team focuses on execution.' },
]

const schema = [
  serviceSchema({
    name: 'Budgeting & Forecasting',
    serviceType: 'Financial Planning & Analysis',
    description: 'Annual budgets, rolling 12-month forecasts, KPI dashboards, and board pack preparation — delivered by Big 4-trained offshore finance professionals.',
    path: '/services/budgeting-forecasting',
    offers: included,
  }),
  breadcrumbSchema([{ name: 'Services', path: '/services' }, { name: 'Budgeting & Forecasting', path: '/services/budgeting-forecasting' }]),
]

export default function BudgetingForecastingPage() {
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
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">BUDGETING & FORECASTING</span>
              <h1 className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
                Know Your Numbers Before the Month Does.
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                Annual budgets, rolling forecasts, and KPI dashboards built and maintained by Big 4-trained analysts — giving your leadership team financial visibility that drives better decisions.
              </p>
              <Link href="/contact?service=Budgeting+%26+Forecasting">
                <Button variant="gold" size="lg">Book Your Free Consultation</Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn direction="up">
              <SectionHeader label="WHAT'S INCLUDED" title="Your Complete Planning & Reporting Function" />
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
              <SectionHeader label="WHO IT'S FOR" title="For Finance Leaders Who Need Real-Time Visibility" />
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
              <h2 className="font-sora font-bold text-white text-3xl lg:text-4xl mb-4" style={{ letterSpacing: '-0.02em' }}>Stop Reacting. Start Forecasting.</h2>
              <p className="text-slate-300 font-dm-sans text-base mb-8 max-w-xl mx-auto leading-[1.7]">
                Book a free 30-minute conversation. Tell us what your board needs to see every month and we'll tell you how to build it.
              </p>
              <Link href="/contact?service=Budgeting+%26+Forecasting">
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
