import { Component, inject, OnInit, signal, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SeoService } from '../../core/services/seo.service';
import { Project, ProjectImage } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  template: `
    @if (project()) {
      <section class="min-h-screen bg-[#0a0f1a] py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Back Link -->
          <a routerLink="/projects" class="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group">
            <svg class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Volver a Proyectos
          </a>

          <!-- Header Section -->
          <div class="mb-10">
            <!-- Badges -->
            <div class="flex flex-wrap items-center gap-2 mb-4">
              @if (project()!.featured) {
                <span class="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-md">
                  Proyecto Destacado
                </span>
              }
              <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-md border border-emerald-500/30">
                {{ project()!.category }}
              </span>
              @if (project()!.status === 'Completed') {
                <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-md border border-green-500/30">
                  Completado
                </span>
              } @else if (project()!.status === 'Production') {
                <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-md border border-blue-500/30">
                  En Producción
                </span>
              }
            </div>
            
            <!-- Title -->
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {{ project()!.title }}
            </h1>
            
            <!-- Description -->
            <p class="text-lg text-gray-400 max-w-4xl leading-relaxed mb-6">
              {{ project()!.shortDescription }}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3">
              @if (project()!.githubUrl) {
                <a 
                  [href]="project()!.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-5 py-2.5 bg-slate-800 text-white text-sm font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Ver en GitHub
                </a>
              }
              @if (project()!.demoUrl) {
                <a 
                  [href]="project()!.demoUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Ver Sitio Web
                </a>
              }
            </div>
          </div>

          <!-- Main Content Grid -->
          <div class="grid lg:grid-cols-3 gap-6">
            <!-- Left Column (2/3) -->
            <div class="lg:col-span-2 space-y-6">
              <!-- Overview Card -->
              <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                <h2 class="text-xl font-bold text-white mb-3">Descripción General</h2>
                <p class="text-gray-400 text-sm leading-relaxed">
                  {{ project()!.fullDescription }}
                </p>
              </div>

              <!-- Technologies Card -->
              <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                <h2 class="text-xl font-bold text-white mb-4">Tecnologías y Herramientas</h2>
                <div class="flex flex-wrap gap-2">
                  @for (tech of project()!.techStack; track tech) {
                    <span class="px-3 py-1.5 bg-[#1e293b] text-gray-300 text-xs rounded-md border border-slate-600 hover:border-blue-500/50 transition-colors">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

              <!-- Image Categories -->
              @if (project()!.imageCategories && project()!.imageCategories!.length > 0) {
                @for (category of project()!.imageCategories; track category.title; let catIndex = $index) {
                  <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                    <h2 class="text-xl font-bold text-white mb-4">{{ category.title }}</h2>
                    
                    <!-- Grid for Architecture (2 cols) or single image for metrics -->
                    @if (category.images.length === 1) {
                      <!-- Single large image -->
                      <div 
                        class="group relative cursor-pointer overflow-hidden rounded-lg border border-slate-700 bg-slate-800/30"
                        (click)="openImage(category.images[0].src)"
                      >
                        <div class="aspect-video">
                          <img 
                            [src]="category.images[0].src" 
                            [alt]="category.images[0].caption"
                            class="w-full h-full object-contain bg-slate-900/50 transition-transform duration-300 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </div>
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <svg class="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            <path d="M11 8v6M8 11h6"></path>
                          </svg>
                        </div>
                      </div>
                      <p class="text-sm text-blue-400 text-center mt-4 italic">{{ category.images[0].caption }}</p>
                    } @else {
                      <!-- Grid of images -->
                      <div class="grid md:grid-cols-2 gap-4">
                        @for (image of getVisibleImages(catIndex, category.images); track image.src; let imgIndex = $index) {
                          <div 
                            class="group relative cursor-pointer overflow-hidden rounded-lg border border-slate-700 bg-slate-800/30"
                            (click)="openImage(image.src)"
                          >
                            <div class="aspect-video">
                              <img 
                                [src]="image.src" 
                                [alt]="image.caption"
                                class="w-full h-full object-contain bg-slate-900/50 transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                              <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                <path d="M11 8v6M8 11h6"></path>
                              </svg>
                            </div>
                            <div class="p-3 bg-slate-800/70">
                              <p class="text-xs text-gray-400 text-center line-clamp-2">{{ image.caption }}</p>
                            </div>
                          </div>
                        }
                      </div>
                      
                      <!-- Show more button -->
                      @if (category.images.length > 4) {
                        <div class="mt-4 text-center">
                          <button 
                            (click)="toggleCategoryImages(catIndex, category.images.length)"
                            class="inline-flex items-center px-6 py-2.5 bg-slate-800 text-gray-300 text-sm font-medium rounded-lg border border-slate-600 hover:bg-slate-700 transition-colors"
                          >
                            {{ getVisibleCount(catIndex) < category.images.length ? 'Mostrar ' + (category.images.length - getVisibleCount(catIndex)) + ' más' : 'Mostrar menos' }}
                          </button>
                        </div>
                      }
                    }
                  </div>
                }
              }

              <!-- Fallback: Old images array (for backwards compatibility) -->
              @if (!project()!.imageCategories && project()!.images && project()!.images.length > 0) {
                <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                  <h2 class="text-xl font-bold text-white mb-4">Capturas de Pantalla</h2>
                  <div class="grid md:grid-cols-2 gap-4">
                    @for (image of project()!.images; track image; let i = $index) {
                      <div 
                        class="group relative cursor-pointer overflow-hidden rounded-lg border border-slate-700 bg-slate-800/30"
                        (click)="openImage(image)"
                      >
                        <div class="aspect-video">
                          <img 
                            [src]="image" 
                            [alt]="'Captura ' + (i + 1)"
                            class="w-full h-full object-contain bg-slate-900/50 transition-transform duration-300 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </div>
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            <path d="M11 8v6M8 11h6"></path>
                          </svg>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Key Features Card -->
              @if (project()!.highlights && project()!.highlights!.length > 0) {
                <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                  <h2 class="text-xl font-bold text-white mb-4">Características Principales</h2>
                  <ul class="space-y-3">
                    @for (highlight of project()!.highlights!.slice(0, visibleFeatures()); track highlight; let i = $index) {
                      <li class="flex items-start gap-3">
                        <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold flex items-center justify-center">
                          {{ i + 1 }}
                        </span>
                        <span class="text-gray-400 text-sm">{{ highlight }}</span>
                      </li>
                    }
                  </ul>
                  @if (project()!.highlights!.length > 5) {
                    <div class="mt-4 text-center">
                      <button 
                        (click)="toggleFeatures()"
                        class="inline-flex items-center px-6 py-2.5 bg-slate-800 text-gray-300 text-sm font-medium rounded-lg border border-slate-600 hover:bg-slate-700 transition-colors"
                      >
                        <svg class="w-4 h-4 mr-2" [class.rotate-180]="visibleFeatures() > 5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                        {{ visibleFeatures() <= 5 ? 'Mostrar ' + (project()!.highlights!.length - 5) + ' más' : 'Mostrar menos' }}
                      </button>
                    </div>
                  }
                </div>
              }

              <!-- Challenges & Solutions Card -->
              @if (project()!.challenges && project()!.challenges!.length > 0) {
                <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                  <h2 class="text-xl font-bold text-white mb-6">Desafíos y Soluciones</h2>
                  <div class="space-y-6">
                    @for (challenge of project()!.challenges!.slice(0, visibleChallenges()); track challenge.title; let i = $index) {
                      <div class="border-l-2 border-blue-500/50 pl-4">
                        <h3 class="text-base font-semibold text-white mb-3 flex items-start gap-2">
                          <svg class="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                          </svg>
                          {{ challenge.title }}
                        </h3>
                        
                        <div class="space-y-3">
                          <div>
                            <p class="text-xs font-semibold text-red-400 uppercase tracking-wide mb-1">Desafío:</p>
                            <p class="text-sm text-gray-400 leading-relaxed">{{ challenge.challenge }}</p>
                          </div>
                          
                          <div>
                            <p class="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-1">Solución:</p>
                            <p class="text-sm text-gray-300 leading-relaxed">{{ challenge.solution }}</p>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                  
                  @if (project()!.challenges!.length > 3) {
                    <div class="mt-6 text-center">
                      <button 
                        (click)="toggleChallenges()"
                        class="inline-flex items-center px-6 py-2.5 bg-slate-800 text-gray-300 text-sm font-medium rounded-lg border border-slate-600 hover:bg-slate-700 transition-colors"
                      >
                        <svg class="w-4 h-4 mr-2" [class.rotate-180]="visibleChallenges() > 3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                        {{ visibleChallenges() <= 3 ? 'Mostrar ' + (project()!.challenges!.length - 3) + ' más' : 'Mostrar menos' }}
                      </button>
                    </div>
                  }
                </div>
              }
            </div>

            <!-- Right Column (1/3) - Sidebar -->
            <div class="space-y-6">
              <!-- Project Info Card -->
              <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                <h3 class="text-lg font-bold text-white mb-4">Información del Proyecto</h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <div>
                      <p class="text-sm font-medium text-white">Período</p>
                      <p class="text-sm text-gray-400">{{ project()!.status === 'Production' ? 'En Producción' : 'Proyecto Personal' }}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <div>
                      <p class="text-sm font-medium text-white">Rol</p>
                      <p class="text-sm text-gray-400">Full Stack Developer Senior</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Project Metrics Card -->
              @if (project()!.metrics && project()!.metrics.length > 0) {
                <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                  <h3 class="text-lg font-bold text-white mb-4">Métricas del Proyecto</h3>
                  <div class="grid grid-cols-2 gap-3">
                    @for (metric of project()!.metrics; track metric.label) {
                      <div class="bg-[#1e293b] rounded-lg p-4 text-center border border-slate-700/50">
                        <p class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                          {{ metric.value }}
                        </p>
                        <p class="text-xs text-gray-500">{{ metric.label }}</p>
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- External Links Card -->
              <div class="bg-[#111827] rounded-xl border border-slate-700/50 p-6">
                <h3 class="text-lg font-bold text-white mb-4">Enlaces Externos</h3>
                <div class="space-y-3">
                  @if (project()!.githubUrl) {
                    <a 
                      [href]="project()!.githubUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span class="text-sm">Ver en GitHub</span>
                      <svg class="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  }
                  @if (project()!.demoUrl) {
                    <a 
                      [href]="project()!.demoUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>
                      <span class="text-sm">Ver Sitio Web</span>
                      <svg class="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Image Lightbox Modal -->
      @if (selectedImage()) {
        <div 
          class="fixed inset-0 z-50 bg-black/95 flex flex-col"
          (click)="closeImage()"
        >
          <!-- Header with close button and counter -->
          <div class="flex items-center justify-between p-4">
            <div class="text-white/70 text-sm font-medium">
              {{ currentImageIndex() + 1 }} / {{ allImages().length }}
            </div>
            <button 
              class="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              (click)="closeImage()"
              title="Cerrar (ESC)"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Main content area -->
          <div class="flex-1 flex items-center justify-center relative px-4">
            <!-- Previous button -->
            <button 
              class="absolute left-4 z-10 p-3 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              (click)="previousImage($event)"
              [disabled]="currentImageIndex() === 0"
              title="Anterior"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <!-- Image -->
            <img 
              [src]="selectedImage()" 
              [alt]="currentImageCaption()"
              class="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              (click)="$event.stopPropagation()"
            />

            <!-- Next button -->
            <button 
              class="absolute right-4 z-10 p-3 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              (click)="nextImage($event)"
              [disabled]="currentImageIndex() === allImages().length - 1"
              title="Siguiente"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <!-- Caption at bottom -->
          <div class="p-6 text-center">
            <p class="text-white text-sm md:text-base max-w-4xl mx-auto">
              {{ currentImageCaption() }}
            </p>
          </div>
        </div>
      }
    } @else {
      <section class="min-h-screen bg-[#0a0f1a] py-20 flex items-center justify-center">
        <div class="text-center">
          <svg class="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h1 class="text-2xl font-bold text-white mb-4">
            Proyecto no encontrado
          </h1>
          <a routerLink="/projects" class="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
            Ver Todos los Proyectos
          </a>
        </div>
      </section>
    }
  `,
  styles: [`
    .rotate-180 {
      transform: rotate(180deg);
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);
  
  project = signal<Project | undefined>(undefined);
  selectedImage = signal<string | null>(null);
  currentImageIndex = signal<number>(0);
  allImages = signal<ProjectImage[]>([]);
  visibleFeatures = signal(5);
  visibleChallenges = signal(3);
  
  // Track visible images per category
  categoryVisibleCounts: Record<number, number> = {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const proj = this.portfolioService.getProjectById(id);
      this.project.set(proj);
      
      // Set SEO meta tags for this project
      if (proj) {
        this.seoService.setProjectMeta(proj);
      }
      
      // Build flat array of all images for navigation
      if (proj?.imageCategories) {
        const images: ProjectImage[] = [];
        proj.imageCategories.forEach(cat => {
          cat.images.forEach(img => images.push(img));
        });
        this.allImages.set(images);
      }
    }
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.selectedImage()) {
      return;
    }
    
    switch (event.key) {
      case 'Escape':
        this.closeImage();
        break;
      case 'ArrowLeft':
        this.previousImage(event);
        break;
      case 'ArrowRight':
        this.nextImage(event);
        break;
    }
  }

  openImage(imageSrc: string): void {
    this.selectedImage.set(imageSrc);
    // Find index in allImages array
    const index = this.allImages().findIndex(img => img.src === imageSrc);
    this.currentImageIndex.set(index >= 0 ? index : 0);
  }

  closeImage(): void {
    this.selectedImage.set(null);
  }

  currentImageCaption(): string {
    const images = this.allImages();
    const index = this.currentImageIndex();
    return images[index]?.caption || '';
  }

  previousImage(event: Event): void {
    event.stopPropagation();
    const currentIndex = this.currentImageIndex();
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      this.currentImageIndex.set(newIndex);
      this.selectedImage.set(this.allImages()[newIndex].src);
    }
  }

  nextImage(event: Event): void {
    event.stopPropagation();
    const currentIndex = this.currentImageIndex();
    const images = this.allImages();
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      this.currentImageIndex.set(newIndex);
      this.selectedImage.set(images[newIndex].src);
    }
  }

  getVisibleCount(categoryIndex: number): number {
    return this.categoryVisibleCounts[categoryIndex] || 4;
  }

  getVisibleImages(categoryIndex: number, images: { src: string; caption: string }[]): { src: string; caption: string }[] {
    const count = this.getVisibleCount(categoryIndex);
    return images.slice(0, count);
  }

  toggleCategoryImages(categoryIndex: number, totalImages: number): void {
    const currentCount = this.getVisibleCount(categoryIndex);
    if (currentCount < totalImages) {
      this.categoryVisibleCounts[categoryIndex] = totalImages;
    } else {
      this.categoryVisibleCounts[categoryIndex] = 4;
    }
  }

  toggleFeatures(): void {
    const project = this.project();
    if (project && project.highlights) {
      if (this.visibleFeatures() <= 5) {
        this.visibleFeatures.set(project.highlights.length);
      } else {
        this.visibleFeatures.set(5);
      }
    }
  }

  toggleChallenges(): void {
    const project = this.project();
    if (project && project.challenges) {
      if (this.visibleChallenges() <= 3) {
        this.visibleChallenges.set(project.challenges.length);
      } else {
        this.visibleChallenges.set(3);
      }
    }
  }
}
