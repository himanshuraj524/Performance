export function EditorialStatement() {
  const words = ["I", "shape", "digital", "experiences", "where", "design", "decisions,", "motion", "and", "engineering", "work", "as", "one", "system."];
  return (
    <section className="statement shell" aria-labelledby="statement-title">
      <p className="section-kicker">Position / 2026</p>
      <h2 id="statement-title" aria-label={words.join(" ")}>{words.map((word, index) => <span className={`statement-word${index === 2 || index === 3 ? " is-serif" : ""}`} aria-hidden="true" key={`${word}-${index}`}>{word}{" "}</span>)}</h2>
      <p className="statement-note">
        The work leads. The technology follows with enough discipline to make every interaction feel inevitable.
      </p>
    </section>
  );
}
