import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/getting-started", "/platforms", "/profile", "/pricing", "/payments", "/tools", "/experiences", "/about", "/search"];
  return routes.map((r) => ({
    url: `${siteConfig.url}${r || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8
  }));
}
