import { useTranslations } from "next-intl";
import type { getProfile } from "@/i18n/content";
import { socials } from "@/data/socials";
import styles from "./more-about.module.css";
import ProfileMark from "./profile-mark";
import CertificatePreview from "./certificate-preview";

function ExternalArrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function MoreAbout({
  profile,
}: {
  profile: Awaited<ReturnType<typeof getProfile>>;
}) {
  const { certifications, education, languages, publications } = profile;
  const t = useTranslations("UI");
  return (
    <div id="sobre-mi" className={styles.section}>
      <div className="section-heading-row">
        <div>
          <h1 id="about-title" className="section-title">
            {t("about")}
          </h1>
          <p className="section-description">{t("aboutIntro")}</p>
        </div>
        <a
          className={styles.profileLink}
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("linkedin")}
          <ExternalArrow />
        </a>
      </div>
      <nav className={styles.sectionNav} aria-label={t("aboutSections")}>
        <a href="#educacion">{t("education")}</a>
        <a href="#certificaciones">{t("certifications")}</a>
        <a href="#publicaciones">{t("publications")}</a>
      </nav>

      <div className={styles.formation}>
        <section
          id="educacion"
          aria-labelledby="education-title"
          className={styles.education}
        >
          <h2 id="education-title" className={styles.groupTitle}>
            {t("education")}
          </h2>
          <div className={styles.studyGrid}>
            <article className={styles.study}>
              <ProfileMark
                logo={education.logo}
                kind="education"
                className={styles.logoSlot}
              />
              <div>
                <p className={styles.meta}>{education.period}</p>
                <h3>{education.degree}</h3>
                <p>{education.institution}</p>
              </div>
            </article>
            <article className={styles.study}>
              <ProfileMark
                logo={languages.logo}
                kind="language"
                className={styles.logoSlot}
              />
              <div>
                <h3>
                  {languages.name}{" "}
                  <span className={styles.level}>{languages.level}</span>
                </h3>
                <p>{languages.institution}</p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="certificaciones"
          aria-labelledby="certifications-title"
          className={styles.certifications}
        >
          <h2 id="certifications-title" className={styles.groupTitle}>
            {t("certifications")}
          </h2>
          <ul className={styles.credentialList}>
            {certifications.map((certificate) => (
              <li key={certificate.id}>
                <article className={styles.credential}>
                  <ProfileMark
                    logo={certificate.logo}
                    kind="certificate"
                    className={styles.logoSlot}
                  />
                  <div>
                    <p className={styles.meta}>
                      <time dateTime={certificate.date}>
                        {certificate.dateLabel}
                      </time>
                      {certificate.duration && ` · ${certificate.duration}`}
                    </p>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                    {certificate.credentialId && (
                      <p className={styles.credentialId}>
                        ID: {certificate.credentialId}
                      </p>
                    )}
                    {certificate.image && (
                      <CertificatePreview
                        title={certificate.title}
                        image={certificate.image}
                        pdfUrl={certificate.pdfUrl}
                      />
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        id="publicaciones"
        aria-labelledby="publications-title"
        className={styles.research}
      >
        <div className={styles.researchHeading}>
          <h2 id="publications-title" className={styles.groupTitle}>
            {t("publications")}
          </h2>
        </div>
        <ul role="list" className={styles.publicationList}>
          {publications.map((publication) => (
            <li key={publication.doi}>
              <article className={styles.publication}>
                <ProfileMark
                  kind="publication"
                  className={styles.publicationIcon}
                />
                <div className={styles.publicationCopy}>
                  <div className={styles.publicationDate}>
                    <time dateTime={publication.date}>
                      {publication.dateLabel}
                    </time>
                    <span>{t("journalArticle")}</span>
                  </div>
                  <p className={styles.journal}>{publication.journal}</p>
                  <h3>
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {publication.title}
                    </a>
                  </h3>
                  <p className={styles.authors}>
                    {publication.authors.map((author, index) => (
                      <span key={author}>
                        {index > 0 && "; "}
                        {author === "Luiggi Anthony Rosas Pérez" ? (
                          <strong>{author}</strong>
                        ) : (
                          author
                        )}
                      </span>
                    ))}
                  </p>
                  <a
                    className={styles.doi}
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOI: {publication.doi}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
