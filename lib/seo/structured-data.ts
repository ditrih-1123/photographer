export function generateStructuredData(type: "Organization" | "Person") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    "@context": "https://schema.org",
    "@type": type,
    name: "Photographer Portfolio",
    url: siteUrl,
  };
}



