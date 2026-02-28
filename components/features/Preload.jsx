'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Preload = () => {
	const [isActive, setIsActive] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsActive(false)
		}, 10000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<main
			id="preload"
			className={`fixed top-0 left-0 bg-white w-full h-full z-50 ${
				isActive ? 'active' : ''
			}`}
		>
			<div id="preload-image" className="relative">
				<Image
					src="/img/logo.png"
					alt="RND Logo"
					fill
					priority
					quality={100}
					className="object-contain"
				/>
			</div>
		</main>
	)
}

export default Preload