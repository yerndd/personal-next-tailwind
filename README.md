<div align="center">

# Rindho Ananta Samat

### Fullstack Web Developer

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-rnd--app.com-E72547?style=for-the-badge)](https://rnd-app.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-ISC-14CC6B?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Overview

A monorepo containing a personal portfolio website and a shared UI component library (`rnd-ui`). The portfolio showcases my profile, skills, and experience as a Fullstack Web Developer — featuring a smooth preload animation, animated typing effect, and a clean slide-based layout.

---

## � Monorepo Structure

```
├── apps/
│   └── portfolio/            # Next.js portfolio app
│       ├── app/              # Pages and layouts (App Router)
│       ├── components/
│       │   ├── features/     # Page sections (Brief, Profile, Education)
│       │   └── layout/       # Preload screen, Footer
│       ├── lib/              # Redux store, slices, hooks
│       ├── assets/css/       # Global styles, Tailwind theme variables
│       └── public/           # Images, resume PDF
└── packages/
    └── rnd-ui/               # Shared UI component library
        ├── src/
        │   ├── components/   # Button, Container
        │   └── styles/       # Design tokens, component CSS, Alatsi font
        └── dist/             # Built output (JS + styles.css)
```

---

## 🛠 Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 |
| State | Redux Toolkit |
| Animation | Typed.js |
| UI Library | rnd-ui (local workspace package) |
| Hosting | GitHub Pages |
| CDN / DNS | Cloudflare |
| CI/CD | GitHub Actions |

---

## � Getting Started

```bash
git clone https://github.com/yerndd/personal-next-tailwind.git
cd personal-next-tailwind
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> `npm run dev` builds `rnd-ui` first, then starts both the Next.js dev server and tsup watch in parallel.

---

## 📜 Scripts

```bash
npm run dev            # Build rnd-ui, then start Next.js + tsup watch
npm run build          # Build rnd-ui then portfolio → apps/portfolio/out
npm run build:ui       # Build rnd-ui only (JS + CSS)
npm run build:portfolio  # Build portfolio only
npm run lint           # ESLint check (all workspaces)
npm run lint:fix       # ESLint autofix (all workspaces)
```

---

## � rnd-ui

Shared component library published to npm. Exports `Button`, `Container`, base styles, and the Alatsi font.

```bash
# Publish a new version (triggers CI on tag push)
git tag rnd-ui@0.2.0
git push origin rnd-ui@0.2.0
```

---

## 🌍 Deployment

Pushes to `main` or `master` trigger an automatic build and deploy to GitHub Pages via GitHub Actions. Cloudflare handles the custom domain, SSL, and CDN.

See [.github/SETUP.md](.github/SETUP.md) for the full setup guide.

---

## 👤 Author

<div align="center">

**Rindho Ananta Samat**

[![Website](https://img.shields.io/badge/Website-rnd--app.com-E72547?style=flat-square)](https://rnd-app.com)
[![GitHub](https://img.shields.io/badge/GitHub-@yerndd-181717?style=flat-square&logo=github)](https://github.com/yerndd)
[![Email](https://img.shields.io/badge/Email-rindho__samat@rnd--app.com-3867D6?style=flat-square&logo=gmail)](mailto:rindho_samat@rnd-app.com)

</div>

---

<div align="center">

Made with ❤️ using Next.js & Tailwind CSS · ISC License

</div>
