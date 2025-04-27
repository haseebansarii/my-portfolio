"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FiUser, FiCode, FiAward, FiCoffee } from "react-icons/fi";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my background, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              {/* Replace with your actual image */}
              <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 flex items-center justify-center">
                <span className="text-7xl">👨‍💻</span>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-4 border-primary-500 rounded-lg -z-10"></div>
            
            {/* Experience numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-8 -left-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Full-Stack Developer with a passion for creating exceptional digital experiences
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I am a passionate and experienced Full-Stack Developer with strong expertise in both web and mobile app development. 
              Over the years, I have successfully delivered multiple projects from idea to launch, using modern frameworks and technologies.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I specialize in building high-quality, scalable, and user-friendly applications with a focus on performance and clean code.
              I am confident in managing both frontend and backend tasks, ensuring seamless integration between design, user experience, and backend functionality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                  <FiUser className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Professional</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clean code and best practices
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                  <FiCode className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Full-Stack</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    End-to-end development
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                  <FiAward className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Experienced</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Multiple successful projects
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                  <FiCoffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Dedicated</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Committed to client success
                  </p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary inline-block">
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
