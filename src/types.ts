export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'System Design';
  technologies: string[];
  metrics?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  keyProjects: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Contribution {
  title: string;
  type: 'Open Source' | 'Speaking' | 'Publication';
  description: string;
  link?: string;
}
