import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// Text slides up from behind an invisible mask (overflow-hidden line).
export default function MaskReveal({ children, delay = 0, className = '' }: MaskRevealProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
