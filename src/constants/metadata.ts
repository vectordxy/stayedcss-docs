import { Metadata } from "next";

const convertToTitleCase = (str: string): string => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const META = {
  title: "stayedcss",
  siteName: "stayedcss",
  description: "CSS Library for Next.js App Router",
  keyword: [
    "CSS Library",
    "Next.js",
    "App Router",
    "Server Components",
    "Client Components",
    "Web Development",
  ],
  url: "https://stayedcss.vercel.app",
} as const;

const getMetadata = (metadataProps?: any) => {
  const { title, description, asPath } = metadataProps || {};

  const TITLE = title ? `${title} | stayedcss` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? asPath : "";

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      type: "website",
      url: PAGE_URL,
      // images: {
      //   url: OG_IMAGE,
      // },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      // images: {
      //   url: OG_IMAGE,
      // },
    },
  };

  return metadata;
};
