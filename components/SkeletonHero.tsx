'use client'

import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

export default function SkeletonHero() {
   return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
         {/* Animated Background */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
         </div>

         <div className="section-container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
               {/* Text Content Skeleton */}
               <motion.div
                  className="flex-1 text-center lg:text-left w-full px-4 sm:px-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  {/* "Hi, I'm" skeleton */}
                  <div className="mb-4">
                     <Skeleton width="150px" height="36px" className="mx-auto lg:mx-0" />
                  </div>

                  {/* Name skeleton */}
                  <div className="mb-4">
                     <Skeleton width="400px" height="60px" className="mx-auto lg:mx-0 max-w-full" />
                  </div>

                  {/* Typing animation skeleton */}
                  <div className="mb-6 h-20 sm:h-24">
                     <Skeleton width="350px" height="48px" className="mx-auto lg:mx-0 max-w-full" />
                  </div>

                  {/* Description skeleton */}
                  <div className="mb-6 sm:mb-8 space-y-3 max-w-2xl">
                     <Skeleton height="24px" />
                     <Skeleton height="24px" />
                     <Skeleton height="24px" width="80%" className="mx-auto lg:mx-0" />
                  </div>

                  {/* Buttons skeleton */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                     <Skeleton width="160px" height="48px" className="rounded-lg mx-auto sm:mx-0" />
                     <Skeleton width="160px" height="48px" className="rounded-lg mx-auto sm:mx-0" />
                  </div>
               </motion.div>

               {/* Profile Image Skeleton */}
               <motion.div
                  className="flex-1 flex flex-col items-center gap-6 sm:gap-8 w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
               >
                  {/* Profile Circle */}
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                     <Skeleton
                        variant="circular"
                        className="w-full h-full border-4 border-primary-500/50 shadow-2xl"
                     />
                  </div>

                  {/* Tech Stack Icons Skeleton */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap max-w-xs sm:max-w-sm mb-16 sm:mb-20">
                     {[...Array(5)].map((_, i) => (
                        <Skeleton
                           key={i}
                           width="48px"
                           height="48px"
                           className="rounded-xl"
                        />
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   )
}

