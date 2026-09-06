import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import type { GalleryShot } from '../data/portfolio';

interface ProjectGalleryProps {
  shots: GalleryShot[];
  /** Portrait phone captures tile 4-up; wide desktop captures tile 2-up. */
  layout: 'phone' | 'desktop';
}

// Screenshot grid with a keyboard-navigable lightbox. Wide shots span the
// full row; portrait phone captures sit in the phone-width columns.
export default function ProjectGallery({ shots, layout }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) => setOpenIndex((i) => (i === null ? i : (i + delta + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };

    // Lock both elements — Lenis drives the scroll on <html>, not <body>.
    const root = document.documentElement;
    const prevRoot = root.style.overflow;
    const prevBody = document.body.style.overflow;
    root.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = prevRoot;
      document.body.style.overflow = prevBody;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, step]);

  const active = openIndex === null ? null : shots[openIndex];

  const gridClass =
    layout === 'desktop'
      ? 'grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6'
      : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5';
  const wideClass = layout === 'desktop' ? 'md:col-span-2' : 'col-span-2 md:col-span-3 lg:col-span-4';

  return (
    <>
      <div className={gridClass}>
        {shots.map((shot, index) => (
          <motion.figure
            key={shot.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={shot.wide ? wideClass : ''}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block w-full overflow-hidden rounded-2xl glass-card glass-card-hover glass-shine transition-all duration-500"
              aria-label={`View screenshot: ${shot.caption}`}
            >
              <img
                src={shot.src}
                alt={shot.caption}
                loading="lazy"
                width={shot.width}
                height={shot.height}
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <span className="absolute top-3 right-3 w-8 h-8 rounded-lg glass-badge flex items-center justify-center text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </button>
            <figcaption className="mt-3 px-1 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-gray-400">
              {shot.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-[#f0f4f8]/90 dark:bg-[#050810]/92 backdrop-blur-xl"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-xl glass-badge flex items-center justify-center text-slate-900 dark:text-white hover:scale-105 transition-transform"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {shots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl glass-badge flex items-center justify-center text-slate-900 dark:text-white hover:scale-105 transition-transform"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl glass-badge flex items-center justify-center text-slate-900 dark:text-white hover:scale-105 transition-transform"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-4 max-h-full"
            >
              <img
                src={active.src}
                alt={active.caption}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl"
              />
              <figcaption className="max-w-xl text-center text-sm text-slate-600 dark:text-gray-300 px-4">
                {active.caption}
                <span className="block mt-1 font-mono text-xs text-slate-400 dark:text-gray-500">
                  {(openIndex ?? 0) + 1} / {shots.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
