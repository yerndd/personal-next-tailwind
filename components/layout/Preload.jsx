'use client'
import {
	useEffect, useMemo, useState 
} from 'react'
import Image from 'next/image'

/**
 * Full-screen preload overlay shown while the page is loading.
 * Fades out 1 second after the window `load` event fires,
 * then scrolls the viewport back to the top.
 * Clicking the logo scrolls smoothly to the `#brief` section.
 *
 * @returns {JSX.Element}
 */
const Preload = () => {
	const [isActive, setIsActive] = useState(true)

	// Derive CSS class from active state to drive the CSS transition
	const activeClass = useMemo(() => isActive ? 'active' : '', [isActive])

	/**
	 * Smoothly scrolls to the brief section when the logo is clicked.
	 */
	const handleImageClick = () => {
		const briefElement = document.getElementById('brief')
		if (briefElement) {
			briefElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	useEffect(() => {
		/**
		 * Deactivates the preload overlay after a short delay.
		 * Called once the page has fully loaded.
		 */
		const handleLoad = () => {
			setTimeout(() => {
				setIsActive(false)
				window.scrollTo(0, 0)
			}, 1000)
		}

		// If the page already loaded before this effect ran, call immediately
		if (document.readyState === 'complete') {
			handleLoad()
		} else {
			window.addEventListener('load', handleLoad)
		}

		return () => window.removeEventListener('load', handleLoad)
	}, [])

	return (
		<main id="preload" className={activeClass}>
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
					className="object-contain"
				/>
			</div>
		</main>
	)
}

export default Preload
