const Container = ({
	children, border, className = '', big, padded, ...props 
}) => {
	const baseStyles = 'rnd-container'
	const bigClass = big !== undefined ? 'big' : ''
	const paddedClass = padded !== undefined ? 'padded' : ''
	const variants = {
		dark: 'border-dark', red: 'border-red', orange: 'border-orange', green: 'border-green', blue: 'border-blue'
	}

	return (
		<section className={`${baseStyles} ${variants[border]} ${bigClass} ${paddedClass} ${className}`.trim()} {...props}>
			{children}
		</section>
	)
}

export default Container
