import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default {
  build: {
    rollupOptions: {
      external: ['your-external-package']
    }
  }
}