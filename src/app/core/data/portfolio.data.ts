import { PortfolioData, DetailedSkill } from '../models/portfolio.models';

export const DETAILED_SKILLS: DetailedSkill[] = [
  // Nivel Experto (6 años)
  { name: 'Angular', category: 'Frontend', years: 6, level: 'Expert', icon: '🅰️' },
  { name: 'TypeScript', category: 'Frontend', years: 6, level: 'Expert', icon: '📘' },
  { name: 'JavaScript', category: 'Frontend', years: 6, level: 'Expert', icon: '💛' },
  { name: '.NET', category: 'Backend', years: 6, level: 'Expert', icon: '🟣' },
  { name: 'C#', category: 'Backend', years: 6, level: 'Expert', icon: '💜' },
  { name: 'Entity Framework', category: 'Backend', years: 6, level: 'Expert', icon: '🔗' },
  { name: 'SQL Server', category: 'Base de Datos', years: 6, level: 'Expert', icon: '🗄️' },
  { name: 'RESTful APIs', category: 'Backend', years: 6, level: 'Expert', icon: '🔌' },

  // Nivel Avanzado (3-5 años)
  { name: 'Azure', category: 'Nube', years: 3, level: 'Advanced', icon: '☁️' },
  { name: 'AWS', category: 'Nube', years: 3, level: 'Advanced', icon: '🌐' },
  { name: 'RxJS', category: 'Frontend', years: 5, level: 'Advanced', icon: '🔄' },
  { name: 'HTML5', category: 'Frontend', years: 6, level: 'Advanced', icon: '🌐' },
  { name: 'CSS/SCSS', category: 'Frontend', years: 6, level: 'Advanced', icon: '🎨' },
  { name: 'Bootstrap', category: 'Frontend', years: 5, level: 'Advanced', icon: '🅱️' },
  { name: 'Angular Material', category: 'Frontend', years: 4, level: 'Advanced', icon: '🎯' },
  { name: 'PrimeNG', category: 'Frontend', years: 4, level: 'Advanced', icon: '⭐' },
  { name: 'Azure DevOps', category: 'DevOps', years: 3, level: 'Advanced', icon: '🔵' },
  { name: 'Git/GitFlow', category: 'DevOps', years: 6, level: 'Advanced', icon: '🌿' },
  { name: 'CI/CD', category: 'DevOps', years: 3, level: 'Advanced', icon: '🔁' },
  { name: 'Microservicios', category: 'Arquitectura', years: 4, level: 'Advanced', icon: '🧩' },
  { name: 'CQRS', category: 'Arquitectura', years: 3, level: 'Advanced', icon: '📊' },
  { name: 'DDD', category: 'Arquitectura', years: 3, level: 'Advanced', icon: '🏛️' },
  { name: 'Clean Architecture', category: 'Arquitectura', years: 3, level: 'Advanced', icon: '🏗️' },
  { name: 'xUnit', category: 'Testing', years: 4, level: 'Advanced', icon: '✅' },
  { name: 'NUnit', category: 'Testing', years: 4, level: 'Advanced', icon: '🧪' },
  { name: 'Jasmine', category: 'Testing', years: 4, level: 'Advanced', icon: '🌸' },
  { name: 'Karma', category: 'Testing', years: 4, level: 'Advanced', icon: '☸️' },
  { name: 'JWT Authentication', category: 'Backend', years: 5, level: 'Advanced', icon: '🔐' },
  { name: 'OAuth 2.0', category: 'Backend', years: 3, level: 'Advanced', icon: '🔑' },
  { name: 'Dapper', category: 'Backend', years: 3, level: 'Advanced', icon: '⚡' },
  { name: 'AutoMapper', category: 'Backend', years: 4, level: 'Advanced', icon: '🗺️' },
  { name: 'FluentValidation', category: 'Backend', years: 4, level: 'Advanced', icon: '✔️' },
  { name: 'Qualtrics', category: 'Frontend', years: 2, level: 'Advanced', icon: '📊' },

  // Nivel Intermedio (2 años)
  { name: 'Docker', category: 'DevOps', years: 2, level: 'Intermediate', icon: '🐳' },
  { name: 'PostgreSQL', category: 'Base de Datos', years: 2, level: 'Intermediate', icon: '🐘' },
  { name: 'Redis', category: 'Base de Datos', years: 2, level: 'Intermediate', icon: '🔴' },
  { name: 'MongoDB', category: 'Base de Datos', years: 2, level: 'Intermediate', icon: '🍃' },
  { name: 'RabbitMQ', category: 'Backend', years: 2, level: 'Intermediate', icon: '🐰' },
  { name: 'Azure Service Bus', category: 'Nube', years: 2, level: 'Intermediate', icon: '🚌' },
  { name: 'Kafka', category: 'Backend', years: 2, level: 'Intermediate', icon: '📨' },
  { name: 'GitHub Actions', category: 'DevOps', years: 2, level: 'Intermediate', icon: '🐙' },
  { name: 'Jenkins', category: 'DevOps', years: 2, level: 'Intermediate', icon: '🤵' },
  { name: 'SonarQube', category: 'Testing', years: 2, level: 'Advanced', icon: '📡' },
  { name: 'Cypress', category: 'Testing', years: 2, level: 'Intermediate', icon: '🌲' },
  { name: 'Application Insights', category: 'Nube', years: 2, level: 'Intermediate', icon: '📈' },
  { name: 'Serilog', category: 'Backend', years: 2, level: 'Intermediate', icon: '📝' },
  { name: 'Principios SOLID', category: 'Arquitectura', years: 4, level: 'Intermediate', icon: '💎' },
  { name: 'Unit of Work', category: 'Arquitectura', years: 3, level: 'Intermediate', icon: '📦' },
  { name: 'Repository Pattern', category: 'Arquitectura', years: 4, level: 'Intermediate', icon: '🗃️' },
  { name: 'Scrum', category: 'DevOps', years: 4, level: 'Intermediate', icon: '🏃' },
  { name: 'Agile', category: 'DevOps', years: 4, level: 'Intermediate', icon: '🔄' },

  // Nivel Principiante (1 año)
  { name: 'Kubernetes', category: 'DevOps', years: 1, level: 'Beginner', icon: '⚓' },
  { name: 'ELK Stack', category: 'Nube', years: 1, level: 'Beginner', icon: '📊' },
];

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

  detailedSkills: DETAILED_SKILLS,

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
      id: 'identity-auth-platform',
      title: 'Identity & Authentication Platform',
      shortDescription: 'Sistema de autenticación empresarial con 2FA TOTP, gestión de sesiones, OAuth callbacks y arquitectura de microservicios.',
      fullDescription: 'Plataforma de autenticación enterprise construida con Angular 20 y .NET 9 que proporciona gestión completa de identidad de usuarios para aplicaciones empresariales. Implementa autenticación multi-factor con TOTP (Google Authenticator, Authy), códigos de respaldo, gestión de sesiones activas con revocación remota, y flujos OAuth para integración cross-app. El frontend utiliza arquitectura de componentes standalone con Angular Material, signals para state management reactivo, y lazy loading para optimización de bundle. Incluye sistema completo de recuperación de contraseña con tokens seguros, confirmación de email, y sincronización de estado entre pestañas del navegador. Soporte bilingüe (Español/Inglés) y temas claro/oscuro con detección de preferencia del sistema. Preparado para producción con Sentry para error tracking, interceptores HTTP con retry logic, y documentación completa de security headers.',
      category: 'Security',
      status: 'Completed',
      featured: false,
      techStack: [
        'Angular 20', '.NET 9', 'TypeScript', 'Angular Material', 'RxJS',
        'JWT', 'TOTP 2FA', 'QR Code', 'Signals', 'Playwright E2E'
      ],
      metrics: [
        { label: 'Flujos de Auth', value: '8' },
        { label: 'Test Coverage', value: '85+' },
        { label: 'Bundle Size', value: '607KB' },
        { label: 'Idiomas', value: '2' },
        { label: 'Componentes', value: '25+' },
        { label: 'Interceptors', value: '2' }
      ],
      images: [
        'assets/images/projects/auth/aut1.png'
      ],
      imageCategories: [
        {
          title: 'Flujos de Autenticación',
          images: [
            { src: 'assets/images/projects/auth/aut1.png', caption: 'Login con validación en tiempo real, opción "Recordarme" y recuperación de contraseña. Soporte bilingüe Español/Inglés' },
            { src: 'assets/images/projects/auth/aut2.png', caption: 'Registro de usuario con validación de contraseña robusta, confirmación y aceptación de términos. Tema oscuro' }
          ]
        },
        {
          title: 'Panel de Usuario y Seguridad',
          images: [
            { src: 'assets/images/projects/auth/aut3.png', caption: 'Dashboard de cuenta: información de perfil, email verificado, preferencias de tema/idioma, estado de 2FA y acciones rápidas' },
            { src: 'assets/images/projects/auth/aut4.png', caption: 'Configuración de seguridad: historial de cambios de contraseña, estado de 2FA, y log de actividad reciente con IP y timestamps' }
          ]
        },
        {
          title: 'Gestión de Sesiones y 2FA',
          images: [
            { src: 'assets/images/projects/auth/aut5.png', caption: 'Sesiones activas: listado de dispositivos conectados con detección de OS/Browser, IP, fechas de creación y expiración. Revocación individual o masiva' },
            { src: 'assets/images/projects/auth/aut6.png', caption: 'Setup de 2FA: código QR para Google Authenticator/Authy, clave manual para entrada directa, flujo guiado de 3 pasos' }
          ]
        }
      ],
      demoUrl: 'https://miecommerce.duckdns.org/auth/',
      githubUrl: 'https://github.com/MiltonMolloja',
      highlights: [
        'Autenticación JWT con access token (15min) y refresh token (7 días) con renovación automática transparente',
        'Two-Factor Authentication (2FA) con TOTP: QR Code para apps de autenticación + códigos de respaldo descargables',
        '8 flujos de autenticación: Login, Register, 2FA Verify, Forgot Password, Reset Password, Confirm Email, Change Password, OAuth Callback',
        'Gestión de sesiones activas con detección de dispositivo/navegador y revocación remota individual o masiva',
        'Interceptor de autenticación con manejo de concurrencia: múltiples 401s solo generan un refresh token',
        'Interceptor de errores con retry logic exponential backoff (1s, 2s, max 5s) para errores de red y 5xx',
        'Arquitectura de componentes standalone con Angular 20 y Signals para state management reactivo',
        'Angular Material Design con temas claro/oscuro y detección de preferencia del sistema',
        'Internacionalización completa Español/Inglés con LanguageService y traducciones dinámicas',
        'Sincronización de logout entre pestañas del navegador via Storage API events',
        'Lazy loading de rutas y librerías (QRCode se carga solo cuando se necesita)',
        'Cross-app authentication: callback component para recibir tokens de OAuth y redirigir a apps externas',
        'Sanitización de returnUrl para prevenir open redirect attacks',
        'Guards de navegación: authGuard, noAuthGuard, emailVerifiedGuard para protección de rutas',
        '85+ unit tests con Jasmine/Karma, 100% coverage en services, guards e interceptors',
        'E2E tests con Playwright para flujos críticos de autenticación',
        'Sentry integration para error tracking en producción con lazy loading',
        'Documentación completa de security headers (CSP, HSTS, X-Frame-Options) para deployment'
      ],
      challenges: [
        {
          title: 'Renovación de Token JWT con Manejo de Concurrencia',
          challenge: 'Cuando el access token expiraba, múltiples peticiones HTTP fallaban con 401 simultáneamente. Cada petición intentaba renovar el token de forma independiente, causando condiciones de carrera, múltiples llamadas al endpoint de refresh, y en algunos casos loops infinitos que degradaban la experiencia del usuario.',
          solution: 'Implementé un patrón de cola con BehaviorSubject que sincroniza todas las peticiones pendientes. Cuando la primera petición detecta un 401, activa un flag isRefreshing y emite null al subject. Las demás peticiones se suscriben y esperan. Al completar el refresh exitosamente, se emite el nuevo token y todas las peticiones encoladas se reintentan con el token actualizado. Agregué exclusión de URLs de autenticación (/authentication, /refresh-token, /revoke-token) para evitar loops infinitos.'
        },
        {
          title: 'Sincronización de Estado de Autenticación entre Pestañas',
          challenge: 'Un usuario podía tener múltiples pestañas abiertas de la aplicación. Si cerraba sesión en una pestaña, las demás permanecían "autenticadas" con tokens válidos en localStorage, permitiendo operaciones no autorizadas hasta que el token expirara o el usuario refrescara la página.',
          solution: 'Utilicé la Storage API del navegador con event listeners para detectar cambios en localStorage desde otras pestañas. AuthService escucha eventos "storage" con una clave especial "auth_logout_event". Cuando se detecta el evento de logout, se limpian los tokens locales y se actualiza el estado de autenticación sin hacer redirect (para evitar que todas las pestañas redirijan simultáneamente). El estado se sincroniza en menos de 1 segundo.'
        },
        {
          title: 'Implementación de 2FA con QR Code y Códigos de Respaldo',
          challenge: 'El flujo de habilitación de 2FA requería mostrar un código QR que el usuario escanea con su app de autenticación, pero la librería QRCode (50KB+) impactaba significativamente el bundle inicial. Además, había que generar y gestionar códigos de respaldo para casos donde el usuario perdiera acceso a su dispositivo.',
          solution: 'Implementé lazy loading de la librería QRCode usando dynamic imports: solo se carga cuando el usuario accede a la página de Setup 2FA. El QR se genera en un canvas HTML5 con opciones de tamaño y colores personalizables. Los códigos de respaldo se muestran en una UI dedicada con opciones de copiar al portapapeles y descargar/imprimir como PDF. Agregué un fallback para HTTP (execCommand copy) ya que Clipboard API requiere HTTPS.'
        },
        {
          title: 'Cross-App Authentication con OAuth Callbacks',
          challenge: 'El sistema de autenticación debía servir a múltiples aplicaciones (E-Commerce, Admin Panel) en diferentes dominios/puertos. Los usuarios necesitaban hacer login una vez y ser redirigidos de vuelta a la aplicación original con sus tokens, pero había que prevenir ataques de open redirect donde URLs maliciosas pudieran interceptar los tokens.',
          solution: 'Implementé un CallbackComponent que recibe tokens via query params y los almacena en localStorage. Para el returnUrl, creé una whitelist dinámica de orígenes permitidos basada en environment (localhost:4200, localhost:4400, dominios de producción). Las URLs externas solo se permiten si su origen está en la whitelist. Los tokens se pasan de forma segura y luego se redirige al usuario a la app original con los tokens en la URL del callback.'
        },
        {
          title: 'Gestión de Sesiones Activas con Revocación Remota',
          challenge: 'Los usuarios necesitaban ver todos sus dispositivos conectados y poder cerrar sesiones remotamente (por ejemplo, si perdían su teléfono). El backend devolvía información de sesiones pero detectar el dispositivo/navegador actual vs otros era complejo, y revocar la sesión actual requería un flujo diferente a revocar sesiones remotas.',
          solution: 'SessionService obtiene la lista de sesiones con un header especial Refresh-Token para identificar la sesión actual. El componente ActiveSessions muestra cada sesión con información de OS, navegador e IP, marcando la sesión actual con un badge "Actual". La revocación individual usa DELETE por sessionId, mientras que "Revocar Todas" excluye automáticamente la sesión actual. Implementé un diálogo de confirmación antes de revocar múltiples sesiones.'
        },
        {
          title: 'Compatibilidad SSR y Manejo de localStorage',
          challenge: 'Angular Universal (SSR) ejecuta código en el servidor donde localStorage no existe, causando errores de runtime. Además, en modo incógnito o con storage deshabilitado, los accesos a localStorage pueden fallar o lanzar excepciones.',
          solution: 'TokenService usa isPlatformBrowser() de Angular para verificar el entorno antes de cualquier acceso a localStorage. Todos los métodos de lectura/escritura están envueltos en try-catch con logging de errores. En SSR, los métodos retornan valores por defecto (null para tokens, false para checks). Esto permite que la aplicación funcione tanto en browser como en server-side rendering sin modificaciones adicionales.'
        }
      ]
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Personal - Full Stack Developer',
      shortDescription: 'Portfolio profesional interactivo construido con Angular 19, diseño moderno con Tailwind CSS, tema oscuro/claro y arquitectura de componentes standalone.',
      fullDescription: 'Portfolio profesional diseñado para mostrar experiencia, proyectos y habilidades como Full Stack Developer Senior especializado en el sector bancario y financiero. Construido con Angular 19 utilizando la arquitectura moderna de componentes standalone sin NgModules, signals para state management reactivo, y Tailwind CSS para un diseño responsive elegante. Incluye secciones interactivas: Hero con efecto typewriter animado, galería de proyectos con filtrado y búsqueda, timeline de experiencia laboral, matriz de habilidades técnicas categorizada, y formulario de contacto funcional. Implementa lazy loading para optimización de carga, routing con transiciones suaves, y soporte completo para tema claro/oscuro con detección de preferencia del sistema. Las páginas de detalle de proyectos incluyen lightbox para imágenes, secciones expandibles de características y desafíos técnicos resueltos.',
      category: 'Frontend',
      status: 'Completed',
      featured: false,
      techStack: [
        'Angular 19', 'TypeScript', 'Tailwind CSS', 'Signals', 'RxJS',
        'Standalone Components', 'Lazy Loading', 'Responsive Design'
      ],
      metrics: [
        { label: 'Páginas', value: '6' },
        { label: 'Componentes', value: '15+' },
        { label: 'Bundle Size', value: '375KB' },
        { label: 'Lighthouse Perf', value: '95+' },
        { label: 'Proyectos', value: '6' },
        { label: 'Skills', value: '30+' }
      ],
      images: [
        'assets/images/projects/portfolio/p1.png'
      ],
      imageCategories: [
        {
          title: 'Páginas Principales',
          images: [
            { src: 'assets/images/projects/portfolio/p1.png', caption: 'Home: Hero section con foto de perfil, badges de tecnologías, stats animados (6+ años, 10+ proyectos, 100K+ clientes) y efecto typewriter en el título' },
            { src: 'assets/images/projects/portfolio/p2.png', caption: 'Projects: Galería de proyectos con cards interactivas, filtros por categoría, búsqueda, badges de tecnologías y métricas destacadas' }
          ]
        },
        {
          title: 'Experiencia y Contacto',
          images: [
            { src: 'assets/images/projects/portfolio/p3.png', caption: 'Experience: Timeline vertical con experiencia laboral, logros con impacto cuantificado y stack tecnológico por posición' },
            { src: 'assets/images/projects/portfolio/p4.png', caption: 'Contact: Formulario de contacto funcional, información de contacto con iconos, badge de disponibilidad inmediata' }
          ]
        }
      ],
      demoUrl: 'https://miltonmolloja.github.io/portfolio/',
      githubUrl: 'https://github.com/MiltonMolloja/portfolio',
      highlights: [
        'Arquitectura de componentes standalone de Angular 19 sin NgModules tradicionales',
        'State management con Angular Signals para reactividad eficiente sin librerías externas',
        'Diseño responsive con Tailwind CSS y sistema de diseño consistente',
        'Tema claro/oscuro con detección automática de preferencia del sistema (prefers-color-scheme)',
        'Hero section con efecto typewriter animado para el título profesional',
        'Galería de proyectos con filtrado por categoría, búsqueda y ordenamiento',
        'Cards de proyecto con métricas, badges de tecnologías y preview de imágenes',
        'Páginas de detalle de proyecto con lightbox para galería de imágenes',
        'Secciones expandibles "Ver más" para características y desafíos',
        'Timeline vertical para experiencia laboral con logros cuantificados',
        'Matriz de habilidades categorizada (Frontend, Backend, Database, DevOps)',
        'Formulario de contacto con validación reactiva',
        'Lazy loading de rutas para optimización del bundle inicial',
        'Routing con scroll restoration y transiciones suaves',
        'SEO optimizado con meta tags dinámicos por página',
        'Lighthouse Performance 95+, Accessibility 90+, Best Practices 100'
      ],
      challenges: [
        {
          title: 'Efecto Typewriter Animado para Hero Section',
          challenge: 'El título profesional en el hero necesitaba un efecto de máquina de escribir que mostrara diferentes roles (Full Stack Developer, .NET Specialist, Angular Expert) de forma cíclica y fluida, sin causar layout shifts que afectaran el CLS de Lighthouse.',
          solution: 'Implementé un componente TypewriterComponent con un interval que alterna entre fases de escritura y borrado. Usé un contenedor de altura fija para evitar layout shifts. El texto se renderiza caracter por caracter con un cursor parpadeante via CSS animation. Al completar el borrado, el índice avanza al siguiente título en el array cíclicamente.'
        },
        {
          title: 'Sistema de Tema Claro/Oscuro Persistente',
          challenge: 'El portfolio debía soportar tema claro y oscuro con tres opciones: seguir preferencia del sistema, forzar claro, o forzar oscuro. El tema seleccionado debía persistir entre sesiones y aplicarse antes del primer render para evitar flash de contenido.',
          solution: 'Creé un ThemeService con signal para el estado del tema. En el constructor, leo la preferencia de localStorage o detecto la preferencia del sistema con matchMedia("prefers-color-scheme: dark"). Aplico la clase "dark" al elemento html usando Renderer2. Tailwind CSS está configurado con darkMode: "class" para que todas las clases dark: funcionen. El tema se persiste en localStorage al cambiar.'
        },
        {
          title: 'Lightbox de Imágenes con Navegación por Teclado',
          challenge: 'Las páginas de detalle de proyecto tienen múltiples categorías de imágenes con galerías. Necesitaba un lightbox que permitiera ver las imágenes en grande, navegar entre ellas, y funcionar intuitivamente con teclado (flechas, ESC para cerrar).',
          solution: 'Implementé un modal overlay con z-50 que se activa al hacer click en cualquier imagen. Construyo un array plano de todas las imágenes de todas las categorías para permitir navegación continua. @HostListener("document:keydown") captura eventos de teclado: ArrowLeft/ArrowRight para navegar, Escape para cerrar. Los botones de navegación se deshabilitan en los extremos. El caption de la imagen actual se muestra debajo.'
        },
        {
          title: 'Galería de Proyectos con Filtrado y Búsqueda',
          challenge: 'La página de proyectos necesitaba mostrar múltiples proyectos con capacidad de filtrar por categoría (Frontend, Full Stack, Enterprise, Security), buscar por texto en título/descripción/tecnologías, y ordenar por fecha o relevancia.',
          solution: 'Creé un ProjectsComponent con signals para searchQuery, selectedCategory y sortOrder. Un computed signal filteredProjects aplica los filtros en cadena: primero filtra por categoría si hay una seleccionada, luego por búsqueda (toLowerCase includes en title, description, techStack), y finalmente ordena. Los filtros se reflejan en chips clickeables que muestran el estado activo.'
        },
        {
          title: 'Secciones Expandibles con Estado Local',
          challenge: 'Las páginas de detalle de proyecto tienen listas largas de características (15+ items) y desafíos (6+ items). Mostrar todo de golpe abrumaba al usuario, pero ocultar contenido importante no era buena UX. Necesitaba un balance que mostrara los primeros items y permitiera expandir.',
          solution: 'Implementé signals locales visibleFeatures y visibleChallenges inicializados en 5 y 3 respectivamente. El template usa slice(0, visibleFeatures()) para mostrar solo los primeros N. Un botón "Mostrar X más" calcula dinámicamente cuántos quedan y al clickear setea el signal al total. Si ya está expandido, el mismo botón vuelve al valor inicial mostrando "Mostrar menos".'
        },
        {
          title: 'Optimización de Bundle con Lazy Loading',
          challenge: 'El portfolio tiene múltiples páginas con contenido rico (imágenes, iconos, componentes complejos). Cargar todo en el bundle inicial degradaba el tiempo de First Contentful Paint y el score de Lighthouse.',
          solution: 'Configuré lazy loading en app.routes.ts usando loadComponent() para cada página. Cada ruta carga su componente dinámicamente solo cuando el usuario navega a ella. El resultado es un bundle inicial de ~375KB que carga en <1s. Las rutas subsecuentes cargan chunks de 3-20KB cada una. PreloadAllModules precarga las rutas en background después del initial load.'
        }
      ]
    },
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Enterprise Platform',
      shortDescription: 'Plataforma E-Commerce empresarial con arquitectura de 7 microservicios escalables en .NET 9.',
      fullDescription: 'Plataforma E-Commerce empresarial con arquitectura de microservicios escalable en .NET 9 que implementa gestión completa de productos, órdenes, pagos y autenticación avanzada con 2FA. Sistema distribuido con 7 microservicios independientes comunicados a través de API Gateway, procesando transacciones con alta disponibilidad y seguridad enterprise-grade. Frontend modular en Angular 20 con lazy loading y SSR. Rendimiento validado con Lighthouse: SEO perfecto (100), Best Practices excelente (96), CLS de 0 (sin cambios de layout), y tiempo de respuesta del servidor de apenas 60ms. La arquitectura implementa patrones CQRS con MediatR, cache distribuido con Redis, y comunicación asíncrona entre servicios.',
      category: 'Full Stack',
      status: 'Completed',
      featured: true,
      techStack: [
        '.NET 9', 'Angular 20', 'SQL Server', 'Redis', 'MediatR',
        'JWT', 'MercadoPago', 'Entity Framework Core', 'SignalR', 'Docker'
      ],
      metrics: [
        { label: 'Microservicios', value: '7' },
        { label: 'Performance', value: '69' },
        { label: 'SEO Score', value: '100' },
        { label: 'Best Practices', value: '96' },
        { label: 'Accessibility', value: '87' },
        { label: 'Estados de Orden', value: '17' }
      ],
      images: [
        'assets/images/projects/ecommerce/App1.png'
      ],
      imageCategories: [
        {
          title: 'Arquitectura y Diseño de Sistemas',
          images: [
            { src: 'assets/images/projects/ecommerce/arch-overview.png', caption: 'Arquitectura principal: 7 microservicios independientes con API Gateway centralizado y bases de datos separadas por servicio' },
            { src: 'assets/images/projects/ecommerce/arch-microservices.png', caption: 'Comunicación entre servicios: HTTP/REST síncrono con proxies dedicados para Order, Catalog e Identity' },
            { src: 'assets/images/projects/ecommerce/arch-flow.png', caption: 'Flujo de creación de pedido: Validación de stock → Procesamiento de pago → Notificación al cliente' },
            { src: 'assets/images/projects/ecommerce/arch-gateway.png', caption: 'API Gateway con autenticación JWT, rate limiting y load balancing' }
          ]
        },
        {
          title: 'Métricas de Rendimiento',
          images: [
            { src: 'assets/images/projects/ecommerce/Test.png', caption: 'Lighthouse Performance: SEO 100, Best Practices 96, Accessibility 87, Server Response 60ms, CLS 0' }
          ]
        },
        {
          title: 'Capturas de Pantalla de la Aplicación',
          images: [
            { src: 'assets/images/projects/ecommerce/App1.png', caption: 'Página principal con carrusel de productos destacados y ofertas del día' },
            { src: 'assets/images/projects/ecommerce/app2.png', caption: 'Búsqueda avanzada con filtros por categoría, marca, precio y valoraciones' },
            { src: 'assets/images/projects/ecommerce/app3.png', caption: 'Carrito de compras con cálculo de totales y descuentos en tiempo real' },
            { src: 'assets/images/projects/ecommerce/app4.png', caption: 'Resumen del pedido con selección de dirección de envío y método de pago' },
            { src: 'assets/images/projects/ecommerce/app5.png', caption: 'Confirmación de pedido realizado con éxito y resumen de la compra' },
            { src: 'assets/images/projects/ecommerce/app6.png', caption: 'Resumen de cuenta del usuario con información de perfil y opciones de seguridad' },
            { src: 'assets/images/projects/ecommerce/app7.png', caption: 'Email de notificación al usuario: nuevo inicio de sesión, cambio de contraseña, confirmación de compra, etc.' },
            { src: 'assets/images/projects/ecommerce/app8.png', caption: 'Habilitación de autenticación de dos factores (2FA) - Paso 2: Verificación de código de 6 dígitos desde la app de autenticación' }
          ]
        }
      ],
      demoUrl: 'https://miecommerce.duckdns.org/',
      githubUrl: 'https://github.com/MiltonMolloja',
      highlights: [
        'Arquitectura de 7 microservicios independientes: Identity, Catalog, Customer, Order, Payment, Notification y Cart',
        'Patrón CQRS implementado con MediatR para separación de comandos y consultas',
        'API Gateway centralizado con Ocelot para routing, rate limiting y load balancing',
        'Autenticación empresarial JWT con 2FA (TOTP + QR Code) y refresh tokens',
        'Gestión de sesiones activas con revocación remota y detección de dispositivos',
        'Cache distribuido con Redis para productos, categorías y carrito de compras',
        'Integración de pagos con MercadoPago (7 métodos de pago soportados)',
        'Sistema de notificaciones multi-canal (Email + SMS) con templates dinámicos',
        'Rate limiting inteligente con bloqueo temporal por IP y usuario',
        'Frontend Angular 20 con lazy loading, SSR y micro-frontends',
        'Health checks y monitoreo con endpoints dedicados por servicio',
        'Logging centralizado con correlation IDs para trazabilidad distribuida',
        '17 estados de orden con máquina de estados y validaciones de transición',
        'Full-text search con SQL Server para búsqueda de productos',
        'Lighthouse Performance: SEO 100, Best Practices 96, Accessibility 87, CLS 0, Server Response 60ms'
      ],
      challenges: [
        {
          title: 'Renovación Automática de Tokens JWT con Concurrencia',
          challenge: 'Cuando el access token expiraba, múltiples peticiones HTTP fallaban simultáneamente con error 401. Cada una intentaba renovar el token independientemente, causando condiciones de carrera, loops infinitos y una experiencia de usuario degradada con redirects constantes al login.',
          solution: 'Implementé un patrón de cola con BehaviorSubject que sincroniza todas las peticiones pendientes. La primera petición que detecta el 401 inicia el refresh, mientras las demás se encolan esperando el nuevo token. Agregué exclusión de URLs de autenticación para evitar loops infinitos y preservación de la URL actual para retornar al usuario después del login. El interceptor maneja ~180 líneas de lógica robusta con logging detallado para debugging.'
        },
        {
          title: 'Integración de Pagos con MercadoPago SDK',
          challenge: 'La tokenización de tarjetas requería cargar el SDK de MercadoPago dinámicamente, manejar fallos de carga del script externo, y coordinar múltiples pasos asincrónicos: detección de tipo de tarjeta, validación, tokenización y procesamiento. Además, había que manejar órdenes huérfanas cuando el pago fallaba después de crear la orden.',
          solution: 'Creé MercadoPagoService que carga el SDK lazily con manejo de errores robusto. Implementé detección automática de tipo de tarjeta usando el BIN (primeros 6 dígitos), validación con algoritmo de Luhn, y un flujo de checkout de 3 pasos donde la orden se crea antes del pago pero incluye estados específicos para pagos rechazados. En modo desarrollo, pre-cargo datos de tarjeta de prueba para facilitar testing.'
        },
        {
          title: 'Sincronización de Estado entre Pestañas del Navegador',
          challenge: 'El carrito de compras y la sesión de usuario debían mantenerse sincronizados entre múltiples pestañas del navegador. Un usuario podía agregar productos en una pestaña y no verlos reflejados en otra, o cerrar sesión en una pestaña y seguir "logueado" en las demás.',
          solution: 'Utilicé la Storage API del navegador con event listeners para detectar cambios en localStorage desde otras pestañas. CartService escucha eventos "storage" y actualiza su signal interno automáticamente. AuthService implementa un patrón similar con una clave especial "auth_logout_event" que al detectarse limpia la sesión local sin hacer redirect, evitando que todas las pestañas redirijan simultáneamente.'
        },
        {
          title: 'Mapeo Flexible de Respuestas del Backend',
          challenge: 'Los microservicios del backend retornaban estructuras de datos inconsistentes: algunos usaban "productId", otros "id"; las marcas venían como string o como objeto {name, id}; las imágenes podían estar en "imageUrls", "imageUrl", "mainImage" o "images". Esto causaba errores frecuentes al agregar nuevos endpoints.',
          solution: 'Diseñé interfaces TypeScript flexibles con propiedades opcionales para todas las variantes posibles. Creé métodos de mapeo centralizados (mapProduct, getMainImage) que implementan una cascada de fallbacks con prioridades claras. Por ejemplo, getMainImage() prueba 6 fuentes diferentes en orden antes de usar el placeholder. Aunque son ~100 líneas de código de mapeo, esto aísla la complejidad y hace el frontend resiliente a cambios del backend.'
        },
        {
          title: 'Búsqueda con Facetas Dinámicas y Sincronización de URL',
          challenge: 'El sistema de búsqueda debía soportar filtros dinámicos (marcas, categorías, rango de precios, ratings) que se reflejen en la URL para ser compartibles y permitir navegación con back/forward. Los filtros cambiaban según los resultados disponibles, y debían preservar su estado al cambiar de idioma.',
          solution: 'Implementé UrlSyncService que serializa/deserializa el estado de búsqueda a query params de forma bidireccional. FacetMapperService convierte las facetas del backend a FilterOptions del frontend preservando selecciones previas. Al cambiar idioma, el efecto en ProductSearchService detecta el cambio via languageChanged() signal y dispara un reload manteniendo los filtros actuales. El resultado es una URL como /s?q=laptop&brands=1,2&minPrice=500 totalmente funcional.'
        },
        {
          title: 'Checkout Multi-Paso con Preservación de Estado',
          challenge: 'El flujo de checkout de 3 pasos (Envío → Pago → Revisión) debía preservar datos de formularios entre navegaciones, validar cada paso antes de avanzar, y recuperar el estado si el usuario salía y volvía. Además, al requerir login durante el checkout, el usuario perdía todo su progreso.',
          solution: 'CheckoutService mantiene el estado en signals con persistencia selectiva. Los formularios de Angular Reactive Forms se pre-llenan con datos guardados al inicializar. Implementé detección de retorno post-login via query param "returnFromLogin" que automáticamente continúa al paso de revisión. El carrito persiste en localStorage, así que aunque la sesión expire, los productos no se pierden.'
        }
      ]
    },
    {
      id: 'insurance-platform',
      title: 'Plataforma de Seguros Bancarios',
      shortDescription: 'Plataforma de seguros multiproducto para Banco Supervielle con +100K clientes activos y 8 productos de seguros.',
      demoUrl: 'https://www.supervielle.com.ar/personas',
      fullDescription: 'Plataforma enterprise de seguros multiproducto para uno de los principales bancos privados de Argentina. Sistema integral que permite a más de 100K clientes contratar y gestionar seguros de Auto, Hogar, Vida, Celular, Tecnología, Moto, Accidentes y Bolso de forma 100% digital. Arquitectura de micro-frontends con Webpack Module Federation que permite desarrollo independiente por equipos. Integración con múltiples aseguradoras (Sancor, Mercantil Andina, San Cristóbal, Supervielle Seguros) para cotización comparativa en tiempo real. Sistema completo de gestión de pólizas vigentes, siniestros/denuncias con carga de documentación, y analytics avanzado con Firebase, GTM, Facebook Pixel y Qualtrics para medición de satisfacción y abandono.',
      category: 'Enterprise',
      status: 'Production',
      featured: true,
      techStack: [
        'Angular 12', '.NET Core 6', 'SQL Server', 'Webpack Module Federation',
        'TypeScript', 'RxJS', 'Bootstrap 4', 'Angular Material',
        'Firebase Analytics', 'JWT', 'REST API', 'Microservices'
      ],
      metrics: [
        { label: 'Productos de Seguro', value: '8' },
        { label: 'Clientes Activos', value: '100K+' },
        { label: 'Aseguradoras Integradas', value: '4+' },
        { label: 'Mejora Performance', value: '40%' },
        { label: 'Reducción Conflictos', value: '60%' },
        { label: 'Componentes', value: '50+' }
      ],
      images: [
        'assets/images/projects/seguros/home.png'
      ],
      imageCategories: [
        {
          title: 'Capturas de Pantalla de la Aplicación',
          images: [
            { src: 'assets/images/projects/seguros/seg1.png', caption: 'Dashboard principal: 8 tipos de seguros disponibles, pólizas vigentes del cliente y banner promocional de comercio' },
            { src: 'assets/images/projects/seguros/seg4.png', caption: 'Cotización multi-compañía de Seguro de Auto: comparativa de precios entre Sancor, Mercantil Andina y San Cristóbal con filtros por tipo de cobertura' },
            { src: 'assets/images/projects/seguros/seg2.png', caption: 'Selección de plan de Seguro de Hogar: 3 niveles de cobertura con desglose de montos por incendio, contenido, responsabilidad civil y accidentes' },
            { src: 'assets/images/projects/seguros/seg3.png', caption: 'Detalle de póliza vigente: información de vigencia, aseguradora, próximo vencimiento y opción de actualizar cobertura' },
            { src: 'assets/images/projects/seguros/seg6.png', caption: 'Upgrade de póliza: actualización a un plan superior con comparativa del plan actual vs recomendado, detalle de coberturas mejoradas y asistencias incluidas' },
            { src: 'assets/images/projects/seguros/seg5.png', caption: 'Encuesta de satisfacción Qualtrics: captura de motivos de abandono y nivel de satisfacción para mejora continua del proceso' }
          ]
        }
      ],
      highlights: [
        'Arquitectura micro-frontends con Webpack 5 Module Federation para desarrollo independiente por equipos',
        '8 módulos de seguros completos: Auto, Hogar, Vida, Celular, Tecnología, Moto, Accidentes y Bolso',
        'Cotización comparativa multi-aseguradora en tiempo real (Sancor, Mercantil Andina, San Cristóbal)',
        'Flujos de contratación de 4-5 pasos con validación progresiva y persistencia de estado',
        'Sistema de gestión de pólizas vigentes con descarga de PDF y actualización de coberturas',
        'Módulo de siniestros/denuncias con carga de documentación (informes de bomberos, policía, médicos)',
        'Autenticación JWT con ciclo de refresh automático e integración con sistema legacy ASP.NET',
        'Design System empresarial @kite/angular para consistencia visual en todo el banco',
        'Analytics integral: Firebase, Google Tag Manager, Facebook Pixel y Qualtrics',
        'Encuestas de satisfacción y abandono para medición de NPS y mejora continua',
        'Guards de navegación para protección de rutas según estado del flujo de contratación',
        'Diseño responsive mobile-first con layouts específicos para web y app móvil',
        'Interceptores HTTP para manejo centralizado de tokens y errores',
        'Cumplimiento de normativas BCRA para operaciones bancarias y de seguros'
      ],
      challenges: [
        {
          title: 'Arquitectura Micro-Frontend con Module Federation',
          challenge: 'El proyecto requería que múltiples equipos (3+) trabajaran simultáneamente en diferentes módulos de seguros sin bloquearse entre sí. Los deploys monolíticos causaban 60% de conflictos de merge y tiempos de build de 15+ minutos que paralizaban el desarrollo.',
          solution: 'Implementé Webpack 5 Module Federation exponiendo la aplicación como remoteEntry.js con función mount() para integración con el shell bancario. Cada módulo de seguro es lazy-loaded independiente. Creé un sistema de sincronización de navegación parent-child y manejo de lifecycle (mount/unmount) para cleanup correcto. Resultado: deploys independientes por módulo, builds de 3 minutos y 60% menos conflictos.'
        },
        {
          title: 'Gestión de Estado en Flujos Multi-Paso Complejos',
          challenge: 'Los flujos de contratación de seguros tienen 4-5 pasos con múltiples opciones (marca/modelo/versión para autos, metros cuadrados/coberturas para hogar). El usuario podía abandonar en cualquier momento y volver después, pero perdía todo el progreso. Además, el botón "Volver" del navegador rompía el flujo.',
          solution: 'Diseñé un patrón de estado basado en sessionStorage con stores tipados por módulo (Stores.estadoCotizacion, Stores.datosVehiculo). Implementé Guards personalizados (StoreGuard, UrlAuthorizationGuard) que validan el estado antes de permitir navegación. Para el back del navegador, agregué interceptación del evento popstate y redirección inteligente al paso correcto según el estado guardado.'
        },
        {
          title: 'Integración con Múltiples Aseguradoras en Tiempo Real',
          challenge: 'El módulo de autos debía consultar cotizaciones de 4+ aseguradoras simultáneamente (Sancor, Mercantil Andina, San Cristóbal, etc.), cada una con diferentes tiempos de respuesta (500ms a 5s) y formatos de datos. Mostrar resultados parciales mientras llegaban las demás era crítico para la UX.',
          solution: 'Implementé un patrón de agregación con forkJoin parcial: las cotizaciones se muestran progressivamente usando merge() de RxJS conforme llegan. Agregué loading skeletons por aseguradora y manejo de timeouts individuales (8s) sin afectar las demás. El BFF (Backend for Frontend) normaliza los diferentes formatos de cada aseguradora a un modelo común antes de enviar al frontend.'
        },
        {
          title: 'Autenticación Dual: Web Legacy + Mobile',
          challenge: 'La plataforma debía funcionar tanto embebida en el home banking web (ASP.NET legacy con tokens propios) como en la app móvil (React Native con otro sistema de auth). Cada plataforma manejaba tokens de forma diferente y tenía distintos endpoints de autenticación.',
          solution: 'Creé AuthService con detección automática de plataforma que selecciona el flujo correcto: para web usa /Pages/Token/Token.aspx del legacy, para mobile usa /mobile/autorizacion. Implementé ciclo de refresh con timer que renueva el token antes de expirar. TokenClientInterceptor agrega el Bearer token a todas las peticiones de forma transparente.'
        },
        {
          title: 'Medición de Abandono y Satisfacción del Usuario',
          challenge: 'Marketing necesitaba entender por qué los usuarios abandonaban las cotizaciones (precio, complejidad, falta de confianza) y medir NPS por producto. Pero las encuestas no podían interrumpir el flujo de compra ni afectar la conversión.',
          solution: 'Integré Qualtrics con triggers contextuales: la encuesta de abandono solo aparece al detectar intención de salida (cierre de drawer, navegación fuera del flujo). Para éxito, se muestra post-contratación. Implementé eventos de Firebase Analytics en cada paso del funnel para tracking de conversión. Los datos se cruzan con GTM para remarketing a usuarios que abandonaron en pasos específicos.'
        },
        {
          title: 'Design System Empresarial y Consistencia Visual',
          challenge: 'El banco tenía un Design System propio (@kite/angular) que debía usarse obligatoriamente, pero su documentación era limitada y algunos componentes no cubrían casos de uso específicos de seguros (comparadores de precios, timelines de siniestros, cards de pólizas).',
          solution: 'Extendí los componentes base de @kite con wrappers específicos para seguros manteniendo la API consistente. Creé una librería interna de componentes de negocio (PlanCard, CotizacionComparator, PolizaTimeline) que usan @kite internamente. Documenté los patrones en Storybook para que otros equipos los reutilicen.'
        }
      ]
    },
    {
      id: 'icbanking',
      title: 'Plataforma de Banca Online',
      shortDescription: 'Plataforma enterprise de internet banking con 50+ módulos, procesando +$50M mensuales para múltiples bancos en Latinoamérica.',
      demoUrl: 'https://www.bisa.com/home',
      fullDescription: 'Plataforma enterprise de internet banking desarrollada para InfoCorp, líder en soluciones bancarias en Latinoamérica. Sistema integral que incluye 50+ módulos de funcionalidades bancarias: gestión de cuentas, transferencias nacionales e internacionales (SWIFT), pagos de servicios, tarjetas de crédito, préstamos, inversiones, y módulo completo de Personal Finance Management (PFM). Arquitectura de 4 capas con Angular 10 en frontend y ASP.NET Web API en backend. Comunicación encriptada end-to-end con AES-256 y compresión de datos. Soporte multi-canal: Web responsive, Mobile (PWA), BackOffice administrativo y integración con Chatbots. Sistema de autenticación multi-factor (PIN, SMS OTP, Preguntas de Seguridad, Tarjeta de Coordenadas) y motor de workflows de aprobación multinivel para operaciones empresariales.',
      category: 'Fintech',
      status: 'Production',
      featured: true,
      techStack: [
        'Angular 10', 'TypeScript', 'RxJS', 'ASP.NET Web API',
        '.NET Framework', 'SQL Server', 'WCF Services', 'Crypto-JS',
        'Chart.js', 'PWA', 'Service Workers', 'SCSS'
      ],
      metrics: [
        { label: 'Transacciones Mensuales', value: '$50M+' },
        { label: 'Disponibilidad', value: '99.9%' },
        { label: 'Módulos Bancarios', value: '50+' },
        { label: 'Descargas App', value: '50K+' },
        { label: 'Rating en Stores', value: '4.5+' },
        { label: 'Controllers API', value: '40+' }
      ],
      images: [
        'assets/images/projects/icbanking/home.png'
      ],
      imageCategories: [
        {
          title: 'Capturas de Pantalla de la Aplicación',
          images: [
            { src: 'assets/images/projects/icbanking/ice1.png', caption: 'Pantalla de login: ingreso seguro con teclado virtual anti-keylogger, selector de idioma y opciones de contratación para empresas y personas' },
            { src: 'assets/images/projects/icbanking/ice2.png', caption: 'Dashboard principal: posición consolidada mostrando Cuenta Corriente, Caja de Ahorros, Tarjeta de Crédito, Depósito a Plazo Fijo y Préstamos con saldos en tiempo real' },
            { src: 'assets/images/projects/icbanking/ice4.png', caption: 'Configuración personal: datos del usuario, seguridad (contraseña, PIN, imagen de seguridad) y modal de pregunta secreta como factor adicional de autenticación' },
            { src: 'assets/images/projects/icbanking/ice3.png', caption: 'Administración de usuarios: gestión de usuarios del sitio con acciones de editar, eliminar, bloquear/desbloquear y restablecer credenciales' },
            { src: 'assets/images/projects/icbanking/ice5.png', caption: 'Workflow de aprobación: lista de usuarios con indicador de cambios pendientes de aprobación para operaciones que requieren autorización multinivel' },
            { src: 'assets/images/projects/icbanking/ice6.png', caption: 'BackOffice: configuración de dispositivos de seguridad por usuario (PIN, Security Question, SMS Token) con permisos diferenciados para operaciones monetarias y no monetarias' }
          ]
        }
      ],
      highlights: [
        'Arquitectura de 4 capas: Presentación (Angular), Servicios (Web API), Negocio y Datos con patrón Repository',
        '50+ módulos lazy-loaded: Cuentas, Transferencias, Pagos, Tarjetas, Préstamos, Inversiones, PFM',
        'Transferencias completas: entre cuentas propias, intrabancarias, nacionales (ACH), internacionales (SWIFT), P2P',
        'Personal Finance Management (PFM): categorización de gastos, presupuestos, metas de ahorro, gráficos de tendencias',
        'Autenticación multi-factor: PIN, SMS OTP, Preguntas de Seguridad, Tarjeta de Coordenadas',
        'Comunicación encriptada end-to-end con AES-256 CBC y compresión con pako/gzip',
        'Motor de workflows de aprobación multinivel para operaciones empresariales',
        'Soporte multi-canal: Web responsive, PWA móvil, BackOffice administrativo, integración Chatbots',
        'Progressive Web App (PWA) con Service Workers para funcionamiento offline',
        'Sistema de caché configurable por endpoint con invalidación inteligente',
        'Operaciones batch: procesamiento masivo de transferencias y pagos con monitor en tiempo real',
        'Migración exitosa de 15+ módulos de AngularJS a Angular 10 moderno',
        'Internacionalización completa (i18n) con soporte Español/Inglés',
        'Generación de código con Banking Studio para scaffolding de servicios y entidades',
        'Mejora de 50% en performance y 35% menos bugs en producción post-migración'
      ],
      challenges: [
        {
          title: 'Migración de AngularJS a Angular Moderno sin Downtime',
          challenge: 'El sistema legacy tenía 15+ módulos críticos en AngularJS que debían migrarse a Angular 10 sin interrumpir el servicio bancario 24/7. Los módulos estaban fuertemente acoplados y compartían estado global mediante $rootScope, lo que hacía imposible una migración big-bang.',
          solution: 'Implementé una estrategia de migración incremental usando ngUpgrade para ejecutar AngularJS y Angular side-by-side. Creé un servicio de estado compartido que reemplazó gradualmente $rootScope. Migré módulo por módulo empezando por los menos críticos, validando cada uno en producción antes de continuar. El proceso tomó 8 meses con zero downtime y resultó en 50% mejora de performance.'
        },
        {
          title: 'Encriptación End-to-End de Comunicaciones Bancarias',
          challenge: 'Las regulaciones bancarias exigían que toda comunicación cliente-servidor estuviera encriptada, incluso sobre HTTPS. Además, los payloads de algunas operaciones (extractos, movimientos) eran muy grandes y afectaban la performance en conexiones móviles lentas.',
          solution: 'Implementé una capa de encriptación con AES-256 CBC usando Crypto-JS en el cliente. El servidor genera una clave de sesión única que se intercambia de forma segura. Para optimizar bandwidth, agregué compresión con pako antes de encriptar. Los headers X-Protected-Communication y X-Compressed-Communication indican al servidor cómo procesar cada request. Resultado: comunicación segura con solo 15% overhead en tiempo de respuesta.'
        },
        {
          title: 'Autenticación Multi-Factor con Múltiples Dispositivos de Seguridad',
          challenge: 'Diferentes bancos clientes requerían diferentes métodos de autenticación (PIN, SMS OTP, Preguntas de Seguridad, Tarjeta de Coordenadas, Token físico). Además, ciertas operaciones requerían re-autenticación con factores específicos según el monto o tipo de transacción.',
          solution: 'Diseñé un sistema de autenticación modular con SecurityDeviceService que abstrae los diferentes métodos. Cada operación define sus requisitos de seguridad en metadata del backend. El AuthenticationOrchestrator determina qué factores solicitar y en qué orden. Implementé componentes reutilizables para cada tipo de input (PinPad, OtpInput, CoordinatesCard) que se cargan dinámicamente según la configuración del banco.'
        },
        {
          title: 'Workflows de Aprobación Multinivel para Empresas',
          challenge: 'Los clientes empresariales requerían que transferencias grandes pasaran por múltiples niveles de aprobación (Operador → Supervisor → Gerente). Cada aprobador podía estar en diferente zona horaria y usar diferente dispositivo. El estado del workflow debía persistir días hasta completarse.',
          solution: 'Implementé un motor de workflows con estados persistidos en base de datos. Cada operación pendiente genera notificaciones push a los aprobadores correspondientes. El ApprovalService maneja la máquina de estados con transiciones válidas y logging de auditoría completo. Los aprobadores pueden actuar desde web o móvil con la misma experiencia. Agregué timeout configurable y escalamiento automático si un nivel no responde.'
        },
        {
          title: 'Personal Finance Management con Categorización Inteligente',
          challenge: 'El módulo PFM debía categorizar automáticamente miles de transacciones diarias (supermercado, combustible, restaurantes, etc.) basándose en la descripción del comercio. Las descripciones venían en formatos inconsistentes de diferentes procesadores de pago y muchas veces eran crípticas.',
          solution: 'Desarrollé un sistema de categorización en dos niveles: reglas basadas en patrones regex para comercios conocidos, y un fallback con matching difuso para descripciones parciales. El usuario puede recategorizar manualmente y el sistema aprende de sus preferencias. Implementé un dashboard con Chart.js mostrando gastos por categoría, tendencias mensuales y progreso hacia metas de ahorro.'
        },
        {
          title: 'Operaciones Batch con Procesamiento Masivo',
          challenge: 'Clientes empresariales necesitaban procesar archivos con miles de transferencias de nómina o pagos a proveedores. El proceso podía tomar varios minutos y el usuario no tenía visibilidad del progreso ni podía recuperarse de errores parciales.',
          solution: 'Implementé un sistema de batch processing con upload de archivos CSV/Excel, validación previa de todas las filas, y procesamiento asíncrono en el backend. El BatchMonitorComponent hace polling cada 5 segundos mostrando progreso en tiempo real con barra de avance. Los registros con error se marcan individualmente permitiendo corrección y re-proceso parcial. Al finalizar, se genera un reporte descargable con el resultado de cada operación.'
        }
      ]
    },
    {
      id: 'cobra-system',
      title: 'Sistema Cobra - Cobros Automatizados DEBIN',
      shortDescription: 'Sistema de cobros automatizado vía DEBIN Bancario para Consultatio SA, procesando +$10M en los primeros 6 meses con 80% menos gestión manual.',
      fullDescription: 'Sistema de cobros automatizado desarrollado para Consultatio SA, una de las principales empresas de desarrollo inmobiliario de Argentina (Nordelta, Puertos, Puerto Madero). La plataforma permite gestionar cobros de expensas y cuotas de propietarios mediante DEBIN (Débito Inmediato) integrado con Banco Itaú. El backend en .NET Core 3.1 implementa integración WCF con servicios bancarios de Itaú para publicación de DEBINs, consulta de estados y procesamiento de pagos. Incluye sistema de archivos de deuda con parseo de formatos bancarios específicos, validación de CBU/CUIT, y reconciliación automática de pagos. El frontend Angular 8 con Material Design ofrece una interfaz intuitiva para propietarios y administradores con dashboards de estado de cuenta, histórico de pagos, y configuración de débitos automáticos. Jobs programados con Hangfire procesan archivos de deuda y actualizan estados de DEBIN automáticamente. Autenticación SSO con Microsoft Azure AD para empleados de Consultatio.',
      category: 'Fintech',
      status: 'Production',
      featured: false,
      techStack: [
        '.NET Core 3.1', 'Angular 8', 'SQL Server', 'Entity Framework Core',
        'Hangfire', 'WCF Services', 'Azure AD SSO', 'Angular Material', 'Swagger'
      ],
      metrics: [
        { label: 'Procesado', value: '$10M+' },
        { label: 'Reducción Manual', value: '80%' },
        { label: 'Empresas', value: '4' },
        { label: 'Endpoints API', value: '15+' },
        { label: 'Jobs Automáticos', value: '3' },
        { label: 'NPS Usuarios', value: '8.5/10' }
      ],
      images: [
        'assets/images/projects/cobra/c1.png'
      ],
      imageCategories: [
        {
          title: 'Interfaz de Usuario',
          images: [
            { src: 'assets/images/projects/cobra/c1.png', caption: 'Centro de Gestión: landing page con acceso diferenciado para Proveedores y Propietarios, diseño corporativo Consultatio' },
            { src: 'assets/images/projects/cobra/c2.png', caption: 'Sistema de Inicio de Sesión Único (SSO): autenticación con credenciales locales o Microsoft Azure AD para equipo Consultatio' }
          ]
        }
      ],
      githubUrl: 'https://github.com/MiltonMolloja',
      highlights: [
        'Integración bancaria WCF con Banco Itaú para operaciones DEBIN (Débito Inmediato)',
        'Soporte multi-empresa: Nordelta SA, Consultatio SA (Puertos), Golf Club Nordelta, UTE Puerto Madero',
        'Procesamiento de archivos de deuda con formato bancario específico (Header, Detalle, Trailer)',
        'Validación de CBU con algoritmo de dígito verificador y CUIT con módulo 11',
        'Estados de DEBIN: Pendiente, Enviado a COELSA, Pagado, Rechazado, Vencido, Error',
        'Jobs programados con Hangfire: procesamiento de archivos, verificación de estados, actualización de cuentas',
        'Sistema de auditoría completo con logs JSON por operación y registro en base de datos',
        'Certificados X.509 por empresa para autenticación con servicios bancarios',
        'Manejo de moneda dual: Pesos Argentinos (ARP) y Dólares (USD) con CBU diferenciado',
        'API RESTful documentada con Swagger para integración con sistemas externos (SGC, SGF)',
        'Frontend Angular Material con tabla de cuotas, resumen de cuenta y confirmación de pagos',
        'Autenticación SSO con Microsoft Azure AD para empleados internos',
        'Sistema de roles: Admin, Cobranzas, Cliente con permisos granulares',
        'Notificaciones por email para confirmación de pagos y cambios de estado',
        'Middleware de excepciones centralizado para manejo consistente de errores'
      ],
      challenges: [
        {
          title: 'Integración WCF con Servicios Bancarios de Itaú',
          challenge: 'Los servicios de Débito Inmediato de Banco Itaú exponen una API SOAP/WCF con autenticación por certificado X.509. Cada empresa cliente (Nordelta, Consultatio, Golf Club) tiene su propio certificado y configuración de convenio. La documentación del banco era limitada y los errores del servicio poco descriptivos.',
          solution: 'Implementé ChannelFactory<T> con configuración dinámica de BasicHttpsBinding y certificados. Creé un sistema de configuración por CUIT que selecciona automáticamente el certificado correcto (GetItauCertificateConfig). Los certificados se almacenan en la carpeta Certificates del proyecto con contraseñas en configuración. Agregué logging detallado con AuditScope para cada operación DEBIN, registrando request/response completos para debugging con el banco.'
        },
        {
          title: 'Procesamiento de Archivos de Deuda con Formato Bancario',
          challenge: 'Los archivos de deuda llegan en un formato de texto plano con estructura específica: Header (información del organismo), múltiples registros de Detalle (cada deuda individual con campos de posición fija), y Trailer (totales de control). Los campos numéricos no tienen separador decimal y los montos tienen 2 decimales implícitos.',
          solution: 'Creé DTOs específicos (HeaderDeuda, DetalleDeuda, TrailerDeuda) con métodos de parsing que extraen campos por posición usando Substring. Para los montos, implementé CalcDebtPaidAmount que convierte "1234500" a 12345.00 insertando el punto decimal. PaymentsFilesService procesa los archivos en batch, validando totales del Trailer contra la suma de Detalles antes de persistir.'
        },
        {
          title: 'Sincronización de Estados DEBIN con el Banco',
          challenge: 'Después de publicar un DEBIN, el pagador tiene 30 minutos para aceptarlo en su home banking. El sistema necesitaba consultar periódicamente el estado de cada DEBIN pendiente, actualizar la base de datos, y notificar a los sistemas de gestión financiera (SGF) cuando un pago se completaba.',
          solution: 'Implementé CheckEveryDebinStateAndSendRequestOnStatusChanged como job de Hangfire que se ejecuta cada N minutos (configurable). Consulta el estado de cada DEBIN pendiente via ConsultarEstadoAsync, compara con el estado guardado, y si cambió a "Pagado" invoca PaymentService.InformPaymentDone que envía la información a SGF via REST. Los estados se mapean de las descripciones de Itaú (ENVIADO A COELSA, VENCIDO, PAGADO, RECHAZADO) a un enum DebinStatus.'
        },
        {
          title: 'Autenticación Dual: Propietarios y Empleados',
          challenge: 'El sistema debía soportar dos tipos de usuarios: propietarios externos que usan credenciales locales, y empleados de Consultatio que ya tenían cuentas en Microsoft Azure AD. Ambos debían acceder al mismo sistema pero con diferentes métodos de autenticación.',
          solution: 'Implementé autenticación dual en el frontend con dos flujos: login tradicional con email/password que valida contra la API local, y botón "Iniciar sesión con Microsoft" que redirige a Azure AD. El backend valida tokens JWT propios para usuarios locales y tokens de Azure AD para empleados. LoginService maneja ambos flujos y PrincipalService abstrae la identidad del usuario independientemente del método de autenticación usado.'
        },
        {
          title: 'Validación de CBU y CUIT Argentinos',
          challenge: 'Los CBU (Clave Bancaria Uniforme) y CUIT (Clave Única de Identificación Tributaria) ingresados por usuarios debían validarse antes de intentar operaciones bancarias. Un CBU inválido causaría rechazo del DEBIN y un CUIT incorrecto afectaría la facturación.',
          solution: 'Creé CbuValidator que valida la estructura de 22 dígitos y calcula el dígito verificador usando el algoritmo oficial (multiplicadores 7,1,3 alternados). CuitValidator implementa validación de módulo 11 para los 11 dígitos del CUIT. Ambos se ejecutan en BankAccountService antes de guardar cuentas y en la publicación de DEBIN. Los errores de validación retornan mensajes específicos al usuario.'
        },
        {
          title: 'Sistema de Auditoría Completo para Operaciones Financieras',
          challenge: 'Por requisitos regulatorios y de seguridad, cada operación financiera debía quedar registrada con todos sus detalles: quién la ejecutó, cuándo, desde qué IP, qué datos envió y qué respuesta recibió. Los logs debían ser consultables y almacenarse tanto en archivos como en base de datos.',
          solution: 'Integré Audit.WebApi con configuración personalizada que captura request body, response body, headers, y estado del modelo. Los logs se guardan en archivos JSON organizados por fecha (AuditLogs/yyyy-MM-dd/) y simultáneamente se insertan en tabla AuditLogs via SQL directo en el FilenameBuilder. El token JWT se decodifica para extraer userId y userEmail sin verificar firma (GetPayloadWithoutVerification) para incluirlos en el registro de auditoría.'
        }
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
      date: 'Febrero 2025',
      url: 'https://www.freecodecamp.org/certification/miltonmolloja/foundational-c-sharp-with-microsoft'
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
