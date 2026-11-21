import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/shared/JsonLd";
import type { SectionTone } from "@/components/ui/Section";
import { PRIMARY_CTA } from "@/lib/constants";
import { faqJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { Faq } from "@/types";

type FaqSectionProps = {
  faqs: Faq[];
  title?: string;
  headingLead?: string;
  headingAccent?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: SectionTone;
  /** Emit FAQPage structured data. Only one FAQPage per URL. */
  withSchema?: boolean;
};

const DEFAULT_TITLE = "Frequently Asked Questions & Answers";
const DEFAULT_DESCRIPTION =
  "Find answers to common questions about our services, strategies, pricing, and how we help e-commerce brands grow.";

function splitHeading(title: string): { lead: string; accent: string } {
  const cleaned = title.trim().replace(/[.?!]+$/, "");
  const words = cleaned.split(/\s+/);
  if (words.length <= 1) {
    return { lead: "", accent: cleaned };
  }
  const accent = words[words.length - 1] ?? "";
  const lead = words.slice(0, -1).join(" ");
  return { lead, accent };
}

export function FaqSection({
  faqs,
  title = DEFAULT_TITLE,
  headingLead,
  headingAccent,
  description = DEFAULT_DESCRIPTION,
  ctaLabel = "Book a Free Audit",
  ctaHref = PRIMARY_CTA.href,
  tone = "ice",
  withSchema = true,
}: FaqSectionProps) {
  const isDefaultHeading = !headingLead && !headingAccent && title === DEFAULT_TITLE;

  const resolvedHeading = isDefaultHeading
    ? {
        lead: "Frequently Asked Questions &",
        accent: "Answers",
      }
    : {
        lead: headingLead ?? splitHeading(title).lead,
        accent: headingAccent ?? splitHeading(title).accent,
      };

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-background py-16 text-white sm:py-24"
    >
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[2rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-20",
            tone === "surface" && "bg-black",
          )}
        >
          <div className="relative z-10 grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_2px_minmax(0,1.35fr)] lg:gap-12 xl:gap-16">
            {/* Left column: Editorial split headline, pricing note & pill CTA */}
            <div className="flex flex-col justify-center lg:py-4">
              <h2
                id="faq-heading"
                className="max-w-[24rem] text-[2rem] leading-[1.14] font-extrabold tracking-tight text-white sm:text-[2.45rem] lg:text-[2.7rem]"
              >
                {resolvedHeading.lead && <>{resolvedHeading.lead} </>}
                <span className="text-brand-400">{resolvedHeading.accent}</span>
              </h2>

              <p className="mt-5 max-w-[24rem] text-base leading-relaxed text-white/80 sm:text-[1.0625rem]">
                {description}
              </p>

              <div className="mt-7">
                <Link
                  href={ctaHref}
                  className="inline-flex h-12 items-center justify-center rounded-[7px] bg-brand-500 px-8 font-display text-[13.5px] font-semibold text-white shadow-[0_12px_26px_-6px_rgba(8,20,38,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1f98cd]"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>

            {/* Signature accent divider (#2AABE2) */}
            <div
              aria-hidden="true"
              className="h-[2px] w-full bg-brand-400/80 lg:h-auto lg:w-[2px]"
            />

            {/* Right column: Clean horizontal-divided FAQ accordion */}
            <div className="flex flex-col justify-center">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </Container>

      {withSchema && <JsonLd data={faqJsonLd(faqs)} />}
    </section>
  );
}
