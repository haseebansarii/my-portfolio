"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiFilter } from "react-icons/fi";

// Project data from aboutme.txt
const projects = [
  {
    id: 1,
    title: "Intelligent Car Rental System",
    description: "A full-stack mobile and web app allowing users to rent cars on a peer-to-peer basis.",
    features: [
      "Multi-step booking process",
      "Real-time chat between renters and owners",
      "Payment integration",
      "Admin panel for car approvals"
    ],
    technologies: ["React Native", "Expo", "Supabase", "PostgreSQL"],
    image: "/project-car-rental.jpg",
    category: "mobile",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Modern Dating App",
    description: "Designed and developed a dating platform with swipe-based matching, chat, and profile verification.",
    features: [
      "Geo-location based matches",
      "Phone and email verification",
      "Profile recommendations"
    ],
    technologies: ["React Native", "Firebase", "Node.js", "Express.js"],
    image: "/project-dating-app.jpg",
    category: "mobile",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Basketball Matchmaking Platform",
    description: "Created a platform for basketball players to find and organize matches, with an admin dashboard to manage users and tournaments.",
    features: [
      "Match booking",
      "Player ranking system",
      "Event scheduling",
      "Admin analytics dashboard"
    ],
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
    image: "/project-basketball.jpg",
    category: "web",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 4,
    title: "Food Delivery App",
    description: "A comprehensive food delivery application with restaurant listings, ordering, and delivery tracking.",
    features: [
      "Restaurant search and filtering",
      "Order tracking",
      "Payment processing",
      "Delivery status updates"
    ],
    technologies: ["React Native", "Firebase"],
    image: "/project-food-delivery.jpg",
    category: "mobile",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 5,
    title: "Gym Management Mobile App",
    description: "A mobile application for gym owners to manage memberships, classes, and track member progress.",
    features: [
      "Membership management",
      "Class scheduling",
      "Progress tracking",
      "Payment processing"
    ],
    technologies: ["React Native", "Firebase", "Node.js"],
    image: "/project-gym.jpg",
    category: "mobile",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 6,
    title: "University Management Web System",
    description: "A comprehensive web-based system for university administration, student management, and course scheduling.",
    features: [
      "Student registration",
      "Course management",
      "Grade tracking",
      "Administrative dashboard"
    ],
    technologies: ["React.js", "MySQL", "Node.js", "Express.js"],
    image: "/project-university.jpg",
    category: "web",
    links: {
      demo: "#",
      github: "#"
    }
  }
];

// Project card component
interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover"
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
        {/* Placeholder for project image */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-300 dark:from-primary-900 dark:to-primary-700">
          <span className="text-4xl">{project.title.charAt(0)}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
          {project.description}
        </p>
        
        <div className="mb-6">
          <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 pl-4 list-disc">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between">
          <a 
            href={project.links.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
          >
            <FiExternalLink className="mr-1" /> Live Demo
          </a>
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
          >
            <FiGithub className="mr-1" /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, featuring web and mobile applications built with modern technologies.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === "all"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === "web"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Web Apps
          </button>
          <button
            onClick={() => setFilter("mobile")}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === "mobile"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Mobile Apps
          </button>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects button */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="#contact" 
            className="btn btn-outline inline-flex items-center"
          >
            Interested in working together? <FiExternalLink className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
