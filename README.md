# Personal Portfolio - Rindho Ananta Samat

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS.

🌐 **Live Site**: [rnd-app.com](https://rnd-app.com)

## Features

- Built with Next.js 16 (App Router)
- Styled with Tailwind CSS 4
- Fully responsive design
- Animated typing effect with Typed.js
- Redux Toolkit for state management
- Automated deployment via GitHub Actions
- HTTPS enabled via Cloudflare

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit
- **Animations**: Typed.js
- **Deployment**: GitHub Pages + Cloudflare
- **CI/CD**: GitHub Actions

## Installation

```bash
# Clone the repository
git clone https://github.com/yerndd/personal-next-tailwind.git
cd personal-next-tailwind

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Static files will be generated in the `out` directory.

## Deployment

Automatically deployed to GitHub Pages on push to `main` or `master` branch.

See [.github/SETUP.md](.github/SETUP.md) for deployment setup.

## Project Structure

```
personal-next-tailwind/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── lib/                    # Redux store and slices
├── public/                 # Static assets
└── assets/css/             # Global styles
```

## Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run lint:fix # Fix linting issues
```

## Author

**Rindho Ananta Samat**

- Website: [rnd-app.com](https://rnd-app.com)
- GitHub: [@yerndd](https://github.com/yerndd)

## License

ISC License

---

Made with ❤️ using Next.js and Tailwind CSS
