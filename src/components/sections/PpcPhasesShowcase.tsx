"use client";

import {
  m,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4200;

type MetricMode = "sales" | "tacos" | "roas";

type PpcPhase = {
  id: string;
  phaseBadge: string;
  shortLabel: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  searchBarQuery: string;
  signalLabel: string;
  signalValue: string;
  salesValue: string;
  tacos: string;
  roas: string;
  barsByMode: Record<MetricMode, [number, number, number, number, number]>;
  barNotes: [string, string, string, string, string];
};

const ppcPhases: PpcPhase[] = [
  {
    id: "launch",
    phaseBadge: "PHASE 01 · LAUNCH",
    shortLabel: "Launch",
    title: "Launch & Build Visibility",
    description:
      "Establish your product's presence with strategic keyword targeting, Sponsored Products campaigns, competitor research, and launch-focused advertising. Build initial visibility and generate relevant traffic.",
    image: "/images/ppc-phases/launch.jpg",
    alt: "Wellness brand founder beside hero supplement product during Amazon PPC launch phase",
    searchBarQuery: "strategic launch keywords & sponsored products",
    signalLabel: "Velocity score",
    signalValue: "7.8 | Strong",
    salesValue: "$18.4k",
    tacos: "16.4%",
    roas: "3.1x",
    barsByMode: {
      sales: [26, 40, 48, 68, 86],
      tacos: [82, 74, 65, 56, 46],
      roas: [34, 46, 58, 70, 84],
    },
    barNotes: ["$2.1k", "$3.4k", "$3.9k", "$4.3k", "$4.7k"],
  },
  {
    id: "grow",
    phaseBadge: "PHASE 02 · GROW",
    shortLabel: "Grow",
    title: "Accelerate Sales & Rankings",
    description:
      "Expand keyword coverage, optimize bidding strategies, and scale high-performing campaigns. Increase product visibility, attract more shoppers, and build consistent sales momentum.",
    image: "/images/ppc-phases/scale.jpg",
    alt: "Athletic campaign model holding insulated drinkware during Amazon PPC growth phase",
    searchBarQuery: "keyword expansion & high-converting bid scaling",
    signalLabel: "Category rank",
    signalValue: "Top 5 BSR",
    salesValue: "$64.2k",
    tacos: "12.4%",
    roas: "4.2x",
    barsByMode: {
      sales: [36, 50, 62, 78, 92],
      tacos: [72, 62, 54, 44, 36],
      roas: [44, 56, 68, 80, 92],
    },
    barNotes: ["$9.2k", "$11.4k", "$13.1k", "$14.6k", "$15.9k"],
  },
  {
    id: "optimize",
    phaseBadge: "PHASE 03 · OPTIMIZE",
    shortLabel: "Optimize",
    title: "Improve Efficiency & Profitability",
    description:
      "Refine targeting, reduce wasted ad spend, and optimize campaign performance across placements and match types. Improve ROAS, control ACoS, and maximize advertising efficiency.",
    image: "/images/ppc-phases/optimize.jpg",
    alt: "Frosted clinical serum bottle studio product showcase during Amazon PPC optimization phase",
    searchBarQuery: "placement & match-type efficiency optimization",
    signalLabel: "Profit efficiency",
    signalValue: "9.4 | Optimal",
    salesValue: "$192.5k",
    tacos: "10.2%",
    roas: "4.8x",
    barsByMode: {
      sales: [44, 58, 72, 86, 98],
      tacos: [64, 55, 46, 39, 32],
      roas: [50, 64, 76, 88, 96],
    },
    barNotes: ["$28k", "$34k", "$39k", "$43k", "$48.5k"],
  },
  {
    id: "defend",
    phaseBadge: "PHASE 04 · DEFEND & DOMINATE",
    shortLabel: "Defend & Dominate",
    title: "Protect Market Share & Scale Further",
    description:
      "Defend branded keywords, strengthen product targeting, and expand full-funnel advertising through Sponsored Brands, Sponsored Display, and Amazon DSP. Protect your market position while unlocking new growth opportunities.",
    image: "/images/ppc-phases/defend.jpg",
    alt: "Multi-product flagship canister lineup representing category leadership and brand defense",
    searchBarQuery: "branded defense, sponsored display & amazon dsp",
    signalLabel: "Brand share",
    signalValue: "94% Defended",
    salesValue: "$448.0k",
    tacos: "8.9%",
    roas: "5.4x",
    barsByMode: {
      sales: [54, 68, 80, 91, 100],
      tacos: [56, 48, 40, 34, 28],
      roas: [58, 70, 82, 92, 100],
    },
    barNotes: ["$74k", "$83k", "$91k", "$97k", "$103k"],
  },
];

function InteractiveAnalyticsPopup({
  activePhase,
  onHoverChange,
}: {
  activePhase: PpcPhase;
  onHoverChange?: (hovered: boolean) => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [metricMode, setMetricMode] = useState<MetricMode>("sales");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [scanBar, setScanBar] = useState(4);

  // Pointer-driven multi-layer parallax
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 220, damping: 22, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 220, damping: 22, mass: 0.4 });

  const cardX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const cardY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  const signalX = useTransform(smoothX, [-0.5, 0.5], [-11, 11]);
  const signalY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const calloutX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const calloutY = useTransform(smoothY, [-0.5, 0.5], [-11, 11]);

  // Continuous bar highlight pulse so the popup feels alive even hands-free
  useEffect(() => {
    if (prefersReducedMotion || hoveredBar !== null) return;

    const interval = window.setInterval(() => {
      setScanBar((prev) => (prev + 1) % 5);
    }, 820);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, hoveredBar]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(nx);
    pointerY.set(ny);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
    setHoveredBar(null);
    onHoverChange?.(false);
  };

  const activeBars = activePhase.barsByMode[metricMode];
  const highlightedBar = hoveredBar ?? scanBar;

  const calloutTitle =
    metricMode === "sales"
      ? "Total Sales"
      : metricMode === "tacos"
        ? "Blended TACoS"
        : "Blended ROAS";

  const calloutValue =
    metricMode === "sales"
      ? activePhase.salesValue
      : metricMode === "tacos"
        ? activePhase.tacos
        : activePhase.roas;

  const toggleMode = (target: MetricMode) => {
    setMetricMode((prev) => (prev === target ? "sales" : target));
  };

  return (
    <div
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-30 -mt-10 ml-auto w-[17.5rem] select-none sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 sm:w-[21.5rem]"
    >
      {/* Floating outer levitation wrapper */}
      <m.div
        animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }
      >
        {/* Main popup card with spring entrance on every phase transition + cursor parallax */}
        <m.div
          key={activePhase.id}
          style={prefersReducedMotion ? undefined : { x: cardX, y: cardY }}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="relative rounded-2xl border border-black/7 bg-background p-3.5 shadow-[0_24px_54px_-14px_rgba(35,32,32,0.26)] sm:p-4"
        >
          {/* Top row: floating sparkline pill + detached floating Total Sales callout */}
          <div className="flex items-start justify-between gap-2">
            {/* Layer 2: Interactive Sparkline Signal Pill */}
            <m.button
              type="button"
              onClick={() => setMetricMode("sales")}
              style={prefersReducedMotion ? undefined : { x: signalX, y: signalY }}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.76, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 20, delay: 0.08 }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-navy-950 px-2.5 py-1.5 text-left text-white shadow-md"
            >
              <span className="relative flex items-center">
                <svg
                  viewBox="0 0 36 18"
                  fill="none"
                  aria-hidden="true"
                  className="h-3.5 w-7 shrink-0 text-brand-500"
                >
                  <path
                    d="M2 15L10 6L17 12L25 3L34 8"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="size-1.5 animate-ping rounded-full bg-brand-500" />
              </span>

              <div className="leading-tight">
                <p className="text-[9px] font-medium text-white/65">
                  {activePhase.signalLabel}
                </p>
                <p className="font-display text-[10.5px] font-extrabold text-white">
                  {activePhase.signalValue}
                </p>
              </div>
            </m.button>

            {/* Layer 3: Detached Floating Callout Badge (pops on phase OR metric switch) */}
            <m.div
              style={prefersReducedMotion ? undefined : { x: calloutX, y: calloutY }}
              animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 2.7,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
              }
              className="-mt-8 shrink-0 sm:-mt-10"
            >
              <m.button
                key={`${activePhase.id}-${metricMode}`}
                type="button"
                onClick={() =>
                  setMetricMode((mMode) =>
                    mMode === "sales" ? "tacos" : mMode === "tacos" ? "roas" : "sales",
                  )
                }
                initial={
                  prefersReducedMotion ? false : { opacity: 0, scale: 0.72, y: 14 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 19, delay: 0.12 }}
                className="cursor-pointer rounded-xl border-2 border-background bg-charcoal px-3.5 py-2 text-left text-white shadow-[0_14px_28px_-8px_rgba(35,32,32,0.45)] sm:px-4 sm:py-2.5"
              >
                <p className="flex items-center gap-1.5 text-[10px] font-medium text-white/70">
                  <span className="size-1.5 rounded-full bg-brand-500" />
                  {calloutTitle}
                </p>
                <p className="mt-0.5 font-display text-lg leading-none font-extrabold tracking-tight text-white sm:text-2xl">
                  {calloutValue}
                </p>
              </m.button>
            </m.div>
          </div>

          {/* Bottom row: interactive 5-bar chart with live floating mini-pill + clickable KPI tiles */}
          <div className="mt-3.5 grid grid-cols-12 items-end gap-3">
            <div className="relative col-span-7 rounded-xl bg-surface px-3 pt-7 pb-2">
              {/* Moving floating mini-popup badge above the active/hovered bar */}
              <div className="pointer-events-none absolute top-1.5 right-2.5 left-2.5 flex items-center justify-between text-[9.5px]">
                <span className="font-semibold text-navy-500">
                  Wk {highlightedBar + 1}
                </span>
                <m.span
                  key={`${activePhase.id}-${metricMode}-${highlightedBar}`}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, scale: 0.8, y: 4 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  className="rounded-full bg-navy-950 px-2 py-0.5 font-display text-[9.5px] font-extrabold text-white"
                >
                  {metricMode === "sales"
                    ? activePhase.barNotes[highlightedBar]
                    : metricMode === "tacos"
                      ? `${(activeBars[highlightedBar] * 0.22).toFixed(1)}%`
                      : `${(activeBars[highlightedBar] * 0.055).toFixed(1)}x`}
                </m.span>
              </div>

              {/* 5 Interactive Spring Bars */}
              <div className="flex h-16 items-end justify-between gap-1.5">
                {activeBars.map((height, barIdx) => {
                  const isHighlighted = barIdx === highlightedBar;
                  return (
                    <button
                      key={barIdx}
                      type="button"
                      aria-label={`Inspect week ${barIdx + 1}`}
                      onMouseEnter={() => setHoveredBar(barIdx)}
                      onFocus={() => setHoveredBar(barIdx)}
                      onClick={() => setHoveredBar(barIdx)}
                      className="group/bar flex h-full w-full cursor-pointer items-end focus:outline-none"
                    >
                      <m.span
                        initial={prefersReducedMotion ? false : { height: "12%" }}
                        animate={{
                          height: `${height}%`,
                          scaleY: isHighlighted ? 1.05 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: barIdx * 0.045,
                        }}
                        className={cn(
                          "block w-full origin-bottom rounded-t-sm transition-colors duration-200",
                          isHighlighted
                            ? "bg-brand-500 shadow-[0_0_12px_rgba(42,171,226,0.55)]"
                            : barIdx >= 2
                              ? "bg-brand-600/85 group-hover/bar:bg-brand-500"
                              : "bg-brand-500/40 group-hover/bar:bg-brand-500/75",
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive TACoS & ROAS switcher pills */}
            <div className="col-span-5 space-y-1.5">
              <m.button
                type="button"
                onClick={() => toggleMode("tacos")}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.04, x: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 360, damping: 22, delay: 0.16 }}
                className={cn(
                  "block w-full cursor-pointer rounded-lg px-2.5 py-1.5 text-left transition-colors",
                  metricMode === "tacos"
                    ? "bg-brand-500 text-white shadow-sm"
                    : "bg-ice hover:bg-brand-200/70",
                )}
              >
                <p
                  className={cn(
                    "text-[9px] font-semibold uppercase",
                    metricMode === "tacos" ? "text-white/80" : "text-navy-500",
                  )}
                >
                  TACoS
                </p>
                <p
                  className={cn(
                    "font-display text-xs font-extrabold",
                    metricMode === "tacos" ? "text-white" : "text-brand-600",
                  )}
                >
                  {activePhase.tacos}
                </p>
              </m.button>

              <m.button
                type="button"
                onClick={() => toggleMode("roas")}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.04, x: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 360, damping: 22, delay: 0.22 }}
                className={cn(
                  "block w-full cursor-pointer rounded-lg px-2.5 py-1.5 text-left transition-colors",
                  metricMode === "roas"
                    ? "bg-navy-950 text-white shadow-sm"
                    : "bg-surface hover:bg-navy-100",
                )}
              >
                <p
                  className={cn(
                    "text-[9px] font-semibold uppercase",
                    metricMode === "roas" ? "text-white/75" : "text-navy-500",
                  )}
                >
                  ROAS
                </p>
                <p
                  className={cn(
                    "font-display text-xs font-extrabold",
                    metricMode === "roas" ? "text-brand-500" : "text-navy-950",
                  )}
                >
                  {activePhase.roas}
                </p>
              </m.button>
            </div>
          </div>
        </m.div>
      </m.div>
    </div>
  );
}

function PhaseVisualStage({
  activeIndex,
  onPopupHoverChange,
}: {
  activeIndex: number;
  onPopupHoverChange?: (hovered: boolean) => void;
}) {
  const activePhase = ppcPhases[activeIndex] ?? ppcPhases[0];

  return (
    <div className="relative pb-10 sm:pb-14 lg:pr-5 lg:pb-12 xl:pb-14">
      {/* Main rounded visual frame — clean neutral shadow, zero blue border */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] bg-navy-950 shadow-[0_24px_56px_-16px_rgba(35,32,32,0.24)] sm:rounded-[1.75rem] lg:aspect-auto lg:h-[min(25.8rem,44dvh)]">
        {/* Top marketplace search header bar */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center gap-3 bg-gradient-to-b from-navy-950/75 via-navy-950/35 to-transparent px-4 pt-3.5 pb-6 sm:gap-4 sm:px-6 sm:pt-4">
          {/* Marketplace wordmark + cyan smile curve */}
          <div className="shrink-0 select-none">
            <span className="block font-display text-sm leading-none font-extrabold tracking-tight text-white sm:text-base">
              marketplace
            </span>
            <svg
              viewBox="0 0 84 12"
              fill="none"
              aria-hidden="true"
              className="mt-0.5 h-2.5 w-16 text-brand-500 sm:w-20"
            >
              <path
                d="M4 3C24 10 56 10 78 3"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M73 1.5L79.5 3L75.5 8"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Search bar displaying active phase's keyword focus */}
          <div className="flex min-w-0 flex-1 items-center justify-between overflow-hidden rounded-lg border border-white/12 bg-navy-950/85 pl-3.5 backdrop-blur-md">
            <span className="truncate py-1.5 font-sans text-[11px] font-medium text-white/85 sm:py-2 sm:text-xs">
              {activePhase.searchBarQuery}
            </span>
            <span className="flex h-7 w-8 shrink-0 items-center justify-center bg-brand-500 text-white sm:h-8 sm:w-9">
              <Search className="size-3.5 sm:size-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* Crossfading phase studio image stack */}
        {ppcPhases.map((phase, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <Image
              key={phase.id}
              src={phase.image}
              alt={phase.alt}
              width={1376}
              height={768}
              sizes="(min-width: 1024px) 56vw, 94vw"
              className={cn(
                "absolute inset-0 size-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]",
                isCurrent ? "z-10 scale-100 opacity-100" : "z-0 scale-105 opacity-0",
              )}
            />
          );
        })}

        {/* Active phase pill in bottom-left of image frame */}
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 z-20 sm:bottom-5 sm:left-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/80 px-3.5 py-1.5 font-display text-[11px] font-extrabold tracking-wide text-white backdrop-blur-md">
            <span className="size-2 rounded-full bg-brand-500" />
            {activePhase.phaseBadge}
          </span>
        </div>
      </div>

      {/* Interactive moving bottom-right analytics popup */}
      <InteractiveAnalyticsPopup
        activePhase={activePhase}
        onHoverChange={onPopupHoverChange}
      />
    </div>
  );
}

export function PpcPhasesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollPhaseRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const [itemOffsets, setItemOffsets] = useState<number[]>([0, 0, 0, 0]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Sync phase when user scrolls across phase boundaries inside the pinned runway
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress <= 0.005 || progress >= 0.995) {
      lastScrollPhaseRef.current = null;
      return;
    }

    const clamped = Math.max(0, Math.min(0.9999, progress));
    const scrollIdx = Math.floor(clamped * ppcPhases.length);

    if (scrollIdx !== lastScrollPhaseRef.current) {
      lastScrollPhaseRef.current = scrollIdx;
      setActiveIndex(scrollIdx);
      setCycleKey((k) => k + 1);
    }
  });

  // Autoplay loop: pauses gently while interacting directly with the popup widget
  useEffect(() => {
    if (prefersReducedMotion || isPopupHovered) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % ppcPhases.length);
      setCycleKey((k) => k + 1);
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, cycleKey, prefersReducedMotion, isPopupHovered]);

  // Measure exact item offsets inside the desktop phase track for pixel-exact vertical sliding
  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const measure = () => {
      const offsets = itemRefs.current.map((el) => el?.offsetTop ?? 0);
      setItemOffsets(offsets);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(trackEl);
    return () => observer.disconnect();
  }, []);

  const selectPhase = (idx: number) => {
    setActiveIndex(idx);
    setCycleKey((k) => k + 1);
  };

  const activeOffsetY = itemOffsets[activeIndex] ?? 0;
  const activePhase = ppcPhases[activeIndex] ?? ppcPhases[0];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ppc-phases-heading"
      className="relative z-20 bg-background text-foreground lg:h-[340vh]"
    >
      {/* Entire section stays pinned & centered in the middle of the viewport while scrolling */}
      <div className="pt-8 pb-8 sm:pt-10 sm:pb-12 lg:sticky lg:top-0 lg:flex lg:min-h-dvh lg:items-center lg:py-8">
        <Container className="w-full">
          {/* Top-left section header */}
          <div className="max-w-5xl">
            <h2
              id="ppc-phases-heading"
              className="text-3xl leading-[1.08] font-extrabold tracking-tight text-navy-950 sm:text-5xl lg:text-[2.65rem] xl:text-[3.35rem] 2xl:text-[3.6rem]"
            >
              Turn Your Amazon Advertising into a{" "}
              <span className="text-brand-500">Profitable Growth</span>
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base xl:text-lg">
              Every stage of your Amazon journey requires a different advertising
              strategy. RankCanyon combines data-driven campaign management, continuous
              optimization, and full-funnel advertising to help brands increase
              visibility, improve efficiency, and drive profitable sales.
            </p>
          </div>

          {/* Desktop (lg+): Vertically centered 2-column stage locked in middle of viewport */}
          <div className="mt-10 hidden lg:mt-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 xl:mt-9 xl:gap-12">
            {/* Left masked phase text window: active phase crisp on top, next phase peeking softly faded below */}
            <div className="relative lg:col-span-5">
              <div className="relative h-[18rem] overflow-hidden xl:h-[20rem]">
                <div
                  ref={trackRef}
                  style={{ transform: `translateY(-${activeOffsetY}px)` }}
                  className="space-y-9 transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform xl:space-y-10"
                >
                  {ppcPhases.map((phase, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={phase.id}
                        ref={(el) => {
                          itemRefs.current[idx] = el;
                        }}
                        onClick={() => selectPhase(idx)}
                        className={cn(
                          "cursor-pointer transition-opacity duration-500",
                          isActive ? "opacity-100" : "opacity-25 hover:opacity-50",
                        )}
                      >
                        <p className="mb-1.5 font-display text-xs font-extrabold tracking-[0.08em] text-brand-600 uppercase">
                          {phase.phaseBadge}
                        </p>

                        <h3
                          className={cn(
                            "text-xl leading-snug font-extrabold transition-colors duration-500 sm:text-2xl xl:text-[1.7rem]",
                            isActive ? "text-navy-950" : "text-navy-950/70",
                          )}
                        >
                          {phase.title}
                        </h3>

                        <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                          {phase.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Soft bottom white fade mask matching reference screenshot */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent"
                />
              </div>

              {/* 4-step autoplay progress pills */}
              <div className="mt-5 flex items-center gap-2">
                {ppcPhases.map((phase, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={phase.id}
                      type="button"
                      aria-label={`View ${phase.title} phase`}
                      onClick={() => selectPhase(idx)}
                      className={cn(
                        "h-1.5 overflow-hidden rounded-full bg-navy-950/14 transition-all duration-400",
                        isActive ? "w-11" : "w-2.5 hover:bg-navy-950/30",
                      )}
                    >
                      {isActive && (
                        <m.span
                          key={`${cycleKey}-${isPopupHovered ? "paused" : "play"}`}
                          initial={{
                            scaleX: prefersReducedMotion || isPopupHovered ? 1 : 0,
                          }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration:
                              prefersReducedMotion || isPopupHovered
                                ? 0
                                : AUTOPLAY_MS / 1000,
                            ease: "linear",
                          }}
                          className="block size-full origin-left rounded-full bg-brand-500"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right morphing visual stage */}
            <div className="lg:col-span-7">
              <PhaseVisualStage
                activeIndex={activeIndex}
                onPopupHoverChange={setIsPopupHovered}
              />
            </div>
          </div>

          {/* Mobile & Tablet (< lg): Interactive auto-playing phase switcher */}
          <div className="mt-10 lg:hidden">
            <div className="flex flex-wrap gap-2">
              {ppcPhases.map((phase, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => selectPhase(idx)}
                    className={cn(
                      "rounded-full px-4 py-1.5 font-display text-xs font-extrabold transition-colors sm:text-sm",
                      isActive
                        ? "bg-brand-500 text-white"
                        : "bg-surface text-navy-600 hover:text-navy-950",
                    )}
                  >
                    {phase.shortLabel}
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <p className="mb-1.5 font-display text-xs font-extrabold tracking-[0.08em] text-brand-600 uppercase">
                {activePhase.phaseBadge}
              </p>
              <h3 className="text-2xl leading-tight font-extrabold text-navy-950 sm:text-3xl">
                {activePhase.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {activePhase.description}
              </p>
            </div>

            <div className="mt-7">
              <PhaseVisualStage
                activeIndex={activeIndex}
                onPopupHoverChange={setIsPopupHovered}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
