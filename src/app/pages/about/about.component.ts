import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-screen bg-[#0a0f1a]">
      <!-- Hero Section -->
      <div class="relative overflow-hidden">
        <!-- Background gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div class="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            <!-- Left: Photo and Quick Stats -->
            <div class="flex flex-col items-center lg:items-start lg:w-[280px]">
              <!-- Profile Photo -->
              <div class="relative mb-8">
                <div class="w-48 h-48 md:w-56 md:h-56 rounded-2xl p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-2xl shadow-purple-500/25">
                  <div class="w-full h-full rounded-xl overflow-hidden bg-slate-800">
                    <img
                      [src]="profile.photo"
                      [alt]="profile.name"
                      width="224"
                      height="224"
                      class="w-full h-full object-cover object-top"
                      onerror="this.src='https://ui-avatars.com/api/?name=Milton+Molloja&size=224&background=3b82f6&color=fff&bold=true'"
                    />
                  </div>
                </div>
                <!-- Status Badge -->
                <div class="absolute -bottom-3 -right-3 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
                  <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Disponible
                </div>
              </div>

              <!-- Quick Stats Grid -->
              <div class="grid grid-cols-2 gap-3 w-full">
                @for (stat of careerStats; track stat.label) {
                  <div class="bg-[#0d1424] rounded-xl p-3 border border-slate-700/50 text-center hover:border-purple-500/50 transition-all">
                    <p class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {{ stat.value }}
                    </p>
                    <p class="text-xs text-gray-400 mt-1">{{ stat.label }}</p>
                  </div>
                }
              </div>

              <!-- Location Info -->
              <div class="flex flex-col gap-2 mt-6 text-gray-400 text-sm w-full">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>{{ profile.location }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  <span>{{ profile.workMode }}</span>
                </div>
              </div>

              <!-- Social Links -->
              <div class="flex gap-3 mt-4">
                <a [href]="profile.github" target="_blank" rel="noopener noreferrer"
                   class="p-2.5 bg-[#0d1424] rounded-lg border border-slate-700/50 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a [href]="profile.linkedin" target="_blank" rel="noopener noreferrer"
                   class="p-2.5 bg-[#0d1424] rounded-lg border border-slate-700/50 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a [href]="'mailto:' + profile.email"
                   class="p-2.5 bg-[#0d1424] rounded-lg border border-slate-700/50 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Right: Bio Content -->
            <div>
              <h1 class="text-4xl md:text-5xl font-bold mb-2">
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">{{ profile.name }}</span>
              </h1>
              <h2 class="text-xl text-purple-400 font-medium mb-6">{{ profile.title }}</h2>

              <!-- Bio paragraphs -->
              <div class="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Especializado en <span class="text-purple-400 font-semibold">microservicios .NET</span> y 
                  <span class="text-purple-400 font-semibold">micro-frontends Angular</span> para sistemas 
                  empresariales escalables del sector bancario y financiero.
                </p>
                <p>
                  A lo largo de mi carrera, he tenido el privilegio de trabajar en proyectos de alto impacto 
                  para instituciones como <span class="text-white font-semibold">Banco Supervielle</span>, 
                  <span class="text-white font-semibold">InfoCorp</span> y 
                  <span class="text-white font-semibold">Consultatio SA</span>. Me especializo en la creaci&oacute;n 
                  de arquitecturas de microservicios, implementaci&oacute;n de sistemas de autenticaci&oacute;n 
                  seguros y desarrollo de plataformas de alta disponibilidad.
                </p>
                <p>
                  Me apasiona el <span class="text-emerald-400 font-semibold">c&oacute;digo limpio</span>, el desarrollo 
                  basado en pruebas y la <span class="text-emerald-400 font-semibold">mentor&iacute;a de desarrolladores junior</span>. 
                  Contribuyo activamente al crecimiento de los equipos mediante code reviews, documentaci&oacute;n 
                  t&eacute;cnica y transferencia de conocimientos.
                </p>
              </div>

              <!-- Professional Goals - Horizontal Layout -->
              <div class="mt-8">
                <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  Metas Profesionales
                </h3>
                
                <div class="grid md:grid-cols-3 gap-4">
                  <!-- Buscando -->
                  <div class="bg-[#0d1424] rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/30 transition-all">
                    <h4 class="text-purple-400 font-semibold text-sm mb-2 flex items-center gap-2">
                      <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Buscando
                    </h4>
                    <p class="text-gray-300 text-sm leading-relaxed">
                      Posiciones de <span class="text-white font-medium">Senior Software Engineer</span> o 
                      <span class="text-white font-medium">Tech Lead</span> para crear soluciones escalables 
                      y liderar equipos t&eacute;cnicos.
                    </p>
                  </div>
                  
                  <!-- Áreas de enfoque -->
                  <div class="bg-[#0d1424] rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/30 transition-all">
                    <h4 class="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-2">
                      <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                      &Aacute;reas de enfoque
                    </h4>
                    <p class="text-gray-300 text-sm leading-relaxed">
                      Liderar equipos en arquitecturas de microservicios, impulsar excelencia t&eacute;cnica 
                      con c&oacute;digo limpio, testing y decisiones arquitect&oacute;nicas.
                    </p>
                  </div>

                  <!-- Próximos pasos -->
                  <div class="bg-[#0d1424] rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/30 transition-all">
                    <h4 class="text-emerald-400 font-semibold text-sm mb-2 flex items-center gap-2">
                      <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      Pr&oacute;ximos pasos
                    </h4>
                    <p class="text-gray-300 text-sm leading-relaxed">
                      Profundizar en <span class="text-white font-medium">cloud-native</span>, 
                      <span class="text-white font-medium">Kubernetes</span> y 
                      <span class="text-white font-medium">event-driven</span> para alta escala.
                    </p>
                  </div>
                </div>
              </div>

              </div>
          </div>
        </div>
      </div>

      <!-- Project Impact Section -->
      <div class="bg-[#0d1424]/50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-white mb-4">Impacto en Proyectos</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Resultados medibles en proyectos enterprise para clientes del sector financiero
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (impact of projectImpacts; track impact.project) {
              <a [routerLink]="['/projects', impact.projectId]"
                 class="bg-[#0a0f1a] rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all group cursor-pointer">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center" [class]="impact.iconBg">
                    <span class="text-lg">{{ impact.icon }}</span>
                  </div>
                  <div>
                    <p class="text-white font-semibold text-sm group-hover:text-purple-400 transition-colors">{{ impact.project }}</p>
                    <p class="text-gray-500 text-xs">{{ impact.client }}</p>
                  </div>
                </div>
                <p class="text-3xl font-bold text-white mb-1">{{ impact.value }}</p>
                <p class="text-gray-400 text-sm">{{ impact.metric }}</p>
              </a>
            }
          </div>
        </div>
      </div>

      <!-- Core Competencies Section -->
      <div class="bg-[#0d1424]/50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-white mb-4">Competencias B&aacute;sicas</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Habilidades t&eacute;cnicas y metodol&oacute;gicas desarrolladas a lo largo de 6+ a&ntilde;os en proyectos enterprise
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Technical Leadership -->
            <div class="bg-[#0a0f1a] rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-purple-400">Liderazgo T&eacute;cnico</h3>
              </div>
              <ul class="space-y-2.5">
                @for (item of coreCompetencies.technicalLeadership; track item) {
                  <li class="flex items-start gap-2 text-gray-300 text-sm">
                    <span class="text-purple-400 mt-1">&bull;</span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Full Stack Development -->
            <div class="bg-[#0a0f1a] rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-blue-400">Desarrollo Full Stack</h3>
              </div>
              <ul class="space-y-2.5">
                @for (item of coreCompetencies.fullStackDevelopment; track item) {
                  <li class="flex items-start gap-2 text-gray-300 text-sm">
                    <span class="text-blue-400 mt-1">&bull;</span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Security & Auth -->
            <div class="bg-[#0a0f1a] rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-emerald-400">Seguridad & Auth</h3>
              </div>
              <ul class="space-y-2.5">
                @for (item of coreCompetencies.securityAuth; track item) {
                  <li class="flex items-start gap-2 text-gray-300 text-sm">
                    <span class="text-emerald-400 mt-1">&bull;</span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- DevOps & Collaboration -->
            <div class="bg-[#0a0f1a] rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/30 transition-all">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-orange-400">DevOps & Colaboraci&oacute;n</h3>
              </div>
              <ul class="space-y-2.5">
                @for (item of coreCompetencies.devopsCollaboration; track item) {
                  <li class="flex items-start gap-2 text-gray-300 text-sm">
                    <span class="text-orange-400 mt-1">&bull;</span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Left Column: Education & Certifications -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Education -->
            <div class="bg-[#0d1424] rounded-2xl p-6 border border-slate-700/50">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                </div>
                <h2 class="text-xl font-bold text-white">Educaci&oacute;n</h2>
              </div>

              <div class="space-y-6">
                @for (edu of education; track edu.degree) {
                  <div class="flex gap-4 group">
                    <div class="flex flex-col items-center">
                      <div class="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></div>
                      <div class="w-0.5 h-full bg-slate-700 mt-2"></div>
                    </div>
                    <div class="pb-6">
                      <h3 class="font-semibold text-white group-hover:text-blue-400 transition-colors">{{ edu.degree }}</h3>
                      <p class="text-purple-400 text-sm">{{ edu.institution }}</p>
                      <div class="flex items-center gap-2 mt-2">
                        <span class="text-xs text-gray-500">{{ edu.startYear }} - {{ edu.endYear }}</span>
                        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">{{ edu.status }}</span>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- Certifications -->
            <div class="bg-[#0d1424] rounded-2xl p-6 border border-slate-700/50">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <h2 class="text-xl font-bold text-white">Certificaciones</h2>
              </div>

              <div class="space-y-4">
                @for (cert of certifications; track cert.name) {
                  <div class="flex items-center gap-4 p-4 bg-[#0a0f1a] rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
                    <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="font-semibold text-white">{{ cert.name }}</h3>
                      <p class="text-sm text-gray-400">{{ cert.issuer }}</p>
                    </div>
                    <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                      {{ cert.date }}
                    </span>
                  </div>
                }
              </div>
            </div>

            <!-- Complementary Training -->
            <div class="bg-[#0d1424] rounded-2xl p-6 border border-slate-700/50">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h2 class="text-xl font-bold text-white">Formaci&oacute;n Complementaria</h2>
              </div>

              <div class="grid sm:grid-cols-2 gap-3">
                @for (course of courses; track course.name) {
                  <div class="p-4 bg-[#0a0f1a] rounded-xl border border-slate-700/50 hover:border-orange-500/50 transition-all">
                    <h4 class="font-medium text-white text-sm mb-1 line-clamp-2">{{ course.name }}</h4>
                    <p class="text-xs text-gray-500">{{ course.instructor }}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Right Column: Sidebar -->
          <div class="space-y-6">
            <!-- Languages -->
            <div class="bg-[#0d1424] rounded-2xl p-6 border border-slate-700/50">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-white">Idiomas</h3>
              </div>

              <div class="space-y-4">
                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-300">Espa&ntilde;ol</span>
                    <span class="text-xs font-medium text-emerald-400 px-2 py-0.5 bg-emerald-500/20 rounded-full">Nativo</span>
                  </div>
                  <div class="h-2 bg-[#0a0f1a] rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-300">Ingl&eacute;s</span>
                    <span class="text-xs font-medium text-yellow-400 px-2 py-0.5 bg-yellow-500/20 rounded-full">B&aacute;sico</span>
                  </div>
                  <div class="h-2 bg-[#0a0f1a] rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" style="width: 20%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Interests -->
            <div class="bg-[#0d1424] rounded-2xl p-6 border border-slate-700/50">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-white">Intereses</h3>
              </div>

              <div class="flex flex-wrap gap-2">
                @for (interest of interests; track interest) {
                  <span class="px-3 py-1.5 bg-[#0a0f1a] text-gray-300 text-sm rounded-lg border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default">
                    {{ interest }}
                  </span>
                }
              </div>
            </div>

            <!-- CTA Card -->
            <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div class="relative">
                <h3 class="text-xl font-bold text-white mb-2">&iquest;Trabajamos juntos?</h3>
                <p class="text-purple-100 text-sm mb-6">
                  Siempre abierto a nuevas oportunidades y proyectos desafiantes.
                </p>
                <a routerLink="/contact"
                   class="inline-flex items-center px-5 py-2.5 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors shadow-lg">
                  Contactar
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials Section
      <div class="bg-[#0d1424]/50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-white mb-4">Lo que dicen de m&iacute;</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Testimonios de colegas y clientes con los que he tenido el placer de trabajar
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            @for (testimonial of testimonials; track testimonial.author) {
              <div class="bg-[#0a0f1a] rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all relative">
                <div class="absolute top-6 right-6">
                  <svg class="w-8 h-8 text-purple-500/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <p class="text-gray-300 mb-6 italic leading-relaxed">
                  "{{ testimonial.quote }}"
                </p>

                <div class="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span class="text-white font-bold text-lg">{{ testimonial.author[0] }}</span>
                  </div>
                  <div>
                    <p class="font-semibold text-white">{{ testimonial.author }}</p>
                    <p class="text-sm text-purple-400">{{ testimonial.role }}</p>
                    <p class="text-xs text-gray-500">{{ testimonial.company }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div> -->

      <!-- Bottom CTA -->
      <div class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            &iquest;Listo para ver mi trabajo?
          </h2>
          <p class="text-gray-400 mb-8">
            Explora mis proyectos y descubre c&oacute;mo puedo aportar valor a tu equipo
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/projects"
               class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25">
              Ver Proyectos
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a routerLink="/experience"
               class="inline-flex items-center px-6 py-3 border-2 border-slate-600 text-gray-300 rounded-xl font-semibold hover:border-purple-500 hover:text-white transition-all">
              Ver Experiencia
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  private portfolioService = inject(PortfolioService);

  profile = this.portfolioService.getProfile();
  education = this.portfolioService.getEducation();
  certifications = this.portfolioService.getCertifications();
  courses = this.portfolioService.getCourses();
  testimonials = this.portfolioService.getTestimonials();
  interests = this.portfolioService.getInterests();

  // Career stats computed from projects
  careerStats = [
    { value: '6+', label: 'Años Experiencia' },
    { value: '6', label: 'Proyectos Enterprise' },
    { value: '$60M+', label: 'Transacciones' },
    { value: '100K+', label: 'Usuarios Impactados' }
  ];

  // Project impacts with links
  projectImpacts = [
    {
      projectId: 'ecommerce-platform',
      project: 'E-Commerce Platform',
      client: 'Proyecto Personal',
      value: '7',
      metric: 'Microservicios',
      icon: '🛒',
      iconBg: 'bg-purple-500/20'
    },
    {
      projectId: 'insurance-platform',
      project: 'Plataforma de Seguros',
      client: 'Banco Supervielle',
      value: '100K+',
      metric: 'Clientes activos',
      icon: '🏦',
      iconBg: 'bg-blue-500/20'
    },
    {
      projectId: 'icbanking',
      project: 'ICBanking',
      client: 'InfoCorp',
      value: '$50M+',
      metric: 'Transacciones/mes',
      icon: '💳',
      iconBg: 'bg-emerald-500/20'
    },
    {
      projectId: 'cobra-system',
      project: 'Sistema Cobra',
      client: 'Consultatio SA',
      value: '80%',
      metric: 'Reducción manual',
      icon: '📊',
      iconBg: 'bg-orange-500/20'
    }
  ];

  // Core competencies based on projects experience
  coreCompetencies = {
    technicalLeadership: [
      'Diseño de arquitectura de microservicios',
      'Arquitectura limpia y DDD',
      'Desarrollo basado en pruebas (85%+ coverage)',
      'Code review y mentoría de juniors',
      'Metodologías Agile/Scrum'
    ],
    fullStackDevelopment: [
      '.NET Core/9 y Angular (6 años)',
      'APIs RESTful y GraphQL',
      'Entity Framework & Dapper',
      'Sistemas en tiempo real (SignalR)',
      'Arquitectura basada en eventos'
    ],
    securityAuth: [
      'JWT con refresh tokens',
      'Two-Factor Authentication (TOTP)',
      'OAuth 2.0 y SSO (Azure AD)',
      'Gestión de sesiones activas',
      'Encriptación AES-256'
    ],
    devopsCollaboration: [
      'Azure DevOps & GitHub Actions',
      'Docker & containerización',
      'CI/CD Pipelines',
      'SQL Server & Redis',
      'Colaboración en equipo multifuncional'
    ]
  };
}
