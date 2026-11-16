"use client";

import StatusPage from "@/components/status-page";

export default function ErrorPage({ retry }: { error: unknown; retry: () => void }) {
  return <StatusPage kind="maintenance" locale="es" onRetry={retry} />;
}
