"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { Container } from "@/components/layout/Container";
import { Button, ButtonLink, type ButtonProps } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface ActionProps {
  text: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  className?: string;
}

export interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats?: StatProps[];
  /** Optional photo URLs; when omitted, renders the animated Amazon service SVG stage. */
  images?: string[];
  imageAlts?: [string, string, string];
  /** Optional brand wordmarks rendered along the bottom of the 100vh hero. */
  brands?: string[];
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardPopVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PpcEngineSvg() {
  return (
    <svg
      viewBox="0 0 264 204"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-label="Amazon PPC and TACoS optimization graphic"
      className="size-full"
    >
      {/* Header row */}
      <circle cx="14" cy="18" r="5" fill="#2AABE2" />
      <text
        x="26"
        y="22"
        fill="#232020"
        fontSize="11"
        fontWeight="800"
        letterSpacing="0.05em"
      >
        PPC · DSP · TACOS
      </text>
      <rect x="176" y="6" width="78" height="24" rx="12" fill="#111113" />
      <text
        x="215"
        y="21.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="10.5"
        fontWeight="800"
      >
        4.8x ROAS
      </text>

      {/* Crisp inner chart stage */}
      <rect x="10" y="34" width="244" height="118" rx="13" fill="#F4F4F4" />
      <line x1="22" y1="68" x2="242" y2="68" stroke="#232020" strokeOpacity="0.08" />
      <line x1="22" y1="104" x2="242" y2="104" stroke="#232020" strokeOpacity="0.08" />
      <line
        x1="22"
        y1="142"
        x2="242"
        y2="142"
        stroke="#232020"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />

      {/* Animated Sponsored Ads Revenue Bars */}
      {[
        { x: 26, h: 42, y: 102, fill: "#A3DBF2" },
        { x: 62, h: 56, y: 88, fill: "#56B7E3" },
        { x: 98, h: 70, y: 74, fill: "#2AABE2" },
        { x: 134, h: 82, y: 62, fill: "#2674BC" },
        { x: 170, h: 94, y: 50, fill: "#1E609E" },
        { x: 206, h: 104, y: 40, fill: "#2AABE2" },
      ].map((bar, i) => (
        <m.rect
          key={bar.x}
          x={bar.x}
          width="24"
          rx="6"
          fill={bar.fill}
          initial={{ y: 144, height: 0 }}
          animate={{
            y: [bar.y + 5, bar.y - 3, bar.y + 5],
            height: [bar.h - 5, bar.h + 3, bar.h - 5],
          }}
          transition={{
            duration: 2.8,
            delay: i * 0.16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Crisp solid TACoS compression trendline */}
      <path
        d="M 38 60 C 82 74, 124 92, 166 105 C 192 113, 208 117, 218 119"
        stroke="#111113"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <circle cx="218" cy="119" r="5.5" fill="#111113" />
      <circle cx="218" cy="119" r="10" stroke="#2AABE2" strokeWidth="2.25" />

      {/* Bottom KPI strip */}
      <rect x="10" y="160" width="118" height="34" rx="11" fill="#111113" />
      <text
        x="69"
        y="181"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="11.5"
        fontWeight="800"
      >
        Sales +62% ↑
      </text>

      <rect
        x="136"
        y="160"
        width="118"
        height="34"
        rx="11"
        fill="#EBF5FB"
        stroke="#2AABE2"
        strokeWidth="1.5"
      />
      <text
        x="195"
        y="181"
        textAnchor="middle"
        fill="#1E609E"
        fontSize="11.5"
        fontWeight="800"
      >
        TACoS 8.6% ↓
      </text>
    </svg>
  );
}

function ListingSeoSvg() {
  return (
    <svg
      viewBox="0 0 248 200"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-label="Amazon Listing SEO, A+ Content, and Buy Box optimization graphic"
      className="size-full"
    >
      {/* Top #1 Best Seller Ribbon */}
      <rect x="10" y="8" width="110" height="24" rx="12" fill="#2AABE2" />
      <text
        x="65"
        y="23.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="10"
        fontWeight="800"
        letterSpacing="0.05em"
      >
        #1 BEST SELLER
      </text>
      <text x="164" y="24.5" fill="#2AABE2" fontSize="13" fontWeight="800">
        ★★★★★
      </text>

      {/* Crisp inner product detail stage */}
      <rect x="6" y="38" width="236" height="108" rx="13" fill="#F4F4F4" />

      {/* Left Crisp Product Gallery Illustration */}
      <rect
        x="16"
        y="46"
        width="74"
        height="70"
        rx="11"
        fill="#FFFFFF"
        stroke="#2AABE2"
        strokeWidth="1.75"
      />
      {/* Isometric Product Package inside gallery */}
      <path d="M53 59 L70 68.5 L53 78 L36 68.5 Z" fill="#2AABE2" />
      <path d="M36 68.5 V89.5 L53 99 V78 Z" fill="#56B7E3" />
      <path d="M70 68.5 V89.5 L53 99 V78 Z" fill="#1E609E" />
      <rect x="16" y="123" width="21" height="14" rx="4" fill="#2AABE2" />
      <rect
        x="42.5"
        y="123"
        width="21"
        height="14"
        rx="4"
        fill="#FFFFFF"
        stroke="#2AABE2"
        strokeWidth="1.25"
      />
      <rect
        x="69"
        y="123"
        width="21"
        height="14"
        rx="4"
        fill="#FFFFFF"
        stroke="#2AABE2"
        strokeWidth="1.25"
      />

      {/* Right Crisp SEO Title, Keyword & Buy Box Bars */}
      <rect x="102" y="48" width="132" height="10" rx="5" fill="#232020" />
      <rect x="102" y="65" width="98" height="8" rx="4" fill="#2674BC" />
      <rect
        x="102"
        y="82"
        width="128"
        height="6.5"
        rx="3.25"
        fill="#232020"
        fillOpacity="0.32"
      />
      <rect
        x="102"
        y="95"
        width="114"
        height="6.5"
        rx="3.25"
        fill="#232020"
        fillOpacity="0.32"
      />

      {/* Buy Box CTA pill */}
      <rect x="102" y="114" width="96" height="22" rx="11" fill="#2AABE2" />
      <text
        x="150"
        y="128.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="9.5"
        fontWeight="800"
      >
        99.4% BUY BOX
      </text>

      {/* Bottom CRO & Keyword chips */}
      <rect
        x="10"
        y="154"
        width="110"
        height="34"
        rx="11"
        fill="#EBF5FB"
        stroke="#2AABE2"
        strokeWidth="1.5"
      />
      <text
        x="65"
        y="175"
        textAnchor="middle"
        fill="#1E609E"
        fontSize="11"
        fontWeight="800"
      >
        +31% CVR Lift
      </text>
      <rect x="128" y="154" width="110" height="34" rx="11" fill="#111113" />
      <text
        x="183"
        y="175"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="11"
        fontWeight="800"
      >
        SQP Rank #1
      </text>
    </svg>
  );
}

function FbaGlobalOpsSvg() {
  return (
    <svg
      viewBox="0 0 228 196"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-label="FBA inventory and global Amazon marketplace management graphic"
      className="size-full"
    >
      <text
        x="114"
        y="20"
        textAnchor="middle"
        fill="#232020"
        fontSize="11"
        fontWeight="800"
        letterSpacing="0.06em"
      >
        1P / 3P · FBA · GLOBAL
      </text>

      {/* Crisp Orbital Marketplace Hub */}
      <circle cx="114" cy="94" r="54" fill="#EBF5FB" fillOpacity="0.7" />
      <circle
        cx="114"
        cy="94"
        r="48"
        stroke="#2AABE2"
        strokeOpacity="0.55"
        strokeWidth="1.75"
      />
      <circle
        cx="114"
        cy="94"
        r="33"
        stroke="#2674BC"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />

      {/* Crisp Connector Spokes */}
      <line x1="70" y1="66" x2="92" y2="80" stroke="#2AABE2" strokeWidth="1.5" />
      <line x1="158" y1="66" x2="136" y2="80" stroke="#2AABE2" strokeWidth="1.5" />
      <line x1="70" y1="122" x2="92" y2="108" stroke="#2674BC" strokeWidth="1.5" />
      <line x1="158" y1="122" x2="136" y2="108" stroke="#2AABE2" strokeWidth="1.5" />

      {/* Center Isometric FBA Parcel Cube */}
      <rect x="92" y="72" width="44" height="44" rx="13" fill="#111113" />
      <path d="M114 81 L126 87.5 L114 94 L102 87.5 Z" fill="#2AABE2" />
      <path d="M102 87.5 V100.5 L114 107 V94 Z" fill="#56B7E3" />
      <path d="M126 87.5 V100.5 L114 107 V94 Z" fill="#1E609E" />

      {/* Marketplace Nodes */}
      <g>
        <rect
          x="36"
          y="50"
          width="34"
          height="22"
          rx="11"
          fill="#FFFFFF"
          stroke="#2AABE2"
          strokeWidth="1.75"
        />
        <text
          x="53"
          y="64.5"
          textAnchor="middle"
          fill="#232020"
          fontSize="10"
          fontWeight="800"
        >
          US
        </text>
      </g>
      <g>
        <rect
          x="158"
          y="50"
          width="34"
          height="22"
          rx="11"
          fill="#FFFFFF"
          stroke="#2AABE2"
          strokeWidth="1.75"
        />
        <text
          x="175"
          y="64.5"
          textAnchor="middle"
          fill="#232020"
          fontSize="10"
          fontWeight="800"
        >
          EU
        </text>
      </g>
      <g>
        <rect
          x="36"
          y="116"
          width="34"
          height="22"
          rx="11"
          fill="#FFFFFF"
          stroke="#2674BC"
          strokeWidth="1.75"
        />
        <text
          x="53"
          y="130.5"
          textAnchor="middle"
          fill="#232020"
          fontSize="10"
          fontWeight="800"
        >
          UK
        </text>
      </g>
      <g>
        <rect x="158" y="116" width="34" height="22" rx="11" fill="#2AABE2" />
        <text
          x="175"
          y="130.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="800"
        >
          CA
        </text>
      </g>

      {/* Bottom In-stock status pill (crisp outline, no gray background fill) */}
      <rect
        x="14"
        y="156"
        width="200"
        height="28"
        rx="14"
        fill="#FFFFFF"
        stroke="#232020"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
      <circle cx="30" cy="170" r="4.5" fill="#2AABE2" />
      <text x="42" y="174" fill="#232020" fontSize="10.5" fontWeight="800">
        99.6% In-Stock · IPI Protected
      </text>
    </svg>
  );
}

function AmazonServiceSvgStage() {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <m.div
      className="relative mx-auto h-[430px] w-full max-w-[36rem] sm:h-[490px] lg:h-[510px] lg:max-w-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* SVG 1 (Top-Center): Amazon PPC & TACoS Engine */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-0 left-1/2 z-10 w-[14rem] -translate-x-1/2 sm:w-[15.75rem] xl:w-[16.25rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{
            duration: 4.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.14)]"
        >
          <PpcEngineSvg />
        </m.div>
      </m.div>

      {/* SVG 2 (Middle-Right): Listing SEO, Buy Box & CRO */}
      <m.div
        variants={cardPopVariants}
        className="absolute top-[40%] right-0 z-20 w-[13.25rem] sm:w-[15rem] xl:w-[15.5rem]"
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
          <ListingSeoSvg />
        </m.div>
      </m.div>

      {/* SVG 3 (Bottom-Left): FBA Inventory & Global Marketplaces */}
      <m.div
        variants={cardPopVariants}
        className="absolute bottom-2 left-0 z-20 w-[12.5rem] sm:bottom-3 sm:w-[14rem] xl:w-[14.5rem]"
      >
        <m.div
          animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
          transition={{
            duration: 4.0,
            delay: 0.7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="rounded-2xl border border-navy-950/10 bg-background p-3.5 shadow-[0_16px_38px_-12px_rgba(16,32,56,0.14)]"
        >
          <FbaGlobalOpsSvg />
        </m.div>
      </m.div>
    </m.div>
  );
}

const HeroSection = ({
  title,
  subtitle,
  actions,
  stats,
  images,
  imageAlts = [
    "Brand founders reviewing packaging and marketplace analytics",
    "Consumer brand founder in product design studio",
    "Outdoor gear founder scaling category share on Amazon",
  ],
  brands,
  className,
}: HeroSectionProps) => {
  const hasPhotoCollage = Boolean(images && images.length >= 3);

  const hasBrands = Boolean(brands && brands.length > 0);

  return (
    <section
      className={cn(
        "relative isolate flex w-full flex-col overflow-x-clip bg-background",
        hasBrands
          ? "min-h-dvh pt-[calc(var(--header-height)+1.5rem)] pb-10 sm:pt-[calc(var(--header-height)+2rem)] sm:pb-12 lg:pt-[calc(var(--header-height)+2.5rem)] lg:pb-14"
          : "justify-center pt-[calc(var(--header-height)+1.75rem)] pb-10 sm:pt-[calc(var(--header-height)+2.25rem)] sm:pb-12 lg:min-h-[86dvh] lg:pt-[var(--header-height)] lg:pb-6",
        className,
      )}
    >
      {/* Subtle top-left glow behind text only — right SVG area stays pure #FFFFFF with zero background tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(40% 45% at 14% 20%, rgba(235,245,251,0.6) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {hasBrands && (
        <div aria-hidden="true" className="max-h-4 flex-1 sm:max-h-6 lg:max-h-8" />
      )}

      <div className="py-2 sm:py-3">
        <Container className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Column: Wider Content Column (7/12 = ~58%) */}
          <m.div
            className="flex min-w-0 flex-col items-center text-center lg:col-span-7 lg:items-start lg:pr-4 lg:text-left xl:pr-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <m.h1
              className="w-full text-4xl leading-[1.08] font-extrabold tracking-[-0.035em] text-pretty text-navy-950 sm:text-6xl lg:text-[70px]"
              variants={itemVariants}
            >
              {title}
            </m.h1>

            <m.p
              className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:mt-8 sm:text-lg lg:text-[1.15rem]"
              variants={itemVariants}
            >
              {subtitle}
            </m.p>

            <m.div
              className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-9 lg:justify-start"
              variants={itemVariants}
            >
              {actions.map((action, index) =>
                action.href ? (
                  <ButtonLink
                    key={index}
                    href={action.href}
                    variant={action.variant}
                    size="lg"
                    className={action.className}
                  >
                    {action.text}
                  </ButtonLink>
                ) : (
                  <Button
                    key={index}
                    onClick={action.onClick}
                    variant={action.variant}
                    size="lg"
                    className={action.className}
                  >
                    {action.text}
                  </Button>
                ),
              )}
            </m.div>

            {stats && stats.length > 0 ? (
              <m.div
                className="mt-10 flex flex-wrap justify-center gap-8 sm:mt-12 sm:gap-10 lg:justify-start"
                variants={itemVariants}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3.5 text-left">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-500/20 bg-ice text-brand-600">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="font-display text-xl leading-tight font-extrabold text-navy-950">
                        {stat.value}
                      </p>
                      {stat.label ? (
                        <p className="text-xs font-medium text-muted sm:text-sm">
                          {stat.label}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </m.div>
            ) : null}
          </m.div>

          {/* Right Column: Animated Amazon Service SVG Constellation (5/12 = ~42%) */}
          <div className="min-w-0 lg:col-span-5">
            {hasPhotoCollage && images ? (
              <m.div
                className="relative mx-auto h-[400px] w-full max-w-[34rem] sm:h-[470px] lg:max-w-none"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="absolute top-0 left-1/2 z-10 h-48 w-48 -translate-x-1/2 rounded-2xl border border-navy-950/[0.06] bg-background p-2 shadow-premium sm:h-64 sm:w-64">
                  <div className="relative size-full overflow-hidden rounded-xl">
                    <Image
                      src={images[0]}
                      alt={imageAlts[0]}
                      fill
                      preload
                      sizes="(min-width: 640px) 256px, 192px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-1/3 right-0 z-20 h-40 w-40 rounded-2xl border border-navy-950/[0.06] bg-background p-2 shadow-premium sm:h-56 sm:w-56">
                  <div className="relative size-full overflow-hidden rounded-xl">
                    <Image
                      src={images[1]}
                      alt={imageAlts[1]}
                      fill
                      loading="eager"
                      sizes="(min-width: 640px) 224px, 160px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 z-20 h-32 w-32 rounded-2xl border border-navy-950/[0.06] bg-background p-2 shadow-premium sm:h-48 sm:w-48">
                  <div className="relative size-full overflow-hidden rounded-xl">
                    <Image
                      src={images[2]}
                      alt={imageAlts[2]}
                      fill
                      loading="eager"
                      sizes="(min-width: 640px) 192px, 128px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </m.div>
            ) : (
              <AmazonServiceSvgStage />
            )}
          </div>
        </Container>
      </div>

      {/* Clean Transparent Bottom Brand Marquee */}
      {hasBrands && brands ? (
        <>
          <div aria-hidden="true" className="min-h-6 flex-1" />
          <div className="relative z-10 w-full overflow-hidden mask-fade-x py-2">
            <div className="flex w-max animate-marquee gap-14 pr-14 hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="flex shrink-0 items-center gap-14"
                >
                  {brands.map((brand) => (
                    <li
                      key={brand}
                      className="font-display text-lg font-bold tracking-tight whitespace-nowrap text-navy-400 transition-colors hover:text-navy-950 sm:text-2xl"
                    >
                      {brand}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default HeroSection;
