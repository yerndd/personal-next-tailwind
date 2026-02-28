import '@/assets/css/index.css'
import StoreProvider from '@/lib/StoreProvider'
import Footer from '@/components/layout/Footer'
import Preload from '@/components/layout/Preload'

export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
	title: {
		default: 'Rindho Ananta Samat | Portfolio',
		template: '%s | Rindho Ananta Samat',
	},
	description: 'Personal portfolio website showcasing projects, skills, and professional experience of Rindho Ananta Samat',
	keywords: ['portfolio', 'web developer', 'Rindho Ananta Samat', 'personal website', 'next.js', 'tailwind css'],
	authors: [{ name: 'Rindho Ananta Samat' }],
	creator: 'Rindho Ananta Samat',
	publisher: 'Rindho Ananta Samat',
	alternates: {
		canonical: '/',
	},
	icons: {
		icon: [
			{ url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon/favicon.ico', sizes: 'any' },
		],
		apple: [
			{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{ rel: 'android-chrome', url: '/favicon/android-chrome-192x192.png', sizes: '192x192' },
			{ rel: 'android-chrome', url: '/favicon/android-chrome-512x512.png', sizes: '512x512' },
		],
	},
	manifest: '/favicon/site.webmanifest',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		title: 'Rindho Ananta Samat | Portfolio',
		description: 'Personal portfolio website showcasing projects, skills, and professional experience',
		siteName: 'Rindho Ananta Samat Portfolio',
		images: [
			{
				url: '/favicon/android-chrome-512x512.png',
				width: 512,
				height: 512,
				alt: 'Rindho Ananta Samat Portfolio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rindho Ananta Samat | Portfolio',
		description: 'Personal portfolio website showcasing projects, skills, and professional experience',
		creator: '@yerndd',
		images: ['/favicon/android-chrome-512x512.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: '#ffffff',
}

const RootLayout = ({children}) => {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<StoreProvider>
					{children}
					<Footer />
					<Preload />
				</StoreProvider>
			</body>
		</html>
	)
}

export default RootLayout

