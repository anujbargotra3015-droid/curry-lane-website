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
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000' },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000' },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000' },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000' },
    ],
  },
  breads: {
    title: 'BREADS',
    items: [
      { name: 'ROTI', note: '(Butter or no Butter)', price: 'RS. 000' },
      { name: 'PLAIN NAAN', note: '(Butter or no Butter)', price: 'RS. 000' },
      { name: 'GARLIC NAAN', note: '(Butter or no Butter)', price: 'RS. 000' },
      { name: 'ONE MORE', note: '(Butter or no Butter)', price: 'RS. 000' },
    ],
  },
  mainCurries: {
    title: 'MAIN CURRIES',
    items: [
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000', hasIcon: true },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000', hasIcon: true },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000', hasIcon: true },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000', hasIcon: true },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000' },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000' },
      { name: 'DISH NAME', description: 'Dish description', price: 'RS. 000' },
    ],
  },
  rice: {
    title: 'RICE',
    items: [
      { name: 'PLAIN', description: 'Dish description', price: 'RS. 000' },
      { name: 'JEERA RICE', description: 'Dish description', price: 'RS. 000' },
      { name: 'QUINOA RICE', description: 'Dish description', price: 'RS. 000' },
      { name: 'BROWN RICE', description: 'Dish description', price: 'RS. 000' },
    ],
  },
  sides: {
    title: 'SIDES',
    items: [
      { name: 'RAITA', note: '(Butter or no Butter)', price: 'RS. 000' },
      { name: 'PICKLE', note: '(Butter or no Butter)', price: 'RS. 000' },
      { name: 'SALAD', note: '(Butter or no Butter)', price: 'RS. 000' },
      { name: 'CHUTNEY', note: '(Butter or no Butter)', price: 'RS. 000' },
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