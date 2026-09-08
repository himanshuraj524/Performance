import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { RaceScene } from './RaceScene';
import './f1.css';
import './f1-content.css';
import './f1-fixes.css';
import profile from '../../../profile.jpg';

type F1PageProps = { onSelectLegacy: (version: 'sawad' | 'v1') => void };

export function F1Page({ onSelectLegacy }: F1PageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [copyState, setCopyState] = useState('Copy email');
  const [activeProject, setActiveProject] = useState(1);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotionReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (motionReduced || !rootRef.current) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    import('gsap').then(({ gsap }) => {
      if (cancelled || !rootRef.current) return;
      const context = gsap.context(() => {
        gsap.from('[data-f1-intro]', {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }, rootRef);
      cleanup = () => context.revert();
    }).catch(() => undefined);
    return () => { cancelled = true; cleanup?.(); };
  }, [motionReduced]);

  useEffect(() => {
    const previous = document.documentElement.style.scrollBehavior;
    if (motionReduced) document.documentElement.style.scrollBehavior = 'auto';
    return () => { document.documentElement.style.scrollBehavior = previous; };
  }, [motionReduced]);

  useEffect(() => {
    if (motionReduced || !rootRef.current) return;
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled || !rootRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.f1-section:not(#projects)').forEach((section) => {
          gsap.from(section.children, { opacity: 0, y: 35, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 82%', once: true } });
        });
        gsap.to('.f1-scene-shell', { yPercent: -7, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 0.5 } });
        const media = gsap.matchMedia();
        media.add('(min-width: 1000px)', () => {
          const projects = rootRef.current?.querySelector<HTMLElement>('#projects');
          const panel = rootRef.current?.querySelector<HTMLElement>('.f1-project-panel');
          const track = rootRef.current?.querySelector<HTMLElement>('.f1-project-progress-fill');
          const cards = gsap.utils.toArray<HTMLElement>('.f1-project-card');
          if (!projects || !panel || !track) return;
          gsap.set(track, { transformOrigin: 'left' });
          const end = () => `+=${Math.max(0, projects.clientHeight - panel.clientHeight - 48)}`;
          gsap.to(track, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: projects, start: 'top top+=90', end, scrub: 0.4 } });
          ScrollTrigger.create({ trigger: projects, start: 'top top+=90', end, pin: panel, pinSpacing: false });
          cards.forEach((card, index) => ScrollTrigger.create({ trigger: card, start: 'top 60%', end: 'bottom 45%', onEnter: () => setActiveProject(index + 1), onEnterBack: () => setActiveProject(index + 1) }));
          return undefined;
        });
      }, rootRef);
      cleanup = () => context.revert();
    }).catch(() => undefined);
    return () => { cancelled = true; cleanup?.(); };
  }, [motionReduced]);

  const navigate = (hash: string) => {
    setMenuOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: motionReduced ? 'auto' : 'smooth' });
  };
  const openMail = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${contact.name || 'a visitor'}`);
    const body = encodeURIComponent(`Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`);
    window.location.href = `mailto:himanshurajverma549@gmail.com?subject=${subject}&body=${body}`;
  };
  const copyEmail = async () => { try { await navigator.clipboard.writeText('himanshurajverma549@gmail.com'); setCopyState('Copied email'); } catch { setCopyState('Could not copy — select email'); } };

  return (
    <div className="f1-page" ref={rootRef}>
      <a className="f1-skip" href="#f1-main">Skip to content</a>
      <header className="f1-nav" data-f1-intro>
        <button className="f1-wordmark" onClick={() => navigate('#home')} aria-label="Back to home">
          HV<span>///</span>
        </button>
        <nav className={menuOpen ? 'f1-links is-open' : 'f1-links'} aria-label="Primary navigation">
          {['Projects', 'Experience', 'Tools', 'Thoughts', 'Contact'].map((label, index) => (
            <button key={label} onClick={() => navigate(`#${label.toLowerCase()}`)}>
              <small>0{index + 1}</small>{label}
            </button>
          ))}
        </nav>
        <div className="f1-nav-actions">
          <button className="f1-quiet-control" onClick={() => setMotionReduced((value) => !value)} aria-pressed={motionReduced}>
            Motion: {motionReduced ? 'off' : 'on'}
          </button>
          <button className="f1-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="f1-main">
        <section id="home" className="f1-hero">
          <div className="f1-hero-copy">
            <p className="f1-eyebrow" data-f1-intro><span /> Sector 01 — Race engineering / digital delivery</p>
            <h1 data-f1-intro>ENGINEERED<br />TO <em>PERFORM.</em></h1>
            <div className="f1-hero-meta" data-f1-intro>
              <p>Himanshu Verma<br /><strong>Solution Architect &amp; Head of Delivery</strong></p>
              <p>Bangalore, India<br /><span>5+ years building at pace</span></p>
            </div>
            <div className="f1-hero-actions" data-f1-intro>
              <button className="f1-button f1-button--red" onClick={() => navigate('#projects')}>Explore the work <ArrowDownRight /></button>
              <button className="f1-button f1-button--line" onClick={() => navigate('#contact')}>Start a conversation <ArrowUpRight /></button>
            </div>
          </div>
          <div className="f1-scene-shell" aria-label="A procedural three dimensional open-wheel race car" data-f1-intro>
            <RaceScene paused={motionReduced} />
            <div className="f1-scene-label"><span>HV-01 / OPEN WHEEL</span><span>3D STUDY</span></div>
          </div>
          <aside className="f1-telemetry" data-f1-intro aria-label="Highlights">
            <div><b>05+</b><span>Years<br />experience</span></div>
            <div><b>10WK</b><span>MVP delivery<br />window</span></div>
            <div><b>01ST</b><span>FastGen<br />hackathon</span></div>
          </aside>
        </section>

        <section id="projects" className="f1-section f1-projects" aria-labelledby="projects-title">
          <div className="f1-project-panel"><p className="f1-eyebrow"><span /> Sector 02</p><h2 id="projects-title">SELECTED<br />WORK.</h2><p className="f1-project-progress-label">Project progress <b>{String(activeProject).padStart(2, '0')} / 05</b></p><div className="f1-project-progress"><i className="f1-project-progress-fill" /></div></div>
          <div className="f1-project-list">
            {[
              ['01', 'US Counseling Dual-Interface Web Portal', 'System Architecture & Webflow', 'Delivered a 10-week MVP, two weeks ahead of timeline, with zero post-launch issues. Designed the user portal and client admin system.'],
              ['02', 'FastGen AI SEO Optimization Platform', '1st Place Hackathon Winner', 'Led a cross-functional engineering team building an AI-powered SEO and GEO analyzer for modern web engines.'],
              ['03', 'Company Operations & Resource Control Dashboard', 'Single Source of Truth Tooling', 'Centralized active clients, tasks and resource allocation across three teams.'],
              ['04', 'Search HomesIndia Full-Stack Property Engine', 'Python Django & PostgreSQL', 'Architected and deployed a database-driven sales platform with dynamic multi-parameter property search.'],
              ['05', 'Bespoke CRM Pipeline & Webflow Middleware', 'Custom Data Routing', 'Built core JavaScript integrations between CRM platforms and Webflow for secure data routing.'],
            ].map(([number, title, category, detail]) => <article className="f1-programme f1-project-card" key={number}><small>{number} / {category}</small><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </section>
        <section id="experience" className="f1-section"><p className="f1-eyebrow"><span /> Sector 03</p><h2>DELIVERY<br />RECORD.</h2><ul className="f1-list">{[['Lil Big Things','Head of Delivery','2026 — Present','Manage multiple technical projects end to end, balancing three internal teams and external resources.'],['Lil Big Things','Software Development Lead','03/2025 — 2026','Created scalable development systems and SOPs; led the FastGen AI Hackathon-winning engineering team.'],['Lil Big Things','Front End Developer & Webflow Expert','07/2021 — 03/2025','Customized Webflow with core JavaScript, CRM data pipelines, GA4 tracking and GSAP animation.'],['Search HomesIndia Pvt. Ltd','Full Stack Software Engineer Intern','01/2021 — 07/2021','Built a property sales website from scratch with Python Django, PostgreSQL and Heroku.']].map(([company, role, time, detail]) => <li key={role}><small>{time}</small><b>{role}</b><span>{company}</span><p>{detail}</p></li>)}</ul></section>
        <section id="tools" className="f1-section"><p className="f1-eyebrow"><span /> Sector 04</p><h2>THE<br />TOOLROOM.</h2><div className="f1-tool-grid">{['Webflow','TypeScript','JavaScript (ESNext)','Python & Django','PostgreSQL','GSAP Animation','AWS Cloud','Google Analytics 4','Make & Zapier','Notion & SOPs'].map((tool, index) => <div key={tool}><small>{String(index + 1).padStart(2, '0')} / </small>{tool}</div>)}</div></section>
        <section id="thoughts" className="f1-section"><p className="f1-eyebrow"><span /> Sector 05</p><h2>FIELD<br />NOTES.</h2><div className="f1-programme-grid">{[['How We Accelerated a Complex MVP Delivery by 2 Weeks With Zero Defects','Meticulous architecture and upfront onboarding flow modelling helped shorten a projected three-month timeline.'],['Architecting Dual-Interface Systems: User Portals vs. Client Admin Panels','Designing discrete, tightly coupled interfaces for user media consumption and client invitation orchestration.'],['Usability-First Engineering: Translating Technical Specs for Business Stakeholders','Evaluation frameworks that keep technical complexity from compromising everyday usability.']].map(([title, excerpt]) => <article className="f1-programme" key={title}><small>Thought excerpt</small><h3>{title}</h3><p>{excerpt}</p></article>)}</div></section>
        <section className="f1-section"><div className="f1-split"><img className="f1-profile" src={profile} alt="Himanshu Verma" /><div><p className="f1-eyebrow"><span /> Driver profile</p><h2>HIMANSHU<br />VERMA.</h2><p className="f1-profile-copy">Solution Architect and Head of Delivery at Lil Big Things in Bangalore. I started in front-end development and now pair Webflow, custom CRM integrations and GSAP motion with clear systems and predictable delivery.</p></div></div></section>
        <section id="contact" className="f1-section"><p className="f1-eyebrow"><span /> Sector 06</p><h2>READY<br />WHEN YOU ARE.</h2><form className="f1-contact" onSubmit={openMail}><label htmlFor="contact-name">Your name</label><input id="contact-name" required value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} /><label htmlFor="contact-email">Email address</label><input id="contact-email" required type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} /><label htmlFor="contact-message">What are we building?</label><textarea id="contact-message" required rows={5} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} /><button className="f1-button f1-button--red" type="submit">Open email draft <ArrowUpRight /></button></form><p className="f1-contact-note">This opens a prefilled email draft; it does not send a form submission.</p><a className="f1-contact-note f1-email" href="mailto:himanshurajverma549@gmail.com">himanshurajverma549@gmail.com</a><br /><button className="f1-button f1-button--line" type="button" onClick={copyEmail}>{copyState}</button><p className="f1-contact-note" aria-live="polite">{copyState !== 'Copy email' ? copyState : ''}</p><p className="f1-contact-note"><a href="https://linkedin.com/in/himanshu-raj-verma">LinkedIn</a></p></section>
      </main>
      <footer className="f1-version-bar">
        <span>PORTFOLIO / F1 SPECIFICATION</span>
        <div><button onClick={() => onSelectLegacy('sawad')}>View 2026 portfolio</button><button onClick={() => onSelectLegacy('v1')}>View software engineer portfolio</button></div>
      </footer>
    </div>
  );
}
