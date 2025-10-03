'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightningBolt, HiPuzzle, HiTrendingUp, HiSparkles, HiChip, HiCode, HiCheckCircle } from 'react-icons/hi'
import { SiOpenai, SiClaude } from 'react-icons/si'
import { FaRobot } from 'react-icons/fa'

const motivations = [
   {
      icon: HiLightningBolt,
      title: 'Financial Independence',
      description: 'Development skills provide stable opportunities and growth potential in the tech industry.',
   },
   {
      icon: HiPuzzle,
      title: 'Problem-Solving Thrill',
      description: 'The rush of debugging stubborn issues and finding elegant solutions to UI challenges.',
   },
   {
      icon: HiTrendingUp,
      title: 'Tangible Progress',
      description: 'Transforming abstract ideas from Figma to functional apps that people actually use.',
   },
   {
      icon: HiSparkles,
      title: 'Future Goals',
      description: 'Bold vision for growth with a relentless drive to master cutting-edge technologies.',
   },
]

const journeyStages = [
   {
      stage: 'Now',
      title: 'Professional Frontend Developer',
      description: 'Building production-ready applications with modern frameworks, creating seamless user experiences, and delivering high-quality, scalable solutions.',
      icon: HiSparkles,
      color: '#0ea5e9',
   },
   {
      stage: 'Growth',
      title: 'Mastering the Craft',
      description: 'Rapidly advancing through React, Next.js, TypeScript, and modern development practices while building real-world projects.',
      icon: HiTrendingUp,
      color: '#8b5cf6',
   },
   {
      stage: 'Start',
      title: 'The Foundation',
      description: 'Discovered my passion for web development and dove deep into HTML, CSS, JavaScript fundamentals, and responsive design principles.',
      icon: HiCode,
      color: '#10b981',
   },
]

const aiTools = [
   {
      icon: FaRobot,
      name: 'Cursor AI',
      description: 'AI-powered code editor',
      color: '#0ea5e9',
   },
   {
      icon: SiOpenai,
      name: 'ChatGPT',
      description: 'Problem-solving assistant',
      color: '#10a37f',
   },
   {
      icon: SiClaude,
      name: 'Claude AI',
      description: 'Code review & optimization',
      color: '#8b5cf6',
   },
]

const aiAdvantages = [
   'Write clean, readable, modern code',
   'Follow industry best practices',
   'Faster debugging & problem-solving',
   'Enhanced code quality & consistency',
   'Rapid prototyping & iteration',
   'Better documentation',
]

export default function About() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.2 })

   return (
      <section id="about" className="section-container" ref={ref}>
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
         >
            {/* Section Header */}
            <div className="text-center mb-16">
               <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
               >
                  About <span className="gradient-text">Me</span>
               </motion.h2>
               <motion.p
                  className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 }}
               >
                  From Motivation to Mastery
               </motion.p>
            </div>

            {/* Story */}
            <motion.div
               className="max-w-4xl mx-auto mb-16"
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ delay: 0.4 }}
            >
               <div className="bg-gradient-to-br from-white to-primary-50/30 dark:from-dark-800 dark:to-primary-900/10 rounded-2xl p-8 md:p-12 border-2 border-primary-500/20 dark:border-primary-500/30 shadow-xl">
                  <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
                     I started my <span className="text-primary-500 font-semibold">frontend development journey in January 2023</span>, driven by a desire for{' '}
                     <span className="font-semibold">financial independence</span> and{' '}
                     <span className="font-semibold">professional growth</span>. What began as a practical career choice has evolved into a genuine
                     passion for <span className="text-primary-500 font-semibold">crafting elegant solutions to real-world challenges</span> through clean, efficient code.
                  </p>
                  <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
                     Today, I specialize in <span className="font-semibold">transforming creative designs into high-performance web applications</span> that deliver exceptional user experiences. I believe in writing code that not only works beautifully but is also maintainable, scalable, and built on industry best practices.
                  </p>
                  <p className="text-lg text-dark-700 dark:text-dark-300 leading-relaxed">
                     By combining <span className="text-primary-500 font-semibold">modern technologies</span> with{' '}
                     <span className="text-primary-500 font-semibold">AI-enhanced workflows</span>, I continuously push myself to deliver projects that balance{' '}
                     <span className="font-semibold">stunning aesthetics with optimized performance</span>—because great development is about both what works and what lasts.
                  </p>
               </div>
            </motion.div>

            {/* AI-Powered Development */}
            <motion.div
               className="max-w-5xl mx-auto mb-16"
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ delay: 0.5 }}
            >
               <div className="text-center mb-8">
                  <motion.div
                     className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full mb-6 shadow-lg"
                     animate={{
                        boxShadow: [
                           '0 0 20px rgba(14, 165, 233, 0.4)',
                           '0 0 35px rgba(139, 92, 246, 0.6)',
                           '0 0 20px rgba(236, 72, 153, 0.4)',
                           '0 0 35px rgba(14, 165, 233, 0.6)',
                        ],
                        scale: [1, 1.02, 1]
                     }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     >
                        <HiChip className="w-5 h-5 text-white" />
                     </motion.div>
                     <span className="text-white font-bold text-sm tracking-wide">AI-ENHANCED DEVELOPMENT</span>
                     <motion.div
                        animate={{
                           opacity: [0.5, 1, 0.5],
                           scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                     >
                        <HiSparkles className="w-4 h-4 text-yellow-300" />
                     </motion.div>
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                     Powered by{' '}
                     <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Modern AI Tools
                     </span>
                  </h3>

                  <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed">
                     Leveraging cutting-edge AI assistants like <span className="font-semibold text-primary-500">Cursor</span>,{' '}
                     <span className="font-semibold text-green-600 dark:text-green-400">ChatGPT</span>, and{' '}
                     <span className="font-semibold text-purple-600 dark:text-purple-400">Claude</span> to deliver{' '}
                     <span className="font-semibold">exceptional code quality</span>, boost productivity, and maintain{' '}
                     <span className="font-semibold">industry-leading best practices</span>
                  </p>
               </div>

               {/* AI Tools Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 place-items-center md:place-items-stretch">
                  {aiTools.map((tool, index) => (
                     <motion.div
                        key={tool.name}
                        className="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-dark-200/50 dark:border-dark-700/50 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-full max-w-sm md:max-w-none"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                     >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex flex-col items-center text-center">
                           <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                              <tool.icon
                                 className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
                                 style={{ color: tool.color }}
                              />
                           </div>
                           <h4 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">{tool.name}</h4>
                           <p className="text-sm text-dark-600 dark:text-dark-400">{tool.description}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* AI Advantages */}
               <motion.div
                  className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-2xl p-8 border border-primary-500/20 dark:border-primary-500/30"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.9 }}
               >
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                        <HiCheckCircle className="w-6 h-6 text-white" />
                     </div>
                     <h4 className="text-xl font-bold text-dark-900 dark:text-white">Enhanced Productivity & Code Quality</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     {aiAdvantages.map((advantage, index) => (
                        <motion.div
                           key={advantage}
                           className="flex items-center gap-3 text-dark-700 dark:text-dark-300"
                           initial={{ opacity: 0, x: -20 }}
                           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                           transition={{ delay: 1 + index * 0.1 }}
                        >
                           <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                           <span className="text-sm font-medium">{advantage}</span>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            </motion.div>

            {/* Motivations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               {motivations.map((item, index) => (
                  <motion.div
                     key={item.title}
                     className="bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-primary-500/20 dark:border-primary-500/30 shadow-lg hover:shadow-2xl hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-2"
                     initial={{ opacity: 0, y: 30 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                     transition={{ delay: 0.5 + index * 0.1 }}
                  >
                     <div className="w-14 h-14 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                        <item.icon className="w-8 h-8 text-primary-500" />
                     </div>
                     <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white">{item.title}</h3>
                     <p className="text-dark-600 dark:text-dark-400 leading-relaxed">{item.description}</p>
                  </motion.div>
               ))}
            </div>

            {/* Journey Stages */}
            <motion.div
               className="max-w-5xl mx-auto"
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ delay: 0.9 }}
            >
               <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  My <span className="gradient-text">Journey</span>
               </h3>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {journeyStages.map((stage, index) => (
                     <motion.div
                        key={stage.title}
                        className="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-dark-200/50 dark:border-dark-700/50 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 1 + index * 0.15 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                     >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/5 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Stage Badge */}
                        <div className="absolute top-4 right-4">
                           <span className="text-xs px-3 py-1 rounded-full font-bold bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                              {stage.stage}
                           </span>
                        </div>

                        <div className="relative">
                           {/* Icon */}
                           <div
                              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                              style={{ backgroundColor: `${stage.color}20` }}
                           >
                              <stage.icon
                                 className="w-7 h-7"
                                 style={{ color: stage.color }}
                              />
                           </div>

                           {/* Content */}
                           <h4 className="text-xl font-bold mb-3 text-dark-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                              {stage.title}
                           </h4>
                           <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
                              {stage.description}
                           </p>
                        </div>

                        {/* Progress Indicator */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-100 dark:bg-dark-700">
                           <motion.div
                              className="h-full bg-gradient-to-r from-primary-500 to-purple-500"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: '100%' } : { width: 0 }}
                              transition={{ delay: 1.2 + index * 0.15, duration: 0.8 }}
                           />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </motion.div>
      </section>
   )
}

