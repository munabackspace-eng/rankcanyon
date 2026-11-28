import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Filter,
  Globe,
  Layers,
  Lock,
  Receipt,
  Search,
  Sliders,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  PpcFlywheelDiagram,
  PpcHeroStage,
  PpcInteractiveConsole,
} from "@/components/sections/service-detail/PpcHeroVisual";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { MarketplaceBrandLogo } from "@/components/shared/MarketplaceBrandLogos";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { marketplacePpcPageData } from "@/data/marketplace-ppc";
import { cn } from "@/lib/utils";

const INCLUDED_ICONS = {
  search: Search,
  target: Target,
  layers: Layers,
  sliders: Sliders,
  filter: Filter,
  sparkles: Sparkles,
  chart: BarChart3,
  trending: TrendingUp,
} as const;

const WHY_ICONS = {
  target: Target,
  sliders: Sliders,
  sparkles: Sparkles,
  globe: Globe,
  lock: Lock,
  receipt: Receipt,
} as const;

export function MarketplacePpcPage() {
  const data = marketplacePpcPageData;

  return (
    <>
      {/* 1. Hero Section */}
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
            <h1 className="w-full text-4xl leading-[1.08] font-extrabold tracking-[-0.03em] text-pretty text-navy-950 sm:text-5xl lg:text-[3.4rem] xl:text-[3.85rem]">
              {data.hero.titleLead}{" "}
              <span className="text-brand-500">{data.hero.titleAccent}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:mt-7 sm:text-lg lg:text-[1.125rem]">
              {data.hero.subtitle}
            </p>

            <div className="mt-8 flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-start">
              <ButtonLink
                href={data.hero.primaryCta.href}
                size="lg"
                className="w-full sm:w-auto"
              >
                {data.hero.primaryCta.label}
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={data.hero.secondaryCta.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {data.hero.secondaryCta.label}
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
            <PpcHeroStage />
          </div>
        </Container>

        <BreadcrumbSchema
          items={[
            { name: "Services", href: "/services" },
            { name: data.seoTitle, href: `/services/${data.slug}` },
          ]}
        />
      </section>

      {/* 2. Every Ad Dollar Count + Interactive Margin Console */}
      <section
        aria-labelledby="ppc-intro-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <div>
                <h2
                  id="ppc-intro-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.75rem] xl:text-[3rem]"
                >
                  {data.introSection.titleLead}{" "}
                  <span className="text-brand-500">{data.introSection.titleAccent}</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                  {data.introSection.body}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <PpcInteractiveConsole />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. What Is PPC Advertising & Campaign Management — Open Editorial Split */}
      <section
        aria-labelledby="ppc-meaning-heading"
        className="w-full bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14 xl:gap-16">
              <div className="lg:col-span-5">
                <h2
                  id="ppc-meaning-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.65rem]"
                >
                  {data.whatItMeansSection.titleLead}{" "}
                  <span className="text-brand-500">
                    {data.whatItMeansSection.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="space-y-5 border-l-2 border-brand-500 pl-6 sm:pl-8 lg:col-span-7 lg:pl-10">
                {data.whatItMeansSection.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="text-base leading-[1.8] text-navy-800/90 sm:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. PPC Campaigns Managed Across Every Marketplace — Charcoal Showcase */}
      <section
        aria-labelledby="ppc-channels-heading"
        className="w-full bg-[#4d4d4f] py-16 text-white sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="ppc-channels-heading"
                className="text-3xl leading-[1.08] font-extrabold tracking-tight text-wrap text-white sm:text-5xl lg:text-[3.25rem]"
              >
                {data.channelsSection.titleLead}{" "}
                <span className="text-brand-400">{data.channelsSection.titleAccent}</span>
              </h2>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {data.channelsSection.cards.map((channel, idx) => (
              <li key={channel.id} className="flex">
                <Reveal delay={(idx % 4) * 0.06} className="flex w-full">
                  <Link
                    href={channel.href}
                    className="group relative flex w-full flex-col justify-between gap-5 rounded-2xl border-2 border-navy-950 bg-surface p-6 text-navy-950 shadow-[5px_6px_0_0_#2aabe2] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ebf5fb] hover:shadow-[7px_8px_0_0_#2aabe2] focus-visible:outline-2 focus-visible:outline-brand-400 sm:rounded-[1.35rem] sm:p-7"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <MarketplaceBrandLogo
                          platform={channel.platform}
                          className="h-10 min-w-[2.75rem] px-2.5 sm:h-10 sm:px-2.5"
                        />

                        <span
                          aria-hidden="true"
                          className="inline-flex size-9 items-center justify-center rounded-full border border-navy-950/15 bg-background text-navy-950 transition-all duration-200 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white"
                        >
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl leading-snug font-extrabold tracking-tight text-navy-950 transition-colors group-hover:text-brand-600">
                        {channel.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-navy-800/85">
                        {channel.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. What Our PPC Management Service Includes — Architectural Hairline Matrix */}
      <section
        aria-labelledby="ppc-includes-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <h2
                id="ppc-includes-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.25rem]"
              >
                {data.includedSection.titleLead}{" "}
                <span className="text-brand-500">{data.includedSection.titleAccent}</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="mt-12 grid grid-cols-1 border-t border-navy-950/12 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
              {data.includedSection.cards.map((card, idx) => {
                const Icon = INCLUDED_ICONS[card.iconKey];
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <li
                    key={card.title}
                    className={cn(
                      "group relative flex flex-col border-b border-navy-950/12 px-1 py-7 transition-colors duration-200 hover:bg-ice/45 sm:px-6 sm:py-8",
                      idx % 2 === 0 && "sm:border-r sm:border-navy-950/12",
                      idx % 4 !== 3 ? "lg:border-r lg:border-navy-950/12" : "lg:border-r-0",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -top-px h-[2px] origin-left scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-ice text-brand-600 transition-colors duration-200 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon aria-hidden="true" className="size-4.5" />
                      </span>
                      <span className="font-display text-xs font-extrabold tracking-widest text-brand-500/80">
                        {num}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg leading-snug font-extrabold text-navy-950">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {card.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* 6. Our 5-Step PPC Growth Process + Dark 4-Metric Band */}
      <section
        aria-labelledby="ppc-process-heading"
        className="w-full overflow-x-clip bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="ppc-process-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.25rem]"
              >
                {data.processSection.titleLead}{" "}
                <span className="text-brand-500">{data.processSection.titleAccent}</span>
              </h2>
            </div>
          </Reveal>

          <ol className="relative mt-14 grid gap-9 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {data.processSection.steps.map((step, idx) => {
              const isLast = idx === data.processSection.steps.length - 1;
              return (
                <li key={step.number} className="relative flex flex-col">
                  <Reveal delay={idx * 0.06}>
                    <div className="flex flex-col items-start">
                      <div className="flex w-full items-center gap-3">
                        <span className="font-display text-4xl leading-none font-extrabold tracking-tight text-brand-500 sm:text-5xl">
                          {step.number}
                        </span>
                        {!isLast && (
                          <svg
                            viewBox="0 0 96 28"
                            fill="none"
                            aria-hidden="true"
                            className="hidden h-6 flex-1 text-brand-500 lg:block"
                          >
                            <path
                              d="M 4 20 Q 48 2 88 16"
                              stroke="currentColor"
                              strokeWidth="2.1"
                              strokeDasharray="4 4"
                              strokeLinecap="round"
                            />
                            <path
                              d="M 81 10 L 90 17 L 79 21"
                              stroke="currentColor"
                              strokeWidth="2.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <h3 className="mt-4 font-display text-xl font-extrabold text-navy-950">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-800/85">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          {/* Dark 4-Stat Band (ACoS, ROAS, TACoS, Profit) */}
          <Reveal delay={0.1}>
            <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-black p-6 text-white shadow-[0_24px_60px_-18px_rgba(18,41,64,0.28)] sm:mt-18 sm:rounded-[2rem] sm:p-10 lg:px-12 lg:py-11">
              <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/14">
                {data.processSection.statBand.map((stat, idx) => (
                  <div
                    key={stat.metric}
                    className={cn(
                      "flex flex-col",
                      idx > 0 && "lg:pl-8",
                      idx < 3 && "lg:pr-8",
                    )}
                  >
                    <dt className="font-display text-3xl leading-none font-extrabold tracking-tight text-brand-400 sm:text-4xl">
                      {stat.metric}
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-white/80">
                      {stat.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 7. Our Approach: Lower ACoS, Higher ROAS, Without Guesswork */}
      <section
        aria-labelledby="ppc-approach-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <div>
                <h2
                  id="ppc-approach-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.75rem]"
                >
                  {data.approachSection.titleLead}{" "}
                  <span className="text-brand-500">
                    {data.approachSection.titleAccent}
                  </span>
                </h2>

                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                  {data.approachSection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 border-t border-navy-950/10 pt-6">
                  {data.approachSection.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-display text-sm font-bold text-navy-950 sm:text-[15px]"
                    >
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-ice text-brand-600">
                        <Check aria-hidden="true" className="size-3.5 stroke-[2.75]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <PpcFlywheelDiagram />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8. Mid-Page Dark Consultation Banner */}
      <section
        aria-labelledby="ppc-consult-heading"
        className="w-full bg-background pb-16 sm:pb-22"
      >
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-10 text-white shadow-[0_24px_60px_-18px_rgba(18,41,64,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16">
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
                <div className="max-w-2xl">
                  <h2
                    id="ppc-consult-heading"
                    className="text-2xl leading-[1.12] font-extrabold tracking-tight text-wrap text-white sm:text-4xl lg:text-[2.5rem]"
                  >
                    {data.consultationBanner.titleLead}{" "}
                    <span className="text-brand-400">
                      {data.consultationBanner.titleAccent}
                    </span>
                  </h2>
                </div>

                <div className="w-full shrink-0 sm:w-auto">
                  <ButtonLink
                    href={data.consultationBanner.buttonHref}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {data.consultationBanner.buttonLabel}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 9. Why Brands Trust RankCanyon With Their Ad Spend — Sticky Left + Hairline Rows */}
      <section
        aria-labelledby="ppc-why-heading"
        className="w-full bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
              <div>
                <h2
                  id="ppc-why-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.85rem]"
                >
                  Why Brands Trust{" "}
                  <span className="text-brand-500">Rank</span>Canyon{" "}
                  <span className="text-brand-500">{data.whyTrustSection.titleAccent}</span>
                </h2>

                <div className="mt-8">
                  <ButtonLink href={data.hero.primaryCta.href} size="lg">
                    {data.hero.primaryCta.label}
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-navy-950/12 border-t border-navy-950/12">
                {data.whyTrustSection.cards.map((item, idx) => {
                  const Icon = WHY_ICONS[item.iconKey];
                  return (
                    <li key={item.title}>
                      <Reveal delay={idx * 0.05}>
                        <div className="group flex items-start gap-5 py-6 sm:gap-6 sm:py-7">
                          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-brand-500/25 bg-background text-brand-600 shadow-2xs transition-colors duration-200 group-hover:bg-brand-500 group-hover:text-white">
                            <Icon aria-hidden="true" className="size-5" />
                          </span>
                          <div>
                            <h3 className="font-display text-xl leading-snug font-extrabold text-navy-950 transition-colors group-hover:text-brand-600">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-navy-800/85 sm:text-[15.5px]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. PPC Management Pricing + Closing Strip */}
      <section
        aria-labelledby="ppc-pricing-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="ppc-pricing-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.25rem]"
              >
                {data.pricingSection.titleLead}{" "}
                <span className="text-brand-500">{data.pricingSection.titleAccent}</span>
              </h2>
            </div>
          </Reveal>

          <ul className="mt-12 grid items-stretch gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-7">
            {data.pricingSection.plans.map((plan, idx) => (
              <li key={plan.badge} className="flex">
                <Reveal delay={idx * 0.07} className="flex w-full">
                  <article
                    className={cn(
                      "flex w-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 sm:p-8",
                      plan.featured
                        ? "bg-black text-white ring-2 ring-brand-500 shadow-[0_28px_65px_-18px_rgba(18,41,64,0.38)] lg:-my-3 lg:py-10"
                        : "border border-navy-950/10 bg-background text-navy-950 shadow-[0_16px_40px_-18px_rgba(18,41,64,0.12)]",
                    )}
                  >
                    <div>
                      <p
                        className={cn(
                          "font-display text-xs font-extrabold tracking-[0.14em] uppercase sm:text-[13px]",
                          plan.featured ? "text-brand-400" : "text-brand-600",
                        )}
                      >
                        {plan.badge}
                      </p>
                      <p
                        className={cn(
                          "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl",
                          plan.featured ? "text-white" : "text-navy-950",
                        )}
                      >
                        {plan.price}
                      </p>
                      <p
                        className={cn(
                          "mt-2.5 text-sm leading-relaxed",
                          plan.featured ? "text-white/80" : "text-muted",
                        )}
                      >
                        {plan.bestFor}
                      </p>

                      <ul className="mt-6 space-y-3 border-t border-current/10 pt-6">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm leading-snug"
                          >
                            <Check
                              aria-hidden="true"
                              className={cn(
                                "mt-0.5 size-4 shrink-0 stroke-[2.75]",
                                plan.featured ? "text-brand-400" : "text-brand-600",
                              )}
                            />
                            <span
                              className={
                                plan.featured ? "text-white/90" : "text-navy-800"
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-2">
                      <ButtonLink
                        href={plan.ctaHref}
                        variant={plan.featured ? "primary" : "secondary"}
                        size="lg"
                        className="w-full"
                      >
                        {plan.ctaLabel}
                      </ButtonLink>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* Closing Profitable Clicks Callout Strip */}
          <Reveal delay={0.12}>
            <div className="mt-10 rounded-3xl border border-white/10 bg-black p-6 text-white shadow-[0_24px_60px_-18px_rgba(18,41,64,0.28)] sm:mt-12 sm:p-8 lg:px-10">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-10">
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl leading-tight font-extrabold text-white sm:text-3xl">
                    {data.pricingSection.closingStrip.titleLead}{" "}
                    <span className="text-brand-400">
                      {data.pricingSection.closingStrip.titleAccent}
                    </span>
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/80 sm:text-base">
                    {data.pricingSection.closingStrip.subtext}
                  </p>
                </div>

                <div className="w-full shrink-0 sm:w-auto">
                  <ButtonLink
                    href={data.pricingSection.closingStrip.buttonHref}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {data.pricingSection.closingStrip.buttonLabel}
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 11. FAQ Section (10 Questions, 5 Initial + Highlighted Show More) */}
      <FaqSection
        faqs={data.faqSection.faqs}
        headingLead={data.faqSection.headingLead}
        headingAccent={data.faqSection.headingAccent}
        tone="ice"
        withSchema={true}
      />
    </>
  );
}
