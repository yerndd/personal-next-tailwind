---
inclusion: always
---

# Project Coding Standards

Stack: Next.js 15+ / React 19, App Router, Redux Toolkit, Tailwind CSS. JavaScript only — no TypeScript.

All rules below are hard constraints. ESLint enforces formatting — treat violations as errors. Apply these to every file you read or write.

---

## Syntax Rules

- No semicolons
- `const` by default; `let` only when reassignment is needed; never `var`
- Object shorthand: `{ name }` not `{ name: name }`
- No trailing commas
- Self-closing JSX for childless elements: `<Foo />` not `<Foo></Foo>`
- Boolean props: omit `={true}` — `<Foo disabled />` not `<Foo disabled={true} />`
- JS strings: single quotes; JSX attribute values: double quotes
- Tabs for indentation (JS and JSX props)
- Spaces inside object curly braces: `{ key: value }`

## Objects & Arrays

- 1–2 entries → inline; 3+ entries → multiline, one entry per line

```javascript
const point = { x: 1, y: 2 }          // inline ok

const config = {                        // multiline required
	name: 'foo',
	value: 42,
	active: true
}
```

---

## React

- Never `import React` — not needed in React 19+
- No PropTypes — use JSDoc instead (see JSDoc section)
- `'use client'` must be the very first line (before all imports) in any file using hooks or browser APIs
- Components must be `const` arrow functions; `export default` is always a separate statement at the bottom
- Spread unknown props onto the root element: `{ children, className = '', ...props }`
- Define named handler functions in the component body — no inline arrow functions in JSX

```javascript
// Correct
const handleClick = () => window.open('/resume.pdf', '_blank')
return <button onClick={handleClick}>Open</button>

// Wrong
return <button onClick={() => window.open('/resume.pdf', '_blank')}>Open</button>
```

```javascript
// Correct
const MyComponent = ({ children, className = '', ...props }) => {
	return <div className={className} {...props}>{children}</div>
}
export default MyComponent

// Wrong
export default function MyComponent({ children }) { ... }
```

## Next.js

- Server Components are the default — only add `'use client'` when actually needed
- Fetch data in Server Components; pass down as props to Client Components
- `next/image` for all images — never raw `<img>`; always provide `width`/`height` or `fill`
- `next/link` for all internal navigation — never raw `<a>` for internal routes
- Export `metadata` and `viewport` from layout/page files — never use `<head>` tags directly
- `export const dynamic = 'force-static'` on always-static routes (sitemap, manifest)
- `output: 'export'` preferred for static/portfolio sites
- Browser env vars must be prefixed with `NEXT_PUBLIC_`
- Add `priority` to above-the-fold images to improve LCP

## Redux

- Always use `useAppDispatch` and `useAppSelector` from `lib/hooks.js` — never raw hooks
- Keep slice state minimal and flat
- Async logic belongs in thunks or RTK Query — not in components
- Slice files: `lib/features/[name]/[name]Slice.js`

---

## Import Order

Separated by blank lines, in this order:

1. `'use client'` directive (if needed)
2. External packages
3. Internal aliases (`@/components/...`, `@/lib/...`)
4. Relative imports

```javascript
'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import Container from '@/components/ui/Container'

import SomeHelper from '../utils/helper'
```

## JSX Formatting

- Single prop → inline: `<Foo bar="baz" />`
- Multiple props → one per line, tab-indented; closing `>` or `/>` on its own line aligned with the opening tag

```jsx
<Foo
	bar="baz"
	qux="quux"
/>
```

---

## className Logic

Never put class logic inside a JSX `className` attribute. All logic goes in the JS block above `return`.

```javascript
// Correct
const variantClass = variants[variant]
const bigClass = big !== undefined ? 'big' : ''
const fullClass = ['rnd-base', variantClass, bigClass, className].filter(Boolean).join(' ')
return <div className={fullClass} />

// Wrong — logic inside JSX
return <div className={['rnd-base', variantClass].filter(Boolean).join(' ')} />
return <div className={`rnd-base ${condition ? 'big' : ''}`} />
```

---

## Performance

- Push `'use client'` as deep in the tree as possible — maximize Server Component surface area
- Never define components inside another component — define at module scope
- Module-level constants (lookup objects, static arrays, config) must live outside the component

```javascript
// Wrong — recreated every render
const MyComponent = () => {
	const options = { behavior: 'smooth', block: 'start' }
}

// Correct — module scope
const SCROLL_OPTIONS = { behavior: 'smooth', block: 'start' }
const MyComponent = () => { ... }
```

- Avoid unnecessary state — derive values from existing state/props when possible
- `useMemo`/`useCallback` only when recomputation cost is measurable or value is a referential dep of another hook
- `next/image` with explicit dimensions or `fill` to prevent CLS
- `priority` on above-the-fold images

---

## Readability & Naming

- Booleans as questions: `isActive`, `hasError`, `isLoading`
- Event handlers with `handle` prefix: `handleClick`, `handleSubmit`
- Derived class variables named descriptively: `variantClass`, `activeClass`, `fullClass`
- Extract complex conditions into named variables before JSX
- All logic above `return` — JSX block is rendering only

```javascript
// Wrong
return <div className={isActive && !isDisabled ? 'active' : 'inactive'} />

// Correct
const isVisible = isActive && !isDisabled
const stateClass = isVisible ? 'active' : 'inactive'
return <div className={stateClass} />
```

---

## Modularity & Architecture

| Layer | Path | Rule |
|---|---|---|
| UI primitives | `components/ui/` | Generic, reusable — no hardcoded content or feature logic |
| Feature components | `components/features/` | Own data logic, consume UI primitives |
| Layout components | `components/layout/` | Structural only — no business logic |
| Redux slices | `lib/features/[name]/` | `[name]Slice.js` |
| Utilities | `lib/` | Pure functions, store, hooks, shared constants |
| Styles | `assets/css/` | Global styles, Tailwind theme variables |
| Static assets | `public/` | Images, fonts, resume PDF |

- One exported component per file; co-locate helpers only if exclusively used by that component
- ~150 lines is a signal to split a component
- Shared constants used across files belong in `lib/` — not duplicated per file
- Extract pure utility functions to `lib/` for reuse and testability

---

## Code Quality

- Prefix unused variables/arguments with `_`
- `console.warn()` and `console.error()` only — never `console.log()`
- No magic numbers or strings — extract as named constants
- Never mutate props or external state — always derive new values

---

## Before Making Changes

- Always read the target file before editing — never assume its current state
- Check related files for full context (CSS, sibling components, Redux slice)
- Never revert the user's manual edits: commented-out code, removed props, custom styles

---

## JSDoc

Required for all components, utility functions, and non-obvious logic.

### Components

```javascript
/**
 * Brief description of what the component renders.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Content inside the component
 * @param {'dark' | 'red'} [props.variant='dark'] - Visual variant
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
const MyComponent = ({ children, variant = 'dark', className = '' }) => {
	// ...
}
export default MyComponent
```

- `@param {object} props` always first; one `@param` per prop with type and description
- Always include `@returns {JSX.Element}`
- Use `@typedef` for reusable union types, defined at the top of the file before the lookup object

### Functions

```javascript
/**
 * Calculates age in years from a date of birth string.
 *
 * @param {string} dob - Date of birth in `YYYY-MM-DD` format
 * @returns {number} Age in full years
 */
const getAge = (dob) => {
	const ageDate = new Date(Date.now() - new Date(dob).getTime())
	return ageDate.getUTCFullYear() - 1970
}
```

### Typedefs

```javascript
/**
 * @typedef {'default' | 'dark' | 'red' | 'orange'} BorderVariant
 */

/** @type {Record<BorderVariant, string>} */
const borders = {
	default: '',
	dark: 'border-dark',
	red: 'border-red',
	orange: 'border-orange'
}
```

### Inline Comments

- Only for non-obvious logic — skip self-explanatory code
- Short and factual: `// Destroy Typed instance on unmount to prevent memory leaks`
