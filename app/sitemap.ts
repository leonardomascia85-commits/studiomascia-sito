import type { MetadataRoute } from "next";
import { getSortedNews, TAGS, tagToSlug } from "@/lib/content/news";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/chi-siamo",
    "/servizi",
    "/resto-al-sud",
    "/resto-al-sud/questionario",
    "/contenzioso-tributario",
    "/news",
    "/contatti",
    "/privacy",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const newsRoutes = getSortedNews().map((n) => ({
    url: `${SITE_URL}/news/${n.slug}`,
    lastModified: new Date(n.date),
  }));

  const tagRoutes = TAGS.map((tag) => ({
    url: `${SITE_URL}/news/tag/${tagToSlug(tag)}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...newsRoutes, ...tagRoutes];
}
