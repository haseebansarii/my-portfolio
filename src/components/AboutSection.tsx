import { motion } from 'framer-motion';
import { MapPin, Briefcase, Coffee, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { personalInfo, stats } from '../data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// about me"
          title="Who I Am"
          description="A passionate developer who turns complex problems into elegant solutions"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden glass-panel glass-shine">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Developer workspace"
                  loading="lazy"
                  className="media-soften-light w-full h-80 lg:h-96 object-cover opacity-75 dark:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f0f4f8] via-[#f0f4f8]/40 to-transparent dark:from-[#080c12] dark:via-[#080c12]/40" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Available Worldwide via Fiverr</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl glass-panel glass-shine flex flex-col items-center justify-center gap-1"
              >
                <span className="text-3xl font-bold text-slate-900 dark:text-white">4+</span>
                <span className="text-xs text-slate-500 dark:text-gray-400 text-center">Years of<br />Experience</span>
              </motion.div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection direction="right" delay={0.1}>
              <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Briefcase, label: 'Freelancer', value: 'Fiverr Top Rated' },
                  { icon: Coffee, label: 'Specialty', value: 'Full Stack Dev' },
                  { icon: Award, label: 'Focus', value: 'Clean Code' },
                  { icon: MapPin, label: 'Availability', value: 'Remote / Global' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl glass-card glass-card-hover glass-shine transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-sky-600 dark:text-sky-400 mb-2" />
                    <p className="text-xs text-slate-400 dark:text-gray-500 mb-0.5">{item.label}</p>
                    <p className="text-sm text-slate-900 dark:text-white font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl glass-subtle">
                    <motion.p
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="text-2xl font-bold text-slate-900 dark:text-white mb-1"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-xs text-slate-400 dark:text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
