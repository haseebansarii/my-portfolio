import { ReactNode, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

// Card tilts toward the cursor in 3D with a light glare that follows it.
// Mouse-only by design: touch devices never fire these handlers.
export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 250, damping: 20 });

  const glareX = useTransform(mx, (v) => v * 100);
  const glareY = useTransform(my, (v) => v * 100);
  const glareOpacity = useSpring(hover, { stiffness: 200, damping: 25 });
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), transparent 55%)`;

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
    hover.set(1);
  };

  const onMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
    hover.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: glare, opacity: glareOpacity }}
      />
    </motion.div>
  );
}
