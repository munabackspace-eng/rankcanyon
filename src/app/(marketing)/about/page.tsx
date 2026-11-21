import { FinalCta } from "@/components/sections/FinalCta";
import { Testimonials } from "@/components/sections/Testimonials";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyStats, companyValues, team } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us — Amazon Growth Experts",
  description:
    "Meet RankCanyon: a team of 60+ Amazon specialists helping consumer brands grow profitably through advertising, listing optimization and account management since 2016.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="We help great brands win the Amazon marketplace"
        description="RankCanyon was founded by former brand operators who were tired of agencies chasing vanity metrics. Today we're a team of Amazon specialists obsessed with one thing: profitable growth for our partners."
        breadcrumbs={[{ name: "About", href: "/about" }]}
      />

      {/* Story */}
      <Section aria-labelledby="story-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="story-heading"
              align="left"
              title="Built by operators, for operators"
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                We started RankCanyon after scaling our own consumer brands on Amazon and
                seeing firsthand how hard it was to find a partner who understood both
                performance marketing and P&amp;L reality.
              </p>
              <p>
                So we built the agency we wished we&apos;d had: senior specialists,
                transparent reporting, and strategies anchored to TACoS and contribution
                margin — not impressions.
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-4 self-center">
            {companyStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
                  <dt className="order-2 mt-1 text-sm text-muted">{stat.label}</dt>
                  <dd className="order-1 font-display text-4xl font-extrabold text-navy-950">
                    {stat.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      {/* Values */}
      <Section tone="ice" aria-labelledby="values-heading">
        <SectionHeading
          id="values-heading"
          title="The principles behind every engagement"
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value, i) => (
            <li key={value.title} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <Card variant="flat" className="w-full">
                  <IconBadge icon={value.icon} className="bg-card" />
                  <h3 className="mt-5 text-lg font-bold text-navy-950">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Team */}
      <Section tone="surface" aria-labelledby="team-heading">
        <SectionHeading
          id="team-heading"
          title="The people behind your growth"
          description="A senior leadership team with decades of combined Amazon, e-commerce and brand experience."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.name} className="text-center">
              {/* Replace with next/image once headshots are added to /public/images/team */}
              <div
                aria-hidden="true"
                className="mx-auto flex aspect-square w-full max-w-60 items-center justify-center rounded-3xl border border-border bg-card font-display text-5xl font-bold text-navy-950 shadow-card"
              >
                {member.initials}
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-950">{member.name}</h3>
              <p className="text-sm text-muted">{member.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Testimonials tone="light" />
      <FinalCta title="Let's build your next growth chapter together" />
    </>
  );
}
