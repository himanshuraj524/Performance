import Image from "next/image";
import { projects } from "@/data/projects";

export function Hero() {
  const leadProject = projects[0];

  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-intro">
        <p className="eyebrow">An index of digital experiences</p>
        <h1 id="hero-title">
          <span>Creative</span>
          <span>Developer</span>
        </h1>
      </div>

      <div className="hero-lower">
        <p className="hero-description">
          Himanshu Raj Verma builds visually refined, high-performance digital products and interactive web experiences.
        </p>
        <a className="preview" href="#selected-work" aria-label="Explore selected work, starting with Afterlight Archive">
          <span className="preview-image">
            <Image
              src={leadProject.cover.src}
              alt=""
              width={leadProject.cover.width}
              height={leadProject.cover.height}
              sizes="(max-width: 720px) 42vw, 17vw"
              priority
            />
          </span>
          <span className="preview-caption">
            <span>Selected work</span>
            <span>Scroll to explore ↓</span>
          </span>
        </a>
        <div className="availability">
          <span className="status-dot" aria-hidden="true" />
          <span>Available for selected projects</span>
        </div>
      </div>
    </section>
  );
}
