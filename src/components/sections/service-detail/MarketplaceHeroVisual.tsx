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

function MultiChannelHubSvg() {
  return (
    <svg
      viewBox="0 0 264 202"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-label="Multi-marketplace catalog and inventory sync hub"
      className="size-full"
    >
      <circle cx="15" cy="18" r="5" fill="#2AABE2" />
      <text
        x="27"
        y="22"
        fill="#232020"
        fontSize="10.5"
        fontWeight="800"
        letterSpacing="0.05em"
      >
        MULTI-MARKETPLACE SYNC
      </text>
      <rect x="184" y="6" width="70" height="22" rx="11" fill="#111113" />
      <text
        x="219"
        y="20.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="9.5"
        fontWeight="800"
      >
        7 CHANNELS
      </text>

      <rect x="8" y="34" width="248" height="122" rx="14" fill="#F4F4F4" />

      {/* Orbital rings */}
      <circle cx="132" cy="95" r="46" fill="#EBF5FB" />
      <circle
        cx="132"
        cy="95"
        r="43"
        stroke="#2AABE2"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      {/* Connector lines */}
      <line x1="66" y1="62" x2="108" y2="83" stroke="#2AABE2" strokeWidth="1.5" />
      <line x1="198" y1="62" x2="156" y2="83" stroke="#2AABE2" strokeWidth="1.5" />
      <line x1="58" y1="95" x2="106" y2="95" stroke="#2674BC" strokeWidth="1.5" />
      <line x1="206" y1="95" x2="158" y2="95" stroke="#2674BC" strokeWidth="1.5" />
      <line x1="66" y1="128" x2="108" y2="107" stroke="#2AABE2" strokeWidth="1.5" />
      <line x1="198" y1="128" x2="156" y2="107" stroke="#2AABE2" strokeWidth="1.5" />

      {/* Center RankCanyon Store Core */}
      <rect x="108" y="71" width="48" height="48" rx="14" fill="#111113" />
      <path d="M132 81 L145 88 L132 95 L119 88 Z" fill="#2AABE2" />
      <path d="M119 88 V102 L132 109 V95 Z" fill="#56B7E3" />
      <path d="M145 88 V102 L132 109 V95 Z" fill="#1E609E" />

      {/* Channel pills */}
      {[
        { x: 18, y: 50, w: 54, label: "Amazon", active: true },
        { x: 192, y: 50, w: 54, label: "Walmart", active: true },
        { x: 14, y: 84, w: 48, label: "eBay", active: false },
        { x: 202, y: 84, w: 48, label: "Shopify", active: false },
        { x: 18, y: 118, w: 54, label: "TikTok", active: false },
        { x: 192, y: 118, w: 54, label: "Etsy · T+", active: false },
      ].map((node) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height="22"
            rx="11"
            fill={node.active ? "#2AABE2" : "#FFFFFF"}
            stroke={node.active ? "#2AABE2" : "#232020"}
            strokeOpacity={node.active ? "1" : "0.18"}
            strokeWidth="1.4"
          />
          <text
            x={node.x + node.w / 2}
            y={node.y + 14.5}
            textAnchor="middle"
            fill={node.active ? "#FFFFFF" : "#232020"}
            fontSize="9.5"
            fontWeight="800"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Bottom status pills */}
      <rect x="8" y="164" width="122" height="30" rx="10" fill="#111113" />
      <text
        x="69"
        y="183"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="10.5"
        fontWeight="800"
      >
        Catalog Synced ✓
      </text>

      <rect
        x="136"
        y="164"
        width="120"
        height="30"
        rx="10"
        fill="#EBF5FB"
        stroke="#2AABE2"
        strokeWidth="1.5"
      />
      <text
        x="196"
        y="183"
        textAnchor="middle"
        fill="#1E609E"
        fontSize="10.5"
        fontWeight="800"
      >
        Daily Ops Active
      </text>
    </svg>
  );
}

function AccountHealthShieldSvg() {
  return (
    <svg
      viewBox="0 0 248 196"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-label="Account health and suppressed listing protection graphic"
      className="size-full"
    >
      <rect x="8" y="6" width="118" height="24" rx="12" fill="#2AABE2" />
      <text
        x="67"
        y="21.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="9.5"
        fontWeight="800"
        letterSpacing="0.04em"
      >
        ACCOUNT HEALTH
      </text>
      <text x="196" y="22" textAnchor="middle" fill="#1E609E" fontSize="11" fontWeight="800">
        99.8% GREEN
      </text>

      <rect x="8" y="38" width="232" height="106" rx="13" fill="#F4F4F4" />

      {[
        { label: "Order Defect Rate", status: "< 0.1%", y: 50, pillBg: "#2AABE2", pillText: "#FFFFFF" },
        { label: "Suppressed Listings", status: "0 Active", y: 80, pillBg: "#111113", pillText: "#FFFFFF" },
        { label: "Policy & Case Alerts", status: "Protected", y: 110, pillBg: "#EBF5FB", pillText: "#1E609E" },
      ].map((row) => (
        <g key={row.label}>
          <rect
            x="18"
            y={row.y}
            width="212"
            height="24"
            rx="8"
            fill="#FFFFFF"
            stroke="#232020"
            strokeOpacity="0.09"
          />
          <circle cx="30" cy={row.y + 12} r="4" fill="#2AABE2" />
          <text x="41" y={row.y + 15.5} fill="#232020" fontSize="10" fontWeight="700">
            {row.label}
          </text>
          <rect x="160" y={row.y + 3} width="64" height="18" rx="9" fill={row.pillBg} />
          <text
            x="192"
            y={row.y + 15}
            textAnchor="middle"
            fill={row.pillText}
            fontSize="9"
            fontWeight="800"
          >
            {row.status}
          </text>
        </g>
      ))}

      <rect
        x="8"
        y="152"
        width="232"
        height="34"
        rx="11"
        fill="#111113"
      />
      <circle cx="28" cy="169" r="4.5" fill="#2AABE2" />
      <text x="40" y="173" fill="#FFFFFF" fontSize="10.5" fontWeight="800">
        Monitored Every Business Day
      </text>
    </svg>
  );
}

function InventoryOrdersSvg() {
  return (
    <svg
      viewBox="0 0 232 190"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-label="FBA, WFS inventory and order monitoring graphic"
      className="size-full"
    >
      <text
        x="116"
        y="20"
        textAnchor="middle"
        fill="#232020"
        fontSize="10.5"
        fontWeight="800"
        letterSpacing="0.05em"
      >
        FBA · WFS · ORDERS
      </text>

      <rect x="8" y="30" width="216" height="110" rx="13" fill="#F4F4F4" />

      {[
        { x: 24, h: 52, y: 74, label: "AMZ", fill: "#2AABE2" },
        { x: 72, h: 68, y: 58, label: "WMT", fill: "#2674BC" },
        { x: 120, h: 60, y: 66, label: "SHOP", fill: "#56B7E3" },
        { x: 168, h: 78, y: 48, label: "TTS", fill: "#2AABE2" },
      ].map((bar, idx) => (
        <g key={bar.label}>
          <m.rect
            x={bar.x}
            width="32"
            rx="6"
            fill={bar.fill}
            initial={{ y: 126, height: 0 }}
            animate={{
              y: [bar.y + 4, bar.y - 3, bar.y + 4],
              height: [bar.h - 4, bar.h + 3, bar.h - 4],
            }}
            transition={{
              duration: 3,
              delay: idx * 0.18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <text
            x={bar.x + 16}
            y="136"
            textAnchor="middle"
            fill="#575555"
            fontSize="8.5"
            fontWeight="800"
          >
            {bar.label}
          </text>
        </g>
      ))}

      <rect
        x="8"
        y="148"
        width="216"
        height="32"
        rx="11"
        fill="#EBF5FB"
        stroke="#2AABE2"
        strokeWidth="1.5"
      />
      <text
        x="116"
        y="168"
        textAnchor="middle"
        fill="#1E609E"
        fontSize="10.5"
        fontWeight="800"
      >
        Stock, Shipments &amp; Returns Synced
      </text>
    </svg>
  );
}

export function MarketplaceHeroStage() {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <m.div
      className="relative mx-auto h-[410px] w-full max-w-[34rem] sm:h-[470px] lg:h-[495px] lg:max-w-none"
      variants={stageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top-Center: Multi-Marketplace Hub */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-0 left-1/2 z-10 w-[14.25rem] -translate-x-1/2 sm:w-[16rem] xl:w-[16.75rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.15)]"
        >
          <MultiChannelHubSvg />
        </m.div>
      </m.div>

      {/* Middle-Right: Account Health Shield */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-[41%] right-0 z-20 w-[13.25rem] sm:w-[15rem] xl:w-[15.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{
            duration: 4.6,
            delay: 0.35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.16)]"
        >
          <AccountHealthShieldSvg />
        </m.div>
      </m.div>

      {/* Bottom-Left: Inventory & Orders */}
      <m.div
        variants={cardPopVariants}
        className="absolute bottom-1 left-0 z-20 w-[12.5rem] sm:bottom-2 sm:w-[14rem] xl:w-[14.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
          transition={{
            duration: 4,
            delay: 0.7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.14)]"
        >
          <InventoryOrdersSvg />
        </m.div>
      </m.div>
    </m.div>
  );
}

const CONSOLE_PILLARS = [
  {
    id: "health",
    tab: "Account Health",
    score: 99,
    headline: "Daily Policy & Defect Rate Protection",
    sub: "Order defect, late shipment & suppression monitoring",
    leftBadge: "Warnings Resolved",
    rightBadge: "99.8% Health",
    bars: [92, 96, 98, 99],
  },
  {
    id: "catalog",
    tab: "Catalog & Listings",
    score: 96,
    headline: "Multi-Marketplace Catalog Accuracy",
    sub: "Titles, bullets, images, variations & pricing in sync",
    leftBadge: "Zero Suppressions",
    rightBadge: "7 Channels Live",
    bars: [78, 86, 92, 96],
  },
  {
    id: "inventory",
    tab: "Inventory & Orders",
    score: 98,
    headline: "FBA, WFS & Direct Fulfillment Tracking",
    sub: "Proactive restock alerts, inbound plans & returns QA",
    leftBadge: "In-Stock Protected",
    rightBadge: "On-Time Tracked",
    bars: [82, 89, 94, 98],
  },
] as const;

export function OperationsInteractiveConsole() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = CONSOLE_PILLARS[activeIdx];
  const circumference = 176;
  const dashOffset = circumference * (1 - active.score / 100);

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-950/10 bg-background p-5 shadow-[0_18px_42px_-14px_rgba(16,32,56,0.14)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          className="flex flex-wrap gap-1.5"
          role="tablist"
          aria-label="Marketplace operational pillars"
        >
          {CONSOLE_PILLARS.map((pillar, idx) => {
            const selected = idx === activeIdx;
            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={cn(
                  "cursor-pointer rounded-full px-3.5 py-1.5 font-display text-xs font-bold transition-all",
                  selected
                    ? "bg-navy-950 text-white shadow-xs"
                    : "bg-surface text-navy-600 hover:bg-ice hover:text-brand-700",
                )}
              >
                {pillar.tab}
              </button>
            );
          })}
        </div>
        <span className="hidden rounded-full bg-ice px-3 py-1 font-display text-[11px] font-extrabold text-brand-700 sm:inline-block">
          End-to-End Ops
        </span>
      </div>

      <svg
        viewBox="0 0 420 184"
        fill="none"
        shapeRendering="geometricPrecision"
        aria-label={`Operations overview: ${active.headline}`}
        className="mt-4 h-auto w-full select-none"
      >
        {/* Left Gauge Card */}
        <rect x="4" y="8" width="142" height="168" rx="14" fill="#F4F4F4" />
        <text
          x="75"
          y="31"
          textAnchor="middle"
          fill="#575555"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.05em"
        >
          OPS SCORE
        </text>
        <circle
          cx="75"
          cy="92"
          r="28"
          stroke="#232020"
          strokeOpacity="0.1"
          strokeWidth="7"
        />
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
        <text
          x="75"
          y="97"
          textAnchor="middle"
          fill="#232020"
          fontSize="16"
          fontWeight="800"
        >
          {active.score}%
        </text>
        <rect x="20" y="138" width="110" height="24" rx="12" fill="#111113" />
        <text
          x="75"
          y="153.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="800"
        >
          Daily Coverage
        </text>

        {/* Right Breakdown Card */}
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
          {active.headline}
        </text>
        <text x="176" y="50" fill="#575555" fontSize="9.8" fontWeight="600">
          {active.sub}
        </text>

        {active.bars.map((val, i) => {
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

        <rect x="176" y="144" width="108" height="22" rx="11" fill="#F4F4F4" />
        <text
          x="230"
          y="158.5"
          textAnchor="middle"
          fill="#575555"
          fontSize="9.5"
          fontWeight="700"
        >
          {active.leftBadge}
        </text>
        <rect x="292" y="144" width="108" height="22" rx="11" fill="#2AABE2" />
        <text
          x="346"
          y="158.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="800"
        >
          {active.rightBadge}
        </text>
      </svg>
    </div>
  );
}
