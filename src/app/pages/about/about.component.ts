import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="section">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer Senior passionate about building scalable enterprise solutions.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Bio -->
            <div class="card p-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Bio
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Full Stack Developer Senior con <strong class="text-primary-600 dark:text-primary-400">6+ años de experiencia</strong> 
                desarrollando soluciones enterprise para el sector bancario y financiero.
              </p>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Especializado en arquitecturas de microservicios con .NET Core y Angular, con historial 
                comprobado en proyectos de alta disponibilidad para instituciones financieras líderes.
              </p>
              <p class="text-gray-600 dark:text-gray-400">
                Experto en implementación de sistemas seguros, escalables y de alto rendimiento, 
                con sólido dominio de patrones de diseño y mejores prácticas de desarrollo.
              </p>
            </div>

            <!-- Education -->
            <div class="card p-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Education
              </h2>
              <div class="space-y-6">
                @for (edu of education; track edu.degree) {
                  <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 dark:text-white">{{ edu.degree }}</h3>
                      <p class="text-primary-600 dark:text-primary-400">{{ edu.institution }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ edu.startYear }} - {{ edu.endYear }} · {{ edu.status }}
                      </p>
                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- Certifications -->
            <div class="card p-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Certifications
              </h2>
              <div class="space-y-4">
                @for (cert of certifications; track cert.name) {
                  <div class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-bg">
                    <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 dark:text-white">{{ cert.name }}</h3>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ cert.issuer }} · {{ cert.date }}
                      </p>
                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- Courses -->
            <div class="card p-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Complementary Training
              </h2>
              <div class="grid sm:grid-cols-2 gap-4">
                @for (course of courses; track course.name) {
                  <div class="p-4 rounded-lg bg-gray-50 dark:bg-dark-bg">
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      {{ course.name }}
                    </h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {{ course.instructor }}
                    </p>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Quick Info -->
            <div class="card p-6">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Quick Info</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="text-gray-600 dark:text-gray-400">{{ profile.location }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="text-gray-600 dark:text-gray-400">{{ profile.workMode }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-gray-600 dark:text-gray-400">Availability: {{ profile.availability }}</span>
                </div>
              </div>
            </div>

            <!-- Languages -->
            <div class="card p-6">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600 dark:text-gray-400">Spanish</span>
                  <span class="text-sm font-medium text-primary-600 dark:text-primary-400">Native</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600 dark:text-gray-400">English</span>
                  <span class="text-sm font-medium text-yellow-600 dark:text-yellow-400">Intermediate</span>
                </div>
              </div>
            </div>

            <!-- Interests -->
            <div class="card p-6">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Interests</h3>
              <div class="flex flex-wrap gap-2">
                @for (interest of interests; track interest) {
                  <span class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-gray-400">
                    {{ interest }}
                  </span>
                }
              </div>
            </div>

            <!-- CTA -->
            <div class="card p-6 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
              <h3 class="font-semibold mb-2">Interested in working together?</h3>
              <p class="text-primary-100 text-sm mb-4">
                I'm always open to discussing new opportunities.
              </p>
              <a routerLink="/contact" class="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Get in Touch
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Testimonials
          </h2>
          <div class="grid md:grid-cols-3 gap-6">
            @for (testimonial of testimonials; track testimonial.author) {
              <div class="card p-6">
                <svg class="w-8 h-8 text-primary-200 dark:text-primary-800 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p class="text-gray-600 dark:text-gray-400 mb-4 italic">
                  "{{ testimonial.quote }}"
                </p>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <span class="text-primary-600 dark:text-primary-400 font-semibold">
                      {{ testimonial.author[0] }}
                    </span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white text-sm">
                      {{ testimonial.author }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {{ testimonial.company }}
                    </p>
                  </div>
                </div>
              </div>
            }
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
}
