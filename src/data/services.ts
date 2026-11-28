import {
  Clapperboard,
  Image as ImageIcon,
  LayoutGrid,
  Megaphone,
  Search,
  Store,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "marketplace-account-management",
    title: "Marketplace Account Management",
    shortTitle: "Marketplace Account Management",
    icon: LayoutGrid,
    summary:
      "End-to-end marketplace operations across Amazon, eBay, Walmart, Etsy, Target, and other leading platforms. We manage listings, catalogs, inventory, orders, and account performance to support your multi-channel growth.",
    metaDescription:
      "Full-service Amazon and multi-marketplace account management for Seller Central, Vendor Central and Walmart. Catalog operations, inventory planning, compliance and growth strategy.",
    overview: [
      "Scaling across Amazon and leading retail marketplaces means juggling flat-file catalog syncs, FBA capacity limits, Buy Box suppression, pricing parity and Seller Support escalations — on top of daily growth execution.",
      "Our marketplace operations team acts as your dedicated in-house operator across Seller Central, Vendor Central and expansion channels, keeping every SKU healthy, in stock and positioned to win.",
    ],
    features: [
      {
        title: "1P, 3P & omnichannel operations",
        description:
          "Unified management across Amazon Seller Central, Vendor Central, Walmart Marketplace and Target Plus.",
      },
      {
        title: "Catalog & Buy Box defense",
        description:
          "Clean parent-child variations, flat-file troubleshooting, unauthorized reseller monitoring and fast suppression fixes.",
      },
      {
        title: "Demand & FBA forecasting",
        description:
          "SKU-level replenishment planning that protects organic rank while avoiding stockouts and aged-inventory surcharges.",
      },
      {
        title: "Account health & reimbursements",
        description:
          "Proactive policy compliance, case escalation and ongoing FBA discrepancy and fee reimbursement recovery.",
      },
    ],
    outcomes: [
      { value: "99.4%", label: "In-stock & Buy Box win rate" },
      { value: "+48%", label: "Year-over-year marketplace revenue" },
      { value: "-41%", label: "Storage & aged-inventory fees" },
    ],
    deliverables: [
      "Dedicated senior marketplace strategist",
      "Daily account health, Buy Box and suppression monitoring",
      "SKU-level inventory & FBA replenishment schedule",
      "Catalog flat-file hygiene, case management & reimbursements",
      "Executive monthly & quarterly business reviews",
    ],
    faqs: [
      {
        question: "Do you manage both Amazon Seller Central and Vendor Central?",
        answer:
          "Yes. We run 3P Seller Central, 1P Vendor Central, hybrid models and omnichannel marketplace expansion across Walmart and Target.",
      },
      {
        question: "Who will we work with day to day?",
        answer:
          "You get a dedicated senior account strategist backed by specialists in PPC, SEO, creative and catalog operations working from one shared roadmap.",
      },
    ],
  },
  {
    slug: "marketplace-ppc-advertising-management",
    title: "Marketplace PPC & Advertising Management",
    shortTitle: "Marketplace PPC & Advertising Management",
    icon: Megaphone,
    summary:
      "Drive more sales with strategic marketplace advertising across Amazon, Walmart, eBay, and other platforms. We manage PPC campaigns, optimize ad performance, control spending, and improve advertising efficiency to support profitable growth.",
    metaDescription:
      "Data-driven Amazon and marketplace PPC management across Sponsored Products, Sponsored Brands, Sponsored Display and DSP. Lower TACoS and scale profitable sales.",
    overview: [
      "Marketplace advertising is the fastest growth lever on Amazon and Walmart — and the fastest way to burn contribution margin when campaigns mix branded, conquest and discovery traffic together.",
      "We build granular, intent-segmented campaign architectures paired with algorithmic bid pacing and senior strategist oversight so every ad dollar compounds organic rank and net profit.",
    ],
    features: [
      {
        title: "Intent-segmented architecture",
        description:
          "Sponsored Products, Brands and Display separated by match type, SKU margin tier and branded vs. non-branded intent.",
      },
      {
        title: "Weekly search-term harvesting",
        description:
          "Systematic query isolation and negative keyword pruning to scale high-converting terms and eliminate bleed.",
      },
      {
        title: "Dayparting & placement bidding",
        description:
          "Hourly budget pacing and Top-of-Search placement multipliers tuned to conversion probability.",
      },
      {
        title: "TACoS & margin reporting",
        description:
          "Transparent weekly dashboards tracking total ad cost of sales, new-to-brand lift and ASIN-level profitability.",
      },
    ],
    outcomes: [
      { value: "-32%", label: "Average TACoS reduction" },
      { value: "4.6x", label: "Average blended ROAS" },
      { value: "+71%", label: "Ad-attributed revenue lift" },
    ],
    deliverables: [
      "Full ad-account audit & wasted-spend teardown",
      "Granular campaign rebuild & naming taxonomy",
      "Competitor ASIN & keyword conquest matrix",
      "Weekly bid, placement and negative keyword optimization",
      "Live TACoS, ROAS and organic-lift reporting",
    ],
    faqs: [
      {
        question: "How quickly do brands see efficiency gains from PPC management?",
        answer:
          "Most accounts see measurable wasted-spend reduction within the first 21–30 days, followed by compounding scale in months two and three as clean campaign structures mature.",
      },
      {
        question: "Do we retain full ownership of our ad accounts?",
        answer:
          "Always. You own every ad console and historical dataset — we operate as authorized partners inside your existing accounts.",
      },
    ],
  },
  {
    slug: "organic-ranking-sales-growth",
    title: "Organic Ranking & Sales Growth",
    shortTitle: "Organic Ranking & Sales Growth",
    icon: Search,
    summary:
      "Improve marketplace visibility with keyword-driven listing content, strategic SEO, and conversion-focused optimization designed to attract shoppers and increase organic sales.",
    metaDescription:
      "Amazon listing optimization and marketplace SEO services. Search Query Performance research, conversion copywriting, backend indexing and split testing.",
    overview: [
      "Ranking on page one requires pairing how shoppers actually search with persuasion that converts the click. If your listing indexes poorly, you miss traffic; if it reads like keyword stuffing, shoppers bounce.",
      "We engineer titles, bullets, attributes and backend search terms using Search Query Performance data, competitor teardowns and continuous split testing.",
    ],
    features: [
      {
        title: "Search Query Performance mapping",
        description:
          "First-party search volume, click-share and conversion-share analysis across root and long-tail keywords.",
      },
      {
        title: "Conversion-first copywriting",
        description:
          "Benefit-led titles and bullet points crafted to overcome shopper objections while hitting exact-match priority.",
      },
      {
        title: "Backend & Rufus AI readiness",
        description:
          "Complete structured attributes, subject matter fields and semantic Q&A optimization for modern marketplace search.",
      },
      {
        title: "Manage Your Experiments testing",
        description:
          "Statistical A/B split tests on titles and hero copy to lock in proven conversion gains.",
      },
    ],
    outcomes: [
      { value: "+38%", label: "Average detail-page CVR lift" },
      { value: "2.4x", label: "Page-one organic keywords" },
      { value: "+56%", label: "Organic revenue growth" },
    ],
    deliverables: [
      "Master keyword universe & competitor gap analysis",
      "SEO-engineered title, 5 bullets and product description",
      "Backend search terms & structured catalog attributes",
      "24/7 keyword indexing & organic rank tracker",
      "Ongoing seasonal & split-test copy refreshes",
    ],
    faqs: [
      {
        question: "How soon do listing SEO updates impact organic rankings?",
        answer:
          "Keyword indexing updates typically register within 48–72 hours, while sustained page-one ranking momentum compounds over 4–8 weeks as click-through and conversion velocity climb.",
      },
      {
        question: "Do you localize listings for international marketplaces?",
        answer:
          "Yes. Native marketplace copywriters localize keyword research and idioms across North America, UK, EU and APAC.",
      },
    ],
  },
  {
    slug: "product-image-creative-design",
    title: "Product Image & Creative Design",
    shortTitle: "Product Creative",
    icon: ImageIcon,
    summary:
      "Make your products stand out with professional, conversion-focused visuals. From main product images and feature-rich infographics to lifestyle photography and comparison graphics, we create compelling designs that capture attention and help shoppers make confident buying decisions.",
    metaDescription:
      "Amazon product photography, main image optimization, mobile infographics and conversion-tested image stacks built to boost CTR and detail-page sales.",
    overview: [
      "Over 70% of marketplace shopping happens on mobile, where shoppers swipe your image stack long before reading a single bullet point. Your main image wins the click; your gallery closes the sale.",
      "Our creative studio designs crisp, benefit-driven image stacks — main hero renders, callout infographics, comparison visuals and lifestyle scenes — pre-tested with Prime shoppers before launch.",
    ],
    features: [
      {
        title: "CTR-engineered main images",
        description:
          "Compliant packaging badges, angle optimization and visual pop tested to outperform category competitors in search results.",
      },
      {
        title: "Mobile-first infographic stack",
        description:
          "Thumb-stopping typography, macro callouts and dimension guides readable at mobile thumbnail scale.",
      },
      {
        title: "Studio, 3D & lifestyle scenes",
        description:
          "Photorealistic 3D rendering and art-directed lifestyle imagery tailored to your target buyer persona.",
      },
      {
        title: "Pre-live Prime shopper testing",
        description:
          "Rapid poll validation and live Manage Your Experiments testing so every creative refresh is backed by data.",
      },
    ],
    outcomes: [
      { value: "+34%", label: "Main-image CTR improvement" },
      { value: "+24%", label: "Gallery-driven CVR lift" },
      { value: "10 days", label: "Typical full-stack turnaround" },
    ],
    deliverables: [
      "Visual category teardown & creative brief",
      "2–3 CTR-tested main image concepts",
      "Full 7-slot mobile-optimized gallery & infographics",
      "Prime shopper pre-test scorecard & insights",
      "Editable source files & marketplace-ready exports",
    ],
    faqs: [
      {
        question: "Can you work with our existing photos or create new renders?",
        answer:
          "Both. We can transform existing studio assets, produce photorealistic 3D renders or coordinate custom studio and lifestyle shoots.",
      },
      {
        question: "How do you validate that a new main image will beat our control?",
        answer:
          "We audience-test main image variants with Prime shoppers before upload, then confirm conversion and revenue lift inside Amazon Manage Your Experiments.",
      },
    ],
  },
  {
    slug: "a-plus-content-brand-store",
    title: "A+ Content & Brand Store Design",
    shortTitle: "A+ & Brand Stores",
    icon: Store,
    summary:
      "Enhance your brand presence with professionally designed A+ Content and Amazon Brand Stores. We create engaging layouts, product comparison charts, and branded storefronts that showcase your products, communicate value, and encourage more purchases.",
    metaDescription:
      "Amazon A+ Content, Premium A+ modules, Brand Story carousels and custom multi-page Brand Storefronts built to boost conversion rate and basket size.",
    overview: [
      "Below the fold is where hesitant shoppers decide whether to trust your brand or click back to a cheaper rival. Generic templates waste that real estate; custom storytelling turns it into a conversion engine.",
      "We architect cohesive Brand Stories, interactive Premium A+ layouts and multi-page Amazon Brand Stores that cross-sell your catalog and serve as high-converting landing pages for Sponsored Brands and DSP.",
    ],
    features: [
      {
        title: "A+ & Premium A+ layouts",
        description:
          "Full-width interactive hotspots, Q&A accordions, video loops and visual storytelling modules.",
      },
      {
        title: "Cross-sell comparison matrices",
        description:
          "Interactive product comparison tables that keep shoppers inside your ecosystem and lift units per order.",
      },
      {
        title: "Multi-page Brand Storefronts",
        description:
          "Custom navigation, collection sub-pages and deal hubs engineered for Sponsored Brands & external traffic.",
      },
      {
        title: "Brand Story carousel",
        description:
          "Above-A+ scrolling brand showcase connecting your mission and flagship catalog lines.",
      },
    ],
    outcomes: [
      { value: "+27%", label: "Average CVR lift with Premium A+" },
      { value: "+19%", label: "Higher Storefront AOV" },
      { value: "2 wks", label: "Concept-to-publish delivery" },
    ],
    deliverables: [
      "Conversion UX wireframe & module strategy",
      "Custom A+ or Premium A+ visual & copy build",
      "Brand Story carousel design & ASIN cross-link setup",
      "Multi-page desktop & mobile Brand Storefront",
      "Seller/Vendor Central upload, alt-text SEO & QA",
    ],
    faqs: [
      {
        question: "Do you include keyword-rich alt-text behind A+ images?",
        answer:
          "Every single A+ and Brand Store image banner is uploaded with researched backend alt-text and crawlable copy modules to support organic visibility.",
      },
      {
        question: "Can you unlock and build Premium A+ Content?",
        answer:
          "Yes. We help eligible brands qualify for Premium A+ via Brand Story deployment and design full-width interactive video, hotspot and carousel modules.",
      },
    ],
  },
  {
    slug: "product-video-production",
    title: "Product Video Production",
    shortTitle: "Video Production",
    icon: Clapperboard,
    summary:
      "Bring your products to life with engaging, professionally produced videos. From Sponsored Brands videos and product demonstration clips to lifestyle videos and Streaming TV creatives, we create compelling content that captures attention and showcases your products.",
    metaDescription:
      "Amazon product video production: Sponsored Brands Video ads, PDP explainer demos, UGC-style creatives and Streaming TV / DSP video built to convert.",
    overview: [
      "Video now dominates Amazon search results, product galleries and Prime Video ad inventory. Shoppers watching a product video convert at dramatically higher rates — provided the first three seconds stop the scroll.",
      "We script, shoot, animate and edit sound-off-friendly marketplace videos engineered specifically for Sponsored Brands Video CTR, detail-page dwell time and Streaming TV recall.",
    ],
    features: [
      {
        title: "Sponsored Brands Video ads",
        description:
          "3-second visual hooks, bold captions and rapid benefit callouts built to win high-intent search placements.",
      },
      {
        title: "PDP explainer & demo videos",
        description:
          "Crisp 45–60 second product walkthroughs demonstrating setup, scale, quality and real-world results.",
      },
      {
        title: "UGC & lifestyle cuts",
        description:
          "Authentic creator-led demonstrations and problem-solution hooks tested across multiple aspect ratios.",
      },
      {
        title: "Streaming TV & DSP cuts",
        description:
          "Broadcast-ready 15s and 30s spots formatted for Prime Video, Fire TV and off-Amazon programmatic reach.",
      },
    ],
    outcomes: [
      { value: "+42%", label: "Sponsored Brands Video CTR" },
      { value: "2.1x", label: "Shopper conversion with video" },
      { value: "3 variants", label: "Hook cuts delivered per shoot" },
    ],
    deliverables: [
      "Scriptwriting, storyboard & 3-second hook variants",
      "Studio, lifestyle or motion-graphics production",
      "Sound-off captions, callout graphics & color grading",
      "16:9, 9:16 and 1:1 marketplace-compliant exports",
      "Ad-console & PDP video slot upload + performance QA",
    ],
    faqs: [
      {
        question: "Are your videos optimized for muted autoplay in Amazon search?",
        answer:
          "100%. Every Sponsored Brands and gallery video is designed sound-off first with high-contrast motion callouts and crystal-clear captions, plus full sound design when unmuted.",
      },
      {
        question: "Do you deliver multiple hook variations for ad testing?",
        answer:
          "Yes — we deliver multiple opening 3-second hook cuts per video so our PPC team can A/B test click-through and ROAS in live Sponsored Brands campaigns.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
