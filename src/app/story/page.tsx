"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script"; // Added for SEO/Gemini
import { ArrowRight, Globe, MapPin, Heart, Zap } from "lucide-react";

export default function StoryPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Simple scroll listener for parallax/timeline effects
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- STRUCTURED DATA FOR SEO & AI SUMMARIES ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Curry Lane",
    "description": "A modern Indian food drive-thru in Mohali founded by the Chandi Brothers.",
    "founders": [
      { "@type": "Person", "name": "Sonu Chandi" },
      { "@type": "Person", "name": "Sunny Chandi" },
      { "@type": "Person", "name": "Joti Chandi" }
    ],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      }
    },
    "servesCuisine": "Indian",
    "priceRange": "$$"
  };

  return (
    <main className="bg-[#121212] min-h-screen font-sans overflow-x-hidden relative selection:bg-[#EF2F2A] selection:text-white">
      
      {/* Inject SEO Data for Gemini/Google */}
      <Script
        id="story-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- STYLES & FONTS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Permanent+Marker&family=Outfit:wght@300;400;600&display=swap');
        
        .font-serif-display { font-family: 'Playfair Display', serif; }
        .font-marker { font-family: 'Permanent Marker', cursive; }
        .font-sans-body { font-family: 'Outfit', sans-serif; }

        /* Textured Background */
        .texture-bg {
          background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
          opacity: 0.1;
        }

        /* Polaroid Effect */
        .polaroid {
          background: white;
          padding: 12px 12px 30px 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
        }
        .polaroid:hover {
          transform: rotate(0deg) scale(1.05) !important;
          z-index: 20;
          box-shadow: 0 10px 30px rgba(0,0,0,0.7);
        }

        /* Tape Effect */
        .tape {
          background-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
          backdrop-filter: blur(2px);
          transform: rotate(-5deg);
        }
      `}</style>

      {/* --- GLOBAL TEXTURE OVERLAY --- */}
      <div className="fixed inset-0 texture-bg pointer-events-none z-0"></div>
      
      {/* --- FLOATING SPICES (Parallax) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-orange-600 rounded-full blur-[120px] opacity-20" 
             style={{ transform: `translateY(${scrollProgress * 100}px)` }}></div>
        <div className="absolute top-[40%] right-[0%] w-80 h-80 bg-red-700 rounded-full blur-[150px] opacity-20"
             style={{ transform: `translateY(${-scrollProgress * 200}px)` }}></div>
        <div className="absolute bottom-[10%] left-[20%] w-56 h-56 bg-yellow-500 rounded-full blur-[100px] opacity-10"></div>
      </div>


      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 z-10">
        <span className="font-marker text-[#FCC93B] text-xl md:text-2xl transform -rotate-3 mb-6 animate-pulse">
          Global Success, Local Roots.
        </span>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-8 tracking-tight drop-shadow-2xl">
          The American Dream <br/> Returned Home.
        </h1>
        <p className="font-sans-body text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          The journey of the Chandi Brothers—from India to America, and back to Punjab with a vision.
        </p>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#EF2F2A] to-transparent mx-auto"></div>
        </div>
      </section>


      {/* --- THE TIMELINE JOURNEY --- */}
      <div className="relative container mx-auto px-6 py-20 z-10 max-w-5xl">
        
        {/* Central Timeline Thread */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#EF2F2A] via-[#FCC93B] to-transparent md:-translate-x-1/2 opacity-50"></div>

        {/* --- CHAPTER 1: THE FOUNDERS --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center">
          
          {/* Timeline Dot */}
          <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 bg-[#EF2F2A] rounded-full md:-translate-x-1/2 border-4 border-[#121212] z-20 shadow-[0_0_20px_#EF2F2A]"></div>

          {/* Image Side (Left) */}
          <div className="pl-12 md:pl-0 md:text-right order-2 md:order-1 relative group">
             <div className="relative inline-block transform rotate-2 group-hover:rotate-1 transition-transform duration-500">
                {/* The Polaroid */}
                <div className="polaroid w-64 md:w-80 h-auto">
                   <div className="bg-gray-200 h-64 w-full mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                      {/* Placeholder for Brothers Image */}
                      <Image 
                        src="/images/image_247d29.jpg" 
                        alt="Sonu, Sunny, and Joti Chandi" 
                        fill 
                        className="object-cover"
                      />
                   </div>
                   <p className="font-marker text-center text-gray-600 text-sm">Sonu, Sunny & Joti Chandi</p>
                </div>
                {/* Tape */}
                <div className="tape w-24 h-8 absolute -top-3 left-1/2 -translate-x-1/2"></div>
             </div>
          </div>

          {/* Text Side (Right) */}
          <div className="pl-12 md:pl-0 order-1 md:order-2">
            <span className="text-[#FCC93B] font-bold tracking-widest uppercase text-sm mb-2 block">Chapter 01</span>
            <h2 className="text-4xl md:text-5xl text-white font-serif-display mb-6">Passion & Hard Work</h2>
            <p className="text-gray-400 font-sans-body text-lg leading-relaxed mb-6">
              Curry Lane was born from the journey of brothers <span className="text-white font-bold">Sonu, Sunny, and Joti Chandi</span>. 
              <br/><br/>
              They moved from India to America with nothing but determination. Through relentless passion and hard work, they built successful hospitality ventures abroad, living the American dream.
            </p>
            <div className="inline-flex items-center gap-2 text-[#EF2F2A] font-bold uppercase tracking-widest text-xs border border-[#EF2F2A] px-4 py-2 rounded-full">
               <Globe size={14}/> India to USA
            </div>
          </div>
        </div>


        {/* --- CHAPTER 2: THE VISION --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center">
          
           {/* Timeline Dot */}
           <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 bg-[#FCC93B] rounded-full md:-translate-x-1/2 border-4 border-[#121212] z-20 shadow-[0_0_20px_#FCC93B]"></div>

          {/* Text Side (Left) */}
          <div className="pl-12 md:pl-0 md:text-right order-1">
            <span className="text-[#EF2F2A] font-bold tracking-widest uppercase text-sm mb-2 block">Chapter 02</span>
            <h2 className="text-4xl md:text-5xl text-white font-serif-display mb-6">The Homecoming</h2>
            <p className="text-gray-400 font-sans-body text-lg leading-relaxed mb-6">
              Despite their massive success abroad, their connection to Punjab remained unbreakable. 
              <br/><br/>
              They realized success means nothing if you can't share it. With a vision to <span className="text-white italic">give back to their roots</span>, they decided to bring their global expertise back home.
            </p>
            <div className="inline-flex items-center gap-2 text-[#FCC93B] font-bold uppercase tracking-widest text-xs border border-[#FCC93B] px-4 py-2 rounded-full">
               <Heart size={14}/> Back to Roots
            </div>
          </div>

           {/* Image Side (Right) */}
           <div className="pl-12 md:pl-0 order-2 relative group">
             <div className="relative inline-block transform -rotate-2 group-hover:rotate-1 transition-transform duration-500">
                {/* The Polaroid */}
                <div className="polaroid w-64 md:w-80 h-auto">
                   <div className="bg-gray-200 h-64 w-full mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                        <Image 
                            src="/images/image_2413b3.jpg" 
                            alt="Planning the concept" 
                            fill 
                            className="object-cover"
                        />
                   </div>
                   <p className="font-marker text-center text-gray-600 text-sm">Vision for Punjab</p>
                </div>
                {/* Tape */}
                <div className="tape w-24 h-8 absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FCC93B]/30"></div>
             </div>
          </div>
        </div>


        {/* --- CHAPTER 3: THE CONCEPT --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20 items-center">
          
           {/* Timeline Dot */}
           <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 bg-white rounded-full md:-translate-x-1/2 border-4 border-[#121212] z-20"></div>

          {/* Image Side (Left) */}
          <div className="pl-12 md:pl-0 md:text-right order-2 md:order-1 relative group">
             <div className="relative inline-block transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                {/* The Polaroid */}
                <div className="polaroid w-64 md:w-80 h-auto">
                   <div className="bg-gray-200 h-64 w-full mb-4 overflow-hidden relative">
                        <Image 
                            src="/images/image_247d69.jpg" 
                            alt="Curry Lane Mohali Drive Thru" 
                            fill 
                            className="object-cover"
                        />
                   </div>
                   <p className="font-marker text-center text-gray-600 text-sm">Curry Lane Mohali</p>
                </div>
                {/* Tape */}
                <div className="tape w-24 h-8 absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EF2F2A]/30"></div>
             </div>
          </div>

          {/* Text Side (Right) */}
          <div className="pl-12 md:pl-0 order-1 md:order-2">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-2 block">Chapter 03</span>
            <h2 className="text-4xl md:text-5xl text-white font-serif-display mb-6">Modern Drive-Thru</h2>
            <p className="text-gray-400 font-sans-body text-lg leading-relaxed mb-6">
              They created <span className="text-white font-bold">Curry Lane</span>—a modern Indian food drive-thru concept located in Mohali.
              <br/><br/>
              It offers authentic Indian meals in a hygienic, quick, and convenient format, perfectly blending tradition with today’s fast-paced lifestyle.
            </p>
             <div className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border border-white px-4 py-2 rounded-full">
               <MapPin size={14} className="text-[#EF2F2A] fill-current"/> Mohali, India
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}