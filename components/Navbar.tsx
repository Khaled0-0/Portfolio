'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon, HiDownload } from 'react-icons/hi'
import { useTheme } from './ThemeProvider'

const navLinks = [
   { name: 'Home', href: '#home' },
   { name: 'About', href: '#about' },
   { name: 'Skills', href: '#skills' },
   { name: 'Projects', href: '#projects' },
   { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false)
   const [scrolled, setScrolled] = useState(false)
   const [mounted, setMounted] = useState(false)
   const [activeSection, setActiveSection] = useState('home')
   const { theme, toggleTheme } = useTheme()

   useEffect(() => {
      setMounted(true)
   }, [])

   useEffect(() => {
      const observerOptions = {
         rootMargin: '-50% 0px -50% 0px',
         threshold: 0,
      }

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setActiveSection(entry.target.id)
            }
         })
      }

      const observer = new IntersectionObserver(observerCallback, observerOptions)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      sections.forEach((id) => {
         const element = document.getElementById(id)
         if (element) observer.observe(element)
      })

      return () => observer.disconnect()
   }, [])

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   const scrollToSection = (href: string) => {
      setIsOpen(false)
      setTimeout(() => {
         const element = document.querySelector(href)
         if (element) {
            const offsetTop = (element as HTMLElement).offsetTop - 80
            window.scrollTo({
               top: offsetTop,
               behavior: 'smooth'
            })
         }
      }, 300)
   }

   const handleDownloadCV = () => {
      const link = document.createElement('a')
      link.href = '/images/Khaled Nasser - Frontend Developer Resume.pdf'
      link.download = 'Khaled Nasser - Frontend Developer Resume.pdf'
      link.click()
   }

   return (
      <>
      <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'backdrop-blur-md bg-white/70 dark:bg-dark-950/70 shadow-md'
            : 'bg-transparent'
            }`}
      >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               {/* Enhanced Logo */}
               <motion.a
                  href="#home"
                  onClick={(e) => {
                     e.preventDefault()
                     scrollToSection('#home')
                  }}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
               >
                  <motion.div
                     className="relative w-11 h-11 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md overflow-hidden cursor-pointer"
                     whileHover={{
                        rotate: [0, -8, 8, -8, 0],
                        boxShadow: '0 8px 30px rgba(14, 165, 233, 0.4)'
                     }}
                     transition={{ duration: 0.6 }}
                     animate={{
                        boxShadow: [
                           '0 4px 14px 0 rgba(14, 165, 233, 0.3)',
                           '0 6px 20px 0 rgba(14, 165, 233, 0.45)',
                           '0 4px 14px 0 rgba(14, 165, 233, 0.3)',
                        ],
                     }}
                  >
                     {/* Shimmer effect */}
                     <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                        animate={{
                           x: ['-200%', '200%'],
                        }}
                        transition={{
                           duration: 3,
                           repeat: Infinity,
                           ease: 'linear',
                        }}
                     />
                     <span className="relative text-lg font-black text-white z-10 tracking-tighter not-italic">KN</span>
                  </motion.div>
               </motion.a>

               {/* Desktop Navigation */}
               <div className="hidden lg:flex items-center gap-2">
                  {navLinks.map((link, index) => {
                     const isActive = activeSection === link.href.substring(1)
                     return (
                        <motion.a
                           key={link.name}
                           href={link.href}
                           onClick={(e) => {
                              e.preventDefault()
                              scrollToSection(link.href)
                           }}
                           className="relative px-5 py-2.5 rounded-xl transition-all duration-300 group"
                           initial={{ opacity: 0, y: -20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: index * 0.1 }}
                           whileHover={{ y: -2 }}
                        >
                           <span className={`relative z-10 transition-colors duration-200 font-medium ${isActive
                              ? 'text-white font-bold not-italic'
                              : 'text-dark-700 dark:text-dark-300 group-hover:text-white'
                              }`}>
                              {link.name}
                           </span>

                           {/* Active background with gradient */}
                           {isActive && (
                              <motion.div
                                 className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-md shadow-primary-500/25"
                                 layoutId="activeNavBg"
                                 transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                              />
                           )}

                           {/* Hover background - only show if not active */}
                           {!isActive && (
                              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/80 to-primary-600/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: -1 }} />
                           )}
                        </motion.a>
                     )
                  })}

                  {/* Divider */}
                  <div className="w-px h-6 bg-dark-300 dark:bg-dark-600 mx-3" />

                  {/* Download CV Button */}
                  <motion.button
                     onClick={handleDownloadCV}
                     className="px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold text-sm flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300"
                     whileHover={{ scale: 1.05, y: -1 }}
                     whileTap={{ scale: 0.95 }}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.6 }}
                  >
                     <HiDownload className="w-4 h-4" />
                     <span className="not-italic">Resume</span>
                  </motion.button>

                  {/* Theme Toggle */}
                  {mounted && (
                     <motion.button
                        onClick={toggleTheme}
                        className="ml-3 p-2.5 rounded-lg bg-dark-100/80 dark:bg-dark-800/80 hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle theme"
                     >
                        {theme === 'dark' ? (
                           <HiSun className="w-5 h-5 text-yellow-500" />
                        ) : (
                           <HiMoon className="w-5 h-5 text-primary-500" />
                        )}
                     </motion.button>
                  )}
               </div>

               {/* Mobile Menu Button */}
               <div className="lg:hidden flex items-center space-x-3">
                  {mounted && (
                     <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-dark-100 dark:bg-dark-800"
                        whileTap={{ scale: 0.9 }}
                     >
                        {theme === 'dark' ? (
                           <HiSun className="w-5 h-5 text-yellow-500" />
                        ) : (
                           <HiMoon className="w-5 h-5 text-primary-500" />
                        )}
                     </motion.button>
                  )}

                  <motion.button
                     onClick={() => setIsOpen(!isOpen)}
                     className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800"
                     whileTap={{ scale: 0.9 }}
                  >
                     {isOpen ? (
                        <HiX className="w-6 h-6" />
                     ) : (
                        <HiMenu className="w-6 h-6" />
                     )}
                  </motion.button>
               </div>
            </div>
         </div>

         {/* Mobile Menu */}
         <AnimatePresence>
            {isOpen && (
                  <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     className="lg:hidden backdrop-blur-md bg-white/90 dark:bg-dark-950/90 border-t border-dark-200/20 dark:border-dark-700/20 relative z-50"
                  >
                     <div className="px-4 py-6 space-y-2">
                        {navLinks.map((link, index) => {
                           const isActive = activeSection === link.href.substring(1)
                           return (
                              <motion.a
                                 key={link.name}
                                 href={link.href}
                                 onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(link.href)
                                 }}
                                 className={`block px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold shadow-md not-italic'
                                    : 'text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
                                    }`}
                                 initial={{ opacity: 0, x: -20 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ delay: index * 0.1 }}
                              >
                                 {link.name}
                              </motion.a>
                           )
                        })}

                        {/* Mobile Download CV Button */}
                        <motion.button
                           onClick={handleDownloadCV}
                           className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-md"
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.5 }}
                        >
                           <HiDownload className="w-5 h-5" />
                           <span className="not-italic">Download Resume</span>
                     </motion.button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.nav>
      
      {/* Mobile Menu Backdrop - Outside Navbar */}
      <AnimatePresence>
         {isOpen && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 bg-black/50 z-40 lg:hidden"
               onClick={() => setIsOpen(false)}
            />
         )}
      </AnimatePresence>
      </>
   )
}
