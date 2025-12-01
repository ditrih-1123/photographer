import type { Metadata } from "next";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title = "Photographer Portfolio",
  description = "Professional photography portfolio",
  image,
  noIndex = false,
}: GenerateMetadataOptions = {}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : [],
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}



