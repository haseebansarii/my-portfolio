/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#c8d6e5',
          dim: '#6b7b8d',
          bright: '#ffffff',
          muted: '#3d4f5f',
        },
        dark: {
          950: '#030508',
          900: '#0a0e14',
          800: '#0d1117',
          700: '#161b22',
          600: '#21262d',
          500: '#30363d',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'flicker': 'flicker 3s linear infinite',
        'border-flow': 'borderFlow 3s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(200, 214, 229, 0.15), 0 0 10px rgba(200, 214, 229, 0.05)' },
          '50%': { boxShadow: '0 0 20px rgba(200, 214, 229, 0.3), 0 0 40px rgba(200, 214, 229, 0.1)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.33' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(200, 214, 229, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 214, 229, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
};
