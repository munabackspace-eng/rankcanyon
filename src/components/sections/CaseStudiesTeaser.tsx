"use client";

import { AnimatePresence, m, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

type CaseStudiesTeaserProps = {
  items?: CaseStudy[];
};

type BrandId = "staples" | "owkar" | "native" | "levoit";

type StatDirection = "up" | "down";

type FeaturedCaseSlide = {
  slug: string;
  brandId: BrandId;
  shortBrand: string;
  bannerQuote: string;
  statPrimary: { value: number; unit: string; label: string; trend: StatDirection };
  statSecondary: { value: number; unit: string; label: string; trend: StatDirection };
  fullQuote: string;
  productImage: string;
  productWidth: number;
  productHeight: number;
  productAlt: string;
  productClassName: string;
  mobileProductClassName: string;
};

const featuredSlides: FeaturedCaseSlide[] = [
  {
    slug: "kitchenware-tacos-turnaround",
    brandId: "staples",
    shortBrand: "STAPLES",
    bannerQuote: "“RankCanyon helped us take our brand to the next level!”",
    statPrimary: { value: 68, unit: "%", label: "Increase in Sales", trend: "up" },
    statSecondary: { value: 42, unit: "%", label: "Organic Sales Growth", trend: "up" },
    fullQuote:
      "“RankCanyon helped us improve our marketplace presence and identify new growth opportunities. Their team brought the right strategies, better organization, and a clear direction to our e-commerce operations. We’ve seen a real difference in how our brand is growing.”",
    productImage: "/images/case-studies/kindred-product.png",
    productWidth: 957,
    productHeight: 584,
    productAlt: "Staples marketplace growth product showcase",
    productClassName: "w-[22rem] -rotate-[15deg] xl:w-[25.5rem]",
    mobileProductClassName: "w-[15.5rem] -rotate-[13deg] sm:w-[18.5rem]",
  },
  {
    slug: "outdoor-category-leadership",
    brandId: "owkar",
    shortBrand: "OWKAR",
    bannerQuote: "“Our sales have grown, and our business is more profitable!”",
    statPrimary: { value: 87, unit: "%", label: "Increase in Revenue", trend: "up" },
    statSecondary: { value: 32, unit: "%", label: "ACoS Reduction", trend: "down" },
    fullQuote:
      "“RankCanyon helped us improve our advertising performance and optimize our product listings. We’ve seen stronger sales, better control over advertising costs, and improved profitability. Their strategic approach has made a real difference.”",
    productImage: "/images/case-studies/atlas-product.png",
    productWidth: 361,
    productHeight: 966,
    productAlt: "OWKAR marketplace growth product showcase",
    productClassName: "w-[8.75rem] -rotate-[26deg] xl:w-[9.75rem]",
    mobileProductClassName: "w-[5.75rem] -rotate-[24deg] sm:w-[6.5rem]",
  },
  {
    slug: "beauty-eu-expansion",
    brandId: "native",
    shortBrand: "NATIVE",
    bannerQuote: "“We’ve seen a real difference since partnering with RankCanyon!”",
    statPrimary: { value: 54, unit: "%", label: "Increase in Sales", trend: "up" },
    statSecondary: { value: 29, unit: "%", label: "Conversion Rate Growth", trend: "up" },
    fullQuote:
      "“Working with RankCanyon has made managing our e-commerce operations much easier. Their team understands our goals, communicates clearly, and consistently looks for ways to improve our performance. It’s great to have a reliable growth partner.”",
    productImage: "/images/case-studies/glow-product.png",
    productWidth: 376,
    productHeight: 836,
    productAlt: "Native personal care product showcase",
    productClassName: "w-[9.25rem] -rotate-[24deg] xl:w-[10.25rem]",
    mobileProductClassName: "w-[6.25rem] -rotate-[22deg] sm:w-[7rem]",
  },
  {
    slug: "sleep-conversion-lift",
    brandId: "levoit",
    shortBrand: "LEVOIT",
    bannerQuote: "“We’ve achieved better results with a much clearer strategy!”",
    statPrimary: {
      value: 73,
      unit: "%",
      label: "Increase in Organic Sales",
      trend: "up",
    },
    statSecondary: { value: 38, unit: "%", label: "ACoS Reduction", trend: "down" },
    fullQuote:
      "“RankCanyon helped us bring more structure to our e-commerce strategy. From advertising optimization to listing improvements, their team helped us make smarter decisions and focus on the opportunities that matter most for our growth.”",
    productImage: "/images/case-studies/solace-product.png",
    productWidth: 967,
    productHeight: 616,
    productAlt: "Levoit home product showcase",
    productClassName: "w-[21.5rem] -rotate-[15deg] xl:w-[24.5rem]",
    mobileProductClassName: "w-[15rem] -rotate-[13deg] sm:w-[18rem]",
  },
];

function BrandLogoMark({ brandId }: { brandId: BrandId }) {
  const label =
    brandId === "staples"
      ? "STAPLES"
      : brandId === "owkar"
        ? "OWKAR"
        : brandId === "native"
          ? "NATIVE"
          : "LEVOIT";

  return (
    <div className="inline-flex items-start font-display text-navy-950">
      <span className="text-[1.65rem] leading-none font-extrabold tracking-tight uppercase sm:text-[1.9rem]">
        {label}
      </span>
      <span className="ml-0.5 font-sans text-[10px] leading-none font-bold text-navy-950/60">
        ®
      </span>
    </div>
  );
}

function StatTrendArrow({ direction }: { direction: StatDirection }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="ml-1 inline-block size-[1.15rem] -translate-y-1.5 text-brand-500 sm:size-[1.3rem]"
    >
      <path
        d={
          direction === "down"
            ? "M10 3.5V16.5M10 16.5L4.75 11.25M10 16.5L15.25 11.25"
            : "M10 16.5V3.5M10 3.5L4.75 8.75M10 3.5L15.25 8.75"
        }
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnimatedStatNumber({
  target,
  active,
  reducedMotion,
}: {
  target: number;
  active: boolean;
  reducedMotion: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (!active) return;

    let rafId = 0;
    const durationMs = 900;
    const startTime = performance.now();

    const tick = (now: number) => {
      if (reducedMotion) {
        setDisplayValue(target);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * target));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [target, active, reducedMotion]);

  return <>{reducedMotion ? target : displayValue}</>;
}

export function CaseStudiesTeaser(_props?: CaseStudiesTeaserProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const slide = featuredSlides[index] ?? featuredSlides[0];

  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
  };

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % featuredSlides.length);
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Featured client case studies"
      className="relative z-10 overflow-x-clip bg-background pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-8 xl:pt-6"
    >
      <Container>
        <div className="relative">
          {/* Rounded charcoal banner matching the navbar surface */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden rounded-2xl border border-white/12 bg-[#4d4d4f] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:h-[33rem] sm:rounded-[1.45rem] lg:h-[29.5rem]"
          />

          {/* Foreground 2-column composition */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-start">
            {/* Left column: Eyebrow + 3-line Quote + Bottom-left straddling product cutout */}
            <div className="px-6 pt-9 sm:px-12 sm:pt-12 lg:col-span-6 lg:pt-[3.75rem] lg:pr-6 lg:pl-16 xl:pl-20">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-[28rem]">
                  <AnimatePresence mode="wait" initial={false}>
                    <m.div
                      key={slide.slug}
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 12 * direction }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        prefersReducedMotion
                          ? undefined
                          : { opacity: 0, y: -10 * direction }
                      }
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="text-[11px] font-medium tracking-[0.06em] text-white/85 uppercase sm:text-xs">
                        FEATURED CASE STUDY /{" "}
                        <span className="font-extrabold text-brand-400">
                          {slide.shortBrand}
                        </span>
                      </p>
                      <h2 className="mt-2.5 text-[1.75rem] leading-[1.16] font-bold tracking-[-0.02em] text-white sm:text-[2.15rem] lg:text-[2.4rem]">
                        {slide.bannerQuote}
                      </h2>
                    </m.div>
                  </AnimatePresence>
                </div>

                {/* Mobile/tablet Prev & Next buttons (< lg) */}
                <div className="flex shrink-0 items-center gap-2.5 pt-1 lg:hidden">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous case study"
                    className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/18 bg-black/30 text-white shadow-md transition-all duration-200 hover:border-brand-500 hover:bg-brand-500 active:scale-95"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next case study"
                    className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/18 bg-black/30 text-white shadow-md transition-all duration-200 hover:border-brand-500 hover:bg-brand-500 active:scale-95"
                  >
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Mobile/tablet floating product cutout inside banner (< lg) */}
              <div className="my-6 flex h-44 items-center justify-center lg:hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={slide.slug}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, scale: 0.9, y: 14 }
                    }
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: 0, scale: 0.92, y: -10 }
                    }
                    transition={{ duration: 0.25 }}
                    className="pointer-events-none select-none"
                  >
                    <Image
                      src={slide.productImage}
                      alt={slide.productAlt}
                      width={slide.productWidth}
                      height={slide.productHeight}
                      sizes="290px"
                      className={cn(
                        "h-auto object-contain drop-shadow-[0_22px_22px_rgba(11,24,42,0.34)]",
                        slide.mobileProductClassName,
                      )}
                    />
                  </m.div>
                </AnimatePresence>
              </div>

              {/* Desktop floating angled product cutout straddling bottom-left edge of banner */}
              <div className="mt-5 -ml-8 hidden h-[18.5rem] items-center justify-start lg:flex xl:-ml-12">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={slide.slug}
                    initial={
                      prefersReducedMotion
                        ? false
                        : { opacity: 0, scale: 0.88, y: 24, rotate: -5 }
                    }
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: 0, scale: 0.9, y: -16, rotate: 4 }
                    }
                    transition={{ type: "spring", stiffness: 250, damping: 22 }}
                    className="pointer-events-none select-none"
                  >
                    <m.div
                      animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
                      transition={
                        prefersReducedMotion
                          ? undefined
                          : {
                              duration: 4.4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }
                      }
                    >
                      <Image
                        src={slide.productImage}
                        alt={slide.productAlt}
                        width={slide.productWidth}
                        height={slide.productHeight}
                        sizes="(min-width: 1024px) 410px, 280px"
                        className={cn(
                          "h-auto object-contain drop-shadow-[0_26px_22px_rgba(12,26,44,0.28)]",
                          slide.productClassName,
                        )}
                      />
                    </m.div>
                  </m.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right column: Desktop Prev/Next buttons + Overlapping white case study card */}
            <div className="px-4 sm:px-10 lg:col-span-6 lg:pt-7 lg:pr-16 lg:pl-4 xl:pr-20">
              {/* Desktop Prev / Next circular controls aligned with card right edge */}
              <div className="hidden items-center justify-end gap-3.5 lg:flex">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous case study"
                  className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/18 bg-black/30 text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-500 active:scale-95"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next case study"
                  className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/18 bg-black/30 text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-500 active:scale-95"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>

              {/* White overlapping card */}
              <div className="mx-auto max-w-[32rem] rounded-[1.75rem] border-2 border-[#111113] bg-background p-7 shadow-[7px_8px_0_0_#111113] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[9px_10px_0_0_#111113] sm:p-9 lg:mt-5 lg:mr-0 lg:ml-auto lg:p-10">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={slide.slug}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, x: 16 * direction }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: 0, x: -16 * direction }
                    }
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Geometric brand wordmark */}
                    <BrandLogoMark brandId={slide.brandId} />

                    {/* Animated count-up KPI row */}
                    <dl className="mt-6 grid max-w-[22rem] grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <dd className="font-display text-[2.45rem] leading-none font-extrabold tracking-tight text-navy-950 tabular-nums sm:text-[2.85rem]">
                          <AnimatedStatNumber
                            key={`${slide.slug}-primary`}
                            target={slide.statPrimary.value}
                            active={isInView}
                            reducedMotion={prefersReducedMotion}
                          />
                          <span>{slide.statPrimary.unit}</span>
                          <StatTrendArrow direction={slide.statPrimary.trend} />
                        </dd>
                        <dt className="mt-2 font-sans text-xs font-semibold text-muted sm:text-[13px]">
                          {slide.statPrimary.label}
                        </dt>
                      </div>

                      <div>
                        <dd className="font-display text-[2.45rem] leading-none font-extrabold tracking-tight text-navy-950 tabular-nums sm:text-[2.85rem]">
                          <AnimatedStatNumber
                            key={`${slide.slug}-secondary`}
                            target={slide.statSecondary.value}
                            active={isInView}
                            reducedMotion={prefersReducedMotion}
                          />
                          <span>{slide.statSecondary.unit}</span>
                          <StatTrendArrow direction={slide.statSecondary.trend} />
                        </dd>
                        <dt className="mt-2 font-sans text-xs font-semibold text-muted sm:text-[13px]">
                          {slide.statSecondary.label}
                        </dt>
                      </div>
                    </dl>

                    <hr className="my-6 border-navy-950/[0.07]" />

                    {/* Client testimonial paragraph */}
                    <blockquote className="text-sm leading-[1.72] text-muted sm:text-[15px]">
                      {slide.fullQuote}
                    </blockquote>

                    {/* Full-width solid #2AABE2 CTA button */}
                    <Link
                      href={`/case-studies#${slide.slug}`}
                      className="mt-7 flex h-12 w-full items-center justify-center rounded-[7px] bg-brand-500 px-6 font-display text-sm font-extrabold tracking-tight text-white shadow-[0_10px_24px_-6px_rgba(42,171,226,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 sm:text-base"
                    >
                      Read the Case Study
                    </Link>
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
