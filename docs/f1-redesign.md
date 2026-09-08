# F1 portfolio redesign

The default portfolio is the scoped `src/components/f1` experience. Legacy pages remain lazy-loaded and can be reached from the persistent version selector.

`RaceScene` lazy-loads Three.js, caps pixel ratio, uses a procedural open-wheel model, and releases WebGL resources on unmount. It shows a readable static fallback if WebGL or loading fails. GSAP is lazy-loaded for entrance and scroll reveal motion; the manual motion control and system reduced-motion preference suppress continuous motion and ScrollTrigger effects.

Validation: `npm run build` checks TypeScript and Vite production bundling. Three.js is isolated to its own async chunk.
