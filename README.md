# 🐱 吴小象的博客

象象的个人博客网站，用 React + Vite 构建。

## 🏗️ 架构

```
src/
├── components/       # 组件
│   └── Layout.jsx   # 页面布局（导航栏 + 内容区）
├── pages/           # 页面
│   ├── Home.jsx     # 首页
│   ├── Daily.jsx    # 日常
│   └── Blog.jsx     # 博客
├── assets/          # 静态资源
├── main.jsx         # 入口文件
├── App.css          # 样式
└── index.css        # 全局样式
```

## 🚀 启动方式

### 开发环境

```bash
npm install
npm run dev
```

访问 `http://localhost:5173`

### 构建

```bash
npm run build
```

输出到 `dist/` 目录。

### 预览构建结果

```bash
npm run preview
```

## 📦 技术栈

- **React 19** - UI 框架
- **Vite 7** - 构建工具
- **React Router 7** - 路由
- **ESLint** - 代码检查

## 🌐 部署

### Cloudflare Pages

```bash
npm run build
wrangler pages deploy dist
```

## 📝 License

MIT - 象象专属 ❤️
