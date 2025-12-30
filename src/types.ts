export interface UserProfile {
  avatar: string;
  nickname: string;
  description: string;
}

export interface ListItem {
  id: string;
  title: string;
  content: string;
  icon?: string;
  link?: string;
}

export interface CustomSettings {
  profile: UserProfile;
  lists: {
    contact: ListItem[];
    [key: string]: ListItem[];
  };
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}