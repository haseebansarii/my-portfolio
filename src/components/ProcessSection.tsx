import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { processSteps } from '../data/portfolio';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/iStock-1257047131.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.12] dark:opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/70 via-transparent to-[#f0f4f8]/70 dark:from-[#080c12]/80 dark:via-transparent dark:to-[#080c12]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="group relative h-full p-6 rounded-2xl transition-all duration-300 border border-white/[0.15] dark:border-white/[0.1] bg-white/[0.15] dark:bg-white/[0.02] hover:bg-white/[0.25] dark:hover:bg-white/[0.04] hover:border-white/[0.25] dark:hover:border-white/[0.15]"
                style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
              >
                <span className="block text-5xl font-bold text-slate-900/[0.04] dark:text-white/[0.04] font-mono mb-4 select-none">
                  {step.step}
                </span>
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-2 -mt-4 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 dark:text-gray-500 text-sm leading-relaxed">{step.description}</p>

                <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-white/[0.2] dark:bg-white/[0.05] border border-white/[0.3] dark:border-white/[0.1] flex items-center justify-center">
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
