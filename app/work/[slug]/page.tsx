import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { SiteHeader } from "@/components/layout/site-header";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const description = `${project.description} Clearly labeled fictional portfolio concept.`;
  return {
    title: `${project.title} — Concept case study`,
    description,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: { title: `${project.title} — Concept case study`, description, url: `/work/${project.slug}/`, images: [] },
    twitter: { card: "summary", title: `${project.title} — Concept case study`, description, images: [] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  if (projectIndex < 0) notFound();
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="case-study" style={{ "--case-accent": project.accent } as React.CSSProperties}>
      <SiteHeader />

      <header className="case-hero shell">
        <p>{project.kicker}</p>
        <h1>{project.title}</h1>
        <div className="case-intro">
          <p>{project.description}</p>
          <dl>
            <div><dt>Year</dt><dd>{project.year}</dd></div>
            <div><dt>Client</dt><dd>{project.client}</dd></div>
            <div><dt>Role</dt><dd>{project.role.join(" / ")}</dd></div>
            <div><dt>Stack</dt><dd>{project.stack.join(" / ")}</dd></div>
          </dl>
        </div>
      </header>

      <figure className="case-cover">
        <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="100vw" priority />
      </figure>

      <section className="case-context shell" aria-labelledby="context-heading">
        <p className="case-label">01 / Context</p>
        <h2 id="context-heading">A concise premise for a focused digital experience.</h2>
        <p>{project.context}</p>
      </section>

      <section className="case-media shell" aria-label="Concept interface details">
        {project.media.slice(1).map((media) => (
          <figure key={media.src}>
            <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes="(max-width: 720px) 100vw, 88vw" />
          </figure>
        ))}
      </section>

      <section className="case-engineering shell" aria-labelledby="engineering-heading">
        <p className="case-label">02 / Engineering</p>
        <h2 id="engineering-heading">The system behind the surface.</h2>
        <ol>{project.engineering.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
        <div className="case-responsibilities"><span>Responsibilities</span><p>{project.responsibilities.join(" / ")}</p></div>
      </section>

      <section className="case-outcome shell" aria-labelledby="outcome-heading">
        <p className="case-label">03 / Outcome</p>
        <h2 id="outcome-heading">Results to add.</h2>
        <p>{project.outcome}</p>
      </section>

      <a className="next-project shell" href={`/work/${nextProject.slug}/`}>
        <span>Next concept</span>
        <strong>{nextProject.title}</strong>
        <span className="next-project-arrow" aria-hidden="true">↗</span>
        <span className="next-project-preview" aria-hidden="true"><Image src={nextProject.cover.src} alt="" width={nextProject.cover.width} height={nextProject.cover.height} sizes="240px" /></span>
      </a>
    </main>
  );
}
