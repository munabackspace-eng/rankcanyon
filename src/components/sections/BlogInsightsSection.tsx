"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { getSortedPosts } from "@/data/blog-posts";
import type { BlogPost } from "@/types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function formatCardDate(iso: string): string {
  const [year = "", month = "1", day = "01"] = iso.split("-");
  const monthLabel = MONTHS[Math.max(0, Math.min(11, Number(month) - 1))] ?? "Jan";
  return `${monthLabel} ${day.padStart(2, "0")} ${year}`;
}

export function BlogInsightsSection({
  posts = getSortedPosts(),
}: {
  posts?: BlogPost[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
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

  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (!canScrollNext) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: 400, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: -400, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="blog-insights-heading"
      className="relative w-full overflow-x-clip bg-background pt-12 pb-10 text-foreground sm:pt-16 sm:pb-14"
    >
      {/* Centered section header (no eyebrow) */}
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2
            id="blog-insights-heading"
            className="text-3xl leading-[1.1] font-extrabold tracking-tight text-navy-950 sm:text-5xl lg:text-[3.35rem] xl:text-[3.6rem]"
          >
            Insights &amp; Strategies to <br className="hidden md:inline" />
            Grow Your{" "}
            <span className="whitespace-nowrap text-brand-500">E-Commerce Brand</span>
          </h2>
        </div>
      </Container>

      {/* Right-bleeding horizontal card track + floating circular arrow control */}
      <div className="relative mt-10 sm:mt-12">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory [scrollbar-width:none] gap-6 overflow-x-auto scroll-smooth pb-8 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-90rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex w-[18.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-navy-950/[0.07] bg-background shadow-[0_14px_36px_-12px_rgba(15,28,46,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_-12px_rgba(15,28,46,0.16)] sm:w-[21.5rem] lg:w-[23.5rem]"
            >
              {/* Top cover image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                {post.coverImage && (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 344px, 296px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                )}
              </div>

              {/* Card body: date + title */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <time
                  dateTime={post.publishedAt}
                  className="block text-xs font-medium text-muted"
                >
                  {formatCardDate(post.publishedAt)}
                </time>

                <h3 className="mt-3 font-display text-[1.08rem] leading-[1.35] font-bold tracking-[-0.01em] text-navy-950 transition-colors duration-200 group-hover:text-brand-600 sm:text-[1.18rem]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="after:absolute after:inset-0 focus-visible:outline-none"
                  >
                    {post.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}

          {/* Trailing spacer so the final card scrolls cleanly into view */}
          <div aria-hidden="true" className="w-4 shrink-0 sm:w-8 lg:w-12" />
        </div>

        {/* Floating left circular button (visible once scrolled right) */}
        {canScrollPrev && (
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous articles"
            className="absolute top-[52%] left-3 z-20 hidden size-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-navy-950/8 bg-background text-navy-950 shadow-[0_14px_36px_-6px_rgba(15,28,46,0.22)] transition-all duration-200 hover:scale-105 hover:text-brand-600 active:scale-95 md:inline-flex lg:left-[max(1.5rem,calc((100vw-90rem)/2+0.75rem))] lg:size-16"
          >
            <ArrowLeft className="size-5 lg:size-6" aria-hidden="true" />
          </button>
        )}

        {/* Floating right circular button straddling the peeking 4th card */}
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next articles"
          className="absolute top-[52%] right-4 z-20 inline-flex size-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-navy-950/8 bg-background text-navy-950 shadow-[0_14px_36px_-6px_rgba(15,28,46,0.22)] transition-all duration-200 hover:scale-105 hover:text-brand-600 active:scale-95 sm:right-8 lg:right-[max(3rem,calc((100vw-90rem)/2+11.5rem))] lg:size-[4.5rem]"
        >
          <ArrowRight className="size-5 lg:size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Centered bottom CTA */}
      <Container>
        <div className="mt-3 text-center sm:mt-4">
          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-[7px] bg-brand-500 px-8 font-display text-sm font-extrabold tracking-tight text-white shadow-[0_10px_24px_-6px_rgba(42,171,226,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 sm:text-base"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
}
