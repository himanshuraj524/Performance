import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

// Set NEXT_PUBLIC_SITE_URL for a future hosted environment.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3017";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({ url: `${siteUrl}/work/${project.slug}/`, changeFrequency: "monthly" as const, priority: .8 })),
  ];
}
