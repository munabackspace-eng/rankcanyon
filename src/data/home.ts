import { Compass, LineChart, Rocket, Search } from "lucide-react";
import type { Faq, Metric, ProcessStep, Testimonial } from "@/types";

export const heroMetrics: Metric[] = [
  {
    category: "Revenue Growth",
    value: "1.7B+",
    label: "Revenue Generated",
    description: "Total revenue generated or managed for client brands.",
  },
  {
    category: "Advertising Performance",
    value: "3.8×",
    label: "Average ROAS",
    description: "Average return on advertising spend.",
  },
  {
    category: "Profitability",
    value: "-34%",
    label: "ACoS Reduction",
    description: "Average reduction in advertising cost of sales.",
  },
  {
    category: "Brand Experience",
    value: "760+",
    label: "Brands Supported",
    description: "Number of brands served by the agency.",
  },
];

export const heroShowcaseCards = [
  {
    label: "Amazon PPC",
    image: "/images/hero/card-1.jpg",
    alt: "Everyday lifestyle tote bag product photography",
    offset: "mt-0",
  },
  {
    label: "Paid Media",
    image: "/images/hero/card-2.jpg",
    alt: "Botanical sparkling beverage studio pour",
    offset: "mt-4 sm:mt-7 lg:mt-8",
  },
  {
    label: "CRO",
    image: "/images/hero/card-3.jpg",
    alt: "Artisanal spice jars and espresso cocktail tabletop scene",
    offset: "mt-8 sm:mt-14 lg:mt-16",
  },
  {
    label: "UGC & A+",
    image: "/images/hero/card-4.jpg",
    alt: "Wellness supplement jars with fresh botanicals",
    offset: "mt-4 sm:mt-7 lg:mt-8",
  },
  {
    label: "Lifecycle",
    image: "/images/hero/card-5.jpg",
    alt: "Botanical skincare mist bottle in natural coastal light",
    offset: "mt-0",
  },
] as const;

/** Placeholder client wordmarks — replace with real (licensed) logos in /public/images. */
export const trustedBrands: string[] = [
  "Northpeak",
  "Lumora",
  "Verdant Co.",
  "Ironwood",
  "Kindred Kitchen",
  "Solace Sleep",
  "Bravo Pets",
  "Atlas Outdoor",
  "Glow Theory",
  "Fieldcraft",
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Audit & Discovery",
    description:
      "We conduct an in-depth audit of your advertising, product listings, catalog, and competitive landscape to identify performance gaps and uncover opportunities for profitable growth.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description:
      "We develop a tailored 90-day growth roadmap with clear KPIs, including revenue, TACoS, ROAS, and market share, aligned with your business goals and profit margins.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Execute & Optimize",
    description:
      "Our specialists optimize advertising campaigns, product listings, and creative assets while continuously monitoring performance to improve efficiency and drive better results.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Scale & Report",
    description:
      "We provide transparent weekly performance reports and monthly strategy reviews, identifying new opportunities to expand your products, channels, and marketplace presence.",
    icon: LineChart,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Their DSP and Sponsored Brands strategy took us from a challenger brand to #1 in our subcategory before Prime Day. Communication is proactive and reporting is crystal clear.",
    name: "Daniel Ortiz",
    role: "Founder & CEO",
    company: "Atlas Outdoor",
    rating: 5,
    avatar: "/images/case-studies/avatar-daniel.jpg",
  },
  {
    quote:
      "We expanded to five European marketplaces in under six months. Localization, compliance, advertising — RankCanyon handled everything and the new regions now drive a third of our revenue.",
    name: "Priya Raman",
    role: "Head of Marketplaces",
    company: "Glow Theory",
    rating: 5,
    avatar: "/images/case-studies/avatar-priya.jpg",
  },
  {
    quote:
      "RankCanyon rebuilt our PPC from the ground up. Within four months our TACoS dropped from 18% to 11% while total revenue grew 62%. It's the first agency that actually understands profitability.",
    name: "Sarah Mitchell",
    role: "VP of E-commerce",
    company: "Kindred Kitchen",
    rating: 5,
    avatar: "/images/case-studies/avatar-sarah.jpg",
  },
  {
    quote:
      "The creative team redesigned our image stack and A+ Content and conversion rate jumped 31% almost overnight. They think like performance marketers, not just designers.",
    name: "Marcus Lee",
    role: "Director of Growth",
    company: "Solace Sleep",
    rating: 5,
    avatar: "/images/case-studies/avatar-marcus.jpg",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "What types of brands does RankCanyon work with?",
    answer:
      "We work with emerging sellers, established businesses, and growing brands looking to improve their marketplace performance. Our strategies are tailored to each brand's goals, challenges, and growth stage.",
  },
  {
    question: "What services does RankCanyon offer?",
    answer:
      "We provide comprehensive e-commerce solutions, including marketplace management, Amazon PPC management, listing optimization and SEO, product image and creative design, A+ Content, Brand Store design, and product video production.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the services required, marketplace complexity, advertising budget, and scope of work. We create tailored solutions based on your business needs and growth objectives.",
  },
  {
    question: "Will I receive regular performance reports?",
    answer:
      "Yes. We emphasize transparent communication and performance tracking. You'll receive regular updates on important metrics, campaign performance, progress, and opportunities for improvement.",
  },
  {
    question: "How do we get started with RankCanyon?",
    answer:
      "Getting started is simple. Book a free consultation with our team, share your business goals and current challenges, and we'll assess your requirements before recommending a suitable growth strategy.",
  },
  {
    question: "Can you manage existing Amazon PPC campaigns?",
    answer:
      "Yes. We can audit and take over your existing Amazon PPC campaigns, identify performance gaps, refine targeting and bidding strategies, and continuously optimize campaigns to improve advertising efficiency and profitability.",
  },
  {
    question: "Do you help brands expand into new marketplaces?",
    answer:
      "Yes. We help brands explore and expand into new marketplaces by developing tailored strategies for market entry, product listings, advertising, and marketplace operations. Our goal is to make expansion more structured and sustainable.",
  },
];
