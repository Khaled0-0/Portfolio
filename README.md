# Khaled Nasser - Portfolio v2.0

A modern, animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a clean, minimalist design with smooth animations and full dark/light mode support.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist UI inspired by top tech companies
- 🌓 **Dark/Light Mode** - Fully functional theme switching with localStorage persistence
- ⚡ **Smooth Animations** - Framer Motion animations throughout
- 📱 **Fully Responsive** - Perfect on all devices from mobile to desktop
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🚀 **Fast Performance** - Optimized for speed with Next.js 14
- 💼 **Project Showcase** - Filterable project gallery with live demos
- 📊 **Skills Display** - Animated skill bars with technology icons
- 📧 **Contact Form** - Integrated with Formspree for email handling
- 🎨 **Blue Sky Theme** - Professional color scheme with primary blue accent

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Tools & Libraries
- **React Icons** - Icon library (including FontAwesome, Simple Icons)
- **React Type Animation** - Typing animation effect
- **Formspree** - Form backend for contact form
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khaled0-0/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx            # Root layout with ThemeProvider
│   └── page.tsx              # Home page with all sections
├── components/
│   ├── About.tsx             # About section with journey timeline
│   ├── Contact.tsx           # Contact form and information
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section with typing animation
│   ├── Navbar.tsx            # Navigation with theme toggle
│   ├── Projects.tsx          # Projects showcase with filtering
│   ├── Skills.tsx            # Skills display with progress bars
│   └── ThemeProvider.tsx     # Theme context provider
├── images/                   # Project images and assets
├── public/                   # Static files
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Colors

The color scheme uses a blue sky theme. To customize, edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Main blue color
    // ... other shades
  }
}
```

### Content

Update your personal information in:
- `components/Hero.tsx` - Name and tagline
- `components/About.tsx` - Your story and journey
- `components/Skills.tsx` - Your skills and expertise
- `components/Projects.tsx` - Your projects
- `components/Contact.tsx` - Contact information
- `app/layout.tsx` - Meta tags and SEO

### Images

Replace images in the `/images` directory:
- `new-profile.png` - Your profile photo
- `p*.png` - Project screenshots
- `KN frontend developer(CV).pdf` - Your resume

## 🌟 Features Breakdown

### Navigation
- Smooth scroll to sections
- Mobile responsive menu
- Theme toggle (dark/light)
- Sticky header with glass effect on scroll

### Hero Section
- Animated typing effect with multiple phrases
- Profile image with floating tech icons
- Call-to-action buttons
- Scroll indicator

### About Section
- Personal story and motivation
- Four key motivations with icons
- Timeline of experience/journey
- Glass morphism card effects

### Skills Section
- Categorized skill display
- Animated progress bars
- Technology icons with colors
- Additional skills as tags

### Projects Section
- Filter between all and featured projects
- Project cards with hover effects
- Technology tags
- Live demo links
- Project images

### Contact Section
- Contact methods (phone, WhatsApp, email)
- Social media links
- Working contact form with Formspree
- Resume download button
- Form validation and status messages

## 🔧 Configuration

### Formspree Setup
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace the form endpoint in `components/Contact.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Analytics (Optional)
To add Google Analytics, install the package and add to `app/layout.tsx`:
```bash
npm install @next/third-parties
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎭 Animations

All animations use Framer Motion with:
- Fade in effects
- Slide animations
- Scale transitions
- Hover effects
- Scroll-triggered animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `next export` (requires static export config)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Khaled Nasser**
- GitHub: [@Khaled0-0](https://github.com/Khaled0-0)
- LinkedIn: [Khaled Nasser](https://www.linkedin.com/in/khaled-nasser-6a8524331)
- Email: khaledmaster999@gmail.com

## 🙏 Acknowledgments

- Design inspiration from top tech company portfolios (Vercel, Linear, etc.)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)

## 📝 Notes

- All images should be optimized before adding to `/images` directory
- Update meta tags in `app/layout.tsx` for SEO
- Customize colors in `tailwind.config.ts` to match your brand
- Test contact form after Formspree setup

---

Built with ❤️ by Khaled Nasser

