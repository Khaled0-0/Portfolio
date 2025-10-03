'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiExternalLink, HiStar, HiEye, HiChip } from 'react-icons/hi'
import Image from 'next/image'

const projects = [
   {
      title: 'BoatingX',
      description: 'Modern e-commerce platform for boats and marine products with secure checkout, custom domain integration, and responsive design. Built with Next.js and deployed on Vercel.',
      image: '/images/boatingx.png',
      tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Vercel', 'E-commerce'],
      liveUrl: 'https://www.boatingx.co/',
      featured: true,
      category: 'E-commerce',
   },
   {
      title: 'Chat Application',
      description: 'Real-time chat app with Socket.IO, MongoDB, and JWT authentication. Features typing indicators, user status, custom avatars, and real-time message delivery.',
      image: '/images/p11.png',
      tags: ['React.js', 'Socket.io', 'MongoDB', 'Node.js', 'TypeScript', 'JWT'],
      liveUrl: 'https://chat-app-2-eta.vercel.app/',
      featured: true,
      category: 'Full-Stack',
   },
   {
      title: 'Extension Manager',
      description: 'Streamlined interface to manage browser add-ons with dark/light mode, active/inactive filtering, and easy enable/disable controls.',
      image: '/images/p9.png',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Dark Mode'],
      liveUrl: 'https://extension-manager-lyart.vercel.app/',
      featured: false,
      category: 'Web App',
   },
   {
      title: 'Desserts Menu',
      description: 'Full ordering system with dynamic cart updates, real-time price calculation, itemized checkout, and smooth user experience built with functional programming.',
      image: '/images/p10.png',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'State Management'],
      liveUrl: 'https://food-list-kohl.vercel.app/',
      featured: false,
      category: 'Web App',
   },
   {
      title: 'Age Calculator',
      description: 'Modern age calculator with real-time validation, error handling for future dates, smooth animations, and accessible UI with keyboard navigation.',
      image: '/images/p8.png',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Validation'],
      liveUrl: 'https://age-calculator-app-sooty.vercel.app/',
      featured: false,
      category: 'Web App',
   },
   {
      title: 'Weather Application',
      description: 'Real-time weather data visualization with location-based forecasts, interactive maps, and beautiful UI powered by Weather API.',
      image: '/images/p4.png',
      tags: ['React.js', 'JavaScript', 'Weather API', 'Geolocation'],
      liveUrl: 'https://weather-app-nine-xi-73.vercel.app/',
      featured: false,
      category: 'Web App',
   },
   {
      title: 'Todo Application',
      description: 'Clean task management app with drag-and-drop organization, priority settings, and intuitive user interface for productivity.',
      image: '/images/p3.png',
      tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Drag & Drop'],
      liveUrl: 'https://todo-app-alpha-vert-91.vercel.app/',
      featured: false,
      category: 'Web App',
   },
   {
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping platform with product catalog, cart functionality, secure checkout, and seamless user experience.',
      image: '/images/p2.png',
      tags: ['React.js', 'Next.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://e-commerce-chi-one-74.vercel.app/',
      featured: false,
      category: 'E-commerce',
   },
]

export default function Projects() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.2 })
   const [filter, setFilter] = useState<'all' | 'featured'>('all')

   const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured)

   return (
      <section id="projects" className="section-container relative overflow-hidden" ref={ref}>
         {/* Decorative Background */}
         <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
         <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

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
                  Featured <span className="gradient-text">Projects</span>
               </motion.h2>
               <motion.p
                  className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 }}
               >
                  Real-world applications showcasing modern technologies and best practices
               </motion.p>

               {/* Filter Buttons */}
               <motion.div
                  className="flex gap-3 justify-center"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
               >
                  <button
                     onClick={() => setFilter('all')}
                     className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${filter === 'all'
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700 border-2 border-dark-200 dark:border-dark-700'
                        }`}
                  >
                     All Projects
                  </button>
                  <button
                     onClick={() => setFilter('featured')}
                     className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${filter === 'featured'
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700 border-2 border-dark-200 dark:border-dark-700'
                        }`}
                  >
                     <HiStar className="w-4 h-4" />
                     Featured
                  </button>
               </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredProjects.map((project, index) => (
                  <motion.div
                     key={project.title}
                     className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border-2 border-dark-200/50 dark:border-dark-700/50 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-lg hover:shadow-2xl transition-all duration-500"
                     initial={{ opacity: 0, y: 30 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                     transition={{ delay: 0.5 + index * 0.1 }}
                     whileHover={{ y: -12, scale: 1.02 }}
                  >
                     {/* Project Image */}
                     <div className="relative h-56 overflow-hidden bg-dark-100 dark:bg-dark-900">
                        <Image
                           src={project.image}
                           alt={project.title}
                           fill
                           className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Featured Badge */}
                        {project.featured && (
                           <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                              <HiStar className="w-3 h-3" />
                              Featured
                           </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-dark-900/80 backdrop-blur-sm text-white text-xs font-semibold rounded-lg border border-white/20">
                           {project.category}
                        </div>

                        {/* View Project on Hover */}
                        <motion.a
                           href={project.liveUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           whileHover={{ scale: 1.1 }}
                        >
                           <div className="px-6 py-3 bg-white dark:bg-dark-800 rounded-xl font-bold text-primary-500 flex items-center gap-2 shadow-2xl">
                              <HiEye className="w-5 h-5" />
                              View Live
                           </div>
                        </motion.a>
                     </div>

                     {/* Project Content */}
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300 not-italic">
                           {project.title}
                        </h3>
                        <p className="text-dark-600 dark:text-dark-400 mb-4 text-sm leading-relaxed line-clamp-3">
                           {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                           {project.tags.map((tag) => (
                              <span
                                 key={tag}
                                 className="px-3 py-1 text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium border border-primary-200/50 dark:border-primary-700/50"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>

                        {/* Live Link */}
                        <a
                           href={project.liveUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-semibold text-sm group/link"
                        >
                           <HiExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                           <span>Visit Project</span>
                        </a>
                     </div>

                     {/* Gradient border on hover */}
                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-purple-500/0 group-hover:from-primary-500/20 group-hover:via-primary-500/10 group-hover:to-purple-500/20 pointer-events-none transition-all duration-500" />
                  </motion.div>
               ))}
            </div>

         </motion.div>
      </section>
   )
}
