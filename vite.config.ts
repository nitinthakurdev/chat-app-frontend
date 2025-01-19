import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPath from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsConfigPath()],
  resolve:{
    alias:{
      "@":"src/",
      "@pages":"src/pages/",
      "@components":"src/components/",
      "@store":"src/store/",
      "@services":"src/services"
    }
  }
});
