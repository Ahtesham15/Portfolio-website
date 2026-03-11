# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build
npm test         # Run tests (React Testing Library + Jest)
npm test -- --testPathPattern=App  # Run a single test file
```

## Architecture

React 17 SPA bootstrapped with Create React App, using React Router v6 for client-side routing.

**Routes** (defined in `src/App.js`):
- `/` → `Home` (hero section + intro)
- `/about` → `About` (bio, experience timeline, tech/tool stack)
- `/project` → `Projects` (project cards grid)
- `/certifications` → `Certifications`
- `/resume` → `Resume` (PDF viewer via `@react-pdf/renderer`)
- `*` → redirects to `/`

**Component structure** (`src/components/`):
- Each route has its own subdirectory with page and sub-components
- `Particle.js` — animated particle background used on most pages (via `react-tsparticles`)
- `Pre.js` — preloader shown for 1200ms on initial load
- `Navbar.js` / `Footer.js` — shared layout components

**Styling**: Bootstrap 5 + custom CSS in `src/style.css` and `src/App.css`. Purple (`#c770f0`) is the primary accent color used via `.purple` className.

**Static assets** are in `src/Assets/`, organized into `Experience/` and `Projects/` subdirectories. The resume PDF (`Jiahui_Ma_Data_Scientist_CV.pdf`) is also stored here.

**Content edits**: All project cards, tech stack icons, experience entries, and bio text are hardcoded directly in their respective component files — there is no CMS or data layer.

## Key Libraries

| Library | Purpose |
|---|---|
| `react-bootstrap` | Layout (Container/Row/Col) and UI components |
| `react-icons` | Icon sets (SiX for tech icons, BsGithub, etc.) |
| `react-parallax-tilt` | Tilt effect on skill/project cards |
| `typewriter-effect` | Animated typing in `Home/Type.js` |
| `react-github-calendar` | GitHub contribution graph in `About/Github.js` |
| `react-pdf` | PDF rendering on Resume page |
