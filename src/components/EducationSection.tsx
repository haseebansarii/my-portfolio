import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { education, certifications } from '../data/portfolio';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// background"
          title="Education & Certifications"
          description="Academic foundation and professional credentials"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection direction="left">
            <div className="h-full p-6 lg:p-8 rounded-2xl glass-panel glass-shine">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.degree}>
                    <span className="text-xs font-mono text-slate-500 dark:text-gray-400 glass-badge rounded-full px-3 py-1">
                      {item.period}
                    </span>
                    <h4 className="text-slate-900 dark:text-white font-medium mt-3 mb-1">{item.degree}</h4>
                    <p className="text-sky-600/70 dark:text-sky-400/70 text-sm mb-2">{item.institution}</p>
                    <p className="text-slate-400 dark:text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} direction="right">
            <div className="h-full p-6 lg:p-8 rounded-2xl glass-panel glass-shine">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center">
                  <Award className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                    className="flex items-start gap-4 p-4 rounded-xl glass-subtle hover:bg-white/[0.05] transition-colors"
                  >
                    <span className="text-xs font-mono text-slate-400 dark:text-gray-500 mt-1 shrink-0">{cert.year}</span>
                    <div>
                      <p className="text-slate-900 dark:text-white text-sm font-medium">{cert.name}</p>
                      <p className="text-slate-400 dark:text-gray-500 text-xs mt-0.5">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
