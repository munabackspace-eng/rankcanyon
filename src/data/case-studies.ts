import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "kitchenware-tacos-turnaround",
    client: "Kindred Kitchen",
    category: "Home & Kitchen",
    headline: "Cutting TACoS by 39% while growing revenue 62%",
    summary:
      "A premium cookware brand was scaling ad spend faster than sales. We restructured PPC around margin and intent.",
    challenge:
      "Ad spend had doubled year over year, but organic share was flat and TACoS had climbed to 18%, eroding profitability.",
    solution:
      "We rebuilt campaign architecture by intent and margin tier, introduced dayparting and refreshed the top 20 listings for conversion.",
    services: ["Amazon PPC", "Listing Optimization"],
    highlight: { value: "-39%", label: "TACoS" },
    metrics: [
      { value: "+62%", label: "Total revenue" },
      { value: "4.9x", label: "ROAS" },
      { value: "+44%", label: "Organic sales" },
    ],
  },
  {
    slug: "outdoor-category-leadership",
    client: "Atlas Outdoor",
    category: "Sports & Outdoors",
    headline: "From challenger to #1 in subcategory before Prime Day",
    summary:
      "A fast-growing outdoor gear brand needed to win share from entrenched incumbents ahead of peak season.",
    challenge:
      "Competitors dominated branded and category search, and the brand lacked upper-funnel awareness on Amazon.",
    solution:
      "A full-funnel program combining DSP conquesting, Sponsored Brands video and a Prime Day deal strategy.",
    services: ["Amazon DSP", "Amazon PPC", "Creative"],
    highlight: { value: "#1", label: "Subcategory rank" },
    metrics: [
      { value: "+138%", label: "Prime Day sales" },
      { value: "+71%", label: "New-to-brand" },
      { value: "3.4x", label: "DSP ROAS" },
    ],
  },
  {
    slug: "beauty-eu-expansion",
    client: "Glow Theory",
    category: "Beauty & Personal Care",
    headline: "Launching in five EU marketplaces in under six months",
    summary:
      "A US skincare brand wanted international growth without building an in-house European team.",
    challenge:
      "Complex regulatory requirements, language localization and zero brand awareness in new regions.",
    solution:
      "We managed compliance, native-language listings, launch advertising and inventory planning across DE, FR, IT, ES and the UK.",
    services: ["Marketplace Expansion", "Account Management"],
    highlight: { value: "34%", label: "Revenue from EU" },
    metrics: [
      { value: "5", label: "New marketplaces" },
      { value: "+2.1x", label: "Global revenue" },
      { value: "92 days", label: "To profitability" },
    ],
  },
  {
    slug: "sleep-conversion-lift",
    client: "Solace Sleep",
    category: "Home & Bedding",
    headline: "31% conversion lift from a creative overhaul",
    summary:
      "Strong traffic, weak conversion: a sleep brand was losing shoppers on the detail page.",
    challenge:
      "Generic imagery and text-heavy A+ Content failed to communicate key differentiators on mobile.",
    solution:
      "New image galleries, Premium A+ Content and a redesigned Brand Store — validated with A/B testing.",
    services: ["Creative & A+ Content", "Listing Optimization"],
    highlight: { value: "+31%", label: "Conversion rate" },
    metrics: [
      { value: "+24%", label: "Click-through rate" },
      { value: "+47%", label: "Revenue" },
      { value: "-18%", label: "ACoS" },
    ],
  },
];
