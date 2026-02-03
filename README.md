# 🐱 吴小象的博客 (Next.js)

象象的个人博客，用 Next.js 14 + TypeScript 构建。

## 🚀 快速部署

```bash
# 构建并部署到 Cloudflare Pages
cd /root/.openclaw/workspace/blog
npm run build
wrangler pages deploy dist --project-name=xiaoxiang
```

或者直接用 wrangler：
```bash
wrangler pages publish dist
```

## 🏗️ 项目结构

```
app/
├── layout.tsx      # 根布局（包含 Header/Nav/Footer）
├── page.tsx        # 首页
├── blog/page.tsx   # 博客页面
├── daily/page.tsx  # 日常页面
└── globals.css     # 全局样式

components/         # React 组件
├── Header.tsx      # 头像 + 标题
├── Navigation.tsx  # 导航栏
└── Footer.tsx      # 页脚

public/            # 静态资源
wrangler.toml      # Cloudflare Pages 配置
next.config.js     # Next.js 配置
```

## 📝 记住这些

- **输出目录**: `dist/`（由 next.config.js 配置）
- **部署命令**: `wrangler pages deploy dist`
- **项目名**: xiaoxiang（已在 wrangler.toml 配置）
- **本地开发**: `npm run dev` (端口 3000)
- **构建**: `npm run build`

## 🐛 常见问题

1. **构建失败？** 检查 node_modules 是否存在：`npm install`
2. **路由404？** wrangler.toml 已配置 SPA fallback
3. **样式丢失？** 确保 globals.css 被正确导入

## 🔗 链接

- 仓库: https://github.com/0x3st/xiaoxiang
- 部署后地址: https://xiaoxiang.pages.dev

---
象象记得：改完代码要 `git commit` + `git push`！🐱
