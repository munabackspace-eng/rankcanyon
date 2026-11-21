import { LegalPage } from "@/components/shared/LegalPage";
import { CONTACT, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms and conditions governing use of the ${SITE.name} website and services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path="/terms" updated={SITE.lastUpdated}>
      <p>
        This is placeholder copy. Replace it with terms of service reviewed by legal
        counsel before launch.
      </p>
      <h2>Use of this website</h2>
      <p>
        Content on this website is provided for general information only and does not
        constitute a guarantee of specific results.
      </p>
      <h2>Trademarks</h2>
      <p>
        Amazon and all related marks are trademarks of Amazon.com, Inc. or its affiliates.{" "}
        {SITE.name} is an independent agency and is not affiliated with Amazon.
      </p>
      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
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
