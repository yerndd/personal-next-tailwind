import {defineConfig} from 'eslint/config'
import react from 'eslint-plugin-react'
import nextPlugin from '@next/eslint-plugin-next'
import globals from 'globals'

export default defineConfig([
	{
		ignores: [
			'package-lock.json',
			'package.json',
			'.next/**',
			'node_modules/**',
			'out/**',
			'build/**',
			'dist/**',
			'public/**',
		],
	},
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		plugins: {
			react,
			'@next/next': nextPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
			'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
			'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
			'react/self-closing-comp': ['error', { component: true, html: true }],
			'no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
			'no-console': ['warn', {allow: ['warn', 'error']}],
			'prefer-const': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'semi': ['error', 'never'],
		},
	},
])
