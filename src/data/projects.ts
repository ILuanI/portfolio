export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  preview: "dashboard" | "store" | "planner" | "portfolio";
  image?: string;
  action: { type: "github" | "demo"; url?: string };
};

// Shared project metadata; editorial copy is in messages/.
export const projects: Omit<Project, "title" | "description" | "category">[] = [
  {
    id: "sales",
    preview: "dashboard",
    technologies: ["Laravel", "Supabase", "MVC"],
    action: {
      type: "github",
    },
  },
  {
    id: "retrueque",
    preview: "store",
    technologies: ["Frontend", "APIs REST", "Scrum"],
    action: {
      type: "github",
    },
  },
  {
    id: "enrollment",
    preview: "planner",
    technologies: ["Laravel", "MVC", "Roles y permisos"],
    action: {
      type: "github",
    },
  },
];
