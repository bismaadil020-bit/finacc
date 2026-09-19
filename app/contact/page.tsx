import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/sections/ContactForm'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = pageMetadata({
  title: 'Contact FinAccSolutions | Book Your Free Consultation',
  description: 'Talk to a Big 4-trained finance specialist about your bookkeeping, consolidation, payroll, or fundraising needs. No hard sell — just a straightforward conversation.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">
        {/* Hero */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] left-[-5%] top-0 rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <SectionHeader
              dark
              label="GET IN TOUCH"
              title="Let's Talk About Your Finance Function."
              subtitle="No hard sell. Just a straightforward conversation about where you are and what you need."
            />
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
