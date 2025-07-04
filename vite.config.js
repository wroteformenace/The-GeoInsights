import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({ // Add the svgr plugin
          // Optional: configure svgr options
          svgrOptions: {
            icon: true, // Example: treat SVGs as icons
          },
        }),
  ],
});
