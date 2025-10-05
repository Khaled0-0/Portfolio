'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Import skeleton components
import SkeletonHero from '@/components/SkeletonHero'
import SkeletonAbout from '@/components/SkeletonAbout'
import SkeletonSkills from '@/components/SkeletonSkills'
import SkeletonProjects from '@/components/SkeletonProjects'
import SkeletonContact from '@/components/SkeletonContact'
import InitialLoader from '@/components/InitialLoader'

export const dynamic = 'force-dynamic'

export default function Home() {
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
         <main className="overflow-x-hidden bg-white dark:bg-dark-950 min-h-screen">
            {loaded.hero ? <Hero /> : <SkeletonHero />}
            {loaded.about ? <About /> : <SkeletonAbout />}
            {loaded.skills ? <Skills /> : <SkeletonSkills />}
            {loaded.projects ? <Projects /> : <SkeletonProjects />}
            {loaded.contact ? <Contact /> : <SkeletonContact />}
            <Footer />
         </main>
      </>
   )
}

