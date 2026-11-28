import type { Faq } from "@/types";

export type PlatformServiceCard = {
  id: string;
  badge: string;
  title: string;
  description: string;
  href: string;
};

export type ServiceInclusionCard = {
  title: string;
  description: string;
  iconKey:
    | "monitor"
    | "shield"
    | "catalog"
    | "boxes"
    | "wrench"
    | "cases"
    | "returns"
    | "chart";
};

export type ServiceProcessItem = {
  number: string;
  title: string;
  description: string;
};

export type MarketplaceComparisonRow = {
  marketplace: string;
  strengths: string;
  managed: string;
};

export type ServicePricingPlan = {
  badge: string;
  price: string;
  bestFor: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

export type WhyChooseCard = {
  title: string;
  description: string;
  iconKey: "globe" | "layers" | "receipt" | "lock" | "sparkles" | "check";
};

export const marketplaceManagementPageData = {
  slug: "marketplace-account-management",
  seoTitle: "Marketplace Account Management Services",
  seoDescription:
    "Complete marketplace account management and daily operational support to help your brand streamline operations, maintain account health, optimize product listings, and grow across leading e-commerce marketplaces.",

  hero: {
    titleLead: "Marketplace Account Management",
    titleAccent: "Services",
    subtitle:
      "Complete marketplace account management and daily operational support to help your brand streamline operations, maintain account health, optimize product listings, and grow across leading e-commerce marketplaces.",
    primaryCta: {
      label: "Get a Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Our Services",
      href: "#leading-platforms",
    },
    supportedLabel: "Supported marketplaces",
    supportedMarketplaces: [
      "Amazon",
      "eBay",
      "Walmart",
      "Shopify",
      "TikTok Shop",
      "Etsy",
      "Target Plus",
    ],
  },

  completeManagement: {
    titleLead: "Complete Marketplace Account Management",
    titleAccent: "for Your Business",
    paragraphs: [
      "Managing multiple e-commerce marketplaces requires consistent monitoring, operational expertise, and strategic planning. RankCanyon provides end-to-end marketplace account management to help sellers manage daily operations, resolve account issues, maintain listing quality, and improve overall marketplace performance.",
      "Our services cover everything from inventory and order management to account health monitoring, listing maintenance, and marketplace growth strategies.",
    ],
  },

  growthStory: {
    titleLead: "Marketplace Account Management That Drives",
    titleAccent: "Profitable E-Commerce Growth",
    body: "Managing a seller account across multiple marketplaces requires more than keeping products listed and orders moving. From Amazon and eBay to Walmart, Shopify, Etsy, and TikTok Shop, every platform comes with its own operational requirements, account health policies, inventory processes, and performance challenges. That's where RankCanyon comes in. Our marketplace account management services provide comprehensive day-to-day operational support to keep your stores organized, compliant, and running efficiently. From product listings and catalog management to inventory monitoring, order operations, account health, and marketplace growth strategies, we handle the complexities of managing your marketplace accounts so you can focus on growing your brand and business.",
  },

  platformsSection: {
    titleLead: "Marketplace Account Management",
    titleAccent: "Across Leading Platforms",
    cards: [
      {
        id: "amazon",
        badge: "AMZ",
        title: "Amazon Account Management",
        description:
          "Complete Amazon Seller Central management, including account health, catalog management, inventory monitoring, order operations, and listing maintenance.",
        href: "/contact?service=amazon-account-management",
      },
      {
        id: "ebay",
        badge: "EBAY",
        title: "eBay Account Management",
        description:
          "Daily eBay store operations, listing management, order processing, inventory monitoring, and seller performance management.",
        href: "/contact?service=ebay-account-management",
      },
      {
        id: "walmart",
        badge: "WMT",
        title: "Walmart Marketplace Account Management",
        description:
          "Manage Walmart Marketplace operations, product catalogs, listings, inventory, orders, and account performance.",
        href: "/contact?service=walmart-account-management",
      },
      {
        id: "shopify",
        badge: "SHOP",
        title: "Shopify Store Management",
        description:
          "Manage Shopify store operations, product catalogs, inventory, order workflows, and ongoing store maintenance.",
        href: "/contact?service=shopify-store-management",
      },
      {
        id: "tiktok",
        badge: "TTS",
        title: "TikTok Shop Management",
        description:
          "Daily TikTok Shop operations, product listing management, inventory monitoring, order management, and account support.",
        href: "/contact?service=tiktok-shop-management",
      },
      {
        id: "etsy",
        badge: "ETSY",
        title: "Etsy Account Management",
        description:
          "Etsy shop operations, product listing maintenance, catalog organization, inventory monitoring, and order management.",
        href: "/contact?service=etsy-account-management",
      },
    ] satisfies PlatformServiceCard[],
  },

  consultationBanner: {
    eyebrow: "FREE CONSULTATION",
    titleLead: "Ready to Stop Guessing With",
    titleAccent: "Your Ad Spend?",
    subtext:
      "Book a free call. We'll look at your campaigns, find where budget is leaking, and show you where your next profitable sales can come from.",
    buttonLabel: "Book My Free Consultation →",
    buttonHref: "/contact",
  },

  includedSection: {
    titleLead: "What Our Marketplace Account Management",
    titleAccent: "Service Includes",
    subtext:
      "Every plan is tailored to your catalog and goals, but each one covers the daily work that keeps your accounts healthy and your products selling.",
    cards: [
      {
        title: "Daily Account Monitoring",
        description:
          "Every business day, we check sales, listing status, buyer messages and performance alerts, so problems get caught in hours, not weeks.",
        iconKey: "monitor",
      },
      {
        title: "Account Health",
        description:
          "We track order defect, late shipment and cancellation rates, resolve policy warnings and stop problems before they lead to suspension.",
        iconKey: "shield",
      },
      {
        title: "Listing & Catalog Management",
        description:
          "We create and update titles, bullets, images, variations and pricing, and keep your catalog accurate across every marketplace.",
        iconKey: "catalog",
      },
      {
        title: "Inventory & Orders",
        description:
          "We send stock and restock alerts, monitor FBA and WFS shipments, and track orders from purchase to delivery.",
        iconKey: "boxes",
      },
      {
        title: "Suppressed Listing Fixes",
        description:
          "We find out why a listing is suppressed, inactive or blocked, then fix the missing attributes, image errors or compliance flags behind it.",
        iconKey: "wrench",
      },
      {
        title: "Cases & Disputes",
        description:
          "We open and escalate support cases for catalog errors, lost inventory, A-to-z claims and chargebacks.",
        iconKey: "cases",
      },
      {
        title: "Returns & Refunds",
        description:
          "We review return reasons to spot listing or product problems, and make sure refunds and reimbursements are processed correctly.",
        iconKey: "returns",
      },
      {
        title: "Reporting & Growth Strategy",
        description:
          "You get clear monthly reports on sales, traffic, conversion and account health, plus a plan for what to do next.",
        iconKey: "chart",
      },
    ] satisfies ServiceInclusionCard[],
  },

  processSection: {
    titleLead: "Our Marketplace",
    titleAccent: "Management Process",
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "We check account health, listings, pricing, inventory, ads and reviews end to end.",
      },
      {
        number: "02",
        title: "Fix",
        description:
          "We resolve errors, suppressed listings and health warnings first.",
      },
      {
        number: "03",
        title: "Optimize",
        description:
          "We improve keywords, content, images and pricing to lift rankings and conversion.",
      },
      {
        number: "04",
        title: "Grow & Report",
        description:
          "We scale with ads, deals and new launches, and send a monthly report with clear next steps.",
      },
    ] satisfies ServiceProcessItem[],
  },

  marketplacesTableSection: {
    eyebrow: "CHOOSE THE RIGHT FIT",
    titleLead: "Which Marketplaces",
    titleAccent: "Do We Manage?",
    subtext:
      "We keep your product information, inventory and pricing consistent across every platform you sell on.",
    columns: {
      marketplace: "Marketplace",
      strengths: "Strengths",
      managed: "What we manage",
    },
    rows: [
      {
        marketplace: "Amazon",
        strengths: "Largest reach, FBA and Prime delivery",
        managed: "Seller Central, listings, FBA, ads and Brand Registry",
      },
      {
        marketplace: "Walmart",
        strengths: "Large US audience, fewer competing sellers",
        managed: "Seller Center, item setup, WFS, Walmart Connect ads",
      },
      {
        marketplace: "eBay",
        strengths: "Strong for parts, collectibles and refurbished goods",
        managed: "Listings, store, seller standards and Promoted Listings",
      },
      {
        marketplace: "TikTok Shop",
        strengths: "Discovery through short videos, live streams and creators",
        managed: "Shop setup, listings, orders and affiliate creators",
      },
      {
        marketplace: "Etsy",
        strengths: "Handmade, vintage and personalized products",
        managed: "Listings, shop SEO, orders and Etsy Ads",
      },
      {
        marketplace: "Target Plus",
        strengths: "Invite-only, trusted retail brand",
        managed: "Listings, content and performance standards",
      },
      {
        marketplace: "Your own store",
        strengths: "Higher margins and customer data",
        managed: "Shopify store kept in sync with marketplace stock and pricing",
      },
    ] satisfies MarketplaceComparisonRow[],
  },

  pricingSection: {
    titleLead: "Pick Your Plan,",
    titleAccent: "Scale at Your Pace",
    subtext:
      "Monthly packages that combine account management, PPC, listings and creative. Start where you are and upgrade as you grow.",
    plans: [
      {
        badge: "STARTER",
        price: "$1,499/month",
        bestFor: "Best for: new and small brands selling on one marketplace",
        features: [
          "1 marketplace, up to 25 active SKUs",
          "Listing optimization for up to 5 listings/month",
          "Keyword research for new and existing listings",
          "PPC management (up to $10K ad spend)",
          "Account health monitoring",
          "Monthly performance report",
          "Email support",
        ],
        ctaLabel: "Get Started →",
        ctaHref: "/contact?plan=starter",
      },
      {
        badge: "GROWTH · ★ MOST POPULAR",
        price: "$2,999/month",
        bestFor: "Best for: growing brands expanding to a second marketplace",
        features: [
          "Up to 2 marketplaces, up to 100 active SKUs",
          "Listing optimization for up to 10 listings/month",
          "Full PPC management (up to $30K ad spend)",
          "Keyword ranking tracking",
          "2 creative image sets/month",
          "1 A+ Content project/quarter",
          "Inventory and account health monitoring",
          "Weekly reports + monthly strategy meeting",
        ],
        ctaLabel: "Get Started →",
        ctaHref: "/contact?plan=growth",
        featured: true,
      },
      {
        badge: "SCALE",
        price: "$5,499/month",
        bestFor: "Best for: established brands selling on several channels",
        features: [
          "3–5 marketplaces, up to 300 active SKUs",
          "Listing optimization for up to 20 listings/month",
          "Advanced PPC management (up to $75K ad spend)",
          "Organic ranking strategy",
          "4 creative image sets/month + 1 product video/month",
          "2 A+ Content projects/quarter",
          "Inventory and catalog management",
          "Dedicated account manager + monthly business review",
        ],
        ctaLabel: "Get Started →",
        ctaHref: "/contact?plan=scale",
      },
    ] satisfies ServicePricingPlan[],
    enterprise: {
      badge: "ENTERPRISE · Custom pricing",
      description:
        "For large brands that need a dedicated team across every channel: Amazon DSP, Brand Stores, UGC, multi-channel inventory, CX operations and executive reporting.",
      ctaLabel: "Talk to Our Team →",
      ctaHref: "/contact?plan=enterprise",
    },
    smallPrint:
      "Package limits are monthly allowances, not unlimited production. Extra SKUs, channels and ad spend are quoted separately. Ad budgets are paid directly by you. Minimum 3-month commitment, then month-to-month.",
  },

  whyChooseSection: {
    titleLead: "Why E-commerce Brands",
    titleAccent: "Choose RankCanyon",
    subtext:
      "We're not another agency that locks you into one channel or one big retainer. We're a marketplace growth team you can scale up or down, built around your goals and your margins.",
    cards: [
      {
        title: "One Team for Every Marketplace",
        description:
          "Amazon, Walmart, eBay, Shopify, TikTok Shop and Etsy, all managed by one team with one point of contact. No juggling separate agencies.",
        iconKey: "globe",
      },
      {
        title: "Hire One Service or the Whole Channel",
        description:
          "Start with PPC, listings or account management, then add more when you're ready. You only pay for what your brand actually needs.",
        iconKey: "layers",
      },
      {
        title: "Clear Pricing, No Surprises",
        description:
          "Our prices are published upfront, so you know what you'll pay before the first call. Ad budgets go straight to the marketplace, never through us.",
        iconKey: "receipt",
      },
      {
        title: "Your Accounts Stay Yours",
        description:
          "You keep full ownership of your seller accounts, ad accounts, listings and data. We work through access you control and can remove at any time.",
        iconKey: "lock",
      },
      {
        title: "Performance and Creative Under One Roof",
        description:
          "Our PPC specialists, SEO team and in-house designers work together. Your ads, listings, images and A+ Content all push toward the same goal.",
        iconKey: "sparkles",
      },
      {
        title: "Compliant, Profit-Focused Growth",
        description:
          "No fake reviews, no risky shortcuts, no vanity metrics. We grow your sales within marketplace policies, with a close eye on ACoS, TACoS and profit.",
        iconKey: "check",
      },
    ] satisfies WhyChooseCard[],
  },

  faqSection: {
    headingLead: "Marketplace Management: Your Questions",
    headingAccent: "Answered",
    faqs: [
      {
        question: "Which marketplaces do you manage?",
        answer:
          "We manage Amazon, Walmart Marketplace, eBay, Shopify, TikTok Shop and Etsy. We also support Target Plus for sellers who already have an invitation, and other marketplaces on request. You can start with one platform and add more as you grow, all under one account manager.",
      },
      {
        question: "Can you help me start selling on Amazon?",
        answer:
          "Yes. We handle Seller Central registration, identity verification, category approvals, Brand Registry and your first listings. Once your account is live, we can set up launch PPC campaigns and move you onto monthly account management.",
      },
      {
        question: "Do I need to share my seller account login?",
        answer:
          "No. You add us as a user through your marketplace's user permissions settings, such as User Permissions in Amazon Seller Central. You choose what we can access and can remove us at any time. Sharing your main login breaks most marketplace policies, so we never ask for it.",
      },
      {
        question: "Can you fix suppressed or suspended listings?",
        answer:
          "Yes. We find out why a listing was suppressed or deactivated, whether that's missing attributes, image problems, pricing errors or a policy flag. Then we fix it and follow up with seller support until the listing is live again. Full account suspension appeals are a separate service.",
      },
      {
        question: "What do Amazon account management services include?",
        answer:
          "Daily account monitoring, account health management, listing and catalog management, inventory monitoring, order management, suppressed listing fixes, seller support cases, returns and refund monitoring, performance reporting, and a growth strategy for your brand.",
      },
      {
        question: "What do Walmart account management services include?",
        answer:
          "We manage your Walmart Seller Center: item setup, listing quality, Pro Seller standards, on-time delivery rates, WFS inventory and support cases. We can also run your Walmart Connect ads under our PPC service.",
      },
      {
        question: "How much does marketplace account management cost?",
        answer:
          "Plans start at $500/month for eBay and $750/month for Amazon, Walmart, Shopify or TikTok Shop. Multi-marketplace management runs from $2,000 to $5,500/month, depending on your number of SKUs, marketplaces and order volume. Ad spend and marketplace fees are separate.",
      },
      {
        question: "What does an Amazon account manager do each day?",
        answer:
          "They check sales, account health metrics, listing status, buyer messages and inventory levels. They fix suppressed listings, follow up on open support cases, update listings and flag anything that needs your decision. You hear from them as soon as something important comes up.",
      },
      {
        question: "Do you manage FBA shipments?",
        answer:
          "Yes. We create shipment plans, prepare labeling and packing requirements, track inbound shipments, and monitor restock limits, stranded inventory and aged-inventory fees. If units are lost or damaged in Amazon's warehouses, we file reimbursement cases.",
      },
      {
        question: "Can you launch new products for us?",
        answer:
          "Yes. We handle the listing, keyword research, images, A+ Content, launch pricing and launch PPC campaigns. We then track sales, ranking and conversion every week for the first 90 days, all within Amazon's policies, with no paid or incentivized reviews.",
      },
      {
        question: "How do you report on marketplace account management?",
        answer:
          "You get a monthly report covering sales, traffic, conversion rate, account health, inventory and work completed, plus clear next steps. Growth and Scale plans add weekly reports and a monthly strategy meeting with your account manager.",
      },
      {
        question: "Which is better, FBA or FBM?",
        answer:
          "It depends on your product and margins. FBA (Fulfilled by Amazon) gives you Prime eligibility and usually higher conversion, but adds storage and fulfillment fees. FBM (Fulfilled by Merchant) suits oversized, slow-moving or low-margin items. Many brands use both, and we'll recommend the right mix for your catalog.",
      },
    ] satisfies Faq[],
  },
} as const;
