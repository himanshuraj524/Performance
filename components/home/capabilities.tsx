const capabilities = [
  ["Creative development", "GSAP / Canvas / Motion / Interaction systems"],
  ["Frontend engineering", "React / Next.js / TypeScript / APIs"],
  ["UI engineering", "Design systems / Responsive interfaces / Accessibility"],
  ["Web platforms", "Webflow / Shopify / CMS / Integrations"],
];

export function Capabilities() {
  return (
    <section className="capabilities shell" id="capabilities" aria-labelledby="capabilities-title">
      <div className="capabilities-title">
        <p className="section-kicker">Capabilities / 04</p>
        <h2 id="capabilities-title">What I build with</h2>
      </div>
      <div className="capability-list">
        {capabilities.map(([title, tools], index) => (
          <div className="capability" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
