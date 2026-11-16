import AboutPage from "@/components/about-page";
import { getPageMetadata } from "@/i18n/metadata";

export const generateMetadata = () => getPageMetadata("en", "about");

export default function Page() {
  return <AboutPage locale="en" />;
}
