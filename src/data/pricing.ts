import type { Faq, PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Growth",
    price: "$2,500",
    priceNote: "/month + % of ad spend",
    description:
      "For emerging brands ready to build a profitable advertising foundation.",
    features: [
      "Sponsored Products & Brands management",
      "Quarterly listing optimization (up to 10 ASINs)",
      "Bi-weekly performance reporting",
      "Dedicated PPC specialist",
    ],
    cta: "Start with Growth",
  },
  {
    name: "Scale",
    price: "$5,000",
    priceNote: "/month + % of ad spend",
    description: "Full-funnel growth for established brands scaling across channels.",
    features: [
      "Everything in Growth",
      "Sponsored Display & DSP strategy",
      "Ongoing listing & A+ Content optimization",
      "Account management & inventory planning",
      "Weekly reporting + monthly strategy calls",
    ],
    cta: "Start with Scale",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "tailored engagement",
    description: "For category leaders, multi-brand portfolios and global expansion.",
    features: [
      "Everything in Scale",
      "Multi-marketplace & international expansion",
      "Amazon Marketing Cloud analytics",
      "Dedicated creative team",
      "Executive quarterly business reviews",
    ],
    cta: "Talk to Sales",
  },
];

export const pricingFaqs: Faq[] = [
  {
    question: "How is the percentage of ad spend calculated?",
    answer:
      "Our variable fee is a tiered percentage of monthly managed ad spend, which decreases as spend grows. We'll share exact numbers after your audit.",
  },
  {
    question: "Are there setup fees?",
    answer:
      "A one-time onboarding fee covers your audit, account restructure and 90-day roadmap. It's waived for annual agreements.",
  },
  {
    question: "Can we change plans later?",
    answer: "Yes. You can move between plans as your business and goals evolve.",
  },
];
