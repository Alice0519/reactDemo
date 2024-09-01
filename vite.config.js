import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';  // 这里引入 path 模块

export default defineConfig({
  base:"/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
