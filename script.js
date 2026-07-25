document.documentElement.classList.add("js");

const yearTarget = document.querySelector("[data-current-year]");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -70px", threshold: 0.1 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/**
 * Project cards get a scroll-triggered entrance that leans into the
 * racing theme: cards approach off-axis and snap into place with a
 * fast-decelerating ease, like a car straightening out of a turn.
 */
const projectCards = document.querySelectorAll(".project-reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (projectCards.length && !prefersReducedMotion && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  projectCards.forEach((card, index) => {
    const fromLeft = index % 2 === 0;
    gsap.fromTo(
      card,
      {
        autoAlpha: 0,
        x: fromLeft ? -64 : 64,
        y: 36,
        rotate: fromLeft ? -5 : 5,
        scale: 0.95,
      },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 0.85,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
} else {
  projectCards.forEach((card) => {
    card.style.opacity = "1";
  });
}