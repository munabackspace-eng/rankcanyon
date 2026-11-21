"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 4500;

/**
 * Accessible autoplaying testimonial carousel: prev/next buttons, animated
 * progress pill navigation, pause-on-hover/focus, and reduced-motion support.
 */
export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [interactionTick, setInteractionTick] = useState(0);
  const prefersReducedMotion = Boolean(useReducedMotion());

  const count = testimonials.length;
  const current = testimonials[index];

  const go = (next: number) => {
    if (count <= 1) return;
    setDirection(next > index || (index === count - 1 && next === 0) ? 1 : -1);
    setIndex((next + count) % count);
    setInteractionTick((prev) => prev + 1);
  };

  useEffect(() => {
    if (count <= 1 || isPaused || prefersReducedMotion) return;

    const timerId = window.setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % count);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timerId);
  }, [count, isPaused, prefersReducedMotion, interactionTick]);

  if (!current) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      className="relative flex w-full flex-col justify-between rounded-t-[1.75rem] rounded-bl-[1.75rem] border-2 border-[#111113] bg-background p-7 shadow-[7px_8px_0_0_#111113] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[9px_10px_0_0_#111113] sm:p-10"
    >
      <Quote
        aria-hidden="true"
        className="absolute top-8 right-8 size-10 text-navy-950 opacity-10"
      />

      <div aria-live="polite" className="relative min-h-[16rem] sm:min-h-[14.5rem]">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <m.figure
            key={index}
            custom={direction}
            initial={prefersReducedMotion ? false : { opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
          >
            <StarRating rating={current.rating} />
            <blockquote className="mt-5 text-lg leading-relaxed font-medium text-navy-950 sm:text-xl">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              {current.avatar ? (
                <span className="size-12 shrink-0 overflow-hidden rounded-full border border-border bg-ice shadow-card">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    width={1024}
                    height={1024}
                    sizes="48px"
                    className="size-full object-cover"
                  />
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-semibold text-navy-950 shadow-card"
                >
                  {current.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
              )}
              <span>
                <span className="block font-semibold text-navy-950">{current.name}</span>
                <span className="block text-sm text-muted">
                  {current.role}, {current.company}
                </span>
              </span>
            </figcaption>
          </m.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => {
            const isActive = i === index;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show testimonial ${i + 1} from ${t.name}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative h-2 cursor-pointer overflow-hidden rounded-full transition-all duration-300",
                  isActive
                    ? "w-10 bg-navy-950/15"
                    : "w-2 bg-navy-950/20 hover:bg-navy-950/35",
                )}
              >
                {isActive &&
                  (prefersReducedMotion || isPaused ? (
                    <span className="absolute inset-0 rounded-full bg-brand-500" />
                  ) : (
                    <m.span
                      key={`${index}-${interactionTick}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: AUTOPLAY_INTERVAL_MS / 1000,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 left-0 rounded-full bg-brand-500"
                    />
                  ))}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-navy-950 transition-colors hover:bg-surface"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-navy-950 text-white transition-colors hover:bg-navy-800"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
