"use client";

import { ChevronDown, Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  faqs: readonly Faq[];
  initialVisibleCount?: number;
};

export function FaqAccordion({ faqs, initialVisibleCount = 5 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const baseId = useId();

  const hasMore = faqs.length > initialVisibleCount;
  const visibleFaqs = hasMore && !showAll ? faqs.slice(0, initialVisibleCount) : faqs;

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const toggleShowAll = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (!next && openIndex !== null && openIndex >= initialVisibleCount) {
        setOpenIndex(null);
      }
      return next;
    });
  };

  return (
    <div>
      <div className="divide-y divide-white/15">
        {visibleFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `${baseId}-panel-${idx}`;
          const buttonId = `${baseId}-button-${idx}`;

          return (
            <div
              key={faq.question}
              className={cn(
                "group",
                idx === 0 ? "pt-0 pb-6 sm:pb-7" : "py-6 sm:py-7",
                !hasMore && idx === visibleFaqs.length - 1 && "pb-0 sm:pb-0",
              )}
            >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
              >
                <span
                  className={cn(
                    "font-display text-lg leading-snug font-medium tracking-tight transition-colors duration-200 sm:text-[1.25rem] lg:text-[1.35rem]",
                    isOpen
                      ? "text-brand-400"
                      : "text-white/95 group-hover:text-brand-400",
                  )}
                >
                  {faq.question}
                </span>

                <span
                  className={cn(
                    "inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200 sm:size-11",
                    isOpen
                      ? "border-brand-500 bg-brand-500 text-white shadow-[0_8px_20px_-6px_rgba(42,171,226,0.55)]"
                      : "border-white/20 bg-white/[0.06] text-white/95 group-hover:border-brand-400 group-hover:bg-white/[0.1] group-hover:text-brand-400",
                  )}
                >
                  <Plus
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className={cn(
                      "size-[18px] transition-transform duration-200",
                      isOpen && "rotate-45",
                    )}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pt-4 pr-12 text-[15px] leading-relaxed text-white/80 sm:pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {hasMore && (
        <div className="border-t border-white/15 pt-6">
          <button
            type="button"
            aria-expanded={showAll}
            onClick={toggleShowAll}
            className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[7px] bg-brand-500 px-6 font-display text-[13.5px] font-bold text-white shadow-[0_10px_24px_-6px_rgba(42,171,226,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1f98cd] hover:shadow-[0_14px_28px_-6px_rgba(42,171,226,0.6)] active:translate-y-px"
          >
            <span>{showAll ? "Show Less" : "Show More"}</span>
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "size-4 transition-transform duration-200",
                showAll && "rotate-180",
              )}
            />
          </button>
        </div>
      )}
    </div>
  );
}
