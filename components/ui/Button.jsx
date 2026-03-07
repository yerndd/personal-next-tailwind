const Button = ({
	children, variant = 'red', className = '', ...props 
}) => {
	const baseStyles = 'rnd-button'
	const variants = { red: '' }

	return (
		<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	)
}

export default Button
