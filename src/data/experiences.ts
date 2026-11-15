export type Experience = {
  id: string;
  company: string;
  logo?: string;
  period: { start: string; end?: string };
  current?: boolean;
  technologies?: string[];
};

// Dates and roles are based on the supplied CV.
export const experiences: Experience[] = [
  {
    id: "rapidboard-fullstack",
    company: "Rapidboard",
    logo: "/images/companies/rapidboard.webp",
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Zustand",
      "Tailwind CSS",
      "Recharts",
      "GitHub API",
      "OAuth",
    ],
    period: {
      start: "2026-01",
      end: "2026-10",
    },
  },
  {
    id: "clafcomp-software-ti",
    logo: "/images/companies/clafcomp-logo.webp",
    company: "CLAFCOMP",
    technologies: [
      "WordPress",
      "Moodle",
      "n8n",
      "WhatsApp API",
      "Meta Business",
    ],
    period: {
      start: "2026-04",
      end: "2026-08",
    },
  },
  {
    id: "clafcomp-certificados",
    logo: "/images/companies/clafcomp-logo.webp",
    company: "CLAFCOMP",
    technologies: ["Laravel", "React", "Inertia.js", "PHP", "HestiaCP"],
    period: {
      start: "2026-03",
    },
  },
  {
    id: "cirvos-infraestructura",
    company: "Cirvos",
    logo: "/images/companies/cirvos.webp",
    technologies: [
      "DigitalOcean",
      "Hetzner",
      "Coolify",
      "n8n",
      "Python",
      "Chatwoot",
      "WordPress",
      "DNS",
    ],
    period: {
      start: "2026-02",
    },
  },
  {
    id: "neonhouseled-web",
    company: "NEONHOUSELED",
    logo: "/images/companies/neonhouseled.webp",
    technologies: [
      "Postman",
      "Ahrefs",
      "Google Search Console",
      "Lighthouse",
      "PageSpeed Insights",
      "Hostinger",
    ],
    period: {
      start: "2025-05",
      end: "2025-08",
    },
  },
];
