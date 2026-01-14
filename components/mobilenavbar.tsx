"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Story", href: "/story" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* 1. STICKY NAV BAR */}
      <nav className="md:hidden sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 font-sans shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Logo Section */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Curry Lane Logo" 
              width={130} 
              height={40} 
              className="object-contain"
              priority
            />
          </Link>

          {/* Hamburger Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#EF2F2A] hover:bg-red-50 p-1 rounded-md transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 2. DROPDOWN MENU (Animated) */}
        <div 
          className={`
            absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"}
          `}
        >
          <div className="flex flex-col py-6 px-6 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`
                    text-lg font-medium px-4 py-3 rounded-r-lg transition-all duration-200
                    ${isActive 
                      ? "text-[#EF2F2A] font-bold border-l-4 border-[#EF2F2A] bg-red-50/50" 
                      : "text-gray-600 border-l-4 border-transparent hover:text-[#EF2F2A] hover:bg-gray-50"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 3. BACKDROP OVERLAY (Dims the rest of the site when menu is open) */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200"
          style={{ top: "70px" }} // Offset by approx navbar height
        />
      )}
    </>
  );
}