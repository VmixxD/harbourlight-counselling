import React from "react";
import { site, schemaConfig } from "@/lib/site";

export function SchemaOrg() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const data = {
    "@context": "https://schema.org",
    "@type": schemaConfig.type,
    name: site.name,
    url: siteUrl,
    areaServed: schemaConfig.areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: schemaConfig.addressLocality,
      addressCountry: schemaConfig.addressCountry
    },
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {})
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
