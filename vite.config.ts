
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ww/',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: true }
})
