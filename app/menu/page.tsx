"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Star, Leaf, Flame, WheatOff } from "lucide-react";

// --- TYPES ---
type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: ("Veg" | "Spicy" | "GF" | "Bestseller")[];
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

// --- DATA ---
const MENU_DATA: MenuCategory[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Samosa Chaat", description: "Crushed samosas, spiced chickpeas, yogurt, tamarind glaze.", price: "150", tags: ["Bestseller", "Veg"] },
      { name: "Chicken 65", description: "Deep-fried chicken bites, curry leaves, red chili.", price: "280", tags: ["Spicy"] },
      { name: "Gunpowder Fries", description: "Crispy fries, podi spice dust, curry mayo.", price: "120", tags: ["Veg"] },
      { name: "Lamb Keema Pao", description: "Spiced minced lamb, buttered soft bun.", price: "350", tags: ["Spicy"] },
    ],
  },
  {
    id: "curries",
    title: "Signature Curries",
    items: [
      { name: "Old Delhi Butter Chicken", description: "Tandoor chicken, creamy tomato fenugreek sauce.", price: "450", tags: ["Bestseller"] },
      { name: "Paneer Tikka Masala", description: "Char-grilled cottage cheese, onion-tomato gravy.", price: "380", tags: ["Veg"] },
      { name: "Railway Lamb Curry", description: "Tender lamb, potatoes, spicy colonial gravy.", price: "520", tags: ["Spicy"] },
      { name: "Dal Makhani", description: "Black lentils, white butter, cream (slow-cooked 24hrs).", price: "320", tags: ["Veg"] },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    items: [
      { name: "Butter Naan", description: "Leavened flatbread, butter.", price: "60" },
      { name: "Garlic Naan", description: "Minced garlic, cilantro.", price: "75", tags: ["Bestseller"] },
      { name: "Tandoori Roti", description: "Whole wheat flatbread.", price: "40", tags: ["Veg"] },
    ],
  },
  {
    id: "rice",
    title: "Rice & Biryani",
    items: [
      { name: "Hyderabadi Chicken Biryani", description: "Basmati rice, spiced chicken, saffron, fried onions.", price: "400", tags: ["Spicy"] },
      { name: "Jeera Rice", description: "Steamed rice, cumin tempering.", price: "180", tags: ["Veg"] },
    ],
  },
  {
    id: "dessert",
    title: "Sweet Endings",
    items: [
      { name: "Gulab Jamun", description: "Milk solids, rose sugar syrup.", price: "120", tags: ["Veg"] },
      { name: "Mango Lassi", description: "Yogurt, mango pulp, cardamom.", price: "150", tags: ["Veg"] },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      MENU_DATA.forEach((cat) => {
        const section = document.getElementById(cat.id);
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveCategory(cat.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 150, behavior: "smooth" });
      setActiveCategory(id);
      setIsDropdownOpen(false);
    }
  };

  const currentCategoryTitle = MENU_DATA.find(c => c.id === activeCategory)?.title || "Select Section";

  return (
    <main className="bg-[#0f0f0f] min-h-screen font-sans text-gray-800 pb-20 overflow-x-hidden">
      {/* Styles & Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500&display=swap');
        
        .font-serif-menu { font-family: 'Cormorant Garamond', serif; }
        .font-sans-menu { font-family: 'Montserrat', sans-serif; }

        /* The 3D Paper Effect */
        .paper-menu {
          background-color: #Fdfbf7; /* Cream Paper Color */
          background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png"); /* Subtle texture */
          box-shadow: 
            0 1px 1px rgba(0,0,0,0.15), 
            0 10px 0 -5px #eee, 
            0 10px 1px -4px rgba(0,0,0,0.15), 
            0 20px 0 -10px #eee, 
            0 20px 1px -9px rgba(0,0,0,0.15),
            0 50px 100px -20px rgba(0,0,0,0.5); /* Deep shadow lift */
          transform: perspective(1500px) rotateX(1deg);
          transform-origin: top center;
          margin-bottom: 50px;
        }

        .dot-leader {
          background-image: radial-gradient(circle, #aaa 1px, transparent 1px);
          background-size: 6px 1px; /* Distance between dots */
          background-position: bottom;
          background-repeat: repeat-x;
          height: 4px;
          flex-grow: 1;
          margin: 0 12px;
          opacity: 0.6;
        }
      `}</style>

      {/* --- STICKY DROPDOWN NAVIGATION --- */}
      <div className="sticky top-0 z-50 pt-6 pb-2 px-4 flex justify-center pointer-events-none">
        <div className="relative pointer-events-auto">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#1a1a1a] text-[#FCC93B] border border-[#333] px-8 py-3 rounded-full shadow-2xl flex items-center gap-4 hover:border-[#EF2F2A] transition-all group"
          >
            <span className="font-sans-menu text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Jump to:</span>
            <span className="font-serif-menu text-xl font-bold tracking-wide group-hover:text-white transition-colors">{currentCategoryTitle}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Options */}
          <div className={`
            absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#1a1a1a] border border-[#333] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top
            ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}
          `}>
            {MENU_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`w-full text-center py-3 border-b border-[#333] last:border-0 hover:bg-[#252525] transition-colors
                    ${activeCategory === cat.id ? 'text-[#EF2F2A]' : 'text-gray-400'}
                `}
              >
                <span className="font-serif-menu text-lg">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- 3D MENU SHEET CONTAINER --- */}
      <div className="container mx-auto px-4 pt-10 pb-20 flex justify-center">
        
        {/* THE PAPER SHEET (A4 Aspect Ratio approx) */}
        <div className="paper-menu w-full max-w-[800px] min-h-[1200px] p-8 md:p-16 relative">
          
          {/* Header on Paper */}
          <div className="text-center mb-16 border-b-2 border-double border-[#EF2F2A]/20 pb-8">
            <span className="font-sans-menu text-[10px] uppercase tracking-[0.4em] text-[#EF2F2A] block mb-2">Est. 2024</span>
            <h1 className="font-serif-menu text-6xl md:text-7xl text-[#121212] font-bold tracking-tight">
              Curry Lane
            </h1>
            <p className="font-sans-menu text-xs text-gray-500 uppercase tracking-widest mt-4">
              Authentic Indian Kitchen
            </p>
          </div>

          {/* Menu Sections */}
          <div className="space-y-16">
            {MENU_DATA.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-48">
                
                {/* Category Title */}
                <h2 className="text-center font-serif-menu text-4xl text-[#EF2F2A] mb-8 italic relative inline-block w-full">
                  <span className="relative z-10 px-4 bg-[#Fdfbf7]">{category.title}</span>
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#EF2F2A]/20 -z-0"></div>
                </h2>

                {/* Items List */}
                <div className="space-y-8">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="group">
                      {/* Name ........... Price */}
                      <div className="flex items-baseline w-full">
                        <h3 className="font-serif-menu text-2xl font-bold text-[#1a1a1a] shrink-0">
                          {item.name}
                        </h3>
                        
                        {/* Dot Leader */}
                        <div className="dot-leader"></div>
                        
                        <span className="font-serif-menu text-2xl font-bold text-[#1a1a1a] shrink-0">
                          ₹{item.price}
                        </span>
                      </div>

                      {/* Description & Icons */}
                      <div className="flex justify-between items-start mt-1">
                        <p className="font-sans-menu text-sm text-gray-500 font-medium max-w-[80%] italic">
                          {item.description}
                        </p>
                        
                        {/* Tags (Minimal Icons) */}
                        <div className="flex gap-2 pt-1">
                           {item.tags?.includes("Bestseller") && <Star className="w-3 h-3 text-[#FCC93B] fill-current" />}
                           {item.tags?.includes("Veg") && <Leaf className="w-3 h-3 text-green-600" />}
                           {item.tags?.includes("Spicy") && <Flame className="w-3 h-3 text-red-500" />}
                           {item.tags?.includes("GF") && <WheatOff className="w-3 h-3 text-amber-600" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Paper Footer / End Mark */}
          <div className="mt-20 text-center opacity-40">
            <div className="w-4 h-4 border border-[#1a1a1a] rotate-45 mx-auto mb-4"></div>
            <p className="font-sans-menu text-[10px] uppercase tracking-widest">
              Service charge is discretionary
            </p>
          </div>

        </div>
      </div>

    </main>
  );
}