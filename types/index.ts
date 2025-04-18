// Project type
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  visualizerType?: 'web' | 'mobile' | 'ai' | 'blockchain' | 'game' | 'cms';
  tags: string[];
  link: string;
  github?: string;
  category: 'web' | 'mobile' | 'backend' | 'desktop' | 'other';
  projectType: 'work' | 'personal';
  client?: string;
  date?: string;
  features?: string[];
  testimonial?: {
    text: string;
    author: string;
    position?: string;
  };
  detailedDescription?: string;
  screenshots?: string[];
  demoCredentials?: {
    username: string;
    password: string;
  };
}

// Tech stack item type
export interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  level: number; // 1-5
}

// Lab experiment type
export interface Experiment {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

// Navigation item type
export interface NavItem {
  href: string;
  label: string;
}

// Theme type
export type Theme = 'light' | 'dark';

// Language type
export type Language = 'en' | 'de' | 'sk';
