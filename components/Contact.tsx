'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiPhone, HiDownload } from 'react-icons/hi'
import { SiGithub, SiLinkedin, SiVercel } from 'react-icons/si'
import { FaWhatsapp } from 'react-icons/fa'

const contactMethods = [
   {
      icon: HiPhone,
      title: 'Phone',
      value: '011 4065 7517',
      link: 'tel:01140657517',
      color: 'text-green-500',
   },
   {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: 'Send Message',
      link: 'https://wa.me/01140657517',
      color: 'text-green-500',
   },
   {
      icon: HiMail,
      title: 'Email',
      value: 'khaledmaster999@gmail.com',
      link: 'mailto:khaledmaster999@gmail.com',
      color: 'text-primary-500',
   },
]

const socialLinks = [
   {
      icon: SiGithub,
      name: 'GitHub',
      url: 'https://github.com/Khaled0-0',
      color: 'hover:text-gray-900 dark:hover:text-white',
   },
   {
      icon: SiLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/khaled-nasser-6a8524331',
      color: 'hover:text-blue-600',
   },
   {
      icon: SiVercel,
      name: 'Vercel',
      url: 'https://vercel.com/khaleds-projects-abf08b05',
      color: 'hover:text-black dark:hover:text-white',
   },
]

export default function Contact() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.2 })
   const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setFormStatus('sending')

      const form = e.currentTarget
      const formData = new FormData(form)

      try {
         const response = await fetch('https://formspree.io/f/xaneppnd', {
            method: 'POST',
            body: formData,
            headers: {
               Accept: 'application/json',
            },
         })

         if (response.ok) {
            setFormStatus('success')
            form.reset()
            setTimeout(() => setFormStatus('idle'), 5000)
         } else {
            setFormStatus('error')
            setTimeout(() => setFormStatus('idle'), 5000)
         }
      } catch (error) {
         setFormStatus('error')
         setTimeout(() => setFormStatus('idle'), 5000)
      }
   }

   const handleDownloadCV = () => {
      const link = document.createElement('a')
      link.href = '/images/Khaled Nasser - Frontend Developer Resume.pdf'
      link.download = 'Khaled Nasser - Frontend Developer Resume.pdf'
      link.click()
   }

   return (
      <section id="contact" className="section-container bg-dark-50 dark:bg-dark-900/50" ref={ref}>
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
         >
            {/* Section Header */}
            <div className="text-center mb-16">
               <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
               >
                  Get In <span className="gradient-text">Touch</span>
               </motion.h2>
               <motion.p
                  className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 }}
               >
                  Let&apos;s work together on your next project
               </motion.p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Contact Info */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.4 }}
               >
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                  {/* Contact Methods */}
                  <div className="space-y-4 mb-8">
                     {contactMethods.map((method, index) => (
                        <motion.a
                           key={method.title}
                           href={method.link}
                           className="flex items-center gap-4 glass-effect rounded-xl p-4 card-hover"
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ delay: 0.5 + index * 0.1 }}
                           target={method.link.startsWith('http') ? '_blank' : undefined}
                           rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                           <method.icon className={`w-6 h-6 ${method.color}`} />
                           <div>
                              <div className="text-sm text-dark-600 dark:text-dark-400">{method.title}</div>
                              <div className="font-medium">{method.value}</div>
                           </div>
                        </motion.a>
                     ))}
                  </div>

                  {/* Download CV Button */}
                  <motion.button
                     onClick={handleDownloadCV}
                     className="w-full btn-primary flex items-center justify-center gap-2 mb-8"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ delay: 0.8 }}
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                  >
                     <HiDownload className="w-5 h-5" />
                     Download Resume
                  </motion.button>

                  {/* Social Links */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ delay: 0.9 }}
                  >
                     <h4 className="font-bold text-xl mb-6 not-italic">Follow Me</h4>
                     <div className="flex gap-4">
                        {socialLinks.map((social, index) => (
                           <motion.a
                              key={social.name}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative w-14 h-14 bg-white dark:bg-dark-800 rounded-xl flex items-center justify-center border-2 border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ delay: 1 + index * 0.1 }}
                           >
                              {/* Gradient overlay on hover */}
                              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 transition-all duration-300" />

                              {/* Icon */}
                              <social.icon className="relative z-10 w-7 h-7 text-dark-700 dark:text-dark-300 group-hover:text-primary-500 dark:group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" />

                              {/* Tooltip */}
                              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                 {social.name}
                              </div>
                           </motion.a>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>

               {/* Contact Form */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.4 }}
               >
                  <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
                     <h3 className="text-2xl font-bold mb-6">Send Message</h3>

                     <div className="space-y-4">
                        <div>
                           <label htmlFor="name" className="block text-sm font-medium mb-2">
                              Name
                           </label>
                           <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                           />
                        </div>

                        <div>
                           <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                           />
                        </div>

                        <div>
                           <label htmlFor="message" className="block text-sm font-medium mb-2">
                              Message
                           </label>
                           <textarea
                              id="message"
                              name="message"
                              rows={5}
                              required
                              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                           />
                        </div>

                        <motion.button
                           type="submit"
                           disabled={formStatus === 'sending'}
                           className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                           whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                           whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                        >
                           {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {formStatus === 'success' && (
                           <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-green-500 text-center"
                           >
                              Message sent successfully!
                           </motion.p>
                        )}

                        {formStatus === 'error' && (
                           <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-center"
                           >
                              Failed to send message. Please try again.
                           </motion.p>
                        )}
                     </div>
                  </form>
               </motion.div>
            </div>
         </motion.div>
      </section>
   )
}

