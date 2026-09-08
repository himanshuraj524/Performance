import { projects } from "@/data/projects";
import Image from "next/image";

function FieldNotesVisual() {
  return (
    <div className="field-visual" aria-hidden="true">
      <div className="field-rail"><span>Field</span><span>Notes</span><span>Index 02</span></div>
      <div className="field-sheet field-sheet-main">
        <span className="field-no">37</span>
        <p>Observations<br />from elsewhere</p>
        <div className="field-lines" />
      </div>
      <div className="field-sheet field-sheet-small"><span>52.7° N</span><span>Entry / 08</span></div>
      <div className="field-seal">FN</div>
    </div>
  );
}

function CommonGroundVisual() {
  return (
    <div className="ground-visual" aria-hidden="true">
      <div className="ground-header"><span>Common Ground</span><span>Shared signals / 03</span></div>
      <div className="ground-pane ground-pane-a"><span>A</span><strong>12</strong><small>Open notes</small></div>
      <div className="ground-pane ground-pane-b"><span>B</span><p>A clear place for local knowledge.</p></div>
      <div className="ground-pane ground-pane-c"><span>C</span><div className="ground-meter" /></div>
      <div className="ground-footer"><span>Information is useful when it can be found.</span><span>2026</span></div>
    </div>
  );
}

function SoftSignalVisual() {
  return (
    <div className="signal-visual" aria-hidden="true">
      <div className="signal-label"><span>Soft Signal</span><span>Listening room</span></div>
      <div className="signal-rings"><i /><i /><i /><i /></div>
      <div className="signal-player"><span>03:18</span><b>Quiet Current</b><span>06:42</span></div>
      <div className="signal-word">LISTEN</div>
    </div>
  );
}

const visuals = {
  "field-notes": <FieldNotesVisual />,
  "common-ground": <CommonGroundVisual />,
  "soft-signal": <SoftSignalVisual />,
};

export function ProjectGallery() {
  return (
    <section className="project-gallery shell" aria-label="More selected concept work">
      {projects.slice(1).map((project, index) => {
        const artDirection = project.artDirection;
        const artwork = artDirection && artDirection !== "afterlight" ? visuals[artDirection] : <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 720px) 100vw, 70vw" />;
        return (
        <article className={`project-exhibit exhibit-${index + 2}`} key={project.slug}>
          <header className="exhibit-heading">
            <p>{project.kicker}</p>
            <h2>{project.title}</h2>
          </header>
          <a
            className="exhibit-visual"
            href={`/work/${project.slug}/`}
            aria-label={`Open the ${project.title} concept case study`}
          >
            {artwork}
          </a>
          <div className="exhibit-meta">
            <span>{project.client}</span>
            <span>{project.role.join(" / ")}</span>
            <span>{project.year}</span>
          </div>
          <p className="exhibit-description">{project.description}</p>
          <a className="exhibit-link" href={`/work/${project.slug}/`} aria-label={`View the ${project.title} concept case study`}>
            View concept <span aria-hidden="true">↗</span>
          </a>
        </article>
      );})}
    </section>
  );
}
