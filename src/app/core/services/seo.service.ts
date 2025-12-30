import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly titleService = inject(Title);
  private readonly router = inject(Router);

  private readonly defaultConfig: SeoConfig = {
    title: 'Milton Molloja | Full Stack Developer Senior',
    description: 'Full Stack Developer Senior especializado en .NET Core y Angular. +6 años construyendo soluciones enterprise para el sector bancario y financiero.',
    keywords: 'Full Stack Developer, Angular, .NET, TypeScript, C#, SQL Server, Microservices, Argentina',
    image: 'assets/images/profile/Photo.png',
    type: 'website'
  };

  private readonly routeConfigs: Record<string, Partial<SeoConfig>> = {
    '/': {
      title: 'Milton Molloja | Full Stack Developer Senior',
      description: 'Full Stack Developer Senior especializado en .NET Core y Angular. Construyendo sistemas enterprise escalables para el sector bancario.'
    },
    '/projects': {
      title: 'Proyectos | Milton Molloja',
      description: 'Portfolio de proyectos en desarrollo full-stack, microservicios y arquitectura cloud. E-Commerce, Banking, Seguros y más.',
      keywords: 'proyectos, portfolio, e-commerce, banking, microservicios, Angular, .NET'
    },
    '/skills': {
      title: 'Habilidades Técnicas | Milton Molloja',
      description: '50+ tecnologías y herramientas dominadas: Angular, .NET, TypeScript, SQL Server, Azure, Docker y más.',
      keywords: 'skills, habilidades, Angular, .NET, TypeScript, SQL Server, Azure, Docker'
    },
    '/experience': {
      title: 'Experiencia Laboral | Milton Molloja',
      description: '+6 años de experiencia en desarrollo de software para el sector bancario y fintech en Latinoamérica.',
      keywords: 'experiencia, trabajo, banking, fintech, Supervielle, InfoCorp, Consultatio'
    },
    '/about': {
      title: 'Sobre Mí | Milton Molloja',
      description: 'Conoce más sobre Milton Molloja, Full Stack Developer Senior de Argentina especializado en soluciones enterprise.',
      keywords: 'sobre mi, about, desarrollador, Argentina, Jujuy'
    },
    '/contact': {
      title: 'Contacto | Milton Molloja',
      description: 'Contacta a Milton Molloja para oportunidades de trabajo, colaboraciones o consultas técnicas.',
      keywords: 'contacto, email, linkedin, github, trabajo remoto'
    }
  };

  init(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const navEvent = event as NavigationEnd;
      this.updateMetaTags(navEvent.urlAfterRedirects);
    });
  }

  updateMetaTags(url: string): void {
    // Get base path without query params
    const basePath = url.split('?')[0];
    
    // Check for project detail pages
    if (basePath.startsWith('/projects/')) {
      // Project detail pages will call setProjectMeta directly
      return;
    }

    const config = this.routeConfigs[basePath] || {};
    this.setMetaTags({ ...this.defaultConfig, ...config });
  }

  setMetaTags(config: SeoConfig): void {
    const fullTitle = config.title;
    const baseUrl = 'https://miltonmolloja.github.io/portfolio';

    // Set title
    this.titleService.setTitle(fullTitle);

    // Standard meta tags
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: config.url || baseUrl });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: `${baseUrl}/${config.image}` });
    }

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: `${baseUrl}/${config.image}` });
    }
  }

  setProjectMeta(project: { title: string; shortDescription: string; images: string[] }): void {
    this.setMetaTags({
      title: `${project.title} | Milton Molloja`,
      description: project.shortDescription,
      image: project.images[0] || this.defaultConfig.image,
      type: 'article'
    });
  }
}
