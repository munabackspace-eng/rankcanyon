import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { services } from "@/data/services";
import { SITE } from "@/lib/constants";

type Entry = MetadataRoute.Sitemap[number];

const staticRoutes: {
  path: string;
  priority: number;
  changeFrequency: Entry["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE.url}${route.path === "/" ? "" : route.path}`,
    lastModified: SITE.lastUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified: SITE.lastUpdated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...servicePages, ...postPages];
}
