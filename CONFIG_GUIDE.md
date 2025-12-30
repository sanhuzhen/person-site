# ⚙️ 配置文件使用指南

## 📝 配置文件位置

你有两个配置文件可以修改：

1. **`config.json`** - 项目根目录 - 主配置文件
2. **`public/config.json`** - 开发环境访问文件（自动同步）

## 🎨 修改配置

### 1. 头像设置
```json
{
  "profile": {
    "avatar": "https://example.com/your-avatar.jpg",  // 你的头像URL
    "nickname": "你的名字",                           // 昵称
    "description": "你的个人描述..."                  // 个人描述
  }
}
```

**提示**：
- 如果 `avatar` 留空 `""`，会显示默认的字母占位符
- 可以使用在线图片URL，如：`https://avatars.githubusercontent.com/u/123456`
- 也可以使用图床链接

### 2. 列表内容
```json
{
  "lists": {
    "skills": [        // 技能列表
      { "id": "1", "title": "React", "content": "前端框架", "icon": "⚛️" }
    ],
    "projects": [      // 项目列表
      { "id": "2", "title": "网站", "content": "个人博客", "icon": "🌐" }
    ],
    "interests": [     // 兴趣列表
      { "id": "3", "title": "编程", "content": "写代码", "icon": "💻" }
    ]
  }
}
```

**字段说明**：
- `id`: 唯一标识符（建议使用数字字符串）
- `title`: 标题
- `content`: 详细内容
- `icon`: Emoji图标（可选）

### 3. 主题颜色
```json
{
  "theme": {
    "primaryColor": "#667eea",    // 主色调（按钮、强调色）
    "backgroundColor": "#ffffff", // 背景色（已改为白色）
    "textColor": "#333333"        // 文字颜色
  }
}
```

**颜色建议**：
- 背景色：`#ffffff` (白色) 或 `#f8f9fa` (浅灰)
- 主色调：`#667eea` (紫色) 或 `#007bff` (蓝色)
- 文字色：`#333333` (深灰) 或 `#212529` (接近黑色)

## 🚀 如何应用修改

### 方法一：直接修改配置文件（推荐）
1. 打开 `config.json`
2. 修改你需要的内容
3. 保存文件
4. 刷新浏览器即可看到效果

### 方法二：通过界面修改
1. 启动项目：`npm run dev`
2. 在浏览器中打开页面
3. 点击右上角 "⚙️ 设置" 按钮
4. 在设置面板中修改
5. 点击 "保存设置"

**注意**：通过界面修改的数据会保存在浏览器的本地存储中，优先级高于配置文件。

## 📋 配置示例

### 完整的个人介绍配置
```json
{
  "profile": {
    "avatar": "https://avatars.githubusercontent.com/u/你的GitHubID",
    "nickname": "张三",
    "description": "全栈开发工程师，热爱React和Node.js，喜欢探索新技术。"
  },
  "lists": {
    "skills": [
      { "id": "1", "title": "React", "content": "5年开发经验", "icon": "⚛️" },
      { "id": "2", "title": "TypeScript", "content": "类型安全倡导者", "icon": "📘" },
      { "id": "3", "title": "Node.js", "content": "后端架构设计", "icon": "🟢" },
      { "id": "4", "title": "Python", "content": "数据分析与AI", "icon": "🐍" }
    ],
    "projects": [
      { "id": "1", "title": "电商网站", "content": "React + Node.js 全栈项目", "icon": "🛒" },
      { "id": "2", "title": "移动应用", "content": "React Native 跨平台应用", "icon": "📱" },
      { "id": "3", "title": "数据可视化", "content": "D3.js 仪表盘", "icon": "📊" }
    ],
    "interests": [
      { "id": "1", "title": "开源贡献", "content": "GitHub 上有多个开源项目", "icon": "🌟" },
      { "id": "2", "title": "技术写作", "content": "博客文章和技术教程", "icon": "✍️" },
      { "id": "3", "title": "摄影", "content": "风景和街拍", "icon": "📷" }
    ]
  },
  "theme": {
    "primaryColor": "#007bff",
    "backgroundColor": "#ffffff",
    "textColor": "#212529"
  }
}
```

## 🔧 高级配置

### 添加新列表
在 `config.json` 的 `lists` 对象中添加新键：
```json
"lists": {
  "skills": [...],
  "projects": [...],
  "interests": [...],
  "certifications": [    // 新列表
    { "id": "1", "title": "AWS认证", "content": "解决方案架构师", "icon": "☁️" }
  ]
}
```

### 使用本地图片
1. 将图片放入 `public/images/` 目录
2. 在配置中引用：`"avatar": "/images/my-photo.jpg"`

### 重置配置
删除浏览器本地存储：
1. 打开浏览器开发者工具 (F12)
2. 进入 Application/应用程序 标签
3. 找到 Local Storage
4. 删除 `preason-settings` 键

## ⚠️ 注意事项

1. **JSON格式**：确保使用正确的JSON格式，逗号、引号要匹配
2. **编码格式**：保存文件时使用 UTF-8 编码
3. **特殊字符**：如果内容包含中文，确保正确转义
4. **图片URL**：确保图片链接可公开访问
5. **ID唯一性**：每个列表项的ID必须唯一

## 🎯 快速修改清单

- [ ] 修改昵称和描述
- [ ] 添加/修改头像URL
- [ ] 更新技能列表
- [ ] 更新项目列表
- [ ] 更新兴趣列表
- [ ] 调整主题颜色
- [ ] 保存并刷新页面

---

**修改配置后，重启开发服务器或刷新浏览器即可生效！**