"use client";

import {
  AnimatePresence,
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import { type PointerEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TimeframeKey = "30D" | "90D" | "12M";

type TimeframeSnapshot = {
  key: TimeframeKey;
  label: string;
  revenue: string;
  revenueDelta: string;
  tacos: string;
  tacosDelta: string;
  roas: string;
  roasDelta: string;
  profitLift: string;
  bars: { month: string; sales: string; tacos: string; heightPct: number }[];
};

const snapshots: TimeframeSnapshot[] = [
  {
    key: "30D",
    label: "30D",
    revenue: "$412.8k",
    revenueDelta: "+38%",
    tacos: "9.4%",
    tacosDelta: "-3.8 pts",
    roas: "4.9x",
    roasDelta: "+1.4x",
    profitLift: "+1.8x YoY",
    bars: [
      { month: "W1", sales: "$84.2k", tacos: "11.2%", heightPct: 48 },
      { month: "W2", sales: "$93.6k", tacos: "10.5%", heightPct: 58 },
      { month: "W3", sales: "$101.4k", tacos: "9.9%", heightPct: 68 },
      { month: "W4", sales: "$112.0k", tacos: "9.6%", heightPct: 79 },
      { month: "W5", sales: "$121.8k", tacos: "9.4%", heightPct: 90 },
      { month: "Now", sales: "$134.5k", tacos: "9.1%", heightPct: 100 },
    ],
  },
  {
    key: "90D",
    label: "90D",
    revenue: "$1.34M",
    revenueDelta: "+62%",
    tacos: "8.6%",
    tacosDelta: "-5.2 pts",
    roas: "5.4x",
    roasDelta: "+1.9x",
    profitLift: "+2.1x YoY",
    bars: [
      { month: "M1", sales: "$178k", tacos: "13.8%", heightPct: 44 },
      { month: "M2", sales: "$204k", tacos: "12.1%", heightPct: 55 },
      { month: "M3", sales: "$226k", tacos: "10.8%", heightPct: 66 },
      { month: "M4", sales: "$248k", tacos: "9.7%", heightPct: 76 },
      { month: "M5", sales: "$279k", tacos: "9.0%", heightPct: 88 },
      { month: "M6", sales: "$312k", tacos: "8.6%", heightPct: 100 },
    ],
  },
  {
    key: "12M",
    label: "12M",
    revenue: "$5.82M",
    revenueDelta: "+114%",
    tacos: "7.9%",
    tacosDelta: "-6.4 pts",
    roas: "6.1x",
    roasDelta: "+2.5x",
    profitLift: "+2.6x YoY",
    bars: [
      { month: "Q1", sales: "$940k", tacos: "14.3%", heightPct: 42 },
      { month: "Q2", sales: "$1.18M", tacos: "11.9%", heightPct: 56 },
      { month: "Q3", sales: "$1.46M", tacos: "9.8%", heightPct: 72 },
      { month: "Prime", sales: "$1.79M", tacos: "8.7%", heightPct: 86 },
      { month: "Q4", sales: "$2.08M", tacos: "8.2%", heightPct: 95 },
      { month: "YTD", sales: "$2.31M", tacos: "7.9%", heightPct: 100 },
    ],
  },
];

const AUTO_CYCLE_MS = 4800;

export function HeroShowcase() {
  const [activeIdx, setActiveIdx] = useState(1); // Default to 90D ($1.34M, +62%)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [manualTick, setManualTick] = useState(0);
  const prefersReducedMotion = Boolean(useReducedMotion());

  // Subtle 3D cursor parallax for floating badges
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 24 });

  const badgeTopX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const badgeTopY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const badgeSideX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const badgeSideY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % snapshots.length);
    }, AUTO_CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, manualTick]);

  const current = snapshots[activeIdx] ?? snapshots[1];
  const highlightedBarIdx = hoveredBar ?? current.bars.length - 1;
  const highlightedBar =
    current.bars[highlightedBarIdx] ?? current.bars[current.bars.length - 1];

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    setIsPaused(false);
    setHoveredBar(null);
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      aria-label="Interactive Amazon growth command center"
      onPointerEnter={() => setIsPaused(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative mx-auto w-full max-w-[42rem] pt-3 lg:max-w-none"
    >
      {/* Ambient #2AABE2 glow behind bento */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/12 via-ice to-brand-600/10 blur-2xl"
      />

      {/* Floating Top-Right Obsidian KPI Popup */}
      <m.div
        style={prefersReducedMotion ? undefined : { x: badgeTopX, y: badgeTopY }}
        className="pointer-events-none absolute -top-5 right-3 z-20 hidden items-center gap-3 rounded-2xl border border-white/12 bg-[#111113] px-4 py-2.5 text-white shadow-[0_18px_40px_-10px_rgba(0,0,0,0.42)] sm:flex lg:-top-6 lg:-right-2"
      >
        <span className="inline-flex size-8 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
          <Sparkles className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[10px] font-bold tracking-[0.08em] text-white/60 uppercase">
            Category Rank
          </p>
          <p className="font-display text-xs font-extrabold text-white">
            #1 Best Seller · Top 3 KW
          </p>
        </div>
      </m.div>

      {/* Floating Middle-Left Profit Lift Popup */}
      <m.div
        style={prefersReducedMotion ? undefined : { x: badgeSideX, y: badgeSideY }}
        className="pointer-events-none absolute top-[44%] -left-3 z-20 hidden items-center gap-2.5 rounded-2xl border border-navy-950/8 bg-background px-3.5 py-2.5 shadow-[0_18px_38px_-10px_rgba(16,32,56,0.2)] xl:-left-6 xl:flex"
      >
        <span className="inline-flex size-8 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_6px_14px_-3px_rgba(42,171,226,0.55)]">
          <TrendingUp className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[10px] font-bold tracking-[0.06em] text-muted uppercase">
            Net Contribution
          </p>
          <p className="font-display text-sm font-extrabold text-navy-950">
            {current.profitLift}
          </p>
        </div>
      </m.div>

      {/* Main White Command-Center Card */}
      <div className="rounded-3xl border border-navy-950/[0.08] bg-background p-5 shadow-[0_26px_65px_-18px_rgba(16,32,56,0.16)] sm:p-6">
        {/* Top bar: Live status + Timeframe switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-brand-500" />
            </span>
            <span className="font-display text-xs font-extrabold tracking-tight text-navy-950 sm:text-sm">
              Seller Central + AMC Attribution
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Select performance window"
            className="inline-flex items-center rounded-full bg-surface p-1"
          >
            {snapshots.map((snap, i) => {
              const active = i === activeIdx;
              return (
                <button
                  key={snap.key}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => {
                    setActiveIdx(i);
                    setManualTick((prev) => prev + 1);
                  }}
                  className={cn(
                    "cursor-pointer rounded-full px-3 py-1 font-display text-xs font-bold transition-all duration-200",
                    active
                      ? "bg-[#111113] text-white shadow-xs"
                      : "text-muted hover:text-navy-950",
                  )}
                >
                  {snap.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-KPI Metric Row */}
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={current.key}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-3.5"
          >
            <div className="rounded-2xl border border-brand-500/20 bg-ice/75 p-3 sm:p-3.5">
              <p className="text-[10.5px] font-semibold text-navy-700 sm:text-xs">
                Total Sales
              </p>
              <p className="mt-1 font-display text-lg leading-none font-extrabold tracking-tight text-navy-950 sm:text-2xl">
                {current.revenue}
              </p>
              <span className="mt-2 inline-flex items-center gap-0.5 rounded-full bg-brand-500/15 px-2 py-0.5 text-[10px] font-extrabold text-brand-700">
                <ArrowUpRight className="size-3" aria-hidden="true" />
                {current.revenueDelta}
              </span>
            </div>

            <div className="rounded-2xl bg-surface p-3 sm:p-3.5">
              <p className="text-[10.5px] font-semibold text-muted sm:text-xs">
                Blended TACoS
              </p>
              <p className="mt-1 font-display text-lg leading-none font-extrabold tracking-tight text-navy-950 sm:text-2xl">
                {current.tacos}
              </p>
              <span className="mt-2 inline-flex items-center gap-0.5 rounded-full bg-brand-600/12 px-2 py-0.5 text-[10px] font-extrabold text-brand-600">
                <ArrowDownRight className="size-3" aria-hidden="true" />
                {current.tacosDelta}
              </span>
            </div>

            <div className="rounded-2xl bg-surface p-3 sm:p-3.5">
              <p className="text-[10.5px] font-semibold text-muted sm:text-xs">
                Blended ROAS
              </p>
              <p className="mt-1 font-display text-lg leading-none font-extrabold tracking-tight text-navy-950 sm:text-2xl">
                {current.roas}
              </p>
              <span className="mt-2 inline-flex items-center gap-0.5 rounded-full bg-navy-950/8 px-2 py-0.5 text-[10px] font-extrabold text-navy-950">
                <ArrowUpRight className="size-3 text-brand-500" aria-hidden="true" />
                {current.roasDelta}
              </span>
            </div>
          </m.div>
        </AnimatePresence>

        {/* Interactive Bar + Revenue Trajectory Stage */}
        <div className="mt-4 rounded-2xl border border-navy-950/[0.06] bg-surface/65 p-4">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-muted">
              Revenue vs. TACoS compression
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-2.5 py-1 font-display text-[11px] font-bold text-navy-950 shadow-2xs">
              <span className="text-brand-600">{highlightedBar.month}:</span>{" "}
              {highlightedBar.sales}
              <span className="text-muted">·</span>
              <span className="text-brand-500">{highlightedBar.tacos} TACoS</span>
            </span>
          </div>

          <div className="mt-3 grid h-28 grid-cols-6 items-end gap-2.5 pt-2 sm:gap-3.5">
            {current.bars.map((bar, idx) => {
              const isHighlighted = idx === highlightedBarIdx;
              return (
                <button
                  key={`${current.key}-${bar.month}`}
                  type="button"
                  onMouseEnter={() => setHoveredBar(idx)}
                  onFocus={() => setHoveredBar(idx)}
                  aria-label={`${bar.month}: ${bar.sales} sales at ${bar.tacos} TACoS`}
                  className="group flex h-full cursor-pointer flex-col items-center justify-end gap-1.5 focus-visible:outline-none"
                >
                  <div className="relative flex w-full flex-1 items-end">
                    <m.div
                      initial={prefersReducedMotion ? false : { height: "20%" }}
                      animate={{ height: `${bar.heightPct}%` }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 24,
                      }}
                      className={cn(
                        "w-full rounded-t-lg rounded-b-sm transition-colors duration-200",
                        isHighlighted
                          ? "bg-brand-500 shadow-[0_8px_18px_-4px_rgba(42,171,226,0.55)]"
                          : "bg-brand-500/28 group-hover:bg-brand-500/55",
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "font-display text-[10px] font-bold",
                      isHighlighted ? "text-navy-950" : "text-muted",
                    )}
                  >
                    {bar.month}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom 2-Tile Product & Studio Video Bento */}
        <div className="mt-4 grid gap-3.5 sm:grid-cols-12">
          {/* Left Bento Tile: Autoplay Creative & A+ Studio Reel */}
          <div className="group relative h-36 overflow-hidden rounded-2xl border border-navy-950/10 bg-[#111113] sm:col-span-7 sm:h-40">
            <video
              src="/videos/client-stories.mp4"
              poster="/images/testimonials/video-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111113]/85 via-[#111113]/20 to-transparent"
            />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#111113]/70 px-2.5 py-1 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-500" />
              <span className="font-display text-[9.5px] font-bold tracking-[0.08em] text-white uppercase">
                Creative & A+ Studio
              </span>
            </div>
            <div className="absolute inset-x-3.5 bottom-3 flex items-end justify-between gap-2">
              <div>
                <p className="font-display text-xs font-extrabold text-white sm:text-sm">
                  +31% Listing CVR Lift
                </p>
                <p className="text-[11px] text-white/70">Prime shopper-tested creative</p>
              </div>
              <span className="rounded-full bg-brand-500 px-2.5 py-1 font-display text-[10px] font-extrabold text-white">
                LIVE
              </span>
            </div>
          </div>

          {/* Right Bento Tile: Featured ASIN Growth Cutout */}
          <div className="relative flex h-36 flex-col justify-between overflow-hidden rounded-2xl border border-brand-500/20 bg-gradient-to-br from-ice via-background to-ice p-3.5 sm:col-span-5 sm:h-40">
            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-[#111113] px-2.5 py-0.5 font-display text-[9.5px] font-extrabold tracking-[0.06em] text-white uppercase">
                DSP + Sponsored Ads
              </span>
              <p className="mt-2 font-display text-lg leading-tight font-extrabold text-navy-950">
                44% Share
              </p>
              <p className="text-[11px] font-medium text-muted">Category SOV leader</p>
            </div>

            <Image
              src="/images/case-studies/kindred-product.png"
              alt="Top-ranking consumer kitchenware product scaled on Amazon"
              width={957}
              height={584}
              sizes="190px"
              className="pointer-events-none absolute -right-4 -bottom-2 w-36 -rotate-12 object-contain drop-shadow-[0_14px_14px_rgba(16,32,56,0.22)] sm:w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
