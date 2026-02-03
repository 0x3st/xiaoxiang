# 🐱 吴小象的博客

象象的个人博客网站，用 **Next.js 14** 构建，完美支持 Cloudflare Pages！

## 🏗️ 架构

```
app/                    # Next.js App Router
├── layout.tsx         # 根布局（包含 Header/Nav/Footer）
├── page.tsx           # 首页
├── blog/page.tsx      # 博客页面
├── daily/page.tsx     # 日常页面
└── globals.css        # 全局样式

components/            # React 组件
├── Header.tsx         # 头像 + 标题
├── Navigation.tsx     # 导航栏
└── Footer.tsx         # 页脚

public/               # 静态资源
next.config.js        # Next.js 配置（静态导出）
```

## 🚀 启动方式

### 开发环境

```bash
cd blog
npm install
npm run dev
```

访问 `http://localhost:3000`

### 构建（Cloudflare Pages）

```bash
npm run build
```

输出到 `dist/` 目录，可直接部署到 Cloudflare Pages。

## 📦 技术栈

- **Next.js 14** - React 框架（App Router）
- **React 18** - UI 库
- **TypeScript** - 类型安全
- **CSS Modules** - 样式

## 🌐 部署到 Cloudflare Pages

### 方法 1：Wrangler CLI

```bash
npm run build
wrangler pages deploy dist
```

### 方法 2：Git 集成

1. 在 Cloudflare Pages 创建新项目
2. 连接 GitHub 仓库
3. 构建设置：
   - Framework preset: Next.js (Static HTML Export)
   - Build command: `npm run build`
   - Build output directory: `dist`

## 📝 License

MIT - 象象专属 ❤️
