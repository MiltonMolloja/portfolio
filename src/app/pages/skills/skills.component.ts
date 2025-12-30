import { Component, inject, signal, computed, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DetailedSkill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="min-h-screen bg-gray-50 dark:bg-[#0f172a] py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Habilidades Técnicas</span>
          </h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ allSkills.length }} tecnologías y herramientas en {{ categories.length }} categorías, cultivadas durante más de 6 años de desarrollo de software profesional
          </p>
        </div>

        <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div class="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400">Nivel Experto</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ expertSkills.length }}</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400">Certificaciones</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">1</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400">Experiencia</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">6+ años</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Search -->
        <div class="mb-6">
          <div class="relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input 
              type="text" 
              [ngModel]="searchQuery()"
              (ngModelChange)="searchQuery.set($event)"
              class="w-full pl-10 pr-4 py-2 bg-transparent border border-gray-200 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="Buscar habilidades (ej. TypeScript, Azure, Docker)..."
            />
          </div>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap gap-2 mb-6">
          <button 
            (click)="selectedCategory.set('All')"
            [class]="selectedCategory() === 'All' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700'"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all"
          >
            Todas
          </button>
          @for (cat of categories; track cat) {
            <button 
              (click)="selectedCategory.set(cat)"
              [class]="selectedCategory() === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700'"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all"
            >
              {{ cat }}
                <span class="ml-1 px-2 py-0.5 rounded-full text-xs bg-white dark:bg-slate-700/50 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600">{{ getCategoryCount(cat) }}</span>
            </button>
          }
        </div>

        <!-- Results count -->
        <p class="text-sm text-gray-600 dark:text-gray-500 mb-8">Mostrando {{ filteredSkills().length }} de {{ allSkills.length }} habilidades</p>

        <!-- Expert Level -->
        @if (getFilteredByLevel('Expert').length > 0) {
          <div class="mb-12">
            <div class="flex items-center gap-3 mb-4">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Nivel Experto</h2>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white">{{ getFilteredByLevel('Expert').length }} habilidades</span>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              @for (skill of getFilteredByLevel('Expert'); track skill.name) {
                <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all group">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                      <h4 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">
                        @if (skill.icon) {<span class="mr-2">{{ skill.icon }}</span>}{{ skill.name }}
                      </h4>
                      <span class="inline-block px-2 py-0.5 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-600">{{ skill.category }}</span>
                    </div>
                    <div class="text-right ml-2">
                      <p class="text-2xl font-bold text-blue-400">{{ skill.years }}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-500">años</p>
                    </div>
                  </div>
                    <div class="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-600" [style.width.%]="getProgressWidth(skill.years)"></div>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        <!-- Advanced Level -->
        @if (getFilteredByLevel('Advanced').length > 0) {
          <div class="mb-12">
            <div class="flex items-center gap-3 mb-4">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Nivel Avanzado</h2>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">{{ getFilteredByLevel('Advanced').length }} habilidades</span>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              @for (skill of getFilteredByLevel('Advanced'); track skill.name) {
                <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all group">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                      <h4 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">
                        @if (skill.icon) {<span class="mr-2">{{ skill.icon }}</span>}{{ skill.name }}
                      </h4>
                      <span class="inline-block px-2 py-0.5 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-600">{{ skill.category }}</span>
                    </div>
                    <div class="text-right ml-2">
                      <p class="text-2xl font-bold text-blue-400">{{ skill.years }}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-500">años</p>
                    </div>
                  </div>
                    <div class="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" [style.width.%]="getProgressWidth(skill.years)"></div>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        <!-- Intermediate Level -->
        @if (getFilteredByLevel('Intermediate').length > 0) {
          <div class="mb-12">
            <div class="flex items-center gap-3 mb-4">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Nivel Intermedio</h2>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white">{{ getFilteredByLevel('Intermediate').length }} habilidades</span>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              @for (skill of getFilteredByLevel('Intermediate'); track skill.name) {
                <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all group">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                      <h4 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">
                        @if (skill.icon) {<span class="mr-2">{{ skill.icon }}</span>}{{ skill.name }}
                      </h4>
                      <span class="inline-block px-2 py-0.5 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-600">{{ skill.category }}</span>
                    </div>
                    <div class="text-right ml-2">
                      <p class="text-2xl font-bold text-blue-400">{{ skill.years }}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-500">años</p>
                    </div>
                  </div>
                    <div class="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" [style.width.%]="getProgressWidth(skill.years)"></div>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        <!-- Beginner Level -->
        @if (getFilteredByLevel('Beginner').length > 0) {
          <div class="mb-12">
            <div class="flex items-center gap-3 mb-4">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Nivel Principiante</h2>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-gray-500 to-slate-500 text-white">{{ getFilteredByLevel('Beginner').length }} habilidades</span>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              @for (skill of getFilteredByLevel('Beginner'); track skill.name) {
                <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all group">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                      <h4 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">
                        @if (skill.icon) {<span class="mr-2">{{ skill.icon }}</span>}{{ skill.name }}
                      </h4>
                      <span class="inline-block px-2 py-0.5 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-600">{{ skill.category }}</span>
                    </div>
                    <div class="text-right ml-2">
                      <p class="text-2xl font-bold text-blue-400">{{ skill.years }}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-500">años</p>
                    </div>
                  </div>
                    <div class="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r from-gray-500 to-slate-500" [style.width.%]="getProgressWidth(skill.years)"></div>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        <!-- Proficiency Distribution -->
          <div class="mt-16 bg-gradient-to-br from-gray-100 dark:from-slate-800/50 to-gray-50 dark:to-slate-900/50 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Distribución de Competencias</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">{{ expertSkills.length }}</span>
              </div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white">Experto</p>
              <p class="text-xs text-gray-600 dark:text-gray-500">{{ getPercentage(expertSkills.length) }}%</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">{{ advancedSkills.length }}</span>
              </div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white">Avanzado</p>
              <p class="text-xs text-gray-600 dark:text-gray-500">{{ getPercentage(advancedSkills.length) }}%</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">{{ intermediateSkills.length }}</span>
              </div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white">Intermedio</p>
              <p class="text-xs text-gray-600 dark:text-gray-500">{{ getPercentage(intermediateSkills.length) }}%</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-gray-500 to-slate-500 flex items-center justify-center">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">{{ beginnerSkills.length }}</span>
              </div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white">Principiante</p>
              <p class="text-xs text-gray-600 dark:text-gray-500">{{ getPercentage(beginnerSkills.length) }}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  
  searchQuery = signal('');
  selectedCategory = signal('All');

  categories = ['Frontend', 'Backend', 'Base de Datos', 'Nube', 'DevOps', 'Testing', 'Arquitectura'];

  allSkills: DetailedSkill[] = this.portfolioService.getDetailedSkills();

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get expertSkills() {
    return this.allSkills.filter(s => s.level === 'Expert');
  }

  get advancedSkills() {
    return this.allSkills.filter(s => s.level === 'Advanced');
  }

  get intermediateSkills() {
    return this.allSkills.filter(s => s.level === 'Intermediate');
  }

  get beginnerSkills() {
    return this.allSkills.filter(s => s.level === 'Beginner');
  }

  filteredSkills = computed(() => {
    let skills = this.allSkills;
    
    if (this.selectedCategory() !== 'All') {
      skills = skills.filter(s => s.category === this.selectedCategory());
    }
    
    const query = this.searchQuery();
    if (query) {
      const queryLower = query.toLowerCase();
      skills = skills.filter(s => 
        s.name.toLowerCase().includes(queryLower) || 
        s.category.toLowerCase().includes(queryLower)
      );
    }
    
    return skills;
  });

  getFilteredByLevel(level: string) {
    return this.filteredSkills().filter(s => s.level === level);
  }

  getCategoryCount(category: string): number {
    return this.allSkills.filter(s => s.category === category).length;
  }

  getProgressWidth(years: number): number {
    return Math.min((years / 6) * 100, 100);
  }

  getPercentage(count: number): number {
    return Math.round((count / this.allSkills.length) * 100);
  }
}
