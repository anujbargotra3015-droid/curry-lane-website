"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden font-sans min-h-[90vh] flex items-center">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* --- DECORATIONS --- */}
     

      <div className="container mx-auto px-6 lg:px-12 h-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <div className="flex flex-col items-start z-20 max-w-xl">
            
            {/* Red Icon above Title */}
            <div className="mb-6">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left Chili shape */}
                <path d="M15 10 Q5 20 15 30 Q25 20 20 10" fill="#EF2F2A" />
                {/* Right Chili shape */}
                <path d="M45 10 Q55 20 45 30 Q35 20 40 10" fill="#EF2F2A" />
                {/* Center Lemon/Dot */}
                <circle cx="30" cy="20" r="6" fill="#EF2F2A" />
                <path d="M10 5 Q5 0 15 0 M50 5 Q55 0 45 0" stroke="#EF2F2A" strokeWidth="2"/>
              </svg>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif-display text-5xl md:text-7xl font-bold text-[#EF2F2A] uppercase leading-[0.9] tracking-tight mb-4">
              WELCOME TO
              <br />
              CURRY LANE
            </h1>

            {/* Subheading */}
            <h2 className="text-black font-bold uppercase tracking-widest text-sm md:text-base mb-6">
              A NEW TASTE ON THE MOVE
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Craving bold Indian flavors on the go? Curry Lane brings you the warmth of 
              home-cooked curries with the speed of a drive-thru. From creamy butter 
              chicken to fresh-off-the-tandoor naans – it’s all here, hot and ready.
            </p>

            {/* Button */}
            <Link href="/menu">
              <button className="bg-[#EF2F2A] text-white px-8 py-4 rounded-sm font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg">
                OUR MENU <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* --- RIGHT COLUMN: IMAGE --- */}
          {/* UPDATES: 
              1. Added 'hidden md:flex' to hide on mobile.
              2. Increased inner width/height to 180% (md) and 210% (lg) to make it 0.5x bigger.
          */}
          <div className="hidden md:flex relative w-full h-[400px] md:h-[600px] items-center justify-center lg:justify-end">
            <div className="relative w-[180%] h-[180%] lg:w-[210%] lg:h-[210%] -mr-32 md:-mr-56 lg:-mr-80">
              <Image
                src="/images/hero-dish.png" 
                alt="Delicious Butter Chicken and Rice"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}