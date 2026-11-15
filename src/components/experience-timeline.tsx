"use client";

import styles from "./experience-timeline.module.css";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import TechnologyIcon from "@/components/technology-icon";
import type { LocalizedExperience as Experience } from "@/i18n/content";

const svgProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
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
  return (
    <svg {...svgProps}>
      <path d={back ? "m14 6-6 6 6 6M8 12h12" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}

function ExperienceDetails({ experience }: { experience: Experience }) {
  const t = useTranslations("UI");
  return (
    <div className={`experience-details`}>
      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
        {experience.description}
      </p>

      {!!experience.responsibilities?.length && (
        <div className="mt-6">
          <h4 className="font-medium text-foreground">
            {t("responsibilities")}
          </h4>
          <ul className="mt-4 space-y-3">
            {experience.responsibilities.map((responsibility, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                  <svg {...svgProps} width={12} height={12} strokeWidth={2.5}>
                    <path d="m6 12 4 4 8-8" />
                  </svg>
                </span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!!experience.technologies?.length && (
        <div className="mt-7 border-t border-foreground/10 pt-5">
          <h4 className="text-sm font-medium text-foreground">
            {t("technologies")}
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <li
                key={technology}
                className="flex items-center gap-2 rounded-2xl border border-foreground/10 bg-foreground/3 px-3 py-2 text-sm text-muted"
              >
                <TechnologyIcon technology={technology} />
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
  return (
    <span className={`company-mark${experience.logo ? " has-logo" : ""}`}>
      {experience.logo ? (
        <Image
          src={experience.logo}
          alt=""
          fill
          sizes="48px"
          className="object-contain"
        />
      ) : (
        <BuildingIcon />
      )}
    </span>
  );
}

type ExperienceTimelineProps = { experiences: Experience[] };

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  const t = useTranslations("UI");
  const [selectedId, setSelectedId] = useState<string | null>(
    experiences[0]?.id ?? null,
  );
  const [showComplete, setShowComplete] = useState(false);

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className={`journey-section ${styles.root}`}
    >
      <div className="section-heading-row">
        <div>
          <h2 id="experience-title" className="section-title">
            {t("experienceTitle")}
          </h2>
          <p className="section-description">{t("experienceIntro")}</p>
        </div>
        {!!experiences.length && (
          <button
            type="button"
            aria-pressed={showComplete}
            aria-controls="experience-content"
            onClick={() => setShowComplete(!showComplete)}
            className="journey-toggle group"
          >
            <svg {...svgProps}>
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
            {showComplete ? t("stages") : t("fullJourney")}
            <span className="transition-transform duration-[180ms] group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowIcon back={showComplete} />
            </span>
          </button>
        )}
      </div>
      <ol id="experience-content" className="experience-list">
        {experiences.map((experience) => {
          const active = showComplete || experience.id === selectedId;
          return (
            <li
              key={experience.id}
              className={`experience-item ${active ? "is-active" : ""}`}
            >
              <span className="timeline-node" aria-hidden="true" />
              <article className="experience-card">
                <h3>
                  <button
                    type="button"
                    id={`experience-trigger-${experience.id}`}
                    aria-expanded={active}
                    aria-controls={`experience-panel-${experience.id}`}
                    onClick={() => {
                      setShowComplete(false);
                      setSelectedId(active ? null : experience.id);
                    }}
                    className="experience-summary group"
                  >
                    <CompanyMark experience={experience} />
                    <span className="experience-summary-copy">
                      <span className="experience-period">
                        {experience.period}
                        {experience.location && ` · ${experience.location}`}
                      </span>
                      <span className="experience-company">
                        {experience.company}
                      </span>
                      <span className="experience-role">{experience.role}</span>
                    </span>
                    <span className="experience-expand">
                      <span>{active ? t("close") : t("details")}</span>
                      <svg {...svgProps} className="experience-chevron">
                        <path d="m8 10 4 4 4-4" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`experience-panel-${experience.id}`}
                  role="region"
                  aria-labelledby={`experience-trigger-${experience.id}`}
                  hidden={!active}
                >
                  {active && <ExperienceDetails experience={experience} />}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
      {!experiences.length && (
        <p className="section-description">{t("emptyJourney")}</p>
      )}
    </section>
  );
}
