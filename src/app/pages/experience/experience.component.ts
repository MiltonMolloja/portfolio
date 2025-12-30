import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-screen bg-gray-50 dark:bg-[#0a0f1a] py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-500/20 mb-4">
            Trayectoria Profesional
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia Laboral
          </h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            +6 años construyendo soluciones enterprise para el sector bancario y 
            fintech en Latinoamérica.
          </p>
        </div>

        <!-- Stats Summary -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          @for (stat of careerStats; track stat.label) {
            <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-slate-700/50 p-6 text-center hover:border-blue-500/50 transition-colors">
              <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
            </div>
          }
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical Line -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          @for (exp of experiences; track exp.id; let i = $index; let isEven = $even) {
            <div class="relative mb-12 last:mb-0">
              <!-- Timeline Node -->
              <div class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-50 dark:border-[#0a0f1a] z-10"></div>
              
              <!-- Content Card -->
              <div class="ml-8 md:ml-0 md:w-[calc(50%-2rem)]" [class.md:mr-auto]="isEven" [class.md:ml-auto]="!isEven">
                <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-slate-700/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300 group">
                  <!-- Header -->
                  <div class="p-6 border-b border-gray-200 dark:border-slate-700/50">
                    <!-- Date Badge -->
                    <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-gradient-to-r dark:from-blue-500/20 dark:to-purple-500/20 text-purple-700 dark:text-blue-300 border border-purple-200 dark:border-blue-500/30 mb-3">
                      <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {{ exp.startDate }} - {{ exp.endDate }}
                    </div>
                    
                    <!-- Role -->
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {{ exp.role }}
                    </h3>
                    
                    <!-- Company -->
                    <p class="text-blue-600 dark:text-blue-400 font-medium text-sm mb-1">
                      {{ exp.company }}
                    </p>
                    
                    <!-- Client -->
                    @if (exp.client) {
                        <p class="text-gray-600 dark:text-gray-500 text-sm flex items-center gap-1.5">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        {{ exp.client }}
                      </p>
                    }
                  </div>
                  
                  <!-- Body -->
                  <div class="p-6">
                    <!-- Description -->
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                      {{ exp.description }}
                    </p>
                    
                    <!-- Key Achievements -->
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                        </svg>
                        Logros Clave
                      </h4>
                      <div class="space-y-3">
                        @for (achievement of exp.achievements; track achievement.description) {
                          <div class="flex gap-3 group/item">
                            <div class="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mt-0.5">
                              <svg class="w-3 h-3 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                              </svg>
                            </div>
                            <div class="flex-1">
                              <p class="text-gray-900 dark:text-gray-300 text-sm">{{ achievement.description }}</p>
                              <p class="text-emerald-600 dark:text-emerald-400 text-xs font-medium mt-0.5 flex items-center gap-1">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                </svg>
                                {{ achievement.impact }}
                              </p>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                    
                    <!-- Tech Stack -->
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                        Stack Tecnológico
                      </h4>
                      <div class="flex flex-wrap gap-2">
                        @for (tech of exp.techStack; track tech) {
                          <span class="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-300 dark:border-slate-700 hover:border-purple-500/50 transition-colors">
                            {{ tech }}
                          </span>
                        }
                      </div>
                    </div>
                    
                    <!-- Related Project Link -->
                    @if (getRelatedProject(exp.id)) {
                        <div class="pt-4 border-t border-gray-200 dark:border-slate-700/50">
                        <a 
                          [routerLink]="['/projects', getRelatedProject(exp.id)!.id]"
                          class="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                          </svg>
                          Ver proyecto: {{ getRelatedProject(exp.id)!.title }}
                          <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </a>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Personal Projects Section -->
        <div class="mt-20">
          <div class="text-center mb-10">
            <span class="inline-block px-4 py-1.5 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 text-sm font-medium rounded-full border border-purple-200 dark:border-purple-500/20 mb-4">
              Proyectos Personales
            </span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Desarrollo Continuo
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Proyectos personales que demuestran iniciativa y aprendizaje continuo de nuevas tecnologías.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            @for (project of personalProjects; track project.id) {
              <a 
                [routerLink]="['/projects', project.id]"
                class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors mb-1">
                      {{ project.title }}
                    </h3>
                    <span class="inline-block px-2 py-0.5 bg-purple-50 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded border border-purple-200 dark:border-purple-500/30">
                      {{ project.category }}
                    </span>
                  </div>
                  <svg class="w-5 h-5 text-gray-600 dark:text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {{ project.shortDescription }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                  @for (tech of project.techStack.slice(0, 4); track tech) {
                    <span class="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-400 text-xs rounded border border-gray-300 dark:border-slate-700">
                      {{ tech }}
                    </span>
                  }
                  @if (project.techStack.length > 4) {
                    <span class="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-500 text-xs rounded border border-gray-300 dark:border-slate-700">
                      +{{ project.techStack.length - 4 }}
                    </span>
                  }
                </div>
              </a>
            }
          </div>
        </div>

        <!-- Skills Summary -->
        <div class="mt-20">
          <div class="text-center mb-10">
            <span class="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-medium rounded-full border border-emerald-200 dark:border-emerald-500/20 mb-4">
              Competencias Técnicas
            </span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Habilidades Destacadas
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Tecnologías y herramientas utilizadas a lo largo de mi carrera profesional.
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            @for (category of skillsSummary; track category.name) {
              <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-slate-700/50 p-5 hover:border-emerald-500/30 transition-colors">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                    <span class="text-lg">{{ category.icon }}</span>
                  </div>
                  <h3 class="font-semibold text-gray-900 dark:text-white text-sm">{{ category.name }}</h3>
                </div>
                <div class="space-y-1.5">
                  @for (skill of category.skills.slice(0, 4); track skill) {
                    <div class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      <span class="text-gray-600 dark:text-gray-400 text-xs">{{ skill }}</span>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
          
          <div class="text-center mt-8">
            <a 
              routerLink="/skills"
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-medium rounded-lg hover:from-emerald-500 hover:to-blue-500 transition-all"
            >
              Ver todas las habilidades
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 md:p-12 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Interesado en trabajar juntos?
          </h2>
          <p class="text-gray-900 dark:text-gray-300 max-w-xl mx-auto mb-6">
            Estoy disponible para nuevos proyectos y oportunidades. 
            ¡Hablemos sobre cómo puedo aportar valor a tu equipo!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              routerLink="/contact"
              class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contactarme
            </a>
            <a 
              routerLink="/projects"
              class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-slate-600 hover:border-purple-500/50 hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-all"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  experiences = this.portfolioService.getExperiences();
  projects = this.portfolioService.getProjects();

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Career stats computed from experiences
  careerStats = [
    { value: '6+', label: 'Años de Experiencia' },
    { value: '5', label: 'Proyectos Enterprise' },
    { value: '$60M+', label: 'Transacciones Procesadas' },
    { value: '100K+', label: 'Usuarios Impactados' }
  ];

  // Personal/side projects (not tied to work experience)
  get personalProjects() {
    return this.projects.filter(p => 
      p.id === 'ecommerce-platform' || 
      p.id === 'identity-auth-platform' || 
      p.id === 'portfolio-website'
    );
  }

  // Skills summary for quick overview
  skillsSummary = [
    { 
      name: 'Frontend', 
      icon: '🎨',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS']
    },
    { 
      name: 'Backend', 
      icon: '⚙️',
      skills: ['.NET Core', 'C#', 'Entity Framework', 'Web API']
    },
    { 
      name: 'Database', 
      icon: '🗄️',
      skills: ['SQL Server', 'Redis', 'PostgreSQL', 'MySQL']
    },
    { 
      name: 'DevOps', 
      icon: '🚀',
      skills: ['Docker', 'Azure DevOps', 'CI/CD', 'Git']
    }
  ];

  // Map experience to related project
  getRelatedProject(experienceId: string) {
    const mapping: Record<string, string> = {
      'supervielle': 'insurance-platform',
      'infocorp': 'icbanking',
      'consultatio': 'cobra-system'
    };
    
    const projectId = mapping[experienceId];
    if (projectId) {
      return this.projects.find(p => p.id === projectId);
    }
    return null;
  }
}
