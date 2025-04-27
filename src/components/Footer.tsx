"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiCode, FiHeart, FiArrowUp, FiSend, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub className="w-5 h-5" />,
      href: "https://github.com/",
      color: "hover:bg-gray-800 hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Twitter",
      icon: <FiTwitter className="w-5 h-5" />,
      href: "https://twitter.com/",
      color: "hover:bg-sky-500 hover:text-white"
    },
    {
      name: "Instagram",
      icon: <FiInstagram className="w-5 h-5" />,
      href: "https://instagram.com/",
      color: "hover:bg-pink-600 hover:text-white"
    },
    {
      name: "Email",
      icon: <FiMail className="w-5 h-5" />,
      href: "mailto:ansarihaseeb615@gmail.com",
      color: "hover:bg-primary-500 hover:text-white"
    },
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/#services" },
        { name: "Mobile Apps", href: "/#services" },
        { name: "UI/UX Design", href: "/#services" },
        { name: "Consulting", href: "/#services" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/#blog" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Contact", href: "/#contact" },
        { name: "Resume", href: "/resume.pdf", download: true },
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const contactInfo = [
    { icon: <FiMapPin />, text: "Kamoke, Pakistan" },
    { icon: <FiPhone />, text: "+92 323 7738 253" },
    { icon: <FiMail />, text: "ansarihaseeb615@gmail.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Back to top button */}
      <div className="flex justify-center -mt-10 mb-16">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 border border-gray-200 dark:border-gray-700"
          aria-label="Back to top"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-full z-10"></div>
          <FiArrowUp className="w-5 h-5 text-primary-500 dark:text-primary-400 z-20 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors" />
        </motion.button>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Branding and description */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-4"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white mr-3">
                <FiCode className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Mohammad Haseeb
              </h3>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 mb-6 max-w-md"
            >
              I craft beautiful, functional digital experiences with modern web technologies. Specializing in React, React Native, Next.js, and Node.js.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm ${link.color} transform hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 mr-3">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Footer links */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
                >
                  {section.title}
                </motion.h4>
                
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * sectionIndex + 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center"
                        {...(link.download ? { download: true } : {})}
                      >
                        <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mr-2 transition-colors group-hover:bg-primary-500"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Stay Updated</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Subscribe to my newsletter for the latest updates.</p>
              
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 pr-12"
                />
                <button className="absolute right-1 top-1 p-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400 text-sm"
        >
          <p> {currentYear} Mohammad Haseeb. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with</span>
            <FiHeart className="w-4 h-4 mx-1 text-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}