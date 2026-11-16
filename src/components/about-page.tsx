import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "next-intl";
import { getProfile } from "@/i18n/content";
import Navbar from "@/components/navbar";
import MoreAbout from "@/components/more-about";
import Footer from "@/components/footer";
import ScrollReveals from "@/components/scroll-reveals";

export default async function AboutPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations("UI");
  const profile = await getProfile();
  return (
    <div className="portfolio-shell flex flex-1 flex-col">
      <ScrollReveals />
      <Navbar page="about" />
      <main className="portfolio-main about-main">
        <Link
          href={{ pathname: "/", hash: "presentacion" }}
          className="about-back"
        >
          <span aria-hidden="true">←</span> {t("back")}
        </Link>
        <MoreAbout profile={profile} />
      </main>
      <Footer />
    </div>
  );
}
