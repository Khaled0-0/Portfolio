# 💀 Skeleton Loading - Quick Start

## 🎯 See It In Action (30 seconds)

```bash
npm run dev
```

Visit: **http://localhost:3000/skeleton-demo**

Toggle between skeleton and real content. Switch themes. Done! 🎉

## 📦 What You Got

6 Skeleton Components ready to use:
- ✅ `SkeletonHero` - Hero section
- ✅ `SkeletonAbout` - About section  
- ✅ `SkeletonSkills` - Skills section
- ✅ `SkeletonProjects` - Projects section
- ✅ `SkeletonContact` - Contact section
- ✅ `Skeleton` - Base component for custom skeletons

## 🚀 Use It (3 ways)

### 1. Simple (Direct)
```tsx
import SkeletonProjects from '@/components/SkeletonProjects'

function MyPage() {
  const [loading, setLoading] = useState(true)
  
  return loading ? <SkeletonProjects /> : <Projects />
}
```

### 2. Clean (HOC)
```tsx
import { withSkeleton } from '@/components/withSkeleton'
import Projects from '@/components/Projects'
import SkeletonProjects from '@/components/SkeletonProjects'

const ProjectsWithSkeleton = withSkeleton(Projects, SkeletonProjects)

<ProjectsWithSkeleton loading={isLoading} delay={300} />
```

### 3. React Way (Suspense)
```tsx
import { Suspense } from 'react'

<Suspense fallback={<SkeletonProjects />}>
  <Projects />
</Suspense>
```

## 🎨 Features

- ✨ **Dark/Light Mode** - Auto-adapts to your theme
- 🎭 **Smooth Animations** - Shimmer effect with Framer Motion
- 📱 **Fully Responsive** - Looks great on all devices
- 🎯 **Perfect Match** - Matches your actual components
- ⚡ **Zero Config** - Works out of the box

## 📚 Docs

- **Quick Start**: `SKELETON_QUICK_START.md` (you are here!)
- **Full Guide**: `SKELETON_USAGE_GUIDE.md`
- **Implementation**: `SKELETON_IMPLEMENTATION.md`
- **Live Demo**: `/skeleton-demo`

## 🎨 Customize

### Change shimmer speed
Edit `app/globals.css`:
```css
.skeleton-shimmer::after {
  animation: shimmer 2s infinite; /* slower */
}
```

### Custom skeleton
```tsx
<Skeleton 
  variant="circular"  // 'text' | 'circular' | 'rectangular'
  width="100px" 
  height="100px"
  className="custom-class"
/>
```

## ✅ That's It!

You're ready to go. Check the demo page and pick your integration method!

---

**Need Help?** 
- Check `SKELETON_USAGE_GUIDE.md` for detailed examples
- Visit `/skeleton-demo` to see everything in action

