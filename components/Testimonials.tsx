import React from 'react';

export default function Testimonials() {
  return (
    <section className="relative bg-[#EF2F2A] py-24 overflow-hidden font-sans">
      {/* Import the specific font for the header */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      
      {/* Top Left Icon (Spoons/Utensils approx) */}
      <div className="absolute top-10 left-10 md:left-24 opacity-90 hidden sm:block">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized graphic matching the yellow icon in top left */}
          <path d="M30 60 L20 90" stroke="#FCC93B" strokeWidth="8" strokeLinecap="round" />
          <path d="M70 60 L80 90" stroke="#FCC93B" strokeWidth="8" strokeLinecap="round" />
          <circle cx="30" cy="35" r="15" fill="#FCC93B" />
          <circle cx="70" cy="35" r="15" fill="#FCC93B" />
          <path d="M30 40 L30 60" stroke="#FCC93B" strokeWidth="6" />
          <path d="M70 40 L70 60" stroke="#FCC93B" strokeWidth="6" />
        </svg>
      </div>

      {/* Top Right Icon (Onion/Spice Motif approx) */}
      <div className="absolute -top-10 -right-10 md:top-0 md:right-0 opacity-90">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12">
          <path d="M100 20 C60 60 40 120 100 180 C160 120 140 60 100 20Z" stroke="#FCC93B" strokeWidth="2" />
          <path d="M100 20 C80 70 70 110 100 180" stroke="#FCC93B" strokeWidth="2" />
          <path d="M100 20 C120 70 130 110 100 180" stroke="#FCC93B" strokeWidth="2" />
          <path d="M100 90 L100 160" stroke="#FCC93B" strokeWidth="2" />
           {/* Flower detail */}
          <path d="M160 40 L180 60 M170 30 L190 50" stroke="#FCC93B" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            HAPPY CUSTOMERS
            <br />
            CURRY LANE
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="flex flex-col justify-between bg-white p-8 md:p-10 shadow-lg">
            <div>
              <p className="text-lg leading-relaxed text-gray-800 font-medium">
                "Absolutely love the flavors – tastes just like home, but faster!"
              </p>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6 flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#EF2F2A]">
                NAME OF THE PERSON
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between bg-white p-8 md:p-10 shadow-lg">
            <div>
              <p className="text-lg leading-relaxed text-gray-800 font-medium">
                "Perfect for a quick lunch break. Never thought butter chicken could be this fast and this good."
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#EF2F2A]">
                NAME OF THE PERSON
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between bg-white p-8 md:p-10 shadow-lg">
            <div>
              <p className="text-lg leading-relaxed text-gray-800 font-medium">
                "Their naan is soft, fresh, and goes so well with every curry. 10/10!"
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#EF2F2A]">
                NAME OF THE PERSON
              </span>
            </div>
          </div>

        </div>

        {/* Navigation Dots */}
        <div className="mt-16 flex justify-center gap-3">
          <button className="h-4 w-4 rounded-full bg-[#FCC93B] hover:bg-yellow-300 transition-colors" />
          <button className="h-4 w-4 rounded-full bg-[#FCC93B] hover:bg-yellow-300 transition-colors" />
          <button className="h-4 w-4 rounded-full bg-[#FCC93B] hover:bg-yellow-300 transition-colors" />
        </div>

      </div>
    </section>
  );
}