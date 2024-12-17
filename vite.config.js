import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/vartikas-Portfolio/', // Add your repository name here
  plugins: [react()],
})
