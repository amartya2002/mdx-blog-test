'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitch() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full  px-3 py-2    duration-200  "
      onClick={() => setTheme(otherTheme)}
    >
      <Sun className="h-5 w-5 transition dark:hidden [@media(prefers-color-scheme:dark)]:group-hover:stroke-blue-500" />
      
      <MoonStar className="hidden h-5 w-5  stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-blue-500 " />
    </button>
  )
}

export default ThemeSwitch
