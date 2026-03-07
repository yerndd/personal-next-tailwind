/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	trailingSlash: true,

	images: { unoptimized: true }
}

export default nextConfig