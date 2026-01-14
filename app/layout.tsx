import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/mobilenavbar"; // Mobile Navbar
import Footer from "@/components/footer"; // Check if this file is Footer.tsx or footer.tsx
import { Playfair_Display, DM_Sans } from "next/font/google";
import { siteMetadata } from "./metadata";

/* Fonts */
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

/* ✅ Export metadata from external file */
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <MobileNavbar />
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
