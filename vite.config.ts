import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ base 必須跟 repo 名稱相同 → '/ww/'
export default defineConfig({
  plugins: [react()],
  base: '/ww/',
})
