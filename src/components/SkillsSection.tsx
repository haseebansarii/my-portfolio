import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolio';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/iStock-1483065942.jpg"
          alt=""          loading="lazy"          className="media-invert-light w-full h-full object-cover opacity-[0.22] dark:opacity-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/70 via-transparent to-[#f0f4f8]/70 dark:from-[#080c12]/80 dark:via-transparent dark:to-[#080c12]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// tech stack"
          title="Skills & Expertise"
          description="Technologies I use to bring ideas to life"
        />

        <AnimatedSection direction="down">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2 text-sm font-mono rounded-xl transition-all ${
                  activeCategory === cat.id
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-400 dark:text-gray-500 hover:text-slate-700 dark:hover:text-gray-300'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 glass-badge rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-5 rounded-xl transition-all duration-300 border border-white/[0.15] dark:border-white/[0.1] bg-white/[0.15] dark:bg-white/[0.02] backdrop-blur-[6px] hover:bg-white/[0.25] dark:hover:bg-white/[0.04] hover:border-white/[0.25] dark:hover:border-white/[0.15]"
                style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.2] dark:bg-white/[0.05] border border-white/[0.3] dark:border-white/[0.1] flex items-center justify-center group-hover:bg-white/[0.3] dark:group-hover:bg-white/[0.08] transition-colors">
                    <skill.icon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-900 dark:text-white font-medium text-sm">{skill.name}</h3>
                    <span className="text-xs text-slate-400 dark:text-gray-500 font-mono capitalize">{skill.category}</span>
                  </div>
                  <span className="text-sky-600 dark:text-sky-300 font-mono text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-sky-500/60 to-sky-300/80"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
