import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { CONTACT } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us — Get a Free Amazon Audit",
  description:
    "Talk to RankCanyon's Amazon experts. Request a free account audit covering PPC, listings and growth opportunities — we respond within one business day.",
  path: "/contact",
});

const nextSteps = [
  {
    title: "We review your account",
    description: "A strategist analyzes your ads, listings and category.",
  },
  {
    title: "Free audit call",
    description: "We walk you through the biggest opportunities we found.",
  },
  {
    title: "Your growth plan",
    description: "Receive a tailored roadmap and proposal — no obligation.",
  },
];

export default function ContactPage() {
  const { address } = CONTACT;
  const details = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
    {
      icon: MapPin,
      label: "Office",
      value: `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`,
    },
    { icon: Clock, label: "Hours", value: CONTACT.hours },
  ];

  return (
    <>
      <PageHero
        title="Let's grow your Amazon business"
        description="Tell us about your brand and goals. We'll follow up within one business day to schedule your free, no-obligation audit."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="space-y-6 lg:col-span-5" aria-label="Contact information">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-premium">
              <h2 className="text-xl font-bold">Contact details</h2>
              <ul className="mt-6 space-y-5">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-navy-950 shadow-card">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs tracking-wider text-muted uppercase">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="font-medium transition-colors hover:text-navy-600"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="font-medium">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8 shadow-card">
              <h2 className="text-xl font-bold text-navy-950">What happens next?</h2>
              <ol className="mt-6 space-y-5">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-navy-950">
                        {step.title}
                      </span>
                      <span className="text-sm text-muted">{step.description}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
