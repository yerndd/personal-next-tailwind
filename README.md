# Rindho Ananta Samat — Portfolio

> Personal portfolio website built with Next.js 16 and Tailwind CSS 4.

🌐 [rnd-app.com](https://rnd-app.com)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 |
| State | Redux Toolkit |
| Animation | Typed.js |
| Hosting | GitHub Pages |
| CDN / DNS | Cloudflare |
| CI/CD | GitHub Actions |

---

## Getting Started

```bash
git clone https://github.com/yerndd/personal-next-tailwind.git
cd personal-next-tailwind
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

```bash
npm run dev       # Dev server (Turbopack)
npm run build     # Static export → /out
npm run lint      # ESLint check
npm run lint:fix  # ESLint autofix
```

---

## Project Structure

```
├── app/                  # Pages and layouts (App Router)
├── components/
│   ├── features/         # Page sections (Brief, Profile, Education)
│   ├── layout/           # Preload screen, Footer
│   └── ui/               # Button, Container
├── lib/                  # Redux store, slices, hooks
├── assets/css/           # Global styles, Tailwind theme variables
└── public/               # Images, fonts, resume PDF
```

---

## Deployment

Pushes to `main` or `master` trigger an automatic build and deploy to GitHub Pages via GitHub Actions. Cloudflare handles the custom domain, SSL, and CDN.

See [.github/SETUP.md](.github/SETUP.md) for the full setup guide.

---

## Author

**Rindho Ananta Samat** — Fullstack Web Developer

[rnd-app.com](https://rnd-app.com) · [github.com/yerndd](https://github.com/yerndd) · rindho_samat@rnd-app.com

---

ISC License
