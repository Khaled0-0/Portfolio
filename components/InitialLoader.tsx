'use client'

import { useEffect, useState } from 'react'

export default function InitialLoader() {
   const [show, setShow] = useState(true)

   useEffect(() => {
      // Hide loader after a short delay to ensure React has mounted
      const timer = setTimeout(() => {
         setShow(false)
      }, 100)

      return () => clearTimeout(timer)
   }, [])

   if (!show) return null

   return (
      <div className="fixed inset-0 bg-white dark:bg-dark-950 z-50 flex items-center justify-center">
         <div className="animate-pulse">
            <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
         </div>
      </div>
   )
}
