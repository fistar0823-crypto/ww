import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 這裡要設為你的 GitHub repo 名稱前後加斜線
  base: '/ww/'
});
