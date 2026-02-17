import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 rounded-full border-4 border-slate-200/20 dark:border-white/10 border-t-sky-600 dark:border-t-sky-400"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Terminal className="w-6 h-6 text-sky-600 dark:text-sky-400" />
          </div>
        </div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-slate-500 dark:text-gray-400 text-sm font-mono"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
