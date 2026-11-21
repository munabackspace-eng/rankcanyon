import { Check } from "lucide-react";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { pricingFaqs, pricingTiers } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing — Amazon Agency Plans",
  description:
    "Transparent Amazon agency pricing. Compare RankCanyon's Growth, Scale and Enterprise plans for PPC management, DSP, listing optimization and account management.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Simple plans that scale with you"
        description="Transparent retainers aligned to your growth. Every plan includes a dedicated strategist, full account ownership and no long-term lock-in."
        breadcrumbs={[{ name: "Pricing", href: "/pricing" }]}
      />

      <Section tone="surface" aria-label="Pricing plans">
        <ul className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <li key={tier.name} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <div
                  className={cn(
                    "relative flex w-full flex-col rounded-3xl border p-8",
                    tier.featured
                      ? "border-navy-950 bg-card text-navy-950 shadow-premium ring-1 ring-navy-950 lg:-my-4 lg:py-12"
                      : "border-border bg-background text-navy-950 shadow-card",
                  )}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-navy-950 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                      Most popular
                    </span>
                  )}
                  <h2 className="text-xl font-bold">{tier.name}</h2>
                  <p className={cn("mt-2 text-sm", "text-muted")}>{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold">
                      {tier.price}
                    </span>
                    <span className={cn("text-sm", "text-muted")}>{tier.priceNote}</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check
                          aria-hidden="true"
                          className={cn("mt-0.5 size-4 shrink-0", "text-navy-950")}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <ButtonLink
                      href="/contact"
                      variant={tier.featured ? "primary" : "secondary"}
                      className="w-full"
                    >
                      {tier.cta}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center text-sm text-muted">
          Placeholder pricing — final packages are tailored after your free audit.
        </p>
      </Section>

      <FaqSection faqs={pricingFaqs} tone="ice" title="Pricing questions" />
      <FinalCta />
    </>
  );
}
