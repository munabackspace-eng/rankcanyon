import type { Faq } from "@/types";

export const organicRankingPageData = {
  slug: "organic-ranking-sales-growth",
  seoTitle: "Organic Ranking & Sales Growth",
  seoDescription:
    "RankCanyon improves your organic rankings on Amazon, Walmart, eBay and Etsy with keyword strategy, listing SEO and weekly rank tracking.",

  hero: {
    titleLead: "Marketplace SEO That Moves Your Products Up",
    titleAccent: "and Keeps Them There",
    subtitle:
      "RankCanyon improves your organic rankings on Amazon, Walmart, eBay and Etsy with keyword strategy, listing SEO and weekly rank tracking. You get more sales you don't pay for per click, all within marketplace rules.",
    primaryCta: {
      label: "Get a Free Ranking Audit →",
      href: "/contact",
    },
    secondaryCta: {
      label: "See What's Included",
      href: "#organic-includes",
    },
    trustedLabel: "TRUSTED BY E-COMMERCE BRANDS ACROSS EVERY MARKETPLACE",
    supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Etsy"],
  },

  whatAreSeoSection: {
    titleLead: "What Are Amazon SEO and",
    titleAccent: "Organic Ranking Services?",
    paragraphs: [
      "Amazon SEO is the work of getting your products to show up higher in Amazon's search results without paying for each click. Walmart, eBay and Etsy work the same way. Each marketplace's search engine decides which products to show using two things: how relevant your listing is to the search, and how well it sells once shoppers see it.",
      "Organic ranking services improve both. We find the keywords your buyers actually search for, build them into your listings, and fix what stops shoppers from buying. Then we track your keyword positions every week and keep adjusting, so rankings keep climbing and stay up after you get there.",
    ],
  },

  marketplacesSection: {
    titleLead: "Organic Ranking for Every",
    titleAccent: "Marketplace You Sell On",
    cards: [
      {
        id: "amazon-seo",
        platform: "Amazon",
        title: "Amazon SEO",
        description:
          "Keyword research, indexing checks, backend search terms and conversion fixes that lift your rankings in Amazon's search results.",
        href: "/contact?service=amazon-seo",
      },
      {
        id: "walmart-seo",
        platform: "Walmart",
        title: "Walmart SEO",
        description:
          "Listing quality score, item attributes and keyword-rich content built for how Walmart's search ranks products.",
        href: "/contact?service=walmart-seo",
      },
      {
        id: "ebay-seo",
        platform: "eBay",
        title: "eBay SEO",
        description:
          "Titles, item specifics and category choices that help your listings rank in eBay's Best Match results.",
        href: "/contact?service=ebay-seo",
      },
      {
        id: "etsy-seo",
        platform: "Etsy",
        title: "Etsy SEO",
        description:
          "Tags, titles, attributes and listing quality that help your products show up in Etsy search.",
        href: "/contact?service=etsy-seo",
      },
    ],
  },

  includedSection: {
    titleLead: "What Our Organic Ranking",
    titleAccent: "Service Includes",
    cards: [
      {
        title: "Keyword Research & Mapping",
        description:
          "We find the high-intent searches your buyers use and assign each one to the right product and listing field.",
        iconKey: "search",
      },
      {
        title: "Competitor Keyword Analysis",
        description:
          "We see which keywords drive your top competitors' sales, and where they're ranking and you aren't.",
        iconKey: "radar",
      },
      {
        title: "Organic Ranking Analysis",
        description:
          "A clear picture of where every product ranks today, which keywords it's indexed for, and where the quickest wins are.",
        iconKey: "barChart",
      },
      {
        title: "Listing SEO Improvements",
        description:
          "Titles, bullets, descriptions, backend terms and attributes updated to cover your target keywords naturally.",
        iconKey: "fileText",
      },
      {
        title: "Keyword Position Tracking",
        description:
          "Weekly tracking of your rankings for every target keyword, so we catch gains and drops as they happen.",
        iconKey: "trending",
      },
      {
        title: "Search Visibility Monitoring",
        description:
          "We track how often your products appear in search, compared with your competitors, as your rankings grow.",
        iconKey: "eye",
      },
      {
        title: "Conversion Rate Analysis",
        description:
          "We find the images, pricing, reviews or content that stop shoppers from buying, because sales drive rankings.",
        iconKey: "sparkles",
      },
      {
        title: "Organic Sales Reporting & Strategy",
        description:
          "A monthly report on rankings, visibility and organic sales, plus the next month's keyword and listing plan.",
        iconKey: "compass",
      },
    ] as const,
  },

  processSection: {
    titleLead: "Our 5-Step Organic",
    titleAccent: "Ranking Process",
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Check current rankings, indexed keywords, listing quality and conversion rate for every product.",
      },
      {
        number: "02",
        title: "Research",
        description:
          "Find and rank the keywords that matter most by search volume, relevance and buying intent.",
      },
      {
        number: "03",
        title: "Optimize",
        description:
          "Build target keywords into titles, bullets, backend terms and attributes, and fix conversion blockers.",
      },
      {
        number: "04",
        title: "Track",
        description:
          "Monitor keyword positions every week and spot gains, drops and competitor moves early.",
      },
      {
        number: "05",
        title: "Grow",
        description:
          "Expand into new keywords, protect top positions and plan the next month's priorities.",
      },
    ],
    statBand: [
      {
        metric: "Rankings",
        description: "Keyword positions tracked weekly for every target term.",
      },
      {
        metric: "Visibility",
        description:
          "How often your products show up in search, compared with competitors.",
      },
      {
        metric: "Conversion",
        description: "The share of visitors who buy, because sales drive rank.",
      },
      {
        metric: "Organic Sales",
        description: "The sales you earn without paying for each click.",
      },
    ],
  },

  lastingRankSection: {
    titleLead: "Rankings Built the Right Way,",
    titleAccent: "So They Last",
    paragraphs: [
      "Shortcuts like paid reviews, rebate schemes and search-find-buy campaigns can push a product up for a few weeks. They also break marketplace rules and can get listings removed or accounts suspended. We don't use them.",
      "Instead, we work on what marketplace search actually rewards: strong keyword relevance and real sales performance. We build the right keywords into your listings, improve your click-through and conversion rates, and work with our PPC team so ad-driven sales support organic rank. Rankings built this way are more likely to hold when ad spend comes down.",
    ],
    checklist: [
      "Keywords chosen by buying intent, not just search volume",
      "Listing and conversion fixes made together, because both drive rank",
      "PPC and SEO teams aligned on the same target keywords",
      "100% compliant with Amazon, Walmart, eBay and Etsy policies",
    ],
  },

  pricingSection: {
    titleLead: "Organic Ranking",
    titleAccent: "Pricing",
    plans: [
      {
        badge: "KEYWORD STRATEGY",
        price: "From $250/product (one-time)",
        bestFor: "Best for: new launches and products that need a clear keyword plan",
        features: [
          "Keyword research and mapping",
          "Competitor keyword analysis",
          "Current ranking and indexing check",
          "Page-one keyword strategy for your top terms",
          "Listing keyword recommendations",
          "Delivered as a written plan your team can use",
        ],
        ctaLabel: "Get Started →",
        ctaHref: "/contact?plan=keyword-strategy",
        featured: false,
      },
      {
        badge: "AMAZON ORGANIC RANKING · ★ MOST POPULAR",
        price: "From $500/month",
        bestFor:
          "Best for: Amazon brands that want rankings managed and grown every month",
        features: [
          "Everything in Keyword Strategy",
          "Listing SEO updates every month",
          "Weekly keyword position tracking",
          "Search visibility monitoring",
          "Conversion rate analysis and fixes",
          "PPC and SEO keyword alignment",
          "Monthly organic sales report + strategy",
        ],
        ctaLabel: "Get Started →",
        ctaHref: "/contact?plan=amazon-organic-ranking",
        featured: true,
      },
      {
        badge: "MULTI-MARKETPLACE RANKING",
        price: "From $1,000/month",
        bestFor:
          "Best for: brands selling on two or more of Amazon, Walmart, eBay and Etsy",
        features: [
          "Everything in Amazon Organic Ranking",
          "SEO for Walmart, eBay and Etsy",
          "Keywords mapped across every marketplace",
          "One combined ranking dashboard",
          "Monthly strategy call",
        ],
        ctaLabel: "Talk to Our Team →",
        ctaHref: "/contact?plan=multi-marketplace-ranking",
        featured: false,
      },
    ],
  },

  whyTrustSection: {
    titleLead: "Why Brands Trust RankCanyon",
    titleAccent: "With Their Rankings",
    cards: [
      {
        title: "Compliant by Design",
        description:
          "No paid reviews, rebate schemes or search-find-buy tricks. Every tactic we use follows marketplace policy, so our work never puts your account at risk.",
        iconKey: "shield",
      },
      {
        title: "Keywords Chosen for Sales",
        description:
          "We pick keywords by buying intent and conversion potential, not just search volume, so rankings turn into revenue.",
        iconKey: "target",
      },
      {
        title: "SEO and PPC Work Together",
        description:
          "Our ranking and advertising teams share keyword data, so ads support the terms you want to rank for organically.",
        iconKey: "layers",
      },
      {
        title: "Weekly Rank Tracking",
        description:
          "Every target keyword is tracked every week. You see exactly where you're gaining and where to act next.",
        iconKey: "trending",
      },
      {
        title: "Listings, Images and A+ In-House",
        description:
          "When conversion holds a ranking back, our creative team fixes the images and A+ Content. You don't need another agency.",
        iconKey: "sparkles",
      },
      {
        title: "Every Marketplace, One Strategy",
        description:
          "Amazon, Walmart, eBay and Etsy SEO managed together, with one report and one point of contact.",
        iconKey: "globe",
      },
    ] as const,
  },

  faqSection: {
    headingLead: "Amazon SEO & Organic Ranking: Your Questions",
    headingAccent: "Answered",
    faqs: [
      {
        question: "What are Amazon SEO services?",
        answer:
          "Amazon SEO services improve how high your products rank in Amazon's search results without paying per click. They cover keyword research, listing optimization, backend search terms, conversion improvements and rank tracking.",
      },
      {
        question: "How does Amazon decide which products rank first?",
        answer:
          "Amazon's search ranks products by relevance and performance. Relevance comes from the keywords in your title, bullets, backend terms and attributes. Performance comes from click-through rate, conversion rate and sales. Strong rankings need both.",
      },
      {
        question: "How long does it take to improve organic rankings?",
        answer:
          "Indexing fixes and listing updates can show movement within a few weeks. Steady gains on competitive keywords usually take 2–3 months, depending on your category, reviews and sales history.",
      },
      {
        question: "Can you guarantee first-page rankings?",
        answer:
          "No. No honest agency can guarantee a specific position, because rankings depend on competition and marketplace algorithms that change constantly. We guarantee the work: a clear keyword strategy, compliant optimization and weekly tracking.",
      },
      {
        question: "Do you use rebates, giveaways or search-find-buy to boost rankings?",
        answer:
          "No. Paid or incentivized reviews and manipulated purchases break marketplace policies and can get listings removed or accounts suspended. We only use compliant methods.",
      },
      {
        question: "What's the difference between this and listing optimization?",
        answer:
          "Listing optimization is a one-time rewrite of your titles, bullets, descriptions and images. Organic ranking management is ongoing: we track keyword positions, keep updating listings, and adjust strategy every month to grow and protect rankings.",
      },
      {
        question: "Does PPC help organic ranking?",
        answer:
          "Yes. Ad-driven sales count toward your product's sales performance, which supports organic rank. We align PPC and SEO on the same target keywords so both work together.",
      },
      {
        question: "Do you do SEO for Walmart, eBay and Etsy?",
        answer:
          "Yes. Each marketplace's search works differently. We optimize Walmart listing quality and attributes, eBay titles and item specifics, and Etsy tags and titles, each by its own rules.",
      },
      {
        question: "How do you track keyword rankings?",
        answer:
          "We track your positions for every target keyword every week using rank tracking tools, and report changes alongside organic sales and conversion rate.",
      },
      {
        question: "How much do Amazon SEO services cost?",
        answer:
          "A one-time keyword strategy starts at $250 per product. Ongoing Amazon organic ranking management starts at $500/month, and multi-marketplace ranking starts at $1,000/month.",
      },
      {
        question: "Why did my product drop in rankings?",
        answer:
          "Common causes are lower sales velocity, a drop in conversion rate, lost keyword indexing, stockouts, new competitors, or listing changes. Our free audit pinpoints the cause for your product.",
      },
      {
        question: "Can you help a new product rank?",
        answer:
          "Yes. We build the keyword plan before launch, optimize the listing, and coordinate launch PPC and Amazon Vine so early sales and reviews support ranking. All of this stays within policy.",
      },
    ] satisfies Faq[],
  },

  closingCtas: {
    callout: {
      titleLead: "Ranking Is Easy to Lose.",
      titleAccent: "Hard to Win Back.",
      subtext:
        "We build rankings on the right keywords and real sales, then track them every week so they don't quietly slip away.",
      buttonLabel: "Get My Free Ranking Audit",
      buttonHref: "/contact",
    },
    finalConsultation: {
      eyebrow: "FREE CONSULTATION",
      titleLead: "Ready to Turn Search Traffic",
      titleAccent: "Into Organic Sales?",
      buttonLabel: "Book My Free Consultation →",
      buttonHref: "/contact",
    },
  },
} as const;
