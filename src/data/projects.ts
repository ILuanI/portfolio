export type Project = {
  id: string;
  title: string;
  size: "large" | "small" | "wide" | "tall";
  preview: "dashboard" | "store" | "planner" | "portfolio";
  image?: string;
  action: { type: "github" | "demo"; url?: string };
};

// Proyectos de ejemplo. Añadir una imagen y la URL real en action.url.
export const projects: Project[] = [
  { id: "certificates", title: "Gestión de certificados", size: "large", preview: "dashboard", action: { type: "github" } },
  { id: "store", title: "Tienda digital", size: "small", preview: "store", action: { type: "demo" } },
  { id: "planner", title: "Organizador de tareas", size: "small", preview: "planner", action: { type: "github" } },
  { id: "portfolio", title: "Portafolio creativo", size: "wide", preview: "portfolio", action: { type: "demo" } },
];
