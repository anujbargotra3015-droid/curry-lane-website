"use client";

import React, { useEffect, useState } from "react";
import { MapPin, ArrowRight, Star, Clock, Zap } from "lucide-react";
import Script from "next/script";

export default function StoryPage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- STRUCTURED DATA FOR SEO & AI SUMMARIES ---
  // This tells Google & Gemini exactly what to summarize about your brand.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Curry Lane",
    "description": "A modern Indian food drive-thru concept in Mohali offering hygienic, quick, and authentic meals.",
    "founders": [
      { "@type": "Person", "name": "Sonu Chandi" },
      { "@type": "Person", "name": "Sunny Chandi" },
      { "@type": "Person", "name": "Joti Chandi" }
    ],
    "slogan": "No shortcuts.",
    "servesCuisine": "Indian",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#EF2F2A] selection:text-white overflow-hidden relative">
      
      {/* Inject SEO Data */}
      <Script
        id="story-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,600&family=Outfit:wght@300;400;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Outfit', sans-serif; }
        
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }
      `}</style>

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,47,42,0.1),transparent_70%)]"></div>
        {/* Grain Texture */}
        <div className="absolute inset-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")', opacity: 0.3 }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        
        {/* --- SECTION 1: THE NAMES (THE HOOK) --- */}
        <div className="mb-24 text-center">
          <p className="text-[#FCC93B] uppercase tracking-[0.3em] text-xs font-bold mb-6 animate-pulse">The Founders' Journey</p>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
            <span className="block opacity-50 text-3xl md:text-5xl italic mb-2">Brothers. Visionaries.</span>
            Sonu, Sunny <br/> & Joti Chandi.
          </h1>

          <div className="w-[1px] h-24 bg-gradient-to-b from-[#EF2F2A] to-transparent mx-auto mt-12"></div>
        </div>

        {/* --- SECTION 2: THE ORIGIN STORY --- */}
        <div className="grid md:grid-cols-12 gap-12 mb-32 items-start">
          <div className="md:col-span-4 sticky top-32">
            <h2 className="text-8xl font-serif text-outline opacity-30 select-none absolute -left-10 -top-20 -z-10">01</h2>
            <h3 className="text-2xl font-bold mb-4 text-[#EF2F2A]">The American Dream,<br/>Rooted in Punjab.</h3>
            <div className="h-1 w-20 bg-[#EF2F2A]"></div>
          </div>
          
          <div className="md:col-span-8 space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            <p>
              The Curry Lane story isn't just about food; it's about a journey that spanned continents. 
              Born from the ambition of three brothers—<strong className="text-white">Sonu, Sunny, and Joti Chandi</strong>—who left India for America with nothing but determination.
            </p>
            <p>
              Through years of relentless hard work, they built successful hospitality ventures abroad. 
              They conquered the American dream, but their hearts never really left Punjab.
            </p>
          </div>
        </div>

        {/* --- SECTION 3: THE VISION (NO IMAGES, JUST TYPOGRAPHY) --- */}
        <div className="relative border-y border-white/10 py-24 mb-32">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
             <span className="text-[20vw] font-bold uppercase whitespace-nowrap" style={{ transform: `translateX(${-offset * 0.2}px)` }}>
               Authentic • Fast • Fresh •
             </span>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 border border-[#FCC93B] text-[#FCC93B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Star size={12} fill="currentColor"/> The Vision
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              "To give back to our roots."
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Success abroad meant nothing if they couldn't bring something valuable back home. 
              They envisioned <span className="text-white font-semibold">Curry Lane</span> not just as a restaurant, but as a bridge.
            </p>
          </div>
        </div>

        {/* --- SECTION 4: THE CONCEPT (MOHALI) --- */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-3xl font-serif mb-6 flex items-center gap-3">
              <Zap className="text-[#EF2F2A]" />
              Modern Drive-Thru
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We realized that authentic Indian food was often slow and inconvenient. We changed that. 
              Curry Lane is a <strong className="text-white">modern Indian food drive-thru concept</strong> that blends deep-rooted tradition with today’s fast-paced lifestyle.
            </p>
          </div>
          <div>
             <h3 className="text-3xl font-serif mb-6 flex items-center gap-3">
              <MapPin className="text-[#EF2F2A]" />
              Located in Mohali
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Standing tall in <strong className="text-white">Mohali</strong>, we offer authentic Indian meals in a format that prioritizes hygiene, speed, and convenience without compromising the soul of the recipe.
            </p>
          </div>
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="text-center bg-[#1a1a1a] p-12 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#EF2F2A] group-hover:w-full transition-all duration-500 ease-out opacity-20"></div>
          
          <h2 className="text-3xl font-serif mb-4 relative z-10">Taste the Journey</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto relative z-10">
            Experience the Chandi brothers' vision. Authentic Punjab flavors, served at the speed of life.
          </p>
          
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#FCC93B] transition-colors relative z-10 flex items-center gap-2 mx-auto">
            View Menu <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </main>
  );
}