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
   const particleIdRef = useRef(0)

   const colorsRef = useRef([
      'from-primary-500 via-primary-400 to-blue-300',
      'from-blue-500 via-cyan-400 to-teal-300',
      'from-purple-500 via-pink-400 to-rose-300',
      'from-primary-400 via-sky-300 to-blue-200',
   ])

   useEffect(() => {
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

      window.addEventListener('mousemove', updateMousePosition)
      animateParticles()

      return () => {
         window.removeEventListener('mousemove', updateMousePosition)
         cancelAnimationFrame(animationFrameId)
      }
   }, [])

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
         {particles.map((particle) => (
            <div
               key={particle.id}
               className="fixed top-0 left-0 pointer-events-none z-[9998]"
               style={{
                  left: particle.x - particle.size / 2,
                  top: particle.y - particle.size / 2,
                  opacity: particle.opacity,
                  transform: `scale(${particle.opacity}) rotate(${particle.rotation}deg)`,
                  transition: 'opacity 0.1s ease-out',
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
         ))}

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

