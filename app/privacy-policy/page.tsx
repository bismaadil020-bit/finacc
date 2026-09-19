import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | FinAccSolutions',
  description: 'How FinAccSolutions collects, uses, and protects your personal information.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20">
        {/* Hero */}
        <section className="bg-brand-navy -mt-28 pt-40 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />
          <div className="max-w-content mx-auto px-6 relative z-10">
            <span className="inline-block text-brand-gold font-dm-sans font-bold text-xs uppercase tracking-[0.12em] mb-4">
              LEGAL
            </span>
            <h1 className="font-sora font-bold text-white text-4xl lg:text-5xl mb-4" style={{ letterSpacing: '-0.02em' }}>
              Privacy Policy
            </h1>
            <p className="text-slate-300 font-dm-sans text-base max-w-xl">
              Last updated: June 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-16 prose prose-slate max-w-none">
          <div className="space-y-10 font-dm-sans text-brand-navy">

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">1. Who We Are</h2>
              <p className="text-brand-muted leading-relaxed text-sm">
                FinAccSolutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a virtual accounting and finance outsourcing firm based in Karachi, Pakistan. We provide bookkeeping, payroll, group consolidation, budgeting, fundraising support, and virtual finance talent services to clients globally.
              </p>
              <p className="text-brand-muted leading-relaxed text-sm mt-3">
                For any privacy-related queries, contact us at: <a href="mailto:contact@finaccsolutions.com" className="text-brand-blue hover:underline">contact@finaccsolutions.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">2. What Information We Collect</h2>
              <p className="text-brand-muted leading-relaxed text-sm mb-3">We collect information you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 text-brand-muted text-sm">
                <li><strong className="text-brand-navy">Contact form submissions:</strong> Full name, business email address, company name, service of interest, and any message you provide.</li>
                <li><strong className="text-brand-navy">Email correspondence:</strong> Any information you include when you email us directly.</li>
                <li><strong className="text-brand-navy">Usage data:</strong> We may collect anonymised data about how visitors interact with our website (pages visited, time on site) through analytics tools.</li>
              </ul>
              <p className="text-brand-muted leading-relaxed text-sm mt-3">
                We do <strong className="text-brand-navy">not</strong> collect payment card data, sensitive financial records, or any government identification through this website.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">3. How We Use Your Information</h2>
              <p className="text-brand-muted leading-relaxed text-sm mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-brand-muted text-sm">
                <li>Respond to your enquiry and schedule a consultation</li>
                <li>Provide and improve our services</li>
                <li>Send you relevant service information, if you have requested it</li>
                <li>Maintain our internal CRM and lead management records</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p className="text-brand-muted leading-relaxed text-sm mt-3">
                We will never sell, rent, or trade your personal information to third parties for their own marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-brand-muted leading-relaxed text-sm mb-3">
                For users in the European Economic Area (EEA) or United Kingdom, our legal bases for processing personal data are:
              </p>
              <ul className="list-disc list-inside space-y-2 text-brand-muted text-sm">
                <li><strong className="text-brand-navy">Legitimate interests:</strong> Responding to business enquiries and maintaining client relationships.</li>
                <li><strong className="text-brand-navy">Contractual necessity:</strong> When you engage us for services, processing is necessary to fulfil that contract.</li>
                <li><strong className="text-brand-navy">Consent:</strong> Where you have explicitly agreed to receive marketing communications.</li>
                <li><strong className="text-brand-navy">Legal obligation:</strong> Where processing is required to comply with applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">5. Data Storage & Security</h2>
              <p className="text-brand-muted leading-relaxed text-sm">
                Contact form submissions are stored securely in <strong className="text-brand-navy">Supabase</strong>, a cloud database provider that complies with SOC 2 Type II and GDPR. Data is encrypted at rest and in transit using TLS. Access to your data is restricted to authorised FinAccSolutions personnel only.
              </p>
              <p className="text-brand-muted leading-relaxed text-sm mt-3">
                While we take commercially reasonable steps to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">6. Data Retention</h2>
              <p className="text-brand-muted leading-relaxed text-sm">
                We retain contact enquiry data for up to <strong className="text-brand-navy">3 years</strong> from the date of submission, or for as long as necessary to fulfil the purposes described in this policy. If you become a client, your data will be retained in accordance with the terms of our services agreement and applicable accounting record-keeping requirements.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">7. Sharing Your Information</h2>
              <p className="text-brand-muted leading-relaxed text-sm mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-brand-muted text-sm">
                <li><strong className="text-brand-navy">Service providers:</strong> Supabase (database), email providers, and analytics tools that help us operate our website — bound by confidentiality obligations.</li>
                <li><strong className="text-brand-navy">Legal authorities:</strong> Where required by law, regulation, or court order.</li>
              </ul>
              <p className="text-brand-muted leading-relaxed text-sm mt-3">
                We do not share your data with any other third parties without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">8. Cookies</h2>
              <p className="text-brand-muted leading-relaxed text-sm">
                Our website may use essential session cookies to support authentication for our admin panel. We do not currently use advertising or tracking cookies. If this changes, we will update this policy and obtain your consent where required.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">9. Your Rights</h2>
              <p className="text-brand-muted leading-relaxed text-sm mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-brand-muted text-sm">
                <li><strong className="text-brand-navy">Access</strong> the personal data we hold about you</li>
                <li><strong className="text-brand-navy">Rectify</strong> inaccurate or incomplete data</li>
                <li><strong className="text-brand-navy">Erase</strong> your data (right to be forgotten), subject to legal obligations</li>
                <li><strong className="text-brand-navy">Restrict</strong> or object to how we process your data</li>
                <li><strong className="text-brand-navy">Data portability</strong> — receive your data in a structured, machine-readable format</li>
                <li><strong className="text-brand-navy">Withdraw consent</strong> at any time, where processing is based on consent</li>
              </ul>
              <p className="text-brand-muted leading-relaxed text-sm mt-3">
                To exercise any of these rights, email us at <a href="mailto:contact@finaccsolutions.com" className="text-brand-blue hover:underline">contact@finaccsolutions.com</a>. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">10. Third-Party Links</h2>
              <p className="text-brand-muted leading-relaxed text-sm">
                Our website may contain links to third-party websites (e.g., LinkedIn, Instagram). We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">11. Children&apos;s Privacy</h2>
              <p className="text-brand-muted leading-relaxed text-sm">
                Our services are intended for business professionals and are not directed at individuals under the age of 18. We do not knowingly collect personal data from children.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">12. Changes to This Policy</h2>
              <p className="text-brand-muted leading-relaxed text-sm">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-xl text-brand-navy mb-3">13. Contact Us</h2>
              <p className="text-brand-muted leading-relaxed text-sm">
                If you have any questions, concerns, or requests relating to this Privacy Policy or how we handle your personal data, please contact us:
              </p>
              <div className="mt-4 p-5 bg-brand-slate border border-brand-border rounded-xl text-sm space-y-1">
                <p className="font-semibold text-brand-navy">FinAccSolutions</p>
                <p className="text-brand-muted">Karachi, Pakistan</p>
                <p className="text-brand-muted">
                  Email:{' '}
                  <a href="mailto:contact@finaccsolutions.com" className="text-brand-blue hover:underline">
                    contact@finaccsolutions.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
