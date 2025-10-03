'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown, HiSparkles } from 'react-icons/hi'
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss } from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
   const scrollToSection = (href: string) => {
      const element = document.querySelector(href)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
      }
   }

   return (
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
         {/* Animated Background */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
         </div>

         <div className="section-container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
               {/* Text Content */}
               <motion.div
                  className="flex-1 text-center lg:text-left w-full px-4 sm:px-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     className="mb-4"
                  >
                     <span className="text-primary-500 font-medium text-2xl sm:text-3xl">Hi, I&apos;m</span>
                  </motion.div>

                  <motion.h1
                     className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 break-words sm:whitespace-nowrap leading-tight"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                  >
                     Khaled Nasser
                  </motion.h1>

                  <motion.div
                     className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 h-20 sm:h-24"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                  >
                     <TypeAnimation
                        sequence={[
                           'Frontend Developer',
                           2000,
                           'React.js Specialist',
                           2000,
                           'UI/UX Enthusiast',
                           2000,
                           'Problem Solver',
                           2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="gradient-text"
                        repeat={Infinity}
                     />
                  </motion.div>

                  <motion.p
                     className="text-lg sm:text-xl md:text-2xl text-dark-600 dark:text-dark-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.7 }}
                  >
                     I craft <span className="text-primary-500 font-semibold">pixel-perfect web applications</span> that combine{' '}
                     <span className="font-semibold">stunning design</span>, <span className="font-semibold">blazing-fast performance</span>, and{' '}
                     <span className="font-semibold">buttery-smooth animations</span> to deliver exceptional digital experiences.
                  </motion.p>

                  <motion.div
                     className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.9 }}
                  >
                     <motion.button
                        onClick={() => scrollToSection('#projects')}
                        className="btn-primary w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        View My Work
                     </motion.button>
                     <motion.button
                        onClick={() => scrollToSection('#contact')}
                        className="btn-outline w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        Contact Me
                     </motion.button>
                  </motion.div>
               </motion.div>

               {/* Profile Image */}
               <motion.div
                  className="flex-1 flex flex-col items-center gap-6 sm:gap-8 w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
               >
                  {/* Profile Image Circle */}
                  <motion.div
                     className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.3 }}
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-3xl opacity-20 animate-pulse" />
                     <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500/50 shadow-2xl">
                        <Image
                           src="/images/profile.jpeg"
                           alt="Khaled Nasser"
                           fill
                           className="object-cover"
                           priority
                        />
                     </div>

                     {/* Sparkle Effects Around Image */}
                     <motion.div
                        className="absolute -top-4 -right-4"
                        animate={{
                           scale: [1, 1.3, 1],
                           opacity: [0.7, 1, 0.7],
                           rotate: [0, 180, 360]
                        }}
                        transition={{
                           duration: 3,
                           repeat: Infinity,
                           ease: "easeInOut"
                        }}
                     >
                        <HiSparkles className="text-3xl text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]" />
                     </motion.div>

                     <motion.div
                        className="absolute -bottom-6 -left-6"
                        animate={{
                           scale: [1, 1.4, 1],
                           opacity: [0.6, 1, 0.6],
                           rotate: [0, -180, -360]
                        }}
                        transition={{
                           duration: 3.5,
                           repeat: Infinity,
                           delay: 0.5,
                           ease: "easeInOut"
                        }}
                     >
                        <HiSparkles className="text-4xl text-pink-400 drop-shadow-[0_0_12px_rgba(244,114,182,0.9)]" />
                     </motion.div>

                     <motion.div
                        className="absolute top-1/4 -left-6"
                        animate={{
                           scale: [1, 1.2, 1],
                           opacity: [0.5, 1, 0.5],
                           rotate: [0, 120, 240]
                        }}
                        transition={{
                           duration: 4,
                           repeat: Infinity,
                           delay: 1,
                           ease: "easeInOut"
                        }}
                     >
                        <HiSparkles className="text-2xl text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                     </motion.div>

                     <motion.div
                        className="absolute bottom-1/3 -right-6"
                        animate={{
                           scale: [1, 1.3, 1],
                           opacity: [0.6, 1, 0.6],
                           rotate: [0, 90, 180]
                        }}
                        transition={{
                           duration: 3.2,
                           repeat: Infinity,
                           delay: 1.5,
                           ease: "easeInOut"
                        }}
                     >
                        <HiSparkles className="text-2xl text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                     </motion.div>
                  </motion.div>

                  {/* Tech Stack Icons - Clean Row Below */}
                  <motion.div
                     className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap max-w-xs sm:max-w-sm mb-16 sm:mb-20"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8 }}
                  >
                     {/* React */}
                     <motion.div
                        className="group relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 }}
                        whileHover={{
                           scale: 1.2,
                           y: -8,
                           rotate: 360,
                           transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/60">
                           <SiReact className="text-xl sm:text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
                        </div>
                     </motion.div>

                     {/* Next.js */}
                     <motion.div
                        className="group relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0 }}
                        whileHover={{
                           scale: 1.2,
                           y: -8,
                           rotate: -360,
                           transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/60">
                           <SiNextdotjs className="text-xl sm:text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
                        </div>
                     </motion.div>

                     {/* TypeScript */}
                     <motion.div
                        className="group relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 }}
                        whileHover={{
                           scale: 1.2,
                           y: -8,
                           rotate: 360,
                           transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/60">
                           <SiTypescript className="text-xl sm:text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
                        </div>
                     </motion.div>

                     {/* Tailwind CSS */}
                     <motion.div
                        className="group relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 }}
                        whileHover={{
                           scale: 1.2,
                           y: -8,
                           rotate: -360,
                           transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/60">
                           <SiTailwindcss className="text-xl sm:text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
                        </div>
                     </motion.div>

                     {/* JavaScript */}
                     <motion.div
                        className="group relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 }}
                        whileHover={{
                           scale: 1.2,
                           y: -8,
                           rotate: 360,
                           transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-yellow-500/60">
                           <SiJavascript className="text-xl sm:text-2xl text-black transition-transform duration-300 group-hover:scale-110" />
                        </div>
                     </motion.div>
                  </motion.div>
               </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
               className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
            >
               <HiArrowDown className="w-7 h-7 sm:w-8 sm:h-8 text-primary-500" />
            </motion.div>
         </div>
      </section>
   )
}

