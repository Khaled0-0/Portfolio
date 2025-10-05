'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
   id: number
   x: number
   y: number
   size: number
   opacity: number
   color: string
   rotation: number
   velocityX: number
   velocityY: number
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

      let animationFrameId: number

      const updateMousePosition = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY })

         // Create particles that spread out from cursor
         const angle = Math.random() * Math.PI * 2
         const velocity = Math.random() * 2 + 1

         const newParticle: Particle = {
            id: particleIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 10 + 6,
            opacity: 1,
            color: colorsRef.current[Math.floor(Math.random() * colorsRef.current.length)],
            rotation: Math.random() * 360,
            velocityX: Math.cos(angle) * velocity,
            velocityY: Math.sin(angle) * velocity,
         }

         setParticles(prev => [...prev.slice(-15), newParticle])
      }

      // Animate particles spreading out
      const animateParticles = () => {
         setParticles(prev =>
            prev
               .map(p => ({
                  ...p,
                  x: p.x + p.velocityX * 2,
                  y: p.y + p.velocityY * 2,
                  opacity: p.opacity - 0.04,
                  rotation: p.rotation + 2,
               }))
               .filter(p => p.opacity > 0)
         )
         animationFrameId = requestAnimationFrame(animateParticles)
      }

      if (typeof window !== 'undefined') {
         window.addEventListener('mousemove', updateMousePosition)
         animateParticles()
      }

      return () => {
         if (typeof window !== 'undefined') {
            window.removeEventListener('mousemove', updateMousePosition)
         }
         if (animationFrameId) {
            cancelAnimationFrame(animationFrameId)
         }
      }
   }, [])

   // Don't render until mounted (prevents SSR issues)
   if (!isMounted) {
      return null
   }

   return (
      <>
         {/* Main cursor - smaller and optimized */}
         <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
               x: mousePosition.x - 6,
               y: mousePosition.y - 6,
            }}
         >
            <div className="w-3 h-3 bg-primary-500 dark:bg-primary-400 rounded-full shadow-lg shadow-primary-500/50" />
         </motion.div>

         {/* Spreading meteor particles */}
         {particles.map((particle) => {
            // Safety check for valid positions
            if (!isFinite(particle.x) || !isFinite(particle.y)) return null
            
            return (
               <div
                  key={particle.id}
                  className="fixed top-0 left-0 pointer-events-none z-[9998]"
                  style={{
                     left: `${particle.x - particle.size / 2}px`,
                     top: `${particle.y - particle.size / 2}px`,
                     opacity: particle.opacity,
                     transform: `scale(${Math.max(0, particle.opacity)}) rotate(${particle.rotation}deg)`,
                     willChange: 'transform, opacity',
                  }}
               >
                  <div
                     className={`bg-gradient-to-br ${particle.color} rounded-full shadow-lg`}
                     style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                     }}
                  />
               </div>
            )
         })}

         {/* Single optimized glow */}
         <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            style={{
               x: mousePosition.x - 15,
               y: mousePosition.y - 15,
            }}
         >
            <div className="w-[30px] h-[30px] bg-primary-500/20 dark:bg-primary-400/20 rounded-full blur-md" />
         </motion.div>
      </>
   )
}

