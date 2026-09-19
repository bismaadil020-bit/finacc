import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import JsonLd from '@/components/seo/JsonLd'
import { faqSchema } from '@/lib/seo/schema'
import type { Faq } from '@/lib/seo/faqs'

interface Props {
  faqs: Faq[]
  title?: string
}

/**
 * Server-rendered FAQ accordion. Uses native <details> so the full answer
 * text is in the HTML for crawlers and answer engines, with no client JS.
 * Emits matching FAQPage structured data.
 */
export default function ServiceFAQ({ faqs, title = 'Frequently Asked Questions' }: Props) {
  return (
    <section className="bg-brand-slate py-20 border-t border-brand-border">
      <JsonLd data={faqSchema(faqs)} />
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader label="FAQ" title={title} align="left" />
        <div className="divide-y divide-brand-border border-y border-brand-border">
          {faqs.map(faq => (
            <details key={faq.question} className="group py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="font-sora font-semibold text-brand-navy text-base leading-snug">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-brand-muted flex-shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="font-dm-sans text-brand-muted text-[0.95rem] leading-[1.75] mt-3 pr-9">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
