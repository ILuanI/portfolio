"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState, type FormEvent } from "react";
import CuriousCat from "@/components/curious-cat";
import {
  validateContactMessage,
  buildContactMailto,
} from "@/lib/contact-message";
import styles from "./contact-cta.module.css";

type ContactCtaProps = { email: string; cvUrl: string; delivery?: "mailto" };
const buttonClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-default disabled:opacity-40 motion-reduce:transition-none";
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

export default function ContactCta({
  email,
  cvUrl,
  delivery,
}: ContactCtaProps) {
  const t = useTranslations("UI");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const [formStatus, setFormStatus] = useState("");
  const [replyMethod, setReplyMethod] = useState<"email" | "phone">("email");

  useEffect(() => {
    if (copyStatus !== "copied") return;
    const timeout = setTimeout(() => setCopyStatus("idle"), 2500);
    return () => clearTimeout(timeout);
  }, [copyStatus]);

  async function copyEmail() {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || delivery !== "mailto") return;
    const data = new FormData(event.currentTarget);
    const sender = String(data.get("sender") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const error = validateContactMessage({ sender, phone, message });
    if (error) {
      setFormStatus(t(error));
      return;
    }
    const body =
      message +
      "\n\n" +
      (sender ? t("contactEmail") + sender + "\n" : "") +
      (phone ? t("contactPhone") + phone : "");
    window.location.href = buildContactMailto(email, t("subject"), body);
    setFormStatus(t("prepared"));
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className={`contact-section ${styles.root}`}
    >
      <div className="contact-heading">
        <CuriousCat />
        <p className="section-kicker">{t("direct")}</p>
        <h2 id="contact-title">
          {t("create")}
          <br />
          {t("together")}
        </h2>
        <p className="section-description">{t("contactIntro")}</p>
      </div>
      <div className="contact-layout">
        <div className="contact-actions">
          <button
            type="button"
            onClick={copyEmail}
            disabled={!email}
            className={
              buttonClasses +
              " cursor-pointer border border-foreground/15 bg-surface text-foreground enabled:hover:border-accent/50 enabled:hover:text-accent"
            }
          >
            <svg {...iconProps}>
              {copyStatus === "copied" ? (
                <path d="m5 12 4 4L19 6" />
              ) : (
                <>
                  <rect x="9" y="9" width="12" height="12" rx="2" />
                  <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
                </>
              )}
            </svg>
            {copyStatus === "copied" ? t("copied") : t("copy")}
          </button>
          {cvUrl ? (
            <a
              href={cvUrl}
              download
              className={
                buttonClasses +
                " bg-foreground/5 text-foreground hover:bg-foreground/10"
              }
            >
              <svg {...iconProps}>
                <path d="M12 3v12m-5-5 5 5 5-5M5 16v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" />
              </svg>
              {t("cv")}
            </a>
          ) : (
            <button
              type="button"
              disabled
              className={buttonClasses + " bg-foreground/5 text-foreground"}
            >
              <svg {...iconProps}>
                <path d="M12 3v12m-5-5 5 5 5-5M5 16v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" />
              </svg>
              {t("cv")}
            </button>
          )}
        </div>
        <p role="status" className="copy-status">
          {copyStatus === "error"
            ? t("copyError")
            : copyStatus === "copied"
              ? t("copySuccess")
              : ""}
        </p>
        <form
          onSubmit={prepareMessage}
          className={`contact-form`}
          aria-label={t("sendLabel")}
        >
          <fieldset className="reply-fieldset">
            <legend className="sr-only">{t("replyWhere")}</legend>
            <div
              className={`contact-methods ${replyMethod === "phone" ? "use-phone" : ""}`}
            >
              <label>
                <input
                  type="radio"
                  name="reply-method"
                  value="email"
                  checked={replyMethod === "email"}
                  onChange={() => {
                    setReplyMethod("email");
                    setFormStatus("");
                  }}
                />
                <svg {...iconProps}>
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
                {t("email")}
              </label>
              <label>
                <input
                  type="radio"
                  name="reply-method"
                  value="phone"
                  checked={replyMethod === "phone"}
                  onChange={() => {
                    setReplyMethod("phone");
                    setFormStatus("");
                  }}
                />
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#25d366]"
                  aria-hidden="true"
                >
                  <path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.3 23.5l6-1.6A11.8 11.8 0 0 0 20.5 3.5ZM12 21.3a9.7 9.7 0 0 1-4.9-1.4l-.4-.2-3.5.9.9-3.4-.2-.4A9.8 9.8 0 1 1 12 21.3Zm5.4-7.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2s-.7.9-.9 1c-.1.2-.3.2-.6.1-1.5-.8-2.5-1.4-3.5-3.1-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6l-.9-2c-.2-.5-.4-.4-.6-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3.1 4.8 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" />
                </svg>
                WhatsApp
              </label>
            </div>
            <div className="contact-field-window">
              <div
                className={`contact-field-slider ${replyMethod === "phone" ? "show-phone" : ""}`}
              >
                <div className="reply-panel" inert={replyMethod !== "email"}>
                  <div className="floating-field">
                    <input
                      id="contact-sender"
                      name="sender"
                      type="email"
                      autoComplete="email"
                      required={replyMethod === "email"}
                      disabled={replyMethod !== "email"}
                      maxLength={254}
                      placeholder={t("emailPlaceholder")}
                      className="contact-input"
                    />
                    <label htmlFor="contact-sender">{t("yourEmail")}</label>
                    <span className="field-focus-line" aria-hidden="true" />
                  </div>
                </div>
                <div className="reply-panel" inert={replyMethod !== "phone"}>
                  <div className="floating-field">
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required={replyMethod === "phone"}
                      disabled={replyMethod !== "phone"}
                      maxLength={25}
                      placeholder="+51 999 999 999"
                      className="contact-input"
                    />
                    <label htmlFor="contact-phone">{t("yourPhone")}</label>
                    <span className="field-focus-line" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="floating-field message-field">
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={3000}
              rows={3}
              placeholder={t("messagePlaceholder")}
              className="contact-input contact-textarea"
            />
            <label htmlFor="contact-message">{t("yourMessage")}</label>
            <span className="field-focus-line" aria-hidden="true" />
          </div>
          <button
            type="submit"
            disabled={!email || !delivery}
            className={
              buttonClasses +
              " primary-action w-full cursor-pointer bg-accent text-on-accent enabled:hover:bg-accent/80"
            }
          >
            <span>{t("send")}</span>
            <svg {...iconProps}>
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </button>
          <p
            role="status"
            aria-live="polite"
            className="text-sm leading-relaxed text-accent"
          >
            {formStatus}
          </p>
        </form>
      </div>
    </section>
  );
}
