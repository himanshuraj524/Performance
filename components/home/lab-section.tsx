"use client";

import { useEffect, useRef, useState } from "react";
import { experiments } from "@/data/experiments";

function LabGlyph({ index }: { index: number }) {
  if (index === 0) return <div className="lab-type" aria-hidden="true"><span>S</span><span>H</span><span>I</span><span>F</span><span>T</span></div>;
  if (index === 1) return <div className="lab-field" aria-hidden="true">{Array.from({ length: 24 }, (_, item) => <i key={item} />)}</div>;
  return <div className="lab-scroll" aria-hidden="true"><span /><span /><span /><b>62</b></div>;
}

function LiveStudy({ index, response }: { index: number; response: number }) {
  const style = { "--response": response, "--stretch": 1 + response / 65 } as React.CSSProperties;
  if (index === 0) return <div className="study-live study-live-type" style={style} aria-label="Kinetic letters controlled by the response slider"><span>MOVE</span><span>WITH</span><span>INTENT</span></div>;
  if (index === 1) return <div className="study-live study-live-field" style={style} aria-label="Shape field controlled by pointer position and response slider" onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--x", `${((event.clientX - rect.left) / rect.width) * 100}%`); event.currentTarget.style.setProperty("--y", `${((event.clientY - rect.top) / rect.height) * 100}%`); }}>{Array.from({ length: 70 }, (_, item) => <i key={item} />)}<b /></div>;
  return <div className="study-live study-live-scroll" style={style} aria-label="Scroll composition controlled by the position slider"><span>READ</span><i /><span>AT</span><i /><span>YOUR</span><i /><span>PACE</span></div>;
}

export function LabSection() {
  const [active, setActive] = useState<number | null>(null);
  const [response, setResponse] = useState(45);
  const dialog = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  const close = () => setActive(null);
  useEffect(() => {
    if (active === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const nodes = () => Array.from(dialog.current?.querySelectorAll<HTMLElement>("button,input") ?? []);
    nodes()[0]?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key !== "Tab") return;
      const focusable = nodes(); const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", keydown);
    window.dispatchEvent(new CustomEvent("hrv:overlay", { detail: true }));
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener("keydown", keydown); window.dispatchEvent(new CustomEvent("hrv:overlay", { detail: false })); trigger.current?.focus({ preventScroll: true }); };
  }, [active]);

  const open = (index: number, button: HTMLButtonElement) => { trigger.current = button; setResponse(index === 2 ? 35 : 45); setActive(index); };

  return <section className="lab shell" id="lab" aria-labelledby="lab-title">
    <div className="lab-intro"><p className="section-kicker">Independent studies / 03</p><h2 id="lab-title">Lab</h2><p>Small interaction studies made to test a single behavior well.</p></div>
    <div className="lab-grid">{experiments.map((experiment, index) => <article className={`lab-item lab-item-${index + 1}`} key={experiment.index}>
      <button className="lab-canvas" type="button" onClick={(event) => open(index, event.currentTarget)} aria-label={`Open ${experiment.title} interactive study`}><LabGlyph index={index} /><span className="lab-open">Open study ↗</span></button>
      <header><span>{experiment.index}</span><h3>{experiment.title}</h3></header><p className="lab-mode">{experiment.mode}</p><p className="lab-description">{experiment.description}</p>
    </article>)}</div>
    {active !== null && <div className="study-dialog" role="dialog" aria-modal="true" aria-labelledby="study-title" ref={dialog}>
      <header><div><span>{experiments[active].index} / Interactive study</span><h2 id="study-title">{experiments[active].title}</h2></div><button type="button" onClick={close} aria-label="Close interactive study">Close ×</button></header>
      <LiveStudy index={active} response={response} />
      <footer><label htmlFor="study-response">{active === 2 ? "Position" : "Response"}</label><input id="study-response" type="range" min="0" max="100" value={response} onChange={(event) => setResponse(Number(event.target.value))} /><output htmlFor="study-response">{response.toString().padStart(2, "0")}</output><p>{active === 1 ? "Move the active marker with a pointer or finger, then adjust the field response." : "Drag the control or use the arrow keys."}</p></footer>
    </div>}
  </section>;
}
