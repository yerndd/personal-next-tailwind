/** Force static generation for this route */
export const dynamic = 'force-static'

/** Base URL for all sitemap entries */
const BASE_URL = 'https://rnd-app.com'

/**
 * Generates the XML sitemap for search engine indexing.
 *
 * @returns {import('next').MetadataRoute.Sitemap}
 */
const sitemap = () => [
	{
		url: BASE_URL,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 1
	}
]

export default sitemap
