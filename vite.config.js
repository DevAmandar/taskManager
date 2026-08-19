import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// نام مخزن را به صورت پویا از محیط گیت‌هاب می‌خوانیم
// اگر در محیط توسعه (Local) باشد، از یک مقدار پیش‌فرض استفاده می‌کنیم
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'taskManager';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // تنظیم مسیر پایه به صورت پویا
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  build: {
    // این تنظیم باعث می‌شود فایل‌های جاوااسکریپت مسیرهای خود را به‌درستی پیدا کنند
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
})