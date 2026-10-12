import type { MetadataRoute } from "next";
import { practiceAreas, practiceAreaHref } from "@/data/site-content";
import { articles } from "@/data/articles";

const BASE_URL = "https://www.netta-bh.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/practice-areas`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/articles`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/accessibility`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const practiceAreaRoutes: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${BASE_URL}${practiceAreaHref(area.slug)}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...articleRoutes];
}
