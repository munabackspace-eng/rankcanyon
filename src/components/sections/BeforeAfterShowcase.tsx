import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";

function BeforeCurvedArrowSvg() {
  return (
    <svg
      viewBox="0 0 84 92"
      fill="none"
      aria-hidden="true"
      className="h-16 w-14 text-navy-950 sm:h-20 sm:w-16"
    >
      <path
        d="M52 6C68 32 62 64 16 80"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M28 67L14 81L33 84"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AfterCurvedArrowSvg() {
  return (
    <svg
      viewBox="0 0 76 74"
      fill="none"
      aria-hidden="true"
      className="h-14 w-14 text-white/90 sm:h-16 sm:w-16"
    >
      <path
        d="M20 8C18 34 30 52 58 60"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M47 48L60 61L43 65"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BeforeAfterShowcase() {
  return (
    <section
      aria-labelledby="before-after-heading"
      className="relative isolate overflow-x-clip bg-background pt-12 pb-16 text-foreground sm:pt-16 sm:pb-24"
    >
      <Container>
        {/* Wide Plus Jakarta Sans ExtraBold section heading (no eyebrow) */}
        <div className="max-w-6xl">
          <h2
            id="before-after-heading"
            className="text-3xl leading-[1.08] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.6rem]"
          >
            From cluttered listings to{" "}
            <span className="text-brand-500">conversion-engineered storefronts.</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            We replace flat DIY product snapshots and walls of text with click-winning
            main images, 7-slot infographic stacks, Premium A+ Content and mobile-first
            Brand Stores.
          </p>
        </div>

        {/* Before & After dual-stage showcase (tilted outlined neo-brutalist card style) */}
        <div className="mt-16 grid items-stretch gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-9">
          {/* ===============================================================
              BEFORE PANEL (Left 5 columns — White tilted card + #111113 hard offset shadow)
             =============================================================== */}
          <Reveal className="flex lg:col-span-5">
            <div className="relative flex w-full -rotate-[0.8deg] flex-col rounded-[1.75rem] border-2 border-[#111113] bg-background px-4 pt-16 pb-8 shadow-[7px_8px_0_0_#111113] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_11px_0_0_#111113] sm:px-6 sm:pt-20 sm:pb-10 lg:-rotate-[1.5deg] lg:hover:-rotate-[0.5deg]">
              {/* Floating tilted "Before" pill badge */}
              <div className="absolute -top-6 left-1/2 z-20 -translate-x-1/2 -rotate-6">
                <span className="inline-block rounded-full border-2 border-[#111113] bg-background px-8 py-2 font-display text-2xl font-extrabold tracking-tight text-navy-950 shadow-[4px_5px_0_0_#111113] sm:px-9 sm:py-2.5 sm:text-3xl">
                  Before
                </span>
              </div>

              {/* Hand-drawn curved arrow pointing to cluttered listing */}
              <div className="-mt-6 mb-2 flex justify-center pl-14">
                <BeforeCurvedArrowSvg />
              </div>

              {/* Overlapping cluttered old Amazon listing collage */}
              <div className="relative mx-auto mt-1 min-h-[27rem] w-full max-w-md flex-1 sm:min-h-[30rem]">
                {/* 1. Left tilted tall wall-of-text old PDP screenshot */}
                <div className="relative z-10 w-[64%] -rotate-2 overflow-hidden rounded-lg border border-navy-950/15 bg-background shadow-md">
                  <div className="flex items-center gap-1.5 bg-charcoal px-2.5 py-1.5">
                    <span className="size-1.5 rounded-full bg-white/40" />
                    <span className="h-2 w-20 rounded-xs bg-white/25" />
                    <span className="ml-auto h-2 w-8 rounded-xs bg-brand-500/60" />
                  </div>

                  <div className="p-2.5">
                    <div className="grid grid-cols-12 gap-2 rounded-sm bg-[#eceef1] p-2">
                      <div className="relative col-span-5 aspect-square overflow-hidden rounded-xs border border-black/10">
                        <Image
                          src="/images/transformation/before-amateur.jpg"
                          alt="Unoptimized amateur product pouch snapshot"
                          fill
                          sizes="140px"
                          className="object-cover contrast-90"
                        />
                      </div>
                      <div className="col-span-7 flex flex-col justify-center gap-1">
                        <div className="text-[8px] leading-tight font-extrabold text-navy-900 uppercase">
                          Basic Product Listing
                        </div>
                        <span className="rounded-xs bg-navy-950/10 px-1.5 py-0.5 text-[6.5px] font-semibold text-navy-700">
                          Generic DIY Snapshot
                        </span>
                        <span className="rounded-xs bg-navy-950/10 px-1.5 py-0.5 text-[6.5px] font-semibold text-navy-700">
                          Plain Label Design
                        </span>
                        <span className="rounded-xs bg-navy-950/10 px-1.5 py-0.5 text-[6.5px] font-semibold text-navy-700">
                          No Benefit Hierarchy
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 space-y-1">
                      <div className="h-1.5 w-full rounded-xs bg-navy-950/18" />
                      <div className="h-1.5 w-11/12 rounded-xs bg-navy-950/12" />
                      <div className="h-1.5 w-full rounded-xs bg-navy-950/12" />
                      <div className="h-1.5 w-4/5 rounded-xs bg-navy-950/12" />
                      <div className="pt-1 text-[6.5px] leading-tight text-navy-700/70">
                        Generic keyword-stuffed title and unformatted bullet points that
                        fail to communicate value or build buyer trust...
                      </div>
                    </div>

                    <div className="mt-2.5 grid grid-cols-12 gap-1.5 rounded-sm bg-[#f2f3f5] p-2">
                      <div className="relative col-span-5 aspect-square overflow-hidden rounded-xs">
                        <Image
                          src="/images/transformation/before-amateur.jpg"
                          alt="Amateur tabletop product photo"
                          fill
                          sizes="120px"
                          className="scale-110 object-cover opacity-85"
                        />
                      </div>
                      <div className="col-span-7 space-y-1">
                        <div className="text-[7.5px] font-bold text-navy-800 uppercase">
                          Standard Details
                        </div>
                        <div className="h-2.5 w-full rounded-xs bg-navy-950/10" />
                        <div className="h-2.5 w-5/6 rounded-xs bg-navy-950/10" />
                        <div className="h-2.5 w-4/5 rounded-xs bg-navy-950/10" />
                      </div>
                    </div>

                    <div className="mt-2.5 space-y-1 pb-1">
                      <div className="h-1.5 w-full rounded-xs bg-navy-950/14" />
                      <div className="h-1.5 w-10/12 rounded-xs bg-navy-950/10" />
                      <div className="h-1.5 w-9/12 rounded-xs bg-navy-950/10" />
                    </div>
                  </div>
                </div>

                {/* 2. Top-right tilted cluttered square infographic */}
                <div className="absolute top-2 right-0 z-10 w-[44%] rotate-3 rounded-lg border border-navy-950/15 bg-[#eef1f4] p-2.5 shadow-md">
                  <p className="text-[8px] leading-tight font-extrabold text-navy-900 uppercase">
                    Unoptimized Gallery
                  </p>
                  <div className="mt-1.5 grid grid-cols-12 items-center gap-1.5">
                    <div className="relative col-span-6 aspect-square overflow-hidden rounded-xs border border-black/10">
                      <Image
                        src="/images/transformation/before-amateur.jpg"
                        alt="Plain pouch thumbnail"
                        fill
                        sizes="100px"
                        className="object-cover"
                      />
                    </div>
                    <div className="col-span-6 space-y-1">
                      <span className="block rounded-xs bg-white px-1 py-0.5 text-[6px] font-bold text-navy-700">
                        Flat Photo
                      </span>
                      <span className="block rounded-xs bg-white px-1 py-0.5 text-[6px] font-bold text-navy-700">
                        Low CTR 0.9%
                      </span>
                      <span className="block rounded-xs bg-white px-1 py-0.5 text-[6px] font-bold text-navy-700">
                        No Callouts
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Center overlapping raw Amazon Buy-Box PDP card */}
                <div className="absolute top-36 right-0 z-20 w-[76%] rotate-2 rounded-lg border border-navy-950/20 bg-background p-3 shadow-card-hover">
                  <div className="grid grid-cols-12 gap-2.5">
                    <div className="relative col-span-4 aspect-square overflow-hidden rounded-sm border border-border bg-surface">
                      <Image
                        src="/images/transformation/before-amateur.jpg"
                        alt="Crooked unedited main listing photo"
                        fill
                        sizes="120px"
                        className="scale-105 -rotate-6 object-cover"
                      />
                    </div>
                    <div className="col-span-5 space-y-1">
                      <p className="line-clamp-2 text-[8px] leading-tight font-semibold text-navy-900">
                        Generic Unoptimized Product Title Stuffed With Random Keywords...
                      </p>
                      <div className="flex items-center gap-1 text-[7px] text-navy-600">
                        <span className="font-bold">3.6</span>
                        <span className="tracking-tighter text-navy-400">★★★☆☆</span>
                        <span>(42)</span>
                      </div>
                      <div className="text-[9px] font-extrabold text-navy-950">
                        $29.99
                      </div>
                      <div className="h-1.5 w-4/5 rounded-xs bg-navy-950/12" />
                    </div>
                    <div className="col-span-3 flex flex-col justify-between rounded-sm border border-border bg-surface p-1.5">
                      <span className="text-[6.5px] font-bold text-navy-700">
                        1.8% CVR
                      </span>
                      <span className="text-[6px] text-muted">High ACoS</span>
                      <span className="rounded-xs bg-navy-950/15 py-0.5 text-center text-[6px] font-bold text-navy-800">
                        Add to Cart
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Bottom-right tilted flat basic square card */}
                <div className="absolute right-3 bottom-1 z-10 w-[40%] -rotate-3 rounded-lg border border-navy-950/15 bg-[#e9edf2] p-2.5 text-center shadow-sm">
                  <p className="text-[7.5px] font-extrabold tracking-wide text-navy-800 uppercase">
                    Generic Template
                  </p>
                  <div className="mx-auto mt-1.5 flex size-16 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-navy-200 to-white shadow-inner">
                    <span className="text-[7px] font-bold text-navy-600">BASIC A+</span>
                  </div>
                  <div className="mt-1.5 flex justify-between text-[6px] font-semibold text-navy-500">
                    <span>PLAIN</span>
                    <span>LOW TRUST</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ===============================================================
              AFTER PANEL (Right 7 columns — Charcoal #4d4d4f tilted card + #2AABE2 blue hard offset shadow)
             =============================================================== */}
          <Reveal delay={0.1} className="flex lg:col-span-7 lg:mt-4">
            <div className="relative flex w-full rotate-[0.8deg] flex-col rounded-[1.75rem] border-2 border-[#111113] bg-[#4d4d4f] px-4 pt-16 pb-7 shadow-[8px_9px_0_0_#2aabe2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[11px_12px_0_0_#2aabe2] sm:px-6 sm:pt-20 sm:pb-8 lg:rotate-[1.4deg] lg:hover:rotate-[0.4deg]">
              {/* Floating tilted "After" pill badge */}
              <div className="absolute -top-6 left-8 z-30 -rotate-3 sm:left-14">
                <span className="inline-block rounded-full border-2 border-[#111113] bg-background px-9 py-2 font-display text-2xl font-extrabold tracking-tight text-navy-950 shadow-[4px_5px_0_0_#2aabe2] sm:px-10 sm:py-2.5 sm:text-3xl">
                  After
                </span>
              </div>

              {/* Pop-out top-right hero banner card */}
              <div className="relative z-20 mx-auto mb-5 w-60 rounded-2xl border-2 border-[#111113] bg-background p-2 shadow-[5px_6px_0_0_#2aabe2] sm:absolute sm:-top-9 sm:right-6 sm:mx-0 sm:mb-0 sm:w-64 sm:rotate-2">
                <Image
                  src="/images/transformation/owkar-mod-1.jpg"
                  alt="OWKAR Handheld Vacuum Sealer hero A+ banner"
                  width={415}
                  height={180}
                  sizes="256px"
                  className="h-auto w-full rounded-xl"
                />
              </div>

              {/* Hand-drawn arrow pointing down into the OWKAR A+ creative collage */}
              <div className="-mt-6 mb-2 hidden pl-28 sm:flex">
                <AfterCurvedArrowSvg />
              </div>

              {/* Multi-panel collage spread built exclusively from the 2nd uploaded image */}
              <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:items-start sm:gap-3">
                {/* COLUMN 1 (4 cols): Zoomed module callout stack from the 2nd image */}
                <div className="flex flex-col gap-2.5 sm:col-span-4">
                  {[
                    {
                      src: "/images/transformation/owkar-mod-1.jpg",
                      w: 415,
                      h: 180,
                      alt: "OWKAR Handheld Vacuum Sealer 6X longer freshness banner",
                    },
                    {
                      src: "/images/transformation/owkar-mod-2.jpg",
                      w: 415,
                      h: 152,
                      alt: "Everything You Need Straight Out of the Box — 32 bags and 4 clips",
                    },
                    {
                      src: "/images/transformation/owkar-mod-3.jpg",
                      w: 415,
                      h: 166,
                      alt: "How Freshness is Sealed in Seconds module",
                    },
                    {
                      src: "/images/transformation/owkar-mod-4.jpg",
                      w: 415,
                      h: 164,
                      alt: "Save Food, Save Money benefit module",
                    },
                    {
                      src: "/images/transformation/owkar-mod-5.jpg",
                      w: 415,
                      h: 172,
                      alt: "6X Longer Freshness vs Ordinary Storage comparison chart",
                    },
                  ].map((mod) => (
                    <div
                      key={mod.src}
                      className="overflow-hidden rounded-xl border-2 border-background bg-background shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <Image
                        src={mod.src}
                        alt={mod.alt}
                        width={mod.w}
                        height={mod.h}
                        sizes="(min-width: 640px) 220px, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                  ))}
                </div>

                {/* COLUMN 2 (4 cols): Full uncropped vertical Premium A+ Content strip */}
                <div className="overflow-hidden rounded-xl border-2 border-background bg-background shadow-card sm:col-span-4">
                  <Image
                    src="/images/transformation/owkar-aplus.jpg"
                    alt="Full OWKAR Handheld Vacuum Sealer Premium A+ Content page"
                    width={415}
                    height={1024}
                    sizes="(min-width: 640px) 250px, 100vw"
                    className="h-auto w-full"
                  />
                </div>

                {/* COLUMN 3 (4 cols, cleared below pop-out top-right card): Mobile frame + zoomed bottom modules */}
                <div className="flex flex-col gap-2.5 sm:col-span-4 sm:pt-20">
                  {/* Mobile PDP / Brand Store phone preview */}
                  <div className="mx-auto w-full max-w-[11.5rem] rounded-[1.5rem] border-2 border-white/25 bg-[#1e2028] p-1.5 shadow-md">
                    <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-white/30" />
                    <div className="max-h-56 overflow-hidden rounded-xl bg-background">
                      <Image
                        src="/images/transformation/owkar-aplus.jpg"
                        alt="Mobile view of OWKAR Premium A+ storefront"
                        width={415}
                        height={1024}
                        sizes="184px"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>

                  {/* Star rating divider */}
                  <div className="mx-auto flex items-center justify-center gap-0.5 rounded-full bg-background px-3 py-1 shadow-xs">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        aria-hidden="true"
                        className="size-3 fill-brand-500 text-brand-500"
                      />
                    ))}
                  </div>

                  {/* Zoomed comparison modules from bottom of the 2nd image */}
                  <div className="overflow-hidden rounded-xl border-2 border-background bg-background shadow-sm">
                    <Image
                      src="/images/transformation/owkar-mod-5.jpg"
                      alt="6X Longer Freshness storage comparison table"
                      width={415}
                      height={172}
                      sizes="(min-width: 640px) 220px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="overflow-hidden rounded-xl border-2 border-background bg-background shadow-sm">
                    <Image
                      src="/images/transformation/owkar-mod-6.jpg"
                      alt="Better Than Regular Food Storage organized vs messy fridge comparison"
                      width={415}
                      height={165}
                      sizes="(min-width: 640px) 220px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom CTA row */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ButtonLink href="/case-studies" size="lg">
            See Every Case Study
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
