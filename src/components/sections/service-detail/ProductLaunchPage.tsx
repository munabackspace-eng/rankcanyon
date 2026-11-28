import {
  ArrowRight,
  BarChart3,
  Check,
  Crosshair,
  FileText,
  Megaphone,
  Star,
  Tag,
  X,
} from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {
  LaunchEndToEndConsole,
  LaunchHeroStage,
} from "@/components/sections/service-detail/ServiceDetailVisuals";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { MarketplaceBrandLogo } from "@/components/shared/MarketplaceBrandLogos";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { productLaunchPageData } from "@/data/product-launch";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PLAYBOOK_ICONS = {
  fileText: FileText,
  megaphone: Megaphone,
  star: Star,
  tag: Tag,
  chart: BarChart3,
  radar: Crosshair,
} as const;

function ComparisonValueBadge({
  value,
  highlighted = false,
}: {
  value: string;
  highlighted?: boolean;
}) {
  if (value === "✓") {
    return (
      <span
        className={cn(
          "inline-flex size-7 items-center justify-center rounded-full",
          highlighted
            ? "bg-brand-500 text-white shadow-xs"
            : "bg-ice text-brand-700",
        )}
        aria-label="Included"
      >
        <Check aria-hidden="true" className="size-4 stroke-[3]" />
      </span>
    );
  }

  if (value === "✕") {
    return (
      <span
        className="inline-flex size-7 items-center justify-center rounded-full bg-navy-950/8 text-navy-600"
        aria-label="Not included"
      >
        <X aria-hidden="true" className="size-4 stroke-[2.75]" />
      </span>
    );
  }

  return (
    <span className="font-display text-xs font-bold text-navy-700 sm:text-sm">
      {value}
    </span>
  );
}

export function ProductLaunchPage() {
  const data = productLaunchPageData;

  return (
    <>
      {/* 1. Hero Section — Ice-blue canvas + floating 90-day launch SVG stage */}
      <section className="relative isolate flex w-full flex-col justify-center overflow-x-clip bg-ice pt-[calc(var(--header-height)+1.75rem)] pb-14 sm:pt-[calc(var(--header-height)+2.25rem)] sm:pb-16 lg:min-h-[86dvh] lg:pt-[var(--header-height)] lg:pb-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(52% 60% at 78% 46%, rgba(42,171,226,0.12) 0%, rgba(235,245,251,0) 72%), radial-gradient(45% 50% at 16% 22%, rgba(255,255,255,0.65) 0%, rgba(235,245,251,0) 70%)",
          }}
        />

        <Container className="grid w-full grid-cols-1 items-center gap-12 py-2 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-col items-center text-center lg:col-span-7 lg:items-start lg:pr-4 lg:text-left">
            <h1 className="w-full text-4xl leading-[1.08] font-extrabold tracking-[-0.03em] text-pretty text-navy-950 sm:text-5xl lg:text-[3.45rem] xl:text-[3.9rem]">
              {data.hero.titleLead}{" "}
              <span className="text-brand-500">{data.hero.titleAccent}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:mt-7 sm:text-lg lg:text-[1.1rem]">
              {data.hero.subtitle}
            </p>

            <div className="mt-8 flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-start">
              <ButtonLink
                href={data.hero.primaryCta.href}
                size="lg"
                className="w-full sm:w-auto"
              >
                {data.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href="#launch-blueprint"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                See How It Works
              </ButtonLink>
            </div>

            <div className="mt-9 w-full">
              <p className="font-display text-xs font-extrabold tracking-[0.12em] text-navy-600 uppercase">
                {data.hero.supportedLabel}
              </p>
              <ul
                aria-label={data.hero.supportedLabel}
                className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
              >
                {data.hero.supportedMarketplaces.map((platform) => (
                  <li key={platform}>
                    <MarketplaceBrandLogo platform={platform} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <LaunchHeroStage />
          </div>
        </Container>

        <BreadcrumbSchema
          items={[
            { name: "Services", href: "/services" },
            { name: data.seoTitle, href: `/services/${data.slug}` },
          ]}
        />
      </section>

      {/* 2. What Is an End-to-End Product Launch Service? + Dark Mid-Page Launch Callout */}
      <section
        aria-labelledby="launch-meaning-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <div>
                <h2
                  id="launch-meaning-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.75rem]"
                >
                  {data.whatIsLaunchSection.titleLead}{" "}
                  <span className="text-brand-500">
                    {data.whatIsLaunchSection.titleAccent}
                  </span>
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                  {data.whatIsLaunchSection.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <LaunchEndToEndConsole />
            </Reveal>
          </div>

          {/* Dark Banner: Let RankCanyon Power Your Next Product Launch */}
          <Reveal delay={0.1}>
            <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-10 text-white shadow-[0_24px_60px_-18px_rgba(18,41,64,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] sm:mt-20 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl leading-[1.12] font-extrabold tracking-tight text-wrap text-white sm:text-4xl lg:text-[2.5rem]">
                    Let <span className="text-brand-400">Rank</span>Canyon Power Your{" "}
                    <span className="text-brand-400">
                      {data.midBanner.titleAccent}
                    </span>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                    {data.midBanner.subtext}
                  </p>
                </div>

                <div className="w-full shrink-0 sm:w-auto">
                  <ButtonLink
                    href={data.midBanner.buttonHref}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {data.midBanner.buttonLabel}
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. How It Works: Your Blueprint for a Strong Product Launch — 3-Phase Medallion Flow */}
      <section
        id="launch-blueprint"
        aria-labelledby="launch-blueprint-heading"
        className="scroll-mt-24 w-full overflow-x-clip bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="launch-blueprint-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.25rem]"
              >
                {data.blueprintSection.titleLead}{" "}
                <span className="text-brand-500">
                  {data.blueprintSection.titleAccent}
                </span>
              </h2>
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-3 lg:gap-10">
            {data.blueprintSection.steps.map((step, idx) => {
              const isLast = idx === data.blueprintSection.steps.length - 1;
              return (
                <li key={step.number} className="relative flex flex-col">
                  <Reveal delay={idx * 0.08} className="flex h-full flex-col">
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "inline-flex size-14 shrink-0 items-center justify-center rounded-full font-display text-xl font-extrabold shadow-xs",
                          idx === 1
                            ? "bg-brand-500 text-white ring-4 ring-brand-500/20"
                            : "bg-navy-950 text-white",
                        )}
                      >
                        {step.number}
                      </span>

                      {!isLast && (
                        <svg
                          viewBox="0 0 180 28"
                          fill="none"
                          aria-hidden="true"
                          className="hidden h-7 flex-1 text-brand-500 lg:block"
                        >
                          <path
                            d="M 4 18 Q 90 2 170 16"
                            stroke="currentColor"
                            strokeWidth="2.1"
                            strokeDasharray="4 4"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 162 10 L 172 17 L 160 22"
                            stroke="currentColor"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>

                    <div className="mt-5">
                      <h3 className="font-display text-2xl leading-snug font-extrabold text-navy-950">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.75] text-navy-800/85 sm:text-[15.5px]">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* 4. Our Product Launch Playbook — Signature Charcoal Showcase (6 Items) */}
      <section
        aria-labelledby="launch-playbook-heading"
        className="w-full bg-[#4d4d4f] py-16 text-white sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="launch-playbook-heading"
                className="text-3xl leading-[1.08] font-extrabold tracking-tight text-wrap text-white sm:text-5xl lg:text-[3.25rem]"
              >
                {data.playbookSection.titleLead}{" "}
                <span className="text-brand-400">
                  {data.playbookSection.titleAccent}
                </span>
              </h2>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {data.playbookSection.cards.map((card, idx) => {
              const Icon = PLAYBOOK_ICONS[card.iconKey];
              const num = String(idx + 1).padStart(2, "0");
              return (
                <li key={card.title} className="flex">
                  <Reveal delay={(idx % 3) * 0.06} className="flex w-full">
                    <article className="group relative flex w-full flex-col justify-between gap-5 rounded-2xl border-2 border-navy-950 bg-surface p-6 text-navy-950 shadow-[5px_6px_0_0_#2aabe2] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ebf5fb] hover:shadow-[7px_8px_0_0_#2aabe2] sm:rounded-[1.35rem] sm:p-7">
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex size-10 items-center justify-center rounded-xl border border-navy-950/15 bg-background text-brand-600 transition-colors duration-200 group-hover:bg-brand-500 group-hover:text-white">
                            <Icon aria-hidden="true" className="size-4.5" />
                          </span>
                          <span className="font-display text-xs font-extrabold tracking-widest text-navy-600">
                            {num}
                          </span>
                        </div>

                        <h3 className="mt-5 font-display text-xl leading-snug font-extrabold tracking-tight text-navy-950 transition-colors group-hover:text-brand-600 sm:text-[1.3rem]">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-navy-800/85 sm:text-[15px]">
                          {card.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 5. Why Choose RankCanyon for Your Product Launch? — Sticky Left + Numbered Hairline Rows */}
      <section
        aria-labelledby="launch-why-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
              <div>
                <h2
                  id="launch-why-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.85rem]"
                >
                  Why Choose <span className="text-brand-500">Rank</span>Canyon for{" "}
                  <span className="text-brand-500">
                    {data.whyChooseSection.titleAccent}
                  </span>
                </h2>

                <div className="mt-8">
                  <ButtonLink href={data.hero.primaryCta.href} size="lg">
                    {data.hero.primaryCta.label}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <ol className="divide-y divide-navy-950/12 border-t border-navy-950/12">
                {data.whyChooseSection.items.map((item, idx) => (
                  <li key={item.number}>
                    <Reveal delay={idx * 0.05}>
                      <div className="group flex items-start gap-5 py-6 sm:gap-6 sm:py-7">
                        <span className="font-display text-2xl leading-none font-extrabold text-brand-500 sm:text-3xl">
                          {item.number}
                        </span>
                        <div>
                          <h3 className="font-display text-xl leading-snug font-extrabold text-navy-950 transition-colors group-hover:text-brand-600">
                            {item.title}
                          </h3>
                          <p className="mt-2.5 text-sm leading-relaxed text-navy-800/85 sm:text-[15.5px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Our Process — Seamless 3x2 Architectural Hairline Matrix */}
      <section
        aria-labelledby="launch-process-heading"
        className="w-full bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <h2
                id="launch-process-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.25rem]"
              >
                {data.processSection.titleLead}{" "}
                <span className="text-brand-500">{data.processSection.titleAccent}</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <ol className="mt-12 grid grid-cols-1 border-t border-navy-950/14 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {data.processSection.steps.map((step, idx) => (
                <li
                  key={step.number}
                  className={cn(
                    "group relative flex flex-col border-b border-navy-950/14 px-1 py-7 transition-colors duration-200 hover:bg-background/60 sm:px-7 sm:py-9",
                    idx % 2 === 0 && "sm:border-r sm:border-navy-950/14",
                    idx % 3 !== 2
                      ? "lg:border-r lg:border-navy-950/14"
                      : "lg:border-r-0",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -top-px h-[2px] origin-left scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <span className="font-display text-3xl leading-none font-extrabold text-brand-500 sm:text-4xl">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl leading-snug font-extrabold text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-800/85 sm:text-[15px]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* 7. Launches Done Right — Category Snapshots with 3-Stat Bars */}
      <section
        aria-labelledby="launches-done-right-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="launches-done-right-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.25rem]"
              >
                {data.launchesDoneRightSection.titleLead}{" "}
                <span className="text-brand-500">
                  {data.launchesDoneRightSection.titleAccent}
                </span>
              </h2>
            </div>
          </Reveal>

          <ul className="mt-12 grid items-stretch gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-7">
            {data.launchesDoneRightSection.cards.map((card, idx) => (
              <li key={card.category} className="flex">
                <Reveal delay={idx * 0.07} className="flex w-full">
                  <article className="flex w-full flex-col justify-between rounded-3xl border border-navy-950/12 bg-background p-6 shadow-[0_18px_45px_-18px_rgba(18,41,64,0.12)] sm:p-8">
                    <div>
                      <span className="inline-flex rounded-full bg-ice px-3.5 py-1 font-display text-xs font-extrabold tracking-[0.12em] text-brand-700 uppercase">
                        {card.category}
                      </span>

                      <h3 className="mt-5 font-display text-2xl leading-snug font-extrabold text-navy-950">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15.5px]">
                        {card.description}
                      </p>
                    </div>

                    <dl className="mt-7 grid grid-cols-3 divide-x divide-navy-950/10 rounded-2xl bg-ice/75 px-2 py-4 text-center">
                      {card.stats.map((stat) => (
                        <div key={stat.label} className="px-1.5">
                          <dt className="order-2 mt-1 text-[11px] leading-tight font-semibold text-navy-700 sm:text-xs">
                            {stat.label}
                          </dt>
                          <dd className="order-1 font-display text-xl leading-none font-extrabold text-brand-600 sm:text-2xl">
                            {stat.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 8. Testimonials: Product Launches, in Our Clients' Words */}
      <section
        aria-labelledby="launch-testimonials-heading"
        className="w-full bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="launch-testimonials-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.25rem]"
              >
                {data.testimonialsSection.titleLead}{" "}
                <span className="text-brand-500">
                  {data.testimonialsSection.titleAccent}
                </span>
              </h2>
            </div>
          </Reveal>

          <ul className="mt-12 grid items-stretch gap-6 sm:mt-16 md:grid-cols-2 lg:gap-7">
            {data.testimonialsSection.reviews.map((review, idx) => (
              <li key={`${review.author}-${review.date}`} className="flex">
                <Reveal delay={(idx % 2) * 0.07} className="flex w-full">
                  <figure className="flex w-full flex-col justify-between rounded-3xl border border-navy-950/10 bg-background p-6 shadow-[0_16px_42px_-18px_rgba(18,41,64,0.12)] sm:p-8">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div
                          className="flex items-center gap-0.5 text-brand-500"
                          aria-label="5 out of 5 stars"
                        >
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              aria-hidden="true"
                              className="size-4 fill-brand-500 text-brand-500"
                            />
                          ))}
                        </div>

                        <span className="rounded-full bg-ice px-3 py-1 font-display text-[11px] font-extrabold tracking-[0.12em] text-brand-700 uppercase">
                          {review.tag}
                        </span>
                      </div>

                      <blockquote className="mt-5 text-sm leading-[1.8] text-navy-800/90 sm:text-base">
                        &ldquo;{review.quote}&rdquo;
                      </blockquote>
                    </div>

                    <figcaption className="mt-6 flex items-center gap-3.5 border-t border-navy-950/10 pt-5">
                      <span
                        aria-hidden="true"
                        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-950 font-display text-xs font-extrabold text-white"
                      >
                        {review.initials}
                      </span>
                      <div className="text-sm">
                        <span className="font-display font-extrabold text-navy-950">
                          {review.author}
                        </span>
                        <span className="mx-2 text-navy-400" aria-hidden="true">
                          ·
                        </span>
                        <span className="text-muted">{review.date}</span>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 9. The RankCanyon Difference — Responsive Comparison Table */}
      <section
        aria-labelledby="launch-comparison-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="launch-comparison-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.1rem]"
              >
                {data.comparisonSection.titleLead}{" "}
                <span className="text-brand-500">
                  {data.comparisonSection.titleAccent}
                </span>
              </h2>
            </div>
          </Reveal>

          {/* Desktop & Tablet Comparison Table (md+) */}
          <Reveal delay={0.07}>
            <div className="mt-12 hidden overflow-hidden rounded-3xl border border-navy-950/12 shadow-[0_22px_55px_-20px_rgba(18,41,64,0.14)] md:mt-16 md:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-navy-950/12 bg-surface">
                    <th
                      scope="col"
                      className="w-[34%] px-6 py-5 font-display text-sm font-extrabold text-navy-950 lg:px-8"
                    >
                      {data.comparisonSection.columns.feature}
                    </th>
                    <th
                      scope="col"
                      className="w-[22%] bg-black px-6 py-5 text-center font-display text-sm font-extrabold text-white"
                    >
                      <span className="inline-flex items-center justify-center">
                        <Image
                          src="/logo-dark-bg.png"
                          alt={SITE.name}
                          width={1248}
                          height={174}
                          sizes="160px"
                          className="h-6 w-auto object-contain"
                        />
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="w-[22%] px-5 py-5 text-center font-display text-sm font-extrabold text-navy-800"
                    >
                      {data.comparisonSection.columns.inHouse}
                    </th>
                    <th
                      scope="col"
                      className="w-[22%] px-5 py-5 text-center font-display text-sm font-extrabold text-navy-800"
                    >
                      {data.comparisonSection.columns.freelancers}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-950/10 bg-background">
                  {data.comparisonSection.rows.map((row) => (
                    <tr
                      key={row.feature}
                      className="transition-colors hover:bg-surface/60"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4.5 font-display text-sm font-bold text-navy-950 lg:px-8 lg:text-[15px]"
                      >
                        {row.feature}
                      </th>
                      <td className="border-x border-brand-500/25 bg-ice/75 px-6 py-4.5 text-center">
                        <ComparisonValueBadge value={row.rankcanyon} highlighted />
                      </td>
                      <td className="px-5 py-4.5 text-center">
                        <ComparisonValueBadge value={row.inHouse} />
                      </td>
                      <td className="px-5 py-4.5 text-center">
                        <ComparisonValueBadge value={row.freelancers} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Mobile Stacked Comparison Cards (< md) — Zero Horizontal Scroll */}
          <ul className="mt-10 space-y-4 md:hidden">
            {data.comparisonSection.rows.map((row) => (
              <li
                key={row.feature}
                className="overflow-hidden rounded-2xl border border-navy-950/12 bg-background shadow-xs"
              >
                <div className="border-b border-navy-950/10 bg-surface px-4 py-3.5">
                  <p className="font-display text-sm font-extrabold text-navy-950">
                    {row.feature}
                  </p>
                </div>

                <dl className="divide-y divide-navy-950/8 text-xs">
                  <div className="flex items-center justify-between bg-ice/75 px-4 py-3">
                    <dt className="font-display font-extrabold text-navy-950">
                      <span className="text-brand-500">Rank</span>Canyon
                    </dt>
                    <dd>
                      <ComparisonValueBadge value={row.rankcanyon} highlighted />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <dt className="font-medium text-muted">
                      {data.comparisonSection.columns.inHouse}
                    </dt>
                    <dd>
                      <ComparisonValueBadge value={row.inHouse} />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <dt className="font-medium text-muted">
                      {data.comparisonSection.columns.freelancers}
                    </dt>
                    <dd>
                      <ComparisonValueBadge value={row.freelancers} />
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>

          {/* Bottom CTA */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex justify-center sm:mt-14">
              <ButtonLink
                href={data.hero.primaryCta.href}
                size="lg"
                className="w-full sm:w-auto"
              >
                {data.hero.primaryCta.label}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
