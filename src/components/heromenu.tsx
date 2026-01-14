'use client';

import React from 'react';

// Define types for menu items and categories
type MenuItemType = {
  name: string;
  description?: string;
  price: string;
  hasIcon?: boolean;
  note?: string;
};

type MenuCategoryType = {
  title: string;
  items: MenuItemType[];
};

// Menu Data
const menuData: { [key: string]: MenuCategoryType } = {
  appetizers: {
    title: 'APPETIZERS',
    items: [
      { name: 'SAMOSA CHAAT', description: 'Crushed samosas topped with chickpeas, yogurt, mint & tamarind chutney.', price: 'RS. 150' },
      { name: 'CHICKEN 65', description: 'Spicy, deep-fried chicken bites marinated in ginger, lemon, and red chilies.', price: 'RS. 280', hasIcon: false },
      { name: 'MASALA FRIES', description: 'Crispy fries tossed in our secret Curry Lane spice dust.', price: 'RS. 120'},
      { name: 'LAMB KEEMA PAO', description: 'Spiced minced lamb served with buttered soft buns.', price: 'RS. 350', hasIcon: false },
    ],
  },
  breads: {
    title: 'BREADS',
    items: [
      { name: 'TANDOORI ROTI', note: '(Whole wheat, clay oven baked)', price: 'RS. 40' },
      { name: 'BUTTER NAAN', note: '(Soft, leavened flatbread)', price: 'RS. 60' },
      { name: 'GARLIC NAAN', note: '(Topped with fresh garlic & cilantro)', price: 'RS. 75' },
      { name: 'CHEESE NAAN', note: '(Stuffed with cheddar & mozzarella)', price: 'RS. 110' },
    ],
  },
  mainCurries: {
    title: 'MAIN CURRIES',
    items: [
      { name: 'BUTTER CHICKEN', description: 'Tandoor-grilled chicken in a rich tomato & fenugreek sauce.', price: 'RS. 450', hasIcon: false },
      { name: 'PANEER TIKKA MASALA', description: 'Char-grilled cottage cheese in a spiced onion-tomato gravy.', price: 'RS. 380' },
      { name: 'DAL MAKHANI', description: 'Black lentils slow-cooked overnight with white butter and cream.', price: 'RS. 320' },
      { name: 'LAMB ROGAN JOSH', description: 'Tender lamb cooked with Kashmiri spices and saffron.', price: 'RS. 520', hasIcon: false },
      { name: 'KADHAI CHICKEN', description: 'Chicken tossed with bell peppers and fresh coriander seeds.', price: 'RS. 420' },
      { name: 'PALAK PANEER', description: 'Cottage cheese cubes in a creamy spinach gravy.', price: 'RS. 360' },
      { name: 'CHANNA MASALA', description: 'Chickpeas simmered in a tangy tea-infused spice blend.', price: 'RS. 300' },
    ],
  },
  rice: {
    title: 'RICE',
    items: [
      { name: 'STEAMED BASMATI', description: 'Fluffy, long-grain aromatic rice.', price: 'RS. 150' },
      { name: 'JEERA RICE', description: 'Basmati rice tempered with cumin seeds and ghee.', price: 'RS. 180' },
      { name: 'CHICKEN BIRYANI', description: 'Layered rice and spiced chicken, served with raita.', price: 'RS. 400' },
      { name: 'VEG BIRYANI', description: 'Seasonal vegetables layered with aromatic saffron rice.', price: 'RS. 350' },
    ],
  },
  sides: {
    title: 'SIDES',
    items: [
      { name: 'CUCUMBER RAITA', note: '(Yogurt with cucumber & cumin)', price: 'RS. 90' },
      { name: 'MIXED PICKLE', note: '(Traditional spicy mango & lime)', price: 'RS. 40' },
      { name: 'KACHUMBER SALAD', note: '(Diced onion, tomato, cucumber)', price: 'RS. 80' },
      { name: 'MINT CHUTNEY', note: '(Fresh green dipping sauce)', price: 'RS. 30' },
    ],
  },
};

// Leaf Icon Component
const LeafIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-green-500 ml-1 inline-block"
  >
    <path
      fillRule="evenodd"
      d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177 7.547 7.547 0 01-1.705-1.715.75.75 0 00-1.152-.082A9.735 9.735 0 002.286 12.963a.75.75 0 00.136 1.071 9.742 9.742 0 006.177 3.539 7.547 7.547 0 01-1.715 1.705.75.75 0 00-.082 1.152 9.735 9.735 0 009.911 3.214.75.75 0 00.136-1.071 9.742 9.742 0 00-6.177-3.539 7.547 7.547 0 011.705-1.715.75.75 0 00.082-1.152 9.735 9.735 0 00-3.214-9.911.75.75 0 00-1.071-.136zM6 12a6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6z"
      clipRule="evenodd"
    />
  </svg>
);

// MenuItem Component
const MenuItem = ({ item }: { item: MenuItemType }) => (
  <div className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0">
    <div>
      <h4 className="font-semibold text-gray-800 uppercase text-sm">{item.name}</h4>
      {item.description && <p className="text-gray-500 text-xs">{item.description}</p>}
      {item.note && <p className="text-gray-500 text-xs italic">{item.note}</p>}
    </div>
    <div className="flex items-center">
      <span className="font-bold text-[#EF2F2A] text-sm">{item.price}</span>
      {item.hasIcon && <LeafIcon />}
    </div>
  </div>
);

// MenuCategory Component
const MenuCategory = ({ category }: { category: MenuCategoryType }) => (
  <div className="bg-[#F9F3E5] p-4 pb-6">
    <div className="flex justify-center mb-4">
      <h3 className="bg-[#FCC93B] text-white font-semibold py-1 px-6 inline-block uppercase text-sm tracking-wider">
        {category.title}
      </h3>
    </div>
    <div className="space-y-1 px-2">
      {category.items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  </div>
);

// Marquee Banner Component
const MarqueeBanner = () => (
  <div className="overflow-hidden bg-white py-4 border-b border-gray-100">
    <div className="animate-marquee whitespace-nowrap flex">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-xl font-outline-red text-transparent mx-4 uppercase tracking-widest">
          DELICIOUS FOOD{' '}
          <span className="text-[#FCC93B] px-2">❖</span>{' '}
        </span>
      ))}
    </div>
    {/* Tailwind custom styles for marquee and text outline */}
    <style jsx>{`
      .font-outline-red {
        -webkit-text-stroke: 1px #EF2F2A;
      }
      .animate-marquee {
        animation: marquee 60s linear infinite;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

// Main HeroMenu Component
export default function HeroMenu() {
  return (
    <section className="bg-white font-sans pb-16">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <MarqueeBanner />

      {/* Header Section */}
      <div className="text-center pt-12 pb-8 px-4">
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-[#EF2F2A] uppercase leading-tight tracking-wide mb-2">
          EXPLORE THE FLAVORS
          <br />
          OF CURRY LANE
        </h2>
        <p className="text-[#FCC93B] font-semibold tracking-widest uppercase text-sm">
          DELICIOUS FOOD • INDIAN SOUL • ON THE GO
        </p>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-8">
            <MenuCategory category={menuData.appetizers} />
            <MenuCategory category={menuData.breads} />
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <MenuCategory category={menuData.mainCurries} />
          </div>

          {/* Column 3 */}
          <div className="space-y-8">
            <MenuCategory category={menuData.rice} />
            <MenuCategory category={menuData.sides} />
          </div>
        </div>
      </div>
    </section>
  );
}