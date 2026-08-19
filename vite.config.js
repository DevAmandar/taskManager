import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // دقیقاً نام مخزن شما. حتماً با / شروع و تمام شود
  base: '/taskManager/',
})