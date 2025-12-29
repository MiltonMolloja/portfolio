export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  availability: string;
  workMode: string;
  photo?: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface TechBadge {
  name: string;
  icon?: string;
}

export interface Skill {
  name: string;
  years: number;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Basic';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  status: 'Completed' | 'Ongoing' | 'Production';
  featured: boolean;
  techStack: string[];
  metrics: ProjectMetric[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export interface ExperienceAchievement {
  description: string;
  impact: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: ExperienceAchievement[];
  techStack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  status: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Course {
  name: string;
  instructor: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stat[];
  techBadges: TechBadge[];
  skillCategories: SkillCategory[];
  complementarySkills: string[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  courses: Course[];
  testimonials: Testimonial[];
  interests: string[];
}
