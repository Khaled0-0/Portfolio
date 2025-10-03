'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
   SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
   SiHtml5, SiMongodb, SiGit, SiFigma, SiSocketdotio, SiNodedotjs, SiExpress,
   SiOpenai, SiClaude, SiVercel
} from 'react-icons/si'
import {
   HiDeviceMobile, HiLightningBolt, HiCode, HiCube, HiSparkles,
   HiCloud, HiServer, HiDatabase, HiCheckCircle, HiChip
} from 'react-icons/hi'
import { MdAccessibility } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'

const mainSkills = [
   { name: 'React.js', icon: SiReact, color: '#61DAFB', category: 'Frontend', level: 'Expert' },
   { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#ffffff', category: 'Frontend', level: 'Expert' },
   { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend', level: 'Advanced' },
   { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend', level: 'Expert' },
   { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend', level: 'Expert' },
   { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend', level: 'Expert' },
   { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Backend', level: 'Intermediate' },
   { name: 'Node.js', icon: SiNodedotjs, color: '#68a063', category: 'Backend', level: 'Intermediate' },
   { name: 'Rapid API', icon: HiLightningBolt, color: '#0066FF', darkColor: '#0ea5e9', category: 'Backend', level: 'Advanced' },
   { name: 'Socket.IO', icon: SiSocketdotio, color: '#25c2a0', category: 'Backend', level: 'Intermediate' },
   { name: 'Git/GitHub', icon: SiGit, color: '#F05032', category: 'Tools', level: 'Advanced' },
   { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Tools', level: 'Advanced' },
   { name: 'Vercel', icon: SiVercel, color: '#000000', darkColor: '#ffffff', category: 'Tools', level: 'Expert' },
]

const aiTools = [
   { name: 'Cursor AI', icon: HiChip, color: '#0ea5e9', darkColor: '#0ea5e9', category: 'AI', level: 'Expert' },
   { name: 'ChatGPT', icon: SiOpenai, color: '#10a37f', darkColor: '#10a37f', category: 'AI', level: 'Expert' },
   { name: 'Claude AI', icon: SiClaude, color: '#8b5cf6', darkColor: '#8b5cf6', category: 'AI', level: 'Expert' },
]

const additionalSkills = [
   { name: 'Responsive Design', icon: HiDeviceMobile, color: '#0ea5e9', sparkleColor: 'text-blue-400' },
   { name: 'Web Accessibility', icon: MdAccessibility, color: '#10b981', sparkleColor: 'text-green-400' },
   { name: 'SEO Optimization', icon: FaSearch, color: '#8b5cf6', sparkleColor: 'text-purple-400' },
   { name: 'Performance', icon: HiLightningBolt, color: '#f59e0b', sparkleColor: 'text-orange-400' },
   { name: 'REST APIs', icon: HiCode, color: '#06b6d4', sparkleColor: 'text-cyan-400' },
   { name: 'Framer Motion', icon: HiSparkles, color: '#ec4899', sparkleColor: 'text-pink-400' },
   { name: 'React Hooks', icon: HiCube, color: '#61DAFB', sparkleColor: 'text-sky-400' },
   { name: 'State Management', icon: HiDatabase, color: '#a855f7', sparkleColor: 'text-violet-400' },
   { name: 'Express.js', icon: HiServer, color: '#94a3b8', sparkleColor: 'text-slate-400' },
   { name: 'Deployment', icon: HiCloud, color: '#0ea5e9', sparkleColor: 'text-indigo-400' },
]

export default function Skills() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: '0px', amount: 0.1 })
   const [activeCategory, setActiveCategory] = useState<string>('all')

   const allSkills = [...mainSkills, ...aiTools]

   const filteredSkills = activeCategory === 'all'
      ? allSkills
      : allSkills.filter(skill => skill.category.toLowerCase() === activeCategory)

   return (
      <section id="skills" className="section-container bg-dark-50 dark:bg-dark-900/50 relative overflow-hidden" ref={ref}>
         {/* Decorative Background Elements */}
         <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10"
         >
            {/* Section Header */}
            <div className="text-center mb-12">
               <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
               >
                  Skills & <span className="gradient-text">Expertise</span>
               </motion.h2>
               <motion.p
                  className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 }}
               >
                  Crafting exceptional web experiences with cutting-edge technologies
               </motion.p>
            </div>

            {/* Category Filter */}
            <motion.div
               className="flex justify-start md:justify-center gap-3 mb-12 overflow-x-auto pb-2 px-4 scrollbar-hide"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ delay: 0.6 }}
            >
               {['all', 'frontend', 'backend', 'tools', 'ai'].map((category) => (
                  <button
                     key={category}
                     onClick={() => setActiveCategory(category)}
                     className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeCategory === category
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700 border-2 border-dark-200 dark:border-dark-700'
                        }`}
                  >
                     {category === 'ai' ? 'AI Tools' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
               ))}
            </motion.div>

            {/* Main Skills Grid */}
            <motion.div
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16"
               layout
            >
               {filteredSkills.map((skill, index) => (
                  <motion.div
                     key={skill.name}
                     layout
                     className="group relative bg-white dark:bg-dark-800 rounded-2xl p-5 border-2 border-dark-200/50 dark:border-dark-700/50 hover:border-primary-500 dark:hover:border-primary-500 shadow-md hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.8 }}
                     transition={{ delay: index * 0.03 }}
                     whileHover={{ y: -8, scale: 1.05 }}
                  >
                     {/* Floating Particles */}
                     <motion.div
                        className="absolute top-2 right-2"
                        animate={{
                           y: [0, -4, 0],
                           rotate: [0, 10, 0],
                           scale: [1, 1.1, 1],
                        }}
                        transition={{
                           duration: 2 + index * 0.2,
                           repeat: Infinity,
                           ease: "easeInOut"
                        }}
                     >
                        <HiSparkles className="w-4 h-4 text-primary-500 drop-shadow-lg" />
                     </motion.div>

                     {/* Pulsing Glow Orb */}
                     <motion.div
                        className="absolute top-3 left-3 w-2 h-2 rounded-full bg-primary-500"
                        animate={{
                           scale: [1, 1.5, 1],
                           opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                           duration: 2,
                           repeat: Infinity,
                           delay: index * 0.1,
                        }}
                     />

                     {/* Icon */}
                     <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                           <skill.icon
                              className="w-10 h-10 transition-all duration-300 group-hover:scale-110 dark:hidden"
                              style={{ color: skill.color }}
                           />
                           <skill.icon
                              className="w-10 h-10 transition-all duration-300 group-hover:scale-110 hidden dark:block"
                              style={{ color: skill.darkColor || skill.color }}
                           />
                        </div>
                        <span className="font-bold text-sm text-dark-900 dark:text-white">{skill.name}</span>
                     </div>

                     {/* Hover Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </motion.div>
               ))}
            </motion.div>

            {/* Additional Skills */}
            <motion.div
               className="max-w-6xl mx-auto"
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ delay: 0.8 }}
            >
               <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                     Additional <span className="gradient-text">Expertise</span>
                  </h3>
                  <p className="text-lg text-dark-600 dark:text-dark-400">More tools and methodologies I master</p>
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {additionalSkills.map((skill, index) => (
                     <motion.div
                        key={skill.name}
                        className="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-dark-200/50 dark:border-dark-700/50 hover:border-primary-500 dark:hover:border-primary-500 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.9 + index * 0.04 }}
                        whileHover={{ y: -10, scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        {/* Floating Sparkle - Different Colors */}
                        <motion.div
                           className="absolute top-2 right-2"
                           animate={{
                              rotate: [0, 360],
                              scale: [1, 1.3, 1],
                              opacity: [0.6, 1, 0.6],
                           }}
                           transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.2,
                           }}
                        >
                           <HiSparkles className={`w-5 h-5 ${skill.sparkleColor} drop-shadow-lg`} />
                        </motion.div>

                        {/* Pulsing Dot */}
                        <motion.div
                           className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-primary-500"
                           animate={{
                              scale: [1, 2, 1],
                              opacity: [0.3, 1, 0.3],
                           }}
                           transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.15,
                           }}
                        />

                        <div className="flex flex-col items-center gap-3">
                           {/* Icon Container */}
                           <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                              <skill.icon
                                 className="w-9 h-9 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                                 style={{ color: skill.color }}
                              />
                           </div>

                           {/* Skill Name - Smaller */}
                           <span className="text-sm font-bold text-center text-dark-900 dark:text-white leading-tight group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300 not-italic px-2">{skill.name}</span>
                        </div>

                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-purple-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-purple-500/5 group-hover:to-primary-500/10 transition-all duration-300 rounded-2xl pointer-events-none" />
                     </motion.div>
                  ))}
               </div>
            </motion.div>

            {/* Skill Highlights */}
            <motion.div
               className="mt-16 max-w-4xl mx-auto"
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ delay: 1.2 }}
            >
               <div className="bg-gradient-to-r from-primary-500/10 via-primary-600/10 to-primary-500/10 dark:from-primary-500/20 dark:via-primary-600/20 dark:to-primary-500/20 rounded-2xl p-8 border border-primary-500/20 dark:border-primary-500/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                     <div>
                        <HiSparkles className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                        <h4 className="font-bold text-dark-900 dark:text-white mb-1">Modern Stack</h4>
                        <p className="text-sm text-dark-600 dark:text-dark-400">Latest technologies & best practices</p>
                     </div>
                     <div>
                        <HiLightningBolt className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                        <h4 className="font-bold text-dark-900 dark:text-white mb-1">Fast Development</h4>
                        <p className="text-sm text-dark-600 dark:text-dark-400">Efficient workflow & rapid delivery</p>
                     </div>
                     <div>
                        <HiCheckCircle className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                        <h4 className="font-bold text-dark-900 dark:text-white mb-1">Production Ready</h4>
                        <p className="text-sm text-dark-600 dark:text-dark-400">Scalable & maintainable code</p>
                     </div>
                  </div>
               </div>
            </motion.div>
         </motion.div>
      </section>
   )
}
