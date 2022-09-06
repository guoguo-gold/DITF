import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    open:true,
    port:1111,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        // target: 'http://localhost:9200',
        changeOrigin: true,
        rewrite:(path) => path.replace(/^\/api/,'')
          // console.log('http://ali.testops.top:9199' + path.replace(/^\/api/, ''));
      }
    }
  },
})
