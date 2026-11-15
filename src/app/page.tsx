import Navbar from "@/components/navbar";
import Presentation from "@/components/presentation";
import ExperienceTimeline from "@/components/experience-timeline";
import { experiences } from "@/data/experiences";
import ProjectGallery from "@/components/project-gallery";
import { projects } from "@/data/projects";
import ContactCta from "@/components/contact-cta";
import { contact } from "@/data/contact";
import Footer from "@/components/footer";
import ConstellationTrail from "@/components/constellation-trail";
import ScrollReveals from "@/components/scroll-reveals";

export default function Home() {
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
