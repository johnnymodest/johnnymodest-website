import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://johnnymodest.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/zero-nonsense`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  // Dynamic case study slugs
  const caseStudiesDir = path.join(process.cwd(), "content/case-studies");
  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const files = await fs.readdir(caseStudiesDir);
    const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

    dynamicRoutes = mdxFiles.map((file) => ({
      url: `${baseUrl}/case-studies/${file.replace(".mdx", "")}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    // content/case-studies directory doesn't exist yet — no dynamic routes
  }

  return [...staticRoutes, ...dynamicRoutes];
}
