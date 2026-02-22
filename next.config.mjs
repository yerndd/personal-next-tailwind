/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	output: 'export',
	trailingSlash: true,

	images: {
		unoptimized: true,
	},

	experimental: {
		optimizePackageImports: ['react-icons', 'lodash'],
	},
}

export default nextConfig
