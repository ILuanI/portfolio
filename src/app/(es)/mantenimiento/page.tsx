import type { Metadata } from "next";
import StatusPage from "@/components/status-page";

export const metadata: Metadata = {
  title: "Estamos en mantenimiento | Luiggi Rosas",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return <StatusPage kind="maintenance" locale="es" />;
}
