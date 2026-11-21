import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { FinalCta } from "@/components/sections/FinalCta";
import { BlogContent } from "@/components/shared/BlogContent";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PostCard } from "@/components/shared/PostCard";
import { Section } from "@/components/ui/Section";
import { blogPosts, getPostBySlug, getSortedPosts } from "@/data/blog-posts";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

/** Prerender every post at build time. */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    image: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    ...(post.coverImage && { image: `${SITE.url}${post.coverImage}` }),
  };

  return (
    <>
      <article>
        <header className="border-b border-border bg-spotlight pt-[calc(var(--header-height)+3.5rem)] pb-16 sm:pb-20">
          <Container size="narrow">
            <BreadcrumbSchema
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <h1 className="text-3xl leading-tight font-bold text-navy-950 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted sm:text-xl">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span>
                By <strong className="text-navy-950">{post.author.name}</strong>,{" "}
                {post.author.role}
              </span>
              <span>{post.category}</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>{post.readingTime}</span>
            </div>
          </Container>
        </header>

        <Container size="narrow" className="py-16 sm:py-20">
          <div className="max-w-prose">
            <BlogContent blocks={post.content} />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section tone="ice" aria-labelledby="related-posts-heading">
          <h2
            id="related-posts-heading"
            className="text-2xl font-bold text-navy-950 sm:text-3xl"
          >
            Keep reading
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <PostCard post={item} headingLevel="h3" />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <FinalCta />
      <JsonLd data={articleJsonLd} />
    </>
  );
}
