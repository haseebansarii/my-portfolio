import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../data/portfolio';

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const numericMatch = value.match(/(\d+)/);
  const suffix = value.replace(/\d+/, '');
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center p-6 lg:p-8 rounded-2xl glass-panel glass-shine"
            >
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white font-mono mb-2">
                <AnimatedCounter value={stat.value} inView={inView} />
              </div>
              <p className="text-slate-400 dark:text-gray-500 text-sm font-mono">{stat.label}</p>
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-sky-600/30 dark:bg-sky-400/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
