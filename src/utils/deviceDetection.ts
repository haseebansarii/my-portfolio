// During static pre-rendering (SSG) there is no browser, so these helpers must
// degrade gracefully when window/navigator/CSS are unavailable.
const isBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';

// Detect iOS devices
export const isIOS = () => {
  if (!isBrowser) return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

// Detect if it's a mobile device
export const isMobile = () => {
  if (!isBrowser) return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Check if device supports backdrop-filter
export const supportsBackdropFilter = () => {
  if (!isBrowser || typeof CSS === 'undefined') return false;
  return CSS.supports('backdrop-filter', 'blur(1px)') ||
         CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
};

// Get reduced motion preference
export const prefersReducedMotion = () => {
  if (!isBrowser) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
