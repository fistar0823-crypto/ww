// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ww/',  // ⚠️ Repo 名稱是 ww，所以一定要加這個
  build: {
    outDir: 'dist',  // 打包輸出到 dist
    emptyOutDir: true
  }
})
