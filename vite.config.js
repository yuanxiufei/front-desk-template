import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AntDesignVueResolver({
      importStyle: false // 设置为 false 表示不自动引入组件的样式文件
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    })
  ],
  // 软链接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  // 代理
  server: {
    hmr: true,
    proxy: {
      // 代理所有 /api 的请求，该求情将被代理到 target 中
      '/api': {
        // 代理请求之后的请求地址
        target: 'https://api.imooc-front.lgdsunday.club/',
        // 跨域
        changeOrigin: true
      },
      '/test-api': {
        target: 'https://test-api.imooc-front.lgdsunday.club/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/test-api/, '')
      },
      '/prod-api': {
        target: 'https://prod-api.imooc-front.lgdsunday.club/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/prod-api/, '')
      }
    }
  }
})
