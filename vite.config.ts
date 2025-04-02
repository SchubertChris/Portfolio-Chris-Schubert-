import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [react()],
    
    // Dynamische Base-Konfiguration
    base: isProduction 
      ? '/Portfolio-Chris-Schubert-/' 
      : '/',
    
    build: {
      outDir: 'dist',
      // Zusätzliche Build-Optimierungen
      minify: isProduction,
      sourcemap: !isProduction
    },
    
    // Entwicklungsserver-Konfiguration
    server: {
      port: 3000,
      open: true
    },
    
    // Anpassungen für verschiedene Umgebungen
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode)
    }
  }
})