export interface DataItem {
  text: string;
  link: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  data: DataItem[];
  avatarUrl: string;
  socialLinks: SocialLink[];
}