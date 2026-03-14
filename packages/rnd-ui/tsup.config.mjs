import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.js'],
	format: [
		'esm',
		'cjs'
	],
	jsx: true,
	dts: false,
	clean: true,
	sourcemap: true,
	external: [
		'react',
		'react-dom'
	]
})
