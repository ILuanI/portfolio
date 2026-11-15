"use client";

import { useState } from "react";
import Image from "next/image";
import type { Experience } from "@/data/experiences";

const svgProps = {
  width: 20, height: 20, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.7,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

function BuildingIcon() {
  return (
    <svg {...svgProps}>
      <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M3 21h18M10 21v-4h4v4M9 7h.01M15 7h.01M9 11h.01M15 11h.01" />
    </svg>
  );
}

function ArrowIcon({ back = false }: { back?: boolean }) {
  return <svg {...svgProps}><path d={back ? "m14 6-6 6 6 6M8 12h12" : "M4 12h16m-6-6 6 6-6 6"} /></svg>;
}

const technologyColors: Record<string, string> = {
  Laravel: "text-red-400", React: "text-cyan-400", "Inertia.js": "text-sky-400",
  MySQL: "text-teal-400", PHP: "text-violet-400", Git: "text-orange-400",
};

function ExperienceDetails({ experience }: { experience: Experience }) {
  return (
    <div className="experience-details">
      <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base">{experience.description}</p>

      {!!experience.responsibilities?.length && (
        <div className="mt-6">
          <h4 className="font-medium text-white">Responsabilidades principales</h4>
          <ul className="mt-4 space-y-3">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-white/60">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent text-background">
                  <svg {...svgProps} width={12} height={12} strokeWidth={2.5}><path d="m6 12 4 4 8-8" /></svg>
                </span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!!experience.technologies?.length && (
        <div className="mt-7 border-t border-white/10 pt-5">
          <h4 className="text-sm font-medium text-white">Tecnologías</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <li key={technology} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/3 px-3 py-2 text-sm text-white/70">
                <span aria-hidden="true" className={`font-mono text-base font-semibold ${technologyColors[technology] ?? "text-accent"}`}>
                  {technology === "PHP" ? "php" : technology === "React" ? "⚛" : technology === "Git" ? "◇" : technology === "Inertia.js" ? "~" : technology.slice(0, 1)}
                </span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

function CompanyMark({ experience }: { experience: Experience }) {
  return <span className={`company-mark${experience.logo ? " has-logo" : ""}`}>
    {experience.logo ? <Image src={experience.logo} alt="" fill sizes="48px" className="object-contain" /> : <BuildingIcon />}
  </span>;
}

type ExperienceTimelineProps = { experiences: Experience[] };

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [selectedId, setSelectedId] = useState<string | null>(experiences[0]?.id ?? null);
  const [showComplete, setShowComplete] = useState(false);

  return (
    <section id="experiencia" aria-labelledby="experience-title" className="journey-section">
      <div className="section-heading-row">
        <div>
          <h2 id="experience-title" className="section-title">EXPERIENCIA</h2>
          <p className="section-description">Las experiencias que dan forma a mi manera de construir.</p>
        </div>
        {!!experiences.length && <button type="button" aria-pressed={showComplete} aria-controls="experience-content" onClick={() => setShowComplete(!showComplete)} className="journey-toggle group">
          <svg {...svgProps}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
          {showComplete ? "Ver por etapas" : "Ver recorrido completo"}
          <span className="transition-transform duration-[180ms] group-hover:translate-x-1 motion-reduce:transform-none"><ArrowIcon back={showComplete} /></span>
        </button>}
      </div>
      <ol id="experience-content" className="experience-list">
        {experiences.map((experience) => {
          const active = showComplete || experience.id === selectedId;
          return <li key={experience.id} className={`experience-item ${active ? "is-active" : ""}`}>
            <span className="timeline-node" aria-hidden="true" />
            <article className="experience-card">
              <h3>
                <button type="button" id={`experience-trigger-${experience.id}`} aria-expanded={active} aria-controls={`experience-panel-${experience.id}`} onClick={() => { setShowComplete(false); setSelectedId(active ? null : experience.id); }} className="experience-summary group">
                  <CompanyMark experience={experience} />
                  <span className="experience-summary-copy">
                    <span className="experience-period">{experience.period}{experience.location && ` · ${experience.location}`}</span>
                    <span className="experience-company">{experience.company}</span>
                    <span className="experience-role">{experience.role}</span>
                  </span>
                  <span className="experience-expand"><span>{active ? "Cerrar" : "Ver detalles"}</span><svg {...svgProps} className="experience-chevron"><path d="m8 10 4 4 4-4" /></svg></span>
                </button>
              </h3>
              <div id={`experience-panel-${experience.id}`} role="region" aria-labelledby={`experience-trigger-${experience.id}`} hidden={!active}>
                {active && <ExperienceDetails experience={experience} />}
              </div>
            </article>
          </li>;
        })}
      </ol>
      {!experiences.length && <p className="section-description">El recorrido profesional estará disponible próximamente.</p>}
    </section>
  );
}
