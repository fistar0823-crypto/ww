import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ base 一定要跟 GitHub Repo 名稱相同（這裡是 "ww"）
export default defineConfig({
  plugins: [react()],
  base: '/ww/',
  build: {
    outDir: 'dist',   // 打包輸出目錄
    assetsDir: 'assets', // 靜態資源放 assets 資料夾
  },
  server: {
    port: 3000,
    open: true,
  },
})
