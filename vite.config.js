import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ 這裡要填你的 repository 名稱（現在是 ww）
export default defineConfig({
  plugins: [react()],
  base: '/ww/',   // 跟 repo 名稱相同
})
