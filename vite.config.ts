import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ww/',   // 這裡很重要，要跟 GitHub repo 名稱相同
})
