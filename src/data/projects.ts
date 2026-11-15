export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  size: "large" | "small" | "wide" | "tall";
  preview: "dashboard" | "store" | "planner" | "portfolio";
  image?: string;
  action: { type: "github" | "demo"; url?: string };
};

// Proyectos del CV. Añadir capturas y enlaces cuando estén disponibles.
export const projects: Project[] = [
  {
    id: "sales", title: "Sistema de Ventas", size: "large", preview: "dashboard", category: "Gestión comercial",
    description: "Sistema desarrollado con Laravel bajo arquitectura MVC y Supabase para la gestión de datos. Consultas y filtros para agilizar el registro, la búsqueda y el control de la información.",
    technologies: ["Laravel", "Supabase", "MVC"], action: { type: "github" },
  },
  {
    id: "retrueque", title: "Retrueque", size: "small", preview: "store", category: "Simulación laboral",
    description: "Plataforma para intercambiar servicios a domicilio mediante trueque. Desarrollé el frontend con componentes reutilizables, vistas responsivas, manejo de estados e integración con APIs REST, trabajando con Scrum.",
    technologies: ["Frontend", "APIs REST", "Scrum"], action: { type: "github" },
  },
  {
    id: "enrollment", title: "Sistema de Matrículas", size: "small", preview: "planner", category: "Gestión académica",
    description: "Sistema en Laravel con gestión de usuarios y roles, dashboard de estadísticas y generación de reportes. Arquitectura MVC para separar la lógica de negocio, la interfaz y el manejo de datos.",
    technologies: ["Laravel", "MVC", "Roles y permisos"], action: { type: "github" },
  },
];
