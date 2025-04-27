"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

export default function ViewMoreProjects() {
  const [isExpanded, setIsExpanded] = useState(false);

  const additionalProjects: Project[] = [
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
      technologies: ["Next.js", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
      demoUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/yourusername/ecommerce",
      image: "/images/ecommerce.jpg",
    },
    {
      id: 5,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      demoUrl: "https://example.com/taskmanager",
      githubUrl: "https://github.com/yourusername/taskmanager",
      image: "/images/taskmanager.jpg",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current conditions and forecasts for multiple locations with interactive maps.",
      technologies: ["React", "OpenWeather API", "Leaflet", "Chart.js"],
      demoUrl: "https://example.com/weather",
      githubUrl: "https://github.com/yourusername/weather",
      image: "/images/weather.jpg",
    },
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-12">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (project.id - 4) * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                    >
                      <FiExternalLink className="mr-1" /> Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <FiGithub className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-8">
        <button
          onClick={toggleExpand}
          className="group flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500"
        >
          <span className="mr-2">{isExpanded ? "Show Less" : "View More Projects"}</span>
          {isExpanded ? (
            <FiChevronUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          ) : (
            <FiChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
          )}
        </button>
      </div>
    </div>
  );
}
