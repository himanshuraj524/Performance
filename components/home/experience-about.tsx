import { experience } from "@/data/experience";

export function ExperienceAbout() {
  const hasPlaceholders = experience.some((entry) => entry.status === "placeholder");

  return (
    <>
      <section className="experience shell" id="experience" aria-labelledby="experience-title">
        <div className="experience-title">
          <p className="section-kicker">Experience / 05</p>
          <h2 id="experience-title">Experience</h2>
        </div>
        <div className="experience-list">
          {experience.map((entry) => (
            <article className="experience-row" key={entry.id}>
              <span className="experience-dates">{entry.dates}</span>
              <strong className="experience-company">
                {entry.company}
                {entry.location && <span>{entry.location}</span>}
              </strong>
              <div className="experience-detail">
                <h3>{entry.role}</h3>
                {entry.responsibilities.length > 0 && (
                  <ul>
                    {entry.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                )}
              </div>
              {entry.status === "placeholder" && <small>Placeholder</small>}
            </article>
          ))}
          {hasPlaceholders && <p>Some employment details are still to be added.</p>}
        </div>
      </section>

      <section className="about shell" id="about" aria-labelledby="about-title">
        <p className="section-kicker">About / 06</p>
        <h2 id="about-title">Himanshu works between visual direction and frontend systems.</h2>
        <div className="about-copy">
          <p>He builds interfaces that feel composed, then engineers them to stay fast, clear and resilient.</p>
          <p>His focus spans creative development, UI engineering and the small interaction details that give digital products character.</p>
          <p>Based in India and available for selected projects.</p>
        </div>
      </section>
    </>
  );
}
