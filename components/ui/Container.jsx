/**
 * @typedef {'default' | 'dark' | 'red' | 'orange' | 'green' | 'blue'} BorderVariant
 */

/** @type {Record<BorderVariant, string>} */
const borders = {
	default: '', dark: 'border-dark', red: 'border-red', orange: 'border-orange', green: 'border-green', blue: 'border-blue'
}

/**
 * Layout container component with optional border variant, full-height, and padding modes.
 * Renders as a `<section>` element.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Content to render inside the container
 * @param {BorderVariant} [props.border='default'] - Border color variant
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {boolean} [props.big] - Enables full viewport height mode (`big` class)
 * @param {boolean} [props.padded] - Enables padding mode (`padded` class)
 * @returns {JSX.Element}
 */
const Container = ({
	children, border = 'default', className = '', big, padded, ...props
}) => {
	const borderClass = borders[border]
	const bigClass = big !== undefined ? 'big' : ''
	const paddedClass = padded !== undefined ? 'padded' : ''
	const extraClasses = [
		borderClass,
		bigClass,
		paddedClass,
		className
	].filter(Boolean).join(' ')
	const fullClass = `rnd-container ${extraClasses}`.trim()

	return (
		<section className={fullClass} {...props}>
			{children}
		</section>
	)
}

export default Container
