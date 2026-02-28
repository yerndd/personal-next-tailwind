'use client'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

const Preload = () => {
	const [isActive, setIsActive] = useState(true)
	const activeClass = useMemo(() => isActive ? 'active' : '', [isActive])

	const handleImageClick = () => {
		const briefElement = document.getElementById('brief')
		if (briefElement) {
			briefElement.scrollIntoView({ 
				behavior: 'smooth',
				block: 'start'
			})
		}
	}

	useEffect(() => {
		const handleLoad = () => {
			setTimeout(() => {
				setIsActive(false)
				// Enable scrolling and scroll to top
				document.body.style.overflow = 'auto'
				window.scrollTo(0, 0)
			}, 1000)
		}

		if (document.readyState === 'complete') {
			handleLoad()
		} else {
			window.addEventListener('load', handleLoad)
		}

		return () => {
			window.removeEventListener('load', handleLoad)
			document.body.style.overflow = 'auto'
		}
	}, [])

	return (
		<main
			id="preload"
			className={activeClass}
		>
			<div
				id="preload-image"
				onClick={handleImageClick}
				style={{ cursor: 'pointer' }}
			>
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