"use client";

import { useSyncExternalStore } from "react";
import { Status as spanish } from "../../messages/es.json";
import { Status as english } from "../../messages/en.json";
import { contact } from "@/data/contact";
import styles from "./status-page.module.css";

type StatusPageProps = {
  kind: "not-found" | "maintenance";
  locale?: "es" | "en";
  onRetry?: () => void;
};

const subscribe = () => () => {};

// Independent of translation providers so it can also render if a root layout fails.
export default function StatusPage({ kind, locale = "es", onRetry }: StatusPageProps) {
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  const copy = locale === "en" ? english : spanish;
  const home = locale === "en" ? "/en/" : "/";
  const maintenance = kind === "maintenance";
  return (
    <main className={styles.screen}>
      <a className={styles.signature} href={home} aria-label={`Luiggi Rosas · ${copy.home}`}>LR<span aria-hidden="true">✦</span></a>
      <div className={styles.content}>
        <div className={styles.illustration} aria-hidden="true">
          <svg className={styles.orbit} viewBox="0 0 240 180" fill="none"><ellipse cx="120" cy="90" rx="109" ry="56" stroke="currentColor" strokeDasharray="3 8" transform="rotate(-20 120 90)" /><path d="M189 27v20m-10-10h20M32 119v12m-6-6h12" stroke="currentColor" strokeWidth="2" /><circle cx="211" cy="111" r="4" fill="currentColor" /></svg>
          {maintenance ? <svg className={styles.tool} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M30 8a12 12 0 0 0-14 15L6 33a6 6 0 0 0 9 9l10-10A12 12 0 0 0 40 18l-8 8-10-10 8-8Z" /><path d="m11 37 1-1" /></svg> : <span className={styles.code}>404</span>}
        </div>
        {maintenance && <p className={styles.label}>{copy.maintenanceLabel}</p>}
        <h1>{maintenance ? copy.maintenanceTitle : copy.notFoundTitle}</h1>
        <p className={styles.description}>{maintenance ? copy.maintenanceDescription : copy.notFoundDescription}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={home}>{copy.home}<span aria-hidden="true">↗</span></a>
          {maintenance && <button className={styles.secondary} type="button" disabled={!ready} onClick={onRetry ?? (() => window.location.reload())}>{copy.retry}<span aria-hidden="true">↻</span></button>}
        </div>
        {maintenance && <p className={styles.contact}>{copy.contactHint} <a href={`mailto:${contact.email}`}>{copy.contact}</a></p>}
      </div>
    </main>
  );
}
