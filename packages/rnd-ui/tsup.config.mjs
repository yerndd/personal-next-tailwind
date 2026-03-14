import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.js'],
	format: [
		'esm',
		'cjs'
	],
	jsx: true,
	jsxImportSource: 'react',
	dts: false,
	clean: true,
	sourcemap: true,
	external: [
		'react',
		'react-dom',
		'react/jsx-runtime'
	],
	esbuildOptions(options) {
		options.jsx = 'automatic'
	}
})
