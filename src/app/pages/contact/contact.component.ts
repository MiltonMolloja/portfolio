import { Component, inject, signal, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { PortfolioService } from '../../core/services/portfolio.service';
import { EMAILJS_CONFIG } from '../../core/config/emailjs.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="section">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Actualmente estoy abierto a nuevas oportunidades. Si tienes alguna pregunta 
            o simplemente quieres saludar, har&eacute; lo posible por responderte.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Informaci&oacute;n de Contacto
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
                  <p class="text-sm text-gray-500 dark:text-gray-400">Correo electr&oacute;nico</p>
                  <p class="font-medium text-gray-900 dark:text-white">{{ profile.email }}</p>
                </div>
              </a>

              <!-- WhatsApp -->
              <a 
                href="https://api.whatsapp.com/send?phone=543884576668"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
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
                  <p class="text-sm text-gray-500 dark:text-gray-400">Ubicaci&oacute;n</p>
                  <p class="font-medium text-gray-900 dark:text-white">{{ profile.location }}</p>
                </div>
              </div>
            </div>

            <!-- Availability Badge -->
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              <span class="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span>
              Abierto a nuevas oportunidades &middot; Disponibilidad inmediata
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Enviar un Mensaje
            </h2>
            
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correo electr&oacute;nico
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Asunto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="&iquest;De qu&eacute; se trata?"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tu mensaje..."
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
                  Enviando...
                } @else {
                  Enviar Mensaje
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
export class ContactComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);
  
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

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async onSubmit(): Promise<void> {
    this.isSubmitting.set(true);
    this.submitMessage.set('');
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          user_subject: this.formData.subject,
          message: this.formData.message,
          to_email: 'milton_molloja@hotmail.com'
        },
        EMAILJS_CONFIG.publicKey
      );
      
      this.submitSuccess.set(true);
      this.submitMessage.set('¡Gracias por tu mensaje! Te responderé pronto.');
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback: abrir cliente de correo
      this.submitSuccess.set(false);
      this.submitMessage.set('Hubo un error al enviar el mensaje. Abriendo tu cliente de correo...');
      
      setTimeout(() => {
        this.openMailtoFallback();
      }, 1500);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  private openMailtoFallback(): void {
    const emailBody = `
Nombre: ${this.formData.name}
Correo electrónico: ${this.formData.email}
Asunto: ${this.formData.subject}

Mensaje:
${this.formData.message}
    `.trim();

    const mailtoLink = `mailto:milton_molloja@hotmail.com?subject=${encodeURIComponent('Mensaje de Portfolio - ' + this.formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    this.submitSuccess.set(true);
    this.submitMessage.set('Se ha abierto tu cliente de correo. Por favor envía el mensaje desde ahí.');
  }
}
