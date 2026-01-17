import { useState } from "react"
import Image from 'next/image'

import Sun from "../sun.svg"

export default function Toggle() {
  const [active, setActive] = useState(true)

  return (
    <button 
      style={{ borderRadius: "12rem", background: active ? "#00E6FF" : "#BABABA"}}
      className={`flex justify-between items-center p-3 border-5 transition-all duration-200`}
      // className="grid grid-cols-2 gap-7 p-3 border-5 transition-all duration-200"
      onClick={() => setActive(!active)}
    >
      <div className={`bg-white border-5 rounded-full w-20 h-20 transition-all duration-200 ${active ? "translate-x-full" : "translate-x-0"}`}></div>
      <Image
        className={`transition-all duration-200 ${active ? "-translate-x-full to-sun" : "translate-x-0 to-moon"}`}
        src={active ? "assets/sun.svg" : "assets/moon.svg"}
        width={80}
        height={80}
        alt="Picture of the author"
      />
    </button>
  )
}