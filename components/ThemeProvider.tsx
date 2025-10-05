'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
   theme: Theme
   toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
   const [theme, setTheme] = useState<Theme>('light')
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      const initialTheme = savedTheme || systemTheme
      setTheme(initialTheme)
      // Only update if different from what's already set
      if (initialTheme === 'dark' && !document.documentElement.classList.contains('dark')) {
         document.documentElement.classList.add('dark')
      } else if (initialTheme === 'light' && document.documentElement.classList.contains('dark')) {
         document.documentElement.classList.remove('dark')
      }
   }, [])

   const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
   }

   if (!mounted) {
      return <>{children}</>
   }

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}

export function useTheme() {
   const context = useContext(ThemeContext)
   if (context === undefined) {
      // Return default values instead of throwing error (for SSR compatibility)
      return {
         theme: 'light' as Theme,
         toggleTheme: () => { }
      }
   }
   return context
}

