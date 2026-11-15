import "server-only";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import {
  education,
  languages,
  certifications,
  publications,
} from "@/data/professional-profile";

function formatDate(value: string, locale: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "es" ? "es-PE" : "en", {
    year: "numeric",
    month: "short",
    ...(day ? { day: "numeric" as const } : {}),
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day ?? 1)));
}

function formatPeriod(period: { start: string; end?: string }, locale: string) {
  return (
    formatDate(period.start, locale) +
    (period.end ? ` – ${formatDate(period.end, locale)}` : "")
  );
}

export async function getExperiences() {
  const locale = await getLocale();
  const copy: Record<
    string,
    {
      role: string;
      description: string;
      responsibilities: string[];
      location?: string;
    }
  > = (await getMessages()).Content.experiences;
  return experiences.map((experience) => ({
    ...experience,
    ...copy[experience.id],
    period: formatPeriod(experience.period, locale),
  }));
}

export type LocalizedExperience = Awaited<
  ReturnType<typeof getExperiences>
>[number];

export async function getProjects() {
  const t = await getTranslations("Content");
  const copy: Record<
    string,
    { title: string; description: string; category: string }
  > = (await getMessages()).Content.projects;
  return projects.map((project) => ({
    ...project,
    ...copy[project.id],
    technologies: project.technologies.map((name) =>
      name === "Roles y permisos" ? t("roles") : name,
    ),
  }));
}

export async function getProfile() {
  const t = await getTranslations("Content.profile");
  const locale = await getLocale();
  return {
    education: {
      ...education,
      degree: t("degree"),
      period: formatPeriod(education.period, locale),
    },
    languages: { ...languages, name: t("language"), level: t("level") },
    certifications: certifications.map((item) => ({
      ...item,
      dateLabel: formatDate(item.date, locale),
      duration: item.duration
        ? t("hours", { count: item.duration })
        : undefined,
    })),
    publications: publications.map((item) => ({
      ...item,
      dateLabel: formatDate(item.date, locale),
    })),
  };
}
