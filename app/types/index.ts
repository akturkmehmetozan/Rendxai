export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'architectural' | 'interior' | 'product' | 'ai-generated';
  imageUrl: string;
  modelUrl?: string;
  featured: boolean;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export interface ScrollProgress {
  progress: number;
  direction: 'up' | 'down';
}
