import React, { useState, useEffect } from 'react';
import ProfileSection from './components/ProfileSection';
import CustomList from './components/CustomList';
import type { CustomSettings } from './types';
import './App.css';

// 从配置文件加载设置
const loadConfig = async (): Promise<CustomSettings> => {
  try {
    const response = await fetch('/config.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log('使用默认配置');
  }

  // 默认配置
  return {
    profile: {
      avatar: '',
      nickname: '预设昵称',
      description: '这是一个个人介绍页面。所有设置都在 config.json 文件中。'
    },
    lists: {
      contact: [
        { id: '1', title: 'GitHub', content: '@username', icon: '🐙', link: 'https://github.com/username' },
        { id: '2', title: '邮箱', content: 'example@email.com', icon: '📧', link: 'mailto:example@email.com' }
      ]
    },
    theme: {
      primaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000'
    }
  };
};

const App: React.FC = () => {
  const [settings, setSettings] = useState<CustomSettings | null>(null);

  // Load settings from config file on mount
  useEffect(() => {
    const loadSettings = async () => {
      const config = await loadConfig();
      setSettings(config);

      // 应用主题
      document.documentElement.style.setProperty('--primary-color', config.theme.primaryColor);
      document.documentElement.style.setProperty('--bg-color', config.theme.backgroundColor);
      document.documentElement.style.setProperty('--text-color', config.theme.textColor);
    };

    loadSettings();
  }, []);

  if (!settings) {
    return <div className="loading">加载中...</div>;
  }

  return (
    <div className="app" style={{ backgroundColor: settings.theme.backgroundColor }}>
      <header className="app-header">
        <h1>Person 个人主页</h1>
      </header>

      <main className="app-main">
        <div className="container">
          <ProfileSection
            profile={settings.profile}
          />

          <div className="lists-grid">
            <CustomList
              title="联系方式"
              items={settings.lists.contact}
              icon="🔗"
            />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2024 Person - 个人介绍页 | 使用 Vite + React 构建</p>
      </footer>
    </div>
  );
};

export default App;