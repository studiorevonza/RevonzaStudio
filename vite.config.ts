import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        target: 'es2015',
        cssCodeSplit: false, 
        rollupOptions: {
          output: {
            manualChunks: undefined, 
            assetFileNames: (assetInfo) => {
              if (assetInfo.name.endsWith('.css')) {
                return 'assets/bundle.css';
              }
              return 'assets/[name].[hash][extname]';
            },
            entryFileNames: 'assets/bundle.[hash].js'
          }
        }
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
      },
      plugins: [react()],
      define: {},
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'), // Point to src directory
        }
      }
    };
});