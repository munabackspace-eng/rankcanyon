import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types";
import { cn, formatDate } from "@/lib/utils";

type PostCardProps = {
  post: BlogPost;
  featured?: boolean;
  headingLevel?: "h2" | "h3";
};

/** Cover art: next/image when a cover exists, otherwise a branded gradient placeholder. */
export function PostCover({
  post,
  priority = false,
  className,
}: {
  post: BlogPost;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/9] overflow-hidden border-b border-border bg-card",
        className,
      )}
    >
      {post.coverImage ? (
        <Image
          src={post.coverImage}
          alt=""
          fill
          preload={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className="absolute bottom-5 left-6 font-display text-sm font-semibold tracking-wider text-navy-600 uppercase"
          >
            {post.category}
          </span>
        </>
      )}
    </div>
  );
}

export function PostCard({
  post,
  featured = false,
  headingLevel: Heading = "h2",
}: PostCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full overflow-hidden rounded-2xl border border-border bg-background shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        featured ? "flex-col lg:grid lg:grid-cols-2" : "flex-col",
      )}
    >
      <PostCover
        post={post}
        priority={featured}
        className={featured ? "lg:aspect-auto lg:h-full" : undefined}
      />
      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "lg:p-10")}>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Badge>{post.category}</Badge>
          <time dateTime={post.publishedAt} className="text-muted">
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <Heading
          className={cn(
            "mt-4 leading-snug font-bold text-navy-950 transition-colors group-hover:text-navy-600",
            featured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-6 text-sm text-muted">
          <span>{post.readingTime}</span>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1 font-semibold text-navy-950"
          >
            Read article
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
