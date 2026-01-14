"use client";
import { useEffect, useState } from "react";
// Install this package if you haven't: npm install @hello-pangea/dnd
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { 
  Bars3Icon, 
  ChevronDownIcon, 
  TrashIcon, 
  PhotoIcon,
  DocumentTextIcon,
  PlusIcon,
  FolderPlusIcon,
  StarIcon,
  CurrencyRupeeIcon
} from "@heroicons/react/24/outline";
import { Courier_Prime, Playfair_Display, Inter } from "next/font/google";
import { CheckIcon } from "lucide-react";

// --- FONTS ---
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });
const inter = Inter({ subsets: ["latin"] });

// Tag Options (Retro Colors)
const FOOD_TAGS = [
  { id: "Non-Veg", label: "Non-Veg", color: "text-red-700 bg-red-100 border-red-800" },
  { id: "Egg", label: "Egg", color: "text-yellow-800 bg-yellow-100 border-yellow-800" },
  { id: "Spicy", label: "Spicy", color: "text-orange-800 bg-orange-100 border-orange-800" },
  { id: "Kids", label: "Kids", color: "text-blue-800 bg-blue-100 border-blue-800" },
  { id: "Vegan", label: "Vegan", color: "text-green-800 bg-green-100 border-green-800" },
  { id: "Gluten Free", label: "GF", color: "text-amber-800 bg-amber-100 border-amber-800" },
  { id: "Chef's Special", label: "Chef's", color: "text-pink-800 bg-pink-100 border-pink-800" },
];

export default function MenuEditor() {
  const [menu, setMenu] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  
  // Default to food, removed toggle
  const menuType = "food"; 
  
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  // --- LOAD DATA ---
  useEffect(() => {
    fetch("/api/menu")
      .then((r) => r.json())
      .then((data) => {
        const processed = {
             ...data,
             sections: data.sections.map((s: any, i: number) => ({
                 ...s,
                 id: s.id || `section-${Date.now()}-${i}`
             }))
        };
        setMenu(processed);
      })
      .catch((err) => console.error("Failed to load menu:", err));
  }, []);

  if (!menu) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4E4BC]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        <p className={`${courier.className} text-black font-bold tracking-widest text-xl`}>LOADING SYSTEM...</p>
      </div>
    </div>
  );

  const sectionIndices = menu.sections
    .map((s: any, index: number) => ({ ...s, originalIndex: index }))
    .filter((s: any) => s.menuType === menuType);

  // --- ACTIONS ---

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/menu", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sections: menu.sections }),
      });

      if (!res.ok) throw new Error("Save failed");

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      
      const fresh = await fetch("/api/menu").then((r) => r.json());
      setMenu(fresh);
    } catch (err) {
      console.error(err);
      alert("Failed to save. Check console.");
    } finally {
      setSaving(false);
    }
  };

  const handleAddSection = () => {
    const title = prompt(`Enter category name:`);
    if (!title) return;

    const newSection = {
        id: `section-${Date.now()}`,
        title: title,
        menuType: menuType, 
        items: []
    };

    setMenu({
        ...menu,
        sections: [...menu.sections, newSection]
    });
    setExpandedSections(new Set(expandedSections).add(newSection.id));
  };

  const handleDeleteSection = (index: number) => {
    if(!confirm("DELETE CATEGORY? This action is permanent.")) return;
    const newSections = [...menu.sections];
    newSections.splice(index, 1);
    setMenu({ ...menu, sections: newSections });
  };

  const handleUpdateSectionTitle = (index: number, newTitle: string) => {
    const newSections = [...menu.sections];
    newSections[index].title = newTitle;
    setMenu({ ...menu, sections: newSections });
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;

    if (sourceIndex === destIndex) return;

    const visibleSections = sectionIndices; 
    const reorderedVisible = [...visibleSections];
    const [moved] = reorderedVisible.splice(sourceIndex, 1);
    reorderedVisible.splice(destIndex, 0, moved);

    const nonVisibleSections = menu.sections.filter((s: any) => s.menuType !== menuType);
    const cleanedReordered = reorderedVisible.map(({originalIndex, ...rest}: any) => rest);
    const finalSections = [...cleanedReordered, ...nonVisibleSections];

    setMenu({ ...menu, sections: finalSections });
  };

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) newExpanded.delete(sectionId);
    else newExpanded.add(sectionId);
    setExpandedSections(newExpanded);
  };

  const toggleTag = (sectionId: string, itemIndex: number, tagId: string) => {
    const newSections = [...menu.sections];
    const sectionIndex = newSections.findIndex((s:any) => s.id === sectionId);
    if (sectionIndex === -1) return;
    
    const item = newSections[sectionIndex].items[itemIndex];
    const currentTags = item.tags || [];
    
    if (currentTags.includes(tagId)) {
        item.tags = currentTags.filter((t: string) => t !== tagId);
    } else {
        item.tags = [...currentTags, tagId];
    }
    setMenu({ ...menu, sections: newSections });
  };

  return (
    <div className={`min-h-screen bg-[#F4E4BC] text-[#1a1a1a] pb-40 relative selection:bg-black selection:text-[#F4E4BC] ${inter.className}`}>
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-0 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-4 border-black pb-8">
          <div>
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-black tracking-tighter text-black uppercase`}>
              Menu Editor
            </h1>
            <p className={`${courier.className} text-black opacity-70 mt-2 text-lg font-bold`}>
              // SYSTEM_READY // MODE: FOOD_ONLY
            </p>
          </div>

          <div className="bg-black text-[#F4E4BC] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
             <span className={`${courier.className} font-bold text-sm tracking-widest`}>
                V1.0.4
             </span>
          </div>
        </div>

        {/* --- EMPTY STATE --- */}
        {sectionIndices.length === 0 && (
          <div className="text-center py-24 border-4 border-dashed border-black/20 bg-[#FFFBF2] mb-8">
            <p className={`${courier.className} text-black font-bold text-xl`}>NO CATEGORIES FOUND.</p>
            <p className="text-black/60 text-sm mt-2 font-bold uppercase tracking-widest">Create a category to begin.</p>
          </div>
        )}

        {/* --- DRAGGABLE LIST --- */}
        {enabled ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={menuType}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-8">
                  {sectionIndices.map((section: any, si: number) => {
                    const sectionId = section.id;
                    const realIndex = section.originalIndex;
                    const isExpanded = expandedSections.has(sectionId);

                    return (
                      <Draggable key={sectionId} draggableId={sectionId} index={si}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={`
                              border-4 border-black transition-all duration-200
                              ${snapshot.isDragging 
                                  ? "bg-[#FFFBF2] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] scale-[1.02] z-50 rotate-1" 
                                  : "bg-[#FFFBF2] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                              }
                            `}
                          >
                            {/* SECTION HEADER BAR */}
                            <div 
                               className={`flex items-center justify-between p-5 cursor-pointer border-b-4 border-transparent ${isExpanded ? 'border-black bg-[#F4E4BC]' : ''}`}
                               onClick={(e) => {
                                  if((e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).closest('button')?.title !== "Delete Category") {
                                      toggleSection(sectionId)
                                  }
                               }}
                            >
                              <div className="flex items-center gap-5 flex-1">
                                {/* Drag Handle */}
                                <div 
                                  {...provided.dragHandleProps} 
                                  className="p-2 border-2 border-transparent hover:border-black hover:bg-white transition-all cursor-grab active:cursor-grabbing"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Bars3Icon className="h-6 w-6 stroke-2" />
                                </div>
                                
                                {/* Editable Title */}
                                <div className="flex-1">
                                    <input 
                                        className={`w-full bg-transparent border-b-2 border-transparent hover:border-black focus:border-black text-2xl font-black text-black uppercase tracking-tight focus:outline-none transition-all px-1 py-0.5 ${playfair.className}`}
                                        value={section.title}
                                        onChange={(e) => handleUpdateSectionTitle(realIndex, e.target.value)}
                                        placeholder="CATEGORY NAME"
                                        onClick={(e) => e.stopPropagation()} 
                                    />
                                    <p className={`${courier.className} text-xs text-black/60 mt-1 pl-1 font-bold`}>
                                        {section.items.length} ITEMS DETECTED
                                    </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-4">
                                  <button 
                                     onClick={(e) => { e.stopPropagation(); handleDeleteSection(realIndex); }}
                                     className="p-2 text-black/40 hover:text-red-600 transition-colors"
                                     title="Delete Category"
                                  >
                                      <TrashIcon className="h-6 w-6 stroke-2" />
                                  </button>

                                  <div className={`p-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                                     <ChevronDownIcon className="h-6 w-6 stroke-2" />
                                  </div>
                              </div>
                            </div>

                            {/* SECTION CONTENT */}
                            {isExpanded && (
                              <div className="p-6 bg-[#F4E4BC]/30">
                                <div className="space-y-6">
                                  {section.items.map((item: any, ii: number) => (
                                    <div
                                      key={ii}
                                      className="grid md:grid-cols-12 gap-6 p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] relative group/item"
                                    >
                                      {/* 1. Name */}
                                      <div className="md:col-span-3">
                                          <label className={`${courier.className} text-xs font-bold uppercase text-black mb-2 block`}>Dish Name</label>
                                          <input
                                            className="w-full bg-[#F4E4BC]/20 border-2 border-black/20 focus:border-black rounded-none px-3 py-3 text-black font-bold focus:outline-none transition-all"
                                            value={item.name || ""}
                                            placeholder="e.g. Butter Chicken"
                                            onChange={(e) => {
                                              const newSections = [...menu.sections];
                                              newSections[realIndex].items[ii].name = e.target.value;
                                              setMenu({ ...menu, sections: newSections });
                                            }}
                                          />
                                      </div>

                                      {/* 2. Description */}
                                      <div className="md:col-span-4">
                                          <label className={`${courier.className} text-xs font-bold uppercase text-black mb-2 block`}>Description</label>
                                          <div className="relative">
                                            <input
                                                className="w-full bg-[#F4E4BC]/20 border-2 border-black/20 focus:border-black rounded-none pl-10 pr-3 py-3 text-black focus:outline-none transition-all"
                                                value={item.desc || ""}
                                                placeholder="Ingredients..."
                                                onChange={(e) => {
                                                    const newSections = [...menu.sections];
                                                    newSections[realIndex].items[ii].desc = e.target.value;
                                                    setMenu({ ...menu, sections: newSections });
                                                }}
                                            />
                                            <DocumentTextIcon className="w-5 h-5 text-black/40 absolute left-3 top-1/2 -translate-y-1/2" />
                                          </div>
                                      </div>

                                      {/* 3. Price */}
                                      <div className="md:col-span-2">
                                          <label className={`${courier.className} text-xs font-bold uppercase text-black mb-2 block`}>Price</label>
                                          <div className="relative">
                                              <input
                                                className={`w-full bg-[#F4E4BC]/20 border-2 border-black/20 focus:border-black rounded-none pl-8 pr-3 py-3 text-black font-bold ${courier.className} focus:outline-none transition-all`}
                                                value={item.price || ""}
                                                placeholder="00"
                                                onChange={(e) => {
                                                  const newSections = [...menu.sections];
                                                  newSections[realIndex].items[ii].price = e.target.value;
                                                  setMenu({ ...menu, sections: newSections });
                                                }}
                                              />
                                              <CurrencyRupeeIcon className="w-4 h-4 text-black/40 absolute left-3 top-1/2 -translate-y-1/2" />
                                          </div>
                                      </div>

                                      {/* 4. Image URL */}
                                      <div className="md:col-span-2">
                                          <label className={`${courier.className} text-xs font-bold uppercase text-black mb-2 block`}>Image</label>
                                          <div className="relative">
                                            <input
                                                className="w-full bg-[#F4E4BC]/20 border-2 border-black/20 focus:border-black rounded-none pl-10 pr-3 py-3 text-black text-xs focus:outline-none transition-all truncate"
                                                value={item.imageUrl || ""}
                                                placeholder="https://..."
                                                onChange={(e) => {
                                                    const newSections = [...menu.sections];
                                                    newSections[realIndex].items[ii].imageUrl = e.target.value.trim();
                                                    setMenu({ ...menu, sections: newSections });
                                                }}
                                            />
                                            <PhotoIcon className="w-5 h-5 text-black/40 absolute left-3 top-1/2 -translate-y-1/2" />
                                          </div>
                                      </div>

                                       {/* 5. Delete Item */}
                                       <div className="md:col-span-1 flex items-end justify-center pb-2">
                                          <button
                                            onClick={() => {
                                              if(!confirm("Remove this item?")) return;
                                              const newSections = [...menu.sections];
                                              newSections[realIndex].items.splice(ii, 1);
                                              setMenu({ ...menu, sections: newSections });
                                            }}
                                            className="p-2 text-black/30 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                            title="Delete Item"
                                          >
                                            <TrashIcon className="h-6 w-6" />
                                          </button>
                                       </div>

                                      {/* 6. Tags */}
                                      <div className="md:col-span-12 pt-4 mt-2 border-t-2 border-dashed border-black/10 flex flex-wrap gap-4 items-center">
                                          <span className={`${courier.className} text-xs font-bold uppercase text-black mr-2`}>TAGS:</span>
                                          {FOOD_TAGS.map((tag) => {
                                              const isSelected = (item.tags || []).includes(tag.id);
                                              return (
                                                  <button
                                                      key={tag.id}
                                                      onClick={() => toggleTag(sectionId, ii, tag.id)}
                                                      className={`
                                                          px-3 py-1 rounded-none text-[10px] font-bold uppercase border-2 transition-all duration-200 flex items-center gap-1
                                                          ${isSelected 
                                                            ? `${tag.color} border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5` 
                                                            : "bg-white border-black/20 text-black/40 hover:border-black hover:text-black"}
                                                      `}
                                                  >
                                                      {tag.id === "Chef's Special" && <StarIcon className="w-3 h-3" />}
                                                      {tag.label}
                                                  </button>
                                              );
                                          })}
                                      </div>
                                    </div>
                                  ))}

                                  {/* Add Item Button */}
                                  <button
                                    onClick={() => {
                                      const newSections = [...menu.sections];
                                      const newItem = {
                                        name: "", price: "", desc: "", tags: [], imageUrl: "",
                                        showBottlePeg: false, bottlePrice: "", pegPrice: "",
                                      };
                                      newSections[realIndex].items.push(newItem);
                                      setMenu({ ...menu, sections: newSections });
                                    }}
                                    className="w-full py-4 border-2 border-dashed border-black/40 text-black/50 hover:text-black hover:border-black hover:bg-white transition-all text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 group mt-4"
                                  >
                                    <PlusIcon className="w-5 h-5 group-hover:scale-110 transition-transform stroke-2" /> 
                                    Add New Item to {section.title}
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <div className="space-y-4">
             {[1,2,3].map((i) => (
                <div key={i} className="h-20 bg-[#FFFBF2] border-4 border-black/10 rounded-none animate-pulse"></div>
             ))}
          </div>
        )}
      </div>

      {/* --- ADD CATEGORY BUTTON --- */}
      <div className="max-w-6xl mx-auto px-6 pb-32 pt-8">
         <button
            onClick={handleAddSection}
            className="w-full py-6 border-4 border-black bg-white text-black hover:bg-black hover:text-[#F4E4BC] transition-all duration-300 flex flex-col items-center justify-center gap-2 group shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-y-1"
         >
            <div className="p-2 border-2 border-black rounded-full group-hover:border-[#F4E4BC]">
               <FolderPlusIcon className="w-6 h-6" />
            </div>
            <span className={`${courier.className} font-bold text-lg uppercase tracking-widest`}>Create New Category</span>
         </button>
      </div>

      {/* Floating Save Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-50 pointer-events-none">
         <div className="max-w-5xl mx-auto flex items-center justify-center pointer-events-auto">
            <div className={`
                flex items-center gap-6 px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500
                ${saving ? "bg-black text-[#F4E4BC]" : "bg-[#FFFBF2] text-black"}
            `}>
                 {saved ? (
                    <span className="text-green-700 font-black uppercase tracking-widest text-sm flex items-center gap-2 animate-in fade-in zoom-in">
                       <CheckIcon className="w-5 h-5 border-2 border-green-700 rounded-full p-0.5" />
                       Saved!
                    </span>
                 ) : (
                    <span className={`${courier.className} text-xs font-bold uppercase tracking-wider hidden sm:block opacity-60`}>
                        {menu?.sections?.length || 0} Categories Active
                    </span>
                 )}
                 
                 <div className="h-8 w-[2px] bg-black hidden sm:block"></div>

                 <button
                   onClick={handleSave}
                   disabled={saving}
                   className={`
                     px-8 py-2 font-black uppercase tracking-widest text-sm transform active:scale-95 border-2 border-black transition-all flex items-center gap-2
                     ${saving 
                        ? "bg-gray-500 text-white cursor-not-allowed border-transparent" 
                        : "bg-[#EF4444] text-white hover:bg-black hover:text-[#F4E4BC] hover:border-[#F4E4BC]"
                     }
                   `}
                 >
                   {saving ? "SAVING..." : "SAVE CHANGES"}
                 </button>
            </div>
         </div>
      </div>
    </div>
  );
}