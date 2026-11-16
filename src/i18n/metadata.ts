import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getPathname } from "./navigation";

export async function getPageMetadata(locale: Locale, page: "home" | "about"): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const href = page === "home" ? "/" : "/sobre-mi";
  return {
    metadataBase: new URL("https://luant.me"),
    title: t(page === "home" ? "homeTitle" : "aboutTitle"),
    description: t(page === "home" ? "homeDescription" : "aboutDescription"),
    alternates: {
      canonical: getPathname({ locale, href }),
      languages: {
        es: getPathname({ locale: "es", href }),
        en: getPathname({ locale: "en", href }),
      },
    },
  };
}
