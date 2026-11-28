import type { FooterGroup, NavItem, NavLink } from "@/types";
import { services } from "@/data/services";

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.summary,
    })),
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: FooterGroup[] = [
  {
    title: "Services",
    links: [
      {
        label: "Marketplace Account Management",
        href: "/services/marketplace-account-management",
      },
      {
        label: "Marketplace PPC & Advertising Management",
        href: "/services/marketplace-ppc-advertising-management",
      },
      { label: "DSP Management", href: "#dsp-management" },
      {
        label: "Organic Ranking & Sales Growth",
        href: "/services/organic-ranking-sales-growth",
      },
      {
        label: "Product Creative",
        href: "/services/product-image-creative-design",
      },
      {
        label: "A+ & Brand Stores",
        href: "/services/a-plus-content-brand-store",
      },
      {
        label: "Video Production",
        href: "/services/product-video-production",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "#press" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Guides", href: "#guides" },
      { label: "Playbooks", href: "#playbooks" },
      { label: "Podcasts", href: "#podcasts" },
      { label: "Creatives", href: "#creatives" },
      { label: "TACoS Calculator", href: "#tacos-calculator" },
      { label: "Free Audit", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "1P Vendor Central", href: "#vendor-central" },
      { label: "3P Seller Central", href: "#seller-central" },
      { label: "Walmart Marketplace", href: "#walmart-marketplace" },
      { label: "TikTok Shop", href: "#tiktok-shop" },
      { label: "Target Plus", href: "#target-plus" },
      { label: "Brand Launch", href: "#brand-launch" },
      { label: "Global Expansion", href: "#global-expansion" },
    ],
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "#security" },
  { label: "Cookies", href: "#cookies" },
  { label: "Licenses", href: "#licenses" },
];
