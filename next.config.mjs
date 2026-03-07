/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	trailingSlash: true,

	images: {
		deviceSizes: [
			640,
			750,
			828,
			1080,
			1200,
			1920,
			2048,
			3840
		],
		imageSizes: [
			16,
			32,
			48,
			64,
			96,
			128,
			256,
			384
		],
		formats: ['image/webp'],
		qualities: [
			20,
			75,
			90,
			100
		]
	},

	experimental: { optimizePackageImports: ['react-icons', 'lodash'] }
}

export default nextConfig
