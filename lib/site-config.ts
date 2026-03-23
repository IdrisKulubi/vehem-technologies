/**
 * Central copy and contact details for VEHEM TECHNOLOGIES LIMITED.
 * Replace `phone` with your published business line for D&B / storefront verification.
 */
export const site = {
  legalName: "VEHEM TECHNOLOGIES LIMITED",
  /** All-caps wordmark for the header (matches certificate naming). */
  brandWordmark: "VEHEM TECHNOLOGIES",
  shortName: "Vehem Technologies",
  tagline: "Software Development and AI Solutions",
  description:
    "Custom software and intelligence systems. We architect sophisticated digital environments through advanced engineering.",
  /** Homepage hero supporting line (aligned with Stitch / brand mock). */
  heroSubtext:
    "Custom Software Solutions & Intelligence Systems. Architecting sophisticated digital environments through advanced engineering.",
  email: "idris@vehemtechnologies.com",
  /** Update to your real listed telephone number. */
  phone: { display: "+254 712 345 678", tel: "+254712345678" },
  address: {
    line1: "Nyayo View Suites",
    line2: "Kisauni Road, Nairobi West",
    city: "Nairobi",
    country: "Kenya",
    full: "Nyayo View Suites, Kisauni Road, Nairobi West, Nairobi, Kenya",
  },
  hours: "Monday–Friday, 9:00 AM – 5:00 PM (East Africa Time, EAT)",
  /** Shorter line for homepage trust section (matches Stitch mock). */
  hoursShort: "Mon–Fri, 9 AM – 5 PM (EAT)",
  domain: "vehemtechnologies.com",
  trust: {
    title: "The Foundation of Trust",
    body: "Vehem Technologies Limited operates with radical transparency. We believe our physical presence in Nairobi's burgeoning tech corridor is the cornerstone of our regional engineering authority.",
    impactTitle: "LOCAL IMPACT. GLOBAL STANDARDS.",
    impactBody: "Supporting the next generation of African digital architecture.",
  },
  founder: {
    name: "Idris Kulubi Mulesi",
    role: "Founder",
  },
  products: [
    {
      slug: "trendscout-ai",
      name: "TrendScout AI",
      tag: "Fashion discovery",
      description:
        "AI-powered fashion discovery: real-time intelligence mapping trends and visual signals across the global fashion landscape.",
    },
    {
      slug: "strathspace",
      name: "Strathspace",
      tag: "Campus community",
      description:
        "Campus community and networking: a unified space for academic connection, collaboration, and student life.",
    },
    {
      slug: "continueml",
      name: "Continueml",
      tag: "Persistent AI memory",
      description:
        "An AI platform with persistent memory for generative workflows—continuous learning without catastrophic forgetting.",
    },
  ],
} as const

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const

/** Primary header links (matches marketing mock: Projects, not “Products”). */
export const headerNav = [
  { href: "/products", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export const footerLegal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const
