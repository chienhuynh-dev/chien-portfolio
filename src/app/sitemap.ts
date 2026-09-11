import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Section fragments are parts of the homepage, not separate indexable pages.
  return [{ url: `${site.url}/` }];
}
