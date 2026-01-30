import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        chunkSizeWarningLimit: 1000, // Increase limit to 1000kB
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('react') && !id.includes('react-dom')) {
                  return 'react';
                }
                if (id.includes('react-dom')) {
                  return 'react-dom';
                }
                if (id.includes('react-router')) {
                  return 'react-router';
                }
                if (id.includes('lucide-react')) {
                  return 'lucide-icons';
                }
                // Group other small dependencies together
                return 'vendor';
              }
            }
          }
        }
      },
      plugins: [react()],
      define: {},
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});