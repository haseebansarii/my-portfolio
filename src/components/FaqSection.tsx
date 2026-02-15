import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { faqs } from '../data/portfolio';

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.06} direction={index % 2 === 0 ? 'left' : 'right'}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
      >
        <div
          className={`rounded-xl transition-all duration-200 ${
            isOpen
              ? 'glass-panel'
              : 'glass-card glass-card-hover'
          }`}
        >
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400 dark:text-gray-500 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-slate-900 dark:text-white font-medium text-sm lg:text-base pr-4">{question}</h3>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <ChevronDown className="w-4 h-4 text-slate-400 dark:text-gray-500" />
            </motion.div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pl-14">
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </AnimatedSection>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// common questions"
          title="FAQ"
          description="Answers to questions I get asked frequently"
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
