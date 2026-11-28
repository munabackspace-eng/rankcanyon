"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const stageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardPopVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ---------------------------------------------------------------------------
 * 1. ORGANIC RANKING HERO STAGE + RELEVANCE/VELOCITY CONSOLE
 * ------------------------------------------------------------------------- */
export function OrganicHeroStage() {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <m.div
      className="relative mx-auto h-[410px] w-full max-w-[34rem] sm:h-[470px] lg:h-[495px] lg:max-w-none"
      variants={stageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top-Center: Page-One Keyword Rank Tracker */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-0 left-1/2 z-10 w-[14.5rem] -translate-x-1/2 sm:w-[16.25rem] xl:w-[17rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.15)]"
        >
          <svg viewBox="0 0 264 196" fill="none" aria-hidden="true" className="size-full">
            <circle cx="15" cy="18" r="5" fill="#2AABE2" />
            <text x="27" y="22" fill="#232020" fontSize="10.5" fontWeight="800" letterSpacing="0.04em">
              WEEKLY RANK TRACKER
            </text>
            <rect x="184" y="6" width="72" height="22" rx="11" fill="#2AABE2" />
            <text x="220" y="20.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
              PAGE ONE
            </text>

            <rect x="8" y="34" width="248" height="114" rx="13" fill="#F4F4F4" />
            <path
              d="M 26 126 C 78 118, 126 88, 174 64 C 200 52, 220 48, 238 46 L 238 136 L 26 136 Z"
              fill="#2AABE2"
              fillOpacity="0.16"
            />
            <path
              d="M 26 126 C 78 118, 126 88, 174 64 C 200 52, 220 48, 238 46"
              stroke="#2AABE2"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {[
              { x: 42, y: 122, rank: "#28" },
              { x: 136, y: 83, rank: "#7" },
              { x: 228, y: 47, rank: "#1" },
            ].map((pt, i) => (
              <g key={pt.rank}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={i === 2 ? "6.5" : "5"}
                  fill={i === 2 ? "#2AABE2" : "#111113"}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                <text x={pt.x} y={pt.y - 10} textAnchor="middle" fill="#232020" fontSize="9.5" fontWeight="800">
                  {pt.rank}
                </text>
              </g>
            ))}

            <rect x="8" y="156" width="120" height="32" rx="10" fill="#111113" />
            <text x="68" y="176" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">
              Indexed 98.6%
            </text>
            <rect x="136" y="156" width="120" height="32" rx="10" fill="#EBF5FB" stroke="#2AABE2" strokeWidth="1.5" />
            <text x="196" y="176" textAnchor="middle" fill="#1E609E" fontSize="10.5" fontWeight="800">
              100% Compliant
            </text>
          </svg>
        </m.div>
      </m.div>

      {/* Middle-Right: Search Relevance & Listing Fields */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-[42%] right-0 z-20 w-[13.25rem] sm:w-[15rem] xl:w-[15.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 4.6, delay: 0.35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.16)]"
        >
          <svg viewBox="0 0 248 188" fill="none" aria-hidden="true" className="size-full">
            <rect x="8" y="6" width="114" height="22" rx="11" fill="#111113" />
            <text x="65" y="20.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
              LISTING SEO
            </text>
            <text x="196" y="21" textAnchor="middle" fill="#1E609E" fontSize="10" fontWeight="800">
              HIGH INTENT
            </text>

            <rect x="8" y="36" width="232" height="104" rx="12" fill="#F4F4F4" />
            {[
              { label: "Titles & Bullet Priority", tag: "Mapped", y: 47 },
              { label: "Backend & Item Specifics", tag: "Indexed", y: 76 },
              { label: "Conversion Blocker Fixes", tag: "+CVR", y: 105 },
            ].map((row, idx) => (
              <g key={row.label}>
                <rect x="16" y={row.y} width="216" height="23" rx="7.5" fill="#FFFFFF" />
                <circle cx="28" cy={row.y + 11.5} r="4" fill="#2AABE2" />
                <text x="38" y={row.y + 15} fill="#232020" fontSize="9.5" fontWeight="700">
                  {row.label}
                </text>
                <rect
                  x="174"
                  y={row.y + 3}
                  width="50"
                  height="17"
                  rx="8.5"
                  fill={idx === 0 ? "#2AABE2" : "#EBF5FB"}
                />
                <text
                  x="199"
                  y={row.y + 14.5}
                  textAnchor="middle"
                  fill={idx === 0 ? "#FFFFFF" : "#1E609E"}
                  fontSize="8.5"
                  fontWeight="800"
                >
                  {row.tag}
                </text>
              </g>
            ))}

            <rect x="8" y="148" width="232" height="32" rx="10" fill="#2AABE2" />
            <text x="124" y="168" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
              Amazon · Walmart · eBay · Etsy
            </text>
          </svg>
        </m.div>
      </m.div>

      {/* Bottom-Left: Organic Revenue Share */}
      <m.div
        variants={cardPopVariants}
        className="absolute bottom-1 left-0 z-20 w-[12.5rem] sm:bottom-2 sm:w-[14rem] xl:w-[14.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 4, delay: 0.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.14)]"
        >
          <svg viewBox="0 0 228 180" fill="none" aria-hidden="true" className="size-full">
            <text x="114" y="19" textAnchor="middle" fill="#232020" fontSize="10" fontWeight="800" letterSpacing="0.05em">
              ORGANIC SALES GROWTH
            </text>
            <rect x="8" y="28" width="212" height="104" rx="12" fill="#F4F4F4" />
            {[
              { x: 26, h: 36, label: "M1", fill: "#A3DBF2" },
              { x: 74, h: 52, label: "M2", fill: "#56B7E3" },
              { x: 122, h: 68, label: "M3", fill: "#2674BC" },
              { x: 170, h: 82, label: "M4", fill: "#2AABE2" },
            ].map((b) => (
              <g key={b.label}>
                <rect x={b.x} y={118 - b.h} width="32" height={b.h} rx="6" fill={b.fill} />
                <text x={b.x + 16} y="128" textAnchor="middle" fill="#575555" fontSize="8.5" fontWeight="800">
                  {b.label}
                </text>
              </g>
            ))}
            <rect x="8" y="140" width="212" height="30" rx="10" fill="#111113" />
            <text x="114" y="159" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
              Sales Without Per-Click Cost
            </text>
          </svg>
        </m.div>
      </m.div>
    </m.div>
  );
}

const SEO_PILLARS = [
  {
    id: "relevance",
    tab: "Keyword Relevance",
    score: 97,
    headline: "Buyer-Intent Keyword Architecture",
    sub: "Titles, bullets, backend search terms & item specifics",
    badgeA: "Indexed Terms",
    badgeB: "Page-One Focus",
    bars: [76, 86, 93, 97],
  },
  {
    id: "velocity",
    tab: "Sales Conversion",
    score: 94,
    headline: "Conversion Fixes That Hold Rank",
    sub: "Images, pricing, copy & A+ aligned so clicks convert",
    badgeA: "Higher CVR",
    badgeB: "Stronger Rank",
    bars: [68, 80, 89, 94],
  },
  {
    id: "tracking",
    tab: "Weekly Tracking",
    score: 99,
    headline: "Weekly Position & Visibility Watch",
    sub: "Spot rank gains, drops & competitor shifts early",
    badgeA: "Every Target Term",
    badgeB: "Weekly Updates",
    bars: [85, 91, 96, 99],
  },
] as const;

export function OrganicVelocityInteractive() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SEO_PILLARS[activeIdx];
  const circumference = 176;
  const dashOffset = circumference * (1 - active.score / 100);

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-navy-950/10 bg-background p-5 shadow-[0_18px_42px_-14px_rgba(16,32,56,0.14)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Organic ranking factors">
          {SEO_PILLARS.map((pillar, idx) => (
            <button
              key={pillar.id}
              type="button"
              role="tab"
              aria-selected={idx === activeIdx}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => setActiveIdx(idx)}
              className={cn(
                "cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-bold transition-all",
                idx === activeIdx
                  ? "bg-navy-950 text-white shadow-xs"
                  : "bg-surface text-navy-600 hover:bg-ice hover:text-brand-700",
              )}
            >
              {pillar.tab}
            </button>
          ))}
        </div>
        <span className="hidden rounded-full bg-ice px-3 py-1 font-display text-[11px] font-extrabold text-brand-700 sm:inline-block">
          100% Policy Safe
        </span>
      </div>

      <svg viewBox="0 0 420 184" fill="none" aria-label={active.headline} className="mt-4 h-auto w-full select-none">
        <rect x="4" y="8" width="142" height="168" rx="14" fill="#F4F4F4" />
        <text x="75" y="31" textAnchor="middle" fill="#575555" fontSize="9.5" fontWeight="700" letterSpacing="0.05em">
          RANK SIGNAL
        </text>
        <circle cx="75" cy="92" r="28" stroke="#232020" strokeOpacity="0.1" strokeWidth="7" />
        <circle
          cx="75"
          cy="92"
          r="28"
          stroke="#2AABE2"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 75 92)"
          className="transition-[stroke-dashoffset] duration-500 ease-out"
        />
        <text x="75" y="97" textAnchor="middle" fill="#232020" fontSize="16" fontWeight="800">
          {active.score}%
        </text>
        <rect x="20" y="138" width="110" height="24" rx="12" fill="#111113" />
        <text x="75" y="153.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
          Organic Engine
        </text>

        <rect x="158" y="8" width="258" height="168" rx="14" fill="#FFFFFF" stroke="#232020" strokeOpacity="0.12" strokeWidth="1.5" />
        <circle cx="176" cy="29" r="4.5" fill="#2AABE2" />
        <text x="187" y="33" fill="#232020" fontSize="11.5" fontWeight="800">
          {active.headline}
        </text>
        <text x="176" y="50" fill="#575555" fontSize="9.8" fontWeight="600">
          {active.sub}
        </text>

        {active.bars.map((val, i) => {
          const bx = 178 + i * 56;
          const bh = Math.round((val / 100) * 66);
          const by = 134 - bh;
          return (
            <g key={i}>
              <rect x={bx} y="68" width="36" height="66" rx="7" fill="#EBF5FB" />
              <rect
                x={bx}
                y={by}
                width="36"
                height={bh}
                rx="7"
                fill={i === 3 ? "#2AABE2" : i % 2 === 0 ? "#2674BC" : "#56B7E3"}
                className="transition-all duration-300"
              />
              <text x={bx + 18} y={by - 5} textAnchor="middle" fill="#232020" fontSize="9.5" fontWeight="800">
                {val}%
              </text>
            </g>
          );
        })}

        <rect x="176" y="144" width="108" height="22" rx="11" fill="#F4F4F4" />
        <text x="230" y="158.5" textAnchor="middle" fill="#575555" fontSize="9.5" fontWeight="700">
          {active.badgeA}
        </text>
        <rect x="292" y="144" width="108" height="22" rx="11" fill="#2AABE2" />
        <text x="346" y="158.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
          {active.badgeB}
        </text>
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * 3. PRODUCT LAUNCH HERO STAGE + END-TO-END LAUNCH CONSOLE
 * ------------------------------------------------------------------------- */
export function LaunchHeroStage() {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <m.div
      className="relative mx-auto h-[410px] w-full max-w-[34rem] sm:h-[470px] lg:h-[495px] lg:max-w-none"
      variants={stageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top-Center: 90-Day Launch Momentum Curve */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-0 left-1/2 z-10 w-[14.5rem] -translate-x-1/2 sm:w-[16.25rem] xl:w-[17rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.15)]"
        >
          <svg viewBox="0 0 264 196" fill="none" aria-hidden="true" className="size-full">
            <circle cx="15" cy="18" r="5" fill="#2AABE2" />
            <text x="27" y="22" fill="#232020" fontSize="10.5" fontWeight="800" letterSpacing="0.04em">
              FIRST 90 DAYS
            </text>
            <rect x="180" y="6" width="76" height="22" rx="11" fill="#111113" />
            <text x="218" y="20.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
              END-TO-END
            </text>

            <rect x="8" y="34" width="248" height="114" rx="13" fill="#F4F4F4" />
            <path
              d="M 28 128 C 82 120, 134 90, 184 64 C 208 52, 224 47, 238 45 L 238 136 L 28 136 Z"
              fill="#2AABE2"
              fillOpacity="0.16"
            />
            <path
              d="M 28 128 C 82 120, 134 90, 184 64 C 208 52, 224 47, 238 45"
              stroke="#2AABE2"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {[
              { x: 42, y: 124, label: "Idea" },
              { x: 136, y: 88, label: "Launch" },
              { x: 228, y: 46, label: "Day 90" },
            ].map((node, i) => (
              <g key={node.label}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={i === 2 ? "6.5" : "5"}
                  fill={i === 2 ? "#2AABE2" : "#111113"}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                <text x={node.x} y="145" textAnchor="middle" fill="#232020" fontSize="8.5" fontWeight="800">
                  {node.label}
                </text>
              </g>
            ))}

            <rect x="8" y="156" width="120" height="32" rx="10" fill="#2AABE2" />
            <text x="68" y="176" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
              Listing + Launch Ads
            </text>
            <rect x="136" y="156" width="120" height="32" rx="10" fill="#111113" />
            <text x="196" y="176" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
              Vine Early Reviews
            </text>
          </svg>
        </m.div>
      </m.div>

      {/* Middle-Right: Pre-Launch Checklist Card */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-[42%] right-0 z-20 w-[13.25rem] sm:w-[15rem] xl:w-[15.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 4.6, delay: 0.35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.16)]"
        >
          <svg viewBox="0 0 248 188" fill="none" aria-hidden="true" className="size-full">
            <rect x="8" y="6" width="118" height="22" rx="11" fill="#2AABE2" />
            <text x="67" y="20.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
              LAUNCH CHECKLIST
            </text>
            <text x="198" y="21" textAnchor="middle" fill="#232020" fontSize="10" fontWeight="800">
              ONE TEAM
            </text>

            <rect x="8" y="36" width="232" height="104" rx="12" fill="#F4F4F4" />
            {[
              { label: "Demand & Margin Check", status: "Done", y: 47 },
              { label: "Images, Copy & A+ Ready", status: "Done", y: 76 },
              { label: "Compliance & Variations", status: "Ready", y: 105 },
            ].map((row) => (
              <g key={row.label}>
                <rect x="16" y={row.y} width="216" height="23" rx="7.5" fill="#FFFFFF" />
                <circle cx="28" cy={row.y + 11.5} r="4" fill="#2AABE2" />
                <text x="38" y={row.y + 15} fill="#232020" fontSize="9.5" fontWeight="700">
                  {row.label}
                </text>
                <rect x="178" y={row.y + 3} width="46" height="17" rx="8.5" fill="#EBF5FB" />
                <text x="201" y={row.y + 14.5} textAnchor="middle" fill="#1E609E" fontSize="8.5" fontWeight="800">
                  {row.status}
                </text>
              </g>
            ))}

            <rect x="8" y="148" width="232" height="32" rx="10" fill="#111113" />
            <text x="124" y="168" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
              Zero Gaps Between Freelancers
            </text>
          </svg>
        </m.div>
      </m.div>

      {/* Bottom-Left: 90-Day Post-Launch Tracking */}
      <m.div
        variants={cardPopVariants}
        className="absolute bottom-1 left-0 z-20 w-[12.5rem] sm:bottom-2 sm:w-[14rem] xl:w-[14.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 4, delay: 0.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.14)]"
        >
          <svg viewBox="0 0 228 180" fill="none" aria-hidden="true" className="size-full">
            <text x="114" y="19" textAnchor="middle" fill="#232020" fontSize="10" fontWeight="800" letterSpacing="0.05em">
              90-DAY MOMENTUM
            </text>
            <rect x="8" y="28" width="212" height="104" rx="12" fill="#F4F4F4" />
            {[
              { x: 26, h: 34, label: "W2", fill: "#CAE8F6" },
              { x: 74, h: 52, label: "W4", fill: "#56B7E3" },
              { x: 122, h: 68, label: "W8", fill: "#2674BC" },
              { x: 170, h: 84, label: "W12", fill: "#2AABE2" },
            ].map((b) => (
              <g key={b.label}>
                <rect x={b.x} y={118 - b.h} width="32" height={b.h} rx="6" fill={b.fill} />
                <text x={b.x + 16} y="128" textAnchor="middle" fill="#575555" fontSize="8.5" fontWeight="800">
                  {b.label}
                </text>
              </g>
            ))}
            <rect x="8" y="140" width="212" height="30" rx="10" fill="#EBF5FB" stroke="#2AABE2" strokeWidth="1.5" />
            <text x="114" y="159" textAnchor="middle" fill="#1E609E" fontSize="10" fontWeight="800">
              Weekly Sales &amp; Rank Tracking
            </text>
          </svg>
        </m.div>
      </m.div>
    </m.div>
  );
}

const LAUNCH_STAGES = [
  {
    id: "pre",
    tab: "Pre-Launch Setup",
    title: "Demand, Sourcing, Compliance & Listing",
    sub: "Profit-after-fees check, category approval, images, copy & A+",
    metric: "100% Ready",
    bars: [72, 84, 92, 100],
  },
  {
    id: "go",
    tab: "Launch & Vine",
    title: "Targeted Launch Ads & Compliant Reviews",
    sub: "Focused keyword PPC, coupons & Amazon Vine enrollment",
    metric: "Day 1–30 Push",
    bars: [58, 76, 88, 96],
  },
  {
    id: "post",
    tab: "90-Day Scale",
    title: "Weekly Adjustments & Day-90 Growth Plan",
    sub: "Continuous price, listing & ad tuning so rankings hold",
    metric: "Steady Sales",
    bars: [64, 79, 91, 98],
  },
] as const;

export function LaunchEndToEndConsole() {
  const [stageIdx, setStageIdx] = useState(0);
  const current = LAUNCH_STAGES[stageIdx];

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-navy-950/10 bg-background p-5 shadow-[0_18px_42px_-14px_rgba(16,32,56,0.14)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="End-to-end launch phases">
          {LAUNCH_STAGES.map((stage, i) => (
            <button
              key={stage.id}
              type="button"
              role="tab"
              aria-selected={i === stageIdx}
              onClick={() => setStageIdx(i)}
              onMouseEnter={() => setStageIdx(i)}
              className={cn(
                "cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-bold transition-all",
                i === stageIdx
                  ? "bg-navy-950 text-white shadow-xs"
                  : "bg-surface text-navy-600 hover:bg-ice hover:text-brand-700",
              )}
            >
              {stage.tab}
            </button>
          ))}
        </div>
        <span className="hidden rounded-full bg-ice px-3 py-1 font-display text-[11px] font-extrabold text-brand-700 sm:inline-block">
          {current.metric}
        </span>
      </div>

      <svg viewBox="0 0 420 182" fill="none" aria-label={current.title} className="mt-4 h-auto w-full select-none">
        <rect x="4" y="8" width="412" height="166" rx="14" fill="#F4F4F4" />
        <circle cx="24" cy="30" r="4.5" fill="#2AABE2" />
        <text x="36" y="34" fill="#232020" fontSize="11.5" fontWeight="800">
          {current.title}
        </text>
        <text x="24" y="51" fill="#575555" fontSize="9.8" fontWeight="600">
          {current.sub}
        </text>

        {/* Coordinated Pipeline Bar */}
        {[
          { x: 24, label: "Research", active: stageIdx >= 0 },
          { x: 122, label: "Listing & A+", active: stageIdx >= 0 },
          { x: 220, label: "Ads & Vine", active: stageIdx >= 1 },
          { x: 318, label: "Day-90 Plan", active: stageIdx >= 2 },
        ].map((step, i) => (
          <g key={step.label}>
            <rect
              x={step.x}
              y="72"
              width="82"
              height="48"
              rx="11"
              fill={step.active ? "#FFFFFF" : "#EAEAEA"}
              stroke={step.active ? "#2AABE2" : "#232020"}
              strokeOpacity={step.active ? "1" : "0.1"}
              strokeWidth="1.5"
            />
            <text
              x={step.x + 41}
              y="93"
              textAnchor="middle"
              fill={step.active ? "#2674BC" : "#8C8A8A"}
              fontSize="8.5"
              fontWeight="800"
            >
              0{i + 1}
            </text>
            <text
              x={step.x + 41}
              y="108"
              textAnchor="middle"
              fill="#232020"
              fontSize="9.5"
              fontWeight="800"
            >
              {step.label}
            </text>
          </g>
        ))}

        <rect x="24" y="134" width="182" height="26" rx="13" fill="#111113" />
        <text x="115" y="150.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
          One Team · Shared Keyword Targets
        </text>
        <rect x="218" y="134" width="182" height="26" rx="13" fill="#2AABE2" />
        <text x="309" y="150.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
          100% Marketplace Compliant
        </text>
      </svg>
    </div>
  );
}
