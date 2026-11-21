import type { BlogBlock } from "@/types";

/** Renders structured blog content blocks with consistent typography (no MDX needed yet). */
export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-navy-800">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="pt-6 text-2xl font-bold text-navy-950 sm:text-3xl">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-4 text-xl font-bold text-navy-950">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 marker:text-navy-400">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="rounded-r-2xl border-l-4 border-navy-950 bg-card py-4 pr-6 pl-6 text-xl font-semibold text-navy-950"
              >
                {block.text}
              </blockquote>
            );
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </div>
  );
}
