import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true // Para acceso desde red local
  },
  build: {
    // Optimizaciones de build
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react']
        }
      }
    },
    // Optimización de assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000
  },
  // Optimizaciones adicionales
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
})
