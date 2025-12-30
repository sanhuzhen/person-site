# 🚀 快速开始指南

## 项目已创建完成！

你的个人介绍页项目 `person-vite` 已经成功创建并配置完成。

## 📋 如何使用

### 1. 启动开发服务器
```bash
cd D:\vsProjects\person-vite
npm run dev
```
然后在浏览器中打开: `http://localhost:5173`

### 2. 自定义你的页面
- 点击右上角的 **"⚙️ 设置"** 按钮
- 在弹出的模态框中修改：
  - **个人资料**：头像、昵称、描述
  - **列表管理**：添加/编辑/删除技能、项目、兴趣
  - **主题设置**：自定义颜色主题

### 3. 数据保存
所有修改会自动保存到浏览器的本地存储中，刷新页面也不会丢失。

## 🎯 功能特点

✅ **完全可定制** - 头像、昵称、描述
✅ **多列表管理** - 技能、项目、兴趣等
✅ **实时预览** - 即时看到修改效果
✅ **主题定制** - 颜色主题自由搭配
✅ **响应式设计** - 完美适配手机和电脑
✅ **本地存储** - 数据自动保存

## 📁 项目结构

```
person-vite/
├── src/
│   ├── components/          # React组件
│   │   ├── Avatar.tsx       # 头像组件
│   │   ├── ProfileSection.tsx  # 个人资料
│   │   ├── CustomList.tsx   # 自定义列表
│   │   └── SettingsModal.tsx # 设置面板
│   ├── types.ts             # 类型定义
│   ├── App.tsx              # 主应用
│   └── main.tsx             # 入口文件
├── public/                  # 静态资源
└── dist/                    # 构建输出
```

## 🔧 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |
| `npm run lint` | 代码检查 |

## 🎨 自定义示例

### 修改默认设置
编辑 `src/App.tsx` 中的 `DEFAULT_SETTINGS` 对象：

```typescript
const DEFAULT_SETTINGS: CustomSettings = {
  profile: {
    avatar: '你的头像URL',
    nickname: '你的名字',
    description: '你的描述'
  },
  lists: {
    skills: [
      { id: '1', title: 'React', content: '前端框架', icon: '⚛️' }
    ],
    // ... 其他列表
  },
  theme: {
    primaryColor: '#667eea',
    backgroundColor: '#f5f7fa',
    textColor: '#333333'
  }
};
```

## 🚀 部署到线上

构建后的文件在 `dist/` 目录，可以部署到：
- Vercel
- Netlify
- GitHub Pages
- 阿里云/腾讯云静态托管

## 💡 提示

1. **头像URL**：可以使用在线图片URL，或留空使用默认占位符
2. **图标**：支持emoji，如 ⚡、🚀、❤️ 等
3. **颜色**：在主题设置中使用颜色选择器
4. **数据**：点击保存后数据立即生效并持久化

## 📞 需要帮助？

查看 `README.md` 文件获取更详细的文档。

---

**祝你使用愉快！** 🎉