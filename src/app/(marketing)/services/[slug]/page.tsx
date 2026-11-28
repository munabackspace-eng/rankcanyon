import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { MarketplaceManagementPage } from "@/components/sections/service-detail/MarketplaceManagementPage";
import { MarketplacePpcPage } from "@/components/sections/service-detail/MarketplacePpcPage";
import { OrganicRankingPage } from "@/components/sections/service-detail/OrganicRankingPage";
import { ProductLaunchPage } from "@/components/sections/service-detail/ProductLaunchPage";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { marketplaceManagementPageData } from "@/data/marketplace-management";
import { marketplacePpcPageData } from "@/data/marketplace-ppc";
import { organicRankingPageData } from "@/data/organic-ranking";
import { productLaunchPageData } from "@/data/product-launch";
import { getServiceBySlug, services } from "@/data/services";
import { PRIMARY_CTA, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

const CUSTOM_SERVICE_SEO: Record<
  string,
  { seoTitle: string; seoDescription: string }
> = {
  [marketplaceManagementPageData.slug]: {
    seoTitle: marketplaceManagementPageData.seoTitle,
    seoDescription: marketplaceManagementPageData.seoDescription,
  },
  [marketplacePpcPageData.slug]: {
    seoTitle: marketplacePpcPageData.seoTitle,
    seoDescription: marketplacePpcPageData.seoDescription,
  },
  [organicRankingPageData.slug]: {
    seoTitle: organicRankingPageData.seoTitle,
    seoDescription: organicRankingPageData.seoDescription,
  },
  [productLaunchPageData.slug]: {
    seoTitle: productLaunchPageData.seoTitle,
    seoDescription: productLaunchPageData.seoDescription,
  },
};

/** Prerender every service page at build time. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };

  const customSeo = CUSTOM_SERVICE_SEO[slug];
  if (customSeo) {
    return buildMetadata({
      title: customSeo.seoTitle,
      description: customSeo.seoDescription,
      path: `/services/${service.slug}`,
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const customSeo = CUSTOM_SERVICE_SEO[slug];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: customSeo ? customSeo.seoTitle : service.title,
    description: customSeo ? customSeo.seoDescription : service.metaDescription,
    serviceType: service.shortTitle,
    url: `${SITE.url}/services/${service.slug}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: "Worldwide",
  };

  if (slug === marketplaceManagementPageData.slug) {
    return (
      <>
        <MarketplaceManagementPage />
        <JsonLd data={serviceJsonLd} />
      </>
    );
  }

  if (slug === marketplacePpcPageData.slug) {
    return (
      <>
        <MarketplacePpcPage />
        <JsonLd data={serviceJsonLd} />
      </>
    );
  }

  if (slug === organicRankingPageData.slug) {
    return (
      <>
        <OrganicRankingPage />
        <JsonLd data={serviceJsonLd} />
      </>
    );
  }

  if (slug === productLaunchPageData.slug) {
    return (
      <>
        <ProductLaunchPage />
        <JsonLd data={serviceJsonLd} />
      </>
    );
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { name: "Services", href: "/services" },
          { name: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={PRIMARY_CTA.href} size="lg">
            {PRIMARY_CTA.label}
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/case-studies" variant="secondary" size="lg">
            See Results
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview + outcomes */}
      <Section aria-labelledby="overview-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              id="overview-heading"
              className="text-3xl font-bold text-navy-950 sm:text-4xl"
            >
              How we approach {service.shortTitle}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5" aria-label="Typical outcomes">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-premium">
              <p className="text-sm font-semibold tracking-wider text-navy-600 uppercase">
                Typical client outcomes
              </p>
              <dl className="mt-6 space-y-6">
                {service.outcomes.map((outcome) => (
                  <div
                    key={outcome.label}
                    className="flex flex-col border-b border-border pb-6 last:border-0 last:pb-0"
                  >
                    <dt className="order-2 mt-1 text-sm text-muted">{outcome.label}</dt>
                    <dd className="order-1 font-display text-4xl font-extrabold">
                      {outcome.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs text-muted">
                Results vary by category, margin profile and starting point.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Features */}
      <Section tone="surface" aria-labelledby="features-heading">
        <SectionHeading
          id="features-heading"
          title={`Inside our ${service.shortTitle} program`}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {service.features.map((feature, i) => (
            <li key={feature.title} className="flex">
              <Reveal delay={(i % 2) * 0.08} className="flex w-full">
                <Card className="w-full">
                  <IconBadge icon={service.icon} />
                  <h3 className="mt-5 text-lg font-bold text-navy-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{feature.description}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Deliverables */}
      <Section tone="ice" aria-labelledby="deliverables-heading">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            id="deliverables-heading"
            align="left"
            title="What you get, every engagement"
            description="Clear scope, clear ownership and clear reporting — so you always know what we're working on and why."
          />
          <ul className="space-y-4">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 shadow-card"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-navy-950"
                />
                <span className="font-medium text-navy-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FaqSection
        faqs={service.faqs}
        tone="surface"
        title={`${service.shortTitle} FAQs`}
      />

      {/* Related services */}
      <Section aria-labelledby="related-heading">
        <h2 id="related-heading" className="text-2xl font-bold text-navy-950 sm:text-3xl">
          Related services
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span className="font-semibold text-navy-950 group-hover:text-navy-600">
                  {item.title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted">
                  {item.summary}
                </span>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-navy-950">
                  Learn more
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta title={`Ready to scale with ${service.shortTitle}?`} />
      <JsonLd data={serviceJsonLd} />
    </>
  );
}
