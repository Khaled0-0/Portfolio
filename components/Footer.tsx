'use client'

import { motion } from 'framer-motion'

export default function Footer() {
   const currentYear = new Date().getFullYear()

   return (
      <footer className="bg-dark-900 dark:bg-dark-950 text-dark-300 py-8">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               className="text-center"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <p className="text-sm">
                  © {currentYear} <span className="text-primary-400 font-semibold">Khaled Nasser</span>. All rights reserved.
               </p>
               <p className="text-xs mt-2 text-dark-500">
                  Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
               </p>
            </motion.div>
         </div>
      </footer>
   )
}

