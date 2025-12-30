import React from 'react';
import type { ListItem } from '../types';
import Icon from './Icon';
import './CustomList.css';

interface CustomListProps {
  title: string;
  items: ListItem[];
  icon?: string;
}

// 映射 emoji 到 SVG 图标名称
const getIconName = (emoji?: string): string => {
  if (!emoji) return 'link';

  const iconMap: Record<string, string> = {
    '🐙': 'github',
    '📧': 'mail',
    '💼': 'linkedin',
    '🔗': 'link',
    '📱': 'phone',
    '🌐': 'website',
    '🖋️': 'website'  // 博客图标映射到网站图标
  };

  return iconMap[emoji] || 'link';
};

const CustomList: React.FC<CustomListProps> = ({
  title,
  items,
  icon = '🔗'
}) => {
  return (
    <div className="custom-list">
      <div className="list-header">
        <h3>
          <Icon name={getIconName(icon)} size={20} color="#000000" />
          <span className="list-title">{title}</span>
        </h3>
      </div>

      <div className="list-items">
        {items.length === 0 ? (
          <p className="empty-state">暂无内容</p>
        ) : (
          items.map((item) => {
            const content = (
              <>
                <div className="item-content">
                  <div className="item-header">
                    <Icon
                      name={getIconName(item.icon)}
                      size={18}
                      color="#000000"
                      className="item-icon"
                    />
                    <span className="item-title">{item.title}</span>
                  </div>
                  {item.content && <p className="item-text">{item.content}</p>}
                </div>
              </>
            );

            return (
              <div key={item.id} className="list-item">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-link"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CustomList;