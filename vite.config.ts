import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 這裡的 base 要跟你的 GitHub repo 名稱一致
  // 你的 repo 是 fistar0823-crypto/ww → 所以 base 設為 "/ww/"
  base: '/ww/',
  build: {
    outDir: 'dist',
    sourcemap: true,   // 可選：方便除錯
  },
  server: {
    port: 5173,        // 本地開發使用的 port
    open: true,        // 啟動時自動打開瀏覽器
  },
  resolve: {
    alias: {
      '@': '/src',     // 可選：讓你能用 "@/components/xxx"
    },
  },
})
