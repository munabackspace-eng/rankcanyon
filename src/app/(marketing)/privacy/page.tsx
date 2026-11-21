import { LegalPage } from "@/components/shared/LegalPage";
import { CONTACT, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects your personal information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated={SITE.lastUpdated}>
      <p>
        This is placeholder copy. Replace it with a privacy policy reviewed by legal
        counsel before launch.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you provide directly — such as your name, email and company
        when you request an audit — and basic analytics data about how you use our
        website.
      </p>
      <h2>How we use information</h2>
      <p>
        We use your information to respond to inquiries, deliver our services and improve
        our website. We do not sell your personal information.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at{" "}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-navy-950 underline underline-offset-4"
        >
          {CONTACT.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
