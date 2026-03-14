'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

/** Delay in ms before the preload overlay fades out after page load */
const PRELOAD_DELAY = 1000

/** Scroll options used when navigating to the brief section */
const SCROLL_OPTIONS = { behavior: 'smooth', block: 'start' }

/**
 * Full-screen preload overlay shown while the page is loading.
 * Fades out after page load, then scrolls the viewport back to the top.
 * Clicking the logo scrolls smoothly to the `#brief` section.
 *
 * @returns {JSX.Element}
 */
const Preload = () => {
	const [isActive, setIsActive] = useState(true)

	// Derive class string directly — no useMemo needed for a trivial ternary
	const activeClass = isActive ? 'active' : ''

	/**
	 * Smoothly scrolls to the brief section when the logo is clicked.
	 */
	const handleImageClick = () => {
		const briefElement = document.getElementById('brief')
		if (briefElement) {
			briefElement.scrollIntoView(SCROLL_OPTIONS)
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
			}, PRELOAD_DELAY)
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
				role="button"
				tabIndex={0}
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
