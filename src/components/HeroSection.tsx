import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Download, MessageCircle } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import GlitchText from './GlitchText';
import { personalInfo, roles, terminalLines } from '../data/portfolio';
import { isIOS, isMobile } from '../utils/deviceDetection';

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const useMobileOptimization = isIOS() || isMobile();
  const blurAmount = useMobileOptimization ? '4px' : '8px';

  useEffect(() => {
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-white/[0.15] dark:border-white/[0.1] bg-white/[0.15] dark:bg-white/[0.02]"
      style={{ backdropFilter: `blur(${blurAmount})`, WebkitBackdropFilter: `blur(${blurAmount})` }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.06] dark:border-white/[0.06] bg-white/[0.1] dark:bg-white/[0.02]">
 <div className="w-3 h-3 rounded-full bg-red-400/60 dark:bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/60 dark:bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-400/60 dark:bg-green-500" />
        <span className="ml-2 text-xs font-mono text-slate-500 dark:text-gray-500">haseeb@dev ~ zsh</span>
      </div>
      <div className="p-4 font-mono text-sm space-y-1 min-h-[200px]">
        {terminalLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: visibleLines.includes(index) ? 1 : 0,
              x: visibleLines.includes(index) ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
            className={`flex gap-2 ${line.prefix ? 'text-slate-700 dark:text-gray-300' : 'text-sky-600 dark:text-sky-300'}`}
          >
            {line.prefix && <span className="text-slate-500 dark:text-gray-500 shrink-0">{line.prefix}</span>}
            <span>{line.text}</span>
          </motion.div>
        ))}
        <div className="flex gap-2 items-center text-slate-700 dark:text-gray-300">
          <span className="text-slate-500 dark:text-gray-500">~$</span>
          <span className="cursor-blink" />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const typedRole = useTypewriter(roles, 80, 40, 2000);
  const useMobileOptimization = isIOS() || isMobile();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mobile-safe">
      <div className="absolute inset-0 z-0 mobile-safe">
        <video
          src="/iStock-2218919293.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-[0.18] dark:opacity-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/60 via-transparent to-[#f0f4f8] dark:from-[#080c12]/60 dark:via-transparent dark:to-[#080c12]" />
      </div>
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-sky-400/[0.08] dark:bg-sky-500/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-teal-400/[0.08] dark:bg-teal-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mobile-safe container-safe">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-white/[0.2] dark:bg-white/[0.05] border border-white/[0.3] dark:border-white/[0.1]"
              style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-500 dark:text-gray-400 text-sm font-mono">Available for Freelance</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2">
                <span className="text-slate-500 dark:text-gray-500 text-lg sm:text-xl font-mono font-normal block mb-2">Hello, I'm</span>
                <GlitchText
                  text={personalInfo.name}
                  as="span"
                  className="text-slate-900 dark:text-white block"
                />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 mt-4 mb-6"
            >
              <span className="text-xl sm:text-2xl font-mono text-slate-500 dark:text-gray-500">
                {'> '}<span className="text-sky-600 dark:text-sky-300">{typedRole}</span>
                <span className="text-slate-400 dark:text-gray-500 animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg mb-8"
            >
              Crafting high-performance web & mobile applications with modern technologies.
              Specialized in <span className="text-slate-700 dark:text-gray-200">MERN Stack</span>,{' '}
              <span className="text-slate-700 dark:text-gray-200">React Native</span>,{' '}
              <span className="text-slate-700 dark:text-gray-200">Supabase</span> &{' '}
              <span className="text-slate-700 dark:text-gray-200">Firebase</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={personalInfo.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-all hover:shadow-lg backdrop-blur-sm"
              >
                Hire Me on Fiverr
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 glass-btn rounded-xl text-slate-700 dark:text-white transition-all duration-300"
              >
                View Projects
                <Download className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <TerminalWindow />
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-gray-600 hover:text-slate-700 dark:hover:text-white transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
