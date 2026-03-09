const Button = ({
	children, variant = 'dark', className = '', ...props 
}) => {
	const baseStyles = 'rnd-button'
	const variants = { dark: '', red: 'rnd-button-red' }

	return (
		<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	)
}

export default Button
