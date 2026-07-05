import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// career path"
          title="Experience"
          description="My journey as a developer"
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((item, index) => (
            <AnimatedSection key={item.year} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="relative flex gap-6 lg:gap-10 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.2 }}
                    className={`relative z-10 w-4 h-4 rounded-full border-2 shrink-0 ${
                      index === 0
                        ? 'bg-sky-600 dark:bg-sky-400 border-sky-600 dark:border-sky-400 shadow-[0_0_12px_rgba(2,132,199,0.4)] dark:shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                        : 'bg-white/5 border-white/20'
                    }`}
                  />
                  {index < experience.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <span className="inline-block px-3 py-1 text-xs font-mono text-slate-500 dark:text-gray-400 glass-badge rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sky-600/70 dark:text-sky-400/70 text-sm mb-3">{item.company}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-slate-500 dark:text-gray-400 glass-subtle rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
