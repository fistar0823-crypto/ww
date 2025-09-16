import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ base 記得改成你的 GitHub repo 名稱
// 這裡你的網址是 fistar0823-crypto.github.io/ww/，所以 base = '/ww/'
export default defineConfig({
  plugins: [react()],
  base: '/ww/',
  build: {
    outDir: 'dist'
  }
});
