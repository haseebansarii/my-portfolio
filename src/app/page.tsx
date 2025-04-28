"use client";
import { FiArrowDown, FiCode, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';
import { BsLightningCharge } from 'react-icons/bs';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-100/30 to-transparent dark:from-primary-900/20 dark:to-transparent -z-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary-200/20 dark:bg-secondary-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200/20 dark:bg-accent-800/10 rounded-full blur-3xl animate-float"></div>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="animate-pulse inline-block mr-2">✨</span> Full-Stack Developer
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hi, I'm Mohammad Haseeb
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I craft <span className="text-primary-500 font-semibold">beautiful</span> & <span className="text-secondary-500 font-semibold">functional</span> digital experiences with modern web technologies
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a 
              href="#projects" 
              className="group relative overflow-hidden bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">View My Work <IoRocketOutline className="ml-2 group-hover:translate-x-1 transition-transform" /></span>
              <span className="absolute inset-0 h-full w-0 bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="relative overflow-hidden border-2 border-primary-500 text-primary-500 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 h-full w-0 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiTwitter className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.6 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
        >
          <motion.a 
            href="#about" 
            className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center max-w-2xl">Passionate developer crafting digital experiences</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                {/* Main image with gradient border */}
                <div className="relative z-10 rounded-lg overflow-hidden p-2 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500">
                  <div className="aspect-w-4 aspect-h-5 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                    <Image 
                      src="/images/profile.jpg" 
                      alt="Mohammad Haseeb" 
                      className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                      width={500} // you must add width
                      height={500} // and height too
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500/20 rounded-full z-0"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-dashed border-primary-300 dark:border-primary-700 rounded-full z-0 animate-spin-slow"></div>
                
                {/* Experience badge */}
                <div className="absolute top-4 -right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full shadow-lg z-20 transform rotate-3">
                  <span className="font-bold">5+ Years Experience</span>
                </div>
              </div>
              
              {/* Social proof */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Projects</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary-500 to-accent-500 text-transparent bg-clip-text">30+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Clients</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-500 to-success-500 text-transparent bg-clip-text">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 inline-block">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Full-Stack Developer & UI/UX Enthusiast</span>
                </h3>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Hello! I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Mohammad Haseeb</span>, a passionate Full-Stack Developer with a keen eye for creating beautiful, functional, and user-centered digital experiences. With over 5 years of experience in web and mobile development, I've had the privilege of working on diverse projects that have sharpened my skills and expanded my perspective.
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I specialize in building modern web applications using <span className="font-medium text-secondary-600 dark:text-secondary-400">React</span>, <span className="font-medium text-secondary-600 dark:text-secondary-400">Next.js</span>, and <span className="font-medium text-secondary-600 dark:text-secondary-400">Node.js</span>, as well as mobile applications with <span className="font-medium text-secondary-600 dark:text-secondary-400">React Native</span>. My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations.
                  </p>
                </div>
              </div>
              
              {/* Skills & Qualities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-primary-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    My Strengths
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Problem-solving with creative solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Clean, maintainable code architecture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>User-centered design thinking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Continuous learning and adaptation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-secondary-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    My Approach
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2">•</span>
                      <span>Understand client needs thoroughly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2">•</span>
                      <span>Develop scalable, future-proof solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2">•</span>
                      <span>Prioritize performance and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-500 mr-2">•</span>
                      <span>Iterate based on feedback and metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="/#contact" className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Talk
                </a>
                <a href="/resume.pdf" download className="px-6 py-3 bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 border border-primary-500 dark:border-primary-400 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-medium flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary-400/10 dark:bg-primary-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary-400/10 dark:bg-secondary-400/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">My Skills</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center max-w-2xl">Technologies and tools I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border-t-4 border-primary-500 hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
               
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Frontend</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">React.js</span>
                    <span className="text-primary-500">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Next.js</span>
                    <span className="text-primary-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">React Native</span>
                    <span className="text-primary-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                    <span className="text-primary-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">JavaScript (ES6+)</span>
                    <span className="text-primary-500">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border-t-4 border-secondary-500 hover:shadow-secondary-500/10 hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900/50 text-secondary-600 dark:text-secondary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Backend</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-2 relative">
                        <Image 
                          src="/images/tools/nodejs.png" 
                          alt="Node.js" 
                          width={24} 
                          height={24} 
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                    </div>
                    <span className="text-secondary-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary-500 to-accent-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-2 relative">
                        <Image 
                          src="/images/tools/express.png" 
                          alt="Express.js" 
                          width={24} 
                          height={24} 
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Express.js</span>
                    </div>
                    <span className="text-secondary-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary-500 to-accent-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-2 relative">
                        <Image 
                          src="/images/tools/mongodb.png" 
                          alt="MongoDB" 
                          width={24} 
                          height={24} 
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">MongoDB</span>
                    </div>
                    <span className="text-secondary-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary-500 to-accent-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-2 relative">
                        <Image 
                          src="/images/tools/postgres.png" 
                          alt="PostgreSQL" 
                          width={24} 
                          height={24} 
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">PostgreSQL</span>
                    </div>
                    <span className="text-secondary-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary-500 to-accent-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-2 relative">
                        <Image 
                          src="/images/tools/mysql.png" 
                          alt="MySQL" 
                          width={24} 
                          height={24} 
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">MySQL</span>
                    </div>
                    <span className="text-secondary-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary-500 to-accent-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border-t-4 border-accent-500 hover:shadow-accent-500/10 hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/50 text-accent-600 dark:text-accent-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Other Skills</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Firebase & Supabase</span>
                    <span className="text-accent-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-500 to-success-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">REST API Development</span>
                    <span className="text-accent-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-500 to-success-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Authentication</span>
                    <span className="text-accent-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-500 to-success-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Git and GitHub</span>
                    <span className="text-accent-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-500 to-success-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Responsive Design</span>
                    <span className="text-accent-500">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-500 to-success-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent -z-10"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">My Projects</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center max-w-2xl">Check out some of my recent work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-90 z-10"></div>
              <div className="absolute inset-0 overflow-hidden">
                <Image 
                  src="/images/p1.png" 
                  alt="Intelligent Car Rental System" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="relative z-20 p-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="text-white text-sm font-medium inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">Featured Project</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Intelligent Car Rental System</h3>
                  <p className="text-white/90 mb-4">A full-stack mobile and web app allowing users to rent cars on a peer-to-peer basis with real-time availability, secure payments, and review system.</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Supabase</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">PostgreSQL</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-accent-500 opacity-90 z-10"></div>
              <div className="absolute inset-0 overflow-hidden">
                <Image 
                  src="/images/p2.png" 
                  alt="E-Commerce Platform" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="relative z-20 p-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="text-white text-sm font-medium inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">Mobile App</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Modern Dating App</h3>
                  <p className="text-white/90 mb-4">Designed and developed a dating platform with swipe-based matching, real-time chat, profile verification, and AI-powered compatibility suggestions.</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Firebase</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Node.js</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-success-500 opacity-90 z-10"></div>
              <div className="absolute inset-0 overflow-hidden">
                <Image 
                  src="/images/p3.png" 
                  alt="Task Management App" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="relative z-20 p-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="text-white text-sm font-medium inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">Web Platform</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Basketball Matchmaking Platform</h3>
                  <p className="text-white/90 mb-4">Created a platform for basketball players to find and organize matches, with team formation, court booking, and an admin dashboard for event management.</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">MongoDB</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <a href="#" className="group relative overflow-hidden px-8 py-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="relative z-10 flex items-center text-primary-500 dark:text-primary-400 font-medium group-hover:text-white transition-colors duration-300">View All Projects</span>
              <span className="absolute inset-0 h-full w-0 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="absolute top-40 left-20 w-60 h-60 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">My Services</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center max-w-2xl">Specialized solutions to help your business grow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Custom, responsive websites and web applications built with modern technologies like React, Next.js, and Node.js.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Responsive Design
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO Optimization
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Performance Tuning
                  </li>
                </ul>
                
                <a href="/#contact" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-3 bg-gradient-to-r from-secondary-500 to-accent-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-secondary-50 dark:bg-secondary-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-500 dark:text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Mobile App Development</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Cross-platform mobile applications built with React Native that work seamlessly on both iOS and Android devices.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Native-like Performance
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cross-platform Support
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Offline Capabilities
                  </li>
                </ul>
                
                <a href="/#contact" className="inline-flex items-center text-secondary-500 dark:text-secondary-400 font-medium hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-3 bg-gradient-to-r from-accent-500 to-success-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-accent-50 dark:bg-accent-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-500 dark:text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Robust and scalable backend solutions using Node.js, Express, and various databases to power your applications.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    RESTful APIs
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Database Design
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Authentication & Security
                  </li>
                </ul>
                
                <a href="/#contact" className="inline-flex items-center text-accent-500 dark:text-accent-400 font-medium hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 -z-10"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Client Testimonials</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center max-w-2xl">What people say about working with me</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-5 left-8 w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 italic mb-6">
                <svg className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p>Working with Mohammad was an absolute pleasure. His expertise in React and Next.js helped transform our outdated website into a modern, responsive platform that our customers love to use.</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                  <Image 
                    src="/images/testimonial1.jpg" 
                    alt="Sachin warma" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Sachin warma</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-5 left-8 w-10 h-10 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 italic mb-6">
                <svg className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p>Mohammad developed a React Native app for our business that exceeded all expectations. His attention to detail and ability to translate our ideas into a functional, beautiful mobile experience was impressive.</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                  <Image 
                    src="/images/testimonial2.jpg" 
                    alt="Michael Chen" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Michael Chen</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Product Manager, MobiSolutions</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-5 left-8 w-10 h-10 bg-gradient-to-r from-accent-500 to-success-500 rounded-full flex items-center justify-center text-white text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 italic mb-6">
                <svg className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p>I hired Mohammad to build a custom e-commerce solution for my small business. He delivered a secure, scalable platform that has significantly increased our online sales and streamlined our operations.</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                  <Image 
                    src="/images/testimonial3.jpg" 
                    alt="Emily Rodriguez" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Emily Rodriguez</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Owner, Boutique Essentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="absolute top-40 left-20 w-60 h-60 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Latest Articles</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center max-w-2xl">Thoughts, tutorials, and insights about web development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative h-56 overflow-hidden">
                <Image src="/images/blog2.jpg" alt="Blog 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-xs font-medium px-2 py-1 rounded-full text-primary-500 dark:text-primary-400 shadow-sm">
                  Web Development
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>June 12, 2023</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  Building Modern UIs with React and Tailwind CSS
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  Learn how to combine the power of React with the utility-first approach of Tailwind CSS to create beautiful, responsive user interfaces quickly and efficiently.
                </p>
                
                <a href="#" className="inline-flex items-center font-medium text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-56 overflow-hidden">
                <Image src="/images/blog1.jpg" alt="Blog 2" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-xs font-medium px-2 py-1 rounded-full text-secondary-500 dark:text-secondary-400 shadow-sm">
                  Mobile Development
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 28, 2023</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-secondary-500 dark:group-hover:text-secondary-400 transition-colors">
                  React Native vs Flutter: A Comprehensive Comparison
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  Explore the differences, advantages, and trade-offs between React Native and Flutter for cross-platform mobile app development to help you choose the right framework for your next project.
                </p>
                
                <a href="#" className="inline-flex items-center font-medium text-secondary-500 dark:text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative h-56 overflow-hidden">
                <Image src="/images/blog3.jpg" alt="Blog 3" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-success-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-xs font-medium px-2 py-1 rounded-full text-accent-500 dark:text-accent-400 shadow-sm">
                  Backend Development
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>April 15, 2023</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                  Building Scalable APIs with Node.js and Express
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  Discover best practices for designing and implementing robust, scalable RESTful APIs using Node.js and Express, including authentication, error handling, and performance optimization.
                </p>
                
                <a href="#" className="inline-flex items-center font-medium text-accent-500 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <a href="#" className="px-6 py-3 bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 font-medium rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500">
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 -z-10"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-100/40 dark:bg-primary-900/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-secondary-100/40 dark:bg-secondary-900/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Get In Touch</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center max-w-2xl">Have a project in mind or want to collaborate? Let's talk!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 animate-slide-in-left">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002 2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Email</h4>
                      <a href="mailto:ansarihaseeb615@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">ansarihaseeb615@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900/50 text-secondary-600 dark:text-secondary-400 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</h4>
                      <a href="tel:+123456789" className="text-secondary-600 dark:text-secondary-400 hover:underline">+92 (323) 773 8253</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/50 text-accent-600 dark:text-accent-400 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">Kamoke Punjab, Pakistan</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/haseebansarii" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/haseeb-ansari-7168272b5/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                    <a href="https://www.fiverr.com/s/NNlRBxN" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.678 0H3.322A3.325 3.325 0 000 3.322v17.356A3.325 3.325 0 003.322 24h17.356A3.325 3.325 0 0024 20.678V3.322A3.325 3.325 0 0020.678 0zM12.74 17.856h-1.931v-4.717H9.406v4.717H7.475V6.272h1.931v5.285h1.403V6.272h1.931v11.584zM18.135 12.715h-2.262v2.68h2.262v2.461h-4.193V6.272h4.193v2.46h-2.262v1.524h2.262v2.459z"/>
  </svg>
</a>

                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 animate-slide-in-right">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <div className="relative">
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors peer" 
                          placeholder=" "
                          required
                        />
                        <label 
                          htmlFor="name" 
                          className="absolute left-4 -top-3 bg-gray-50 dark:bg-gray-700 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary-500 dark:peer-focus:text-primary-400"
                        >
                          Your Name
                        </label>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="relative">
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors peer" 
                          placeholder=" "
                          required
                        />
                        <label 
                          htmlFor="email" 
                          className="absolute left-4 -top-3 bg-gray-50 dark:bg-gray-700 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary-500 dark:peer-focus:text-primary-400"
                        >
                          Your Email
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="relative">
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors peer" 
                        placeholder=" "
                        required
                      />
                      <label 
                        htmlFor="subject" 
                        className="absolute left-4 -top-3 bg-gray-50 dark:bg-gray-700 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary-500 dark:peer-focus:text-primary-400"
                      >
                        Subject
                      </label>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="relative">
                      <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors peer" 
                        placeholder=" "
                        required
                      ></textarea>
                      <label 
                        htmlFor="message" 
                        className="absolute left-4 -top-3 bg-gray-50 dark:bg-gray-700 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary-500 dark:peer-focus:text-primary-400"
                      >
                        Your Message
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium shadow-lg hover:shadow-primary-500/30 transition-shadow duration-300 w-full"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
