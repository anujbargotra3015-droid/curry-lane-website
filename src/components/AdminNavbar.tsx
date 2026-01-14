"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Courier_Prime } from "next/font/google";
import { ArrowLeftIcon, CpuChipIcon } from "@heroicons/react/24/outline";

// --- FONTS ---
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export default function AdminNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  // Helper to determine active styles
  const isActive = (path: string) => {
    if (path === "/admin" && pathname === "/admin") return true;
    if (path !== "/admin" && pathname.includes(path)) return true;
    return false;
  };

  const navItems = [
    { name: "DASHBOARD", href: "/admin" },
    { name: "MENU EDITOR", href: "/admin/menu-editor" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full bg-[#F4E4BC] border-b-4 border-black py-3 ${courier.className}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        
        {/* Left Side: Back Button & System Label */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="group flex items-center justify-center w-10 h-10 border-2 border-black bg-white text-black hover:bg-black hover:text-[#F4E4BC] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
            title="Go Back"
          >
            <ArrowLeftIcon className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Divider */}
          <div className="h-8 w-[2px] bg-black hidden md:block" />
          
          {/* Brand Label */}
          <div className="hidden md:flex items-center gap-2 opacity-60">
             <CpuChipIcon className="w-5 h-5" />
             <span className="font-bold text-sm tracking-widest uppercase">
               Sys_Admin
             </span>
          </div>
        </div>

        {/* Center/Right: Navigation Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-5 py-2 text-sm font-bold border-2 border-black transition-all duration-200 whitespace-nowrap uppercase tracking-wider
                  ${active
                    ? "bg-black text-[#F4E4BC] shadow-[2px_2px_0px_0px_rgba(0,0,0,0)] translate-y-[2px]"
                    : "bg-[#FFFBF2] text-black hover:bg-gray-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}