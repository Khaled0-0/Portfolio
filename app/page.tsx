import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export default function Home() {
   return (
      <main className="overflow-x-hidden">
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <Footer />
      </main>
   )
}

