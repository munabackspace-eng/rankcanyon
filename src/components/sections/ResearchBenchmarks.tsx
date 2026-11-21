import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";

type BenchmarkItem = {
  value: string;
  label: string;
  description: string;
};

const benchmarks: BenchmarkItem[] = [
  {
    value: "19.0%",
    label: "ACoS",
    description: "Across $671,757 in US Amazon advertising spend in November 2026.",
  },
  {
    value: "8.68%",
    label: "Conversion Rate",
    description: "Median conversion rate on ad clicks.",
  },
  {
    value: "2.25×",
    label: "Top-of-Search Conversion",
    description: "Higher conversion at top of search compared with product pages.",
  },
];

export function ResearchBenchmarks() {
  return (
    <section
      aria-labelledby="research-benchmarks-heading"
      className="relative w-full overflow-x-clip bg-ice py-16 text-foreground sm:py-24"
    >
      <Container>
        {/* Top centered header */}
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <h2
              id="research-benchmarks-heading"
              className="text-3xl leading-[1.1] font-extrabold tracking-tight text-navy-950 sm:text-5xl lg:text-[3.35rem] xl:text-[3.6rem]"
            >
              Every Smarter E-Commerce Strategy{" "}
              <span className="mt-1 block text-brand-500">Starts with Research</span>
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
              We look beyond surface-level metrics to understand what drives e-commerce
              performance. Through marketplace research, advertising analysis, and sales
              insights, we identify growth opportunities and help sellers make informed
              decisions that improve efficiency, strengthen profitability, and support
              long-term growth.
            </p>

            <p className="mt-5 font-display text-xs font-bold tracking-wide text-navy-600 sm:text-sm">
              Last Updated: November 2026
            </p>
          </div>
        </Reveal>

        {/* Dark rounded benchmark showcase card */}
        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-10 text-white shadow-[0_24px_60px_-18px_rgba(18,41,64,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] sm:mt-12 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16">
            <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1.45fr)] lg:gap-10 xl:gap-14">
              {/* Left column: Benchmark study title, summary & CTA */}
              <div>
                <h2 className="font-display text-2xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-3xl xl:text-[2.15rem]">
                  E-Commerce Performance{" "}
                  <span className="text-brand-400">Benchmarks 2026</span>
                </h2>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-[15px]">
                  Explore key e-commerce performance metrics, including advertising
                  efficiency, conversion rates, customer acquisition costs, and sales
                  performance across leading marketplaces.
                </p>

                <div className="mt-7">
                  <ButtonLink href="/blog" size="lg" className="w-full sm:w-auto">
                    Read the Benchmarks
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>

              {/* Responsive divider (horizontal on mobile/tablet, vertical on desktop) */}
              <div
                aria-hidden="true"
                className="h-px w-full bg-white/14 lg:h-full lg:min-h-[10.5rem] lg:w-px"
              />

              {/* Right column: 3 benchmark KPI columns */}
              <dl className="grid gap-8 sm:grid-cols-3 sm:gap-6 xl:gap-8">
                {benchmarks.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <dt className="order-2 mt-3 font-display text-sm leading-snug font-extrabold text-white sm:text-[15px]">
                      {item.label}
                    </dt>
                    <dd className="order-1 font-display text-4xl leading-none font-extrabold tracking-tight text-brand-400 tabular-nums sm:text-[2.35rem] xl:text-[2.85rem]">
                      {item.value}
                    </dd>
                    <dd className="order-3 mt-1.5 text-xs leading-relaxed text-white/75 sm:text-[13px]">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
