// app/layout.tsx
// NO 'use client' here!

import "./globals.css";
import type { Metadata } from "next";

import { Playfair_Display, DM_Sans } from "next/font/google";
import { siteMetadata } from "./metadata";
import ClientLayout from "./ClientLayout";

// Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

// Export metadata from server component
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {/* This is the server-rendered root → we delegate the client parts to a wrapper */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}