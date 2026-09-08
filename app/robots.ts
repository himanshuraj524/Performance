import type { MetadataRoute } from "next";

// Set NEXT_PUBLIC_SITE_URL for a future hosted environment.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3017";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml` };
}
