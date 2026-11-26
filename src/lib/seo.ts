import type { Metadata } from "next";
import { CONTACT, SITE, SOCIAL } from "@/lib/constants";

const DEFAULT_OG_IMAGE = "/opengraph-image";

type BuildMetadataInput = {
  /** Page title (the root layout template appends "| RankCanyon" unless `absoluteTitle`). */
  title: string;
  /** Skip the title template (used on the homepage). */
  absoluteTitle?: boolean;
  description: string;
  /** Site-relative path, e.g. "/services/amazon-ppc-management". Used for canonical + OG url. */
  path: string;
  /** Optional absolute or site-relative OG image. Defaults to the generated `/opengraph-image`. */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

/**
 * Builds consistent, unique metadata for a page: title, description,
 * canonical URL, Open Graph and Twitter cards.
 */
export function buildMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE.name}`;
  // A page-level `openGraph` object replaces the parent's, so always set an image
  // explicitly. Defaults to the build-time generated `src/app/opengraph-image.tsx`.
  const images = [
    { url: image ?? DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: fullTitle },
  ];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images,
      ...(type === "article" && { publishedTime, modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: SITE.twitterHandle,
      images: images.map((i) => i.url),
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

/* ---------------------------------------------------------------------------
 * JSON-LD helpers (schema.org)
 * ------------------------------------------------------------------------- */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    logo: `${SITE.url}/favicon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    sameAs: Object.values(SOCIAL),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export type BreadcrumbItem = { name: string; href: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
