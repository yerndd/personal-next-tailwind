/** Force static generation for this route */
export const dynamic = 'force-static'

/**
 * Generates the XML sitemap for search engine indexing.
 * Served at `/sitemap.xml` by Next.js.
 *
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
	const baseUrl = 'https://rnd-app.com'

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		}
	]
}
