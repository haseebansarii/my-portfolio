// vite.config.ts
import { defineConfig } from "file:///P:/my-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///P:/my-portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    // Enable code splitting for better performance.
    // Skip manual vendor chunks during the SSR build (vite-react-ssg), where
    // react/react-dom are external and cannot be placed in manualChunks.
    rollupOptions: {
      output: isSsrBuild ? {} : {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "motion-vendor": ["framer-motion"],
          "icons-vendor": ["lucide-react"]
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1e3,
    // Use esbuild for minification (faster than terser)
    minify: "esbuild"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJQOlxcXFxteS1wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlA6XFxcXG15LXBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vUDovbXktcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGlzU3NyQnVpbGQgfSkgPT4gKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIEVuYWJsZSBjb2RlIHNwbGl0dGluZyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICAgIC8vIFNraXAgbWFudWFsIHZlbmRvciBjaHVua3MgZHVyaW5nIHRoZSBTU1IgYnVpbGQgKHZpdGUtcmVhY3Qtc3NnKSwgd2hlcmVcbiAgICAvLyByZWFjdC9yZWFjdC1kb20gYXJlIGV4dGVybmFsIGFuZCBjYW5ub3QgYmUgcGxhY2VkIGluIG1hbnVhbENodW5rcy5cbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IGlzU3NyQnVpbGRcbiAgICAgICAgPyB7fVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICAgICAgJ21vdGlvbi12ZW5kb3InOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICAgICAgJ2ljb25zLXZlbmRvcic6IFsnbHVjaWRlLXJlYWN0J10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBPcHRpbWl6ZSBjaHVuayBzaXplXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIC8vIFVzZSBlc2J1aWxkIGZvciBtaW5pZmljYXRpb24gKGZhc3RlciB0aGFuIHRlcnNlcilcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbU8sU0FBUyxvQkFBb0I7QUFDaFEsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsV0FBVyxPQUFPO0FBQUEsRUFDL0MsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUEsRUFDMUI7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlMLGVBQWU7QUFBQSxNQUNiLFFBQVEsYUFDSixDQUFDLElBQ0Q7QUFBQSxRQUNFLGNBQWM7QUFBQSxVQUNaLGdCQUFnQixDQUFDLFNBQVMsV0FBVztBQUFBLFVBQ3JDLGlCQUFpQixDQUFDLGVBQWU7QUFBQSxVQUNqQyxnQkFBZ0IsQ0FBQyxjQUFjO0FBQUEsUUFDakM7QUFBQSxNQUNGO0FBQUEsSUFDTjtBQUFBO0FBQUEsSUFFQSx1QkFBdUI7QUFBQTtBQUFBLElBRXZCLFFBQVE7QUFBQSxFQUNWO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
