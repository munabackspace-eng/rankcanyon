/**
 * Site-wide constants. Replace placeholder values once branding and
 * contact details are finalized.
 */
export const SITE = {
  name: "RankCanyon",
  legalName: "RankCanyon LLC",
  tagline: "Full-funnel Amazon growth agency",
  description:
    "RankCanyon is a full-service Amazon growth agency. We scale brands profitably with PPC, DSP, listing optimization, creative and end-to-end account management.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rankcanyon.com").replace(
    /\/$/,
    "",
  ),
  locale: "en_US",
  twitterHandle: "@rankcanyon",
  /** Bump when site-wide content changes; used by sitemap.xml. */
  lastUpdated: "2026-11-12",
  /** Static year avoids request-time `new Date()` and keeps pages fully prerendered. */
  copyrightYear: 2026,
} as const;

export const CONTACT = {
  email: "hello@rankcanyon.com",
  phone: "+1 (555) 014-2290",
  phoneHref: "tel:+15550142290",
  address: {
    street: "1200 Canyon Ridge Blvd, Suite 400",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
  },
  hours: "Mon–Fri, 9:00am–6:00pm CT",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/rankcanyon",
  x: "https://x.com/rankcanyon",
  youtube: "https://www.youtube.com/@rankcanyon",
  instagram: "https://www.instagram.com/rankcanyon",
  facebook: "https://www.facebook.com/rankcanyon",
  tiktok: "https://www.tiktok.com/@rankcanyon",
} as const;

export const PRIMARY_CTA = {
  label: "Get a Free Audit",
  href: "/contact",
} as const;
