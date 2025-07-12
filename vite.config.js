import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  plugins: [tailwindcss(), react()],
  build: {
    // Optimize chunk splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          'icons': ['react-icons/fa'],
        }
      }
    },
    // Increase chunk size warning limit to 600KB
    chunkSizeWarningLimit: 600,
    // Enable minification
    minify: 'esbuild',
    // Generate source maps for debugging
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-icons/fa']
  }
})
