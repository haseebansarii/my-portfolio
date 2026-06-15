import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable code splitting for better performance.
    // Skip manual vendor chunks during the SSR build (vite-react-ssg), where
    // react/react-dom are external and cannot be placed in manualChunks.
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'motion-vendor': ['framer-motion'],
              'icons-vendor': ['lucide-react'],
            },
          },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Use esbuild for minification (faster than terser)
    minify: 'esbuild',
  },
}));
