"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { Metric } from "@/types";

type TrustGrowthWaveProps = {
  metrics: Metric[];
};

const MAIN_WAVE_PATH =
  "M 18 452 C 68 452, 105 418, 155 418 C 205 418, 248 428, 298 428 C 352 428, 398 354, 455 354 C 508 354, 548 364, 598 364 C 652 364, 698 286, 755 286 C 808 286, 845 294, 895 294 C 948 294, 992 222, 1045 222 C 1085 222, 1112 228, 1144 222 C 1184 214, 1218 164, 1252 124";

const ECHO_WAVE_PATH =
  "M 18 467 C 68 467, 105 433, 155 433 C 205 433, 248 443, 298 443 C 352 443, 398 369, 455 369 C 508 369, 548 379, 598 379 C 652 379, 698 301, 755 301 C 808 301, 845 309, 895 309 C 948 309, 992 237, 1045 237 C 1085 237, 1112 243, 1144 237 C 1186 229, 1222 180, 1256 141";

const WAVE_PROGRESS_STOPS = [115, 355, 600, 845] as const;

/**
 * Interactive ascending growth wave SVG:
 * 1. Climbs from bottom-left to top-right with an upward-pointing growth arrow.
 * 2. Pre-triggers ahead of scroll and reveals all 4 trust-metric cards rapidly (<350ms).
 * 3. Keeps all 4 cards permanently visible while smoothly cycling active highlights.
 */
export function TrustGrowthWave({ metrics }: TrustGrowthWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [waveDrawn, setWaveDrawn] = useState(false);
  const [arrowShown, setArrowShown] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [userLocked, setUserLocked] = useState(false);

  const m0 = metrics[0] ?? {
    category: "Revenue Growth",
    value: "1.7B+",
    label: "Revenue Generated",
    description: "Total revenue generated or managed for client brands.",
  };
  const m1 = metrics[1] ?? {
    category: "Advertising Performance",
    value: "3.8×",
    label: "Average ROAS",
    description: "Average return on advertising spend.",
  };
  const m2 = metrics[2] ?? {
    category: "Profitability",
    value: "-34%",
    label: "ACoS Reduction",
    description: "Average reduction in advertising cost of sales.",
  };
  const m3 = metrics[3] ?? {
    category: "Brand Experience",
    value: "760+",
    label: "Brands Supported",
    description: "Number of brands served by the agency.",
  };
  const resolvedMetrics = [m0, m1, m2, m3];

  // Pre-trigger ahead of the viewport so the wave & cards are ready immediately on scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fast initial reveal (<350ms total) — cards stay visible once revealed
  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      const immediate = window.setTimeout(() => {
        setWaveDrawn(true);
        setArrowShown(true);
        setVisibleCount(4);
        setActiveCard(1);
      }, 0);
      return () => window.clearTimeout(immediate);
    }

    const timers: number[] = [
      window.setTimeout(() => {
        setWaveDrawn(true);
        setVisibleCount(1);
      }, 0),
      window.setTimeout(() => {
        setVisibleCount(2);
      }, 100),
      window.setTimeout(() => {
        setVisibleCount(3);
      }, 200),
      window.setTimeout(() => {
        setVisibleCount(4);
        setArrowShown(true);
        setActiveCard(1);
      }, 300),
    ];

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [inView]);

  // Gentle ambient highlight progression across the 4 permanently visible cards
  useEffect(() => {
    if (!inView || userLocked || visibleCount < 4) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const intervalId = window.setInterval(() => {
      setActiveCard((prev) => ((prev ?? 0) + 1) % 4);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [inView, userLocked, visibleCount]);

  const handleSelectCard = (index: number) => {
    setUserLocked(true);
    setWaveDrawn(true);
    setArrowShown(true);
    setVisibleCount((prev) => Math.max(prev, index + 1, 4));
    setActiveCard(index);
  };

  const handleLeaveCanvas = () => {
    if (userLocked) {
      setActiveCard(null);
      setUserLocked(false);
    }
  };

  const highlightLength = activeCard !== null ? WAVE_PROGRESS_STOPS[activeCard] : 0;

  return (
    <div ref={containerRef} onMouseLeave={handleLeaveCanvas} className="mt-6 sm:mt-8">
      {/* Desktop & Tablet: Ascending growth wave + floating cards SVG */}
      <div className="hidden sm:block">
        <svg
          viewBox="0 0 1280 476"
          fill="none"
          shapeRendering="geometricPrecision"
          className="block h-auto w-full overflow-visible select-none"
          role="img"
          aria-label="Interactive Amazon growth wave displaying RankCanyon's four key client metrics"
        >
          <defs>
            <filter id="trustCardRestShadow" x="-12%" y="-10%" width="124%" height="130%">
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="10"
                floodColor="#232020"
                floodOpacity="0.065"
              />
            </filter>
            <filter
              id="trustCardActiveShadow"
              x="-14%"
              y="-12%"
              width="128%"
              height="134%"
            >
              <feDropShadow
                dx="0"
                dy="12"
                stdDeviation="12"
                floodColor="#2aabe2"
                floodOpacity="0.2"
              />
            </filter>
          </defs>

          {/* Secondary companion harmonic cyan wave */}
          <path
            d={ECHO_WAVE_PATH}
            pathLength={1000}
            stroke="#2aabe2"
            strokeOpacity={waveDrawn ? 0.28 : 0}
            strokeWidth="2.25"
            strokeDasharray="1000"
            strokeDashoffset={waveDrawn ? 0 : 1000}
            strokeLinecap="round"
            style={{
              transition:
                "stroke-dashoffset 480ms cubic-bezier(0.33, 1, 0.68, 1), stroke-opacity 220ms ease",
            }}
          />

          {/* Primary #232020 ascending wave — climbs from bottom-left to top-right */}
          <path
            d={MAIN_WAVE_PATH}
            pathLength={1000}
            stroke="#232020"
            strokeOpacity={waveDrawn ? 1 : 0}
            strokeWidth="4.75"
            strokeDasharray="1000"
            strokeDashoffset={waveDrawn ? 0 : 1000}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition:
                "stroke-dashoffset 440ms cubic-bezier(0.33, 1, 0.68, 1), stroke-opacity 180ms ease",
            }}
          />

          {/* Continuous traveling #2AABE2 energy shimmer once wave has drawn */}
          {waveDrawn && (
            <path
              d={MAIN_WAVE_PATH}
              pathLength={1000}
              stroke="#2aabe2"
              strokeWidth="4.75"
              strokeDasharray="140 1000"
              strokeLinecap="round"
              className="animate-svg-wave"
            />
          )}

          {/* Interactive #2AABE2 active segment highlight up to the hovered/selected card */}
          <path
            d={MAIN_WAVE_PATH}
            pathLength={1000}
            stroke="#2aabe2"
            strokeOpacity={activeCard !== null ? 1 : 0}
            strokeWidth="5.5"
            strokeDasharray={`${highlightLength} 1000`}
            strokeLinecap="round"
            style={{
              transition:
                "stroke-dasharray 320ms cubic-bezier(0.22, 1, 0.36, 1), stroke-opacity 200ms ease",
            }}
          />

          {/* Upward-right growth arrowhead at the top-right tip of the wave */}
          <g
            style={{
              opacity: arrowShown ? 1 : 0,
              transform: arrowShown ? "translate(0px, 0px)" : "translate(-8px, 8px)",
              transformBox: "fill-box",
              transformOrigin: "center",
              transition:
                "opacity 200ms ease, transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <path
              d="M 1228 127 L 1252 124 L 1253 148"
              stroke="#232020"
              strokeWidth="4.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* ===============================================================
           * CARD 1 (Crest 1 @ x=155, y=418): $450M+ Annual revenue managed
           * ============================================================= */}
          <g
            role="button"
            tabIndex={0}
            aria-label={`${m0.value} ${m0.label}`}
            className="cursor-pointer outline-none"
            onMouseEnter={() => handleSelectCard(0)}
            onFocus={() => handleSelectCard(0)}
            onClick={() => handleSelectCard(0)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelectCard(0);
              }
            }}
          >
            {/* Dashed stem from Crest 1 up to Card 1 */}
            <line
              x1="155"
              y1="401"
              x2="155"
              y2="364"
              pathLength={100}
              stroke={activeCard === 0 ? "#2aabe2" : "#232020"}
              strokeWidth="2.25"
              strokeDasharray="5 5"
              opacity={visibleCount >= 1 ? 1 : 0}
              style={{ transition: "opacity 220ms ease, stroke 200ms ease" }}
            />

            {/* '#' circle node ON Crest 1 */}
            <g
              transform="translate(155 418)"
              style={{
                opacity: visibleCount >= 1 ? 1 : 0,
                transition: "opacity 200ms ease",
              }}
            >
              <g
                style={{
                  transform:
                    visibleCount >= 1
                      ? activeCard === 0
                        ? "scale(1.14)"
                        : "scale(1)"
                      : "scale(0.6)",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transition: "transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {activeCard === 0 && (
                  <circle cx="0" cy="0" r="22" fill="#2aabe2" fillOpacity="0.22" />
                )}
                <circle
                  cx="0"
                  cy="0"
                  r="17"
                  fill={activeCard === 0 ? "#2674bc" : "#232020"}
                />
                <text
                  x="0"
                  y="5.5"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="16"
                  fontWeight="800"
                >
                  #
                </text>
              </g>
            </g>

            {/* Floating Card 1 */}
            <g transform="translate(28 180)">
              <g
                style={{
                  opacity: visibleCount >= 1 ? 1 : 0,
                  transform:
                    visibleCount >= 1
                      ? activeCard === 0
                        ? "translateY(-6px)"
                        : "translateY(0px)"
                      : "translateY(14px)",
                  transformBox: "fill-box",
                  transformOrigin: "center bottom",
                  transition:
                    "opacity 240ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <rect
                  x="0"
                  y="0"
                  width="254"
                  height="184"
                  rx="22"
                  fill="#ffffff"
                  stroke={activeCard === 0 ? "#2aabe2" : "#e4e7ec"}
                  strokeWidth={activeCard === 0 ? "2" : "1.25"}
                  filter={
                    activeCard === 0
                      ? "url(#trustCardActiveShadow)"
                      : "url(#trustCardRestShadow)"
                  }
                />
                <circle
                  cx="38"
                  cy="36"
                  r="19"
                  fill="#dff2fc"
                  stroke="#bae4f8"
                  strokeWidth="1.2"
                />
                <path
                  d="M31 42V30H39V42M39 34H45V42M29 42H47M34 33H36M34 37H36"
                  stroke="#2674bc"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <text x="22" y="74" fill="#2674bc" fontSize="11.5" fontWeight="700">
                  {m0.category ?? "Revenue Growth"}
                </text>
                <text x="22" y="106" fill="#232020" fontSize="30" fontWeight="800">
                  {m0.value}
                </text>
                <text x="22" y="127" fill="#232020" fontSize="13" fontWeight="700">
                  {m0.label}
                </text>
                <text x="22" y="148" fill="#575555" fontSize="11.2" fontWeight="500">
                  <tspan x="22" dy="0">
                    Total revenue generated or
                  </tspan>
                  <tspan x="22" dy="15.5">
                    managed for client brands.
                  </tspan>
                </text>
              </g>
            </g>
          </g>

          {/* ===============================================================
           * CARD 2 (Crest 2 @ x=455, y=354): 3.8x Average blended ROAS
           * ============================================================= */}
          <g
            role="button"
            tabIndex={0}
            aria-label={`${m1.value} ${m1.label}`}
            className="cursor-pointer outline-none"
            onMouseEnter={() => handleSelectCard(1)}
            onFocus={() => handleSelectCard(1)}
            onClick={() => handleSelectCard(1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelectCard(1);
              }
            }}
          >
            <g
              style={{
                opacity: visibleCount >= 2 ? 1 : 0,
                transition: "opacity 220ms ease",
              }}
            >
              <line
                x1="455"
                y1="354"
                x2="455"
                y2="314"
                stroke={activeCard === 1 ? "#2aabe2" : "#232020"}
                strokeWidth="2.25"
                strokeDasharray="5 5"
              />
              <circle
                cx="455"
                cy="312"
                r="4.5"
                fill={activeCard === 1 ? "#2aabe2" : "#232020"}
              />
            </g>

            {/* Floating Card 2 */}
            <g transform="translate(328 122)">
              <g
                style={{
                  opacity: visibleCount >= 2 ? 1 : 0,
                  transform:
                    visibleCount >= 2
                      ? activeCard === 1
                        ? "translateY(-6px)"
                        : "translateY(0px)"
                      : "translateY(14px)",
                  transformBox: "fill-box",
                  transformOrigin: "center bottom",
                  transition:
                    "opacity 240ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <rect
                  x="0"
                  y="0"
                  width="254"
                  height="184"
                  rx="22"
                  fill="#ffffff"
                  stroke={activeCard === 1 ? "#2aabe2" : "#e4e7ec"}
                  strokeWidth={activeCard === 1 ? "2" : "1.25"}
                  filter={
                    activeCard === 1
                      ? "url(#trustCardActiveShadow)"
                      : "url(#trustCardRestShadow)"
                  }
                />
                <circle
                  cx="38"
                  cy="36"
                  r="19"
                  fill="#dff2fc"
                  stroke="#bae4f8"
                  strokeWidth="1.2"
                />
                <rect
                  x="30"
                  y="29"
                  width="16"
                  height="14"
                  rx="2.5"
                  stroke="#2674bc"
                  strokeWidth="1.7"
                />
                <path
                  d="M30 34H46M34 27V30M42 27V30"
                  stroke="#2674bc"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <text x="22" y="74" fill="#2674bc" fontSize="11.5" fontWeight="700">
                  {m1.category ?? "Advertising Performance"}
                </text>
                <text x="22" y="106" fill="#232020" fontSize="30" fontWeight="800">
                  {m1.value}
                </text>
                <text x="22" y="127" fill="#232020" fontSize="13" fontWeight="700">
                  {m1.label}
                </text>
                <text x="22" y="148" fill="#575555" fontSize="11.2" fontWeight="500">
                  <tspan x="22" dy="0">
                    Average return on
                  </tspan>
                  <tspan x="22" dy="15.5">
                    advertising spend.
                  </tspan>
                </text>
              </g>
            </g>
          </g>

          {/* ===============================================================
           * CARD 3 (Crest 3 @ x=755, y=286): -34% Average TACoS reduction
           * ============================================================= */}
          <g
            role="button"
            tabIndex={0}
            aria-label={`${m2.value} ${m2.label}`}
            className="cursor-pointer outline-none"
            onMouseEnter={() => handleSelectCard(2)}
            onFocus={() => handleSelectCard(2)}
            onClick={() => handleSelectCard(2)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelectCard(2);
              }
            }}
          >
            <line
              x1="755"
              y1="269"
              x2="755"
              y2="238"
              stroke={activeCard === 2 ? "#2aabe2" : "#232020"}
              strokeWidth="2.25"
              strokeDasharray="5 5"
              opacity={visibleCount >= 3 ? 1 : 0}
              style={{ transition: "opacity 220ms ease, stroke 200ms ease" }}
            />

            {/* '#' circle node ON Crest 3 */}
            <g
              transform="translate(755 286)"
              style={{
                opacity: visibleCount >= 3 ? 1 : 0,
                transition: "opacity 200ms ease",
              }}
            >
              <g
                style={{
                  transform:
                    visibleCount >= 3
                      ? activeCard === 2
                        ? "scale(1.14)"
                        : "scale(1)"
                      : "scale(0.6)",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transition: "transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {activeCard === 2 && (
                  <circle cx="0" cy="0" r="22" fill="#2aabe2" fillOpacity="0.22" />
                )}
                <circle
                  cx="0"
                  cy="0"
                  r="17"
                  fill={activeCard === 2 ? "#2674bc" : "#232020"}
                />
                <text
                  x="0"
                  y="5.5"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="16"
                  fontWeight="800"
                >
                  #
                </text>
              </g>
            </g>

            {/* Floating Card 3 */}
            <g transform="translate(628 54)">
              <g
                style={{
                  opacity: visibleCount >= 3 ? 1 : 0,
                  transform:
                    visibleCount >= 3
                      ? activeCard === 2
                        ? "translateY(-6px)"
                        : "translateY(0px)"
                      : "translateY(14px)",
                  transformBox: "fill-box",
                  transformOrigin: "center bottom",
                  transition:
                    "opacity 240ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <rect
                  x="0"
                  y="0"
                  width="254"
                  height="184"
                  rx="22"
                  fill="#ffffff"
                  stroke={activeCard === 2 ? "#2aabe2" : "#e4e7ec"}
                  strokeWidth={activeCard === 2 ? "2" : "1.25"}
                  filter={
                    activeCard === 2
                      ? "url(#trustCardActiveShadow)"
                      : "url(#trustCardRestShadow)"
                  }
                />
                <circle
                  cx="38"
                  cy="36"
                  r="19"
                  fill="#dff2fc"
                  stroke="#bae4f8"
                  strokeWidth="1.2"
                />
                <path
                  d="M31 32H45M31 37H41M31 42H38M42 39L45 42L48 37"
                  stroke="#2674bc"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <text x="22" y="74" fill="#2674bc" fontSize="11.5" fontWeight="700">
                  {m2.category ?? "Profitability"}
                </text>
                <text x="22" y="106" fill="#232020" fontSize="30" fontWeight="800">
                  {m2.value}
                </text>
                <text x="22" y="127" fill="#232020" fontSize="13" fontWeight="700">
                  {m2.label}
                </text>
                <text x="22" y="148" fill="#575555" fontSize="11.2" fontWeight="500">
                  <tspan x="22" dy="0">
                    Average reduction in
                  </tspan>
                  <tspan x="22" dy="15.5">
                    advertising cost of sales.
                  </tspan>
                </text>
              </g>
            </g>
          </g>

          {/* ===============================================================
           * CARD 4 (Crest 4 @ x=1045, y=222): 150+ Brands scaled
           * ============================================================= */}
          <g
            role="button"
            tabIndex={0}
            aria-label={`${m3.value} ${m3.label}`}
            className="cursor-pointer outline-none"
            onMouseEnter={() => handleSelectCard(3)}
            onFocus={() => handleSelectCard(3)}
            onClick={() => handleSelectCard(3)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelectCard(3);
              }
            }}
          >
            <g
              style={{
                opacity: visibleCount >= 4 ? 1 : 0,
                transition: "opacity 220ms ease",
              }}
            >
              <line
                x1="1045"
                y1="222"
                x2="1045"
                y2="192"
                stroke={activeCard === 3 ? "#2aabe2" : "#232020"}
                strokeWidth="2.25"
                strokeDasharray="5 5"
              />
              <circle
                cx="1045"
                cy="190"
                r="4.5"
                fill={activeCard === 3 ? "#2aabe2" : "#232020"}
              />
            </g>

            {/* Floating Card 4 */}
            <g transform="translate(916 4)">
              <g
                style={{
                  opacity: visibleCount >= 4 ? 1 : 0,
                  transform:
                    visibleCount >= 4
                      ? activeCard === 3
                        ? "translateY(-6px)"
                        : "translateY(0px)"
                      : "translateY(14px)",
                  transformBox: "fill-box",
                  transformOrigin: "center bottom",
                  transition:
                    "opacity 240ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <rect
                  x="0"
                  y="0"
                  width="258"
                  height="180"
                  rx="22"
                  fill="#ffffff"
                  stroke={activeCard === 3 ? "#2aabe2" : "#e4e7ec"}
                  strokeWidth={activeCard === 3 ? "2" : "1.25"}
                  filter={
                    activeCard === 3
                      ? "url(#trustCardActiveShadow)"
                      : "url(#trustCardRestShadow)"
                  }
                />
                <circle
                  cx="38"
                  cy="36"
                  r="19"
                  fill="#dff2fc"
                  stroke="#bae4f8"
                  strokeWidth="1.2"
                />
                <path
                  d="M32 28H41L45 32V44H32V28ZM41 28V32H45M35 36H42M35 40H40"
                  stroke="#2674bc"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <text x="22" y="74" fill="#2674bc" fontSize="11.5" fontWeight="700">
                  {m3.category ?? "Brand Experience"}
                </text>
                <text x="22" y="106" fill="#232020" fontSize="30" fontWeight="800">
                  {m3.value}
                </text>
                <text x="22" y="127" fill="#232020" fontSize="13" fontWeight="700">
                  {m3.label}
                </text>
                <text x="22" y="148" fill="#575555" fontSize="11.2" fontWeight="500">
                  <tspan x="22" dy="0">
                    Number of brands served
                  </tspan>
                  <tspan x="22" dy="15.5">
                    by the agency.
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Compact phones (< 640px): ascending wave header SVG + fast 2-col cards */}
      <div className="sm:hidden" aria-hidden="true">
        <svg viewBox="0 0 420 64" fill="none" className="mb-4 h-auto w-full">
          <path
            d="M 8 56 C 48 56, 78 44, 118 44 C 158 44, 188 30, 228 30 C 268 30, 298 18, 338 18 C 366 18, 388 12, 410 6"
            pathLength={1000}
            stroke="#232020"
            strokeOpacity={waveDrawn ? 1 : 0}
            strokeWidth="3.5"
            strokeDasharray="1000"
            strokeDashoffset={waveDrawn ? 0 : 1000}
            strokeLinecap="round"
            style={{
              transition:
                "stroke-dashoffset 400ms cubic-bezier(0.33, 1, 0.68, 1), stroke-opacity 180ms ease",
            }}
          />
          <path
            d="M 398 5 L 411 6 L 408 18"
            stroke="#232020"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={arrowShown ? 1 : 0}
            style={{ transition: "opacity 200ms ease" }}
          />
        </svg>

        <div className="grid grid-cols-2 gap-3.5">
          {resolvedMetrics.map((metric, i) => {
            const shown = visibleCount > i;
            const active = activeCard === i;
            return (
              <button
                key={metric.label}
                type="button"
                onClick={() => handleSelectCard(i)}
                className={cn(
                  "rounded-2xl border bg-background p-4 text-left shadow-card transition-all duration-300",
                  active ? "-translate-y-1 border-brand-500" : "border-border",
                  shown
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0",
                )}
              >
                {metric.category && (
                  <p className="text-[11px] font-bold text-brand-600">
                    {metric.category}
                  </p>
                )}
                <p className="mt-1 font-display text-2xl font-extrabold text-navy-950">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-xs leading-snug font-bold text-navy-950">
                  {metric.label}
                </p>
                {metric.description && (
                  <p className="mt-1 text-[11px] leading-snug text-muted">
                    {metric.description}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
