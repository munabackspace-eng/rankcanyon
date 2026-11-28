"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const stageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardPopVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PpcHeroStage() {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <m.div
      className="relative mx-auto h-[410px] w-full max-w-[34rem] sm:h-[470px] lg:h-[495px] lg:max-w-none"
      variants={stageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top-Center: Margin-Driven ROAS & ACoS Card */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-0 left-1/2 z-10 w-[14.25rem] -translate-x-1/2 sm:w-[16rem] xl:w-[16.75rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.15)]"
        >
          <svg viewBox="0 0 264 198" fill="none" aria-hidden="true" className="size-full">
            <circle cx="15" cy="18" r="5" fill="#2AABE2" />
            <text x="27" y="22" fill="#232020" fontSize="10.5" fontWeight="800" letterSpacing="0.04em">
              MARGIN · ROAS · TACOS
            </text>
            <rect x="180" y="6" width="74" height="22" rx="11" fill="#111113" />
            <text x="217" y="20.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
              4.8x ROAS
            </text>

            <rect x="8" y="34" width="248" height="118" rx="13" fill="#F4F4F4" />
            <line x1="22" y1="74" x2="242" y2="74" stroke="#2AABE2" strokeDasharray="4 4" strokeWidth="1.4" />
            <text x="240" y="69" textAnchor="end" fill="#1E609E" fontSize="8.5" fontWeight="800">
              Break-Even Floor
            </text>

            {[
              { x: 26, h: 42, fill: "#CAE8F6" },
              { x: 64, h: 56, fill: "#A3DBF2" },
              { x: 102, h: 70, fill: "#56B7E3" },
              { x: 140, h: 84, fill: "#2674BC" },
              { x: 178, h: 96, fill: "#2AABE2" },
              { x: 216, h: 104, fill: "#2AABE2" },
            ].map((bar) => (
              <rect
                key={bar.x}
                x={bar.x}
                y={144 - bar.h}
                width="24"
                height={bar.h}
                rx="6"
                fill={bar.fill}
              />
            ))}

            <path
              d="M 38 62 C 88 78, 146 98, 228 116"
              stroke="#111113"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="228" cy="116" r="5" fill="#111113" stroke="#FFFFFF" strokeWidth="2" />

            <rect x="8" y="160" width="120" height="30" rx="10" fill="#111113" />
            <text x="68" y="179" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
              ACoS Under Target
            </text>
            <rect x="136" y="160" width="120" height="30" rx="10" fill="#EBF5FB" stroke="#2AABE2" strokeWidth="1.5" />
            <text x="196" y="179" textAnchor="middle" fill="#1E609E" fontSize="10" fontWeight="800">
              Profit Protected
            </text>
          </svg>
        </m.div>
      </m.div>

      {/* Middle-Right: Multi-Channel Ad Control */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-[41%] right-0 z-20 w-[13.25rem] sm:w-[15rem] xl:w-[15.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 4.6, delay: 0.35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.16)]"
        >
          <svg viewBox="0 0 248 192" fill="none" aria-hidden="true" className="size-full">
            <rect x="8" y="6" width="114" height="24" rx="12" fill="#2AABE2" />
            <text x="65" y="21.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
              WEEKLY BID OPS
            </text>
            <text x="196" y="22" textAnchor="middle" fill="#1E609E" fontSize="10.5" fontWeight="800">
              5 CHANNELS
            </text>

            <rect x="8" y="38" width="232" height="104" rx="13" fill="#F4F4F4" />
            {[
              { label: "Exact-Match Winners", tag: "Scaled ↑", y: 49, bg: "#2AABE2", fg: "#FFFFFF" },
              { label: "Wasted Search Terms", tag: "Blocked ✕", y: 78, bg: "#111113", fg: "#FFFFFF" },
              { label: "Organic Rank Lift", tag: "TACoS ↓", y: 107, bg: "#EBF5FB", fg: "#1E609E" },
            ].map((r) => (
              <g key={r.label}>
                <rect x="18" y={r.y} width="212" height="23" rx="8" fill="#FFFFFF" />
                <circle cx="30" cy={r.y + 11.5} r="4" fill="#2AABE2" />
                <text x="40" y={r.y + 15} fill="#232020" fontSize="9.5" fontWeight="700">
                  {r.label}
                </text>
                <rect x="158" y={r.y + 2.5} width="66" height="18" rx="9" fill={r.bg} />
                <text x="191" y={r.y + 14.5} textAnchor="middle" fill={r.fg} fontSize="8.8" fontWeight="800">
                  {r.tag}
                </text>
              </g>
            ))}

            <rect x="8" y="150" width="232" height="32" rx="11" fill="#111113" />
            <text x="124" y="170" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
              Amazon · Walmart · eBay · Etsy · TikTok
            </text>
          </svg>
        </m.div>
      </m.div>

      {/* Bottom-Left: Ad Spend Accountability */}
      <m.div
        variants={cardPopVariants}
        className="absolute bottom-1 left-0 z-20 w-[12.5rem] sm:bottom-2 sm:w-[14rem] xl:w-[14.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 4, delay: 0.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.14)]"
        >
          <svg viewBox="0 0 232 186" fill="none" aria-hidden="true" className="size-full">
            <text x="116" y="20" textAnchor="middle" fill="#232020" fontSize="10.5" fontWeight="800" letterSpacing="0.05em">
              AD FORMAT MIX
            </text>
            <rect x="8" y="30" width="216" height="106" rx="13" fill="#F4F4F4" />
            {[
              { x: 24, h: 68, label: "SP", fill: "#2AABE2" },
              { x: 72, h: 56, label: "SBV", fill: "#2674BC" },
              { x: 120, h: 48, label: "SD", fill: "#56B7E3" },
              { x: 168, h: 64, label: "DSP", fill: "#111113" },
            ].map((b) => (
              <g key={b.label}>
                <rect x={b.x} y={120 - b.h} width="32" height={b.h} rx="6" fill={b.fill} />
                <text x={b.x + 16} y="131" textAnchor="middle" fill="#575555" fontSize="8.5" fontWeight="800">
                  {b.label}
                </text>
              </g>
            ))}
            <rect x="8" y="144" width="216" height="32" rx="11" fill="#EBF5FB" stroke="#2AABE2" strokeWidth="1.5" />
            <text x="116" y="164" textAnchor="middle" fill="#1E609E" fontSize="10" fontWeight="800">
              Zero Markup on Ad Spend
            </text>
          </svg>
        </m.div>
      </m.div>
    </m.div>
  );
}

const PPC_TABS = [
  {
    id: "acos",
    label: "Break-Even ACoS",
    value: "-32%",
    headline: "Wasted Ad Spend Cut Early",
    sub: "Bids & negatives tuned around each SKU's real margin",
    leftPill: "Bleed Paused",
    rightPill: "Margin Safe",
    bars: [86, 68, 51, 38],
  },
  {
    id: "roas",
    label: "Channel ROAS",
    value: "4.6x",
    headline: "Higher Return Across Ad Types",
    sub: "Sponsored Search, Video, Display & DSP tracked together",
    leftPill: "Intent Split",
    rightPill: "4.6x Blended",
    bars: [48, 64, 80, 94],
  },
  {
    id: "tacos",
    label: "TACoS & Organic",
    value: "8.9%",
    headline: "Paid Velocity Lifts Organic Rank",
    sub: "PPC and listing SEO aligned so paid clicks compound",
    leftPill: "Organic Share ↑",
    rightPill: "TACoS 8.9% ↓",
    bars: [76, 63, 52, 42],
  },
] as const;

export function PpcInteractiveConsole() {
  const [idx, setIdx] = useState(0);
  const current = PPC_TABS[idx];

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-950/10 bg-background p-5 shadow-[0_18px_42px_-14px_rgba(16,32,56,0.14)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="PPC metrics">
          {PPC_TABS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === idx}
              onClick={() => setIdx(i)}
              onMouseEnter={() => setIdx(i)}
              className={cn(
                "cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-bold transition-all",
                i === idx
                  ? "bg-navy-950 text-white shadow-xs"
                  : "bg-surface text-navy-600 hover:bg-ice hover:text-brand-700",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <span className="hidden rounded-full bg-ice px-3 py-1 font-display text-[11px] font-extrabold text-brand-700 sm:inline-block">
          Margin-Led PPC
        </span>
      </div>

      <svg
        viewBox="0 0 420 184"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-label={current.headline}
        className="mt-4 h-auto w-full select-none"
      >
        <rect x="4" y="8" width="142" height="168" rx="14" fill="#111113" />
        <text x="75" y="36" textAnchor="middle" fill="#A3DBF2" fontSize="9.5" fontWeight="700" letterSpacing="0.05em">
          TARGET IMPACT
        </text>
        <text x="75" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="30" fontWeight="800">
          {current.value}
        </text>
        <rect x="22" y="134" width="106" height="24" rx="12" fill="#2AABE2" />
        <text x="75" y="149.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
          Weekly Review
        </text>

        <rect
          x="158"
          y="8"
          width="258"
          height="168"
          rx="14"
          fill="#FFFFFF"
          stroke="#232020"
          strokeOpacity="0.12"
          strokeWidth="1.5"
        />
        <circle cx="176" cy="29" r="4.5" fill="#2AABE2" />
        <text x="187" y="33" fill="#232020" fontSize="11.5" fontWeight="800">
          {current.headline}
        </text>
        <text x="176" y="50" fill="#575555" fontSize="9.8" fontWeight="600">
          {current.sub}
        </text>

        {current.bars.map((val, i) => {
          const barX = 178 + i * 56;
          const barH = Math.round((val / 100) * 66);
          const barY = 134 - barH;
          return (
            <g key={i}>
              <rect x={barX} y="68" width="36" height="66" rx="7" fill="#EBF5FB" />
              <rect
                x={barX}
                y={barY}
                width="36"
                height={barH}
                rx="7"
                fill={i === 3 ? "#2AABE2" : i % 2 === 0 ? "#2674BC" : "#56B7E3"}
                className="transition-all duration-400 ease-out"
              />
              <text x={barX + 18} y={barY - 5} textAnchor="middle" fill="#232020" fontSize="9.5" fontWeight="800">
                W{i + 1}
              </text>
            </g>
          );
        })}

        <rect x="176" y="144" width="108" height="22" rx="11" fill="#F4F4F4" />
        <text x="230" y="158.5" textAnchor="middle" fill="#575555" fontSize="9.5" fontWeight="700">
          {current.leftPill}
        </text>
        <rect x="292" y="144" width="108" height="22" rx="11" fill="#2AABE2" />
        <text x="346" y="158.5" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">
          {current.rightPill}
        </text>
      </svg>
    </div>
  );
}

export function PpcFlywheelDiagram() {
  return (
    <div className="rounded-2xl border border-navy-950/10 bg-ice/60 p-5 sm:p-7">
      <svg
        viewBox="0 0 440 280"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-label="Break-even ACoS and paid-to-organic flywheel architecture"
        className="h-auto w-full select-none"
      >
        {/* Left input stack */}
        {[
          { y: 26, title: "Break-Even ACoS Floor", sub: "Calculated per SKU margin", accent: "#2AABE2" },
          { y: 108, title: "Winning Terms Scaled", sub: "Top-of-Search & exact bids", accent: "#2674BC" },
          { y: 190, title: "Bleed Terms Paused", sub: "Weekly negative pruning", accent: "#111113" },
        ].map((node) => (
          <g key={node.title}>
            <path
              d={`M 188 ${node.y + 32} C 216 ${node.y + 32}, 220 140, 246 140`}
              stroke={node.accent}
              strokeWidth="2.2"
              strokeOpacity="0.7"
            />
            <rect
              x="12"
              y={node.y}
              width="176"
              height="64"
              rx="13"
              fill="#FFFFFF"
              stroke="#232020"
              strokeOpacity="0.1"
            />
            <circle cx="30" cy={node.y + 24} r="5" fill={node.accent} />
            <text x="42" y={node.y + 27.5} fill="#232020" fontSize="11" fontWeight="800">
              {node.title}
            </text>
            <text x="30" y={node.y + 46} fill="#575555" fontSize="9.5" fontWeight="600">
              {node.sub}
            </text>
          </g>
        ))}

        {/* Center Flywheel Hub */}
        <circle cx="268" cy="140" r="28" fill="#FFFFFF" stroke="#2AABE2" strokeWidth="2" />
        <circle cx="268" cy="140" r="20" fill="#111113" />
        <text x="268" y="143.5" textAnchor="middle" fill="#2AABE2" fontSize="9.5" fontWeight="800">
          PPC+SEO
        </text>

        <line x1="296" y1="140" x2="314" y2="140" stroke="#2AABE2" strokeWidth="2.5" />

        {/* Right Compounding Outcome Card */}
        <rect x="314" y="42" width="114" height="196" rx="16" fill="#111113" />
        <text x="371" y="72" textAnchor="middle" fill="#A3DBF2" fontSize="9" fontWeight="800" letterSpacing="0.06em">
          COMPOUNDING
        </text>
        <rect x="328" y="88" width="86" height="40" rx="10" fill="#2AABE2" />
        <text x="371" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700">
          ORGANIC RANK
        </text>
        <text x="371" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">
          Climbs ↑
        </text>

        <rect x="328" y="138" width="86" height="40" rx="10" fill="#1C3F63" />
        <text x="371" y="156" textAnchor="middle" fill="#A3DBF2" fontSize="9" fontWeight="700">
          BLENDED TACOS
        </text>
        <text x="371" y="170" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">
          Drops ↓
        </text>

        <text x="371" y="210" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.8" fontSize="9.5" fontWeight="700">
          Net Profit Grows
        </text>
      </svg>
    </div>
  );
}
