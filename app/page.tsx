'use client'

import { useEffect, useState } from "react";
import Toggle from "./Components/Toggle/toggle"
export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log('darkMode', darkMode)
  }, [darkMode])

  return (
    <div className={`h-dvh p-4 md:p-8 transition-all duration-300 ${darkMode ? "bg-gray-600" : "bg-gray-100"}`}>
      <Toggle size={2} onClick={(active: boolean) => setDarkMode(!active)} />
    </div>
  );
}
