import { useState } from "react"
import Image from 'next/image'

interface ToggleProps {
  size: number;
  onClick: (active: boolean) => void;
}

export default function Toggle({size, onClick}: ToggleProps) {
  const [active, setActive] = useState(true);

  return (
    <button
      onClick={() => {
        setActive(!active)
        onClick(!active)
      }}
      style={{
        width: `calc(12rem * ${size})`, 
        height: `calc(5rem * ${size})`,
      }}
      className={`relative flex items-center p-2 w-48 h-20 border-5 rounded-full transition-all duration-300 ${
        active ? "bg-cyan-400" : "bg-gray-400"
      }`}
    >
      {/* The Moving Handle */}
      <div
        style={{ 
          width: `calc(4rem * ${size})`, 
          height: `calc(4rem * ${size})`,
          transform: active ? `translateX(${size * 4}px)` : `translateX(calc(7rem * ${size} + ${size * 4}px))`
        }}
        className={`absolute bg-white rounded-full border-5 transition-transform duration-300`}
      />

      {/* The Icons */}
      <div className="flex justify-between w-full z-10 pointer-events-none">
        <Image 
          src="/assets/moon.svg" 
          width={size * 70} height={size * 70} 
          className={`transition-opacity ${!active ? "opacity-100" : "opacity-0"}`} 
          alt="moon"
        />
        <Image 
          src="/assets/sun.svg" 
          width={size * 70} height={size * 70} 
          className={`transition-opacity ${active ? "opacity-100" : "opacity-0"}`} 
          alt="sun"
        />
      </div>
    </button>
  );
}