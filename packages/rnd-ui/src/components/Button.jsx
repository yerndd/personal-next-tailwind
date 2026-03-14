/**
 * @typedef {'dark' | 'red'} ButtonVariant
 */

/** @type {Record<ButtonVariant, string>} */
const variants = { dark: '', red: 'rnd-button-red' }

/**
 * Base button component with variant support.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Button label or content
 * @param {ButtonVariant} [props.variant='dark'] - Visual style variant
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Native button attributes
 * @returns {JSX.Element}
 */
const Button = ({
	children, variant = 'dark', className = '', ...props
}) => {
	const variantClass = variants[variant]
	const extraClasses = [variantClass, className].filter(Boolean).join(' ')
	const fullClass = `rnd-button ${extraClasses}`.trim()

	return (
		<button className={fullClass} {...props}>
			{children}
		</button>
	)
}

export default Button
