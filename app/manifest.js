/** Force static generation for this route */
export const dynamic = 'force-static'

/**
 * Generates the Web App Manifest for PWA support.
 * Served at `/manifest.webmanifest` by Next.js.
 *
 * @returns {import('next').MetadataRoute.Manifest}
 */
const manifest = () => ({
	name: 'Rindho Ananta Samat Portfolio',
	short_name: 'Portfolio',
	description: 'Personal portfolio website showcasing projects and skills',
	start_url: '/',
	display: 'standalone',
	background_color: '#ffffff',
	theme_color: '#ffffff',
	icons: [
		{
			src: '/favicon/android-chrome-192x192.png',
			sizes: '192x192',
			type: 'image/png'
		},
		{
			src: '/favicon/android-chrome-512x512.png',
			sizes: '512x512',
			type: 'image/png'
		},
		{
			src: '/favicon/apple-touch-icon.png',
			sizes: '180x180',
			type: 'image/png'
		}
	]
})

export default manifest
