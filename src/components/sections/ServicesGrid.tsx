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
  "Amazon & Marketplace Management",
  "Marketplace PPC Management",
  "Listing Optimization & SEO",
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
      {services.map((service, i) => {
        const svgFirst =
          service.slug === "marketplace-ppc-management" ||
          service.slug === "product-image-creative-design";

        const contentBlock = (
          <div className={cn("flex flex-col", svgFirst && "mt-auto pt-7")}>
            <h3 className="font-display text-2xl leading-snug font-extrabold tracking-tight text-navy-950 sm:text-[1.65rem]">
              <Link
                href={`/services/${service.slug}`}
                className="transition-colors hover:text-brand-600 focus-visible:outline-none"
              >
                {service.title}
              </Link>
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-800/80 sm:text-base">
              {service.summary}
            </p>

            {detailed && (
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
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

            <div className="mt-5">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 border-0 bg-transparent p-0 font-display text-sm font-extrabold text-navy-950 transition-colors duration-200 hover:text-brand-600"
              >
                <span className="underline decoration-navy-950/35 underline-offset-4 transition-colors group-hover:decoration-brand-500">
                  Learn More
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        );

        const svgBlock = (
          <div className={cn(!svgFirst && "mt-auto pt-7")}>
            <ServiceInteractiveSvg slug={service.slug} />
          </div>
        );

        return (
          <li key={service.slug} className="flex">
            <Reveal delay={(i % 2) * 0.08} className="flex w-full">
              <article
                className={cn(
                  "group relative flex w-full flex-col rounded-[1.75rem] border-2 border-navy-950 bg-surface p-6 transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ebf5fb] sm:p-8 lg:p-9",
                  onDark
                    ? "shadow-[6px_7px_0_0_#2aabe2] hover:shadow-[8px_9px_0_0_#2aabe2]"
                    : "shadow-[6px_7px_0_0_#232020] hover:shadow-[8px_9px_0_0_#2aabe2]",
                )}
              >
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
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

const DEFAULT_TITLE = "We Do Everything Your Brand Needs to Grow and Succeed";

export function ServicesGrid({
  services = allServices,
  title = DEFAULT_TITLE,
  description = "Growing a brand takes more than individual services. It requires a coordinated strategy across advertising, listings, creative content, and marketplace operations. RankCanyon brings everything together to help sellers improve performance, reach more customers, and achieve profitable growth.",
  tone = "surface",
  detailed = false,
  boxed = !detailed,
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
      className="relative overflow-x-clip bg-background pt-0 pb-0 sm:pt-2"
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
