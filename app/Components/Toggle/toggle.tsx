import { useState } from "react"
import Image from 'next/image'

interface ToggleProps {
  size: string;
}

export default function Toggle({size}: ToggleProps) {
  const [active, setActive] = useState(true);

  return (
    <button
      onClick={() => setActive(!active)}
      className={`relative flex items-center p-2 w-48 h-20 m-1.25 outline-5 rounded-full transition-all duration-300 ${
        active ? "bg-cyan-400" : "bg-gray-400"
      }`}
    >
      {/* The Moving Handle */}
      <div
        className={`absolute bg-white rounded-full w-16 h-16 border-5 transition-transform duration-300 ${
          active ? "translate-x-0" : "translate-x-28"
        }`}
      />

      {/* The Icons */}
      <div className="flex justify-between w-full z-10 pointer-events-none">
        <Image 
          src="/assets/moon.svg" 
          width={70} height={70} 
          className={`transition-opacity -ml-1 ${!active ? "opacity-100" : "opacity-0"}`} 
          alt="moon"
        />
        <Image 
          src="/assets/sun.svg" 
          width={70} height={70} 
          className={`transition-opacity -ml-1 ${active ? "opacity-100" : "opacity-0"}`} 
          alt="sun"
        />
      </div>
    </button>
  );
}