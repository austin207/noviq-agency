import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/demos/app-food", "/demos/app-clinic", "/demos/app-salon", "/demos/app-grocery"],
      },
    ],
    sitemap: "https://noviq.website/sitemap.xml",
  };
}
