"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>;
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-sm">
        {theme === "dark" ? (
          <motion.div
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <FiSun className="w-5 h-5 text-yellow-500" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <FiMoon className="w-5 h-5 text-primary-600" />
          </motion.div>
        )}
      </span>
    </motion.button>
  );
}