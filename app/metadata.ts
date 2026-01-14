import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://currylanekitchen.com"),

  title: {
    default: "Curry Lane — Authentic Indian Flavors On The Go",
    template: "%s | Curry Lane",
  },

  description:
    "Curry Lane brings authentic Indian curries, naan, and comfort food made fresh for modern lifestyles. Fast, flavorful, and full of soul.",

  keywords: [
    "Curry Lane",
    "Indian food",
    "Indian curry",
    "Indian restaurant",
    "fast Indian food",
    "naan",
    "butter chicken",
    "Indian takeaway",
  ],

  authors: [{ name: "Curry Lane" }],
  creator: "Curry Lane",
  publisher: "Curry Lane",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://currylanekitchen.com",
    siteName: "Curry Lane",

    title: "Curry Lane — Authentic Indian Flavors On The Go",
    description:
      "Fresh, bold Indian flavors made for modern life. Discover curries, naan, and comfort food that tastes like home — only faster.",

    images: [
      {
        url: "/og-image.jpg", // 🔴 IMPORTANT: create this image
        width: 1200,
        height: 630,
        alt: "Curry Lane — Authentic Indian Cuisine",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Curry Lane — Authentic Indian Flavors On The Go",
    description:
      "Fast, fresh Indian food inspired by home cooking. Bold curries, soft naan, and unforgettable flavors.",
    images: ["/og-image.jpg"],
    creator: "@currylane", // optional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Food & Beverage",
};
