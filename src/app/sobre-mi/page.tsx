import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import MoreAbout from "@/components/more-about";
import Footer from "@/components/footer";
import ScrollReveals from "@/components/scroll-reveals";

export const metadata: Metadata = {
  title: "Más sobre mí | Luiggi Rosas",
  description: "Educación, idiomas, certificados y publicaciones científicas de Luiggi Rosas.",
};

export default function AboutPage() {
  return (
    <div className="portfolio-shell flex flex-1 flex-col">
      <ScrollReveals />
      <Navbar page="about" />
      <main className="portfolio-main about-main">
        <Link href="/#presentacion" className="about-back"><span aria-hidden="true">←</span> Volver al inicio</Link>
        <MoreAbout />
      </main>
      <Footer />
    </div>
  );
}
