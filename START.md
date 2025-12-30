# Person Vite - 个人介绍页

一个基于 Vite + React + TypeScript 构建的个性化个人介绍页面。

## ✨ 功能特性

- 🎨 **完全可定制**：头像、昵称、描述均可自定义
- 📋 **多列表管理**：支持技能、项目、兴趣等多个自定义列表
- 🎯 **实时预览**：所有修改即时生效，支持本地存储
- 🌈 **主题定制**：可自定义主色调、背景色和文字颜色
- 📱 **响应式设计**：完美适配移动端和桌面端
- ⚡ **快速开发**：基于 Vite 的极速开发体验

## 🚀 快速开始

### 安装依赖
```bash
cd person-vite
npm install
```

### 开发模式
```bash
npm run dev
```
访问 http://localhost:5173 查看应用

### 生产构建
```bash
npm run build
```

### 预览构建
```bash
npm run preview
```

## 📁 项目结构

```
person-vite/
├── src/
│   ├── components/          # React 组件
│   │   ├── Avatar.tsx       # 头像组件
│   │   ├── ProfileSection.tsx  # 个人资料组件
│   │   ├── CustomList.tsx   # 自定义列表组件
│   │   └── SettingsModal.tsx # 设置模态框
│   ├── types.ts             # TypeScript 类型定义
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 应用入口
│   └── App.css              # 主样式
├── public/                  # 静态资源
└── package.json             # 项目配置
```

## 🎨 使用说明

### 1. 启动应用
运行 `npm run dev` 后，你会看到一个预设的个人介绍页面。

### 2. 自定义设置
点击右上角的 "⚙️ 设置" 按钮打开设置面板：

- **个人资料**：修改头像URL、昵称和描述
- **列表管理**：添加、编辑、删除各个列表中的项目
- **主题设置**：自定义颜色主题

### 3. 数据持久化
所有设置会自动保存到浏览器的 localStorage 中，刷新页面后设置不会丢失。

### 4. 列表类型
默认包含三个列表：
- **技能专长** (⚡) - 展示你的技术技能
- **项目经历** (🚀) - 展示你的项目经验
- **兴趣爱好** (❤️) - 展示你的个人兴趣

你可以在设置中添加更多自定义列表项。

## 🔧 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: CSS3 (Flexbox + Grid)
- **状态管理**: React Hooks + localStorage
- **类型检查**: TypeScript

## 📝 自定义示例

### 修改默认设置
在 `src/App.tsx` 中修改 `DEFAULT_SETTINGS` 对象：

```typescript
const DEFAULT_SETTINGS: CustomSettings = {
  profile: {
    avatar: 'https://example.com/avatar.jpg',
    nickname: '你的名字',
    description: '你的个人描述...'
  },
  // ... 其他设置
};
```

### 添加新列表
在设置面板中，你可以看到现有的三个列表。每个列表都可以：
- 添加新项目（点击 + 按钮）
- 编辑现有项目（点击 ✏️ 按钮）
- 删除项目（点击 🗑️ 按钮）

## 🌐 部署

构建后的文件在 `dist/` 目录中，可以部署到任何静态托管服务：

- Vercel
- Netlify
- GitHub Pages
- 阿里云/腾讯云静态托管

## 📄 许可证

MIT License - 你可以自由使用、修改和分发这个项目。

---

*构建于 Vite + React + TypeScript*