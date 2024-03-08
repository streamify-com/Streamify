export type NavItem = {
  restricted?: boolean;
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
};

export type IconProps = {
  className?: string;
};

export type MainNavItem = NavItem;

export type HeaderConfig = {
  mainNav: MainNavItem[];
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links: {
    facebook: string;
    instagram: string;
    twitter: string;
    github: string;
    youtube: string;
    linkedin: string;
    discord: string;
    twitch: string;
    tiktok: string;
  };
};

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export type SidebarNavItem = NavItemWithChildren;
