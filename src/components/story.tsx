"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
 

export default function Story() {
  return (
    <section className="relative w-full bg-[#121212] overflow-hidden font-sans py-24 lg:py-32">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* --- DECORATIONS --- */}

      {/* Top Gold Leaf Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 opacity-80 pointer-events-none z-0">
        <svg width="150" height="250" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5 C50 5 30 30 30 60 C30 85 50 95 50 95 C50 95 70 85 70 60 C70 30 50 5 50 5Z" stroke="#FCC93B" strokeWidth="1.5" />
          <path d="M50 5 L50 95" stroke="#FCC93B" strokeWidth="1" />
          <path d="M50 25 L35 35 M50 45 L32 55 M50 65 L35 75" stroke="#FCC93B" strokeWidth="1" />
          <path d="M50 25 L65 35 M50 45 L68 55 M50 65 L65 75" stroke="#FCC93B" strokeWidth="1" />
        </svg>
      </div>

      {/* Bottom Red Pattern Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0 opacity-50">
         <svg className="w-[200%] md:w-full h-auto" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 150 V 100 C 80 80, 80 50, 100 30 C 120 50, 120 80, 100 100 V 150" stroke="#EF2F2A" strokeWidth="1" fill="none"/>
            <path d="M90 90 L 110 110 M 110 90 L 90 110" stroke="#EF2F2A" strokeWidth="1"/>
            <path d="M300 150 V 80 C 270 60, 270 30, 300 10 C 330 30, 330 60, 300 80 V 150" stroke="#EF2F2A" strokeWidth="1" fill="none"/>
            <path d="M500 150 V 110 C 480 90, 480 60, 500 40 C 520 60, 520 90, 500 110 V 150" stroke="#EF2F2A" strokeWidth="1" fill="none"/>
            <path d="M700 150 V 70 C 660 40, 660 10, 700 0 C 740 10, 740 40, 700 70 V 150" stroke="#EF2F2A" strokeWidth="1" fill="none"/>
             <path d="M900 150 V 100 C 880 80, 880 50, 900 30 C 920 50, 920 80, 900 100 V 150" stroke="#EF2F2A" strokeWidth="1" fill="none"/>
            <path d="M1100 150 V 80 C 1070 60, 1070 30, 1100 10 C 1130 30, 1130 60, 1100 80 V 150" stroke="#EF2F2A" strokeWidth="1" fill="none"/>
             <path d="M1300 150 V 110 C 1280 90, 1280 60, 1300 40 C 1320 60, 1320 90, 1300 110 V 150" stroke="#EF2F2A" strokeWidth="1" fill="none"/>
         </svg>
      </div>


      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          {/* --- LEFT COLUMN: TEXT --- */}
          <div className="flex flex-col justify-center items-start max-w-lg lg:pr-1 order-2 lg:order-1 py-10 lg:py-0">
            <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#FCC93B] leading-none mb-8">
              WHERE EVERY CURRY TELLS A STORY
            </h2>

            <p className="text-white text-lg leading-relaxed mb-12 opacity-80 max-w-md">
              We're not just any fast-food joint. At Curry Lane, every dish is rooted in tradition, simmered with spices, and served with love. Grab your favorite curry in minutes – and feel like you're eating at home.
            </p>

            <Link href="/menu">
              <button className="bg-white text-[#EF2F2A] px-8 py-4 rounded font-bold flex items-center gap-3 hover:bg-gray-100 transition-colors tracking-widest text-sm">
                OUR MENU <ChevronRight className="w-5 h-5 text-[#EF2F2A]" />
              </button>
            </Link>
          </div>

          {/* --- RIGHT COLUMN: SINGLE IMAGE --- */}
          {/* CHANGES:
              1. 'hidden' added by default (hides on phone).
              2. 'md:flex' added (shows on tablet/PC).
              3. 'md:min-h-[600px]' makes it tall on tablet.
              4. 'lg:min-h-[850px]' makes it very tall on PC as requested.
          */}
          <div className="hidden md:flex w-full h-full items-center justify-center order-1 lg:order-2 relative md:min-h-[00px] lg:min-h-[850px]">
            <div className="relative w-full h-full">
               <Image
                 src="/images/your-transparent-curry-image.png"
                 alt="Delicious curry bowl surrounded by spices"
                 fill
                 className="object-contain drop-shadow-2xl"
                 priority
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}