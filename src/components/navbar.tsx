"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["Presentación", "Experiencia", "Proyectos", "Más sobre mí", "Contacto"];
const sectionIds = ["presentacion", "experiencia", "proyectos", "sobre-mi", "contacto"];

const controlClasses =
  "group inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full transition-colors duration-[180ms] ease-out hover:bg-accent/10 hover:text-accent focus-visible:bg-accent/10 focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none";

const scaleClasses =
  "transition-transform duration-[180ms] ease-out group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:scale-100 motion-reduce:transition-none";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export default function Navbar({ page = "home" }: { page?: "home" | "about" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("presentacion");
  const currentSection = page === "about" ? "sobre-mi" : activeSection;
  const sectionHref = (id: string) => id === "sobre-mi" ? "/sobre-mi" : `${page === "about" ? "/" : ""}#${id}`;

  useEffect(() => {
    if (page === "about") return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: "-10% 0px -65% 0px", threshold: 0 });
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [page]);
  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus();
      }
    }}>
      <nav
        aria-label="Navegación principal"
        className="site-nav"
      >
        <button type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className={`${controlClasses} lg:hidden`}>
          <svg {...iconProps} className={scaleClasses}>
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map((section, index) => (
            <li key={section}>
              <Link
                href={sectionHref(sectionIds[index])}
                aria-current={currentSection === sectionIds[index] ? (page === "about" ? "page" : "location") : undefined}
                className={`${controlClasses} relative whitespace-nowrap px-3 text-sm font-medium lg:px-4 ${currentSection === sectionIds[index] ? "bg-accent/10 text-accent" : "text-white"}`}
              >
                <span className="relative">
                  {section}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-accent transition-transform duration-[180ms] ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-white/10" />

        <div className="flex items-center gap-1">
          <button type="button" aria-label="Cambiar a modo claro" className={controlClasses}>
            <svg
              {...iconProps}
              className="transition-transform duration-[180ms] ease-out group-hover:rotate-45 group-focus-visible:rotate-45 motion-reduce:rotate-0 motion-reduce:transition-none"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
            </svg>
          </button>
          <button type="button" aria-label="Cambiar idioma a inglés" className={controlClasses}>
            <svg {...iconProps} className={scaleClasses}>
              <path d="M3 5h12M9 3v2M5 5c.8 4.5 3.5 7.8 8 10M13 5c-.8 4.5-3.5 7.8-8 10M13 21l4-10 4 10M14.2 18h5.6" />
            </svg>
          </button>
        </div>
        <Link href={sectionHref("contacto")} className="nav-contact primary-action">Contactar <span aria-hidden="true">↗</span></Link>
      </nav>
      <div id="mobile-navigation" className="mobile-navigation" hidden={!menuOpen}>
        {sections.map((section, index) => <Link key={section} href={sectionHref(sectionIds[index])} aria-current={currentSection === sectionIds[index] ? (page === "about" ? "page" : "location") : undefined} onClick={() => setMenuOpen(false)}>{section}<span aria-hidden="true">↗</span></Link>)}
      </div>
    </header>
  );
}
