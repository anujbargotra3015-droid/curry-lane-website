import React from 'react';

// 1. Define a type for the Icon props
interface IconProps {
  color: string;
}

// 2. Define a type for the FeatureCard props
interface FeatureCardProps {
  bgColor: string;
  textColor: string;
  iconColor?: string; // Optional since it's passed but not strictly used inside the card logic
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyUs() {
  return (
    <section className="w-full font-sans">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* --- HEADER SECTION --- */}
      <div className="bg-white py-16 text-center px-4">
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-[#EF2F2A] uppercase leading-tight tracking-wide">
          What Makes Curry
          <br />
          Lane Unique?
        </h2>
      </div>

      {/* --- FEATURES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        
        {/* ITEM 1: Drive-Thru Ease (Red) */}
        <FeatureCard 
          bgColor="bg-[#EF2F2A]" 
          textColor="text-white" 
          title="Drive-Thru Ease"
          description="Fresh Indian food without ever stepping out of your car."
          icon={<IconDriveThru color="#FCC93B" />}
        />

        {/* ITEM 2: Authentic Flavors (Yellow) */}
        <FeatureCard 
          bgColor="bg-[#FCC93B]" 
          textColor="text-[#EF2F2A]" 
          title="Authentic Flavors"
          description="Our chefs bring you signature curries, snacks & biryanis made from time-tested recipes."
          icon={<IconSpice color="#EF2F2A" />}
        />

        {/* ITEM 3: Mess-Free Packaging (Red) */}
        <FeatureCard 
          bgColor="bg-[#EF2F2A]" 
          textColor="text-white" 
          title="Mess-Free Packaging"
          description="Designed for the road – easy to carry, eat, and enjoy."
          icon={<IconContainer color="#FCC93B" />}
        />

        {/* ITEM 4: Fast & Affordable (Yellow) */}
        <FeatureCard 
          bgColor="bg-[#FCC93B]" 
          textColor="text-[#EF2F2A]" 
          title="Fast & Affordable"
          description="Delicious, high-quality meals served quick – all without breaking the bank."
          icon={<IconPrice color="#EF2F2A" />}
        />

        {/* ITEM 5: Tech-Enabled Service (Red) */}
        <FeatureCard 
          bgColor="bg-[#EF2F2A]" 
          textColor="text-white" 
          title="Tech-Enabled Service"
          description="Seamless digital ordering for smooth pickups & future deliveries."
          icon={<IconTech color="#FCC93B" />}
        />

      </div>
    </section>
  );
}

// --- REUSABLE CARD COMPONENT ---
function FeatureCard({ bgColor, textColor, title, description, icon }: FeatureCardProps) {
  return (
    <div className={`${bgColor} ${textColor} p-8 py-16 flex flex-col items-center text-center`}>
      <h3 className="font-bold text-lg mb-10">{title}</h3>
      
      {/* Icon Wrapper */}
      <div className="mb-10 h-24 w-24 flex items-center justify-center">
        {icon}
      </div>
      
      <p className="text-xs leading-relaxed opacity-90 font-medium max-w-[200px]">
        {description}
      </p>
    </div>
  );
}

// --- CUSTOM SVG ICONS (Typed) ---

const IconDriveThru = ({ color }: IconProps) => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 30 L80 30 L90 45 L10 45 Z" /> 
    <rect x="25" y="45" width="50" height="40" />
    <path d="M10 90 L90 90" strokeWidth="4" />
    <circle cx="15" cy="65" r="10" />
    <path d="M25 65 L25 65" />
  </svg>
);

const IconSpice = ({ color }: IconProps) => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.5">
    <circle cx="50" cy="50" r="5" fill={color} />
    <path d="M50 20 Q60 40 50 50 Q40 40 50 20Z" />
    <path d="M50 80 Q60 60 50 50 Q40 60 50 80Z" />
    <path d="M80 50 Q60 60 50 50 Q60 40 80 50Z" />
    <path d="M20 50 Q40 60 50 50 Q40 40 20 50Z" />
    <path d="M70 30 Q60 45 50 50 Q55 40 70 30Z" />
    <path d="M30 70 Q40 55 50 50 Q45 60 30 70Z" />
    <path d="M70 70 Q60 55 50 50 Q55 60 70 70Z" />
    <path d="M30 30 Q40 45 50 50 Q45 40 30 30Z" />
  </svg>
);

const IconContainer = ({ color }: IconProps) => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="15" y="30" width="70" height="10" rx="3" />
    <path d="M20 40 L25 75 Q27 85 50 85 Q73 85 75 75 L80 40" />
    <rect x="40" y="25" width="20" height="10" rx="2" />
    <path d="M15 35 L10 35 L10 45 M85 35 L90 35 L90 45" />
  </svg>
);

const IconPrice = ({ color }: IconProps) => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="70" cy="30" r="15" strokeWidth="3" />
    <path d="M66 25 L66 28 M74 25 L74 28 M70 24 L70 36" strokeWidth="2.5" />
    <path d="M66 28 C64 28 64 30 66 30 L74 30 C76 30 76 32 74 32 L66 32" strokeWidth="2.5" />
    <path d="M20 60 L40 55 L65 65 L70 60" />
    <path d="M40 55 L35 75 L15 80 L10 70 Z" />
    <path d="M60 66 Q65 75 50 80 L35 75" />
  </svg>
);

const IconTech = ({ color }: IconProps) => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="30" y="15" width="40" height="70" rx="5" />
    <path d="M45 20 L55 20" />
    <path d="M50 50 L50 65 L60 65 L60 85" />
    <circle cx="50" cy="50" r="8" strokeOpacity="0.5" />
    <path d="M50 40 L50 45" strokeOpacity="0.5" />
  </svg>
);