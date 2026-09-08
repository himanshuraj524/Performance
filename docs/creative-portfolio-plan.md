# Creative portfolio plan

## Direction

The portfolio is an editorial index of digital experiences. Warm ivory, ink black, muted metadata, hairline rules and oversized grotesk typography create a gallery-like system. Asymmetry comes from shifts in scale and placement rather than decorative effects.

The reference URL currently resolves to Readymag's generic promotional page, so the implementation follows the supplied visual brief without copying an unavailable composition.

## System

- Grid: 12 columns on desktop, 8 on tablet and 4 on mobile, with 24px outer gutters that scale up on wide screens.
- Type: system grotesk stack; display text uses a fluid 64–200px scale, editorial statements 40–72px and metadata 11–13px.
- Color: `#f1efe8` canvas, `#11110f` ink, `#6f6d66` muted text and restrained project-specific accents.
- Motion: masked vertical reveals, controlled image clipping, progress-based typography and short navigation transitions. Content remains readable before JavaScript runs and all motion is removed or simplified under `prefers-reduced-motion`.

## Homepage sequence

1. Identity masthead with a live selected-work preview.
2. Four individually composed project exhibits.
3. Brief editorial statement.
4. Interactive lab with three lightweight experiments.
5. Typographic capabilities index.
6. Structured experience placeholders.
7. Concise about note and dramatic contact close.

## Signature interactions

- Masthead letters respond very slightly to a fine pointer.
- Project media transitions through clip masks and restrained parallax.
- Fullscreen navigation staggers its type, traps focus, closes with Escape and restores focus.
- Lab studies open in an accessible fullscreen dialog and expose touch controls.
- Project navigation uses progressive transitions while preserving modified clicks, browser history and hash links.

## Architecture

- `app/` owns routes, metadata, sitemap and static-export entry points.
- `components/` separates layout, homepage sections, work presentation, interaction and motion.
- `data/` contains replaceable projects, experiments and experience entries.
- `types/` defines the content contracts.
- `lib/` will own Lenis/GSAP lifecycle helpers and shared accessibility utilities.
- `public/work/` contains local, responsive project media.

The existing Vite application remains in `src/` and can be run with the `legacy:*` scripts while the default scripts serve Next.js.

## Delivery phases

1. Foundation, typography, grid, content model, global metadata, hero and first exhibit.
2. Complete the static homepage and review desktop/mobile composition.
3. Add Lenis, GSAP motion, navigation, cursor, loader and lab interactions.
4. Build reusable statically exported case studies at `/work/[slug]`.
5. Refine mobile and touch-specific art direction.
6. Accessibility, cross-browser and performance polish.
7. Production build, route/data checks and deployment readiness.

## Replacing concept content

All four current projects are labeled fictional concepts in `data/projects.ts`. Replace their title, slug, metadata, copy and local media in that file. Add real outcome values only when they can be verified; otherwise keep the outcome field explicitly marked for replacement. The email and LinkedIn profile are verified from the existing portfolio. GitHub remains an unavailable placeholder until its real URL is supplied.

## Acceptance criteria

- The identity, positioning, selected work and email are understandable within the first viewport or immediate scroll.
- Projects use distinct editorial compositions rather than repeated cards.
- Every interactive control works with keyboard and touch, with visible focus.
- Reduced-motion mode removes smooth scrolling, parallax and cursor effects.
- Case studies contain context, visual experience, engineering notes, honest result placeholders and a next-project route.
- Static export builds cleanly into `out/`; content and primary navigation remain usable without animation JavaScript.
- Final reporting includes actual test/build evidence and no invented performance scores.
