# 💀 Skeleton Loading Guide

Complete skeleton loading system for your portfolio with full dark/light mode support!

## 🎨 What's Included

### Skeleton Components
- ✅ `Skeleton.tsx` - Base skeleton component with shimmer animation
- ✅ `SkeletonHero.tsx` - Hero section skeleton
- ✅ `SkeletonAbout.tsx` - About section skeleton
- ✅ `SkeletonSkills.tsx` - Skills section skeleton
- ✅ `SkeletonProjects.tsx` - Projects section skeleton
- ✅ `SkeletonContact.tsx` - Contact section skeleton

### Utilities
- ✅ `withSkeleton.tsx` - HOC for easy skeleton integration
- ✅ Shimmer animations in `globals.css`
- ✅ Demo page at `/skeleton-demo`

## 🚀 Quick Start

### 1. View the Demo
Visit `/skeleton-demo` to see all skeletons in action:
```
http://localhost:3000/skeleton-demo
```

Toggle between skeleton and real content, switch sections, and test both light/dark modes!

### 2. Basic Usage

#### Option A: Direct Usage
```tsx
import SkeletonProjects from '@/components/SkeletonProjects'
import Projects from '@/components/Projects'

function MyPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return loading ? <SkeletonProjects /> : <Projects />
}
```

#### Option B: Using HOC (Recommended)
```tsx
import { withSkeleton } from '@/components/withSkeleton'
import Projects from '@/components/Projects'
import SkeletonProjects from '@/components/SkeletonProjects'

const ProjectsWithSkeleton = withSkeleton(Projects, SkeletonProjects)

function MyPage() {
  const [loading, setLoading] = useState(true)

  return <ProjectsWithSkeleton loading={loading} delay={300} />
}
```

## 📖 Component API

### Base Skeleton Component

```tsx
<Skeleton
  variant="rectangular"  // 'text' | 'circular' | 'rectangular'
  width="200px"          // Any CSS width value
  height="40px"          // Any CSS height value
  animate={true}         // Enable/disable shimmer animation
  className="custom-class"
/>
```

### Skeleton Variants
- **`text`** - Rounded corners for text-like elements
- **`circular`** - Perfect circles for avatars, icons
- **`rectangular`** - Rounded rectangles for cards, images

## 🎯 Real-World Examples

### Example 1: Loading Data from API
```tsx
'use client'

import { useState, useEffect } from 'react'
import Projects from '@/components/Projects'
import SkeletonProjects from '@/components/SkeletonProjects'

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch('/api/projects')
      const data = await response.json()
      setProjects(data)
      setLoading(false)
    }
    fetchProjects()
  }, [])

  if (loading) return <SkeletonProjects />
  return <Projects data={projects} />
}
```

### Example 2: Suspense Integration
```tsx
import { Suspense } from 'react'
import Projects from '@/components/Projects'
import SkeletonProjects from '@/components/SkeletonProjects'

export default function Page() {
  return (
    <Suspense fallback={<SkeletonProjects />}>
      <Projects />
    </Suspense>
  )
}
```

### Example 3: Progressive Loading
```tsx
'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import SkeletonHero from '@/components/SkeletonHero'
import SkeletonAbout from '@/components/SkeletonAbout'
import SkeletonProjects from '@/components/SkeletonProjects'

export default function Home() {
  const [loaded, setLoaded] = useState({
    hero: false,
    about: false,
    projects: false
  })

  useEffect(() => {
    // Load sections progressively
    const timers = [
      setTimeout(() => setLoaded(prev => ({ ...prev, hero: true })), 300),
      setTimeout(() => setLoaded(prev => ({ ...prev, about: true })), 800),
      setTimeout(() => setLoaded(prev => ({ ...prev, projects: true })), 1200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <main>
      {loaded.hero ? <Hero /> : <SkeletonHero />}
      {loaded.about ? <About /> : <SkeletonAbout />}
      {loaded.projects ? <Projects /> : <SkeletonProjects />}
    </main>
  )
}
```

## 🌓 Dark Mode Support

All skeletons automatically adapt to dark/light mode using:
- `bg-dark-200/50` in light mode
- `bg-dark-700/50` in dark mode
- Shimmer intensity adjusts based on theme

No additional configuration needed!

## 🎨 Customization

### Customize Shimmer Speed
Edit `globals.css`:
```css
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Change to 2s for slower animation: */
.skeleton-shimmer::after {
  animation: shimmer 2s infinite;
}
```

### Customize Colors
```tsx
<Skeleton className="bg-blue-200 dark:bg-blue-800" />
```

### Create Custom Skeleton
```tsx
import Skeleton from '@/components/Skeleton'

export default function SkeletonCustom() {
  return (
    <div className="p-6">
      <Skeleton variant="circular" width="80px" height="80px" />
      <Skeleton variant="text" width="200px" className="mt-4" />
      <Skeleton variant="rectangular" height="150px" className="mt-2" />
    </div>
  )
}
```

## ⚡ Performance Tips

1. **Use HOC for Cleaner Code**
   ```tsx
   const ProjectsWithSkeleton = withSkeleton(Projects, SkeletonProjects)
   ```

2. **Add Delays for Better UX**
   ```tsx
   <ProjectsWithSkeleton loading={false} delay={300} />
   ```
   This prevents flashing on fast connections.

3. **Lazy Load Sections**
   Only show skeletons for sections in viewport.

4. **Disable Animations on Slow Devices**
   ```tsx
   <Skeleton animate={!slowDevice} />
   ```

## 🔧 Troubleshooting

### Skeletons not showing?
- Check that components are client components (`'use client'`)
- Verify Framer Motion is installed: `npm install framer-motion`

### Shimmer not animating?
- Ensure `globals.css` includes the shimmer keyframes
- Check browser supports CSS animations

### Dark mode not working?
- Verify ThemeProvider is wrapping your app
- Check Tailwind config has `darkMode: 'class'`

## 📚 File Structure

```
components/
├── Skeleton.tsx              # Base component
├── SkeletonHero.tsx         # Hero section
├── SkeletonAbout.tsx        # About section
├── SkeletonSkills.tsx       # Skills section
├── SkeletonProjects.tsx     # Projects section
├── SkeletonContact.tsx      # Contact section
└── withSkeleton.tsx         # HOC utility

app/
├── globals.css              # Shimmer animations
└── skeleton-demo/
    └── page.tsx             # Interactive demo
```

## 🎉 Ready to Use!

1. **Test the demo**: Visit `/skeleton-demo`
2. **Choose your integration method**: Direct or HOC
3. **Customize if needed**: Colors, speed, layout
4. **Deploy**: Works in production automatically!

---

**Questions?** Check the demo page or open an issue!

Made with ❤️ for your portfolio

