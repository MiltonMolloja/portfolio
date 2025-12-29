import { PortfolioData } from '../models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'Milton Fernando Molloja',
    title: 'Full Stack Developer Senior',
    subtitle: 'Especializado en .NET Core & Angular',
    tagline: 'Construyendo sistemas enterprise escalables para el sector bancario y financiero con arquitecturas de microservicios en .NET y Angular. Experto en soluciones de alta disponibilidad, autenticación segura y procesamiento de transacciones críticas.',
    location: 'San Salvador de Jujuy, Argentina',
    email: 'milton_molloja@hotmail.com',
    phone: '+54-388-4576668',
    linkedin: 'https://linkedin.com/in/milton-fernando-molloja',
    github: 'https://github.com/MiltonMolloja',
    availability: 'Inmediata',
    workMode: 'Remoto',
    photo: 'assets/images/profile/Photo.png'
  },

  stats: [
    { label: 'Years Experience', value: '6+', icon: 'calendar' },
    { label: 'Projects Delivered', value: '10+', icon: 'briefcase' },
    { label: 'Clients Impacted', value: '100K+', icon: 'users' },
    { label: 'Transactions', value: '$50M+', icon: 'dollar-sign' }
  ],

  techBadges: [
    { name: '.NET', icon: 'dotnet' },
    { name: 'Angular', icon: 'angular' },
    { name: 'SQL Server', icon: 'database' },
    { name: 'Microservices', icon: 'server' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Entity Framework', icon: 'layers' }
  ],

  skillCategories: [
    {
      name: 'Frontend',
      icon: 'layout',
      skills: [
        { name: 'Angular', years: 6, level: 'Expert', icon: 'angular' },
        { name: 'TypeScript', years: 6, level: 'Expert' },
        { name: 'JavaScript/ES6+', years: 6, level: 'Expert' },
        { name: 'HTML5/CSS3', years: 6, level: 'Expert' },
        { name: 'RxJS', years: 5, level: 'Advanced' },
        { name: 'React', years: 1, level: 'Basic' }
      ]
    },
    {
      name: 'Backend',
      icon: 'server',
      skills: [
        { name: '.NET Core', years: 6, level: 'Expert' },
        { name: 'C#', years: 6, level: 'Expert' },
        { name: '.NET Framework', years: 4, level: 'Expert' },
        { name: 'Entity Framework', years: 6, level: 'Expert' },
        { name: 'ASP.NET Core Web API', years: 6, level: 'Expert' },
        { name: 'MediatR (CQRS)', years: 3, level: 'Advanced' }
      ]
    },
    {
      name: 'Database',
      icon: 'database',
      skills: [
        { name: 'MS SQL Server', years: 6, level: 'Expert' },
        { name: 'MySQL', years: 3, level: 'Advanced' },
        { name: 'PostgreSQL', years: 2, level: 'Advanced' },
        { name: 'Redis', years: 3, level: 'Advanced' }
      ]
    },
    {
      name: 'DevOps',
      icon: 'git-branch',
      skills: [
        { name: 'Git/GitFlow', years: 6, level: 'Expert' },
        { name: 'Azure DevOps', years: 3, level: 'Advanced' },
        { name: 'Docker', years: 2, level: 'Intermediate' },
        { name: 'CI/CD Pipelines', years: 2, level: 'Intermediate' }
      ]
    }
  ],

  complementarySkills: [
    'Angular Material', 'Bootstrap', 'SASS/LESS', 'Materialize', 'PrimeNG',
    'AutoMapper', 'FluentValidation', 'JWT Authentication', 'OAuth 2.0',
    'Dapper', 'Repository Pattern', 'CQRS', 'DDD', 'Clean Architecture', 'SOLID Principles', 'Unit of Work',
    'API Gateway', 'Microservices', 'Micro-frontends',
    'RabbitMQ', 'Azure Service Bus', 'Kafka',
    'xUnit', 'NUnit', 'Jasmine', 'Karma', 'Cypress',
    'Redis', 'MongoDB',
    'Application Insights', 'Serilog', 'ELK Stack', 'SonarQube',
    'Azure DevOps', 'GitHub Actions', 'Jenkins', 'Bitbucket', 'Jira', 'SourceTree',
    'Scrum', 'Agile', 'GitFlow', 'Code Review',
    'Mobile Hybrid (Android/iOS)'
  ],

  projects: [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Enterprise Platform',
      shortDescription: 'Plataforma E-Commerce empresarial con arquitectura de 7 microservicios escalables en .NET 9.',
      fullDescription: 'Plataforma E-Commerce empresarial con arquitectura de microservicios escalable en .NET 9 que implementa gestión completa de productos, órdenes, pagos y autenticación avanzada con 2FA. Sistema distribuido con 7 microservicios independientes comunicados a través de API Gateway, procesando transacciones con alta disponibilidad y seguridad enterprise-grade. Frontend modular en Angular 20 con micro-frontends.',
      category: 'Full Stack',
      status: 'Completed',
      featured: true,
      techStack: [
        '.NET 9', 'Angular 20', 'SQL Server', 'Redis', 'MediatR',
        'JWT', 'MercadoPago', 'Entity Framework Core', 'SignalR', 'Docker'
      ],
      metrics: [
        { label: 'Microservices', value: '7' },
        { label: 'Order States', value: '17' },
        { label: 'Payment Methods', value: '7' }
      ],
      images: [
        'assets/images/projects/ecommerce/home.png',
        'assets/images/projects/ecommerce/busqueda.png',
        'assets/images/projects/ecommerce/carrito.png',
        'assets/images/projects/ecommerce/resumen.png',
        'assets/images/projects/ecommerce/pago-ok.png'
      ],
      demoUrl: 'https://miecommerce.duckdns.org/',
      githubUrl: 'https://github.com/MiltonMolloja',
      highlights: [
        '7 microservicios independientes con bases de datos separadas',
        'Autenticación empresarial con 2FA (TOTP + QR Code)',
        'Gestión de sesiones activas y revocación remota',
        'Sistema de notificaciones multi-template',
        'Rate limiting inteligente con bloqueo temporal',
        'Frontend responsive con lazy loading',
        'Arquitectura CQRS completa con MediatR'
      ]
    },
    {
      id: 'insurance-platform',
      title: 'Plataforma de Seguros Bancarios',
      shortDescription: 'Plataforma de seguros multiproducto para Banco Supervielle con +100K clientes activos.',
      fullDescription: 'Plataforma de seguros multiproducto para uno de los principales bancos privados de Argentina. Sistema que permite a más de 100K clientes contratar seguros de Auto, Vida, Celular, Tecnología y Moto de forma digital.',
      category: 'Enterprise',
      status: 'Production',
      featured: true,
      techStack: [
        'Angular 13', '.NET Core 6', 'SQL Server', 'Microservices',
        'Mobile (Android/iOS)', 'TypeScript'
      ],
      metrics: [
        { label: 'Insurance Modules', value: '5+' },
        { label: 'Active Clients', value: '100K+' },
        { label: 'Performance Improvement', value: '40%' }
      ],
      images: [],
      highlights: [
        'Arquitectura de micro-frontends',
        'Cumplimiento normativas BCRA',
        'Desarrollo móvil híbrido',
        '60% menos conflictos de merge con micro-frontends'
      ]
    },
    {
      id: 'icbanking',
      title: 'ICBanking - Online Banking Platform',
      shortDescription: 'Solución de banking online multiplataforma procesando +$50M mensuales.',
      fullDescription: 'Solución de banking online multiplataforma (web, mobile, core bancario) procesando transacciones críticas con alta disponibilidad.',
      category: 'Fintech',
      status: 'Production',
      featured: true,
      techStack: [
        'Angular', 'AngularJS', '.NET Framework', 'SQL Server',
        'Mobile Development', 'TypeScript', 'jQuery'
      ],
      metrics: [
        { label: 'Monthly Transactions', value: '$50M+' },
        { label: 'Availability', value: '99.9%' },
        { label: 'App Downloads', value: '50K+' },
        { label: 'Store Rating', value: '4.5+' }
      ],
      images: [],
      highlights: [
        'Migración de 15+ módulos legacy a Angular moderno',
        '50% mejora en performance',
        '35% menos bugs en producción'
      ]
    }
  ],

  experiences: [
    {
      id: 'supervielle',
      role: 'Full Stack Developer Senior',
      company: 'ITPS ONE - IBM',
      client: 'Banco Supervielle - Célula de Seguros',
      startDate: 'Octubre 2023',
      endDate: 'Octubre 2025',
      description: 'Desarrollo y mantenimiento de plataforma de seguros multiproducto para uno de los principales bancos privados de Argentina.',
      achievements: [
        {
          description: 'Desarrollé 5+ módulos de seguros (Auto, Vida, Celular, Tecnología, Moto)',
          impact: '+100K clientes activos pueden contratar digitalmente'
        },
        {
          description: 'Optimicé tiempos de respuesta de APIs críticas mediante patrones Repository y Command',
          impact: '40% de mejora en performance'
        },
        {
          description: 'Implementé sistema de micro-frontends en Angular 13',
          impact: '3 equipos desarrollando en paralelo, 60% menos conflictos de merge'
        },
        {
          description: 'Desarrollé módulos de autenticación y autorización seguros',
          impact: 'Cumplimiento normativas BCRA'
        }
      ],
      techStack: ['Angular 13', '.NET Core 6', 'MS SQL Server', 'TypeScript', 'Mobile (Android/iOS)', 'Microservices']
    },
    {
      id: 'infocorp',
      role: 'Full Stack Developer',
      company: 'OPENIX SERVICIOS INFORMÁTICOS',
      client: 'InfoCorp - ICBanking',
      startDate: '2019',
      endDate: '2023',
      description: 'Desarrollo full-stack de solución de banking online multiplataforma (web, mobile, core bancario).',
      achievements: [
        {
          description: 'Migré 15+ módulos legacy de AngularJS a Angular moderno',
          impact: '50% mejora en performance, 35% menos bugs en producción'
        },
        {
          description: 'Desarrollé funcionalidades críticas de transacciones bancarias',
          impact: '+$50M mensuales procesados con 99.9% disponibilidad'
        },
        {
          description: 'Implementé aplicaciones móviles híbridas (Android/iOS)',
          impact: '+50K descargas, rating 4.5+ en stores'
        },
        {
          description: 'Mentoría a 3 desarrolladores junior en Angular y .NET',
          impact: 'Aceleración de curva de aprendizaje del equipo'
        }
      ],
      techStack: ['Angular', 'AngularJS', '.NET Framework 4.5', 'MS SQL', 'TypeScript', 'jQuery', 'Mobile Development']
    },
    {
      id: 'consultatio',
      role: 'Full Stack Developer',
      company: 'OPENIX SERVICIOS INFORMÁTICOS',
      client: 'Consultatio SA - Sistema Cobra',
      startDate: '2019',
      endDate: '2019',
      description: 'Desarrollo de sistema de cobro automatizado vía Debín Bancario para empresa de gestión inmobiliaria.',
      achievements: [
        {
          description: 'Implementé sistema de cobros automáticos',
          impact: '+$10M procesados en primeros 6 meses, 80% menos gestión manual'
        },
        {
          description: 'Diseñé arquitectura de microservicios con .NET Core 3.1',
          impact: 'Escalabilidad horizontal preparada'
        },
        {
          description: 'Desarrollé interfaz intuitiva con Angular Material',
          impact: 'NPS: 8.5/10 satisfacción de usuarios'
        }
      ],
      techStack: ['Angular', '.NET Core 3.1', 'Entity Framework', 'MS SQL', 'Material Design', 'Git Flow', 'Microservices']
    }
  ],

  education: [
    {
      degree: 'Analista Programador Universitario',
      institution: 'Universidad Nacional de Jujuy',
      startYear: '2010',
      endYear: '2016',
      status: 'Completado'
    },
    {
      degree: 'Técnico en Computación',
      institution: 'Escuela Técnica Provincial N°1',
      startYear: '2002',
      endYear: '2006',
      status: 'Completado'
    }
  ],

  certifications: [
    {
      name: 'Foundational C# with Microsoft',
      issuer: 'freeCodeCamp',
      date: 'Febrero 2025'
    }
  ],

  courses: [
    { name: 'Become a Full-stack .NET Developer (Complete Series)', instructor: 'Mosh Hamedani' },
    { name: 'Become a Full-stack .NET Developer Advanced Topics', instructor: 'Mosh Hamedani' },
    { name: 'Become a Full-stack .NET Developer Architecture and Testing', instructor: 'Mosh Hamedani' },
    { name: 'Entity Framework in Depth', instructor: 'Mosh Hamedani' },
    { name: 'C# Advanced Topics', instructor: 'Mosh Hamedani' },
    { name: 'FullStack (Angular + ASP.NET)', instructor: 'Varios' }
  ],

  testimonials: [
    {
      quote: 'Milton demostró excelentes habilidades técnicas en el desarrollo de nuestros módulos de seguros. Su capacidad para trabajar con arquitecturas complejas de microservicios fue fundamental para el éxito del proyecto.',
      author: 'Líder Técnico',
      role: 'Technical Lead',
      company: 'Banco Supervielle'
    },
    {
      quote: 'Un desarrollador confiable que siempre entrega código de alta calidad. Su mentoría ayudó a nuestro equipo junior a crecer significativamente.',
      author: 'Project Manager',
      role: 'PM',
      company: 'InfoCorp'
    },
    {
      quote: 'La plataforma que Milton desarrolló transformó nuestra gestión de cobros. El sistema sigue funcionando impecablemente después de años.',
      author: 'Director IT',
      role: 'IT Director',
      company: 'Consultatio SA'
    }
  ],

  interests: [
    'Software Architecture',
    'Microservices',
    'Cloud Computing (Azure)',
    'DevOps',
    'Technical Leadership',
    'Mentoring',
    'Emerging Technologies'
  ]
};
