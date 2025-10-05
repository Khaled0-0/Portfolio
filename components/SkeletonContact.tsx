'use client'

import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

export default function SkeletonContact() {
   return (
      <section className="section-container bg-dark-50 dark:bg-dark-900/50 relative overflow-hidden">
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
               <Skeleton width="300px" height="48px" className="mx-auto mb-4" />
               <Skeleton width="400px" height="24px" className="mx-auto max-w-full" />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Contact Info Skeleton */}
               <div className="space-y-6">
                  <Skeleton height="32px" width="250px" className="mb-6" />

                  {/* Contact Cards */}
                  {[...Array(3)].map((_, i) => (
                     <motion.div
                        key={i}
                        className="glass-effect rounded-xl p-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                     >
                        <div className="flex items-center gap-4">
                           <Skeleton width="24px" height="24px" className="flex-shrink-0" />
                           <div className="flex-1 space-y-2">
                              <Skeleton height="14px" width="80px" />
                              <Skeleton height="18px" width="150px" />
                           </div>
                        </div>
                     </motion.div>
                  ))}

                  {/* Download CV Button Skeleton */}
                  <Skeleton height="48px" className="rounded-lg" />

                  {/* Social Links Skeleton */}
                  <div className="pt-4">
                     <Skeleton height="28px" width="120px" className="mb-6" />
                     <div className="flex gap-4">
                        {[...Array(3)].map((_, i) => (
                           <Skeleton key={i} width="56px" height="56px" className="rounded-xl" />
                        ))}
                     </div>
                  </div>
               </div>

               {/* Contact Form Skeleton */}
               <div className="glass-effect rounded-2xl p-8">
                  <Skeleton height="32px" width="180px" className="mb-6" />

                  <div className="space-y-4">
                     {/* Name Field */}
                     <div>
                        <Skeleton height="20px" width="60px" className="mb-2" />
                        <Skeleton height="48px" className="rounded-lg" />
                     </div>

                     {/* Email Field */}
                     <div>
                        <Skeleton height="20px" width="60px" className="mb-2" />
                        <Skeleton height="48px" className="rounded-lg" />
                     </div>

                     {/* Message Field */}
                     <div>
                        <Skeleton height="20px" width="80px" className="mb-2" />
                        <Skeleton height="140px" className="rounded-lg" />
                     </div>

                     {/* Submit Button */}
                     <Skeleton height="48px" className="rounded-lg" />
                  </div>
               </div>
            </div>
         </motion.div>
      </section>
   )
}

