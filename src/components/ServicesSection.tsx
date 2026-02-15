import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { services, personalInfo } from '../data/portfolio';

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/image2.png"
          alt=""
          className="w-full h-full object-cover object-top opacity-[0.15] dark:opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/70 via-transparent to-[#f0f4f8]/70 dark:from-[#080c12]/80 dark:via-transparent dark:to-[#080c12]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// what I offer"
          title="Services"
          description="End-to-end development solutions for your business needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="group relative h-full p-6 lg:p-8 rounded-2xl glass-card glass-card-hover glass-shine transition-all duration-300">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] transition-colors">
                    <service.icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 dark:text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600/40 dark:bg-sky-400/40 shrink-0" />
                      <span className="text-slate-500 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 dark:text-gray-500 hover:text-sky-600 dark:hover:text-sky-300 font-mono transition-colors group/link"
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
