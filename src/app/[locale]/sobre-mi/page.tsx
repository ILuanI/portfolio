import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { getProfile } from "@/i18n/content";
import Navbar from "@/components/navbar";
import MoreAbout from "@/components/more-about";
import Footer from "@/components/footer";
import ScrollReveals from "@/components/scroll-reveals";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return { title: t("aboutTitle"), description: t("aboutDescription") };
}

export default async function AboutPage() {
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
