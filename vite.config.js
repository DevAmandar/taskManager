import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // این خط تضمین می‌کند فایل‌ها در آدرس /taskManager/ پیدا شوند
  base: '/taskManager/', 
})