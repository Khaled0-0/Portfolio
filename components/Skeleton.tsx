import { motion } from 'framer-motion'

interface SkeletonProps {
   className?: string
   variant?: 'text' | 'circular' | 'rectangular'
   width?: string
   height?: string
   animate?: boolean
}

export default function Skeleton({
   className = '',
   variant = 'rectangular',
   width,
   height,
   animate = true
}: SkeletonProps) {
   const baseClasses = 'bg-dark-200/50 dark:bg-dark-700/50'

   const variantClasses = {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-lg'
   }

   const style = {
      width: width || '100%',
      height: height || (variant === 'text' ? '1rem' : '100%')
   }

   return (
      <motion.div
         className={`${baseClasses} ${variantClasses[variant]} ${className} relative overflow-hidden`}
         style={style}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
      >
         {animate && (
            <motion.div
               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
               animate={{
                  x: ['-100%', '100%']
               }}
               transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear'
               }}
            />
         )}
      </motion.div>
   )
}

