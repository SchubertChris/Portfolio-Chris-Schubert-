import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react(), tsconfigPaths()],

    // Für Vercel-Deployment
    base: '/',

    resolve: {
      alias: {
        // Sie können hier Aliase für Importpfade definieren
        // '@components': '/src/components',
        // '@styles': '/src/styles'
      }
    },

    build: {
      outDir: 'dist',
      minify: isProduction,
      sourcemap: !isProduction,

      // Optimierungen für Vercel
      rollupOptions: {
        output: {
          manualChunks: {
            // React und andere große Bibliotheken in separaten Chunks
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-icons': ['react-icons'],
            'vendor-animation': ['gsap']
          }
        }
      },

      // Verbessertes Asset-Handling
      assetsInlineLimit: 4096, // 4kb
      chunkSizeWarningLimit: 1000 // Größere Chunks erlauben
    },

    server: {
      port: 3000,
      open: true,

      // Verbesserte Entwicklungsumgebung
      host: true, // Zugriff über Netzwerk erlauben
      strictPort: false, // Alternative Ports verwenden, wenn besetzt
    },

    // Optimierte Vite-Einstellungen
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'react-icons']
    },

    // Vercel-spezifische Einstellungen
    ssr: {
      // Keine serverseitige Ausführung, da Vercel als statisches Hosting eingesetzt wird
      noExternal: ['react-icons']
    }
  };
});