import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="section">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in full-stack development, microservices architecture, 
            and enterprise solutions for the banking and fintech industries.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  projects = this.portfolioService.getProjects();
}
