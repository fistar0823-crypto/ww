import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 設定檔
// base 必須設定為你的 GitHub repo 名稱，這裡是 'ww'
export default defineConfig({
  plugins: [react()],
  base: '/ww/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  }
})
