import type { Faq } from "@/types";

export const marketplacePpcPageData = {
  slug: "marketplace-ppc-advertising-management",
  seoTitle: "Marketplace PPC & Advertising Management",
  seoDescription:
    "Amazon, Walmart, eBay, Etsy and TikTok Shop each run their own ad platform, but the question is always the same: is this spend making you money? We manage your advertising across every channel, with targets set from your real product margins.",

  hero: {
    titleLead: "Marketplace PPC Management Built Around",
    titleAccent: "Your Margins, on Every Channel",
    subtitle:
      "Amazon, Walmart, eBay, Etsy and TikTok Shop each run their own ad platform, but the question is always the same: is this spend making you money? We manage your advertising across every channel, with targets set from your real product margins.",
    primaryCta: {
      label: "Get a Free PPC Audit",
      href: "/contact?service=ppc-audit",
    },
    secondaryCta: {
      label: "Book a Strategy Call",
      href: "/contact?service=ppc-strategy",
    },
    supportedLabel: "Managed ad platforms",
    supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Etsy", "TikTok Shop"],
  },

  introSection: {
    titleLead: "Marketplace PPC Management That Makes",
    titleAccent: "Every Ad Dollar Count",
    body: "Ads are the quickest way to reach shoppers who are ready to buy, and the quickest way to lose margin when nobody manages them closely. RankCanyon runs your Amazon, Walmart, eBay, Etsy and TikTok Shop campaigns with one goal: lower ACoS, stronger ROAS, and more spend only where it brings back profit.",
  },

  whatItMeansSection: {
    eyebrow: "WHAT IT MEANS",
    titleLead: "What Is PPC Advertising and",
    titleAccent: "Campaign Management?",
    paragraphs: [
      "PPC, or pay-per-click advertising, means you pay only when a shopper clicks your ad. On marketplaces, that includes Amazon Sponsored Products, Sponsored Brands and Sponsored Display, Walmart Connect, eBay Promoted Listings, Etsy Ads and TikTok Shop Ads. PPC puts your product in front of shoppers at the moment they're searching to buy.",
      "Campaign management is the ongoing work that turns that spend into profit. It covers keyword research, campaign structure, bids, negative keywords, budget shifts and weekly performance reviews. Without it, ad costs rise quietly while sales stay flat.",
    ],
  },

  channelsSection: {
    titleLead: "PPC Campaigns Managed",
    titleAccent: "Across Every Marketplace",
    subtext:
      "We plan and run campaigns on every marketplace where your products sell, from sponsored search ads to display, video and retargeting.",
    cards: [
      {
        id: "amazon-ads",
        platform: "Amazon",
        title: "Amazon Ads",
        description:
          "Sponsored Products, Sponsored Brands and Sponsored Display, managed together for profitable sales and stronger organic rank.",
        href: "/contact?service=amazon-ppc",
      },
      {
        id: "amazon-dsp",
        platform: "Amazon",
        title: "Amazon DSP & Retargeting",
        description:
          "Display, video and Streaming TV ads that reach shoppers on and off Amazon and bring back those who didn't buy the first time.",
        href: "/contact?service=amazon-dsp",
      },
      {
        id: "walmart-connect",
        platform: "Walmart",
        title: "Walmart Connect",
        description:
          "Sponsored Products, Sponsored Brands and Sponsored Videos on Walmart, with keyword, bid and budget control.",
        href: "/contact?service=walmart-connect",
      },
      {
        id: "multi-channel-ads",
        platform: "TikTok Shop",
        title: "eBay, Etsy & TikTok Shop Ads",
        description:
          "Promoted Listings, Etsy Ads and TikTok Shop Ads, each managed to its own ROI target and reported in one place.",
        href: "/contact?service=multi-marketplace-ppc",
      },
    ],
  },

  includedSection: {
    titleLead: "What Our PPC Management",
    titleAccent: "Service Includes",
    cards: [
      {
        title: "Ad Account Audit",
        description:
          "A detailed review of your current spend, campaign structure, search terms and wasted budget before we change anything.",
        iconKey: "search" as const,
      },
      {
        title: "Keyword & Product Targeting",
        description:
          "We find high-intent keywords and competitor products to target, and block searches that spend without selling.",
        iconKey: "target" as const,
      },
      {
        title: "Campaign Structure",
        description:
          "Clean campaigns split by product, match type and goal, so every bid and budget is easy to control and track.",
        iconKey: "layers" as const,
      },
      {
        title: "Bid & Budget Management",
        description:
          "Weekly bid changes by keyword and placement, with budgets moved to the campaigns that bring in profit.",
        iconKey: "sliders" as const,
      },
      {
        title: "Negative Keyword Management",
        description:
          "Ongoing cleanup of irrelevant and low-converting searches, so your budget only pays for clicks that can sell.",
        iconKey: "filter" as const,
      },
      {
        title: "Ad Creative Testing",
        description:
          "Our in-house design team tests Sponsored Brands headlines, custom images and videos to raise click-through and conversion.",
        iconKey: "sparkles" as const,
      },
      {
        title: "Transparent Reporting",
        description:
          "Weekly and monthly reports on spend, sales, ACoS, ROAS and TACoS, plus what we changed and why.",
        iconKey: "chart" as const,
      },
      {
        title: "Scaling What Works",
        description:
          "We move more budget into the keywords, campaigns and products that perform, and expand into new placements and ad types.",
        iconKey: "trending" as const,
      },
    ],
  },

  processSection: {
    titleLead: "Our 5-Step",
    titleAccent: "PPC Growth Process",
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Review your current campaigns, spend, search terms and wasted budget.",
      },
      {
        number: "02",
        title: "Strategy",
        description:
          "Set ACoS, ROAS and TACoS targets from your real product margins.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Restructure campaigns by product, match type and goal for full control.",
      },
      {
        number: "04",
        title: "Optimize",
        description: "Adjust bids, negatives, placements and budgets every week.",
      },
      {
        number: "05",
        title: "Scale",
        description:
          "Put more budget behind what's proven profitable, and nothing else.",
      },
    ],
    statBand: [
      {
        metric: "ACoS",
        description: "Targets set from each product's margin and break-even point.",
      },
      {
        metric: "ROAS",
        description: "Tracked by campaign, product and marketplace, side by side.",
      },
      {
        metric: "TACoS",
        description: "Shows whether ads are growing your total and organic sales.",
      },
      {
        metric: "Profit",
        description:
          "Every dollar is judged by what it earns, not by clicks or impressions.",
      },
    ],
  },

  approachSection: {
    eyebrow: "OUR APPROACH",
    titleLead: "Lower ACoS, Higher ROAS,",
    titleAccent: "Without Guesswork",
    paragraphs: [
      "We manage your ad budget as carefully as if it were our own. Every account starts with your break-even ACoS, the point where ad spend still leaves you a profit. Then we build campaigns that put spend behind the keywords, placements and products that stay under it.",
      "Paid and organic sales feed each other. Our PPC and listing SEO teams work together, so ads drive the sales that lift your organic rank. Over time, that means you rely less on paid clicks for every sale.",
    ],
    checklist: [
      "Underperforming keywords and products are paused, cut back or rebuilt",
      "Winning keywords and placements are scaled step by step",
      "PPC, listing SEO and creative work toward the same goals",
    ],
  },

  consultationBanner: {
    eyebrow: "FREE CONSULTATION",
    titleLead: "Ready to Stop Guessing With",
    titleAccent: "Your Ad Spend?",
    buttonLabel: "Book My Free Consultation →",
    buttonHref: "/contact?service=ppc-consultation",
  },

  whyTrustSection: {
    titleLead: "Why Brands Trust RankCanyon",
    titleAccent: "With Their Ad Spend",
    cards: [
      {
        title: "Profit-First Targets",
        description:
          "We set ACoS and TACoS goals from your real product margins, not industry averages, so growth never costs you your profit.",
        iconKey: "target" as const,
      },
      {
        title: "Hands-On Weekly Optimization",
        description:
          "PPC specialists review search terms, bids and budgets every week. We use automation tools, but people make the decisions.",
        iconKey: "sliders" as const,
      },
      {
        title: "Ads and Listings Work Together",
        description:
          "Our listing, SEO and creative teams sit next to our PPC team. When a keyword converts poorly, we fix the listing, not just the bid.",
        iconKey: "sparkles" as const,
      },
      {
        title: "Every Marketplace, One Strategy",
        description:
          "Amazon, Walmart, eBay, Etsy and TikTok Shop ads managed together, with one report and one point of contact.",
        iconKey: "globe" as const,
      },
      {
        title: "Your Ad Accounts Stay Yours",
        description:
          "We work inside your ad accounts with access you control. Your campaigns, data and history stay with you if we ever part ways.",
        iconKey: "lock" as const,
      },
      {
        title: "Clear Pricing, Clear Reporting",
        description:
          "Published fees, no hidden markups on ad spend, and reports that show exactly what we changed and why.",
        iconKey: "receipt" as const,
      },
    ],
  },

  pricingSection: {
    titleLead: "PPC Management Pricing That Grows",
    titleAccent: "With Your Ad Spend",
    plans: [
      {
        badge: "STARTER",
        price: "$750/month",
        bestFor:
          "Best for: brands spending up to $10,000/month on ads, on one marketplace",
        features: [
          "Ad account audit + campaign rebuild",
          "Sponsored Products management",
          "Keyword research and product targeting",
          "Bid, budget and negative keyword management",
          "ACoS and ROAS targets from your margins",
          "Monthly performance report",
        ],
        ctaLabel: "Get Started →",
        ctaHref: "/contact?plan=ppc-starter",
        featured: false,
      },
      {
        badge: "GROWTH · ★ MOST POPULAR",
        price: "From $1,000/month",
        bestFor: "Best for: brands spending $10,000–$30,000/month on ads",
        features: [
          "Everything in Starter",
          "Sponsored Products, Sponsored Brands and Sponsored Display",
          "Weekly search term harvesting and bid optimization",
          "Branded keyword defense",
          "TACoS tracking for organic growth",
          "Sponsored Brands creative testing",
          "Weekly updates + monthly strategy call",
        ],
        ctaLabel: "Get Started →",
        ctaHref: "/contact?plan=ppc-growth",
        featured: true,
      },
      {
        badge: "SCALE",
        price: "From $1,500/month",
        bestFor:
          "Best for: brands spending $30,000–$75,000/month on ads, across several marketplaces",
        features: [
          "Everything in Growth",
          "Walmart Connect, eBay, Etsy or TikTok Shop ads",
          "Amazon DSP and retargeting strategy",
          "Full-funnel campaigns: launch, grow, optimize, defend",
          "Cross-channel budget planning",
          "Dedicated PPC strategist",
          "Weekly reports + monthly business review",
        ],
        ctaLabel: "Talk to Our Team →",
        ctaHref: "/contact?plan=ppc-scale",
        featured: false,
      },
    ],
    closingStrip: {
      titleLead: "Clicks Are Easy.",
      titleAccent: "Profitable Clicks Are Rare.",
      subtext:
        "We turn messy ad accounts into campaigns that bring in sales at a profit. Clear targets, weekly optimization, and not a dollar spent without a reason.",
      buttonLabel: "Get My Free PPC Audit",
      buttonHref: "/contact?service=ppc-audit",
    },
  },

  faqSection: {
    headingLead: "Amazon PPC Management: Your Questions",
    headingAccent: "Answered",
    faqs: [
      {
        question: "What is Amazon PPC management?",
        answer:
          "Amazon PPC management is the ongoing work of running your Amazon ad campaigns: keyword research, campaign setup, bid and budget changes, search term reviews and negative keywords. The goal is to get the most profitable sales from every ad dollar.",
      },
      {
        question: "How much does Amazon PPC management cost?",
        answer:
          "RankCanyon's Amazon PPC management starts at $750/month for accounts spending under $10,000/month on ads. Fees rise by ad spend tier, up to $2,500–$4,000/month for $75,000–$150,000 in spend. Ad spend is paid directly to Amazon and isn't included.",
      },
      {
        question: "What is a good ACoS on Amazon?",
        answer:
          "There's no single good ACoS. It depends on your profit margin and your goal. A product with a 40% margin can break even at 40% ACoS, while a launch may run higher on purpose to build ranking. We set a target ACoS for each product from its real margin.",
      },
      {
        question: "What's the difference between ACoS and TACoS?",
        answer:
          "ACoS compares ad spend to ad sales only. TACoS compares ad spend to total sales, including organic. If TACoS falls while sales grow, your ads are helping organic sales grow too.",
      },
      {
        question: "Can you take over my existing campaigns?",
        answer:
          "Yes. We audit your current campaigns first, keep what's working, and restructure what isn't. Your campaign history stays intact, so you don't lose performance data.",
      },
      {
        question: "Do I need to give you my Amazon login?",
        answer:
          "No. You add us as a user in Seller Central and in your Amazon Ads account with the permissions you choose. You can remove our access at any time.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "Most accounts see wasted spend fall within the first 2–4 weeks, as we add negatives and fix bids. Bigger gains in sales and TACoS usually take 60–90 days of steady optimization.",
      },
      {
        question: "Do you manage Sponsored Brands, Sponsored Display and DSP?",
        answer:
          "Yes. We manage all three Amazon Sponsored ad types, plus Amazon DSP for display, video and Streaming TV audiences on and off Amazon.",
      },
      {
        question: "Do you manage Walmart, eBay, Etsy and TikTok Shop ads?",
        answer:
          "Yes. We manage Walmart Connect, eBay Promoted Listings, Etsy Ads and TikTok Shop Ads, and can run all of them under one multi-platform plan.",
      },
      {
        question: "Is there a minimum ad spend?",
        answer:
          "No, but PPC management makes the most sense once you can spend at least a few thousand dollars a month on ads. For smaller budgets, our PPC Launch Bundle ($499) sets up a clean structure you can run yourself.",
      },
    ] satisfies Faq[],
  },
} as const;
