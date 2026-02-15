import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { processSteps } from '../data/portfolio';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// how I work"
          title="My Process"
          description="A structured approach to deliver quality results on every project"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <AnimatedSection key={step.step} delay={index * 0.08} direction={index % 2 === 0 ? 'left' : 'right'}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative h-full p-6 rounded-2xl glass-card glass-card-hover glass-shine transition-all duration-300"
              >
                <span className="block text-5xl font-bold text-slate-900/[0.04] dark:text-white/[0.04] font-mono mb-4 select-none">
                  {step.step}
                </span>
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-2 -mt-4 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 dark:text-gray-500 text-sm leading-relaxed">{step.description}</p>

                <div className="absolute top-6 right-6 w-8 h-8 rounded-lg glass-badge flex items-center justify-center">
                  <span className="text-xs font-mono text-slate-400 dark:text-gray-500">{step.step}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
