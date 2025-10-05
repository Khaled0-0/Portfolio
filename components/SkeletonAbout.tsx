'use client'

import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

export default function SkeletonAbout() {
   return (
      <section className="section-container">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
         >
            {/* Section Header Skeleton */}
            <div className="text-center mb-16">
               <Skeleton width="200px" height="48px" className="mx-auto mb-4" />
               <Skeleton width="300px" height="24px" className="mx-auto" />
            </div>

            {/* Story Card Skeleton */}
            <div className="max-w-4xl mx-auto mb-16">
               <div className="bg-gradient-to-br from-white to-primary-50/30 dark:from-dark-800 dark:to-primary-900/10 rounded-2xl p-8 md:p-12 border-2 border-primary-500/20 dark:border-primary-500/30 shadow-xl space-y-4">
                  <Skeleton height="24px" />
                  <Skeleton height="24px" />
                  <Skeleton height="24px" width="90%" />
                  <div className="pt-2" />
                  <Skeleton height="24px" />
                  <Skeleton height="24px" width="95%" />
                  <div className="pt-2" />
                  <Skeleton height="24px" />
                  <Skeleton height="24px" width="85%" />
               </div>
            </div>

            {/* AI-Powered Development Skeleton */}
            <div className="max-w-5xl mx-auto mb-16">
               {/* Header */}
               <div className="text-center mb-8">
                  <Skeleton width="300px" height="40px" className="mx-auto mb-6 rounded-full" />
                  <Skeleton width="400px" height="40px" className="mx-auto mb-4 max-w-full" />
                  <div className="space-y-2 max-w-2xl mx-auto">
                     <Skeleton height="20px" />
                     <Skeleton height="20px" width="90%" className="mx-auto" />
                  </div>
               </div>

               {/* AI Tools Grid Skeleton */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[...Array(3)].map((_, index) => (
                     <motion.div
                        key={index}
                        className="bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-dark-200/50 dark:border-dark-700/50 shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                     >
                        <div className="flex flex-col items-center text-center space-y-3">
                           <Skeleton width="64px" height="64px" className="rounded-xl" />
                           <Skeleton width="120px" height="24px" />
                           <Skeleton width="150px" height="16px" />
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* AI Advantages Skeleton */}
               <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-dark-200 dark:border-dark-700 shadow-lg">
                  <div className="flex items-center gap-2 mb-5">
                     <Skeleton width="24px" height="24px" />
                     <Skeleton width="300px" height="20px" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-dark-50 dark:bg-dark-700/50">
                           <Skeleton width="20px" height="20px" className="flex-shrink-0" />
                           <Skeleton height="16px" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Motivations Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               {[...Array(4)].map((_, index) => (
                  <motion.div
                     key={index}
                     className="bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-primary-500/20 dark:border-primary-500/30 shadow-lg"
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 + index * 0.1 }}
                  >
                     <Skeleton width="56px" height="56px" className="mb-4 rounded-xl" />
                     <Skeleton height="24px" width="80%" className="mb-3" />
                     <div className="space-y-2">
                        <Skeleton height="16px" />
                        <Skeleton height="16px" width="90%" />
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Journey Stages Skeleton */}
            <div className="max-w-5xl mx-auto">
               <Skeleton width="250px" height="40px" className="mx-auto mb-12" />

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, index) => (
                     <motion.div
                        key={index}
                        className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-dark-200/50 dark:border-dark-700/50 shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.15 }}
                     >
                        {/* Stage Badge */}
                        <div className="absolute top-4 right-4">
                           <Skeleton width="60px" height="24px" className="rounded-full" />
                        </div>

                        {/* Icon */}
                        <Skeleton width="56px" height="56px" className="mb-4 rounded-xl" />

                        {/* Content */}
                        <Skeleton height="24px" width="85%" className="mb-3" />
                        <div className="space-y-2">
                           <Skeleton height="14px" />
                           <Skeleton height="14px" />
                           <Skeleton height="14px" width="80%" />
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1">
                           <Skeleton className="rounded-none h-full" />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </motion.div>
      </section>
   )
}

