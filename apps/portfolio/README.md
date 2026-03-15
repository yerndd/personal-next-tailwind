# portfolio

Personal portfolio site built with Next.js 16, React 19, Tailwind CSS 4, and Redux Toolkit. Statically exported and deployed to GitHub Pages.

## Stack

- Next.js 16 (App Router, `output: 'export'`, Turbopack)
- React 19
- Tailwind CSS 4
- Redux Toolkit
- `rnd-ui` — internal component library from `packages/rnd-ui`
- typed.js — typewriter animation

## Structure

```
app/                  # Routes and root layout
assets/css/           # Global styles (Tailwind, variables, base)
components/
  features/           # Feature-specific components
  layout/             # Structural layout components
  ui/                 # Generic UI primitives
lib/
  features/           # Redux slices
  hooks.js            # useAppDispatch / useAppSelector
  store.js            # Redux store
  StoreProvider.jsx   # Client-side Redux provider
public/               # Static assets (images, favicon, resume.pdf)
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Static export to `out/` |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |

> Run these from the monorepo root (`npm run dev`, `npm run build`) to ensure `rnd-ui` is built first.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Full site URL used for metadata and Open Graph |

Copy `.env` and fill in values:

```bash
NEXT_PUBLIC_SITE_URL=https://rnd-app.com
```

## Deployment

Deployed automatically via GitHub Actions on a `portfolio@*` tag push. See [`../.github/workflows/README.md`](../.github/workflows/README.md) and [`../.github/SETUP.md`](../.github/SETUP.md) for full setup.

```bash
git tag portfolio@0.0.3
git push origin portfolio@0.0.3
```
