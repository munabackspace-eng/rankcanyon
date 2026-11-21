"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type TimelineStepItem = {
  step: string;
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: TimelineStepItem[];
};

/* ---------------------------------------------------------------------------
 * Step 1 Interactive SVG: Amazon Account Diagnostic & Audit Scanner
 * ------------------------------------------------------------------------- */
const AUDIT_PILLARS = [
  {
    id: "ppc",
    label: "PPC Waste",
    score: 94,
    headline: "31% Wasted Ad Spend Isolated",
    sub: "+$28.4K/mo recoverable contribution profit",
    currentLabel: "Current 18.4%",
    targetLabel: "Target 8.9%",
    bars: [84, 68, 42, 36],
  },
  {
    id: "seo",
    label: "Listing SEO",
    score: 89,
    headline: "42 High-Intent Keyword Gaps",
    sub: "+38% organic Top-of-Search rank velocity",
    currentLabel: "Indexed 54%",
    targetLabel: "Target 98%",
    bars: [48, 74, 88, 95],
  },
  {
    id: "fba",
    label: "Buy Box & FBA",
    score: 97,
    headline: "99.6% Buy Box & IPI Shield",
    sub: "Zero stockout risk across 1P & 3P SKUs",
    currentLabel: "Buy Box 91%",
    targetLabel: "Locked 99.6%",
    bars: [72, 86, 92, 98],
  },
  {
    id: "profit",
    label: "Unit Margin",
    score: 92,
    headline: "+6.4 pts Net Margin Expansion",
    sub: "SKU-level fee, storage & ad attribution audit",
    currentLabel: "Margin 14.8%",
    targetLabel: "Target 21.2%",
    bars: [54, 70, 84, 93],
  },
] as const;

function AuditInteractiveSvg() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = AUDIT_PILLARS[activeIdx];
  const gaugeCircumference = 176;
  const gaugeOffset = gaugeCircumference * (1 - active.score / 100);

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-950/10 bg-background p-4 shadow-[0_16px_38px_-14px_rgba(16,32,56,0.13)] sm:p-5">
      {/* Interactive Pillar Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Audit pillars">
          {AUDIT_PILLARS.map((pillar, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 font-display text-[11px] font-bold transition-all",
                  isSelected
                    ? "bg-[#111113] text-white shadow-xs"
                    : "bg-surface text-navy-600 hover:bg-ice hover:text-brand-700",
                )}
              >
                {pillar.label}
              </button>
            );
          })}
        </div>
        <span className="hidden rounded-full bg-ice px-2.5 py-0.5 font-display text-[10px] font-extrabold text-brand-700 sm:inline-block">
          48h Deep Audit
        </span>
      </div>

      {/* Interactive Diagnostic SVG Canvas */}
      <svg
        viewBox="0 0 420 176"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-label={`RankCanyon audit diagnostic: ${active.headline}`}
        className="mt-3 h-auto w-full select-none"
      >
        {/* Left Opportunity Gauge Card */}
        <rect x="4" y="8" width="142" height="160" rx="14" fill="#F4F4F4" />
        <text
          x="75"
          y="29"
          textAnchor="middle"
          fill="#575555"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.05em"
        >
          OPPORTUNITY SCORE
        </text>

        <circle
          cx="75"
          cy="90"
          r="28"
          stroke="#232020"
          strokeOpacity="0.1"
          strokeWidth="7"
        />
        <circle
          cx="75"
          cy="90"
          r="28"
          stroke="#2AABE2"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={gaugeCircumference}
          strokeDashoffset={gaugeOffset}
          transform="rotate(-90 75 90)"
          className="transition-[stroke-dashoffset] duration-500 ease-out"
        />
        <text
          x="75"
          y="95"
          textAnchor="middle"
          fill="#232020"
          fontSize="16"
          fontWeight="800"
        >
          {active.score}
        </text>

        <rect x="22" y="134" width="106" height="22" rx="11" fill="#111113" />
        <text
          x="75"
          y="148.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="800"
        >
          1P &amp; 3P ASINs
        </text>

        {/* Right Diagnostic Breakdown Stage */}
        <rect
          x="158"
          y="8"
          width="258"
          height="160"
          rx="14"
          fill="#FFFFFF"
          stroke="#232020"
          strokeOpacity="0.1"
          strokeWidth="1.5"
        />

        <circle cx="176" cy="28" r="4.5" fill="#2AABE2" />
        <text x="187" y="32" fill="#232020" fontSize="12" fontWeight="800">
          {active.headline}
        </text>
        <text x="176" y="49" fill="#575555" fontSize="10" fontWeight="600">
          {active.sub}
        </text>

        {/* Interactive ASIN Pillar Bars */}
        {active.bars.map((val, i) => {
          const barX = 178 + i * 56;
          const barH = Math.round((val / 100) * 66);
          const barY = 132 - barH;
          const isHighlight = i === activeIdx;
          return (
            <g key={i} onClick={() => setActiveIdx(i)} className="cursor-pointer">
              <rect x={barX} y={66} width="36" height="66" rx="7" fill="#EBF5FB" />
              <rect
                x={barX}
                y={barY}
                width="36"
                height={barH}
                rx="7"
                fill={isHighlight ? "#2AABE2" : i % 2 === 0 ? "#2674BC" : "#56B7E3"}
                className="transition-all duration-400 ease-out"
              />
              <text
                x={barX + 18}
                y={barY - 5}
                textAnchor="middle"
                fill="#232020"
                fontSize="9.5"
                fontWeight="800"
              >
                {val}%
              </text>
            </g>
          );
        })}

        {/* Bottom Benchmark Badges */}
        <rect x="176" y="140" width="106" height="20" rx="10" fill="#F4F4F4" />
        <text
          x="229"
          y="153.5"
          textAnchor="middle"
          fill="#575555"
          fontSize="9.5"
          fontWeight="700"
        >
          {active.currentLabel}
        </text>
        <rect x="292" y="140" width="108" height="20" rx="10" fill="#2AABE2" />
        <text
          x="346"
          y="153.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="800"
        >
          {active.targetLabel}
        </text>
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Step 2 Interactive SVG: 90-Day Amazon Growth Roadmap & Sprint Curve
 * ------------------------------------------------------------------------- */
const ROADMAP_SPRINTS = [
  {
    window: "Days 1–30",
    title: "Exact-Match Isolation & CTR Rebuild",
    pillar: "Foundation Sprint",
    kpi: "-24% Wasted Spend",
    roas: "3.1x ROAS",
    progressX: 112,
    progressY: 118,
  },
  {
    window: "Days 31–60",
    title: "Premium A+ Modules & Brand Store CRO",
    pillar: "Conversion Sprint",
    kpi: "+31% Listing CVR",
    roas: "3.9x ROAS",
    progressX: 228,
    progressY: 82,
  },
  {
    window: "Days 61–90",
    title: "Sponsored Brands Video & DSP Conquest",
    pillar: "Scale Sprint",
    kpi: "Top-3 Keyword Lock",
    roas: "4.8x ROAS",
    progressX: 348,
    progressY: 42,
  },
] as const;

function StrategyRoadmapInteractiveSvg() {
  const [sprintIdx, setSprintIdx] = useState(1);
  const current = ROADMAP_SPRINTS[sprintIdx];

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-950/10 bg-background p-4 shadow-[0_16px_38px_-14px_rgba(16,32,56,0.13)] sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        <div className="flex gap-1.5" role="tablist" aria-label="90-day roadmap sprints">
          {ROADMAP_SPRINTS.map((sprint, idx) => {
            const active = idx === sprintIdx;
            return (
              <button
                key={sprint.window}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSprintIdx(idx)}
                onMouseEnter={() => setSprintIdx(idx)}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 font-display text-[11px] font-bold transition-all",
                  active
                    ? "bg-brand-500 text-white shadow-xs"
                    : "bg-surface text-navy-600 hover:bg-ice hover:text-brand-700",
                )}
              >
                {sprint.window}
              </button>
            );
          })}
        </div>
        <span className="hidden rounded-full bg-[#111113] px-2.5 py-0.5 font-display text-[10px] font-extrabold text-white sm:inline-block">
          {current.roas}
        </span>
      </div>

      <svg
        viewBox="0 0 420 176"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-label={`90-day strategy roadmap: ${current.title}`}
        className="mt-3 h-auto w-full select-none"
      >
        {/* Background Grid */}
        <rect x="4" y="8" width="412" height="160" rx="14" fill="#F4F4F4" />
        <line x1="28" y1="54" x2="392" y2="54" stroke="#232020" strokeOpacity="0.07" />
        <line x1="28" y1="92" x2="392" y2="92" stroke="#232020" strokeOpacity="0.07" />
        <line x1="28" y1="130" x2="392" y2="130" stroke="#232020" strokeOpacity="0.14" />

        {/* Area Fill Under Compounding Trajectory */}
        <path
          d="M 42 130 C 110 124, 175 102, 228 82 C 282 62, 318 48, 378 36 L 378 130 Z"
          fill="#2AABE2"
          fillOpacity="0.14"
        />

        {/* Full Trajectory Curve */}
        <path
          d="M 42 130 C 110 124, 175 102, 228 82 C 282 62, 318 48, 378 36"
          stroke="#2674BC"
          strokeOpacity="0.35"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Active Highlighted Segment */}
        <path
          d={
            sprintIdx === 0
              ? "M 42 130 C 68 128, 92 123, 112 118"
              : sprintIdx === 1
                ? "M 42 130 C 110 124, 175 102, 228 82"
                : "M 42 130 C 110 124, 175 102, 228 82 C 282 62, 318 48, 348 42"
          }
          stroke="#2AABE2"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Clickable Milestone Nodes Along the Curve */}
        {ROADMAP_SPRINTS.map((node, idx) => {
          const isReached = idx <= sprintIdx;
          const isCurrent = idx === sprintIdx;
          return (
            <g
              key={node.window}
              onClick={() => setSprintIdx(idx)}
              onMouseEnter={() => setSprintIdx(idx)}
              className="cursor-pointer"
            >
              {isCurrent && (
                <circle
                  cx={node.progressX}
                  cy={node.progressY}
                  r="14"
                  fill="#2AABE2"
                  fillOpacity="0.22"
                />
              )}
              <circle
                cx={node.progressX}
                cy={node.progressY}
                r={isCurrent ? "7.5" : "6"}
                fill={isReached ? "#111113" : "#FFFFFF"}
                stroke="#2AABE2"
                strokeWidth="2.5"
              />
              <text
                x={node.progressX}
                y="150"
                textAnchor="middle"
                fill={isCurrent ? "#232020" : "#575555"}
                fontSize="10"
                fontWeight={isCurrent ? "800" : "600"}
              >
                {node.window}
              </text>
            </g>
          );
        })}

        {/* Floating Deliverable Callout Card inside SVG */}
        <rect
          x="22"
          y="18"
          width="244"
          height="52"
          rx="11"
          fill="#FFFFFF"
          stroke="#2AABE2"
          strokeWidth="1.5"
        />
        <text x="34" y="36" fill="#2674BC" fontSize="9.5" fontWeight="800">
          {current.pillar.toUpperCase()} · {current.kpi}
        </text>
        <text x="34" y="54" fill="#232020" fontSize="11" fontWeight="800">
          {current.title}
        </text>
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Step 3 Interactive SVG: Daily Execution, Bid Automation & CRO Toggles
 * ------------------------------------------------------------------------- */
const EXECUTION_ENGINES = [
  { id: "ppc", label: "Exact Bid Rules", roasBoost: 1.4, tacosDrop: 3.2, cvrBoost: 8 },
  { id: "cro", label: "A+ & Gallery CRO", roasBoost: 1.1, tacosDrop: 2.4, cvrBoost: 16 },
  { id: "dsp", label: "AMC + DSP Funnel", roasBoost: 0.9, tacosDrop: 1.9, cvrBoost: 10 },
] as const;

function ExecuteOptimizeInteractiveSvg() {
  const [enabled, setEnabled] = useState<boolean[]>([true, true, true]);

  const toggleEngine = (idx: number) => {
    setEnabled((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      // Keep at least one engine active so metrics always stay meaningful
      if (!next.some(Boolean)) {
        next[idx] = true;
      }
      return next;
    });
  };

  const totalRoas = (
    1.4 + EXECUTION_ENGINES.reduce((acc, e, i) => acc + (enabled[i] ? e.roasBoost : 0), 0)
  ).toFixed(1);

  const totalTacos = (
    15.9 -
    EXECUTION_ENGINES.reduce((acc, e, i) => acc + (enabled[i] ? e.tacosDrop : 0), 0)
  ).toFixed(1);

  const totalCvr =
    12 + EXECUTION_ENGINES.reduce((acc, e, i) => acc + (enabled[i] ? e.cvrBoost : 0), 0);

  const activeCount = enabled.filter(Boolean).length;

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-950/10 bg-background p-4 shadow-[0_16px_38px_-14px_rgba(16,32,56,0.13)] sm:p-5">
      {/* Interactive Live Optimization Engine Toggles */}
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        <div className="flex flex-wrap gap-1.5">
          {EXECUTION_ENGINES.map((engine, idx) => {
            const isOn = enabled[idx];
            return (
              <button
                key={engine.id}
                type="button"
                aria-pressed={isOn}
                onClick={() => toggleEngine(idx)}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1 font-display text-[11px] font-bold transition-all",
                  isOn
                    ? "border-brand-500 bg-ice text-navy-950"
                    : "border-navy-950/10 bg-surface text-navy-400 hover:text-navy-700",
                )}
              >
                <span
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    isOn ? "bg-brand-500" : "bg-navy-300",
                  )}
                />
                {engine.label}
              </button>
            );
          })}
        </div>
        <span className="hidden items-center gap-1.5 rounded-full bg-[#111113] px-2.5 py-0.5 font-display text-[10px] font-extrabold text-white sm:inline-flex">
          <span className="size-1.5 rounded-full bg-brand-500" />
          Live Engine
        </span>
      </div>

      {/* Interactive Workflow & Live Output SVG */}
      <svg
        viewBox="0 0 420 176"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-label="Interactive Amazon campaign execution and CRO optimization engine"
        className="mt-3 h-auto w-full select-none"
      >
        {/* Left 3 Interactive Input Nodes */}
        {EXECUTION_ENGINES.map((engine, idx) => {
          const y = 20 + idx * 50;
          const isOn = enabled[idx];
          return (
            <g
              key={engine.id}
              onClick={() => toggleEngine(idx)}
              className="cursor-pointer"
            >
              {/* Flow Path into Central Engine */}
              <path
                d={`M 148 ${y + 18} C 178 ${y + 18}, 182 88, 208 88`}
                stroke={isOn ? "#2AABE2" : "#232020"}
                strokeOpacity={isOn ? "0.85" : "0.14"}
                strokeWidth={isOn ? "2.5" : "1.5"}
              />
              <rect
                x="8"
                y={y}
                width="140"
                height="36"
                rx="10"
                fill={isOn ? "#FFFFFF" : "#F4F4F4"}
                stroke={isOn ? "#2AABE2" : "#232020"}
                strokeOpacity={isOn ? "1" : "0.12"}
                strokeWidth="1.5"
              />
              <circle cx="24" cy={y + 18} r="5" fill={isOn ? "#2AABE2" : "#B5B4B4"} />
              <text
                x="36"
                y={y + 21.5}
                fill={isOn ? "#232020" : "#8C8A8A"}
                fontSize="10.5"
                fontWeight="800"
              >
                {engine.label}
              </text>
            </g>
          );
        })}

        {/* Center RankCanyon Optimization Hub */}
        <circle cx="228" cy="88" r="28" fill="#EBF5FB" />
        <circle cx="228" cy="88" r="21" fill="#111113" />
        <text
          x="228"
          y="92"
          textAnchor="middle"
          fill="#2AABE2"
          fontSize="11"
          fontWeight="800"
        >
          {activeCount}/3
        </text>

        {/* Connector to Output Card */}
        <line x1="256" y1="88" x2="278" y2="88" stroke="#2AABE2" strokeWidth="2.5" />

        {/* Right Live Compounding KPI Readout */}
        <rect x="278" y="16" width="134" height="144" rx="14" fill="#111113" />
        <text x="294" y="38" fill="#A3DBF2" fontSize="9.5" fontWeight="700">
          BLENDED ROAS
        </text>
        <text x="294" y="64" fill="#FFFFFF" fontSize="22" fontWeight="800">
          {totalRoas}x
        </text>

        <rect x="294" y="78" width="102" height="32" rx="8" fill="#1C3F63" />
        <text x="304" y="98" fill="#FFFFFF" fontSize="10.5" fontWeight="800">
          TACoS {totalTacos}% ↓
        </text>

        <rect x="294" y="118" width="102" height="30" rx="8" fill="#2AABE2" />
        <text x="304" y="137" fill="#FFFFFF" fontSize="10.5" fontWeight="800">
          +{totalCvr}% Listing CVR
        </text>
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Step 4 Interactive SVG: Executive Revenue, TACoS & Global Scale Hub
 * ------------------------------------------------------------------------- */
const SCALE_QUARTERS = [
  {
    q: "Q1",
    revenue: "$184K",
    tacos: "12.4%",
    organic: "54%",
    organicH: 44,
    paidH: 30,
    tacosY: 68,
  },
  {
    q: "Q2",
    revenue: "$248K",
    tacos: "10.6%",
    organic: "61%",
    organicH: 60,
    paidH: 34,
    tacosY: 82,
  },
  {
    q: "Q3",
    revenue: "$326K",
    tacos: "9.1%",
    organic: "66%",
    organicH: 76,
    paidH: 36,
    tacosY: 96,
  },
  {
    q: "Q4 · Prime",
    revenue: "$462K",
    tacos: "7.8%",
    organic: "72%",
    organicH: 94,
    paidH: 38,
    tacosY: 110,
  },
] as const;

function ScaleReportInteractiveSvg() {
  const [selectedQ, setSelectedQ] = useState(3);
  const active = SCALE_QUARTERS[selectedQ];

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-950/10 bg-background p-4 shadow-[0_16px_38px_-14px_rgba(16,32,56,0.13)] sm:p-5">
      {/* Interactive Quarter Selector */}
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        <div
          className="flex gap-1.5"
          role="tablist"
          aria-label="Quarterly growth reports"
        >
          {SCALE_QUARTERS.map((item, idx) => {
            const isSelected = idx === selectedQ;
            return (
              <button
                key={item.q}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedQ(idx)}
                onMouseEnter={() => setSelectedQ(idx)}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 font-display text-[11px] font-bold transition-all",
                  isSelected
                    ? "bg-[#111113] text-white shadow-xs"
                    : "bg-surface text-navy-600 hover:bg-ice hover:text-brand-700",
                )}
              >
                {item.q}
              </button>
            );
          })}
        </div>
        <span className="hidden rounded-full bg-ice px-2.5 py-0.5 font-display text-[10px] font-extrabold text-brand-700 sm:inline-block">
          US · UK · EU · CA
        </span>
      </div>

      {/* Interactive Stacked Organic vs Paid Revenue + TACoS SVG */}
      <svg
        viewBox="0 0 420 176"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-label={`Executive scale report for ${active.q}: ${active.revenue} monthly sales at ${active.tacos} TACoS`}
        className="mt-3 h-auto w-full select-none"
      >
        {/* Left Stacked Bar Chart */}
        <rect x="4" y="8" width="256" height="160" rx="14" fill="#F4F4F4" />
        <line x1="22" y1="142" x2="242" y2="142" stroke="#232020" strokeOpacity="0.18" />

        {SCALE_QUARTERS.map((bar, idx) => {
          const x = 32 + idx * 54;
          const totalH = bar.organicH + bar.paidH * 0.45;
          const organicY = 142 - bar.organicH;
          const paidH = Math.round(bar.paidH * 0.45);
          const paidY = organicY - paidH - 2;
          const isCurrent = idx === selectedQ;

          return (
            <g
              key={bar.q}
              onClick={() => setSelectedQ(idx)}
              onMouseEnter={() => setSelectedQ(idx)}
              className="cursor-pointer"
            >
              {/* Hover / Active Column Halo */}
              {isCurrent && (
                <rect
                  x={x - 6}
                  y={16}
                  width="44"
                  height="144"
                  rx="9"
                  fill="#2AABE2"
                  fillOpacity="0.12"
                />
              )}
              {/* Paid Ad Layer */}
              <rect
                x={x}
                y={paidY}
                width="32"
                height={paidH}
                rx="5"
                fill={isCurrent ? "#2674BC" : "#A3DBF2"}
              />
              {/* Organic Revenue Layer */}
              <rect
                x={x}
                y={organicY}
                width="32"
                height={bar.organicH}
                rx="5"
                fill={isCurrent ? "#2AABE2" : "#56B7E3"}
              />
              <text
                x={x + 16}
                y="158"
                textAnchor="middle"
                fill={isCurrent ? "#232020" : "#575555"}
                fontSize="9.5"
                fontWeight={isCurrent ? "800" : "600"}
              >
                {bar.q.split(" ")[0]}
              </text>
              <title>{`${bar.q}: ${bar.revenue} (${totalH})`}</title>
            </g>
          );
        })}

        {/* Downward TACoS Compression Line Overlay */}
        <path
          d="M 48 68 L 102 82 L 156 96 L 210 110"
          stroke="#111113"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx={48 + selectedQ * 54}
          cy={active.tacosY}
          r="5.5"
          fill="#111113"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* Right Executive KPI Summary Card */}
        <rect
          x="270"
          y="8"
          width="146"
          height="160"
          rx="14"
          fill="#FFFFFF"
          stroke="#232020"
          strokeOpacity="0.1"
          strokeWidth="1.5"
        />
        <text x="286" y="31" fill="#575555" fontSize="9.5" fontWeight="700">
          MONTHLY REVENUE
        </text>
        <text x="286" y="57" fill="#232020" fontSize="22" fontWeight="800">
          {active.revenue}
        </text>

        <rect x="286" y="72" width="114" height="38" rx="9" fill="#EBF5FB" />
        <text x="296" y="87" fill="#1E609E" fontSize="9" fontWeight="700">
          BLENDED TACOS
        </text>
        <text x="296" y="102" fill="#232020" fontSize="12.5" fontWeight="800">
          {active.tacos} ↓
        </text>

        <rect x="286" y="118" width="114" height="38" rx="9" fill="#111113" />
        <text x="296" y="133" fill="#A3DBF2" fontSize="9" fontWeight="700">
          ORGANIC SHARE
        </text>
        <text x="296" y="148" fill="#FFFFFF" fontSize="12.5" fontWeight="800">
          {active.organic} Sales
        </text>
      </svg>
    </div>
  );
}

function StepInteractiveSvg({ index }: { index: number }) {
  const variant = index % 4;
  if (variant === 0) return <AuditInteractiveSvg />;
  if (variant === 1) return <StrategyRoadmapInteractiveSvg />;
  if (variant === 2) return <ExecuteOptimizeInteractiveSvg />;
  return <ScaleReportInteractiveSvg />;
}

function TimelineStepRow({
  item,
  index,
  isLast,
}: {
  item: TimelineStepItem;
  index: number;
  isLast: boolean;
}) {
  const rowRef = useRef<HTMLLIElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isEven = index % 2 === 1;

  // Reveal smoothly as each step enters from lower viewport toward reading zone
  const { scrollYProgress: revealProgress } = useScroll({
    target: rowRef,
    offset: ["start 92%", "start 58%"],
  });

  const smoothReveal = useSpring(revealProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  // Draw the connector segment from this step's dot to the next step's dot
  const { scrollYProgress: segmentProgress } = useScroll({
    target: rowRef,
    offset: ["start 58%", "end 58%"],
  });

  const smoothSegment = useSpring(segmentProgress, {
    stiffness: 150,
    damping: 28,
    mass: 0.35,
  });

  // Text reveals horizontally from the LEFT on Steps 1 & 3, and from the RIGHT on Steps 2 & 4
  const textStartX = isEven ? 76 : -76;
  const textOpacity = useTransform(smoothReveal, [0, 0.85], [0, 1]);
  const textX = useTransform(smoothReveal, [0, 0.9], [textStartX, 0]);

  // Interactive SVG card reveals horizontally from the opposite side (RIGHT on Steps 1 & 3, LEFT on Steps 2 & 4)
  const cardStartX = isEven ? -76 : 76;
  const cardOpacity = useTransform(smoothReveal, [0.06, 0.95], [0, 1]);
  const cardX = useTransform(smoothReveal, [0.06, 0.95], [cardStartX, 0]);

  const nodeActiveScale = useTransform(smoothReveal, [0.2, 0.7], [0, 1]);
  const nodeActiveOpacity = useTransform(smoothReveal, [0.2, 0.65], [0, 1]);

  return (
    <li
      ref={rowRef}
      className={cn(
        "relative flex flex-col gap-6 pl-10 sm:pl-14 lg:grid lg:grid-cols-2 lg:items-start lg:gap-24 lg:pl-0 xl:gap-28",
        !isLast && "pb-16 sm:pb-24 lg:pb-28",
      )}
    >
      {/* Vertical timeline spine (left on mobile, dead-center on lg+) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 flex w-6 justify-center lg:left-1/2 lg:-translate-x-1/2"
      >
        {!isLast && (
          <div className="absolute top-[20px] -bottom-[20px] left-1/2 w-[2px] -translate-x-1/2 bg-navy-950/14 sm:top-[22px] sm:-bottom-[22px]">
            <m.div
              style={
                prefersReducedMotion
                  ? undefined
                  : {
                      scaleY: smoothSegment,
                    }
              }
              className="h-full w-full origin-top bg-gradient-to-b from-navy-950 via-brand-600 to-brand-500"
            />
          </div>
        )}

        {/* Step dot node */}
        <div className="relative z-10 mt-2.5 flex size-5 items-center justify-center rounded-full border-2 border-navy-200 bg-background sm:size-6">
          <m.span
            style={
              prefersReducedMotion
                ? undefined
                : {
                    scale: nodeActiveScale,
                    opacity: nodeActiveOpacity,
                  }
            }
            className="flex size-full items-center justify-center rounded-full bg-navy-950 ring-4 ring-brand-500/25"
          >
            <span className="size-2 rounded-full bg-brand-500" />
          </m.span>
        </div>
      </div>

      {/* Text column (Reveals from Left on Step 1 & 3; Reveals from Right on Step 2 & 4) */}
      <m.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                opacity: textOpacity,
                x: textX,
              }
        }
        className={cn(
          "flex flex-col items-start justify-center lg:pt-2",
          isEven ? "lg:order-2 lg:pl-2" : "lg:order-1 lg:pr-2",
        )}
      >
        <span className="inline-flex items-center rounded-full border border-navy-950/8 bg-background px-4 py-1.5 font-display text-xs font-bold text-navy-950 shadow-[0_3px_12px_rgba(35,32,32,0.07)] sm:text-sm">
          Step {item.step}
        </span>

        <h3 className="mt-4 max-w-md text-2xl leading-[1.2] font-extrabold text-navy-950 sm:text-3xl">
          {item.title}
        </h3>

        <p className="mt-3.5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          {item.description}
        </p>
      </m.div>

      {/* Interactive SVG column (Reveals from Right on Step 1 & 3; Reveals from Left on Step 2 & 4) */}
      <m.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                opacity: cardOpacity,
                x: cardX,
              }
        }
        className={cn("w-full", isEven ? "lg:order-1" : "lg:order-2")}
      >
        <StepInteractiveSvg index={index} />
      </m.div>
    </li>
  );
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="mt-16 flex flex-col sm:mt-24">
      {steps.map((item, index) => (
        <TimelineStepRow
          key={item.step}
          item={item}
          index={index}
          isLast={index === steps.length - 1}
        />
      ))}
    </ol>
  );
}
