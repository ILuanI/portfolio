import HomePage from "@/components/home-page";
import { getPageMetadata } from "@/i18n/metadata";

export const generateMetadata = () => getPageMetadata("es", "home");

export default function Page() {
  return <HomePage locale="es" />;
}
