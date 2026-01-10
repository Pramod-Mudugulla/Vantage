import { Project, Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work', iconName: 'LayoutGrid' },
  { label: 'Agency', href: '#agency', iconName: 'Users' },
  { label: 'Services', href: '#services', iconName: 'Zap' },
  { label: 'Contact', href: '#contact', iconName: 'MessageCircle' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    client: 'LUMINANCE',
    category: 'E-COMMERCE',
    year: '2024',
    image: 'https://picsum.photos/800/1000?random=1',
    description: 'Reimagining the digital flagship for a luxury lighting brand.'
  },
  {
    id: '2',
    client: 'AETHER',
    category: 'STRATEGY',
    year: '2023',
    image: 'https://picsum.photos/800/1000?random=2',
    description: 'Global brand positioning for sustainable outerwear.'
  },
  {
    id: '3',
    client: 'ONYX & OAK',
    category: 'DEVELOPMENT',
    year: '2024',
    image: 'https://picsum.photos/800/1000?random=3',
    description: 'Headless Shopify architecture with immersive 3D interactions.'
  },
  {
    id: '4',
    client: 'VELOCITY',
    category: 'BRANDING',
    year: '2023',
    image: 'https://picsum.photos/800/1000?random=4',
    description: 'Visual identity system for a fintech unicorn.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Digital Strategy',
    description: 'We audit, analyze, and architect the roadmap for your digital acceleration. From UX audits to tech stack selection.',
    tags: ['Audits', 'Roadmapping', 'Consulting']
  },
  {
    id: 's2',
    title: 'UI/UX Design',
    description: 'Crafting pixel-perfect, user-centric interfaces that convert. We blend aesthetics with usability.',
    tags: ['Design Systems', 'Prototyping', 'Art Direction']
  },
  {
    id: 's3',
    title: 'Development',
    description: 'Building robust, scalable headless commerce solutions using the latest frontend technologies.',
    tags: ['Headless Shopify', 'React', 'Performance']
  },
  {
    id: 's4',
    title: 'Growth & Retention',
    description: 'Data-driven marketing strategies to increase AOV, LTV, and customer loyalty post-launch.',
    tags: ['CRO', 'Email Marketing', 'Analytics']
  }
];