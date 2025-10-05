'use client'

import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

export default function SkeletonSkills() {
   return (
      <section className="section-container bg-dark-50 dark:bg-dark-900/50 relative overflow-hidden">
         {/* Decorative Background */}
         <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
         >
            {/* Section Header Skeleton */}
            <div className="text-center mb-12">
               <Skeleton width="320px" height="48px" className="mx-auto mb-4" />
               <Skeleton width="450px" height="28px" className="mx-auto max-w-full" />
            </div>

            {/* Category Filter Skeleton */}
            <div className="flex justify-start md:justify-center gap-3 mb-12 overflow-x-auto pb-2 px-4">
               {[...Array(5)].map((_, i) => (
                  <Skeleton
                     key={i}
                     width="100px"
                     height="42px"
                     className="rounded-xl flex-shrink-0"
                  />
               ))}
            </div>

            {/* Main Skills Grid Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
               {[...Array(12)].map((_, index) => (
                  <motion.div
                     key={index}
                     className="bg-white dark:bg-dark-800 rounded-2xl p-5 border-2 border-dark-200/50 dark:border-dark-700/50 shadow-md"
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: index * 0.03 }}
                  >
                     <div className="flex flex-col items-center text-center gap-3">
                        {/* Icon Circle */}
                        <Skeleton
                           width="64px"
                           height="64px"
                           className="rounded-xl"
                        />
                        {/* Skill Name */}
                        <Skeleton width="80px" height="16px" />
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Additional Skills Section Skeleton */}
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-12">
                  <Skeleton width="350px" height="40px" className="mx-auto mb-4" />
                  <Skeleton width="300px" height="24px" className="mx-auto" />
               </div>

               {/* Additional Skills Grid */}
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
                  {[...Array(10)].map((_, index) => (
                     <motion.div
                        key={index}
                        className="bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-dark-200/50 dark:border-dark-700/50 shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.04 }}
                     >
                        <div className="flex flex-col items-center gap-3">
                           <Skeleton width="64px" height="64px" className="rounded-xl" />
                           <Skeleton width="90px" height="14px" />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* Skill Highlights Skeleton */}
            <div className="mt-16 max-w-4xl mx-auto">
               <div className="bg-gradient-to-r from-primary-500/10 via-primary-600/10 to-primary-500/10 dark:from-primary-500/20 dark:via-primary-600/20 dark:to-primary-500/20 rounded-2xl p-8 border border-primary-500/20 dark:border-primary-500/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                     {[...Array(3)].map((_, i) => (
                        <div key={i} className="space-y-2">
                           <Skeleton width="32px" height="32px" className="mx-auto" />
                           <Skeleton width="150px" height="20px" className="mx-auto" />
                           <Skeleton width="180px" height="16px" className="mx-auto" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </motion.div>
      </section>
   )
}

