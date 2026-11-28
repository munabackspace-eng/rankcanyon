"use client";

type ServiceVisualProps = {
  slug: string;
};

export function ServiceInteractiveSvg({ slug }: ServiceVisualProps) {
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-brand-500/15 bg-ice/75 p-3.5 transition-colors duration-300 group-hover:bg-ice">
      {renderCleanVisual(slug)}
    </div>
  );
}

function renderCleanVisual(slug: string) {
  switch (slug) {
    case "marketplace-ppc-advertising-management":
      return <PpcVisualSvg />;
    case "organic-ranking-sales-growth":
      return <OrganicSeoVisualSvg />;
    case "product-launch-growth":
      return <ProductLaunchVisualSvg />;
    case "product-image-creative-design":
      return <CreativeGalleryVisualSvg />;
    case "a-plus-content-brand-store":
      return <BrandStoreVisualSvg />;
    case "product-video-production":
      return <VideoStudioVisualSvg />;
    default:
      return <AccountOpsVisualSvg />;
  }
}

function AccountOpsVisualSvg() {
  return (
    <svg
      viewBox="0 0 280 168"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className="size-full select-none"
    >
      <rect x="8" y="8" width="264" height="152" rx="14" fill="#FFFFFF" />

      {/* Top status bar */}
      <circle cx="26" cy="28" r="4.5" fill="#2AABE2" />
      <rect x="37" y="24" width="76" height="8" rx="4" fill="#232020" fillOpacity="0.14" />
      <rect x="188" y="18" width="70" height="20" rx="10" fill="#111113" />
      <text
        x="223"
        y="31.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="9.5"
        fontWeight="800"
      >
        99.8% Health
      </text>

      {/* Orbital Marketplace Hub */}
      <circle cx="140" cy="96" r="40" fill="#EBF5FB" />
      <circle
        cx="140"
        cy="96"
        r="37"
        stroke="#2AABE2"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <line x1="74" y1="74" x2="118" y2="88" stroke="#2AABE2" strokeWidth="1.5" />
      <line x1="206" y1="74" x2="162" y2="88" stroke="#2AABE2" strokeWidth="1.5" />
      <line x1="74" y1="118" x2="118" y2="104" stroke="#2674BC" strokeWidth="1.5" />
      <line x1="206" y1="118" x2="162" y2="104" stroke="#2674BC" strokeWidth="1.5" />

      <rect x="118" y="74" width="44" height="44" rx="13" fill="#111113" />
      <path d="M140 83 L152 89.5 L140 96 L128 89.5 Z" fill="#2AABE2" />
      <path d="M128 89.5 V102.5 L140 109 V96 Z" fill="#56B7E3" />
      <path d="M152 89.5 V102.5 L140 109 V96 Z" fill="#1E609E" />

      {[
        { x: 24, y: 63, label: "Amazon", active: true },
        { x: 202, y: 63, label: "Walmart", active: true },
        { x: 24, y: 107, label: "Shopify", active: false },
        { x: 202, y: 107, label: "eBay · TTS", active: false },
      ].map((pill) => (
        <g key={pill.label}>
          <rect
            x={pill.x}
            y={pill.y}
            width="54"
            height="22"
            rx="11"
            fill={pill.active ? "#2AABE2" : "#F4F4F4"}
          />
          <text
            x={pill.x + 27}
            y={pill.y + 14.5}
            textAnchor="middle"
            fill={pill.active ? "#FFFFFF" : "#232020"}
            fontSize="9"
            fontWeight="800"
          >
            {pill.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PpcVisualSvg() {
  return (
    <svg
      viewBox="0 0 280 168"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className="size-full select-none"
    >
      <rect x="8" y="8" width="264" height="152" rx="14" fill="#FFFFFF" />

      <circle cx="26" cy="28" r="4.5" fill="#2AABE2" />
      <text x="37" y="31.5" fill="#232020" fontSize="10" fontWeight="800">
        ROAS &amp; TACoS
      </text>
      <rect x="192" y="18" width="66" height="20" rx="10" fill="#2AABE2" />
      <text
        x="225"
        y="31.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="9.5"
        fontWeight="800"
      >
        4.8x ROAS
      </text>

      <line x1="26" y1="140" x2="254" y2="140" stroke="#232020" strokeOpacity="0.1" />

      {[
        { x: 34, h: 38, fill: "#CAE8F6" },
        { x: 74, h: 52, fill: "#A3DBF2" },
        { x: 114, h: 66, fill: "#56B7E3" },
        { x: 154, h: 80, fill: "#2674BC" },
        { x: 194, h: 94, fill: "#2AABE2" },
      ].map((bar) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={140 - bar.h}
          width="28"
          height={bar.h}
          rx="7"
          fill={bar.fill}
        />
      ))}

      {/* Downward ACoS curve */}
      <path
        d="M 48 64 C 96 76, 148 94, 208 106"
        stroke="#111113"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="208" cy="106" r="5" fill="#111113" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  );
}

function OrganicSeoVisualSvg() {
  return (
    <svg
      viewBox="0 0 280 168"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className="size-full select-none"
    >
      <rect x="8" y="8" width="264" height="152" rx="14" fill="#FFFFFF" />

      {/* Search bar */}
      <rect x="22" y="20" width="236" height="28" rx="14" fill="#F4F4F4" />
      <circle cx="38" cy="34" r="5" stroke="#2AABE2" strokeWidth="2" />
      <line x1="42" y1="38" x2="45.5" y2="41.5" stroke="#2AABE2" strokeWidth="2" strokeLinecap="round" />
      <rect x="54" y="30.5" width="112" height="7" rx="3.5" fill="#232020" fillOpacity="0.22" />
      <rect x="194" y="24" width="58" height="20" rx="10" fill="#2AABE2" />
      <text x="223" y="37.5" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">
        Rank #1
      </text>

      {/* Ranked listing card */}
      <rect
        x="22"
        y="60"
        width="236"
        height="84"
        rx="12"
        fill="#EBF5FB"
        fillOpacity="0.55"
        stroke="#2AABE2"
        strokeOpacity="0.35"
      />
      <rect x="34" y="72" width="58" height="60" rx="9" fill="#FFFFFF" />
      <path d="M63 85 L76 92.5 L63 100 L50 92.5 Z" fill="#2AABE2" />
      <path d="M50 92.5 V107.5 L63 115 V100 Z" fill="#56B7E3" />
      <path d="M76 92.5 V107.5 L63 115 V100 Z" fill="#1E609E" />

      <rect x="104" y="75" width="134" height="9" rx="4.5" fill="#232020" />
      <rect x="104" y="91" width="96" height="7" rx="3.5" fill="#2674BC" />
      <rect x="104" y="105" width="118" height="6" rx="3" fill="#232020" fillOpacity="0.2" />
      <rect x="104" y="120" width="84" height="16" rx="8" fill="#111113" />
      <text x="146" y="131" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">
        +56% Organic Lift
      </text>
    </svg>
  );
}

function ProductLaunchVisualSvg() {
  return (
    <svg
      viewBox="0 0 280 168"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className="size-full select-none"
    >
      <rect x="8" y="8" width="264" height="152" rx="14" fill="#FFFFFF" />

      <circle cx="26" cy="28" r="4.5" fill="#2AABE2" />
      <text x="37" y="31.5" fill="#232020" fontSize="10" fontWeight="800">
        IDEA → DAY 90
      </text>
      <rect x="184" y="18" width="74" height="20" rx="10" fill="#111113" />
      <text x="221" y="31.5" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">
        Launch Ready
      </text>

      <line x1="28" y1="136" x2="252" y2="136" stroke="#232020" strokeOpacity="0.1" />

      <path
        d="M 34 128 C 88 122, 138 94, 186 68 C 210 55, 228 48, 244 44 L 244 136 L 34 136 Z"
        fill="#2AABE2"
        fillOpacity="0.14"
      />
      <path
        d="M 34 128 C 88 122, 138 94, 186 68 C 210 55, 228 48, 244 44"
        stroke="#2AABE2"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {[
        { x: 48, y: 125, label: "Day 1" },
        { x: 142, y: 92, label: "Day 30" },
        { x: 236, y: 47, label: "Day 90" },
      ].map((pt, i) => (
        <g key={pt.label}>
          <circle
            cx={pt.x}
            cy={pt.y}
            r={i === 2 ? "6.5" : "5"}
            fill={i === 2 ? "#2AABE2" : "#111113"}
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <text
            x={pt.x}
            y="150"
            textAnchor="middle"
            fill="#575555"
            fontSize="8.5"
            fontWeight="800"
          >
            {pt.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function CreativeGalleryVisualSvg() {
  return (
    <svg
      viewBox="0 0 280 168"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className="size-full select-none"
    >
      <rect x="8" y="8" width="264" height="152" rx="14" fill="#FFFFFF" />

      {/* Left Main Hero Frame */}
      <rect
        x="22"
        y="22"
        width="124"
        height="124"
        rx="12"
        fill="#EBF5FB"
        stroke="#2AABE2"
        strokeWidth="1.5"
      />
      <circle cx="84" cy="76" r="26" fill="#FFFFFF" />
      <rect x="72" y="58" width="24" height="36" rx="6" fill="#2AABE2" />
      <rect x="77" y="52" width="14" height="6" rx="2" fill="#111113" />
      <rect x="34" y="116" width="100" height="18" rx="9" fill="#111113" />
      <text x="84" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">
        +34% CTR Main
      </text>

      {/* Right Infographic & Lifestyle Thumbnails */}
      <rect x="158" y="22" width="100" height="58" rx="10" fill="#F4F4F4" />
      <circle cx="176" cy="42" r="7" fill="#2AABE2" />
      <rect x="190" y="36" width="54" height="6" rx="3" fill="#232020" />
      <rect x="190" y="47" width="42" height="5" rx="2.5" fill="#232020" fillOpacity="0.3" />
      <rect x="169" y="62" width="76" height="8" rx="4" fill="#2AABE2" fillOpacity="0.25" />

      <rect x="158" y="88" width="100" height="58" rx="10" fill="#F4F4F4" />
      <rect x="170" y="100" width="34" height="34" rx="7" fill="#FFFFFF" />
      <rect x="212" y="100" width="34" height="34" rx="7" fill="#EBF5FB" stroke="#2AABE2" />
    </svg>
  );
}

function BrandStoreVisualSvg() {
  return (
    <svg
      viewBox="0 0 280 168"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className="size-full select-none"
    >
      <rect x="8" y="8" width="264" height="152" rx="14" fill="#FFFFFF" />

      {/* Storefront Header Banner */}
      <rect x="22" y="20" width="236" height="50" rx="11" fill="#111113" />
      <rect x="36" y="32" width="84" height="9" rx="4.5" fill="#FFFFFF" />
      <rect x="36" y="47" width="56" height="7" rx="3.5" fill="#2AABE2" />
      <rect x="182" y="30" width="62" height="22" rx="11" fill="#2AABE2" />
      <text x="213" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">
        Brand Store
      </text>

      {/* 3 A+ Modules */}
      {[22, 104, 186].map((x, idx) => (
        <g key={x}>
          <rect
            x={x}
            y="80"
            width="72"
            height="66"
            rx="10"
            fill={idx === 1 ? "#EBF5FB" : "#F4F4F4"}
            stroke={idx === 1 ? "#2AABE2" : "none"}
          />
          <rect x={x + 12} y="92" width="48" height="26" rx="6" fill="#FFFFFF" />
          <rect x={x + 12} y="125" width="48" height="6" rx="3" fill="#232020" fillOpacity="0.65" />
          <rect x={x + 12} y="135" width="32" height="5" rx="2.5" fill="#2AABE2" />
        </g>
      ))}
    </svg>
  );
}

function VideoStudioVisualSvg() {
  return (
    <svg
      viewBox="0 0 280 168"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className="size-full select-none"
    >
      <rect x="8" y="8" width="264" height="152" rx="14" fill="#FFFFFF" />

      {/* Widescreen Video Stage */}
      <rect x="22" y="20" width="236" height="98" rx="12" fill="#111113" />
      <circle cx="140" cy="69" r="24" fill="#2AABE2" fillOpacity="0.22" />
      <circle cx="140" cy="69" r="17" fill="#2AABE2" />
      <path d="M136.5 61.5L148.5 69L136.5 76.5V61.5Z" fill="#FFFFFF" />

      <rect x="34" y="30" width="66" height="18" rx="9" fill="#FFFFFF" fillOpacity="0.14" />
      <text x="67" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">
        4K · STV · SBV
      </text>

      {/* Scrubber & Waveform */}
      <rect x="22" y="128" width="236" height="18" rx="9" fill="#F4F4F4" />
      <rect x="28" y="134" width="136" height="6" rx="3" fill="#2AABE2" />
      <circle cx="164" cy="137" r="5.5" fill="#111113" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}
