import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { Locale } from "next-intl";
import ThemeProvider from "@/components/theme-provider";
import "@/app/globals.css";
import "@/styles/layout.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  locale,
}: { children: React.ReactNode; locale: Locale }) {
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  return (
    <html
      lang={locale === "es" ? "es-PE" : "en"}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider>
          <NextIntlClientProvider
            locale={locale}
            messages={{ UI: messages.UI, Controls: messages.Controls }}
          >
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
