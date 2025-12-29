import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/portfolio.models';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TechBadgeComponent],
  template: `
    @if (project()) {
      <section class="section">
        <div class="container-custom">
          <!-- Back Link -->
          <a routerLink="/projects" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Projects
          </a>

          <!-- Header -->
          <div class="mb-12">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span 
                class="badge"
                [class.badge-success]="project()!.status === 'Completed'"
                [class.badge-warning]="project()!.status === 'Ongoing'"
              >
                {{ project()!.status }}
              </span>
              <span class="text-gray-500 dark:text-gray-400">{{ project()!.category }}</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {{ project()!.title }}
            </h1>
            
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              {{ project()!.fullDescription }}
            </p>
          </div>

          <!-- Links -->
          <div class="flex flex-wrap gap-4 mb-12">
            @if (project()!.demoUrl) {
              <a 
                [href]="project()!.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Live Demo
              </a>
            }
            @if (project()!.githubUrl) {
              <a 
                [href]="project()!.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn btn-secondary"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source
              </a>
            }
          </div>

          <!-- Metrics -->
          @if (project()!.metrics.length > 0) {
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              @for (metric of project()!.metrics; track metric.label) {
                <div class="card p-6 text-center">
                  <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {{ metric.value }}
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    {{ metric.label }}
                  </div>
                </div>
              }
            </div>
          }

          <!-- Tech Stack -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <div class="flex flex-wrap gap-2">
              @for (tech of project()!.techStack; track tech) {
                <app-tech-badge [name]="tech" />
              }
            </div>
          </div>

          <!-- Highlights -->
          @if (project()!.highlights && project()!.highlights!.length > 0) {
            <div class="mb-12">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Highlights
              </h2>
              <ul class="space-y-3">
                @for (highlight of project()!.highlights; track highlight) {
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="text-gray-600 dark:text-gray-400">{{ highlight }}</span>
                  </li>
                }
              </ul>
            </div>
          }

          <!-- Screenshots -->
          @if (project()!.images.length > 0) {
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Screenshots
              </h2>
              <div class="grid md:grid-cols-2 gap-4">
                @for (image of project()!.images; track image; let i = $index) {
                  <div class="rounded-lg overflow-hidden border border-gray-200 dark:border-dark-border">
                    <img 
                      [src]="image" 
                      [alt]="project()!.title + ' screenshot ' + (i + 1)"
                      class="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </section>
    } @else {
      <section class="section">
        <div class="container-custom text-center">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project not found
          </h1>
          <a routerLink="/projects" class="btn btn-primary">
            View All Projects
          </a>
        </div>
      </section>
    }
  `
})
export class ProjectDetailComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private route = inject(ActivatedRoute);
  
  project = signal<Project | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project.set(this.portfolioService.getProjectById(id));
    }
  }
}
