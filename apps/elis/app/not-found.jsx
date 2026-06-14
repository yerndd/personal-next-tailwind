import Link from 'next/link'

/**
 * Custom 404 page.
 *
 * @returns {JSX.Element}
 */
const NotFound = () => {
	return (
		<main>
			<h1>404 — Page Not Found</h1>
			<Link href="/">Go home</Link>
		</main>
	)
}

export default NotFound
