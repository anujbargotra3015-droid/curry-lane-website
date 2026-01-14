"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full bg-[#F9F3E5] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden font-sans">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* --- BACKGROUND DECORATION --- */}
      {/* Abstract "Spill" shape in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FCC93B] opacity-10 rounded-full blur-3xl -z-0 pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-lg">
        
        {/* Animated Icon (Empty Bowl / Sad Face concept) */}
        <div className="mb-8 flex justify-center">
           <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#EF2F2A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            {/* Bowl Shape */}
            <path d="M20 50 Q50 90 80 50" />
            <path d="M20 50 L80 50" strokeDasharray="4 4" opacity="0.5" />
            {/* Steam / Empty lines */}
            <path d="M50 35 L50 20" opacity="0.3" />
            <path d="M35 40 L30 25" opacity="0.3" />
            <path d="M65 40 L70 25" opacity="0.3" />
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="font-serif-display text-8xl md:text-9xl text-[#EF2F2A] font-bold leading-none mb-2">
          404
        </h1>

        <h2 className="font-serif-display text-2xl md:text-3xl text-gray-800 font-bold mb-6">
          Lost on Curry Lane?
        </h2>

        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Oops! The page you are looking for seems to have been eaten... or it never existed. 
          Let's get you back to the delicious stuff.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="bg-[#EF2F2A] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/10 w-full sm:w-auto">
              <MoveLeft className="w-4 h-4" /> BACK HOME
            </button>
          </Link>
          
          <Link href="/menu">
            <button className="bg-white text-[#EF2F2A] border-2 border-[#EF2F2A] px-8 py-4 rounded font-bold hover:bg-red-50 transition-colors w-full sm:w-auto">
              VIEW MENU
            </button>
          </Link>
        </div>

      </div>

      {/* --- BOTTOM DECORATION --- */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#EF2F2A] via-[#FCC93B] to-[#EF2F2A]" />
    </div>
  );
}