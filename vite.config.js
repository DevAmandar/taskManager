import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// نام مخزن خود را اینجا وارد کنید (اگر مخزن شما taskManager است، همین را نگه دارید)
const REPO_NAME = '/taskManager/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? REPO_NAME : '/',
})