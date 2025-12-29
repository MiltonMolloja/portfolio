import { Injectable, signal } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import { 
  PortfolioData, 
  Profile, 
  Project, 
  Experience, 
  SkillCategory,
  Testimonial 
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private data: PortfolioData = PORTFOLIO_DATA;
  
  // Theme signal
  isDarkMode = signal(this.getInitialTheme());

  private getInitialTheme(): boolean {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) {
        return stored === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  toggleTheme(): void {
    const newValue = !this.isDarkMode();
    this.isDarkMode.set(newValue);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newValue);
    }
  }

  initTheme(): void {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', this.isDarkMode());
    }
  }

  getProfile(): Profile {
    return this.data.profile;
  }

  getStats() {
    return this.data.stats;
  }

  getTechBadges() {
    return this.data.techBadges;
  }

  getSkillCategories(): SkillCategory[] {
    return this.data.skillCategories;
  }

  getComplementarySkills(): string[] {
    return this.data.complementarySkills;
  }

  getProjects(): Project[] {
    return this.data.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.data.projects.filter(p => p.featured);
  }

  getProjectById(id: string): Project | undefined {
    return this.data.projects.find(p => p.id === id);
  }

  getExperiences(): Experience[] {
    return this.data.experiences;
  }

  getEducation() {
    return this.data.education;
  }

  getCertifications() {
    return this.data.certifications;
  }

  getCourses() {
    return this.data.courses;
  }

  getTestimonials(): Testimonial[] {
    return this.data.testimonials;
  }

  getInterests(): string[] {
    return this.data.interests;
  }

  // Stats calculations
  getTotalYearsExperience(): number {
    return 6;
  }

  getTotalSkills(): number {
    const coreSkills = this.data.skillCategories.reduce(
      (acc, cat) => acc + cat.skills.length, 0
    );
    return coreSkills + this.data.complementarySkills.length;
  }
}
