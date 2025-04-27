"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload, FiCode, FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Function to handle scroll and update active section
    const handleScroll = () => {
      // Update scrolled state for header styling
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['about', 'skills', 'services', 'projects', 'testimonials', 'blog', 'contact'];
      let currentSection = '/';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `/#${section}`;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Services", path: "/#services" },
    { name: "Projects", path: "/#projects" },
    { name: "Blog", path: "/#blog" },
    { name: "Contact", path: "/#contact" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/", label: "LinkedIn" },
    { icon: <FiTwitter />, href: "https://twitter.com/", label: "Twitter" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center group" onClick={closeMenu}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                <FiCode className="text-primary-500 dark:text-primary-400 w-5 h-5" />
              </div>
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Mohammad Haseeb
            </span>
          </Link>
        </motion.div>

        <div className="flex items-center space-x-4">
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.path}
                  className={`relative px-4 py-2 rounded-md font-medium transition-all hover:text-primary-500 dark:hover:text-primary-400 ${
                    activeSection === item.path
                      ? "text-primary-500 dark:text-primary-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                  {activeSection === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-4"
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <a
                href="/resume.pdf"
                className="flex items-center px-5 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10 transition-all duration-300 group"
                download
              >
                <span>Resume</span>
                <FiDownload className="ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[73px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 flex flex-col overflow-hidden"
          >
            <div className="flex-1 overflow-y-auto py-8 px-4">
              <nav className="flex flex-col space-y-6 mb-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center text-lg px-4 py-3 rounded-lg ${
                        activeSection === item.path 
                          ? 'bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      } transition-colors`}
                      onClick={closeMenu}
                    >
                      <span>{item.name}</span>
                      {activeSection === item.path && (
                        <FiArrowRight className="ml-auto" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <div className="flex justify-center space-x-4 mb-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    aria-label={link.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="px-4"
              >
                <a
                  href="/resume.pdf"
                  className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  download
                  onClick={closeMenu}
                >
                  <FiDownload className="mr-2" />
                  Download Resume
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="py-6 px-4 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400"
            >
              <p> {new Date().getFullYear()} Mohammad Haseeb</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}