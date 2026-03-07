/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/personal-next-tailwind',
	assetPrefix: '/personal-next-tailwind',
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	trailingSlash: true,

	images: { unoptimized: true }
}

export default nextConfig