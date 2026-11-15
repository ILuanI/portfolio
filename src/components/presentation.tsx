import Image from "next/image";
import { contact } from "@/data/contact";
import CelestialArt from "@/components/celestial-art";

const buttonClasses =
  "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 text-sm font-medium transition-colors duration-[180ms] ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export default function Presentation() {
  return (
    <section
      id="presentacion"
      aria-labelledby="presentation-title"
      className="hero-section"
    >
      <div className="hero-copy">
        <p className="hero-name">Luiggi Rosas</p>
        <h1
          id="presentation-title"
          className="hero-title"
        >
          INGENIERO<br /><span>DE SISTEMAS</span>
        </h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-description">
          Mi enfoque combina pensamiento analítico y creatividad para transformar
          ideas en soluciones tecnológicas útiles.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#contacto"
            className={`${buttonClasses} primary-action cursor-pointer border-accent bg-accent text-background hover:border-accent/80 hover:bg-accent/80 focus-visible:border-accent/80 focus-visible:bg-accent/80`}
          >
            Contactar
            <svg
              {...iconProps}
              className="transition-transform duration-[180ms] ease-out group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:translate-x-0 motion-reduce:transition-none"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
            </svg>
          </a>
          {contact.cvUrl ? <a
            href={contact.cvUrl}
            download
            className={`${buttonClasses} cursor-pointer border-white/15 bg-surface text-white hover:border-accent/50 hover:bg-accent/10 hover:text-accent focus-visible:border-accent/50 focus-visible:bg-accent/10 focus-visible:text-accent`}
          >
            Descargar CV
            <svg
              {...iconProps}
              className="transition-transform duration-[180ms] ease-out group-hover:translate-y-0.5 group-focus-visible:translate-y-0.5 motion-reduce:translate-y-0 motion-reduce:transition-none"
            >
              <path d="M12 3v12m-5-5 5 5 5-5M5 16v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" />
            </svg>
          </a> : <a href="#experiencia" className={`${buttonClasses} border-white/15 bg-surface text-white hover:border-accent/50 hover:bg-accent/10 hover:text-accent`}>
            Recorrer trayectoria
            <svg {...iconProps} className="transition-transform duration-[180ms] group-hover:translate-y-0.5 motion-reduce:transform-none"><path d="M12 3v12m-5-5 5 5 5-5M5 16v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" /></svg>
          </a>}
        </div>
      </div>

      <div className="portrait-composition">
        <CelestialArt variant="observatory" />
        <div className="portrait-orbit orbit-one" aria-hidden="true" />
        <div className="portrait-orbit orbit-two" aria-hidden="true" />
        <span className="portrait-star" aria-hidden="true">✦</span>
        <span className="portrait-small-star" aria-hidden="true">✦</span>
        <div className="portrait-mask">
        <Image
          src="/images/1788744215662.jpg"
          alt="Retrato de Luiggi Rosas"
          width={400}
          height={400}
          sizes="(min-width: 1024px) 350px, (min-width: 768px) 280px, 230px"
          preload
          className="portrait-image"
        />
        </div>
      </div>
    </section>
  );
}
