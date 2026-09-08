import { projects } from "@/data/projects";
import { ProjectArtwork } from "./project-artwork";

export function LeadProject() {
  const project = projects[0];

  return (
    <section className="lead-project shell" id="selected-work" aria-labelledby="lead-project-title">
      <div className="section-marker">
        <span>01</span>
        <span>Selected work</span>
        <span>Concepts 01–04</span>
      </div>

      <div className="lead-heading">
        <p>{project.kicker}</p>
        <h2 id="lead-project-title">{project.title}</h2>
      </div>

      <div className="project-stage">
        <a className="project-artwork-link" href={`/work/${project.slug}/`} aria-label={`Open the ${project.title} concept case study`}>
          <ProjectArtwork />
        </a>
        <div className="project-side-note">
          <span>Fictional concept</span>
          <span>{project.year}</span>
        </div>
      </div>

      <div className="project-details">
        <p>{project.description}</p>
        <div>
          <span>Role</span>
          <p>{project.role.join(" / ")}</p>
        </div>
        <a href={`/work/${project.slug}/`} aria-label={`View the ${project.title} concept case study`}>
          View concept <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
