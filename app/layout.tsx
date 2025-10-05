import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'

const raleway = Raleway({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700', '800', '900'],
   display: 'swap',
   variable: '--font-raleway',
})

export const metadata: Metadata = {
   title: 'Khaled Nasser | Frontend Developer',
   description: 'Frontend developer specializing in React.js, Next.js, and Tailwind CSS. Transforming designs into high-performance web applications.',
   keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web Development'],
   authors: [{ name: 'Khaled Nasser' }],
   openGraph: {
      title: 'Khaled Nasser | Frontend Developer',
      description: 'Frontend developer specializing in React.js, Next.js, and Tailwind CSS',
      type: 'website',
   },
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <script
               dangerouslySetInnerHTML={{
                  __html: `
                     try {
                       const theme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                       if (theme === 'dark') {
                         document.documentElement.classList.add('dark');
                       }
                     } catch (e) {}
                  `,
               }}
            />
         </head>
         <body className={raleway.className}>
            <ThemeProvider>
               <Navbar />
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}

