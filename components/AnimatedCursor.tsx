'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
   id: number
   x: number
   y: number
   size: number
   color: string
}

export default function AnimatedCursor() {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
   const [particles, setParticles] = useState<Particle[]>([])
   const [isMounted, setIsMounted] = useState(false)
   const particleIdRef = useRef(0)

   const colorsRef = useRef([
      'from-primary-500 via-primary-400 to-blue-300',
      'from-blue-500 via-cyan-400 to-teal-300',
      'from-purple-500 via-pink-400 to-rose-300',
      'from-primary-400 via-sky-300 to-blue-200',
   ])

   useEffect(() => {
      // Ensure we're in the browser
      setIsMounted(true)

      // Check if we're on a mobile device
      if (typeof window !== 'undefined' && 'ontouchstart' in window) {
         return // Don't show cursor on touch devices
      }

      const updateMousePosition = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY })

         // Create particles that follow cursor
         const newParticle: Particle = {
            id: particleIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 8 + 4,
            color: colorsRef.current[Math.floor(Math.random() * colorsRef.current.length)],
         }

         setParticles(prev => {
            const updated = [...prev, newParticle]
            // Keep only last 12 particles
            return updated.slice(-12)
         })

         // Remove particle after animation
         setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== newParticle.id))
         }, 600)
      }

      if (typeof window !== 'undefined') {
         window.addEventListener('mousemove', updateMousePosition)
      }

      return () => {
         if (typeof window !== 'undefined') {
            window.removeEventListener('mousemove', updateMousePosition)
         }
      }
   }, [])

   // Don't render until mounted (prevents SSR issues)
   if (!isMounted) {
      return null
   }

   return (
      <>
         {/* Main cursor */}
         <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            animate={{
               x: mousePosition.x - 6,
               y: mousePosition.y - 6,
            }}
            transition={{
               type: "spring",
               stiffness: 500,
               damping: 28,
            }}
         >
            <div className="w-3 h-3 bg-primary-500 dark:bg-primary-400 rounded-full shadow-lg shadow-primary-500/50" />
         </motion.div>

         {/* Trailing particles with proper animation */}
         <AnimatePresence>
            {particles.map((particle) => (
               <motion.div
                  key={particle.id}
                  className="fixed pointer-events-none z-[9998]"
                  initial={{
                     x: particle.x - particle.size / 2,
                     y: particle.y - particle.size / 2,
                     scale: 1,
                     opacity: 1,
                  }}
                  animate={{
                     x: particle.x - particle.size / 2,
                     y: particle.y - particle.size / 2,
                     scale: 0,
                     opacity: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                     duration: 0.6,
                     ease: "easeOut",
                  }}
               >
                  <div
                     className={`bg-gradient-to-br ${particle.color} rounded-full shadow-lg`}
                     style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                     }}
                  />
               </motion.div>
            ))}
         </AnimatePresence>

         {/* Glow effect */}
         <motion.div
            className="fixed pointer-events-none z-[9997]"
            animate={{
               x: mousePosition.x - 15,
               y: mousePosition.y - 15,
            }}
            transition={{
               type: "spring",
               stiffness: 150,
               damping: 15,
            }}
         >
            <div className="w-[30px] h-[30px] bg-primary-500/20 dark:bg-primary-400/20 rounded-full blur-md" />
         </motion.div>
      </>
   )
}

