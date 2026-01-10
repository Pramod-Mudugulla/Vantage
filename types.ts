export interface Project {
  id: string;
  client: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
  iconName: 'LayoutGrid' | 'Users' | 'Zap' | 'MessageCircle';
}