import 'rnd-ui/styles'
import '@/assets/css/index.css'
import StoreProvider from '@/lib/StoreProvider'

/**
 * Next.js site-wide metadata.
 *
 * @type {import('next').Metadata}
 */
export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
	title: {
		default: 'Elis | Rindho Ananta Samat',
		template: '%s | Elis'
	},
	description: 'Elis app by Rindho Ananta Samat',
	keywords: ['elis', 'Rindho Ananta Samat'],
	authors: [{ name: 'Rindho Ananta Samat' }],
	creator: 'Rindho Ananta Samat',
	publisher: 'Rindho Ananta Samat',
	alternates: { canonical: '/' },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	other: { 'Cache-Control': 'no-cache' }
}

/**
 * Next.js viewport configuration.
 *
 * @type {import('next').Viewport}
 */
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: '#ffffff'
}

/**
 * Root layout wrapping every page in the elis app.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element}
 */
const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<StoreProvider>
					{children}
				</StoreProvider>
			</body>
		</html>
	)
}

export default RootLayout
