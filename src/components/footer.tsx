"use client";

import Link from "next/link";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white font-sans border-t border-white/5">
      {/* Import the font specifically for this component to ensure it matches */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* COLUMN 1: BRAND */}
          <div className="space-y-6">
            {/* Logo as Text to match image exactly */}
            <h2 className="font-serif text-3xl font-bold text-white tracking-wide">
              Curry Lane<span className="text-[#DC2626]">.</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Authentic Indian flavors reimagined for the modern lifestyle.
              Fast, fresh, and full of soul.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {/* --- PASTE YOUR INSTAGRAM LINK HERE ---
                  Replace "#" with your actual profile URL like "https://www.instagram.com/your_handle"
              */}
              <a
                href="https://www.instagram.com/currylanemohali" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center text-white hover:bg-[#DC2626] transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              {/* Removed Facebook & Twitter icons as requested */}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Home",
                "Our Menu",
                "Our Story",
                "Contact Us",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-[#DC2626] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: FIND US */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold tracking-wide">Find Us</h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DC2626] mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Ground Floor, SCO 41 42 , Aero Arcade , G Block
                  <br />
                  Mohali Punjab Pin 140603
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#DC2626] shrink-0" />
                <span>+91 9501501222</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#DC2626] shrink-0" />
                <span>Currylanemohali@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold tracking-wide">Stay Updated</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe for latest offers and new menu items.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md bg-[#262626] border border-transparent px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />

              <button className="w-full rounded-md bg-[#DC2626] py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Curry Lane. All rights reserved.
        </div>
      </div>
    </footer>
  );
}