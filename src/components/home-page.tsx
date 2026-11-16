import Navbar from "@/components/navbar";
import Presentation from "@/components/presentation";
import ExperienceTimeline from "@/components/experience-timeline";
import { getExperiences, getProjects } from "@/i18n/content";
import ProjectGallery from "@/components/project-gallery";

import ContactCta from "@/components/contact-cta";
import { contact } from "@/data/contact";
import Footer from "@/components/footer";
import ConstellationTrail from "@/components/constellation-trail";
import ScrollReveals from "@/components/scroll-reveals";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "next-intl";

export default async function HomePage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const [experiences, projects] = await Promise.all([
    getExperiences(),
    getProjects(),
  ]);
  return (
    <div className="portfolio-shell flex flex-1 flex-col">
      <ScrollReveals />
      <Navbar />
      <main className="portfolio-main">
        <ConstellationTrail />
        <Presentation />
        <ExperienceTimeline experiences={experiences} />
        <ProjectGallery projects={projects} />
        <ContactCta {...contact} />
      </main>
      <Footer />
    </div>
  );
}
