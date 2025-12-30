import React from 'react';
import './Avatar.css';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'avatar-small',
    medium: 'avatar-medium',
    large: 'avatar-large'
  };

  return (
    <div className={`avatar ${sizeClasses[size]} ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="avatar-image" />
      ) : (
        <div className="avatar-placeholder">
          <span>{alt.charAt(0).toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};

export default Avatar;