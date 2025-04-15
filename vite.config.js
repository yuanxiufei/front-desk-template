import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: false, // 生成components.d.ts 全局定义文件
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/] // 包含的文件类型
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]', // 支持目录层级：'icon-[dir]-[name]'
      inject: 'body-last', // DOM插入位置
      customDomId: '__svg_icons' // 自定义容器ID
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
    host: 'hsa.guahao-test.com',
    // host: 'localhost',
    port: 8000,
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
