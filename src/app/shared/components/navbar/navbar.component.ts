import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50">
      <div class="container-custom">
        <div class="flex items-center h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-1 font-semibold text-lg group">
            <span class="text-pink-500">&lt;</span>
            <span class="text-white group-hover:text-pink-400 transition-colors">Milton Molloja</span>
            <span class="text-pink-500">/&gt;</span>
          </a>

          <!-- Desktop Navigation + Theme toggle -->
          <div class="hidden md:flex items-center gap-1 ml-auto">
            @for (link of navLinks; track link.path) {
              <a 
                [routerLink]="link.path" 
                routerLinkActive="bg-slate-700/50 text-white"
                [routerLinkActiveOptions]="{ exact: link.exact }"
                class="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                {{ link.label }}
              </a>
            }
            
            <!-- Theme Toggle -->
            <button 
              (click)="toggleTheme()"
              class="p-2 ml-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
              [attr.aria-label]="portfolioService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              @if (portfolioService.isDarkMode()) {
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              } @else {
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              }
            </button>
          </div>

          <!-- Mobile: Theme toggle + Menu button -->
          <div class="flex items-center gap-2 ml-auto md:hidden">
            <!-- Theme Toggle -->
            <button 
              (click)="toggleTheme()"
              class="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
              [attr.aria-label]="portfolioService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              @if (portfolioService.isDarkMode()) {
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              } @else {
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              }
            </button>

            <!-- Mobile menu button -->
            <button 
              (click)="toggleMobileMenu()"
              class="p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              @if (isMobileMenuOpen()) {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              } @else {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              }
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        @if (isMobileMenuOpen()) {
          <div class="md:hidden py-4 border-t border-slate-700/50 animate-slide-down">
            <div class="flex flex-col gap-1">
              @for (link of navLinks; track link.path) {
                <a 
                  [routerLink]="link.path"
                  routerLinkActive="bg-slate-700/50 text-white"
                  [routerLinkActiveOptions]="{ exact: link.exact }"
                  (click)="closeMobileMenu()"
                  class="px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {{ link.label }}
                </a>
              }
            </div>
          </div>
        }
      </div>
    </nav>

    <!-- Spacer for fixed navbar -->
    <div class="h-16"></div>
  `,
  styles: [`
    .animate-slide-down {
      animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class NavbarComponent {
  portfolioService = inject(PortfolioService);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/projects', label: 'Projects', exact: false },
    { path: '/skills', label: 'Skills', exact: false },
    { path: '/experience', label: 'Experience', exact: false },
    { path: '/about', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  toggleTheme(): void {
    this.portfolioService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
