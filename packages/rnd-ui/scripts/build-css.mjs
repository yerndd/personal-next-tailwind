/**
 * Compiles rnd-ui CSS (variables + components) into dist/styles.css.
 * Runs postcss with autoprefixer and cssnano (production only).
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const input = readFileSync(join(root, 'src/styles/index.css'), 'utf8')

const plugins = [
	postcssImport(),
	autoprefixer(),
	cssnano({ preset: 'default' })
]

const result = await postcss(plugins).process(input, {
	from: join(root, 'src/styles/index.css'),
	to: join(root, 'dist/styles.css')
})

mkdirSync(join(root, 'dist'), { recursive: true })
writeFileSync(join(root, 'dist/styles.css'), result.css)

// Copy font file so the relative url('./fonts/...') in styles.css resolves correctly
mkdirSync(join(root, 'dist/fonts'), { recursive: true })
copyFileSync(
	join(root, 'src/styles/fonts/Alatsi-Regular.ttf'),
	join(root, 'dist/fonts/Alatsi-Regular.ttf')
)

console.warn('rnd-ui: styles.css built successfully')
