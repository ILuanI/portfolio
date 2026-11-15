export type Experience = {
  id: string;
  role: string;
  company: string;
  /** Ruta del logo en public, por ejemplo: /images/companies/empresa.svg. */
  logo?: string;
  period: string;
  description: string;
  location?: string;
  current?: boolean;
  responsibilities?: string[];
  technologies?: string[];
  results?: { value: string; label: string }[];
};

// Fuente: public/documents/cv-luiggi-rosas.pdf. Fechas y funciones del CV.
export const experiences: Experience[] = [
  {
    id: "rapidboard-fullstack",
    role: "Desarrollador Full Stack",
    company: "Rapidboard",
    logo: "/images/companies/rapidboard.webp",
    period: "Ene 2026 - Oct 2026",
    location: "Trujillo, Perú",
    description: "Desarrollo de una plataforma de analítica de repositorios de GitHub, desde la extracción y organización de datos hasta la autenticación y los dashboards para visualizar la actividad del equipo.",
    responsibilities: [
      "Diseñé e implementé un pipeline ETL para extraer commits, pull requests e issues desde la API REST de GitHub y cargarlos en PostgreSQL, con un modelo dimensional en estrella y sincronización automatizada.",
      "Desarrollé el frontend con React, TypeScript, Zustand y Tailwind CSS, simplificando funcionalidades y reorganizando componentes para mejorar la navegación y los flujos de interacción.",
      "Integré GitHub OAuth y GitHub Apps para autenticar usuarios y vincular repositorios.",
      "Construí dashboards con Recharts para visualizar commits, pull requests, tiempos de revisión y contribuciones por desarrollador.",
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Zustand", "Tailwind CSS", "Recharts", "GitHub API", "OAuth"],
  },
  {
    id: "clafcomp-software-ti",
    logo: "/images/companies/clafcomp.webp",
    role: "Desarrollador de Software y Soporte TI",
    company: "CLAFCOMP",
    period: "Abr 2026 - Ago 2026",
    location: "Trujillo, Perú",
    description: "Gestión de la plataforma institucional, soporte técnico y automatización de la atención al cliente por WhatsApp para mantener la continuidad de los servicios digitales.",
    responsibilities: [
      "Desarrollé y actualicé el sitio institucional en WordPress, administré Moodle y brindé soporte técnico al personal.",
      "Implementé flujos automatizados de atención al cliente con la API oficial de WhatsApp de Meta y n8n, integrando plantillas aprobadas.",
      "Gestioné la configuración técnica en Meta Business, incluida la habilitación y los permisos para usar la API de WhatsApp en los flujos automatizados.",
    ],
    technologies: ["WordPress", "Moodle", "n8n", "WhatsApp API", "Meta Business"],
  },
  {
    id: "clafcomp-certificados",
    logo: "/images/companies/clafcomp.webp",
    role: "Desarrollador Web Freelance",
    company: "CLAFCOMP",
    period: "Mar 2026",
    description: "Diseño, desarrollo y despliegue de un repositorio de certificados con validación mediante códigos QR, adaptado a las limitaciones de la infraestructura existente.",
    responsibilities: [
      "Desarrollé el sistema con Laravel, Inertia y React, incluyendo gestión de roles, clientes, entidades, firmantes y certificados con código QR para su validación y visualización.",
      "Seleccioné la arquitectura y las tecnologías considerando las limitaciones del entorno con HestiaCP y evaluando la viabilidad de WordPress para este caso de uso.",
      "Realicé el despliegue y la capacitación al usuario, complementada con un video instructivo como manual de uso.",
    ],
    technologies: ["Laravel", "React", "Inertia.js", "PHP", "HestiaCP"],
  },
  {
    id: "cirvos-infraestructura",
    role: "Freelance · Infraestructura y Migración de Servicios",
    company: "Cirvos",
    logo: "/images/companies/cirvos.webp",
    period: "Feb 2026",
    description: "Evaluación de la infraestructura en DigitalOcean y migración de servicios a una nueva VPS en Hetzner, con configuración de despliegues, dominios y almacenamiento.",
    responsibilities: [
      "Analicé respaldos, consumo de recursos, repositorios y dependencias en DigitalOcean para definir el plan de migración.",
      "Recomendé y ejecuté la migración a Hetzner, configurando la VPS, Coolify, bases de datos, almacenamiento y servicios como n8n, un bot en Python y Chatwoot.",
      "Implementé dos sitios en WordPress y configuré sus dominios, registros DNS y despliegue dentro de la nueva infraestructura.",
    ],
    technologies: ["DigitalOcean", "Hetzner", "Coolify", "n8n", "Python", "Chatwoot", "WordPress", "DNS"],
  },
  {
    id: "neonhouseled-web",
    role: "Desarrollador Web",
    company: "NEONHOUSELED",
    logo: "/images/companies/neonhouseled.webp",
    period: "May 2025 - Ago 2025",
    location: "Remoto",
    description: "Desarrollo y mantenimiento de un sistema web de gestión de productos, con soporte a incidencias, validación de integraciones y mejoras de SEO y rendimiento.",
    responsibilities: [
      "Implementé nuevas funcionalidades, corregí incidencias y atendí tickets de soporte del sistema de gestión de productos.",
      "Realicé pruebas funcionales y validación de endpoints con Postman para verificar servicios e integraciones.",
      "Optimicé rendimiento, metadatos e indexación con Ahrefs, Google Search Console, Lighthouse y PageSpeed Insights.",
      "Realicé despliegues en Hostinger y configuré enlaces simbólicos para asegurar el acceso a imágenes y archivos de la aplicación.",
    ],
    technologies: ["Postman", "Ahrefs", "Google Search Console", "Lighthouse", "PageSpeed Insights", "Hostinger"],
  },
];
