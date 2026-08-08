import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Базовый путь задаётся переменной окружения: на GitHub Pages проект живёт
// в подпапке (/<repo>/), локально и на превью — в корне.
const base = process.env.VITE_BASE ?? '/';

export default defineConfig({
  base,
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
