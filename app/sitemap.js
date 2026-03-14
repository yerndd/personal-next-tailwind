export const dynamic = 'force-static'

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
