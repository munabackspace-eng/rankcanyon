import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/shared/PageHero";
import { PostCard } from "@/components/shared/PostCard";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/ui/Section";
import { getSortedPosts } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Amazon Growth Blog — PPC, SEO & Marketplace Insights",
  description:
    "Actionable Amazon strategy from the RankCanyon team: PPC and DSP tactics, listing optimization, TACoS management, Prime Day playbooks and marketplace growth insights.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getSortedPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <PageHero
        title="The RankCanyon blog"
        description="Practical, data-backed playbooks for growing a profitable brand on Amazon — written by the specialists who run our client accounts."
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
      />

      <Section tone="surface" aria-label="Articles">
        {featured && <PostCard post={featured} featured />}

        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <PostCard post={post} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
