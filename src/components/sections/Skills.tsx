"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiSmartphone, 
  FiLayout, 
  FiGlobe 
} from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiGit
} from "react-icons/si";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  delay: number;
}

const SkillCard = ({ icon, name, level, delay }: SkillCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="text-primary-600 dark:text-primary-400 text-2xl mr-3">
          {icon}
        </div>
        <h3 className="font-bold">{name}</h3>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="bg-primary-600 h-2.5 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const frontendSkills = [
    { icon: <SiReact />, name: "React.js", level: 95, delay: 0.2 },
    { icon: <SiNextdotjs />, name: "Next.js", level: 90, delay: 0.3 },
    { icon: <SiReact />, name: "React Native", level: 90, delay: 0.4 },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 85, delay: 0.5 },
    { icon: <SiBootstrap />, name: "Bootstrap", level: 90, delay: 0.6 },
    { icon: <SiJavascript />, name: "JavaScript (ES6+)", level: 95, delay: 0.7 },
    { icon: <SiTypescript />, name: "TypeScript", level: 85, delay: 0.8 },
  ];

  const backendSkills = [
    { icon: <SiNodedotjs />, name: "Node.js", level: 90, delay: 0.2 },
    { icon: <SiExpress />, name: "Express.js", level: 85, delay: 0.3 },
    { icon: <SiMongodb />, name: "MongoDB", level: 85, delay: 0.4 },
    { icon: <SiPostgresql />, name: "PostgreSQL", level: 80, delay: 0.5 },
    { icon: <SiMysql />, name: "MySQL", level: 80, delay: 0.6 },
    { icon: <SiFirebase />, name: "Firebase", level: 90, delay: 0.7 },
    { icon: <SiSupabase />, name: "Supabase", level: 85, delay: 0.8 },
    { icon: <SiGit />, name: "Git", level: 90, delay: 0.9 },
  ];

  const skillCategories = [
    {
      icon: <FiLayout />,
      title: "Frontend Development",
      description: "Creating responsive, interactive, and visually appealing user interfaces",
      delay: 0.2,
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      delay: 0.3,
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native",
      delay: 0.4,
    },
    {
      icon: <FiDatabase />,
      title: "Database Management",
      description: "Working with SQL and NoSQL databases for efficient data storage",
      delay: 0.5,
    },
    {
      icon: <FiGlobe />,
      title: "API Integration",
      description: "Connecting applications with third-party services and APIs",
      delay: 0.6,
    },
    {
      icon: <FiCode />,
      title: "Clean Code Practices",
      description: "Writing maintainable, scalable, and efficient code",
      delay: 0.7,
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: category.delay }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Frontend Skills */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FiLayout className="mr-3 text-primary-600 dark:text-primary-400" />
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
                delay={skill.delay}
              />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FiServer className="mr-3 text-primary-600 dark:text-primary-400" />
            Backend Development & Other Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
                delay={skill.delay}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
