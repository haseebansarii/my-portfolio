import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/portfolio';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// client feedback"
          title="Testimonials"
          description="What clients say about working with me"
        />

        <AnimatedSection direction="scale" className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl glass-panel glass-shine p-8 lg:p-12 overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-white/[0.03]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sky-600 dark:fill-sky-400 text-sky-600 dark:text-sky-400" />
                  ))}
                </div>

                <p className="text-slate-700 dark:text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 font-light">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-900 dark:text-white font-semibold">{testimonials[current].name}</p>
                    <p className="text-slate-400 dark:text-gray-500 text-sm">{testimonials[current].role}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono text-slate-500 dark:text-gray-400 glass-badge rounded-full">
                    {testimonials[current].platform}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? 'bg-sky-600 dark:bg-sky-400 w-6' : 'bg-white/15 w-2 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
