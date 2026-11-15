// Educación: CV. Inglés intermedio: actualización indicada por Luiggi.
// LinkedIn muestra 2022-2027; se conservan las fechas más precisas del CV.
export const education = {
  degree: "Ingeniería de Sistemas",
  institution: "Universidad Nacional de Trujillo",
  period: "Feb 2022 - Dic 2026",
  logo: "/images/education/unt.webp",
};

export const languages = {
  name: "Inglés",
  level: "Intermedio",
  institution: "Centro de Idiomas de la Universidad Nacional de Trujillo",
  logo: "/images/education/cidunt.webp",
};

type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  dateLabel: string;
  duration?: string;
  credentialId?: string;
  logo?: string;
  image?: { src: string; width: number; height: number };
  pdfUrl?: string;
};

// DataCamp: datos indicados por Luiggi. Otras dos credenciales: vista pública de
// https://pe.linkedin.com/in/luiggi-rosas consultada el 14 de noviembre de 2026.
export const certifications: Certification[] = [
  {
    id: "datacamp-intermediate-git",
    image: { src: "/images/certificates/datacamp-intermediate-git.png", width: 1600, height: 923 },
    pdfUrl: "/documents/certificates/datacamp-intermediate-git.pdf",
    title: "Intermediate Git",
    issuer: "DataCamp",
    date: "2026-11-08",
    dateLabel: "8 nov 2026",
    duration: "2 horas",
  },
  {
    id: "impact-bootcamp-2026",
    image: { src: "/images/certificates/impact-pre-accelerator.jpg", width: 1286, height: 909 },
    title: "Pre-Acelerator IMPACT BOOTCAMP 2026",
    issuer: "Impact Startup Competition®",
    date: "2026-04",
    dateLabel: "Abr 2026",
    credentialId: "12805b6eee11cd78",
  },
  {
    id: "incubunt-voluntario",
    image: { src: "/images/certificates/incubunt-voluntariado.jpg", width: 1944, height: 1374 },
    title: "Voluntario destacado",
    issuer: "INCUBUNT Centro Universitario Innovación y Formación Empresarial",
    date: "2026-03",
    dateLabel: "Mar 2026",
  },
];

// Metadatos proporcionados por el autor. Se eliminan los colaboradores duplicados.
export const publications = [
  {
    doi: "10.26495/8v58r307",
    title: "Detección de Vulnerabilidades en Código Fuente Mediante Inteligencia Artificial: Enfoque Híbrido con CodeBERT, Regex y Automatización",
    journal: "Ingeniería: ciencia, tecnología e innovación",
    date: "2026-11-09",
    dateLabel: "9 nov 2026",
    authors: ["Jefferson Miguel Peña Serrano", "Jonathan Orlando Rojas Reyes", "Luiggi Anthony Rosas Pérez", "Alberto Carlos Mendoza de los Santos"],
  },
  {
    doi: "10.48168/innosoft.s29.a237",
    title: "Desarrollo de la Inteligencia Artificial en las Grandes Empresas Tecnológicas: Una Revisión Sistemática",
    journal: "Innovación y Software",
    date: "2026-03-30",
    dateLabel: "30 mar 2026",
    authors: ["Erick Arnie Zavaleta Galarza", "Luiggi Anthony Rosas Pérez", "Marcelino Torres Villanueva"],
  },
  {
    doi: "10.48168/innosoft.s24.a298",
    title: "Aplicación web para clasificar y asistir en la gestión de incidentes usando LLMs de OpenAI",
    journal: "Innovación y Software",
    date: "2025-09-30",
    dateLabel: "30 sep 2025",
    authors: ["Diego Sebastián Vásquez Jaramillo", "Luis Daniel Zavaleta Mego", "Luiggi Anthony Rosas Pérez", "Alberto Carlos Mendoza de los Santos"],
  },
];
