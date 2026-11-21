import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/data/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Amazon Case Studies & Client Results",
  description:
    "See how RankCanyon helps Amazon brands lower TACoS, increase ROAS, lift conversion rates and expand internationally. Real strategies and measurable results.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Results that speak for themselves"
        description="A look at the challenges our partners faced, the strategies we deployed and the measurable outcomes that followed."
        breadcrumbs={[{ name: "Case Studies", href: "/case-studies" }]}
      />

      <Section tone="surface" aria-label="Case studies">
        <ul className="space-y-8">
          {caseStudies.map((study) => (
            <li key={study.slug} id={study.slug} className="scroll-mt-28">
              <Reveal>
                <article className="grid overflow-hidden rounded-3xl border border-border bg-background shadow-card lg:grid-cols-12">
                  <div className="relative overflow-hidden border-b border-border bg-card p-8 sm:p-10 lg:col-span-4 lg:border-r lg:border-b-0">
                    <div className="relative">
                      <Badge>{study.category}</Badge>
                      <p className="mt-8 text-sm font-semibold text-navy-500">
                        {study.client}
                      </p>
                      <p className="mt-2 font-display text-6xl font-extrabold text-navy-950">
                        {study.highlight.value}
                      </p>
                      <p className="mt-1 text-muted">{study.highlight.label}</p>
                      <ul className="mt-8 flex flex-wrap gap-2">
                        {study.services.map((service) => (
                          <li
                            key={service}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-navy-700"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 lg:col-span-8">
                    <h2 className="text-2xl leading-snug font-bold text-navy-950 sm:text-3xl">
                      {study.headline}
                    </h2>
                    <p className="mt-3 text-lg text-muted">{study.summary}</p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="font-sans text-sm font-semibold tracking-wider text-navy-950 uppercase">
                          The challenge
                        </h3>
                        <p className="mt-2 leading-relaxed text-muted">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-sans text-sm font-semibold tracking-wider text-navy-950 uppercase">
                          Our solution
                        </h3>
                        <p className="mt-2 leading-relaxed text-muted">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col">
                          <dt className="order-2 text-sm text-muted">{metric.label}</dt>
                          <dd className="order-1 font-display text-2xl font-extrabold text-navy-950 sm:text-3xl">
                            {metric.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-sm text-muted">
          Client names are placeholders. Results reflect specific engagements and may
          vary.
        </p>
      </Section>

      <FinalCta title="Want results like these for your brand?" />
    </>
  );
}
