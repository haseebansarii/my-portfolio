import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
}

const getInitial = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'left':
      return { opacity: 0, x: -distance };
    case 'right':
      return { opacity: 0, x: distance };
    case 'down':
      return { opacity: 0, y: distance };
    case 'scale':
      return { opacity: 0, scale: 0.85 };
    case 'none':
      return { opacity: 0 };
    case 'up':
    default:
      return { opacity: 0, y: distance };
  }
};

const getAnimate = (direction: Direction) => {
  switch (direction) {
    case 'left':
    case 'right':
      return { opacity: 1, x: 0 };
    case 'scale':
      return { opacity: 1, scale: 1 };
    case 'none':
      return { opacity: 1 };
    case 'up':
    case 'down':
    default:
      return { opacity: 1, y: 0 };
  }
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 60,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={getInitial(direction, distance)}
      whileInView={getAnimate(direction)}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
