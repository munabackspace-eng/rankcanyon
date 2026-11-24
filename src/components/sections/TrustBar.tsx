import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TrustGrowthWave } from "@/components/sections/TrustGrowthWave";
import { ButtonLink } from "@/components/ui/Button";
import { heroMetrics, trustedBrands } from "@/data/home";
import type { Metric } from "@/types";

type TrustBarProps = {
  metrics?: Metric[];
  brands?: string[];
  showBrands?: boolean;
};

/**
 * Trust section right below the 100vh Hero: section H2 title + interactive
 * wave-first SVG revealing the 4 trust cards one by one.
 */
export function TrustBar({
  metrics = heroMetrics,
  brands = trustedBrands,
  showBrands = false,
}: TrustBarProps) {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-background pt-14 pb-2 sm:pt-20 sm:pb-4"
    >
      {showBrands ? (
        <div className="relative mb-12 overflow-hidden mask-fade-x py-3 sm:mb-16">
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
                    className="font-display text-xl font-bold tracking-tight whitespace-nowrap text-navy-400 transition-colors hover:text-navy-950 sm:text-2xl"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ) : null}

      <Container>
        <div className="bg-transparent">
          <div className="max-w-5xl">
            <h2
              id="trust-heading"
              className="text-3xl leading-[1.08] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]"
            >
              We Focus on the Metrics That{" "}
              <span className="text-brand-500">Actually Drive Business Growth</span>
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
              Every e-commerce brand has different goals, challenges, and profit margins.
              That&apos;s why we look beyond surface-level metrics. RankCanyon uses
              performance data, marketplace insights, and strategic analysis to identify
              growth opportunities, optimize campaigns, and make smarter decisions that
              support your business goals.
            </p>
            <div className="mt-7">
              <ButtonLink href="/case-studies" size="lg">
                Explore Our Approach
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>

          {/* Crawlable & screen-reader accessible trust metrics */}
          <dl className="sr-only">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>
                  {metric.category ? `${metric.category} — ` : ""}
                  {metric.label}
                </dt>
                <dd>
                  {metric.value}
                  {metric.description ? ` (${metric.description})` : ""}
                </dd>
              </div>
            ))}
          </dl>

          <TrustGrowthWave metrics={metrics} />
        </div>
      </Container>
    </section>
  );
}
