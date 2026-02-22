import Link from 'next/link'

export const metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist',
}

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center px-4'>
			<div className='text-center'>
				<h1 className='text-9xl font-bold text-gray-200'>404</h1>
				<h2 className='mt-4 text-3xl font-semibold text-gray-800'>Page Not Found</h2>
				<p className='mt-2 text-gray-600'>
					Sorry, the page you are looking for does not exist or has been moved.
				</p>
				<Link
					href='/'
					className='mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700'
				>
					Go Back Home
				</Link>
			</div>
		</div>
	)
}
