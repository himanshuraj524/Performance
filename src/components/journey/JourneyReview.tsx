import { useEffect, useRef } from 'react';
import './journey-review.css';

const PATH = 'M160 104 C84 178 230 250 160 340 S85 510 160 596 S240 760 160 858';

export function JourneyReview() {
  const pageRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const update = () => {
      const page = pageRef.current, path = pathRef.current, car = carRef.current;
      if (!page || !path || !car) return;
      const bounds = page.getBoundingClientRect();
      const distance = Math.max(1, page.offsetHeight - window.innerHeight);
      const progress = Math.min(0.94, Math.max(0.06, -bounds.top / distance));
      const length = path.getTotalLength();
      const point = path.getPointAtLength(length * progress);
      const ahead = path.getPointAtLength(Math.min(length, length * progress + 2));
      const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180 / Math.PI + 90;
      car.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle})`);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  return <main className="journey-review" ref={pageRef}>
    <div className="journey-shell">
      <section className="journey-row journey-intro">
        <div className="journey-heading"><p>01 / Introduction</p><h1>Himanshu Verma</h1></div>
        <div className="journey-detail"><h2>Solution Architect &amp; Head of Delivery</h2><p>Bangalore, India. I turn complex engineering requirements into clear, usable systems and predictable delivery.</p></div>
      </section>
      <section className="journey-row">
        <div className="journey-heading"><p>02 / Experience</p><h2>Building teams<br />and systems.</h2></div>
        <div className="journey-detail"><h3>Lil Big Things — Head of Delivery</h3><p>Manage concurrent technical projects across internal teams and external resources, from kickoff through launch.</p><h3>Software Development Lead</h3><p>Established scalable development workflows and helped lead the FastGen AI Hackathon-winning team.</p></div>
      </section>
      <section className="journey-row">
        <div className="journey-heading"><p>03 / Selected work</p><h2>Delivery under<br />real conditions.</h2></div>
        <div className="journey-detail"><h3>US Counseling MVP</h3><p>Delivered a dual-interface portal in ten weeks, two weeks ahead of schedule, with zero post-launch issues.</p><h3>FastGen AI SEO</h3><p>Led a cross-functional team building an AI-powered SEO and GEO analyzer for modern web engines.</p><a className="journey-email" href="mailto:himanshurajverma549@gmail.com">himanshurajverma549@gmail.com</a></div>
      </section>
      <aside className="journey-track" aria-label="A road showing the portfolio journey">
        <div className="journey-track-sticky">
          <svg viewBox="0 0 320 960" role="img" aria-label="Curving race track with a car following the scroll position">
            <path className="journey-road-edge" d={PATH} />
            <path className="journey-road" d={PATH} />
            <path className="journey-centerline" d={PATH} />
            <g ref={carRef}><image href="/review-racing-car.svg" x="-17" y="-44" width="34" height="88" /></g>
          </svg>
        </div>
      </aside>
    </div>
    <footer>Race car illustration: <a href="https://openclipart.org/detail/264027/racing-car-5">Racing Car 5 by Firkin, Openclipart</a></footer>
  </main>;
}
