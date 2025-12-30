# Person Vite - 个人介绍页

一个简洁的个人介绍页面，所有配置都在一个文件中完成。

## 🚀 如何使用

### 1. 修改配置
打开 `config.json` 文件，修改为你自己的内容：

```json
{
  "profile": {
    "avatar": "",           // 头像URL，留空显示默认占位符
    "nickname": "你的名字",  // 昵称
    "description": "你的描述"
  },
  "lists": {
    "skills": [             // 技能列表
      { "id": "1", "title": "React", "content": "前端框架", "icon": "⚛️" }
    ],
    "projects": [],         // 项目列表
    "interests": []         // 兴趣列表
  },
  "theme": {
    "backgroundColor": "#ffffff"  // 背景色（白色）
  }
}
```

### 2. 启动项目
```bash
cd D:\vsProjects\person-vite
npm run dev
```

### 3. 访问页面
浏览器打开 `http://localhost:5173`

## 📝 修改配置

- **头像**: 填入图片URL，或留空使用默认占位符
- **列表**: 在 `skills`、`projects`、`interests` 中添加项目
- **颜色**: 修改 `theme` 中的颜色值

## 🎯 构建部署

```bash
npm run build  # 构建生产版本
```

构建后的文件在 `dist/` 目录，可部署到任何静态托管服务。

---

**所有设置都在 `config.json` 中完成，无需修改代码！**