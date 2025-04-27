"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent dark:from-primary-900/10 dark:to-transparent -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-300/20 dark:bg-primary-700/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary-400/10 dark:bg-primary-600/10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-6"
          >
            Full-Stack Developer
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Mohammad Haseeb</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
          >
            I build exceptional digital experiences with modern technologies. Specializing in React, React Native, Next.js, and Node.js.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="btn btn-primary flex items-center justify-center gap-2">
              View My Work
              <FiArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Replace with your actual profile image */}
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary-500 to-primary-300 dark:from-primary-700 dark:to-primary-500 flex items-center justify-center text-white text-6xl font-bold">
              MH
            </div>
            
            {/* Floating tech icons */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-2xl">⚛️</span> {/* React */}
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -left-8 w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <span className="text-2xl">📱</span> {/* Mobile */}
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 left-1/4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-xl">🚀</span> {/* Performance */}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ height: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
