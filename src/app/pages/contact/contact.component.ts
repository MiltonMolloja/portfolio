import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="section">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question 
            or just want to say hi, I'll do my best to get back to you!
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            
            <div class="space-y-6 mb-8">
              <!-- Email -->
              <a 
                [href]="'mailto:' + profile.email"
                class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p class="font-medium text-gray-900 dark:text-white">{{ profile.email }}</p>
                </div>
              </a>

              <!-- Phone -->
              <a 
                [href]="'tel:' + profile.phone"
                class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p class="font-medium text-gray-900 dark:text-white">{{ profile.phone }}</p>
                </div>
              </a>

              <!-- LinkedIn -->
              <a 
                [href]="profile.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p class="font-medium text-gray-900 dark:text-white">Milton Fernando Molloja</p>
                </div>
              </a>

              <!-- GitHub -->
              <a 
                [href]="profile.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <p class="font-medium text-gray-900 dark:text-white">MiltonMolloja</p>
                </div>
              </a>

              <!-- Location -->
              <div class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-surface">
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p class="font-medium text-gray-900 dark:text-white">{{ profile.location }}</p>
                </div>
              </div>
            </div>

            <!-- Availability Badge -->
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              <span class="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span>
              Open to new opportunities · Immediate availability
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>
            
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <!-- Submit -->
              <button 
                type="submit" 
                class="w-full btn btn-primary"
                [disabled]="isSubmitting()"
              >
                @if (isSubmitting()) {
                  <svg class="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                } @else {
                  Send Message
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                }
              </button>
            </form>

            @if (submitMessage()) {
              <div 
                class="mt-4 p-4 rounded-lg"
                [class.bg-green-100]="submitSuccess()"
                [class.text-green-700]="submitSuccess()"
                [class.dark:bg-green-900/30]="submitSuccess()"
                [class.dark:text-green-400]="submitSuccess()"
                [class.bg-red-100]="!submitSuccess()"
                [class.text-red-700]="!submitSuccess()"
                [class.dark:bg-red-900/30]="!submitSuccess()"
                [class.dark:text-red-400]="!submitSuccess()"
              >
                {{ submitMessage() }}
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  private portfolioService = inject(PortfolioService);
  
  profile = this.portfolioService.getProfile();
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = signal(false);
  submitMessage = signal('');
  submitSuccess = signal(false);

  onSubmit(): void {
    this.isSubmitting.set(true);
    this.submitMessage.set('');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send this to a backend
      console.log('Form submitted:', this.formData);
      
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.submitMessage.set('Thank you for your message! I\'ll get back to you soon.');
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 1500);
  }
}
