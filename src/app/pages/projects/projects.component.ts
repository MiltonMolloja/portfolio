import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <section class="min-h-screen bg-[#0a0f1a] py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Todos los Proyectos</span>
          </h1>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Explora mi portafolio de {{ allProjects.length }} proyectos en desarrollo full-stack, 
            microservicios y arquitectura cloud
          </p>
        </div>

        <!-- Search and Filters Bar -->
        <div class="flex flex-col md:flex-row gap-4 mb-6">
          <!-- Search -->
          <div class="flex-1 relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input 
              type="text" 
              [ngModel]="searchQuery()"
              (ngModelChange)="searchQuery.set($event)"
              class="w-full pl-12 pr-4 py-3 bg-[#0d1424] border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Buscar proyectos, tecnologías..."
            />
          </div>
          
          <!-- Sort Dropdown -->
          <div class="relative">
            <select 
              [ngModel]="sortOrder()"
              (ngModelChange)="sortOrder.set($event)"
              class="appearance-none bg-[#0d1424] border border-slate-700 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-purple-500 cursor-pointer"
            >
              <option value="newest">Más Recientes</option>
              <option value="oldest">Más Antiguos</option>
              <option value="name">Por Nombre</option>
            </select>
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>

          <!-- Filters Button -->
          <button 
            (click)="showFilters.set(!showFilters())"
            class="flex items-center gap-2 bg-[#0d1424] border border-slate-700 rounded-xl px-4 py-3 text-white hover:border-purple-500 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
            </svg>
            Filtros
          </button>
        </div>

        <!-- Filter Tags -->
        @if (showFilters()) {
          <div class="flex flex-wrap gap-2 mb-6 p-4 bg-[#0d1424] rounded-xl border border-slate-700">
            <button 
              (click)="selectedCategory.set('all')"
              [class]="selectedCategory() === 'all' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Todos
            </button>
            @for (cat of categories; track cat) {
              <button 
                (click)="selectedCategory.set(cat)"
                [class]="selectedCategory() === cat ? 'bg-purple-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'"
                class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                {{ cat }}
              </button>
            }
          </div>
        }

        <!-- Results count -->
        <p class="text-sm text-gray-500 mb-6">Mostrando {{ filteredProjects().length }} de {{ allProjects.length }} proyectos</p>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of filteredProjects(); track project.id) {
            <article class="bg-[#0d1424] rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col group">
              <!-- Project Image -->
              <a [routerLink]="['/projects', project.id]" class="block relative overflow-hidden">
                <div class="aspect-video bg-slate-800 overflow-hidden">
                  <img 
                    [src]="project.images[0]" 
                    [alt]="project.title"
                    width="600"
                    height="340"
                    loading="lazy"
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onerror="this.src='https://placehold.co/600x340/1e293b/64748b?text=Preview'"
                  />
                </div>
                <!-- Overlay on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-60"></div>
                <!-- Featured badge on image -->
                @if (project.featured) {
                  <span class="absolute top-3 right-3 px-3 py-1 bg-emerald-500/90 text-white text-xs font-semibold rounded-full shadow-lg">
                    Destacado
                  </span>
                }
                <!-- Category badge on image -->
                <span class="absolute top-3 left-3 px-3 py-1 bg-purple-600/90 text-white text-xs font-medium rounded-full shadow-lg">
                  {{ project.category }}
                </span>
              </a>

              <!-- Card Content -->
              <div class="p-5 pb-4 flex-1">
                <!-- Title -->
                <a [routerLink]="['/projects', project.id]" class="block mb-2">
                  <h3 class="text-lg font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">{{ project.title }}</h3>
                </a>
                
                <!-- Description -->
                <p class="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                  {{ project.shortDescription }}
                </p>

                <!-- Status badge -->
                <div class="flex flex-wrap gap-2 mb-4">
                  @if (project.status === 'Completed') {
                    <span class="px-2.5 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                      Completado
                    </span>
                  } @else if (project.status === 'Production') {
                    <span class="px-2.5 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                      En Producción
                    </span>
                  } @else {
                    <span class="px-2.5 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
                      En Desarrollo
                    </span>
                  }
                </div>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-1.5">
                  @for (tech of project.techStack.slice(0, 3); track tech) {
                    <span class="px-2 py-0.5 bg-slate-800/80 text-gray-400 text-xs rounded border border-slate-700">
                      {{ tech }}
                    </span>
                  }
                  @if (project.techStack.length > 3) {
                    <span class="px-2 py-0.5 bg-slate-800/80 text-gray-500 text-xs rounded border border-slate-700">
                      +{{ project.techStack.length - 3 }}
                    </span>
                  }
                </div>
              </div>

              <!-- Metrics Section -->
              @if (project.metrics && project.metrics.length > 0) {
                <div class="px-5 py-3 border-t border-slate-700/50 bg-slate-800/30">
                  <div class="flex flex-wrap gap-x-4 gap-y-1">
                    @for (metric of project.metrics.slice(0, 3); track metric.label) {
                      <div class="flex items-center gap-1.5">
                        <span class="text-purple-400 font-bold text-sm">{{ metric.value }}</span>
                        <span class="text-gray-500 text-xs">{{ metric.label }}</span>
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Actions -->
              <div class="px-5 py-3 border-t border-slate-700/50 flex items-center justify-between">
                <a 
                  [routerLink]="['/projects', project.id]"
                  class="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  Ver Detalles
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
                <div class="flex items-center gap-3">
                  @if (project.githubUrl) {
                    <a 
                      [href]="project.githubUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="text-gray-500 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  }
                  @if (project.demoUrl) {
                    <a 
                      [href]="project.demoUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="text-gray-500 hover:text-white transition-colors"
                      aria-label="Demo"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <!-- Empty State -->
        @if (filteredProjects().length === 0) {
          <div class="text-center py-16">
            <svg class="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 class="text-xl font-semibold text-white mb-2">No se encontraron proyectos</h3>
            <p class="text-gray-400">Intenta con otros términos de búsqueda o filtros</p>
          </div>
        }
      </div>
    </section>
  `
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  
  allProjects = this.portfolioService.getProjects();
  categories = ['Full Stack', 'Enterprise', 'Fintech', 'Security', 'Frontend'];
  
  searchQuery = signal('');
  selectedCategory = signal('all');
  sortOrder = signal('newest');
  showFilters = signal(false);

  filteredProjects = computed(() => {
    let projects = [...this.allProjects];
    
    // Filter by category
    if (this.selectedCategory() !== 'all') {
      projects = projects.filter(p => p.category === this.selectedCategory());
    }
    
    // Filter by search
    const query = this.searchQuery().toLowerCase();
    if (query) {
      projects = projects.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.techStack.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    // Sort
    if (this.sortOrder() === 'name') {
      projects.sort((a, b) => a.title.localeCompare(b.title));
    }
    // For newest/oldest, we keep the original order or reverse it
    if (this.sortOrder() === 'oldest') {
      projects.reverse();
    }
    
    return projects;
  });
}
