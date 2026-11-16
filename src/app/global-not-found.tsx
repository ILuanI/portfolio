import type { Metadata } from "next";
import StatusPage from "@/components/status-page";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 · Página no encontrada | Luiggi Rosas",
};

export default function GlobalNotFound() {
  return (
    <html lang="es-PE" suppressHydrationWarning>
      <body><ThemeProvider><StatusPage kind="not-found" /></ThemeProvider></body>
    </html>
  );
}
