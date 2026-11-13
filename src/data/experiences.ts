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

// Sustituir estos ejemplos por el recorrido profesional real.
export const experiences: Experience[] = Array.from({ length: 4 }, (_, index) => ({
  id: `experience-${index + 1}`,
  role: ["Desarrollador Web Freelance", "Desarrollador Frontend", "Desarrollador Full Stack", "Desarrollador Web"][index],
  company: ["CLAFCOMP", "Empresa B", "Empresa C", "Empresa D"][index],
  period: ["Mar 2026 - Actualidad", "Jun 2024 - Feb 2026", "Ene 2023 - May 2024", "Sep 2021 - Dic 2022"][index],
  location: "Remoto",
  current: index === 0,
  description: index === 0
    ? "Desarrollé un sistema de gestión de certificados para una empresa, desde el análisis de requerimientos hasta la implementación y despliegue, adaptándome a su infraestructura existente."
    : "Aquí irá una breve descripción del cargo, las responsabilidades y los aportes de esta etapa de mi recorrido profesional.",
  responsibilities: index === 0 ? [
    "Análisis de requerimientos y evaluación de la infraestructura actual.",
    "Elaboración de propuesta técnica y selección de tecnologías (Laravel, Inertia y React).",
    "Desarrollo del sistema de gestión de certificados.",
    "Implementación de roles, clientes, entidades, firmantes y generación de QR.",
    "Despliegue y soporte post-lanzamiento.",
  ] : ["Responsabilidades y aportes por completar.", "Principales retos y soluciones de esta etapa por completar."],
  technologies: index === 0 ? ["Laravel", "React", "Inertia.js", "MySQL", "PHP", "Git"] : ["Tecnologías por definir"],
  results: index === 0 ? [
    { value: "100%", label: "Digitalización de certificados" },
    { value: "+X", label: "Usuarios gestionados" },
    { value: "QR", label: "Acceso rápido a certificados" },
  ] : [{ value: "—", label: "Resultados por completar" }],
}));
