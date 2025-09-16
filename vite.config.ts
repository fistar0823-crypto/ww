import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ 這裡的 base 必須和你的 repo 名稱一致 (現在是 ww)
export default defineConfig({
  plugins: [react()],
  base: '/ww/',  // <-- GitHub Pages 的專案名稱
})
