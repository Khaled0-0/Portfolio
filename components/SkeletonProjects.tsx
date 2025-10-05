'use client'

import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

export default function SkeletonProjects() {
   return (
      <section className="section-container relative overflow-hidden">
         {/* Decorative Background */}
         <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
         <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
         >
            {/* Section Header Skeleton */}
            <div className="text-center mb-12">
               <Skeleton width="350px" height="48px" className="mx-auto mb-4" />
               <Skeleton width="500px" height="28px" className="mx-auto mb-8 max-w-full" />

               {/* Filter Buttons Skeleton */}
               <div className="flex gap-3 justify-center">
                  <Skeleton width="140px" height="42px" className="rounded-xl" />
                  <Skeleton width="140px" height="42px" className="rounded-xl" />
               </div>
            </div>

            {/* Projects Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[...Array(6)].map((_, index) => (
                  <motion.div
                     key={index}
                     className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border-2 border-dark-200/50 dark:border-dark-700/50 shadow-lg"
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                  >
                     {/* Project Image Skeleton */}
                     <Skeleton className="h-56 rounded-none" />

                     {/* Project Content Skeleton */}
                     <div className="p-6 space-y-4">
                        {/* Title */}
                        <Skeleton height="28px" width="80%" />

                        {/* Description */}
                        <div className="space-y-2">
                           <Skeleton height="16px" />
                           <Skeleton height="16px" />
                           <Skeleton height="16px" width="90%" />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                           <Skeleton width="80px" height="28px" className="rounded-lg" />
                           <Skeleton width="90px" height="28px" className="rounded-lg" />
                           <Skeleton width="70px" height="28px" className="rounded-lg" />
                        </div>

                        {/* Link */}
                        <Skeleton width="130px" height="20px" />
                     </div>
                  </motion.div>
               ))}
            </div>
         </motion.div>
      </section>
   )
}

