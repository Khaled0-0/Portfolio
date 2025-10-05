'use client'

import { useState, useEffect, ComponentType } from 'react'

interface WithSkeletonProps {
   loading?: boolean
   delay?: number
}

/**
 * Higher-Order Component that adds skeleton loading functionality
 * 
 * @example
 * const ProjectsWithSkeleton = withSkeleton(Projects, SkeletonProjects)
 * 
 * // In your component:
 * <ProjectsWithSkeleton loading={isLoading} delay={300} />
 */
export function withSkeleton<P extends object>(
   Component: ComponentType<P>,
   SkeletonComponent: ComponentType
) {
   return function WithSkeletonWrapper({
      loading = false,
      delay = 0,
      ...props
   }: P & WithSkeletonProps) {
      const [showSkeleton, setShowSkeleton] = useState(loading || delay > 0)

      useEffect(() => {
         if (loading) {
            setShowSkeleton(true)
         } else if (delay > 0) {
            const timer = setTimeout(() => {
               setShowSkeleton(false)
            }, delay)
            return () => clearTimeout(timer)
         } else {
            setShowSkeleton(false)
         }
      }, [loading, delay])

      if (showSkeleton) {
         return <SkeletonComponent />
      }

      return <Component {...(props as P)} />
   }
}

