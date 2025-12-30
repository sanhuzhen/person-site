import React from 'react';
import Avatar from './Avatar';
import type { UserProfile } from '../types';
import './ProfileSection.css';

interface ProfileSectionProps {
  profile: UserProfile;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => {
  return (
    <div className="profile-section">
      <div className="profile-header">
        <Avatar src={profile.avatar} alt={profile.nickname} size="large" />
        <div className="profile-info">
          <h1 className="profile-nickname">{profile.nickname || 'Your Name'}</h1>
          <p className="profile-description">
            {profile.description || 'Your description goes here...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;