import Image from "next/image";
import CelestialArt from "@/components/celestial-art";
import type { Project } from "@/data/projects";

const backgroundClasses: Record<Project["preview"], string> = {
  dashboard: "bg-linear-to-br from-[#24382c] via-[#17241d] to-[#0e1813]",
  store: "bg-linear-to-br from-[#403626] to-[#1c1913]",
  planner: "bg-linear-to-br from-[#27343e] to-[#111b23]",
  portfolio: "bg-linear-to-r from-[#222b16] via-[#172010] to-[#10150d]",
};

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.75 10.75 0 0 1 5.62 0c2.15-1.46 3.08-1.15 3.08-1.15.62 1.55.23 2.69.12 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return <Image src={project.image} alt="" fill sizes="(min-width: 896px) 848px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105 motion-reduce:scale-100 motion-reduce:transition-none" />;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:scale-100 motion-reduce:transition-none">
      {project.preview === "dashboard" ? (
        <div className="absolute top-10 right-7 left-10 rotate-[-6deg] rounded-xl bg-black/35 p-5 shadow-2xl sm:top-12 sm:right-10 sm:left-12">
          <div className="mb-5 flex gap-1.5"><span className="size-2 rounded-full bg-accent/60" /><span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/10" /></div>
          <div className="flex gap-4">
            <div className="w-8 shrink-0 space-y-4"><div className="h-6 rounded-lg bg-accent/15" /><div className="h-1 rounded bg-white/15" /><div className="h-1 rounded bg-white/15" /></div>
            <div className="flex-1 space-y-4"><div className="h-2 w-1/2 rounded bg-white/40" /><div className="grid grid-cols-3 gap-2">{[0, 1, 2].map((n) => <div key={n} className="h-12 rounded-lg bg-accent/10 p-3"><div className="h-2 w-2/3 rounded bg-accent/50" /></div>)}</div><div className="space-y-3 rounded-lg bg-white/5 p-4">{[0, 1, 2].map((n) => <div key={n} className="h-1 w-4/5 rounded bg-white/15" />)}</div></div>
          </div>
        </div>
      ) : project.preview === "store" ? (
        <div className="absolute inset-x-8 top-5 flex items-center justify-center gap-4">
          <div className="h-24 w-16 -rotate-12 rounded-2xl bg-[#b49a6b]/35 shadow-2xl" />
          <div className="h-28 w-20 rotate-12 rounded-2xl bg-[#d8c59f]/45 shadow-2xl" />
        </div>
      ) : project.preview === "planner" ? (
        <div className="absolute inset-x-6 top-5 grid rotate-[-5deg] grid-cols-3 gap-2">
          {[0, 1, 2].map((n) => <div key={n} className="space-y-2 rounded-lg bg-white/5 p-2"><div className="h-1 w-2/3 rounded bg-sky-200/30" />{[0, 1].map((m) => <div key={m} className="space-y-2 rounded bg-black/25 p-2"><div className="h-1 rounded bg-white/20" /><div className="h-1 w-2/3 rounded bg-white/10" /><div className="h-1 w-1/3 rounded bg-sky-200/30" /></div>)}</div>)}
        </div>
      ) : (
        <div className="absolute -top-8 right-8 flex items-center gap-6 opacity-60 sm:right-16">
          <div className="size-40 rounded-full bg-accent/10 sm:size-52" />
          <div className="size-28 rotate-45 rounded-3xl bg-accent/15 sm:size-36" />
        </div>
      )}
    </div>
  );
}

function ProjectAction({ project }: { project: Project }) {
  if (!project.action.url) return null;
  const content = <>{project.action.type === "github" && <GithubIcon />}{project.action.type === "github" ? "Ver en GitHub" : "Ver demo"}<span aria-hidden="true">↗</span></>;
  return project.action.url
    ? <a href={project.action.url} target="_blank" rel="noopener noreferrer" className="project-action" aria-label={`${project.title}: ${project.action.type === "github" ? "GitHub" : "demo"} (abre en otra pestaña)`}>{content}</a>
    : <span className="project-action project-pending">{project.action.type === "github" && <GithubIcon />}Próximamente</span>;
}

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [featured, ...others] = projects;
  return (
    <section id="proyectos" aria-labelledby="projects-title" className="projects-section">
      <CelestialArt variant="research" />
      <div className="section-heading-row">
        <div><h2 id="projects-title" className="section-title">PROYECTOS</h2></div>
      </div>
      {featured && <article className="featured-project group">
        <div className={`featured-visual ${backgroundClasses[featured.preview]}`}>
          <ProjectVisual project={featured} />
          <div className="project-visual-caption"><span>01 / {featured.title}</span><span aria-hidden="true">✦</span></div>
        </div>
        <div className="featured-project-copy">
          <p className="section-kicker">Proyecto destacado</p>
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
          <ul className="project-technologies" aria-label="Tecnologías">{featured.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          <ProjectAction project={featured} />
        </div>
      </article>}
      <ul className="project-grid">
        {others.map((project) => <li key={project.id}>
          <article className="project-card group">
            <div className="project-card-heading"><span className="section-kicker">{project.category}</span></div>
            <div className={`project-card-preview ${backgroundClasses[project.preview]}`}><ProjectVisual project={project} /></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-technologies" aria-label="Tecnologías">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            <ProjectAction project={project} />
          </article>
        </li>)}
      </ul>
    </section>
  );
}
