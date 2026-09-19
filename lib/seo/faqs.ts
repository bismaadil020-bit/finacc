/**
 * Service-page FAQs. Written answer-first for AI search engines (GEO) and
 * emitted as FAQPage schema. Target markets: UK, US, Germany.
 * Keep answers self-contained — they get quoted out of context.
 */
export interface Faq {
  question: string
  answer: string
}

const shared = {
  security: {
    question: 'How is our financial data kept secure?',
    answer:
      'All work is done inside your own cloud accounting system and file storage — we never move your ledger onto our infrastructure. Access is granted per user with least-privilege roles and two-factor authentication, staff sign NDAs, and we support UK GDPR, EU GDPR (DSGVO) and US data-handling requirements. Access can be revoked instantly at any time.',
  },
  timezone: {
    question: 'Do you work in UK, US or European business hours?',
    answer:
      'Yes. Our team in Karachi (UTC+5) overlaps the full UK and German working day and the US East Coast morning. For US Pacific clients we schedule a dedicated afternoon window. Every client has a named lead who answers within one business day, usually within hours.',
  },
  onboarding: {
    question: 'How long does onboarding take?',
    answer:
      'Typically 2 weeks. Week one covers system access, a review of your chart of accounts and open items, and agreeing a monthly calendar. Week two runs a parallel close so you can compare our output against your previous process before we take over fully.',
  },
}

export const serviceFaqs: Record<string, Faq[]> = {
  bookkeeping: [
    {
      question: 'How much does outsourced bookkeeping cost in the UK, US or Germany?',
      answer:
        'FinAccSolutions bookkeeping typically costs 60–80% less than an equivalent in-house hire. For reference, a full-time bookkeeper costs roughly £30,000–£40,000 in the UK, $50,000–$65,000 in the US and €40,000–€55,000 in Germany before employer costs. Our engagements are priced as a fixed monthly fee based on transaction volume and entity count, so there are no hourly surprises.',
    },
    {
      question: 'Which accounting software do you work in?',
      answer:
        'Xero and QuickBooks Online for UK and US clients, Sage for UK businesses, and DATEV-compatible exports for German Steuerberater. We also work in NetSuite and Microsoft Dynamics 365 Business Central for larger groups. We work inside your existing system — no migration is required.',
    },
    {
      question: 'Can you prepare books to UK GAAP (FRS 102), US GAAP or German HGB?',
      answer:
        'Yes. Our bookkeepers are IFRS and US GAAP certified and trained on FRS 102 for UK SMEs. For German clients we maintain the books to HGB requirements and produce DATEV-ready exports so your local Steuerberater can file the Jahresabschluss and tax returns without rework.',
    },
    {
      question: 'Will you liaise with our accountant, HMRC, the IRS or our Steuerberater?',
      answer:
        'We prepare the year-end pack, reconciliations and supporting schedules your external accountant or Steuerberater needs and answer their queries directly. Statutory filings with HMRC, the IRS or the Finanzamt stay with your local licensed accountant; we make sure they receive clean, filing-ready records.',
    },
    shared.timezone,
    shared.security,
    shared.onboarding,
  ],

  payroll: [
    {
      question: 'Can you run payroll for UK, US and German employees?',
      answer:
        'Yes. We process UK PAYE payroll including RTI submissions, auto-enrolment pensions and P60s; US multi-state payroll with federal and state withholding through platforms such as Gusto, ADP and Rippling; and German Lohnabrechnung with Lohnsteuer and Sozialversicherung calculations, working alongside your local payroll provider or Steuerberater where a licensed filer is required.',
    },
    {
      question: 'How do you handle international and multi-currency payroll?',
      answer:
        'We consolidate payroll across countries into one monthly cycle, process each entity in its local currency, and deliver a single group payroll report with FX-translated totals for management reporting. Contractor payments via Deel or Remote are managed in the same cycle.',
    },
    {
      question: 'What does outsourced payroll cost?',
      answer:
        'Pricing is a fixed monthly fee per employee per country, typically 50–70% below the cost of an in-house payroll specialist. A single-country payroll of up to 50 employees is usually live within two weeks.',
    },
    {
      question: 'Who is responsible for payroll compliance errors?',
      answer:
        'We operate a four-eyes review on every payroll run and reconcile to your ledger monthly. Statutory submissions are made under your registered employer accounts, and we document every calculation so any query from HMRC, the IRS or a German authority can be answered with a full audit trail.',
    },
    shared.timezone,
    shared.security,
  ],

  'budgeting-forecasting': [
    {
      question: 'What is the difference between a budget and a rolling forecast?',
      answer:
        'A budget is a fixed annual plan agreed once a year; a rolling forecast is updated every month or quarter and always looks 12 months ahead. We build both: an annual budget for board approval, then a driver-based rolling forecast that is re-cut each month against actuals so you always have a current view of cash and runway.',
    },
    {
      question: 'Do you build the model in Excel or in FP&A software?',
      answer:
        'Both. Most clients start with a three-statement driver-based model in Excel or Google Sheets. For groups that need it, we build and maintain models in LucaNet, SAP BPC, Anaplan or Planful and connect them to your ledger so actuals flow through automatically.',
    },
    {
      question: 'Can you produce board packs and investor reporting?',
      answer:
        'Yes. We deliver a monthly board pack with P&L, balance sheet, cash flow, KPI dashboard and variance commentary within 5–7 working days of month-end, in the format your UK, US or German board expects.',
    },
    {
      question: 'How much does outsourced FP&A cost compared to hiring an analyst?',
      answer:
        'A fractional FP&A engagement typically costs 60–75% less than a full-time financial analyst — around £45,000–£60,000 in the UK, $80,000–$110,000 in the US or €55,000–€75,000 in Germany. You get a Big 4-trained analyst for the hours you actually need.',
    },
    shared.timezone,
    shared.security,
  ],

  'fundraising-support': [
    {
      question: 'What financial documents do investors expect for a seed or Series A round?',
      answer:
        'A three-statement financial model (P&L, balance sheet, cash flow) with 3–5 years of projections, a clear revenue driver build, historical monthly management accounts, a cap table, and a use-of-funds analysis. UK investors additionally look for SEIS/EIS eligibility; US investors expect a 409A-consistent valuation; German VCs typically want HGB-reconciled historicals.',
    },
    {
      question: 'How long does it take to build an investor-ready financial model?',
      answer:
        'A complete three-statement model with scenarios and sensitivity tables typically takes 2–3 weeks from kick-off, including two review rounds with the founders. Existing models can usually be upgraded to investor-ready standard in about a week.',
    },
    {
      question: 'Do you support the data room and investor due diligence?',
      answer:
        'Yes. We prepare and organise the financial section of your data room, reconcile historicals to bank statements, and answer investor and diligence-provider questions throughout the process until the round closes.',
    },
    {
      question: 'Can you produce a DCF or comparable-company valuation?',
      answer:
        'Yes. Our analysts are Big 4-trained in valuation and prepare DCF and comparable-company analyses in the format expected by UK, US and European investors. These are analytical support materials; they are not regulated investment advice.',
    },
    shared.security,
  ],

  'group-consolidation': [
    {
      question: 'What is IFRS 10 group consolidation?',
      answer:
        'IFRS 10 sets out when a parent company controls another entity and must combine its subsidiaries into a single set of consolidated financial statements. Consolidation eliminates intercompany transactions and balances, translates foreign subsidiaries into the group currency, and accounts for non-controlling interests and goodwill. It applies to groups reporting under IFRS, which includes listed and many private groups in the UK, EU and Middle East.',
    },
    {
      question: 'How fast can you close and consolidate a multi-entity group?',
      answer:
        'We deliver IFRS-compliant consolidated financial statements in 5–7 working days after all entities submit their trial balances. Clients moving from a spreadsheet-based process regularly cut their consolidation cycle by 70–78%.',
    },
    {
      question: 'Do you consolidate under UK GAAP (FRS 102), US GAAP or German HGB as well as IFRS?',
      answer:
        'Yes. We prepare consolidations under IFRS 10, FRS 102 Section 9 for UK groups, ASC 810 for US GAAP reporters, and §290 ff. HGB for German Konzernabschluss, and we handle groups that report under one framework locally and another at parent level.',
    },
    {
      question: 'Which consolidation software do you use?',
      answer:
        'LucaNet (widely used by German and European groups), SAP BPC, OneStream, Oracle FCCS and NetSuite multi-book. For smaller groups we build a controlled Excel consolidation model with full elimination and FX workings.',
    },
    {
      question: 'How do you handle intercompany eliminations and foreign currency translation?',
      answer:
        'We run a monthly intercompany reconciliation across all entities, agree mismatches before close, and apply IAS 21 translation using closing-rate for balance sheets and average-rate for income statements, posting the resulting CTA to reserves with a full audit trail.',
    },
    shared.security,
    shared.timezone,
  ],

  'tax-compliance': [
    {
      question: 'Do you file our tax returns?',
      answer:
        'We prepare the records, workings and reconciliations behind your returns — VAT/MTD for the UK, sales tax and federal/state corporate tax workings for the US, and Umsatzsteuer-Voranmeldung and Körperschaftsteuer workings for Germany. Statutory filing and sign-off remain with your locally licensed accountant, CPA or Steuerberater, and we work directly with them.',
    },
    {
      question: 'Can you keep us compliant with UK Making Tax Digital (MTD)?',
      answer:
        'Yes. We maintain digital VAT records in MTD-compatible software (Xero, QuickBooks, Sage), prepare each quarterly VAT return with a reconciliation to the ledger, and keep the digital links HMRC requires.',
    },
    {
      question: 'Can you prepare tax provisions for year-end accounts?',
      answer:
        'Yes. We prepare current and deferred tax provision workings under IAS 12, FRS 102 or ASC 740, including reconciliations to the statutory rate, ready for your auditors.',
    },
    {
      question: 'What happens if we receive a query from HMRC, the IRS or the Finanzamt?',
      answer:
        'We pull together the supporting records, reconciliations and correspondence history and draft the response for your local adviser to review and submit, so queries are answered quickly and with complete documentation.',
    },
    shared.security,
  ],
}
