import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/identity-shame",
  "/services/relationships",
  "/services/burnout",
  "/fees",
  "/book",
  "/faq",
  "/policies",
  "/policies/privacy",
  "/policies/cancellation",
  "/policies/online-safety",
  "/policies/informed-consent",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));
}
