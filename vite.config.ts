import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [react(), tsconfigPaths()],
    
    base: isProduction 
      ? '/Portfolio-Chris-Schubert-/' 
      : '/',
    
    resolve: {
      alias: {
      }
    },
    
    build: {
      outDir: 'dist',
      minify: isProduction,
      sourcemap: !isProduction
    },
    
    server: {
      port: 3000,
      open: true
    }
  }
})