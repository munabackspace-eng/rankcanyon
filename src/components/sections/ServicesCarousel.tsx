"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ServiceInteractiveSvg } from "@/components/shared/ServiceInteractiveSvg";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type ServiceCarouselItem = {
  slug: string;
  title: string;
  summary: string;
};

type ServicesCarouselProps = {
  services: ServiceCarouselItem[];
  title: string;
  description: string;
  isDefaultTitle: boolean;
  showAllLink: boolean;
};

export function ServicesCarousel({
  services,
  title,
  description,
  isDefaultTitle,
  showAllLink,
}: ServicesCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollBounds = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 12);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 12);
  }, []);

  useEffect(() => {
    updateScrollBounds();
    const el = scrollerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollBounds, { passive: true });
    window.addEventListener("resize", updateScrollBounds, { passive: true });
    return () => {
      el.removeEventListener("scroll", updateScrollBounds);
      window.removeEventListener("resize", updateScrollBounds);
    };
  }, [updateScrollBounds]);

  const getStepWidth = () => {
    const el = scrollerRef.current;
    if (!el) return 340;
    const firstCard = el.querySelector("li");
    if (!firstCard) return 340;
    return firstCard.getBoundingClientRect().width + 20;
  };

  const scrollPrev = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: -getStepWidth(), behavior: "smooth" });
  };

  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (!canScrollNext) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: getStepWidth(), behavior: "smooth" });
  };

  return (
    <div className="relative w-full pt-16 pb-14 sm:pt-20 sm:pb-20 lg:pt-24">
      {/* Lower full-width #4d4d4f backdrop (starts below the diagonal left edge so top stays cleanly cut along the ribbon) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 bottom-0 z-0 bg-[#4d4d4f]"
      />

      {/* Header + Prev/Next circular controls */}
      <div className="relative z-30 px-5 sm:px-6 lg:px-[max(2rem,calc((100%-90rem)/2+2rem))]">
        <div className="flex w-full flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-5xl">
            <h2
              id="services-heading"
              className="text-3xl leading-[1.08] font-extrabold tracking-tight text-wrap text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.6rem]"
            >
              {isDefaultTitle ? (
                <>
                  We Do{" "}
                  <span className="text-brand-400">Everything Your Brand Needs</span> to
                  Grow and Succeed
                </>
              ) : (
                title
              )}
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/90 sm:text-lg">
              {description}
            </p>
          </div>

          {/* Carousel navigation buttons */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous service"
              className={cn(
                "inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/18 bg-black/30 text-white shadow-md transition-all duration-200 sm:size-12",
                canScrollPrev
                  ? "hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-500 active:scale-95"
                  : "cursor-not-allowed opacity-40",
              )}
            >
              <ArrowLeft className="size-4 sm:size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next service"
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/18 bg-black/30 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-500 active:scale-95 sm:size-12"
            >
              <ArrowRight className="size-4 sm:size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Single-row 4-up horizontal services carousel */}
      <ul
        ref={scrollerRef}
        className="relative z-30 mt-10 flex snap-x snap-mandatory scroll-pl-5 [scrollbar-width:none] items-stretch gap-5 overflow-x-auto scroll-smooth px-5 pt-2 pb-4 sm:mt-12 sm:scroll-pl-6 sm:px-6 lg:scroll-pl-[max(2rem,calc((100%-90rem)/2+2rem))] lg:px-[max(2rem,calc((100%-90rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service) => {
          const svgFirst =
            service.slug === "marketplace-ppc-advertising-management" ||
            service.slug === "product-image-creative-design";

          const contentBlock = (
            <div className="flex flex-col">
              <h3 className="font-display text-lg leading-snug font-extrabold tracking-tight text-navy-950 sm:text-[1.15rem] xl:text-[1.25rem]">
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-brand-600 focus-visible:outline-none"
                >
                  {service.title}
                </Link>
              </h3>

              <p className="mt-2.5 text-xs leading-relaxed text-navy-800/80 sm:text-[13.5px]">
                {service.summary}
              </p>

              <div className="mt-4">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 border-0 bg-transparent p-0 font-display text-xs font-extrabold text-navy-950 transition-colors duration-200 hover:text-brand-600 sm:text-[13px]"
                >
                  <span className="underline decoration-navy-950/35 underline-offset-4 transition-colors group-hover:decoration-brand-500">
                    Learn More
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          );

          const svgBlock = (
            <div className="flex flex-1 flex-col">
              <ServiceInteractiveSvg slug={service.slug} />
            </div>
          );

          return (
            <li
              key={service.slug}
              className="flex w-[84vw] max-w-[22.5rem] shrink-0 snap-start sm:w-[22rem] sm:max-w-none md:w-[23rem] lg:w-[23.75rem] xl:w-[24.75rem]"
            >
              <article className="group relative flex w-full flex-col gap-5 rounded-2xl border-2 border-navy-950 bg-surface p-5 shadow-[5px_6px_0_0_#2aabe2] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ebf5fb] hover:shadow-[7px_8px_0_0_#2aabe2] sm:rounded-[1.35rem] lg:p-6">
                {svgFirst ? (
                  <>
                    {svgBlock}
                    {contentBlock}
                  </>
                ) : (
                  <>
                    {contentBlock}
                    {svgBlock}
                  </>
                )}
              </article>
            </li>
          );
        })}

        {/* Trailing spacer so the final card's offset shadow never clips */}
        <li aria-hidden="true" className="w-3 shrink-0 sm:w-6 lg:w-10" />
      </ul>

      {showAllLink && (
        <div className="relative z-30 mt-10 px-6 text-center sm:mt-12">
          <ButtonLink href="/services" variant="primary" size="lg">
            Explore All Services
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </div>
      )}
    </div>
  );
}
