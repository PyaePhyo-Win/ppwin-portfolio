export interface Stat {
  label: string;
  value: string;
  iconKey: 'experience' | 'projects';
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period?: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools' | string;

export interface Skills {
  [category: string]: string[];
}
