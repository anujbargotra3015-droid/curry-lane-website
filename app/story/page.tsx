"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Heart } from "lucide-react";

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

  return (
    <main className="bg-[#121212] min-h-screen font-sans overflow-x-hidden relative selection:bg-[#EF2F2A] selection:text-white">
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
          Since 2026
        </span>
        <h1 className="font-serif-display text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-8 tracking-tight drop-shadow-2xl">
          More Than <br/> Just Curry.
        </h1>
        <p className="font-sans-body text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          From a grandmother's kitchen in New Delhi to your dashboard. This is the story of how we put soul into fast food.
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

        {/* --- CHAPTER 1: THE ORIGIN --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center">
          
          {/* Timeline Dot */}
          <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 bg-[#EF2F2A] rounded-full md:-translate-x-1/2 border-4 border-[#121212] z-20 shadow-[0_0_20px_#EF2F2A]"></div>

          {/* Image Side (Left) */}
          <div className="pl-12 md:pl-0 md:text-right order-2 md:order-1 relative group">
             <div className="relative inline-block transform rotate-2 group-hover:rotate-1 transition-transform duration-500">
                {/* The Polaroid */}
                <div className="polaroid w-64 md:w-80 h-auto">
                   <div className="bg-gray-200 h-64 w-full mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                      {/* PLACEHOLDER IMAGE */}
                      <Image 
                        src="/images/image_247d29.jpg" // Using one of your uploaded images
                        alt="Grandma Cooking" 
                        fill 
                        className="object-cover"
                      />
                   </div>
                   <p className="font-marker text-center text-gray-600 text-sm">Nani's Kitchen, 1998</p>
                </div>
                {/* Tape */}
                <div className="tape w-24 h-8 absolute -top-3 left-1/2 -translate-x-1/2"></div>
             </div>
          </div>

          {/* Text Side (Right) */}
          <div className="pl-12 md:pl-0 order-1 md:order-2">
            <span className="text-[#FCC93B] font-bold tracking-widest uppercase text-sm mb-2 block">Chapter 01</span>
            <h2 className="text-4xl md:text-5xl text-white font-serif-display mb-6">The Secret Recipe</h2>
            <p className="text-gray-400 font-sans-body text-lg leading-relaxed mb-6">
              It started with a simple rule: <span className="text-white italic">"No shortcuts."</span> Even when Nani cooked for 20 people, she roasted her own spices. 
              <br/><br/>
              The smell of roasted cumin and fenugreek didn't just fill the house; it filled our hearts. We realized that 'fast' food had forgotten this feeling.
            </p>
            <div className="inline-flex items-center gap-2 text-[#EF2F2A] font-bold uppercase tracking-widest text-xs border border-[#EF2F2A] px-4 py-2 rounded-full">
               <MapPin size={14}/> New Delhi, India
            </div>
          </div>
        </div>


        {/* --- CHAPTER 2: THE IDEA --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center">
          
           {/* Timeline Dot */}
           <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 bg-[#FCC93B] rounded-full md:-translate-x-1/2 border-4 border-[#121212] z-20 shadow-[0_0_20px_#FCC93B]"></div>

          {/* Text Side (Left) */}
          <div className="pl-12 md:pl-0 md:text-right order-1">
            <span className="text-[#EF2F2A] font-bold tracking-widest uppercase text-sm mb-2 block">Chapter 02</span>
            <h2 className="text-4xl md:text-5xl text-white font-serif-display mb-6">Curry in a Hurry?</h2>
            <p className="text-gray-400 font-sans-body text-lg leading-relaxed mb-6">
              Why does Indian food have to be a "sit-down dinner"? We wanted to take the complex, rich flavors of a 12-hour slow cook and make it accessible for the 10-minute lunch break.
              <br/><br/>
              We engineered the perfect <span className="text-white font-bold">Spill-Proof Bowl</span> so you could eat Butter Chicken in a parked car without regret.
            </p>
            <div className="inline-flex items-center gap-2 text-[#FCC93B] font-bold uppercase tracking-widest text-xs border border-[#FCC93B] px-4 py-2 rounded-full">
               <Clock size={14}/> 2015
            </div>
          </div>

           {/* Image Side (Right) */}
           <div className="pl-12 md:pl-0 order-2 relative group">
             <div className="relative inline-block transform -rotate-2 group-hover:rotate-1 transition-transform duration-500">
                {/* The Polaroid */}
                <div className="polaroid w-64 md:w-80 h-auto">
                   <div className="bg-gray-200 h-64 w-full mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                        {/* PLACEHOLDER IMAGE */}
                        <Image 
                            src="/images/image_2413b3.jpg" // Using one of your uploaded images
                            alt="First Sketch" 
                            fill 
                            className="object-cover"
                        />
                   </div>
                   <p className="font-marker text-center text-gray-600 text-sm">The First Prototype</p>
                </div>
                {/* Tape */}
                <div className="tape w-24 h-8 absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FCC93B]/30"></div>
                
                {/* Handwritten Note Sticky */}
                <div className="absolute -bottom-10 -right-10 bg-yellow-200 text-black p-4 w-40 shadow-xl transform rotate-3 font-marker text-sm">
                    "Needs more butter!" - Dad
                </div>
             </div>
          </div>
        </div>


        {/* --- CHAPTER 3: TODAY --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20 items-center">
          
           {/* Timeline Dot */}
           <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 bg-white rounded-full md:-translate-x-1/2 border-4 border-[#121212] z-20"></div>

          {/* Image Side (Left) */}
          <div className="pl-12 md:pl-0 md:text-right order-2 md:order-1 relative group">
             <div className="relative inline-block transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                {/* The Polaroid */}
                <div className="polaroid w-64 md:w-80 h-auto">
                   <div className="bg-gray-200 h-64 w-full mb-4 overflow-hidden relative">
                        {/* PLACEHOLDER IMAGE */}
                        <Image 
                            src="/images/image_247d69.jpg" // Using one of your uploaded images
                            alt="Happy Customer" 
                            fill 
                            className="object-cover"
                        />
                   </div>
                   <p className="font-marker text-center text-gray-600 text-sm">Serving Smiles Daily</p>
                </div>
                {/* Tape */}
                <div className="tape w-24 h-8 absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EF2F2A]/30"></div>
             </div>
          </div>

          {/* Text Side (Right) */}
          <div className="pl-12 md:pl-0 order-1 md:order-2">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-2 block">Chapter 03</span>
            <h2 className="text-4xl md:text-5xl text-white font-serif-display mb-6">Curry Lane Today</h2>
            <p className="text-gray-400 font-sans-body text-lg leading-relaxed mb-6">
              Today, we serve thousands of bowls a week, but the rule remains: <span className="text-white italic">No shortcuts.</span>
              <br/><br/>
              Our gravies still bubble for 6 hours. Our naans are still slapped into a clay oven at 500°F. We just do it faster, so you can get back to your life with a full soul.
            </p>
             <div className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border border-white px-4 py-2 rounded-full">
               <Heart size={14} className="text-[#EF2F2A] fill-current"/> Made with Love
            </div>
          </div>
        </div>

      </div>


     


      
    

    </main>
  );
}