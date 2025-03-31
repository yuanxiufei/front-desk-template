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
├── .vscode/               # VS Code 配置
├── .husky/                # Git Hooks 配置
├── .env.*                 # 环境变量配置
├── .eslintrc.js           # ESLint 配置
├── .prettierrc            # Prettier 配置
├── postcss.config.js      # PostCSS 配置
├── tailwind.config.js     # TailwindCSS 配置
├── vite.config.js         # Vite 配置
└── commitlint.config.js   # Commit 规范配置
```

## 代码规范

### 代码格式化

项目使用 ESLint + Prettier 进行代码格式化和规范检查：

```bash
# 运行 ESLint 检查
npm run lint

# 运行 Prettier 格式化
npm run format
```

### Git 提交规范

项目使用 commitlint 强制规范 Git 提交信息格式。提交格式如下：

```bash
type(scope?): subject
```

- type：提交类型
  - feat：新功能
  - fix：修复
  - docs：文档变更
  - style：代码格式（不影响代码运行的变动）
  - refactor：重构（既不是新增功能，也不是修改 bug 的代码变动）
  - perf：性能优化
  - test：增加测试
  - chore：构建过程或辅助工具的变动

- scope：影响范围（可选）
- subject：提交描述

示例：
```bash
# 添加新功能
git commit -m "feat(user): 添加用户登录功能"

# 修复 bug
git commit -m "fix(auth): 修复token过期判断错误"
```

### 开发流程

1. 拉取最新代码
```bash
git pull origin main
```

2. 创建功能分支
```bash
git checkout -b feature/xxx
```

3. 开发完成后，运行代码检查
```bash
npm run lint
npm run format
```

4. 提交代码
```bash
git add .
git commit -m "feat(xxx): xxx"
```

5. 推送到远程仓库
```bash
git push origin feature/xxx
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


