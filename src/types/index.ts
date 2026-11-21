import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export type FooterGroup = {
  title: string;
  links: NavLink[];
};

export type Metric = {
  category?: string;
  value: string;
  label: string;
  description?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  /** One-liner used on cards. */
  summary: string;
  /** SEO meta description for the detail page. */
  metaDescription: string;
  /** Intro paragraph(s) for the detail page. */
  overview: string[];
  features: { title: string; description: string }[];
  outcomes: Metric[];
  deliverables: string[];
  faqs: Faq[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  services: string[];
  highlight: Metric;
  metrics: Metric[];
  image?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar?: string;
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Short uppercase pill label shown on insight cards (e.g. "BLOG", "RESEARCH"). */
  badge?: string;
  publishedAt: string; // ISO YYYY-MM-DD
  updatedAt?: string;
  readingTime: string;
  author: BlogAuthor;
  /** Optional cover in /public/images/blog — rendered with next/image when present. */
  coverImage?: string;
  featured?: boolean;
  content: BlogBlock[];
};

export type PricingTier = {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};
