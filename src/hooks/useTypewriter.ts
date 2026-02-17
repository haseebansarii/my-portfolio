import { useState, useEffect, useCallback } from 'react';
import { isIOS, isMobile } from '../utils/deviceDetection';

export function useTypewriter(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const isMobileDevice = isIOS() || isMobile();
  const [displayText, setDisplayText] = useState(isMobileDevice ? texts[0] : '');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const animate = useCallback(() => {
    const currentFullText = texts[textIndex];

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        return setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        return setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        return setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return undefined;
      }
    }
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    // Disable typewriter animation on mobile for performance
    if (isMobileDevice) {
      setDisplayText(texts[textIndex]);
      return;
    }

    const timeout = animate();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [animate, isMobileDevice, texts, textIndex]);

  return displayText;
}
