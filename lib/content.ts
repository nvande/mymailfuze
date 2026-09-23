export const company = {
  name: "MailFuze",
  phone: "262-216-6300",
  phoneHref: "tel:2622166300",
  email: "info@efformance.com",
  emailHref: "mailto:info@efformance.com",
  tagline: "Skip the Post Office. Go straight to the bank.",
  parent: "Efformance",
  appUrl: "https://app.mymailfuze.com",
};

export const nav = {
  product: [
    { href: "/how-it-works/", label: "How it works" },
    { href: "/features/", label: "Features" },
    { href: "/mail-types/", label: "Mail types" },
  ],
  solutions: [
    { href: "/rent-manager/", label: "Rent Manager" },
    { href: "/industries/", label: "Industries" },
    { href: "/integrations/", label: "Integrations" },
  ],
  company: [
    { href: "/plans/", label: "Plans" },
    { href: "/demo/", label: "Schedule a demo" },
    { href: "/contact/", label: "Contact" },
  ],
  legal: [
    { href: "/privacy/", label: "Privacy" },
    { href: "/terms/", label: "Terms" },
  ],
};

export const mailTypes = [
  {
    slug: "certified",
    name: "USPS Certified Mail®",
    short: "Certified",
    eyebrow: "Full tracking",
    summary:
      "The gold standard when you need a court-ready paper trail from acceptance through delivery.",
    description:
      "Certified Mail is the right choice when a notice has legal weight. MailFuze generates USPS tracking, optional Electronic Return Receipt, and court-friendly proof documents—without a trip to the counter.",
    points: [
      "End-to-end USPS tracking from mailing through delivery",
      "Generate Electronic Return Receipt",
      "Court-friendly proof of mailing and detailed tracking documents",
      "Ideal for Pay or Quit, adverse action, and legal notices",
    ],
  },
  {
    slug: "first-class",
    name: "First-Class Mail",
    short: "First-Class",
    eyebrow: "Everyday volume",
    summary:
      "Send statements, newsletters, and routine correspondence at First-Class speed—from your desk.",
    description:
      "First-Class is how most businesses should send the mail they send every week. Upload a PDF or pull a Rent Manager template, preview, estimate cost, and drop hundreds of pieces in minutes.",
    points: [
      "Fast, economical delivery for everyday correspondence",
      "Upload a static PDF or generate letters from templates",
      "Cost estimate and document preview before you send",
      "Optional Confirmation of Mailing when you need proof",
    ],
  },
  {
    slug: "priority",
    name: "Priority Mail®",
    short: "Priority",
    eyebrow: "Faster arrival",
    summary:
      "When the letter cannot wait in the regular stream, send Priority Mail without leaving the office.",
    description:
      "Priority Mail is available in the same MailFuze workflow as First-Class and Certified. Choose the service, preview the piece, and send—no equipment, no stamps, no lobby line.",
    points: [
      "Expedited USPS delivery without extra hardware",
      "Same preview, estimate, and history tools as every other mail type",
      "Works for both MailFuze Standard and Rent Manager",
      "Batch send with a detailed history of every drop",
    ],
  },
  {
    slug: "priority-express",
    name: "Priority Mail Express®",
    short: "Priority Express",
    eyebrow: "Overnight urgency",
    summary:
      "Overnight-grade USPS service for the notices that have to arrive now—not next week.",
    description:
      "Priority Mail Express is one click away in MailFuze. Use it for time-sensitive legal, insurance, or tenant communications when the calendar is not on your side.",
    points: [
      "Overnight-style USPS service from the same console",
      "Generate a cost estimate before you commit",
      "Unlimited users can send Express at no extra seat cost",
      "History, tracking, and proof live with the rest of your mail",
    ],
  },
  {
    slug: "confirmation-of-mailing",
    name: "Confirmation of Mailing",
    short: "COM",
    eyebrow: "Proof, not the premium",
    summary:
      "Need to show a piece was mailed—without Certified pricing? Confirmation of Mailing is the cost-effective proof.",
    description:
      "COM pairs First-Class Mail with a court-friendly proof-of-mailing document. It is the practical middle ground when you need evidence the letter went out, not a full Certified trail.",
    points: [
      "Most cost-effective option for proof of mailing",
      "Court-friendly COM documentation generated from USPS",
      "Send First-Class with COM in seconds",
      "Available on both Standard and Rent Manager plans",
    ],
  },
] as const;

export const industries = [
  {
    slug: "property-management",
    name: "Property management",
    summary:
      "Pay or Quit, statements, HOA packets, and adverse action—mailed from Rent Manager and billed back automatically.",
    description:
      "Property managers live in the mail. Notices, statements, and compliance letters used to eat entire staff days. MailFuze for Rent Manager cuts Pay or Quit from two days to a morning, writes the proof into history, and chargebacks the cost to the right property, owner, or tenant.",
    useCases: [
      "Tenant notices and Pay or Quit",
      "Adverse action letters",
      "Tenant statements",
      "HOA documents and newsletters",
    ],
  },
  {
    slug: "law-firms",
    name: "Law firms",
    summary:
      "Certified Mail and Confirmation of Mailing with court-friendly proof, generated before you leave the matter.",
    description:
      "Counsel needs a defensible record, not a postcard from the post office. MailFuze produces USPS tracking, Electronic Return Receipt, and court-friendly proof documents for Certified and COM—then stores the batch history for the file.",
    useCases: [
      "Demand letters and notices",
      "Certified service with tracking",
      "Electronic Return Receipt",
      "Court-ready proof of mailing",
    ],
  },
  {
    slug: "accounting-firms",
    name: "Accounting firms",
    summary:
      "Engagement letters, notices, and year-end packets—batched from a CSV or uploaded PDF, with a cost estimate first.",
    description:
      "Seasonal volume should not mean seasonal chaos. Import recipients from Excel, preview every piece, and send First-Class, Certified, or Priority without leasing equipment or staffing a folding table.",
    useCases: [
      "Client notices and engagement letters",
      "CSV / Excel recipient import",
      "Cost estimates before send",
      "Unlimited users during busy season",
    ],
  },
  {
    slug: "insurance",
    name: "Insurance companies",
    summary:
      "Policy notices, cancellations, and claims correspondence with the proof your compliance team already expects.",
    description:
      "Insurance mail is high-stakes and high-volume. MailFuze lets teams send Certified, First-Class with COM, Priority, and Express from one console, with preview, estimate, and a detailed batch history.",
    useCases: [
      "Cancellation and non-renewal notices",
      "Certified Mail with return receipt",
      "Confirmation of Mailing for proof",
      "Shared history across unlimited users",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Patient statements and notices mailed without a print shop—or a hallway of folding trays.",
    description:
      "Healthcare organizations send a lot of paper and have very little extra time. MailFuze removes the equipment, the lobby trips, and the staff hours, while keeping proof and tracking when a notice must be documented.",
    useCases: [
      "Patient statements and notices",
      "First-Class and Certified options",
      "No mailing equipment to lease",
      "Staff time returned to care, not folding",
    ],
  },
  {
    slug: "self-storage",
    name: "Self-storage",
    summary:
      "Lien notices and account letters that have to go out on time—and prove they did.",
    description:
      "Self-storage operators run on statutory timelines. MailFuze sends Certified and First-Class with COM from the office chair, with court-friendly proof and a batch history you can pull when a lien is challenged.",
    useCases: [
      "Lien and default notices",
      "Certified Mail with tracking",
      "Confirmation of Mailing",
      "Repeatable batches every cycle",
    ],
  },
] as const;

export const featureRows: {
  feature: string;
  standard: boolean;
  rentManager: boolean;
}[] = [
  { feature: "Send USPS First-Class Mail…in seconds", standard: true, rentManager: true },
  { feature: "Send USPS Certified Mail…in seconds", standard: true, rentManager: true },
  { feature: "Send USPS Priority Mail…in seconds", standard: true, rentManager: true },
  { feature: "Send USPS Priority Express Mail…in seconds", standard: true, rentManager: true },
  {
    feature: "Send First-Class Mail with Confirmation of Mailing (COM)…in seconds",
    standard: true,
    rentManager: true,
  },
  {
    feature: "Set up unlimited users in your organization at no additional cost",
    standard: true,
    rentManager: true,
  },
  { feature: "View detailed history of mailing batches", standard: true, rentManager: true },
  {
    feature: "Generate court-friendly documents for proof of mailing (COM) and detailed tracking (Certified) from the USPS",
    standard: true,
    rentManager: true,
  },
  { feature: "Generate USPS Electronic Return Receipt", standard: true, rentManager: true },
  { feature: "Generate a cost estimate before sending", standard: true, rentManager: true },
  { feature: "Preview documents before sending", standard: true, rentManager: true },
  { feature: "Input mail recipient list manually", standard: true, rentManager: true },
  { feature: "Import mail recipient list from a CSV or Excel file", standard: true, rentManager: true },
  {
    feature: "Choose mail recipients directly from Tenants in your Rent Manager database",
    standard: false,
    rentManager: true,
  },
  {
    feature: "Choose mail recipients directly from Tenant Contacts in your Rent Manager database",
    standard: false,
    rentManager: true,
  },
  {
    feature: "Choose mail recipients directly from Prospects in your Rent Manager database",
    standard: false,
    rentManager: true,
  },
  { feature: "Select any address type for your mail recipients", standard: false, rentManager: true },
  {
    feature: "Filter recipients by Property Group, Property, Total Balance, Rent Balance, UDF values",
    standard: false,
    rentManager: true,
  },
  { feature: "Generate letters from Rent Manager letter templates", standard: false, rentManager: true },
  { feature: "Upload a static PDF for mailing", standard: true, rentManager: true },
  { feature: "Automatically create bills for each mailing batch (optional)", standard: false, rentManager: true },
  {
    feature: "Automatically charge back owner/property for each mailing batch",
    standard: false,
    rentManager: true,
  },
  { feature: "Automatically charge tenant for each mailing", standard: false, rentManager: true },
];

export const testimonials = [
  {
    quote:
      "MailFuze has given us back something that we don't have extra of… TIME! Our Pay or Quit process has been reduced from a two full day process down to less than half a day. Our use of MailFuze has even helped us catch issues within our Rent Manager system related to incorrect address formatting, which could also explain the number of returned mailings we received prior to using MailFuze.",
    attribution: "MailFuze customer",
    role: "Property management",
  },
  {
    quote:
      "MailFuze has been a HUGE time- and money-saver for MREM. We can now quickly process all types of mail (First Class, Certified, etc.) and through the seamless integration with Rent Manager, the cost of each mailing is automatically billed to the correct property. Additionally, the letter—along with a Proof of Mailing—is saved in the appropriate history/notes. Our entire team loves MailFuze!",
    attribution: "Jesse McCue",
    role: "Maine Real Estate Management",
  },
];

export const steps = [
  {
    n: "01",
    title: "Choose who gets it",
    body: "Type recipients by hand, import a CSV or Excel file, or—on MailFuze for Rent Manager—pull Tenants, Tenant Contacts, or Prospects straight from the database. Filter by property, balances, or UDFs.",
  },
  {
    n: "02",
    title: "Choose what they get",
    body: "Upload a static PDF or generate letters from Rent Manager templates. Preview every piece and generate a cost estimate before anything leaves the building.",
  },
  {
    n: "03",
    title: "Choose how it travels",
    body: "First-Class, First-Class with Confirmation of Mailing, Certified, Priority, or Priority Express. Add Electronic Return Receipt when the file needs it.",
  },
  {
    n: "04",
    title: "Send. Prove. Charge back.",
    body: "MailFuze prints, stuffs, stamps, and enters the USPS stream. You get tracking, court-friendly proof, batch history—and, for Rent Manager, automatic bills and chargebacks.",
  },
];
