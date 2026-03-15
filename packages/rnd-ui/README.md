# rnd-ui

Shared React component library for the RND monorepo. Provides base UI primitives, design tokens, and the Alatsi font — consumed by `apps/portfolio` and publishable to npm.

## Install

```bash
npm install rnd-ui
```

## Usage

Import styles once at the root of your app:

```js
import 'rnd-ui/styles'
```

Then use components:

```jsx
import { Button, Container } from 'rnd-ui'

<Container border="red" big padded>
  <Button variant="dark">Click me</Button>
</Container>
```

## Components

### Button

```jsx
<Button variant="dark">Label</Button>
<Button variant="red">Label</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'dark' \| 'red'` | `'dark'` | Visual style |
| `className` | `string` | `''` | Extra CSS classes |
| `...props` | `ButtonHTMLAttributes` | — | Native button attributes |

### Container

Renders as a `<section>`.

```jsx
<Container border="orange" big padded>...</Container>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `border` | `'default' \| 'dark' \| 'red' \| 'orange' \| 'green' \| 'blue'` | `'default'` | Left + bottom border color |
| `big` | `boolean` | — | Full viewport height (`100dvh`) with scroll-snap |
| `padded` | `boolean` | — | Adds `15dvh 15%` padding |
| `className` | `string` | `''` | Extra CSS classes |
| `...props` | `HTMLAttributes` | — | Native section attributes |

## Design Tokens

CSS custom properties available after importing `rnd-ui/styles`:

```css
--color-red-dark / --color-red-light
--color-orange-dark / --color-orange-light
--color-green-dark / --color-green-light
--color-blue-dark / --color-blue-light
--color-dark-primary / --color-dark-secondary
--color-light-primary / --color-light-secondary
--color-white / --color-black
--transition-long / --transition-short
```

## Font

Alatsi (400) is bundled and loaded via `@font-face` when you import `rnd-ui/styles`. No separate font setup needed.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Build JS (tsup) |
| `npm run build:css` | Build CSS (PostCSS) |
| `npm run build:all` | Build JS + CSS |
| `npm run dev` | Watch mode (JS only) |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |

> From the monorepo root, use `npm run build:ui` which runs `build:all`.

## Publishing

Publish is automated via GitHub Actions on a `rnd-ui@*` tag push. Requires `NPM_TOKEN` secret.

```bash
git tag rnd-ui@0.1.0
git push origin rnd-ui@0.1.0
```
