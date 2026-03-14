/**
 * Site footer — displays copyright notice with the current year.
 *
 * @returns {JSX.Element}
 */
const Footer = () => {
	return (
		<footer className="border-t py-6">
			<div className="container mx-auto px-4 text-center text-gray-600">
				<p>&copy; {new Date().getFullYear()} Rindho Ananta Samat. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
