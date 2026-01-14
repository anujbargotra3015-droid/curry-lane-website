'use client';

import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ArrowUpRightIcon
} from "@heroicons/react/24/outline";
import { Playfair_Display, Inter } from "next/font/google";

// --- FONTS ---
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function ContactPage() {
  
  // Specific Google Maps Embed URL for the address
  const mapSrc = `https://maps.google.com/maps?q=SCO+41+42+Aero+Arcade+G+Block+Mohali+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <main className={`min-h-screen bg-white text-slate-900 ${inter.className} selection:bg-red-50 selection:text-red-900`}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
           <span className="text-red-600 font-medium tracking-[0.2em] text-xs uppercase mb-4 animate-fade-in">
             Get in Touch
           </span>
           <h1 className={`${playfair.className} text-6xl md:text-8xl font-medium tracking-tight text-slate-900 mb-6`}>
             Visit Curry Lane
           </h1>
           <p className="text-slate-500 font-light text-lg max-w-lg mx-auto leading-relaxed">
             Experience the authentic taste of Punjab in a modern setting. We are looking forward to serving you.
           </p>
        </div>
      </section>

      {/* --- DETAILS GRID --- */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* 1. Address Card */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
             
             <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <MapPinIcon className="w-6 h-6" />
             </div>
             
             <h3 className={`${playfair.className} text-2xl text-slate-900 mb-3`}>Location</h3>
             <p className="text-slate-500 leading-relaxed font-light mb-6">
                Ground Floor, SCO 41 42,<br/>
                Aero Arcade, G Block,<br/>
                Mohali, Punjab 140603
             </p>
             
             <a 
               href="https://maps.google.com/?q=SCO+41+42+Aero+Arcade+G+Block+Mohali+Punjab" 
               target="_blank"
               className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 uppercase tracking-wider group-hover:gap-3 transition-all"
             >
                Get Directions <ArrowUpRightIcon className="w-4 h-4" />
             </a>
          </div>

          {/* 2. Contact Card */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

             <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <PhoneIcon className="w-6 h-6" />
             </div>
             
             <h3 className={`${playfair.className} text-2xl text-slate-900 mb-3`}>Contact</h3>
             <div className="space-y-3">
               <a href="tel:+919501501222" className="block text-slate-500 hover:text-red-600 transition-colors font-light text-lg">
                 +91 95015 01222
               </a>
               <a href="mailto:Currylanemohali@gmail.com" className="block text-slate-500 hover:text-red-600 transition-colors font-light text-lg break-all">
                 Currylanemohali@gmail.com
               </a>
             </div>
          </div>

          {/* 3. Hours (Static Placeholder based on typical times, editable) */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

             <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
                   <div className="w-0.5 h-2 bg-current -mt-1" />
                </div>
             </div>
             
             <h3 className={`${playfair.className} text-2xl text-slate-900 mb-3`}>Opening Hours</h3>
             <ul className="space-y-2 text-slate-500 font-light">
                <li className="flex justify-between">
                   <span>Mon - Sun</span>
                   <span className="font-medium text-slate-700">11:00 AM - 11:00 PM</span>
                </li>
                <li className="text-xs text-red-500 font-medium pt-2 mt-2 border-t border-slate-200/50">
                   * Open 7 Days a Week
                </li>
             </ul>
          </div>

        </div>

        {/* --- MAP SECTION --- */}
        <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
           <iframe 
             src={mapSrc}
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} // Slight styling to map
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="Curry Lane Location"
           ></iframe>
           
           {/* Floating Label on Map */}
           <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white hidden md:block">
              <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">Locate Us</p>
              <p className={`${playfair.className} text-xl text-slate-900`}>Aero Arcade, Mohali</p>
           </div>
        </div>

      </section>

    </main>
  );
}