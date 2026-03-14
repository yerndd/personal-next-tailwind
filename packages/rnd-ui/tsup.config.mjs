import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
	entry: ['src/index.js'],
	format: [
		'esm',
		'cjs'
	],
	jsx: true,
	dts: false,
	// Only clean on full build, not during watch — prevents wiping styles.css
	clean: !options.watch,
	sourcemap: true,
	external: [
		'react',
		'react-dom',
		'react/jsx-runtime'
	],
	esbuildOptions(esbuildOpts) {
		esbuildOpts.jsx = 'automatic'
	}
}))
