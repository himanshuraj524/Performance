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

/**
 * Hero Driver Head Mouse Tracking Parallax (Head Only)
 */
const heroDriverHead = document.querySelector("#driver-head") || document.querySelector(".hero_driver img");
if (heroDriverHead && !prefersReducedMotion) {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  
  document.addEventListener("mousemove", (e) => {
    // Calculate displacement relative to window center
    mouseX = (e.clientX - window.innerWidth / 2) / 35;
    mouseY = (e.clientY - window.innerHeight / 2) / 35;
  });

  const updateDriverHeadParallax = () => {
    // Smooth lerp easing
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    
    // Rotate head slightly in the direction of movement
    const rotate = currentX * 0.6;
    
    heroDriverHead.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotate}deg)`;
    requestAnimationFrame(updateDriverHeadParallax);
  };
  
  updateDriverHeadParallax();
}