"use client";

import StatusPage from "@/components/status-page";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

export default function GlobalError({ retry }: { error: unknown; retry: () => void }) {
  return (
    <html lang="es-PE" suppressHydrationWarning>
      <body><ThemeProvider><StatusPage kind="maintenance" onRetry={retry} /></ThemeProvider></body>
    </html>
  );
}
