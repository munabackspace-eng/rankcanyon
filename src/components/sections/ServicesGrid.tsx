import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { Reveal } from "@/components/shared/Reveal";
import { ServiceInteractiveSvg } from "@/components/shared/ServiceInteractiveSvg";
import { ButtonLink } from "@/components/ui/Button";
import { Section, type SectionTone } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services as allServices } from "@/data/services";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

type ServicesGridProps = {
  services?: Service[];
  title?: string;
  description?: string;
  tone?: SectionTone;
  /** Show feature bullets on each card (used on the /services index). */
  detailed?: boolean;
  /** Render inside Employo-style wide #232020 boxed container with parallel diagonal marquee. */
  boxed?: boolean;
  showAllLink?: boolean;
};

const capabilityStripPrimary = [
  "Marketplace Account Management",
  "Marketplace PPC & Advertising Management",
  "Organic Ranking & Sales Growth",
  "Product Launch & Growth",
  "Product Image & Creative Design",
  "A+ Content & Brand Store Design",
  "Product Video Production",
];

const capabilityStripSecondary = [
  "1P & 3P Operations",
  "Full-Funnel PPC & DSP",
  "Search Query SEO & CRO",
  "Prime Shopper Pre-Testing",
  "Premium A+ & Storefronts",
  "Sponsored Brands Video",
];

function ServiceCards({
  services,
  detailed,
  onDark = false,
}: {
  services: Service[];
  detailed: boolean;
  onDark?: boolean;
}) {
  return (
    <ul className="mt-14 grid gap-7 lg:grid-cols-2">
      {services.map((service, i) => (
        <li key={service.slug} className="flex">
          <Reveal delay={(i % 2) * 0.08} className="flex w-full">
            <article
              className={cn(
                "group relative flex w-full flex-col justify-between gap-6 rounded-3xl border border-navy-950/10 bg-background p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8",
                onDark
                  ? "shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_28px_60px_-14px_rgba(0,0,0,0.42)]"
                  : "shadow-[0_16px_42px_-16px_rgba(18,41,64,0.12)] hover:shadow-[0_24px_52px_-16px_rgba(18,41,64,0.18)]",
              )}
            >
              <div>
                <ServiceInteractiveSvg slug={service.slug} />

                <h3 className="mt-6 font-display text-2xl leading-snug font-extrabold tracking-tight text-navy-950 sm:text-[1.65rem]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-brand-600 focus-visible:outline-none"
                  >
                    {service.title}
                  </Link>
                </h3>

                {detailed && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature.title} className="flex gap-2 text-sm text-navy-800">
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-brand-600"
                        />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-[7px] bg-brand-500 px-5 py-2.5 font-display text-sm font-extrabold text-white shadow-[0_8px_18px_-5px_rgba(42,171,226,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_12px_22px_-5px_rgba(38,116,188,0.55)]"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="animate-arrow-nudge size-4 stroke-[2.5]"
                  />
                </Link>
              </div>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

const DEFAULT_TITLE = "We Do Everything Your Brand Needs to Grow and Succeed";

const boxedToneClasses: Record<SectionTone, string> = {
  light: "bg-background",
  surface: "bg-surface",
  ice: "bg-ice",
  "fade-down": "bg-fade-down",
  "fade-up": "bg-fade-up",
  spotlight: "bg-spotlight",
};

export function ServicesGrid({
  services = allServices,
  title = DEFAULT_TITLE,
  description = "Growing a brand takes more than individual services. It requires a coordinated strategy across advertising, listings, creative content, and marketplace operations. RankCanyon brings everything together to help sellers improve performance, reach more customers, and achieve profitable growth.",
  detailed = false,
  boxed = !detailed,
  tone = boxed ? "ice" : "surface",
  showAllLink = true,
}: ServicesGridProps) {
  const isDefaultTitle = title === DEFAULT_TITLE;

  if (!boxed) {
    return (
      <Section tone={tone} aria-labelledby="services-heading">
        <SectionHeading id="services-heading" title={title} description={description} />
        <ServiceCards services={services} detailed={detailed} onDark={false} />
        {showAllLink && (
          <div className="mt-12 text-center">
            <ButtonLink href="/services" variant="primary">
              Explore All Services
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        )}
      </Section>
    );
  }

  return (
    <section
      aria-labelledby="services-heading"
      className={cn(
        "relative overflow-x-clip pt-0 pb-0 sm:pt-2",
        boxedToneClasses[tone],
      )}
    >
      {/* Full-bleed parallel 2-line diagonal capability marquee */}
      <div className="relative flex w-full items-center justify-center pt-6 pb-0 sm:pt-8">
        <div className="flex w-[112%] shrink-0 -rotate-[3.5deg] flex-col gap-2.5 sm:gap-3">
          {/* Line 1: #4d4d4f navbar-matched charcoal ribbon scrolling left-to-right */}
          <div className="relative z-20 border-y border-white/15 bg-[#4d4d4f] py-3.5 text-white shadow-md sm:py-4">
            <div className="flex w-max animate-marquee items-center gap-10 pr-10 [animation-direction:reverse] hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="flex shrink-0 items-center gap-10"
                >
                  {capabilityStripSecondary.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-10 font-display text-xs font-extrabold tracking-[0.15em] whitespace-nowrap text-white uppercase sm:text-[13px]"
                    >
                      <span>{item}</span>
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-brand-500"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Line 2: #2AABE2 cyan ribbon right below at the same parallel angle, scrolling right-to-left */}
          <div className="relative z-20 bg-brand-500 py-3.5 text-navy-950 shadow-md sm:py-4">
            <div className="flex w-max animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="flex shrink-0 items-center gap-10"
                >
                  {capabilityStripPrimary.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-10 font-display text-xs font-extrabold tracking-[0.15em] whitespace-nowrap text-navy-950 uppercase sm:text-[13px]"
                    >
                      <span>{item}</span>
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-navy-950"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Background-only angled #4d4d4f top cut starting flush at the bottom of the cyan ribbon */}
          <div
            aria-hidden="true"
            className="pointer-events-none z-0 -mt-3 -mb-52 h-52 w-full bg-[#4d4d4f]"
          />
        </div>
      </div>

      {/* Full-width showcase content (z-30 sits cleanly in front of the z-0 angled backdrop) */}
      <div className="relative">
        <ServicesCarousel
          services={services.map(({ slug, title: itemTitle, summary }) => ({
            slug,
            title: itemTitle,
            summary,
          }))}
          title={title}
          description={description}
          isDefaultTitle={isDefaultTitle}
          showAllLink={showAllLink}
        />
      </div>
    </section>
  );
}
