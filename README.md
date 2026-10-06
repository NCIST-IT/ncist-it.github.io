# IT智云社官网

应急管理大学 IT智云社的静态介绍网站，使用 React 和 Vite 构建，可部署到组织的 GitHub Pages：`https://ncist-it.github.io/`。

## 本地开发

```bash
npm install
npm run dev
```

## 构建静态页面

```bash
npm run build
```

Vite 会将可部署的 HTML、CSS 和 JavaScript 输出到 `dist/`。本项目部署在组织 Pages 根域名，资源基路径为 `/`。

GitHub Actions 工作流会在推送到 `main` 后构建 `dist/` 并发布到 GitHub Pages。仓库设置中的 **Settings → Pages → Build and deployment → Source** 需要选择 **GitHub Actions**。

本地预览生产构建：

```bash
npm run preview
```
