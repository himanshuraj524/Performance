"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const greetings = [
  { text: "नमस्ते", lang: "hi" },
  { text: "Hello", lang: "en" },
  { text: "Hola", lang: "es" },
  { text: "こんにちは", lang: "ja" },
];

export function SiteRuntime() {
  const pathname = usePathname();
  const router = useRouter();
  const cursor = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "showing" | "exiting" | "complete">("idle");
  const [greeting, setGreeting] = useState(0);
  const loading = phase === "showing" || phase === "exiting";

  useEffect(() => {
    let cancelled = false;
    let exiting = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const later = (callback: () => void, delay: number) => timers.push(setTimeout(callback, delay));
    const finish = () => {
      if (cancelled || exiting) return;
      exiting = true;
      setPhase("exiting");
      later(() => setPhase("complete"), reducedMotion ? 0 : 350);
    };
    setGreeting(0);
    setPhase("showing");
    if (!reducedMotion) {
      greetings.slice(1).forEach((_, index) => later(() => setGreeting(index + 1), (index + 1) * 600));
    }
    const minimumIntro = new Promise<void>((resolve) => later(resolve, reducedMotion ? 1200 : 2400));
    const images = Array.from(document.querySelectorAll<HTMLImageElement>('img[fetchpriority="high"]'))
      .map((image) => image.decode().catch(() => undefined));
    Promise.all([minimumIntro, document.fonts?.ready ?? Promise.resolve(), ...images]).then(finish);
    // A stalled font or image must never keep the visitor behind the intro.
    later(finish, 3600);
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  useEffect(() => {
    if (!loading) return;
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousInert = new Map<HTMLElement, boolean>();
    const lockContent = () => {
      Array.from(document.body.children).forEach((child) => {
        if (!(child instanceof HTMLElement) || child === intro.current || child === cursor.current || child.tagName === "SCRIPT" || previousInert.has(child)) return;
        previousInert.set(child, child.inert);
        child.inert = true;
      });
    };
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    lockContent();
    const observer = new MutationObserver(lockContent);
    observer.observe(document.body, { childList: true });
    return () => {
      observer.disconnect();
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      previousInert.forEach((inert, element) => { element.inert = inert; });
    };
  }, [loading]);

  useEffect(() => {
    if (phase !== "complete" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf); lenis.on("scroll", ScrollTrigger.update);
    const overlay = (event: Event) => (event as CustomEvent<boolean>).detail ? lenis.stop() : lenis.start();
    window.addEventListener("hrv:overlay", overlay);
    const context = gsap.context(() => {
      const heroLines = gsap.utils.toArray<HTMLElement>(".hero h1 span");
      if (heroLines.length) gsap.fromTo(heroLines, { clipPath: "inset(100% 0 0 0)", yPercent: 18 }, { clipPath: "inset(0% 0 0 0)", yPercent: 0, duration: .8, stagger: .08, ease: "power3.out" });
      const statementWords = gsap.utils.toArray<HTMLElement>(".statement-word");
      if (statementWords.length) gsap.fromTo(statementWords, { opacity: .22 }, { opacity: 1, stagger: .025, ease: "none", scrollTrigger: { trigger: ".statement h2", start: "top 82%", end: "bottom 55%", scrub: true } });
      gsap.utils.toArray<HTMLElement>(".project-artwork,.exhibit-visual,.case-cover,.case-media figure").forEach((element) => gsap.fromTo(element, { clipPath: "inset(7% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.05, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 82%", once: true } }));
    });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("hrv:overlay", overlay); lenis.destroy(); context.revert(); };
  }, [pathname, phase]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.download) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      event.preventDefault();
      const navigate = () => router.push(`${url.pathname}${url.search}${url.hash}`);
      if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.startViewTransition(navigate); else navigate();
    };
    document.addEventListener("click", onClick); return () => document.removeEventListener("click", onClick);
  }, [router]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !cursor.current) return;
    const node = cursor.current; let x = -30, y = -30, frame = 0;
    const draw = () => {
      const radius = node.hasAttribute("data-active") ? 23 : 4;
      const safeX = Math.min(Math.max(x, radius), window.innerWidth - radius);
      const safeY = Math.min(Math.max(y, radius), window.innerHeight - radius);
      node.style.transform = `translate3d(${safeX}px,${safeY}px,0)`;
      frame = 0;
    };
    const move = (event: PointerEvent) => { x = event.clientX; y = event.clientY; if (!frame) frame = requestAnimationFrame(draw); };
    const over = (event: PointerEvent) => { node.toggleAttribute("data-active", Boolean((event.target as Element).closest("a,button,input"))); if (!frame) frame = requestAnimationFrame(draw); };
    window.addEventListener("pointermove", move, { passive: true }); document.addEventListener("pointerover", over);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", move); document.removeEventListener("pointerover", over); };
  }, []);

  return <>
    <div ref={intro} className={`readiness${loading ? " is-loading" : ""}${phase === "exiting" ? " is-exiting" : ""}`} role="status" aria-label={loading ? "Welcome. Loading page." : undefined} aria-hidden={!loading}>
      <span className="readiness-brand" aria-hidden="true">HRV / 26</span>
      <div className="readiness-greetings">
        {greetings.map(({ text, lang }, index) => <span key={lang} lang={lang} className={`readiness-greeting${greeting === index ? " is-current" : ""}`}>{text}</span>)}
      </div>
      <span className="readiness-spacer" aria-hidden="true" />
    </div>
    <div className="cursor" ref={cursor} aria-hidden="true"><span>View</span></div>
  </>;
}
