import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Sicherstellen, dass die richtigen MIME-Typen verwendet werden
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});