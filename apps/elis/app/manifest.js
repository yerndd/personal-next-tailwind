/** Force static generation for this route */
export const dynamic = 'force-static'

/**
 * Generates the Web App Manifest for PWA support.
 *
 * @returns {import('next').MetadataRoute.Manifest}
 */
const manifest = () => ({
	name: 'Elis',
	short_name: 'Elis',
	description: 'Elis app by Rindho Ananta Samat',
	start_url: '/',
	display: 'standalone',
	background_color: '#ffffff',
	theme_color: '#ffffff',
	icons: []
})

export default manifest
