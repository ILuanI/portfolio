import { useTranslations } from "next-intl";
import { socials } from "@/data/socials";
import { SiInstagram } from "react-icons/si";

const iconClasses =
  "inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors duration-[180ms] hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none";

export default function Footer() {
  const t = useTranslations("UI");
  const links = [
    {
      name: t("instagramProfile"),
      url: socials.instagram,
      icon: <SiInstagram size={19} aria-hidden="true" />,
    },
    {
      name: t("githubProfile"),
      url: socials.github,
      icon: (
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.75 10.75 0 0 1 5.62 0c2.15-1.46 3.08-1.15 3.08-1.15.62 1.55.23 2.69.12 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
        </svg>
      ),
    },
    {
      name: t("linkedinProfile"),
      url: socials.linkedin,
      icon: (
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8v-4.64c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.77 1.2-1.77 2.45v4.72H9.54V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.54 1.98 3.54 4.55v5.23Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="mx-auto w-full max-w-4xl px-6">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-foreground/10 py-6 sm:flex-row sm:gap-4">
        <p className="text-sm text-muted">{t("madeBy")}</p>
        <div className="flex items-center gap-1">
          {links.map((link) =>
            link.url ? (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} (${t("newTab")})`}
                title={link.name}
                className={iconClasses}
              >
                {link.icon}
              </a>
            ) : (
              <span key={link.name} title={link.name} className={iconClasses}>
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </span>
            ),
          )}
          <span
            title={t("peru")}
            className="inline-flex size-11 items-center justify-center"
          >
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              aria-hidden="true"
              className="rounded-xs opacity-70"
            >
              <path fill="#D91023" d="M0 0h7v15H0zM14 0h7v15h-7z" />
              <path fill="#fff" d="M7 0h7v15H7z" />
            </svg>
            <span className="sr-only">{t("peru")}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
