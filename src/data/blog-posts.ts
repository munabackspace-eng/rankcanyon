import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "rufus-ai-search-amazon-ad-inventory",
    title: "Rufus & Conversational Search Are Everywhere Now. So Is the Ad Inventory.",
    excerpt:
      "Shoppers are asking Rufus multi-attribute questions instead of typing two-word keywords. Here is how catalog attributes and Sponsored Ads must adapt.",
    category: "Marketplace Search",
    badge: "BLOG",
    publishedAt: "2026-11-10",
    readingTime: "6 min read",
    coverImage: "/images/blog/rufus-ai-search.jpg",
    author: {
      name: "Maya Chen",
      role: "SEO & AEO Lead, RankCanyon",
      avatar: "/images/case-studies/avatar-priya.jpg",
    },
    featured: true,
    content: [
      {
        type: "p",
        text: "Amazon search is no longer limited to rigid root keywords. With Rufus and AI-assisted shopping surfaces embedded directly into mobile search results and detail pages, shoppers filter by use case, audience and outcome before clicking a single ASIN.",
      },
      { type: "h2", text: "Why structured catalog attributes matter more than ever" },
      {
        type: "p",
        text: "Conversational shopping assistants pull answers from backend catalog attributes, bullet points, A+ copy and customer Q&A. Incomplete item-type fields silently disqualify your product from high-intent recommendations.",
      },
      {
        type: "ul",
        items: [
          "Audit every optional attribute in Seller or Vendor Central category templates.",
          "Write benefit-explicit bullets that pair concrete use cases with measurable specs.",
          "Align Sponsored Brands headlines with question-led shopper intent.",
        ],
      },
      {
        type: "quote",
        text: "Brands winning AI-assisted discovery aren't stuffing more keywords — they're feeding cleaner product truth into every catalog field.",
      },
    ],
  },
  {
    slug: "prime-day-playbook",
    title: "Peak Season & Prime Event Statistics 2026: Pacing, Deals and Timing",
    excerpt:
      "How we plan inventory, deal tiers, DSP retargeting pools and hourly bid pacing across the six weeks leading into tentpole events.",
    category: "Strategy",
    badge: "BLOG",
    publishedAt: "2026-11-05",
    readingTime: "8 min read",
    coverImage: "/images/blog/prime-day-playbook.jpg",
    author: {
      name: "Sarah Jenkins",
      role: "Director of Strategy, RankCanyon",
      avatar: "/images/case-studies/avatar-sarah.jpg",
    },
    content: [
      {
        type: "p",
        text: "Prime Day and Q4 Cyber Week aren't won on the event days — they're won in the six weeks before. Shoppers build wishlists and comparison carts weeks ahead of peak deal windows.",
      },
      { type: "h2", text: "Weeks 6–4: Foundations" },
      {
        type: "p",
        text: "Lock FBA inbound cutoffs, stress-test contribution margin across Lightning Deals vs. Prime Exclusive Discounts, and refresh mobile main images.",
      },
      { type: "h2", text: "Weeks 3–1: Audience warm-up" },
      {
        type: "p",
        text: "Ramp Sponsored Brands Video and DSP detail-page view pools early so remarketing audiences peak right as conversion rates double on event day.",
      },
      { type: "h2", text: "Event days & halo capture" },
      {
        type: "p",
        text: "Monitor top-of-search budgets hourly, protect high-margin hero ASINs from stockout, and retarget non-converting event browsers for 30 days post-event.",
      },
    ],
  },
  {
    slug: "when-to-start-amazon-dsp",
    title: "Who Wins Full-Funnel Attribution? Most Brands Watch the Wrong DSP Signals",
    excerpt:
      "Amazon DSP can unlock compounding new-to-brand growth — or burn margin when judged on last-touch ROAS alone. Here are the signals that matter.",
    category: "Amazon DSP",
    badge: "BLOG",
    publishedAt: "2026-11-02",
    readingTime: "6 min read",
    coverImage: "/images/blog/amazon-dsp.jpg",
    author: {
      name: "Jordan Hale",
      role: "Head of Advertising, RankCanyon",
      avatar: "/images/case-studies/avatar-daniel.jpg",
    },
    content: [
      {
        type: "p",
        text: "Amazon DSP gives brands programmatic access to Amazon's first-party purchase and browsing signals across Prime Video, Twitch and premium off-Amazon publishers. Yet evaluating upper-funnel DSP with last-click Sponsored Products metrics guarantees misallocated spend.",
      },
      { type: "h2", text: "Signals you're ready for DSP" },
      {
        type: "ul",
        items: [
          "Sponsored Products and Sponsored Brands capture >80% impression share on core exact terms.",
          "Hero detail pages convert at or above top-quartile category benchmarks.",
          "Amazon Marketing Cloud (AMC) path-to-purchase tracking is active.",
        ],
      },
      { type: "h2", text: "Measuring true incremental lift" },
      {
        type: "p",
        text: "Track branded search lift, new-to-brand percentage and multi-touch conversion rate inside AMC when shoppers see both DSP display/streaming and Sponsored Ads.",
      },
    ],
  },
  {
    slug: "acos-vs-tacos-what-actually-matters",
    title: "2026 Marketplace Profitability Study: ACoS vs. TACoS Across 150+ Brands",
    excerpt:
      "ACoS tells you how efficient your ads are. TACoS tells you whether your Amazon channel is compounding organic equity. Benchmark data inside.",
    category: "Amazon PPC",
    badge: "RESEARCH",
    publishedAt: "2026-10-28",
    readingTime: "7 min read",
    coverImage: "/images/blog/acos-vs-tacos.jpg",
    author: {
      name: "Marcus Vance",
      role: "VP, Marketplace Research",
      avatar: "/images/case-studies/avatar-marcus.jpg",
    },
    content: [
      {
        type: "p",
        text: "Advertising Cost of Sale (ACoS) is the most quoted metric in Amazon advertising — and one of the most misunderstood. Optimizing for ACoS alone can quietly shrink your business while your ad console looks efficient.",
      },
      { type: "h2", text: "What ACoS measures" },
      {
        type: "p",
        text: "ACoS is ad spend divided by ad-attributed sales. It measures campaign efficiency in isolation, ignoring the organic ranking velocity driven by paid conversions.",
      },
      { type: "h2", text: "Why TACoS is the better north star" },
      {
        type: "p",
        text: "Total Advertising Cost of Sale (TACoS) divides ad spend by total revenue. When TACoS declines while total revenue climbs, paid media is compounding organic rank.",
      },
      {
        type: "ul",
        items: [
          "Rising TACoS + flat revenue: ads are cannibalizing organic sales.",
          "Stable TACoS + rising revenue: healthy, proportional scale.",
          "Falling TACoS + rising revenue: compounding organic growth — the goal.",
        ],
      },
      {
        type: "quote",
        text: "The best Amazon brands use ACoS to manage campaigns and TACoS to manage the P&L.",
      },
    ],
  },
  {
    slug: "amazon-listing-optimization-checklist",
    title: "The Mobile-First Gallery & Premium A+ Conversion Study",
    excerpt:
      "Over 70% of Prime shoppers swipe your image stack before reading a bullet point. See what lifted detail-page CVR across 400 split tests.",
    category: "Listing Optimization",
    badge: "RESEARCH",
    publishedAt: "2026-10-14",
    readingTime: "9 min read",
    coverImage: "/images/blog/listing-checklist.jpg",
    author: {
      name: "Maya Chen",
      role: "SEO & AEO Lead, RankCanyon",
      avatar: "/images/case-studies/avatar-priya.jpg",
    },
    content: [
      {
        type: "p",
        text: "Great listings do two jobs at once: they help Amazon index what you sell, and they persuade mobile shoppers in under five seconds. Use this framework to audit every hero ASIN.",
      },
      { type: "h2", text: "Main image CTR engineering" },
      {
        type: "ul",
        items: [
          "Maximize compliant canvas fill and visual contrast against white search grids.",
          "Use clear packaging cues or flavor/count callouts readable at 140px mobile height.",
          "Validate main image variants with Prime shopper polls prior to Manage Your Experiments.",
        ],
      },
      { type: "h2", text: "7-slot infographic hierarchy & Premium A+" },
      {
        type: "p",
        text: "Sequence gallery slots around your top buyer objections — dimension clarity, comparison vs. generic alternatives, and real-world proof — followed by interactive Premium A+ comparison charts below the fold.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/** Posts sorted newest first. */
export function getSortedPosts() {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
