import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dfiuouvfkhhbn/"],
    },
    sitemap: "https://johnnymodest.com/sitemap.xml",
  };
}
