import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { packages, personalInfo } from '../data/portfolio';

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// packages"
          title="Pricing"
          description="Transparent pricing for every project size"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} delay={index * 0.12} direction={index === 0 ? 'left' : index === 2 ? 'right' : 'scale'}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`relative h-full flex flex-col p-6 lg:p-8 rounded-2xl transition-all duration-300 glass-shine ${
                  pkg.highlighted
                    ? 'glass-panel border-sky-600/20 dark:border-sky-400/20 shadow-[0_0_30px_rgba(56,189,248,0.06)] mt-6'
                    : 'glass-card glass-card-hover mt-6'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    {/* <span className="px-4 py-1 text-xs font-mono bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] rounded-full font-semibold backdrop-blur-sm shadow-lg">
                      Most Popular
                    </span> */}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">{pkg.name}</h3>
                  <p className="text-slate-400 dark:text-gray-500 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white font-mono">{pkg.price}</span>
                    {!pkg.price.includes('+') && <span className="text-slate-400 dark:text-gray-500 text-sm">/project</span>}
                  </div>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-slate-500 dark:text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                    pkg.highlighted
                      ? 'bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] hover:bg-slate-800 dark:hover:bg-white hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm'
                      : 'glass-btn text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-400 dark:text-gray-500 text-sm mt-8 font-mono"
        >
          All prices are starting rates. Final pricing depends on project scope.
        </motion.p>
      </div>
    </section>
  );
}
