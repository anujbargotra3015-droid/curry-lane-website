'use client';

import Link from "next/link";
import { Playfair_Display, Courier_Prime } from "next/font/google";
import { 
  PencilSquareIcon, 
  ArrowRightIcon, 
  CpuChipIcon 
} from "@heroicons/react/24/outline";

// --- FONTS ---
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["900"] });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export default function AdminDashboard() {
  return (
    <div className={`min-h-screen bg-[#F4E4BC] text-[#1a1a1a] ${courier.className} selection:bg-black selection:text-[#F4E4BC] flex flex-col`}>
      
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-0 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      {/* --- RETRO NAVBAR --- */}
      <nav className="sticky top-0 z-50 border-b-4 border-black bg-[#F4E4BC] py-4 relative">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-[#F4E4BC] flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
               <CpuChipIcon className="w-6 h-6" />
            </div>
            <div className="leading-none">
              <span className={`${playfair.className} text-xl block tracking-tighter`}>ADMIN_PANEL</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">System v1.0</span>
            </div>
          </div>

          {/* User Badge */}
          <div className="hidden md:flex items-center gap-3 border-2 border-black px-4 py-1.5 bg-[#FFFBF2]">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse border border-black"></div>
             <span className="text-xs font-bold uppercase tracking-wider">Logged In</span>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
           <h1 className={`${playfair.className} text-6xl md:text-8xl mb-2 text-black tracking-tighter`}>
             DASHBOARD
           </h1>
           <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-60">
             Select a module to begin
           </p>
        </div>

        {/* --- THE MAIN CARD (MENU EDITOR) --- */}
        <Link 
          href="/admin/menu-editor"
          className="group relative w-full max-w-2xl"
        >
          {/* Card Body */}
          <div className="relative z-20 bg-[#FFFBF2] border-4 border-black p-8 md:p-12 transition-transform duration-200 group-hover:-translate-y-2 group-active:translate-y-0 flex flex-col md:flex-row items-center gap-8">
            
            {/* Icon Box */}
            <div className="w-24 h-24 shrink-0 bg-black text-[#F4E4BC] flex items-center justify-center border-4 border-black group-hover:bg-[#EF4444] group-hover:text-black transition-colors duration-300">
               <PencilSquareIcon className="w-12 h-12" />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
               <h2 className={`${playfair.className} text-4xl font-black mb-2 uppercase group-hover:underline decoration-4 decoration-[#EF4444] underline-offset-4`}>
                 Menu Editor
               </h2>
               <p className="text-sm font-bold opacity-70 leading-relaxed mb-6">
                 ACCESS THE DATABASE TO ADD DISHES, EDIT PRICES, AND MANAGE CATEGORIES IN REAL-TIME.
               </p>
               
               {/* Button Fake */}
               <div className="inline-flex items-center gap-2 border-2 border-black px-6 py-2 uppercase text-xs font-bold bg-[#F4E4BC] group-hover:bg-black group-hover:text-[#F4E4BC] transition-colors">
                  <span>Enter System</span>
                  <ArrowRightIcon className="w-4 h-4" />
               </div>
            </div>

            {/* Decorative Corner Screws */}
            <div className="absolute top-3 left-3 w-2 h-2 border border-black rounded-full flex items-center justify-center"><div className="w-1 h-[1px] bg-black rotate-45"></div></div>
            <div className="absolute top-3 right-3 w-2 h-2 border border-black rounded-full flex items-center justify-center"><div className="w-1 h-[1px] bg-black rotate-45"></div></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 border border-black rounded-full flex items-center justify-center"><div className="w-1 h-[1px] bg-black rotate-45"></div></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 border border-black rounded-full flex items-center justify-center"><div className="w-1 h-[1px] bg-black rotate-45"></div></div>

          </div>

          {/* Hard Shadow (The 3D Effect) */}
          <div className="absolute top-4 left-4 w-full h-full bg-black z-10 border-4 border-black group-hover:top-6 group-hover:left-6 transition-all duration-200"></div>
          
          {/* Pattern Decoration behind shadow */}
          <div className="absolute -top-4 -right-4 md:-right-12 z-0 opacity-20">
             <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-2 h-16 bg-black/50 skew-x-12"></div>
                ))}
             </div>
          </div>
        </Link>

        {/* Footer Note */}
        <div className="mt-16 text-center opacity-50">
           <p className="text-[10px] uppercase font-bold tracking-widest">
             Restricted Access • Authorized Personnel Only
           </p>
           <p className="text-[10px] uppercase font-bold tracking-widest mt-1">
             Curry Lane Systems © 2024
           </p>
        </div>

      </main>
    </div>
  );
}