'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'
import { useTheme } from '@/components/ThemeProvider'

// Import skeleton components
import SkeletonHero from '@/components/SkeletonHero'
import SkeletonAbout from '@/components/SkeletonAbout'
import SkeletonSkills from '@/components/SkeletonSkills'
import SkeletonProjects from '@/components/SkeletonProjects'
import SkeletonContact from '@/components/SkeletonContact'
import InitialLoader from '@/components/InitialLoader'

export const dynamic = 'force-dynamic'

export default function Home() {
   const { theme } = useTheme()
   const [loaded, setLoaded] = useState({
      hero: false,
      about: false,
      skills: false,
      projects: false,
      contact: false
   })

   useEffect(() => {
      // Show skeletons immediately, then load content with delays
      const timers = [
         setTimeout(() => setLoaded(prev => ({ ...prev, hero: true })), 1000),
         setTimeout(() => setLoaded(prev => ({ ...prev, about: true })), 1500),
         setTimeout(() => setLoaded(prev => ({ ...prev, skills: true })), 2000),
         setTimeout(() => setLoaded(prev => ({ ...prev, projects: true })), 2500),
         setTimeout(() => setLoaded(prev => ({ ...prev, contact: true })), 3000),
      ]

      return () => timers.forEach(clearTimeout)
   }, [])

   return (
      <>
         <InitialLoader />
         <main className="overflow-x-hidden min-h-screen">
            <div className="relative z-20 min-h-screen bg-white dark:bg-dark-950">
               {loaded.hero ? <Hero /> : <SkeletonHero />}
            </div>
            <div className="relative">
               {/* Stars Background - fixed to viewport so stars show on ALL sections */}
               <StarsBackground
                  starColor={theme === 'dark' ? '#fff' : '#000'}
                  pointerEvents={false}
                  className="fixed inset-0 top-20 z-0 dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)]"
               />
               <div className="relative z-[15]">
                  {loaded.about ? <About /> : <SkeletonAbout />}
                  {loaded.skills ? <Skills /> : <SkeletonSkills />}
                  {loaded.projects ? <Projects /> : <SkeletonProjects />}
                  {loaded.contact ? <Contact /> : <SkeletonContact />}
                  <Footer />
               </div>
            </div>
         </main>
      </>
   )
}

