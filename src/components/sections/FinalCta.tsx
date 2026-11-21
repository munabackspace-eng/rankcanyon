import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { HeroCircleGridSvg } from "@/components/shared/AmazonLoopSvgs";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT, PRIMARY_CTA } from "@/lib/constants";

type FinalCtaProps = {
  title?: string;
  description?: string;
};

const DEFAULT_TITLE = "Ready to turn Amazon into your most profitable channel?";

const assurances = [
  "Free, no-obligation audit",
  "Senior strategist on every call",
  "Month-to-month after onboarding",
];

export function FinalCta({
  title = DEFAULT_TITLE,
  description = "Get a free, in-depth audit of your Amazon account. We'll show you exactly where you're losing margin — and the fastest path to profitable growth.",
}: FinalCtaProps) {
  const isDefaultTitle = title === DEFAULT_TITLE;

  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-background px-3 py-16 sm:px-5 sm:py-24"
    >
      <div className="mx-auto max-w-[96rem]">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-charcoal px-6 py-16 text-white shadow-premium sm:rounded-[2.25rem] sm:px-12 sm:py-22 lg:px-16">
            <HeroCircleGridSvg className="absolute inset-0 -z-10 text-white/[0.04]" />
            <Container className="px-0">
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-7">
                  <h2
                    id="cta-heading"
                    className="text-3xl leading-[1.08] font-extrabold text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]"
                  >
                    {isDefaultTitle ? (
                      <>
                        Ready to turn Amazon into your{" "}
                        <span className="text-brand-500">most profitable channel?</span>
                      </>
                    ) : (
                      title
                    )}
                  </h2>
                  <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/75">
                    {assurances.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2
                          aria-hidden="true"
                          className="size-4 text-brand-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                    {description}
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-wrap">
                    <ButtonLink href={PRIMARY_CTA.href} size="lg">
                      {PRIMARY_CTA.label}
                      <ArrowRight aria-hidden="true" />
                    </ButtonLink>
                    <ButtonLink
                      href={`mailto:${CONTACT.email}`}
                      variant="secondary"
                      size="lg"
                    >
                      Email {CONTACT.email}
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
