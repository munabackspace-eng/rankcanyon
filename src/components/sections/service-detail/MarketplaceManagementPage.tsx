import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  CheckCircle2,
  FileText,
  Globe,
  Layers,
  Lock,
  MessageSquareWarning,
  Receipt,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  MarketplaceHeroStage,
  OperationsInteractiveConsole,
} from "@/components/sections/service-detail/MarketplaceHeroVisual";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { MarketplaceBrandLogo } from "@/components/shared/MarketplaceBrandLogos";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  marketplaceManagementPageData,
  type ServiceInclusionCard,
  type WhyChooseCard,
} from "@/data/marketplace-management";
import { cn } from "@/lib/utils";

const INCLUSION_ICONS: Record<ServiceInclusionCard["iconKey"], typeof Activity> = {
  monitor: Activity,
  shield: ShieldCheck,
  catalog: FileText,
  boxes: Boxes,
  wrench: Wrench,
  cases: MessageSquareWarning,
  returns: RotateCcw,
  chart: BarChart3,
};

const WHY_ICONS: Record<WhyChooseCard["iconKey"], typeof Globe> = {
  globe: Globe,
  layers: Layers,
  receipt: Receipt,
  lock: Lock,
  sparkles: Sparkles,
  check: CheckCircle2,
};

export function MarketplaceManagementPage() {
  const data = marketplaceManagementPageData;

  return (
    <>
      {/* 1. Hero Section — Homepage-matched ice-blue canvas + floating SVG stage */}
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
          {/* Left column: Verbatim H1, subtitle, CTAs & supported marketplaces */}
          <div className="flex min-w-0 flex-col items-center text-center lg:col-span-7 lg:items-start lg:pr-4 lg:text-left">
            <h1 className="w-full text-4xl leading-[1.08] font-extrabold tracking-[-0.03em] text-pretty text-navy-950 sm:text-5xl lg:text-[3.55rem] xl:text-[4rem]">
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

          {/* Right column: Animated multi-marketplace SVG constellation */}
          <div className="min-w-0 lg:col-span-5">
            <MarketplaceHeroStage />
          </div>
        </Container>

        <BreadcrumbSchema
          items={[
            { name: "Services", href: "/services" },
            {
              name: data.seoTitle,
              href: `/services/${data.slug}`,
            },
          ]}
        />
      </section>

      {/* 2. Complete Marketplace Account Management — Open 2-Column Editorial + Interactive SVG */}
      <section
        aria-labelledby="complete-management-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <div>
                <h2
                  id="complete-management-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.75rem] xl:text-[3rem]"
                >
                  {data.completeManagement.titleLead}{" "}
                  <span className="text-brand-500">
                    {data.completeManagement.titleAccent}
                  </span>
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                  {data.completeManagement.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <OperationsInteractiveConsole />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Profitable E-Commerce Growth — Open Asymmetric Editorial Split (No Card Box) */}
      <section
        aria-labelledby="growth-story-heading"
        className="relative w-full overflow-x-clip bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14 xl:gap-16">
              <div className="lg:col-span-5">
                <h2
                  id="growth-story-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.65rem] xl:text-[2.95rem]"
                >
                  {data.growthStory.titleLead}{" "}
                  <span className="text-brand-500">{data.growthStory.titleAccent}</span>
                </h2>
              </div>

              <div className="border-l-2 border-brand-500 pl-6 sm:pl-8 lg:col-span-7 lg:pl-10">
                <p className="text-base leading-[1.8] text-navy-800/90 sm:text-lg lg:text-[1.125rem] lg:leading-[1.85]">
                  {data.growthStory.body}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. Across Leading Platforms — The Single Signature Charcoal Service Card Showcase */}
      <section
        id="leading-platforms"
        aria-labelledby="leading-platforms-heading"
        className="w-full bg-[#4d4d4f] py-16 text-white sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="leading-platforms-heading"
                className="text-3xl leading-[1.08] font-extrabold tracking-tight text-wrap text-white sm:text-5xl lg:text-[3.25rem]"
              >
                {data.platformsSection.titleLead}{" "}
                <span className="text-brand-400">
                  {data.platformsSection.titleAccent}
                </span>
              </h2>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {data.platformsSection.cards.map((platform, idx) => (
              <li key={platform.id} className="flex">
                <Reveal delay={(idx % 3) * 0.06} className="flex w-full">
                  <Link
                    href={platform.href}
                    className="group relative flex w-full flex-col justify-between gap-5 rounded-2xl border-2 border-navy-950 bg-surface p-6 text-navy-950 shadow-[5px_6px_0_0_#2aabe2] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ebf5fb] hover:shadow-[7px_8px_0_0_#2aabe2] focus-visible:outline-2 focus-visible:outline-brand-400 sm:rounded-[1.35rem] sm:p-7"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-xl border border-navy-950/15 bg-background px-3 py-1.5 font-display text-xs font-extrabold tracking-wider text-navy-950">
                          {platform.id === "shopify" ? (
                            <ShoppingBag
                              aria-hidden="true"
                              className="size-3.5 text-brand-600"
                            />
                          ) : (
                            <Store
                              aria-hidden="true"
                              className="size-3.5 text-brand-600"
                            />
                          )}
                          {platform.badge}
                        </span>

                        <span
                          aria-hidden="true"
                          className="inline-flex size-9 items-center justify-center rounded-full border border-navy-950/15 bg-background text-navy-950 transition-all duration-200 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white"
                        >
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl leading-snug font-extrabold tracking-tight text-navy-950 transition-colors group-hover:text-brand-600 sm:text-[1.35rem]">
                        {platform.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-navy-800/85 sm:text-[15px]">
                        {platform.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Mid-Page Dark Consultation Banner */}
      <section
        aria-labelledby="consultation-banner-heading"
        className="w-full bg-background pt-14 pb-8 sm:pt-20 sm:pb-12"
      >
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-10 text-white shadow-[0_24px_60px_-18px_rgba(18,41,64,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16">
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
                <div className="max-w-2xl">
                  <h2
                    id="consultation-banner-heading"
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

      {/* 6. What Our Service Includes — Seamless Architectural Hairline Matrix (No Boxy Cards) */}
      <section
        aria-labelledby="service-includes-heading"
        className="w-full bg-background py-14 text-foreground sm:py-22"
      >
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <h2
                id="service-includes-heading"
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
                const Icon = INCLUSION_ICONS[card.iconKey];
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
                    {/* Hover top accent line */}
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

      {/* 7. Process — Open Cardless 4-Step Flow with Sweeping Curved SVG Arrows */}
      <section
        aria-labelledby="marketplace-process-heading"
        className="w-full overflow-x-clip bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="marketplace-process-heading"
                className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-5xl lg:text-[3.25rem]"
              >
                {data.processSection.titleLead}{" "}
                <span className="text-brand-500">{data.processSection.titleAccent}</span>
              </h2>
            </div>
          </Reveal>

          <ol className="relative mt-14 grid gap-10 sm:mt-18 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {data.processSection.steps.map((step, idx) => {
              const isLast = idx === data.processSection.steps.length - 1;
              return (
                <li key={step.number} className="relative flex flex-col">
                  <Reveal delay={idx * 0.08}>
                    <div className="flex flex-col items-start">
                      <div className="flex w-full items-center gap-4">
                        <span className="font-display text-5xl leading-none font-extrabold tracking-tight text-brand-500 sm:text-[3.35rem]">
                          {step.number}
                        </span>

                        {/* Curved directional SVG arrow pointing to next step on desktop */}
                        {!isLast && (
                          <svg
                            viewBox="0 0 120 32"
                            fill="none"
                            aria-hidden="true"
                            className="hidden h-7 flex-1 text-brand-500 lg:block"
                          >
                            <path
                              d="M 4 22 Q 60 2 112 18"
                              stroke="currentColor"
                              strokeWidth="2.25"
                              strokeDasharray="4 4"
                              strokeLinecap="round"
                            />
                            <path
                              d="M 105 11 L 114 19 L 103 23"
                              stroke="currentColor"
                              strokeWidth="2.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>

                      <h3 className="mt-4 font-display text-xl font-extrabold text-navy-950 sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-navy-800/85 sm:text-[15px]">
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

      {/* 8. Pricing Plans + Full-Width Enterprise Strip — Refined Soft-Elevated Tier Columns */}
      <section
        aria-labelledby="service-pricing-heading"
        className="w-full bg-background py-16 text-foreground sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="service-pricing-heading"
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

          {/* Full-width Enterprise strip below the cards */}
          <Reveal delay={0.12}>
            <div className="mt-8 rounded-3xl border border-white/10 bg-black p-6 text-white shadow-[0_24px_60px_-18px_rgba(18,41,64,0.28)] sm:mt-10 sm:p-8 lg:px-10">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-10">
                <div className="max-w-3xl">
                  <p className="font-display text-xs font-extrabold tracking-[0.14em] text-brand-400 uppercase sm:text-sm">
                    {data.pricingSection.enterprise.badge}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/85 sm:text-base">
                    {data.pricingSection.enterprise.description}
                  </p>
                </div>

                <div className="w-full shrink-0 sm:w-auto">
                  <ButtonLink
                    href={data.pricingSection.enterprise.ctaHref}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {data.pricingSection.enterprise.ctaLabel}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 10. Why E-commerce Brands Choose RankCanyon — Sticky Left Editorial + Right Divided Feature Rows (No Cards) */}
      <section
        aria-labelledby="why-choose-heading"
        className="w-full bg-ice py-16 text-foreground sm:py-24"
      >
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Sticky Left Intro Column */}
            <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
              <div>
                <h2
                  id="why-choose-heading"
                  className="text-3xl leading-[1.1] font-extrabold tracking-tight text-wrap text-navy-950 sm:text-4xl lg:text-[2.85rem]"
                >
                  Why E-commerce Brands Choose{" "}
                  <span className="text-brand-500">Rank</span>Canyon
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {data.whyChooseSection.subtext}
                </p>

                <div className="mt-8">
                  <ButtonLink href={data.hero.primaryCta.href} size="lg">
                    {data.hero.primaryCta.label}
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            {/* Right Open Hairline-Divided Rows */}
            <div className="lg:col-span-7">
              <ul className="divide-y divide-navy-950/12 border-t border-navy-950/12">
                {data.whyChooseSection.cards.map((item, idx) => {
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

      {/* 11. FAQ Section (5 Initial Questions + Highlighted Show More) */}
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
