# WLA Outreach Platform — Prototype

Privacy‑first, youth‑safe outreach app for Wildlife Leadership Academy (WLA). Built with Vite + React + TypeScript + Tailwind. Deploys to GitHub Pages via Actions.

## Scripts
- `npm run dev` — local dev
- `npm run build` — production build
- `npm run preview` — preview build locally

## Deploy
Pushing to `main` triggers the Pages workflow. If your repo name is not `wla-outreach-platform`, update the `VITE_BASE` in `.github/workflows/deploy.yml` or set `VITE_BASE` in the workflow env.

## Notes
- Prototype shell: mock auth, stubbed exports, offline‑friendly artifact capture (local URLs).
- For production, wire real OAuth (OIDC), storage with row‑level security, and API adapters (iNaturalist/Bird audio, etc.).


