---
inclusion: always
---

# Project Coding Standards

## ESLint Configuration Rules

This project follows strict ESLint rules. Always adhere to these standards when writing or modifying code:

### Syntax Rules
- **No semicolons**: Use `semi: ['error', 'never']` - never add semicolons at the end of statements
- **Prefer const**: Use `const` for variables that won't be reassigned
- **No var**: Never use `var`, always use `const` or `let`
- **Object shorthand**: Use shorthand syntax for object properties when possible
- **Self-closing tags**: Use self-closing syntax for empty elements (e.g., `<div />` not `<div></div>`)

### React Rules
- **No React import needed**: React 19+ doesn't require importing React in JSX files
- **No prop-types**: PropTypes validation is disabled, use TypeScript or JSDoc if type checking is needed
- **JSX variables**: Ensure all JSX variables are properly used
- **Component exports**: Use arrow function with const, then export default at the bottom (separated pattern)

### JSX Formatting
- **One prop per line**: When component has multiple props, put each on a new line
- **Prop indentation**: Use tab indentation for props
- **Closing bracket**: Align closing bracket with opening tag

### Code Quality
- **Unused variables**: Prefix unused variables/args with underscore `_` to suppress warnings
- **Console statements**: Only `console.warn()` and `console.error()` are allowed, avoid `console.log()`
- **Variants object formatting**: For objects named `variants`, use single line if 3 or fewer properties, multiline if more than 3

### Next.js Rules
- Follow Next.js recommended rules and core web vitals standards
- Use Next.js 15+ App Router conventions

## Code Style Examples

### Good ✓
```javascript
const myFunction = () => {
	const data = { name, age }
	return data
}

// Arrow function with separated export (preferred)
const Component = ({ children }) => {
	const [state, setState] = useState(0)
	return <div>{children}</div>
}

export default Component

// Multi-line JSX with proper formatting
const Header = () => {
	return (
		<Image
			src={logo}
			alt='Logo'
			width={120}
			height={40}
		/>
	)
}

export default Header

// Self-closing empty tags
<div />
<span />

// Variants object - single line if 3 or fewer properties
const variants = { primary: 'btn-primary', secondary: 'btn-secondary', danger: 'btn-danger' }

// Variants object - multiline if more than 3 properties
const variants = {
	primary: 'btn-primary',
	secondary: 'btn-secondary',
	danger: 'btn-danger',
	success: 'btn-success'
}
```

### Bad ✗
```javascript
var myFunction = () => {
	const data = { name: name, age: age };
	return data;
};

import React from 'react';

// Regular function (avoid this)
function Component({ children }) {
	console.log('debug');
	return <div>{children}</div>;
}

export default Component

// Combined export (avoid this)
export default function Component() {
	return <div />
}

// Non-self-closing empty tags
<div></div>
<span></span>
```

## File Organization
- Use App Router structure: `app/` directory for pages and layouts
- Redux slices: `lib/features/[feature-name]/[feature-name]Slice.js`
- Shared utilities: `lib/` directory
- Client components: Add `'use client'` directive when using hooks or browser APIs
- Components: `components/` directory with `ui/`, `layout/`, and `features/` subdirectories

## When Writing Code
1. Never add semicolons
2. Use const by default, let only when reassignment is needed
3. Use object shorthand syntax
4. Avoid console.log, use console.warn or console.error if needed
5. Don't import React in component files
6. Prefix unused parameters with underscore
7. Use arrow function with const, export default at the bottom (separated pattern)
8. Use self-closing tags for empty elements
9. Format multi-prop JSX with one prop per line

## CRITICAL: Before Making Changes
**ALWAYS read the current file content first using readFile or readMultipleFiles before making any changes!**
- Never assume what the code looks like
- Always check current state before modifying
- User may have made manual changes that must be preserved
- Scan all related files to understand the full context
- **NEVER revert user's manual edits** - if user comments out code or removes properties, DO NOT add them back
- **NEVER overwrite user's custom animations or styles** - preserve all user customizations
- If user explicitly states they made a change, respect that change completely
