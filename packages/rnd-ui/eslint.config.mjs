import { defineConfig } from 'eslint/config'
import react from 'eslint-plugin-react'
import globals from 'globals'

export default defineConfig([
	{
		ignores: [
			'dist/**',
			'node_modules/**'
		]
	},
	{
		files: ['**/*.{js,jsx,mjs}'],
		plugins: { react },
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true }
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021
			}
		},
		settings: { react: { version: 'detect' } },
		rules: {
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
			'indent': ['error', 'tab'],
			'quotes': ['error', 'single', { avoidEscape: true }],
			'jsx-quotes': ['error', 'prefer-double'],
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'no-undef': 'error',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'prefer-const': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'comma-dangle': ['error', 'never'],
			'object-curly-spacing': ['error', 'always'],
			'semi': ['error', 'never']
		}
	}
])
