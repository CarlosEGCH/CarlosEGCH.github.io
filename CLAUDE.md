# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

No linter or test suite is configured.

## Architecture

This is a **Vite + React** single-page portfolio site for Carlos Gomes. There is no routing — the page is one long scroll with anchor-based navigation.

### Key design decisions

- **All section data is co-located with its component** (e.g. `EXPERIENCE`, `PROJECTS`, `EDU_STEPS` arrays live inside the relevant component file). To update content, edit the data array at the top of the component.
- **Global state lives in `src/App.jsx`**: scroll position, active nav section (used by scrollspy), mobile menu open state, and the toast notification message. These are passed as props to children.
- **Reveal animations** use a single `IntersectionObserver` in `App.jsx` that adds `.in` to elements with `.reveal` or `.reveal-stagger` classes. The CSS handles the actual transitions. Hero content gets `.in` immediately on load (above the fold).
- **Navbar scrollspy** works via a yellow pill that repositions itself over the active `[data-section]` link using `getBoundingClientRect`. The active section is determined by scroll position in the same `onScroll` handler that also sets the frosted-glass effect.

### Design system

All design tokens (colors, spacing, fonts, radii) are CSS custom properties on `:root` in `src/styles.css`. The two accent colors are:
- `--accent-warm: #F5B700` (yellow — primary CTAs, active states, highlights)
- `--accent-primary: #4B3BFF` (purple — chips, focus rings, secondary accents)

The `--density` variable scales section padding; `--accent-intensity` scales glow opacity. Both default to `1`.

### Branch structure

- `main` — source code, merge target for finished work
- `Rework` — active development branch
- `gh-pages` — auto-generated built files, served by GitHub Pages (do not edit manually)

### Deployment

Deployment is automated via `.github/workflows/deploy.yml`. Merging a PR into `main` triggers the workflow, which builds the site and pushes the output to the `gh-pages` branch. GitHub Pages serves from `gh-pages`.

The CV is served from `public/cv.pdf` → `/cv.pdf` at runtime. Replace this file to update the downloadable CV.

## Code style

Add a short comment explaining the purpose of any code you modify or add. Prefer comments that explain *why* over *what*.
