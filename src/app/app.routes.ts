import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Milton Molloja - Full Stack Developer Senior'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects - Milton Molloja'
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Project Details - Milton Molloja'
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent),
    title: 'Skills - Milton Molloja'
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent),
    title: 'Experience - Milton Molloja'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About - Milton Molloja'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact - Milton Molloja'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
