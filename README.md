# 前台通用模板

基于 Vue 3 + Vite 构建的前台通用模板项目，集成了常用的功能组件和工具库。

## 环境要求

- Node.js >= 14.0.0
- npm >= 6.14.0

## 安装和运行

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 生产环境构建
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
├── src/                    # 源代码目录
│   ├── api/               # API 接口定义
│   ├── assets/            # 静态资源文件
│   ├── components/        # 公共组件
│   ├── constants/         # 常量定义
│   ├── directives/        # 自定义指令
│   ├── libs/              # 自定义库和工具组件
│   ├── router/            # 路由配置
│   ├── store/             # Vuex 状态管理
│   ├── styles/            # 全局样式
│   ├── utils/             # 工具函数
│   ├── views/             # 页面视图
│   ├── App.vue            # 根组件
│   ├── main.js            # 入口文件
│   └── permission.js      # 权限控制
├── public/                # 静态资源目录
├── resources/             # 项目资源文件
└── .env.*                 # 环境变量配置
```

## 主要依赖

- Vue 3 - 渐进式 JavaScript 框架
- Vite - 下一代前端构建工具
- Vue Router - 官方路由管理器
- Vuex - 状态管理模式
- Axios - HTTP 客户端
- TailwindCSS - 原子化 CSS 框架
- GSAP - JavaScript 动画库
- VeeValidate - 表单验证

## 插件配置

### Vite 配置

项目使用 Vite 作为构建工具，主要配置如下：

- @vitejs/plugin-vue - Vue 3 单文件组件支持
- vite-plugin-svg-icons - SVG 图标管理

### TailwindCSS 配置

使用 TailwindCSS 进行样式管理，支持：

- PostCSS 自动前缀
- 自定义滚动条样式
- 响应式设计

### 环境变量

- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置

## 特性

- 🚀 基于 Vue 3 + Vite 构建，开发体验极致
- 📦 组件按需加载，优化打包体积
- 🎨 集成 TailwindCSS，快速构建界面
- 🔒 路由权限控制
- 📱 移动端适配
- 🌓 支持主题切换
- 🔍 全局搜索功能
- 🎯 表单验证集成
- 🖼️ 图片上传和裁剪
- 💳 支付功能集成


