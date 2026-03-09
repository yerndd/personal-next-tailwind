const Button = ({
	children, variant = 'primary', className = '', ...props 
}) => {
	const baseStyles = 'rnd-button'
	const variants = { primary: '', red: 'rnd-button-red' }

	return (
		<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	)
}

export default Button
