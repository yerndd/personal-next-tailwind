'use client'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

const Preload = () => {
	const [isActive, setIsActive] = useState(true)
	const activeClass = useMemo(() => isActive ? 'active' : '', [isActive])

	useEffect(() => {
		const handleLoad = () => {
			setTimeout(() => {
				setIsActive(false)
			}, 1000)
		}

		if (document.readyState === 'complete') {
			handleLoad()
		} else {
			window.addEventListener('load', handleLoad)
		}

		return () => window.removeEventListener('load', handleLoad)
	}, [])

	return (
		<main
			id="preload"
			className={activeClass}
		>
			<div id="preload-image">
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