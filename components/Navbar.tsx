"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to detect current page

export default function Navbar() {
  const pathname = usePathname();

  // Navigation Items Array for cleaner code
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Story", href: "/story" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // Changes: sticky top-0, z-50, backdrop-blur (glass effect), reduced py-4
    <nav className="hidden md:flex sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100 font-sans shadow-sm transition-all">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Curry Lane Logo" 
            width={150} // Slightly smaller to fit reduced height
            height={45} 
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 text-sm font-semibold tracking-wide uppercase">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all duration-300 relative group ${
                  isActive 
                    ? "text-[#EF2F2A]" 
                    : "text-gray-600 hover:text-[#EF2F2A]"
                }`}
              >
                {link.name}
                
                {/* Animated Underline */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#EF2F2A] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}