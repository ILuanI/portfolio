import { locale as getRootLocale } from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const selected = locale ?? (await getRootLocale());
  if (!hasLocale(routing.locales, selected)) notFound();
  return {
    locale: selected,
    timeZone: "America/Lima",
    messages: (await import(`../../messages/${selected}.json`)).default,
  };
});
