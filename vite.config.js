import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/taskManager/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        404: './404.html',
      },
    },
  },
})