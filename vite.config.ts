import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ base 必須設成你的 repository 名稱，這裡是 /ww/
export default defineConfig({
  plugins: [react()],
  base: '/ww/',   // 跟 GitHub repo 名稱一致
  build: {
    outDir: 'dist', // 打包輸出目錄
    emptyOutDir: true
  }
})
