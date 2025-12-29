import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey as a Full Stack Developer, building enterprise solutions 
            for the banking and fintech industries.
          </p>
        </div>

        <!-- Timeline -->
        <div class="max-w-4xl mx-auto">
          @for (exp of experiences; track exp.id; let i = $index) {
            <div class="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-dark-border last:pb-0">
              <!-- Timeline dot -->
              <div class="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-dark-bg"></div>
              
              <!-- Date badge -->
              <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
                {{ exp.startDate }} - {{ exp.endDate }}
              </div>
              
              <!-- Content Card -->
              <div class="card p-6">
                <!-- Role & Company -->
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {{ exp.role }}
                </h3>
                <p class="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {{ exp.company }}
                </p>
                @if (exp.client) {
                  <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {{ exp.client }}
                  </p>
                }
                
                <!-- Description -->
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                  {{ exp.description }}
                </p>
                
                <!-- Achievements -->
                <div class="mb-6">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <div class="space-y-3">
                    @for (achievement of exp.achievements; track achievement.description) {
                      <div class="flex gap-3">
                        <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <div>
                          <p class="text-gray-700 dark:text-gray-300">{{ achievement.description }}</p>
                          <p class="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            → {{ achievement.impact }}
                          </p>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                
                <!-- Tech Stack -->
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3">
                    Tech Stack:
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    @for (tech of exp.techStack; track tech) {
                      <span class="tech-tag text-sm">{{ tech }}</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  private portfolioService = inject(PortfolioService);
  experiences = this.portfolioService.getExperiences();
}
