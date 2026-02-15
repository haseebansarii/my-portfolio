import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

export default function GlitchText({ text, className = '', as: Tag = 'span' }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789';

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      let iterations = 0;
      const maxIterations = 6;

      const glitchInterval = setInterval(() => {
        setGlitchedText(
          text
            .split('')
            .map((char, index) => {
              if (index < iterations) return text[index];
              if (char === ' ') return ' ';
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('')
        );

        iterations += text.length / maxIterations;

        if (iterations >= text.length) {
          clearInterval(glitchInterval);
          setGlitchedText(text);
          setIsGlitching(false);
        }
      }, 50);
    }, 5000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Tag className={`${className} ${isGlitching ? 'text-glow' : ''}`}>
      {glitchedText}
    </Tag>
  );
}
