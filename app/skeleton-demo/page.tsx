'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SkeletonHero from '@/components/SkeletonHero'
import SkeletonAbout from '@/components/SkeletonAbout'
import SkeletonSkills from '@/components/SkeletonSkills'
import SkeletonProjects from '@/components/SkeletonProjects'
import SkeletonContact from '@/components/SkeletonContact'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

type Section = 'hero' | 'about' | 'skills' | 'projects' | 'contact'

export default function SkeletonDemo() {
   const [activeSection, setActiveSection] = useState<Section>('hero')
   const [showSkeleton, setShowSkeleton] = useState(true)

   const sections: { id: Section; label: string }[] = [
      { id: 'hero', label: 'Hero' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
   ]

   const handleToggle = () => {
      if (!showSkeleton) {
         setShowSkeleton(true)
      } else {
         setShowSkeleton(false)
      }
   }

   return (
      <main className="min-h-screen">
         {/* Control Panel */}
         <div className="fixed top-20 left-0 right-0 z-50 bg-white dark:bg-dark-800 shadow-lg border-b border-dark-200 dark:border-dark-700">
            <div className="max-w-7xl mx-auto px-4 py-4">
               <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Section Tabs */}
                  <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                     {sections.map((section) => (
                        <button
                           key={section.id}
                           onClick={() => setActiveSection(section.id)}
                           className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${activeSection === section.id
                                 ? 'bg-primary-500 text-white shadow-lg'
                                 : 'bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600'
                              }`}
                        >
                           {section.label}
                        </button>
                     ))}
                  </div>

                  {/* Toggle Button */}
                  <button
                     onClick={handleToggle}
                     className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 shadow-lg ${showSkeleton
                           ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl'
                           : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-xl'
                        }`}
                  >
                     {showSkeleton ? '⚡ Load Content' : '💀 Show Skeleton'}
                  </button>
               </div>

               {/* Info Banner */}
               <motion.div
                  className="mt-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-700"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
               >
                  <p className="text-sm text-dark-700 dark:text-dark-300 text-center">
                     <span className="font-bold text-primary-600 dark:text-primary-400">
                        {showSkeleton ? '💀 Skeleton Mode' : '✨ Content Loaded'}
                     </span>
                     {' - '}
                     Switch between sections to see different skeleton states. Works in both light & dark mode! 🌓
                  </p>
               </motion.div>
            </div>
         </div>

         {/* Content Area with padding for fixed header */}
         <div className="pt-44">
            {showSkeleton ? (
               <>
                  {activeSection === 'hero' && <SkeletonHero />}
                  {activeSection === 'about' && <SkeletonAbout />}
                  {activeSection === 'skills' && <SkeletonSkills />}
                  {activeSection === 'projects' && <SkeletonProjects />}
                  {activeSection === 'contact' && <SkeletonContact />}
               </>
            ) : (
               <>
                  {activeSection === 'hero' && <Hero />}
                  {activeSection === 'about' && <About />}
                  {activeSection === 'skills' && <Skills />}
                  {activeSection === 'projects' && <Projects />}
                  {activeSection === 'contact' && <Contact />}
               </>
            )}
         </div>
      </main>
   )
}

