"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { usePathname } from "next/navigation";

const primaryLinks = [["Work", "#selected-work"], ["Lab", "#lab"], ["Capabilities", "#capabilities"], ["About", "#about"], ["Contact", "#contact"]];

export function SiteHeader() {
  const pathname = usePathname();
  const homeHref = (hash: string) => pathname === "/" ? hash : `/${hash}`;
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(panel.current?.querySelectorAll<HTMLElement>("a,button") ?? []);
    focusable()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const nodes = focusable();
      if (!nodes.length) return;
      const [first] = nodes;
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    window.dispatchEvent(new CustomEvent("hrv:overlay", { detail: true }));
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKeyDown); window.dispatchEvent(new CustomEvent("hrv:overlay", { detail: false })); menuButton.current?.focus({ preventScroll: true }); };
  }, [open]);

  const close = () => setOpen(false);
  return <>
    <header className="site-header shell">
      <a className="brand" href={homeHref("#top")} aria-label="Himanshu Raj Verma, home">HRV<span aria-hidden="true">/26</span></a>
      <div className="header-meta" aria-label="Professional details"><span>Creative / Frontend Developer</span><span>India · IST</span></div>
      <button className="menu-link" type="button" ref={menuButton} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-menu">Menu <span aria-hidden="true">＋</span></button>
    </header>
    <div className={`menu-panel${open ? " is-open" : ""}`} id="site-menu" ref={panel} role="dialog" aria-modal="true" aria-label="Navigation" aria-hidden={!open} inert={!open}>
      <div className="menu-panel-head shell"><span>HRV / Index</span><button type="button" onClick={close}>Close <span aria-hidden="true">×</span></button></div>
      <div className="menu-panel-body shell">
        <nav aria-label="Primary navigation">{primaryLinks.map(([label, href], index) => <a href={homeHref(href)} onClick={close} tabIndex={open ? 0 : -1} key={href}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}</nav>
        <div className="menu-projects"><p>Concept work</p>{projects.map((project) => <a href={`/work/${project.slug}/`} onClick={close} tabIndex={open ? 0 : -1} key={project.slug}>{project.title}<span>↗</span></a>)}</div>
      </div>
      <div className="menu-panel-foot shell"><a href="mailto:himanshurajverma549@gmail.com" tabIndex={open ? 0 : -1}>himanshurajverma549@gmail.com</a><span>India · UTC+05:30</span></div>
    </div>
  </>;
}
