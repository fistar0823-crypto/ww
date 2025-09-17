import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ww/',
  build: { outDir: 'dist', sourcemap: true }
})
