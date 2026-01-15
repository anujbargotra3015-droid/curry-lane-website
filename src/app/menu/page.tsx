'use client';

import Image from "next/image";
import { useEffect, useState, Suspense, useMemo } from "react";
import { 
  ChevronDownIcon, 
  XMarkIcon, 
  AdjustmentsHorizontalIcon, 
  MagnifyingGlassIcon,
  ArrowUpIcon,
  StarIcon,
  PhotoIcon
} from "@heroicons/react/24/outline";
import { Playfair_Display, Courier_Prime, Inter } from "next/font/google";
import MenuSchema from "@/components/MenuSchema";

// --- FONTS ---
// Playfair for Headers (Classic/Editorial)
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });
// Courier Prime for that "Typewriter/90s Zine" feel
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });
// Inter for readable small text
const inter = Inter({ subsets: ["latin"] });

// --- TYPES ---
type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tags?: string[];
  imageUrl?: string;
  showBottlePeg?: boolean;
  bottlePrice?: string;
  pegPrice?: string;
};

type MenuSectionType = {
  id: string;
  title: string;
  items: MenuItem[];
  coverImage?: string;
};

// --- DATA ---
const TYPE_OPTIONS = ["All", "Veg", "Non-Veg", "Egg"] as const;
const DIETARY_OPTIONS = ["Spicy", "Kids", "Vegan", "Gluten Free", "Chef's Special"] as const;
type TypeFilter = typeof TYPE_OPTIONS[number];
type DietaryFilter = typeof DIETARY_OPTIONS[number];

/* ---------------- INTERNAL COMPONENT: MENU CONTENT ---------------- */

function MenuContent() {
  const [menuSections, setMenuSections] = useState<MenuSectionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");
  const [dietaryFilters, setDietaryFilters] = useState<DietaryFilter[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("/api/menu", { cache: "no-store" });
        const data = await res.json();
        if (data.sections) {
          const validSections = data.sections.filter((s: MenuSectionType) => s.items.length > 0);
          setMenuSections(validSections);
        }
      } catch (err) {
        console.error("Failed to load menu", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // --- FILTERING LOGIC ---
  const displayedSections = useMemo(() => {
    return menuSections
      .filter((section) => 
        selectedCategory === "all" ? true : section.id === selectedCategory
      )
      .map((section) => {
        const filteredItems = section.items.filter((item) => {
          let effectiveTags = [...(item.tags || [])];
          const isNonVeg = effectiveTags.includes("Non-Veg");
          const isEgg = effectiveTags.includes("Egg");
          
          // Auto-tag logic
          if (!isNonVeg && !isEgg && !effectiveTags.includes("Veg")) {
             effectiveTags.push("Veg");
          }
          if (isNonVeg) {
             effectiveTags = effectiveTags.filter(t => t !== "Veg");
          }

          // Type Filter
          if (typeFilter !== "All") {
            if (typeFilter === "Veg" && (isNonVeg || isEgg)) return false;
            if (typeFilter === "Non-Veg" && !isNonVeg) return false;
            if (typeFilter === "Egg" && !isEgg) return false;
          }
          // Dietary Filter
          if (dietaryFilters.length > 0) {
            return dietaryFilters.some((tag) => effectiveTags.includes(tag));
          }
          return true;
        });
        return { ...section, items: filteredItems };
      })
      .filter((section) => section.items.length > 0);
  }, [menuSections, selectedCategory, typeFilter, dietaryFilters]);

  // --- SCROLL HANDLER ---
  const handleCategorySelect = (sectionId: string) => {
    setSelectedCategory(sectionId);
    if (sectionId === 'all') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 100; 
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }, 50);
  };

  const toggleDietary = (tag: DietaryFilter) => {
    setDietaryFilters((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#F4E4BC] gap-4">
        <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        <p className={`${courier.className} text-black text-xl tracking-widest`}>LOADING...</p>
      </div>
    );
  }

  return (
    <main className={`min-h-screen bg-[#F4E4BC] text-[#1a1a1a] ${inter.className} relative selection:bg-black selection:text-[#F4E4BC]`}>
      
      {/* Background Texture (Old Paper) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-0 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <MenuSchema sections={menuSections as any} />

      {/* --- HERO SECTION (Minimalist) --- */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden border-b-4 border-black">
        <div className="absolute inset-0 bg-[#F4E4BC]">
            {/* Abstract Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in-up">
           <h1 className={`${playfair.className} text-[60px] md:text-[150px] font-black text-black tracking-tighter leading-[0.8] drop-shadow-[4px_4px_0px_rgba(255,255,255,0.5)]`}>
             Delivery Menu
           </h1>
        </div>
      </section>

      {/* --- STICKY NAV BAR (Retro Style) --- */}
      <div className="sticky top-0 z-40 bg-[#F4E4BC] border-b-4 border-black py-3 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 flex gap-3 items-center">
          
          {/* Category Dropdown */}
          <div className="relative flex-1 group">
             <select
               value={selectedCategory}
               onChange={(e) => handleCategorySelect(e.target.value)}
               className={`w-full h-12 pl-4 pr-10 bg-[#FFFBF2] rounded-none border-2 border-black text-black ${courier.className} font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-y-1 focus:shadow-none transition-all appearance-none cursor-pointer uppercase`}
             >
               <option value="all">ALL CATEGORIES</option>
               {menuSections.map((s) => (
                 <option key={s.id} value={s.id}>
                   {s.title}
                 </option>
               ))}
             </select>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
                <ChevronDownIcon className="w-5 h-5 stroke-[3]" />
             </div>
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className={`h-12 w-12 md:w-auto md:px-6 bg-[#FFFBF2] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 active:translate-y-1 active:shadow-none transition-all ${
              typeFilter !== "All" || dietaryFilters.length > 0 ? "bg-black text-white" : "text-black"
            }`}
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5 stroke-[2]" />
            <span className={`hidden md:inline ${courier.className} font-bold uppercase`}>Filter</span>
            {(typeFilter !== "All" || dietaryFilters.length > 0) && (
              <span className="bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border border-black">
                !
              </span>
            )}
          </button>
        </div>
      </div>

      {/* --- MENU LIST --- */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20 relative z-10 min-h-screen">
        {displayedSections.length > 0 ? (
          displayedSections.map((section, idx) => (
            <section key={idx} id={section.id} className="scroll-mt-40">
               
               {/* 1. Category Title (Centered) */}
               <div className="text-center mb-6">
                  <h2 className={`${playfair.className} text-4xl md:text-6xl font-black text-black uppercase tracking-tight relative inline-block`}>
                    <span className="relative z-10 px-4 bg-[#F4E4BC]">{section.title}</span>
                    <div className="absolute top-1/2 left-[-20%] right-[-20%] h-1 bg-black -z-0"></div>
                  </h2>
               </div>

               {/* 2. The "3D" Card - Rough Copy Style */}
               <div className="bg-[#FFFBF2] border-2 border-black p-4 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative">
                  
                  {/* Decorative corner screws */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-black rounded-full" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-black rounded-full" />

                  {/* Content Grid - Compact Layout */}
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                     {section.items.map((item, i) => (
                        <MenuItemRow key={i} item={item} onImageClick={setExpandedImage} />
                     ))}
                  </div>

               </div>
            </section>
          ))
        ) : (
          <div className="text-center py-32 border-2 border-dashed border-black opacity-50">
            <MagnifyingGlassIcon className="w-16 h-16 mx-auto mb-4 text-black" />
            <h3 className={`${courier.className} text-2xl font-bold`}>NOTHING FOUND.</h3>
          </div>
        )}
      </div>

      {/* Scroll Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-black text-[#F4E4BC] border-2 border-[#F4E4BC] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] z-30 hover:scale-110 transition-transform"
      >
        <ArrowUpIcon className="w-6 h-6 stroke-[3]" />
      </button>

      {/* --- IMAGE MODAL --- */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-auto max-h-[85vh] bg-[#FFFBF2] p-2 border-4 border-black shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)]" onClick={(e) => e.stopPropagation()}>
             <button 
               className="absolute -top-12 right-0 md:-right-12 text-white hover:text-red-300 transition-colors p-2"
               onClick={() => setExpandedImage(null)}
             >
                <XMarkIcon className="w-10 h-10" />
             </button>
             <div className="relative w-full h-full overflow-hidden aspect-video bg-black/5">
                <Image 
                    src={expandedImage} 
                    alt="Dish Detail" 
                    fill 
                    className="object-contain" 
                />
             </div>
          </div>
        </div>
      )}

      {/* --- FILTER DRAWER (Retro Style) --- */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] flex justify-end">
          <div className="w-full max-w-md bg-[#FFFBF2] h-full shadow-2xl p-8 flex flex-col animate-slide-in-right border-l-4 border-black">
            
            <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
              <h3 className={`${playfair.className} text-4xl font-black text-black uppercase`}>Filters</h3>
              <button onClick={() => setShowFilters(false)} className="border-2 border-black p-1 hover:bg-black hover:text-white transition-colors">
                <XMarkIcon className="w-8 h-8 stroke-[3]" />
              </button>
            </div>

            <div className="flex-1 space-y-10 overflow-y-auto">
              {/* Type */}
              <div className="space-y-4">
                <label className={`${courier.className} text-sm font-bold uppercase underline`}>Preference</label>
                <div className="grid grid-cols-2 gap-3">
                  {TYPE_OPTIONS.map(opt => (
                    <button 
                      key={opt} 
                      onClick={() => setTypeFilter(opt)} 
                      className={`px-4 py-3 text-sm font-bold border-2 border-black transition-all ${
                        typeFilter === opt 
                          ? "bg-black text-[#FFFBF2] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]" 
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-4">
                <label className={`${courier.className} text-sm font-bold uppercase underline`}>Special Tags</label>
                <div className="flex flex-col gap-2">
                  {DIETARY_OPTIONS.map(opt => {
                    const isActive = dietaryFilters.includes(opt);
                    return (
                      <button 
                        key={opt} 
                        onClick={() => toggleDietary(opt)}
                        className={`flex items-center justify-between px-4 py-3 border-2 border-black transition-all text-left ${
                          isActive 
                            ? "bg-black text-[#FFFBF2]" 
                            : "bg-white text-black hover:bg-gray-100"
                        }`}
                      >
                        <span className="font-bold">{opt}</span>
                        {isActive && <div className="w-3 h-3 bg-[#FFFBF2] rounded-full" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t-4 border-black flex gap-4 mt-auto">
               <button 
                 onClick={() => { setTypeFilter("All"); setDietaryFilters([]); }} 
                 className="flex-1 py-4 font-bold border-2 border-black bg-white hover:bg-gray-200 transition-colors uppercase text-sm"
               >
                 Clear All
               </button>
               <button 
                 onClick={() => setShowFilters(false)} 
                 className="flex-[2] py-4 bg-black text-[#FFFBF2] font-bold border-2 border-black hover:bg-gray-800 transition-colors uppercase text-sm"
               >
                 Show Results
               </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ---------------- ITEM ROW COMPONENT (Vintage Compact List with Image) ---------------- */

function MenuItemRow({ item, onImageClick }: { item: MenuItem, onImageClick: (url: string) => void }) {
  // Smart Tag Logic
  let displayTags = [...(item.tags || [])];
  const isNonVeg = displayTags.includes("Non-Veg");
  const isEgg = displayTags.includes("Egg");
  if (!isNonVeg && !isEgg && !displayTags.includes("Veg")) displayTags.unshift("Veg");
  if (isNonVeg) displayTags = displayTags.filter(t => t !== "Veg");

  // Tag Badge Helper
  const TagBadge = ({ label, color }: { label: string, color: string }) => (
    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 border border-black ${color} shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1`}>
       {label === "★ Chef's Special" && <StarIcon className="w-2.5 h-2.5 fill-current" />}
       {label}
    </span>
  );

  return (
    <div className="flex gap-4 w-full mb-4 items-start group">
      
      {/* 1. Left: Image (Square, bordered) */}
      <div 
        className="shrink-0 w-20 h-20 md:w-24 md:h-24 relative cursor-pointer border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-gray-100 overflow-hidden group-hover:translate-y-[-2px] group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={() => item.imageUrl && onImageClick(item.imageUrl)}
      >
        {item.imageUrl ? (
           <Image 
             src={item.imageUrl} 
             alt={item.name} 
             fill 
             className="object-cover" 
           />
        ) : (
           <div className="w-full h-full flex items-center justify-center text-gray-300">
              <PhotoIcon className="w-6 h-6" />
           </div>
        )}
      </div>

      {/* 2. Right: Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
          
          {/* Name .................... Price */}
          <div className="flex items-baseline justify-between w-full">
             <h3 className={`${playfair.className} text-lg md:text-xl font-black text-black leading-tight tracking-tight`}>
               {item.name}
             </h3>
             
             {/* Dotted Leader */}
             <div className="flex-1 mx-2 border-b-2 border-dotted border-black/30 relative top-[-6px]"></div>

             <div className="flex flex-col items-end">
                {item.showBottlePeg ? (
                   <div className="flex flex-col items-end leading-none">
                     <span className={`${courier.className} font-bold text-lg text-black`}>₹{item.pegPrice}</span>
                     {item.bottlePrice && <span className="text-[9px] text-gray-500 font-bold mt-0.5">Btl: ₹{item.bottlePrice}</span>}
                   </div>
                ) : (
                   <span className={`${courier.className} font-bold text-lg text-black`}>₹{item.price}</span>
                )}
             </div>
          </div>

          {/* Description */}
          <p className={`${inter.className} text-xs md:text-sm text-gray-700 font-medium leading-snug max-w-[90%] line-clamp-2`}>
             {item.desc}
          </p>

          {/* Tags Row */}
          <div className="flex flex-wrap gap-2 mt-1">
             {displayTags.map(tag => {
                if (tag === "Chef's Special") return <TagBadge key={tag} label="★ Chef's Special" color="bg-pink-200 text-black" />;
                if (tag === "Veg") return <TagBadge key={tag} label="Veg" color="bg-green-200 text-black" />;
                if (tag === "Non-Veg") return <TagBadge key={tag} label="Non-Veg" color="bg-red-200 text-white" />;
                if (tag === "Vegan") return <TagBadge key={tag} label="Vegan" color="bg-emerald-200 text-black" />;
                if (tag === "Gluten Free") return <TagBadge key={tag} label="GF" color="bg-amber-200 text-black" />;
                if (tag === "Kids") return <TagBadge key={tag} label="Kids" color="bg-blue-200 text-black" />;
                if (tag === "Spicy") return <TagBadge key={tag} label="Spicy" color="bg-orange-200 text-black" />;
                if (tag === "Egg") return <TagBadge key={tag} label="Egg" color="bg-yellow-200 text-black" />;
                return null;
             })}
          </div>
      </div>

    </div>
  );
}

// --- REQUIRED DEFAULT EXPORT ---
export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center bg-[#F4E4BC]">
        <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}