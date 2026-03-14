---
inclusion: always
---

# Project Coding Standards

## Syntax Rules
- No semicolons — `semi: ['error', 'never']`
- Prefer `const`, use `let` only when reassignment is needed, never `var`
- Object shorthand: `{ name }` not `{ name: name }`
- Self-closing tags for empty elements: `<div />` not `<div></div>`

## React Rules
- No `import React` needed (React 19+)
- No PropTypes — use JSDoc if type hints are needed
- Component pattern: `const Foo = () => {}` then `export default Foo` at the bottom (separated)
- Add `'use client'` when using hooks or browser APIs

## JSX Formatting
- Multiple props → one per line, tab-indented, closing bracket aligned with opening tag
- Single prop → inline is fine

## Class Name Logic
- Each conditional class gets its own named `const` — one per line, descriptive name
- Combine into a final `const` using array `.filter(Boolean).join(' ')`, then pass that to `className`
- All logic stays in the JS block — the JSX attribute must only reference the final variable, nothing else
- Do NOT inline arrays, ternaries, or template literals directly in JSX attributes

```javascript
// Good ✓
const borderClass = borders[border]
const bigClass = big !== undefined ? 'big' : ''
const paddedClass = padded !== undefined ? 'padded' : ''
const extraClasses = [borderClass, bigClass, paddedClass, className].filter(Boolean).join(' ')
const fullClass = `base ${extraClasses}`.trim()

return <div className={fullClass} />

// Bad ✗ — logic inside JSX attribute
return (
	<div
		className={['base', borderClass, bigClass].filter(Boolean).join(' ')}
	/>
)

// Bad ✗ — inlined ternary in JSX
return <div className={`base ${condition ? 'big' : ''} ${className}`.trim()} />
```

## Code Quality
- Unused vars/args → prefix with `_`
- Only `console.warn()` and `console.error()` — no `console.log()`
- `variants` object: single line if ≤3 properties, multiline if >3

## File Organization
```
app/                        # App Router pages and layouts
components/ui/              # Reusable UI primitives
components/layout/          # Layout components
components/features/        # Feature-specific components
lib/features/[name]/        # Redux slices ([name]Slice.js)
lib/                        # Store, hooks, shared utilities
assets/css/                 # Global styles, Tailwind theme
public/                     # Static assets
```

## Before Making Changes
- Always read the file first — never assume current state
- Never revert user's manual edits (commented code, removed props, custom styles)
- Check related files for full context before modifying

## Examples

```javascript
// Good ✓
const MyComponent = ({ children, className = '' }) => {
	const extraClasses = [className].filter(Boolean).join(' ')
	const fullClass = `rnd-base ${extraClasses}`.trim()
	return <div className={fullClass}>{children}</div>
}

export default MyComponent

// Bad ✗
import React from 'react'

export default function MyComponent({ children, className = '' }) {
	return <div className={`rnd-base ${className}`.trim()}>{children}</div>;
}
```

## Documentation (JSDoc)

All components, utility functions, and non-obvious logic must have JSDoc comments.

### Components
- `@param {object} props` — always document the props object
- Each prop on its own `@param` line with type and description
- `@returns {JSX.Element}`
- Use `@typedef` for reusable prop shapes or union types

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

### Functions
- One-line summary on the first line
- `@param` for every argument with type and description
- `@returns` with type and description

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
Use `@typedef` for shared types (union strings, object shapes) defined at the top of the file.

```javascript
/**
 * @typedef {'default' | 'dark' | 'red' | 'orange'} BorderVariant
 */

/** @type {Record<BorderVariant, string>} */
const borders = { default: '', dark: 'border-dark', red: 'border-red', orange: 'border-orange' }
```

### Inline Comments
- Use inline comments for non-obvious logic, not for self-explanatory code
- Keep them short and factual

```javascript
// Destroy Typed instance on unmount to prevent memory leaks
return () => typed.destroy()
```
