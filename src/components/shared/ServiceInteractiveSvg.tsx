"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type IconKind =
  "chart" | "doc" | "megaphone" | "bars" | "image" | "layers" | "spark" | "split";

type DualPanelConfig = {
  kind: "dual";
  leftHeading: string;
  leftItems: [string, string, string, string, string, string];
  rightHeading: string;
  rightItems: [string, string, string, string, string, string];
  pillLabel?: string;
};

type SixGridItem = {
  title: string;
  icon: IconKind;
};

type SixGridConfig = {
  kind: "grid";
  items: [SixGridItem, SixGridItem, SixGridItem, SixGridItem, SixGridItem, SixGridItem];
};

type ServiceSvgConfig = DualPanelConfig | SixGridConfig;

const CONFIGS: Record<string, ServiceSvgConfig> = {
  "amazon-marketplace-management": {
    kind: "dual",
    leftHeading: "What We Manage",
    leftItems: ["Amazon", "eBay", "Walmart", "Etsy", "Target", "Others"],
    rightHeading: "Core Operations",
    rightItems: [
      "Product Listings",
      "Catalog Management",
      "Inventory Control",
      "Order Management",
      "Account Health",
      "Compliance Monitoring",
    ],
    pillLabel: "Full-Service Management",
  },
  "marketplace-ppc-management": {
    kind: "grid",
    items: [
      { title: "Sponsored Ads", icon: "chart" },
      { title: "Sponsored Brands", icon: "megaphone" },
      { title: "Sponsored Display", icon: "layers" },
      { title: "Amazon DSP", icon: "bars" },
      { title: "ACoS & ROAS Monitoring", icon: "doc" },
      { title: "Bid & Budget Optimization", icon: "spark" },
    ],
  },
  "listing-optimization-seo": {
    kind: "dual",
    leftHeading: "What We Optimize",
    leftItems: [
      "Product Titles",
      "Bullet Points",
      "Product Descriptions",
      "Backend Search Terms",
      "ALT Text",
      "A+ Content",
    ],
    rightHeading: "SEO & Optimization",
    rightItems: [
      "Keyword Research",
      "Search Query Analysis",
      "Competitor Research",
      "Listing SEO Strategy",
      "Conversion Rate Optimization",
      "A/B Testing & Performance Analysis",
    ],
  },
  "product-image-creative-design": {
    kind: "grid",
    items: [
      { title: "Main Product Images", icon: "image" },
      { title: "Lifestyle Galleries", icon: "layers" },
      { title: "Product Infographics", icon: "spark" },
      { title: "Feature & Benefit Images", icon: "split" },
      { title: "Brand-Focused Visuals", icon: "doc" },
      { title: "Competitor Creative Analysis", icon: "chart" },
    ],
  },
  "a-plus-content-brand-store": {
    kind: "dual",
    leftHeading: "What We Design",
    leftItems: [
      "Premium A+ Content",
      "Standard A+ Modules",
      "Product Comparison Charts",
      "Brand Story Modules",
      "Amazon Brand Stores",
      "Multi-Page Storefronts",
    ],
    rightHeading: "Design & Optimization",
    rightItems: [
      "Custom A+ Layouts",
      "Brand Storytelling",
      "Product Cross-Selling",
      "Storefront Navigation",
      "Mobile-Friendly Designs",
      "Visual Brand Consistency",
    ],
  },
  "product-video-production": {
    kind: "dual",
    leftHeading: "What We Produce",
    leftItems: [
      "Amazon Sponsored Brands Videos",
      "Product Demonstration Videos",
      "Product Feature Videos",
      "Lifestyle & Use-Case Videos",
      "Marketplace Product Videos",
      "Streaming TV Ads",
    ],
    rightHeading: "Video Production",
    rightItems: [
      "Creative Concept Development",
      "Product Feature Highlights",
      "Engaging Video Storytelling",
      "Professional Video Editing",
      "Captions & Text Overlays",
      "Platform-Specific Formatting",
    ],
  },
};

export function ServiceInteractiveSvg({ slug }: { slug: string }) {
  const config = CONFIGS[slug] ?? CONFIGS["amazon-marketplace-management"];

  if (config.kind === "dual") {
    return <DualPanelVisual config={config} />;
  }

  return <SixGridVisual config={config} />;
}

function DualPanelVisual({ config }: { config: DualPanelConfig }) {
  const [activeRight, setActiveRight] = useState<number | null>(null);

  return (
    <div className="relative z-10 flex h-full flex-1 flex-col gap-2.5 select-none">
      <div className="grid flex-1 grid-cols-2 gap-2.5">
        {/* Left white sub-card */}
        <div className="flex h-full flex-col rounded-2xl border border-navy-950 bg-background p-3">
          <p className="font-display text-[11px] leading-tight font-extrabold text-navy-950 sm:text-xs">
            {config.leftHeading}
          </p>
          <ul className="mt-2.5 flex flex-1 flex-col justify-between gap-1.5">
            {config.leftItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-1.5 text-[10.5px] leading-snug font-semibold text-navy-800 sm:text-[11px]"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-500"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right white sub-card */}
        <div className="flex h-full flex-col rounded-2xl border border-navy-950 bg-background p-3">
          <p className="font-display text-[11px] leading-tight font-extrabold text-navy-950 sm:text-xs">
            {config.rightHeading}
          </p>
          <ul className="mt-2.5 flex flex-1 flex-col justify-between gap-1.5">
            {config.rightItems.map((item, idx) => {
              const isHighlighted = activeRight === idx;
              return (
                <li
                  key={item}
                  onMouseEnter={() => setActiveRight(idx)}
                  onMouseLeave={() => setActiveRight(null)}
                  className={cn(
                    "flex items-start gap-1.5 rounded-md transition-colors duration-150",
                    isHighlighted ? "text-brand-600" : "text-navy-800",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded-full bg-ice text-brand-600"
                  >
                    <Check className="size-2.5 stroke-[2.75]" />
                  </span>
                  <span className="text-[10.5px] leading-snug font-semibold sm:text-[11px]">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {config.pillLabel && (
        <div className="flex items-center justify-center gap-2 rounded-full bg-navy-950 px-3.5 py-2 text-white">
          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
            <Check className="size-2.5 stroke-[3]" aria-hidden="true" />
          </span>
          <span className="font-display text-[11px] font-extrabold tracking-tight">
            {config.pillLabel}
          </span>
        </div>
      )}
    </div>
  );
}

function SixGridVisual({ config }: { config: SixGridConfig }) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="relative z-10 grid h-full flex-1 auto-rows-fr grid-cols-2 gap-2.5 select-none">
      {config.items.map((item, idx) => {
        const isActive = selected === idx;
        return (
          <div
            key={item.title}
            onMouseEnter={() => setSelected(idx)}
            className={cn(
              "flex h-full items-center gap-2.5 rounded-xl border bg-background p-3 transition-all duration-200",
              isActive ? "border-brand-500 bg-ice/55" : "border-navy-950",
            )}
          >
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-navy-950">
              <MiniGlyph icon={item.icon} />
            </span>
            <span className="font-display text-[10.5px] leading-tight font-extrabold text-navy-950 sm:text-[11px]">
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function MiniGlyph({ icon }: { icon: IconKind }) {
  switch (icon) {
    case "chart":
    case "bars":
      return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
          <path
            d="M3.5 12V8M8 12V4.5M12.5 12V6.5M2.5 12H13.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "megaphone":
      return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
          <path
            d="M2.5 8.5L12.5 4V12.5L2.5 8.5ZM5 9.6L6.5 13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "image":
      return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
          <rect
            x="2"
            y="3"
            width="12"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="5.5" cy="6.2" r="1" fill="currentColor" />
          <path
            d="M3.5 11.5L7 8L9.8 10.2L12.5 8.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
          <path
            d="M8 2.8L13.5 5.8L8 8.8L2.5 5.8L8 2.8Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 9.5L8 12.5L13.5 9.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
          <path
            d="M8 2.2L9.6 6.4L13.8 8L9.6 9.6L8 13.8L6.4 9.6L2.2 8L6.4 6.4L8 2.2Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "split":
      return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
          <rect
            x="2.2"
            y="3"
            width="5"
            height="10"
            rx="1.2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <rect
            x="8.8"
            y="3"
            width="5"
            height="10"
            rx="1.2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
          <rect
            x="3.5"
            y="2.5"
            width="9"
            height="11"
            rx="1.8"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M6 6.2H10M6 9.2H9"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
