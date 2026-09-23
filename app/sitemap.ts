import type { MetadataRoute } from "next";
import { industries, mailTypes } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mymailfuze.com";
  const now = new Date();
  const paths = [
    "/",
    "/plans/",
    "/contact/",
    "/how-it-works/",
    "/features/",
    "/mail-types/",
    "/rent-manager/",
    "/industries/",
    "/demo/",
    "/integrations/",
    "/privacy/",
    "/terms/",
    ...mailTypes.map((m) => `/mail-types/${m.slug}/`),
    ...industries.map((i) => `/industries/${i.slug}/`),
  ];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: now }));
}
