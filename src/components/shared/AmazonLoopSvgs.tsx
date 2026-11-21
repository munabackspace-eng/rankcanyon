import { cn } from "@/lib/utils";

/**
 * Subtle geometric interlocking-circle grid inspired by Employo's hero backdrop.
 */
export function HeroCircleGridSvg({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id="employo-circle-grid"
          width="72"
          height="72"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="36"
            cy="36"
            r="34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#employo-circle-grid)" />
    </svg>
  );
}

/**
 * Hand-drawn looping underline curve placed beneath highlighted headline words.
 */
export function WordLoopUnderlineSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 20"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={cn("pointer-events-none select-none", className)}
    >
      <path
        d="M4 14C56 4 148 3 216 12"
        className="stroke-brand-500/35"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M4 14C56 4 148 3 216 12"
        className="animate-svg-draw stroke-brand-600"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Flowing dashed connector loop used between Pre-Live and Post-Live testing cards.
 */
export function PhaseConnectorLoopSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 36"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <path
        d="M10 24C52 4 128 4 168 22"
        className="animate-svg-dash stroke-brand-600"
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <path
        d="M162 15L170 23L160 26"
        className="stroke-brand-600"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="24" r="4.5" className="animate-svg-pulse fill-brand-500" />
      <circle cx="10" cy="24" r="2.5" className="fill-brand-600" />
    </svg>
  );
}

/**
 * Employo-inspired animated mini-UI SVG illustrations for each 4-step Process card.
 */
export function ProcessStepLoopSvg({ step }: { step: string }) {
  switch (step) {
    case "01":
      return (
        <svg
          viewBox="0 0 240 148"
          fill="none"
          aria-hidden="true"
          className="h-auto w-full select-none"
        >
          {/* Mini dashboard frame */}
          <rect
            x="10"
            y="10"
            width="220"
            height="128"
            rx="14"
            fill="#ffffff"
            stroke="#d8d8d8"
          />
          <circle cx="26" cy="25" r="3.5" fill="#232020" />
          <rect x="36" y="22" width="68" height="6" rx="3" fill="#232020" />
          <rect x="174" y="19" width="42" height="12" rx="6" fill="#ebf5fb" />
          <circle cx="182" cy="25" r="2.5" className="animate-svg-pulse fill-brand-600" />
          <rect x="188" y="23" width="22" height="4" rx="2" fill="#2674bc" />

          {/* Audit rows */}
          {[46, 74, 102].map((y, idx) => (
            <g key={y}>
              <rect
                x="22"
                y={y}
                width="196"
                height="20"
                rx="6"
                fill={idx === 1 ? "#ebf5fb" : "#f4f4f4"}
              />
              <circle
                cx="34"
                cy={y + 10}
                r="4"
                fill={idx === 1 ? "#2674bc" : "#2aabe2"}
              />
              <rect
                x="45"
                y={y + 7}
                width={idx === 0 ? 74 : idx === 1 ? 88 : 62}
                height="6"
                rx="3"
                fill="#232020"
                fillOpacity={idx === 1 ? "0.9" : "0.55"}
              />
              <rect
                x="172"
                y={y + 5}
                width="36"
                height="10"
                rx="5"
                fill={idx === 1 ? "#2674bc" : "#cae8f6"}
              />
            </g>
          ))}

          {/* Looping vertical audit scan bar */}
          <g className="animate-svg-scan">
            <line
              x1="18"
              y1="52"
              x2="222"
              y2="52"
              stroke="#2aabe2"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <rect
              x="18"
              y="46"
              width="204"
              height="12"
              rx="4"
              fill="#2aabe2"
              fillOpacity="0.12"
            />
          </g>
        </svg>
      );

    case "02":
      return (
        <svg
          viewBox="0 0 240 148"
          fill="none"
          aria-hidden="true"
          className="h-auto w-full select-none"
        >
          <rect
            x="10"
            y="10"
            width="220"
            height="128"
            rx="14"
            fill="#ffffff"
            stroke="#d8d8d8"
          />
          <rect x="24" y="22" width="76" height="7" rx="3.5" fill="#232020" />
          {/* Channel KPI pills */}
          <circle cx="29" cy="44" r="5" fill="#2674bc" />
          <circle cx="44" cy="44" r="5" fill="#2aabe2" />
          <circle cx="59" cy="44" r="5" fill="#232020" />

          {/* Left roadmap rows */}
          <rect x="24" y="62" width="78" height="14" rx="5" fill="#f4f4f4" />
          <rect x="30" y="67" width="44" height="4" rx="2" fill="#232020" />
          <rect x="82" y="66" width="14" height="6" rx="3" fill="#2674bc" />

          <rect x="24" y="82" width="78" height="14" rx="5" fill="#ebf5fb" />
          <rect x="30" y="87" width="50" height="4" rx="2" fill="#2674bc" />
          <rect x="84" y="86" width="12" height="6" rx="3" fill="#2aabe2" />

          <rect x="24" y="102" width="78" height="14" rx="5" fill="#f4f4f4" />
          <rect x="30" y="107" width="38" height="4" rx="2" fill="#575555" />

          {/* Right multi-segment Amazon allocation donut (Employo Step 2 style) */}
          <g transform="translate(166 78)">
            <circle cx="0" cy="0" r="34" stroke="#ebf5fb" strokeWidth="11" />
            <circle
              cx="0"
              cy="0"
              r="34"
              stroke="#2674bc"
              strokeWidth="11"
              strokeDasharray="96 120"
              strokeLinecap="round"
              transform="rotate(-90)"
            />
            <circle
              cx="0"
              cy="0"
              r="34"
              stroke="#2aabe2"
              strokeWidth="11"
              strokeDasharray="58 158"
              strokeDashoffset="-102"
              strokeLinecap="round"
              transform="rotate(-90)"
            />
            <circle
              cx="0"
              cy="0"
              r="43"
              stroke="#2aabe2"
              strokeOpacity="0.45"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              className="animate-svg-orbit"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#232020"
              fontSize="12"
              fontWeight="800"
            >
              3.8x
            </text>
          </g>
        </svg>
      );

    case "03":
      return (
        <svg
          viewBox="0 0 240 148"
          fill="none"
          aria-hidden="true"
          className="h-auto w-full select-none"
        >
          <rect
            x="10"
            y="10"
            width="220"
            height="128"
            rx="14"
            fill="#ffffff"
            stroke="#d8d8d8"
          />
          {/* Top automation toggle row */}
          <rect x="22" y="22" width="196" height="28" rx="8" fill="#f4f4f4" />
          <circle cx="36" cy="36" r="6" fill="#2674bc" />
          <rect x="48" y="33" width="84" height="6" rx="3" fill="#232020" />
          <rect x="178" y="29" width="28" height="14" rx="7" fill="#2aabe2" />
          <circle cx="199" cy="36" r="5" fill="#ffffff" className="animate-svg-pulse" />

          {/* Second optimization toggle row */}
          <rect x="22" y="58" width="196" height="28" rx="8" fill="#ebf5fb" />
          <circle cx="36" cy="72" r="6" fill="#2aabe2" />
          <rect x="48" y="69" width="96" height="6" rx="3" fill="#232020" />
          <rect x="178" y="65" width="28" height="14" rx="7" fill="#2674bc" />
          <circle cx="199" cy="72" r="5" fill="#ffffff" />

          {/* Flowing dashed S-curve optimization loop */}
          <path
            d="M28 118C74 118 92 98 132 108C164 116 184 98 210 98"
            className="animate-svg-dash stroke-brand-600"
            strokeWidth="2.25"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />
          <circle cx="132" cy="108" r="5" fill="#2aabe2" className="animate-svg-pulse" />
          <rect x="166" y="108" width="50" height="16" rx="8" fill="#232020" />
          <text
            x="191"
            y="119"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="8.5"
            fontWeight="700"
          >
            LIVE BID
          </text>
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 240 148"
          fill="none"
          aria-hidden="true"
          className="h-auto w-full select-none"
        >
          <rect
            x="10"
            y="10"
            width="220"
            height="128"
            rx="14"
            fill="#ffffff"
            stroke="#d8d8d8"
          />
          {/* Top KPI dots + live pill (Employo Step 3 style) */}
          <circle cx="30" cy="28" r="6" fill="#232020" />
          <circle cx="50" cy="28" r="6" fill="#2674bc" />
          <circle cx="70" cy="28" r="6" fill="#2aabe2" />
          <rect x="172" y="21" width="44" height="14" rx="7" fill="#232020" />
          <circle cx="181" cy="28" r="2.5" fill="#2aabe2" className="animate-svg-pulse" />
          <text
            x="198"
            y="31"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="8"
            fontWeight="700"
          >
            +184%
          </text>

          {/* Compounding area + self-drawing growth line */}
          <defs>
            <linearGradient id="scaleAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2aabe2" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#2aabe2" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M24 114L58 98L92 104L126 78L162 84L214 52V122H24V114Z"
            fill="url(#scaleAreaGrad)"
          />
          <path
            d="M24 114L58 98L92 104L126 78L162 84L214 52"
            stroke="#cae8f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 114L58 98L92 104L126 78L162 84L214 52"
            className="animate-svg-draw stroke-brand-600"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="214" cy="52" r="5" fill="#2674bc" className="animate-svg-pulse" />
        </svg>
      );
  }
}

/**
 * Employo-inspired looping mini-UI vector illustrations for the 6 Amazon service cards.
 */
export function ServiceLoopSvg({ slug }: { slug: string }) {
  switch (slug) {
    case "amazon-ppc-management":
      return (
        <svg
          viewBox="0 0 200 116"
          fill="none"
          aria-hidden="true"
          className="mx-auto h-28 w-auto select-none"
        >
          <g className="animate-svg-float">
            <rect x="24" y="14" width="152" height="88" rx="12" fill="#ffffff" />
            <rect x="38" y="26" width="52" height="6" rx="3" fill="#232020" />
            <rect x="124" y="23" width="38" height="12" rx="6" fill="#ebf5fb" />
            <text
              x="143"
              y="32"
              textAnchor="middle"
              fill="#2674bc"
              fontSize="7.5"
              fontWeight="800"
            >
              4.6x
            </text>
            {/* Rising PPC bars */}
            <rect x="40" y="68" width="14" height="20" rx="3" fill="#cae8f6" />
            <rect x="64" y="58" width="14" height="30" rx="3" fill="#a3dbf2" />
            <rect x="88" y="50" width="14" height="38" rx="3" fill="#56b7e3" />
            <rect x="112" y="42" width="14" height="46" rx="3" fill="#2aabe2" />
            <rect x="136" y="34" width="14" height="54" rx="3" fill="#2674bc" />
            <path
              d="M44 62L71 52L95 45L119 37L143 29"
              className="animate-svg-dash stroke-navy-950"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );

    case "listing-optimization":
      return (
        <svg
          viewBox="0 0 200 116"
          fill="none"
          aria-hidden="true"
          className="mx-auto h-28 w-auto select-none"
        >
          <g className="animate-svg-float">
            <rect x="24" y="14" width="152" height="88" rx="12" fill="#ffffff" />
            {/* Product thumbnail + SEO title lines */}
            <rect x="36" y="28" width="40" height="44" rx="8" fill="#ebf5fb" />
            <path d="M48 56L56 44L64 56H48Z" fill="#2674bc" />
            <rect x="86" y="30" width="76" height="6" rx="3" fill="#232020" />
            <rect x="86" y="42" width="58" height="5" rx="2.5" fill="#8c8a8a" />
            {/* 5 conversion stars */}
            {[88, 98, 108, 118, 128].map((cx) => (
              <circle key={cx} cx={cx} cy="58" r="3.5" fill="#2aabe2" />
            ))}
            {/* Rank #1 pill */}
            <rect x="36" y="80" width="126" height="12" rx="6" fill="#f4f4f4" />
            <rect x="36" y="80" width="104" height="12" rx="6" fill="#2674bc" />
            <circle
              cx="152"
              cy="86"
              r="3.5"
              fill="#2aabe2"
              className="animate-svg-pulse"
            />
          </g>
        </svg>
      );

    case "amazon-dsp":
      return (
        <svg
          viewBox="0 0 200 116"
          fill="none"
          aria-hidden="true"
          className="mx-auto h-28 w-auto select-none"
        >
          <rect x="24" y="14" width="152" height="88" rx="12" fill="#ffffff" />
          <g transform="translate(100 58)">
            <circle
              cx="0"
              cy="0"
              r="33"
              stroke="#2674bc"
              strokeWidth="1.75"
              strokeDasharray="5 5"
              className="animate-svg-orbit"
            />
            <circle cx="0" cy="0" r="20" fill="#ebf5fb" />
            <circle cx="0" cy="0" r="10" fill="#2674bc" />
            <circle
              cx="-33"
              cy="0"
              r="4.5"
              fill="#2aabe2"
              className="animate-svg-pulse"
            />
            <circle cx="33" cy="0" r="4.5" fill="#232020" />
            <circle cx="0" cy="-33" r="4.5" fill="#2674bc" />
          </g>
        </svg>
      );

    case "account-management":
      return (
        <svg
          viewBox="0 0 200 116"
          fill="none"
          aria-hidden="true"
          className="mx-auto h-28 w-auto select-none"
        >
          <g className="animate-svg-float">
            <rect x="24" y="14" width="152" height="88" rx="12" fill="#ffffff" />
            <rect x="36" y="26" width="128" height="20" rx="6" fill="#ebf5fb" />
            <circle cx="48" cy="36" r="5" fill="#2674bc" />
            <path
              d="M45.8 36L47.4 37.6L50.5 34.4"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="59" y="33" width="62" height="6" rx="3" fill="#232020" />
            <text
              x="146"
              y="39"
              textAnchor="middle"
              fill="#2674bc"
              fontSize="8"
              fontWeight="800"
            >
              99.4%
            </text>

            <rect x="36" y="54" width="128" height="16" rx="5" fill="#f4f4f4" />
            <circle cx="48" cy="62" r="4" fill="#2aabe2" className="animate-svg-pulse" />
            <rect x="59" y="59" width="76" height="6" rx="3" fill="#575555" />

            <rect x="36" y="76" width="128" height="16" rx="5" fill="#f4f4f4" />
            <circle cx="48" cy="84" r="4" fill="#2674bc" />
            <rect x="59" y="81" width="54" height="6" rx="3" fill="#575555" />
          </g>
        </svg>
      );

    case "creative-and-a-plus-content":
      return (
        <svg
          viewBox="0 0 200 116"
          fill="none"
          aria-hidden="true"
          className="mx-auto h-28 w-auto select-none"
        >
          <g className="animate-svg-float">
            <rect x="24" y="14" width="152" height="88" rx="12" fill="#ffffff" />
            {/* Split A / B creative cards */}
            <rect x="36" y="26" width="58" height="64" rx="8" fill="#f4f4f4" />
            <text
              x="65"
              y="56"
              textAnchor="middle"
              fill="#8c8a8a"
              fontSize="11"
              fontWeight="800"
            >
              A
            </text>
            <rect x="46" y="68" width="38" height="6" rx="3" fill="#d8d8d8" />

            <rect
              x="106"
              y="26"
              width="58"
              height="64"
              rx="8"
              fill="#ebf5fb"
              stroke="#2674bc"
              strokeWidth="1.75"
            />
            <text
              x="135"
              y="52"
              textAnchor="middle"
              fill="#2674bc"
              fontSize="11"
              fontWeight="800"
            >
              B +34%
            </text>
            <rect x="116" y="66" width="38" height="8" rx="4" fill="#2674bc" />
            <circle cx="156" cy="32" r="5" fill="#2aabe2" className="animate-svg-pulse" />
          </g>
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 200 116"
          fill="none"
          aria-hidden="true"
          className="mx-auto h-28 w-auto select-none"
        >
          <rect x="24" y="14" width="152" height="88" rx="12" fill="#ffffff" />
          {/* Global marketplace nodes + flowing expansion arc */}
          <path
            d="M48 74C74 34 126 34 152 74"
            className="animate-svg-dash stroke-brand-600"
            strokeWidth="2.25"
            strokeDasharray="5 4"
            strokeLinecap="round"
          />
          <path
            d="M48 74C78 58 122 58 152 74"
            stroke="#cae8f6"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="48" cy="74" r="8" fill="#232020" />
          <text
            x="48"
            y="77"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="7"
            fontWeight="700"
          >
            US
          </text>
          <circle cx="100" cy="44" r="9" fill="#2674bc" className="animate-svg-pulse" />
          <text
            x="100"
            y="47"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="7"
            fontWeight="700"
          >
            UK
          </text>
          <circle cx="152" cy="74" r="8" fill="#2aabe2" />
          <text
            x="152"
            y="77"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="7"
            fontWeight="700"
          >
            EU
          </text>
        </svg>
      );
  }
}
