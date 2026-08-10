import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Относительные пути к ассетам: сборка одинаково работает и в корне домена,
  // и в подпапке GitHub Pages (/<repo>/), и при открытии файла локально.
  base: './',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // Токены и миксины доступны во всех *.module.scss без ручного @use.
        additionalData: '@use "@/styles/abstracts" as *;',
      },
    },
  },
  resolve: {
    alias: { '@': new URL('./src', import.meta.url).pathname },
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 2048,
  },
});
