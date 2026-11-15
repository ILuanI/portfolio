"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import Image from "next/image";
import styles from "./certificate-preview.module.css";

type CertificatePreviewProps = {
  title: string;
  image: { src: string; width: number; height: number };
  pdfUrl?: string;
};

export default function CertificatePreview({
  title,
  image,
  pdfUrl,
}: CertificatePreviewProps) {
  const t = useTranslations("UI");
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className={styles.preview}
        aria-label={t("enlargeCertificate", { title })}
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          sizes="160px"
          className={styles.thumbnail}
        />
        <span className={styles.eye} aria-hidden="true">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={t("certificate", { title })}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className={styles.viewer}>
          <header className={styles.header}>
            <p>{title}</p>
            <form method="dialog">
              <button
                type="submit"
                className={styles.close}
                aria-label={t("closeCertificate")}
                autoFocus
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </form>
          </header>
          <Image
            src={image.src}
            alt={t("certificateAlt", { title })}
            width={image.width}
            height={image.height}
            sizes="(max-width: 767px) 95vw, 1100px"
            className={styles.fullImage}
          />
          <a
            href={pdfUrl ?? image.src}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.original}
          >
            {pdfUrl ? t("originalPdf") : t("originalImage")}{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </dialog>
    </>
  );
}
