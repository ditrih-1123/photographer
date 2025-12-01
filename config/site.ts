export const siteConfig = {
  name: "Photographer Portfolio",
  description: "Professional photography portfolio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
} as const;



