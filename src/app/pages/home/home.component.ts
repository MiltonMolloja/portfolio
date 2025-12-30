import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { TypewriterComponent } from '../../shared/components/typewriter/typewriter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
    ProjectCardComponent,
    TypewriterComponent
  ],
  template: `
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center bg-gray-50 dark:bg-slate-900 py-20">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Content -->
          <div>
            <!-- Greeting -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hola soy
              <span class="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">{{ profile.name.split(' ')[0] }} {{ profile.name.split(' ')[2] }}</span>
            </h1>

            <!-- Title with Typewriter Effect -->
            <h2 class="text-2xl md:text-3xl lg:text-4xl mb-2 whitespace-nowrap h-10 md:h-12 lg:h-14">
              <app-typewriter [texts]="typingTexts" [typingSpeed]="80" [deletingSpeed]="40" [pauseDuration]="2000" />
            </h2>

            <!-- Subtitle
            <p class="text-lg text-gray-500 mb-6">
              {{ profile.subtitle }}
            </p> -->

            <!-- Tagline -->
            <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              {{ profile.tagline }}
            </p>

            <!-- Availability Badge -->
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-500/20">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Disponibilidad {{ profile.availability }}
              </span>
              <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-500/20">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
                {{ profile.workMode }}
              </span>
            </div>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-2 mb-8">
              @for (badge of techBadges; track badge.name) {
                <span class="px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 hover:border-gray-400 dark:hover:border-slate-500 transition-colors">
                  {{ badge.name }}
                </span>
              }
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4 mb-8">
              <a routerLink="/projects" class="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25">
                Ver mi trabajo
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a routerLink="/contact" class="inline-flex items-center px-6 py-3 rounded-lg font-medium border-2 border-pink-500 text-pink-400 hover:bg-pink-500/10 transition-all">
                Contacto
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex gap-4">
              <a
                [href]="profile.github"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-lg text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                [href]="profile.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-lg text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                [href]="'mailto:' + profile.email"
                class="p-2 rounded-lg text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right: Photo + Stats -->
          <div class="flex flex-col items-center gap-6">
            <!-- Profile Photo with Gradient Border -->
            <div class="relative">
              <!-- Gradient Ring -->
              <div class="w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 shadow-2xl shadow-purple-500/25">
                <div class="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <img
                    [src]="profile.photo"
                    [alt]="profile.name"
                    width="320"
                    height="320"
                    class="w-full h-full object-cover object-top"
                    onerror="this.src='https://ui-avatars.com/api/?name=Milton+Molloja&size=320&background=3b82f6&color=fff&bold=true'"
                  />
                </div>
              </div>

              <!-- Floating Badge - Experience -->
              <div class="absolute -left-2 top-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2 border border-gray-200 dark:border-slate-700 animate-float">
                <div class="flex items-center gap-1.5">
                  <span class="text-base">🏆</span>
                  <div>
                    <p class="text-[10px] text-gray-600 dark:text-gray-400 leading-tight">Full Stack Senior</p>
                    <p class="text-xs font-bold text-gray-900 dark:text-white leading-tight">6+ años exp.</p>
                  </div>
                </div>
              </div>

              <!-- Floating Badge - Sector -->
              <div class="absolute -right-2 bottom-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2 border border-gray-200 dark:border-slate-700 animate-float-delayed">
                <div class="flex items-center gap-1.5">
                  <span class="text-base">⭐</span>
                  <div>
                    <p class="text-[10px] text-gray-600 dark:text-gray-400 leading-tight">Sector</p>
                    <p class="text-xs font-bold text-gray-900 dark:text-white leading-tight">Bancario</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 gap-4 w-full max-w-xs">
              @for (stat of stats; track stat.label) {
                <div class="bg-white dark:bg-slate-800/50 rounded-xl p-4 text-center border border-gray-200 dark:border-slate-700/50 hover:border-gray-300 dark:hover:border-slate-600 transition-all shadow-sm">
                  <p class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{{ stat.value }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20 bg-white dark:bg-slate-900">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Proyectos Destacados</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Una selección de mi trabajo reciente mostrando experiencia en desarrollo full-stack,
            arquitectura de microservicios y sistemas enterprise.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          @for (project of featuredProjects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>

        <!-- View All Link -->
        <div class="text-center">
          <a routerLink="/projects" class="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-slate-700 transition-all">
            Ver Todos los Proyectos
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Preview Section -->
    <section class="py-20 bg-gray-50 dark:bg-[#0f172a]">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Habilidades Principales</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologías principales y experiencia en desarrollo full-stack, bases de datos y herramientas modernas.
          </p>
        </div>

        <!-- Skill Categories - 4 columns with progress bars -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

          <!-- Frontend -->
          <div class="bg-white/80 dark:bg-[#1e293b]/60 rounded-2xl p-5 border border-gray-200 dark:border-[#334155]/50 shadow-sm">
            <h3 class="text-lg font-semibold mb-5 flex items-center gap-2">
              <svg class="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span class="text-purple-400">Frontend</span>
            </h3>
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-yellow-400">⚡</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">Angular</span>
                  </div>
                  <span class="text-gray-500 text-xs">6 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-purple-500" style="width: 100%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-blue-500">■</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">TypeScript</span>
                  </div>
                  <span class="text-gray-500 text-xs">6 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-blue-500" style="width: 100%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-yellow-400">✦</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">JavaScript</span>
                  </div>
                  <span class="text-gray-500 text-xs">6 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-yellow-500" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="bg-white/80 dark:bg-[#1e293b]/60 rounded-2xl p-5 border border-gray-200 dark:border-[#334155]/50 shadow-sm">
            <h3 class="text-lg font-semibold mb-5 flex items-center gap-2">
              <svg class="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              <span class="text-orange-400">Backend</span>
            </h3>
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-purple-500">◆</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">.NET</span>
                  </div>
                  <span class="text-gray-500 text-xs">6 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-orange-500" style="width: 100%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-purple-400">■</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">C#</span>
                  </div>
                  <span class="text-gray-500 text-xs">6 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-orange-500" style="width: 100%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-blue-400">◈</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">Entity Framework</span>
                  </div>
                  <span class="text-gray-500 text-xs">6 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-orange-500" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Base de datos -->
          <div class="bg-white/80 dark:bg-[#1e293b]/60 rounded-2xl p-5 border border-gray-200 dark:border-[#334155]/50 shadow-sm">
            <h3 class="text-lg font-semibold mb-5 flex items-center gap-2">
              <span class="w-4 h-4 bg-green-500 rounded-sm"></span>
              <span class="text-green-400">Base de datos</span>
            </h3>
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-red-500">■</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">SQL Server</span>
                  </div>
                  <span class="text-gray-500 text-xs">6 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-green-500" style="width: 100%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-blue-400">🐘</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">PostgreSQL</span>
                  </div>
                  <span class="text-gray-500 text-xs">2 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-green-500" style="width: 33%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- DevOps -->
          <div class="bg-white/80 dark:bg-[#1e293b]/60 rounded-2xl p-5 border border-gray-200 dark:border-[#334155]/50 shadow-sm">
            <h3 class="text-lg font-semibold mb-5 flex items-center gap-2">
              <svg class="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
              <span class="text-red-400">DevOps</span>
            </h3>
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-blue-400">🐳</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">Docker</span>
                  </div>
                  <span class="text-gray-500 text-xs">2 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-red-500" style="width: 33%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-blue-500">☁️</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">Azure</span>
                  </div>
                  <span class="text-gray-500 text-xs">3 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-red-500" style="width: 50%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-orange-400">☁️</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm">AWS</span>
                  </div>
                  <span class="text-gray-500 text-xs">3 años</span>
                </div>
                <div class="h-1.5 bg-gray-200 dark:bg-[#0f172a] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-red-500" style="width: 50%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tecnologías complementarias -->
        <div class="mb-12">
          <h3 class="text-xl font-bold text-white mb-6 text-center">
            Tecnologías complementarias
          </h3>
          <div class="flex flex-wrap justify-center gap-2">
            @for (skill of complementarySkills; track skill) {
              <span class="px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#1e293b]/50 border border-gray-300 dark:border-[#334155]/50 hover:border-gray-400 dark:hover:border-[#475569] transition-colors">
                {{ skill }}
              </span>
            }
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div class="bg-white dark:bg-[#1e293b]/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-[#334155]/50 shadow-sm">
            <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">14</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Tecnologías centrales</div>
          </div>
          <div class="bg-white dark:bg-[#1e293b]/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-[#334155]/50 shadow-sm">
            <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">{{ complementarySkills.length }} +</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Habilidades complementarias</div>
          </div>
          <div class="bg-white dark:bg-[#1e293b]/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-[#334155]/50 shadow-sm">
            <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">6+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Años de experiencia</div>
          </div>
          <div class="bg-white dark:bg-[#1e293b]/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-[#334155]/50 shadow-sm">
            <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">1</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Certificaciones</div>
          </div>
        </div>

        <div class="text-center">
          <a routerLink="/skills" class="inline-flex items-center px-6 py-3 rounded-full font-medium text-gray-300 hover:text-white border border-[#334155] hover:border-[#475569] transition-all">
            Ver Todas las Habilidades
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .animate-float-delayed {
      animation: float 3s ease-in-out infinite;
      animation-delay: 1.5s;
    }
  `]
})
export class HomeComponent implements OnInit {
  private portfolioService = inject(PortfolioService);

  profile = this.portfolioService.getProfile();
  stats = this.portfolioService.getStats();
  techBadges = this.portfolioService.getTechBadges();
  featuredProjects = this.portfolioService.getFeaturedProjects();
  skillCategories = this.portfolioService.getSkillCategories();
  complementarySkills = this.portfolioService.getComplementarySkills();

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  typingTexts = [
    'Full Stack Developer Senior',
    'Especialista en .NET Core',
    'Experto en Angular',
    'Arquitecto de Microservicios'
  ];

  getCategoryColor(index: number): string {
    const colors = ['text-purple-400', 'text-orange-400', 'text-green-400', 'text-red-400'];
    return colors[index % colors.length];
  }
}
