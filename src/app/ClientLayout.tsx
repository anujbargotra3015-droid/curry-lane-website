// app/ClientLayout.tsx
'use client';

import { usePathname } from 'next/navigation';

import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/mobilenavbar";
import Footer from "@/components/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide nav + footer on admin routes (and sub-routes)
  const isAdminRoute = pathname?.startsWith('/admin') ?? false;

  return (
    <>
      {/* Conditional navbars */}
      {!isAdminRoute && (
        <>
          <MobileNavbar />
          <Navbar />
        </>
      )}

      <main>{children}</main>

      {/* Conditional footer */}
      {!isAdminRoute && <Footer />}
    </>
  );
}