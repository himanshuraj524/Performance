import { Hero } from "@/components/home/hero";
import { SiteHeader } from "@/components/layout/site-header";
import { LeadProject } from "@/components/work/lead-project";
import { ProjectGallery } from "@/components/work/project-gallery";
import { EditorialStatement } from "@/components/home/editorial-statement";
import { LabSection } from "@/components/home/lab-section";
import { Capabilities } from "@/components/home/capabilities";
import { ExperienceAbout } from "@/components/home/experience-about";
import { ContactFooter } from "@/components/home/contact-footer";

export default function HomePage() {
  return (
    <main id="top">
      <SiteHeader />
      <Hero />
      <LeadProject />
      <ProjectGallery />
      <EditorialStatement />
      <LabSection />
      <Capabilities />
      <ExperienceAbout />
      <ContactFooter />
    </main>
  );
}
