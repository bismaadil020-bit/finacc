import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Shield, Zap, Globe } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = pageMetadata({
  title: 'About FinAccSolutions | Big 4-Trained Finance Outsourcing',
  description: 'Founded by Big 4 alumni, FinAccSolutions bridges elite global financial expertise with cost-efficient offshore execution — serving holding groups, funded startups, and international businesses across 30+ countries.',
  path: '/about',
})

const stats = [
  { value: '30+', label: 'Countries Served' },
  { value: 'Big 4', label: 'Alumni-Founded' },
  { value: 'IFRS & GAAP', label: 'Dual Certified' },
  { value: '60–80%', label: 'Cost Reduction vs In-House' },
]

const values = [
  {
    icon: Shield,
    title: 'Uncompromising Standards',
    desc: 'We hold every engagement to the same rigour our team developed at Big 4 and Big 10 firms. No shortcuts, no approximations — just accurate, audit-ready output every time.',
  },
  {
    icon: Globe,
    title: 'Borderless by Design',
    desc: 'Our model was built for the global economy. Whether you are a UK holding group, a UAE-based startup, or a US-incorporated business with international subsidiaries, our team speaks your framework.',
  },
  {
    icon: Zap,
    title: 'Agile Offshore Economics',
    desc: 'Institutional-grade finance should not require institutional-grade budgets. We combine elite expertise with offshore economics to give growing businesses access to a calibre of finance team previously reserved for large corporates.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">

        {/* ── Hero ── */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] right-[-10%] top-[-20%] rounded-full bg-brand-blue/15 blur-[140px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <AnimateIn direction="up">
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">About Us</span>
              <h1
                className="font-sora font-bold text-white leading-[1.15] mb-6 max-w-3xl"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}
              >
                The Intersection of Big&nbsp;4 Rigor and Global Agility
              </h1>
              <p className="text-slate-300 text-lg font-dm-sans leading-[1.7] max-w-2xl mb-10">
                Founded by Big 4 alumni, FinAccSolutions delivers elite financial management and specialised accounting to international businesses — combining strict Western regulatory standards with highly agile offshore economics.
              </p>
              <Link href="/contact">
                <Button variant="gold" size="lg">Start the Conversation <ArrowRight className="w-5 h-5 ml-2" /></Button>
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-brand-slate border-b border-brand-border">
          <div className="max-w-content mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
              {stats.map((s, i) => (
                <AnimateIn key={s.label} delay={i * 0.07}>
                  <div className="py-10 px-8 text-center">
                    <div className="font-sora font-bold text-brand-blue mb-1" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                      {s.value}
                    </div>
                    <div className="text-sm font-dm-sans text-brand-muted">{s.label}</div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="py-24 bg-white">
          <div className="max-w-content mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateIn direction="left">
                <SectionHeader
                  align="left"
                  label="Our Story"
                  title="Built to Bridge a Gap the Industry Ignored"
                />
                <div className="space-y-5 text-brand-muted font-dm-sans leading-[1.8] text-base">
                  <p>
                    FinAccSolutions was founded on a simple yet transformative premise: world-class financial oversight should not be a luxury reserved only for the largest corporations. For too long, growing businesses were forced to choose between expensive in-house finance teams and underpowered generalist bookkeepers.
                  </p>
                  <p>
                    Our founders — trained at Big 4 and Big 10 firms, with deep hands-on experience across IFRS and US GAAP — saw a better path. By combining institutional-grade expertise with the economics of offshore talent, they built a firm that gives holding groups, funded startups, and internationally expanding businesses a finance function as accurate as it is scalable.
                  </p>
                  <p>
                    Today, FinAccSolutions serves clients across 30+ countries, delivering everything from daily bookkeeping and multi-entity IFRS consolidations to investor-ready financial models and virtual CFO engagements — all without the traditional corporate overhead.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn direction="right">
                <div className="bg-brand-navy rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-72 h-72 bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none" />

                  {/* Top accent bar */}
                  <div className="relative z-10 h-1 bg-gradient-to-r from-brand-gold via-brand-blue to-transparent" />

                  {/* Quote body */}
                  <div className="relative z-10 px-10 pt-10 pb-8">
                    {/* Large decorative quote mark */}
                    <div
                      className="font-sora font-bold text-brand-gold/20 leading-none select-none mb-2"
                      style={{ fontSize: '7rem', lineHeight: '1' }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </div>
                    <blockquote
                      className="font-sora font-semibold text-white leading-[1.55] -mt-6"
                      style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)' }}
                    >
                      Bridging elite global talent with Big&nbsp;4 precision to give your business absolute financial clarity.
                    </blockquote>
                  </div>

                  {/* Attribution row */}
                  <div className="relative z-10 border-t border-white/10 mx-10 mb-10 pt-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-dm-sans font-bold text-white text-sm">Sohail Khan</div>
                      <div className="font-dm-sans text-slate-400 text-xs mt-0.5">Chief Executive Officer, FinAccSolutions</div>
                    </div>
                    {/* Founded badge inline */}
                    <div className="flex-shrink-0 bg-brand-gold/10 border border-brand-gold/30 rounded-xl px-5 py-3 text-center">
                      <div className="font-sora font-bold text-brand-gold text-lg leading-none">2022</div>
                      <div className="font-dm-sans text-brand-gold/70 text-[0.65rem] uppercase tracking-wider mt-1">Founded</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="py-24 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn>
              <SectionHeader
                label="Purpose"
                title="Mission & Vision"
                subtitle="Two complementary commitments that guide every engagement we take on."
              />
            </AnimateIn>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <AnimateIn delay={0.1}>
                <div className="bg-white rounded-2xl p-10 border border-brand-border h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-3 block">Mission</span>
                  <h3 className="font-sora font-bold text-brand-navy text-xl mb-4 leading-[1.3]">
                    Democratise Elite Financial Intelligence
                  </h3>
                  <p className="font-dm-sans text-brand-muted leading-[1.8] flex-1">
                    To democratise elite financial intelligence — empowering global businesses to scale rapidly by delivering Big 4 precision and seamless financial operations without the traditional corporate overhead.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="bg-brand-navy rounded-2xl p-10 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/20 blur-[80px] rounded-full pointer-events-none" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                      <Eye className="w-6 h-6 text-brand-gold" />
                    </div>
                    <span className="text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-3 block">Vision</span>
                    <h3 className="font-sora font-bold text-white text-xl mb-4 leading-[1.3]">
                      The Premier Engine for Elite Finance Talent
                    </h3>
                    <p className="font-dm-sans text-slate-300 leading-[1.8] flex-1">
                      To become the premier global engine for elite financial talent — recognised by international holding groups and fast-growing enterprises as the ultimate partner for borderless, institutional-grade finance operations.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-24 bg-white">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn>
              <SectionHeader
                label="Our Principles"
                title="What We Stand For"
                subtitle="Three commitments that underpin every client relationship — from the first call to ongoing delivery."
              />
            </AnimateIn>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <AnimateIn key={v.title} delay={i * 0.1}>
                    <div className="group bg-brand-slate rounded-2xl p-8 border border-brand-border hover:border-brand-blue hover:shadow-[0_8px_30px_rgba(27,79,216,0.1)] transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-sora font-bold text-brand-navy text-lg mb-3">{v.title}</h3>
                      <p className="font-dm-sans text-brand-muted leading-[1.8] text-sm">{v.desc}</p>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Who We Work With ── */}
        <section className="py-24 bg-brand-slate">
          <div className="max-w-content mx-auto px-6">
            <AnimateIn>
              <SectionHeader
                label="Our Clients"
                title="Built for Businesses That Mean Business"
                subtitle="We work best with organisations that have outgrown basic bookkeeping and need a finance partner that can scale with them."
              />
            </AnimateIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Holding Groups', desc: 'Multi-entity structures with complex IFRS consolidation and intercompany eliminations across multiple currencies and jurisdictions.' },
                { title: 'Funded Startups', desc: 'Seed to Series B companies that need investor-ready models, board-ready reporting, and a finance function that grows with their runway.' },
                { title: 'International SMEs', desc: 'UK, US, UAE, and Australian businesses ready to replace expensive local finance hires with dedicated offshore professionals at 60–80% lower cost.' },
                { title: 'Private Equity Portfolios', desc: 'Portfolio companies requiring consistent reporting standards across entities, fast close cycles, and clean books ahead of exit events.' },
                { title: 'Professional Services Firms', desc: 'Law firms, consultancies, and agencies that need accurate books, payroll, and compliance without the distraction of managing an in-house finance team.' },
                { title: 'Businesses Scaling Globally', desc: 'Companies expanding into new markets who need a finance partner fluent in both IFRS and US GAAP and experienced with multi-currency reporting.' },
              ].map((c, i) => (
                <AnimateIn key={c.title} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl p-7 border border-brand-border h-full">
                    <h4 className="font-sora font-semibold text-brand-navy text-base mb-2">{c.title}</h4>
                    <p className="font-dm-sans text-brand-muted text-sm leading-[1.8]">{c.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 text-center relative z-10">
            <AnimateIn>
              <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">Get Started</span>
              <h2
                className="font-sora font-bold text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
              >
                Ready to Upgrade Your Finance Function?
              </h2>
              <p className="text-slate-300 font-dm-sans text-lg leading-[1.7] max-w-2xl mx-auto mb-10">
                Book a free 30-minute consultation with our team. We will assess your current setup, identify gaps, and outline what a dedicated offshore finance function could look like for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="gold" size="lg">Book Your Free Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">Explore Our Services</Button>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
