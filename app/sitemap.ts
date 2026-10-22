import type { MetadataRoute } from "next";
import { articles } from "@/content/data";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/products/stock-audit-automation",
    "/products/audit-management",
    "/technology",
    "/industries",
    "/work",
    "/insights",
    "/about",
    "/contact",
    "/careers",
  ];
  const now = new Date();
  return [
    ...routes.map((r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : r.split("/").length > 2 ? 0.7 : 0.8,
    })),
    // Draft placeholders are noindexed, so they are not listed.
    ...articles
      .filter((a) => !a.placeholder)
      .map((a) => ({ url: `${site.url}/insights/${a.slug}`, lastModified: new Date(a.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
