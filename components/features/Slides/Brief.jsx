'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'

import Container from '@/components/ui/Container'

/**
 * Typed.js configuration — defined at module scope to avoid recreation on each render.
 * @type {string[]}
 */
const TYPED_STRINGS = [
	'Fullstack',
	'React',
	'Vue.js',
	'Express',
	'Spring'
]

/** Typed.js instance options */
const TYPED_OPTIONS = {
	strings: TYPED_STRINGS,
	typeSpeed: 80,
	backSpeed: 30,
	backDelay: 1000,
	loop: true
}

/**
 * Brief intro slide — the first section of the portfolio.
 * Displays a profile photo and an animated typing effect
 * cycling through developer roles using Typed.js.
 *
 * @returns {JSX.Element}
 */
const Brief = () => {
	/** @type {React.RefObject<HTMLSpanElement>} */
	const typedRef = useRef(null)

	useEffect(() => {
		const typed = new Typed(typedRef.current, TYPED_OPTIONS)

		// Destroy Typed instance on unmount to prevent memory leaks
		return () => typed.destroy()
	}, [])

	return (
		<Container id="brief" className="flex items-center" big padded>
			<div className="w-1/3 relative h-full">
				<Image
					src="/img/profile.png"
					alt="RND Profile"
					width={500}
					height={500}
					priority
					className="px-10"
					id="profile-image"
				/>
			</div>
			<div className="w-2/3">
				<p className="text-dark-primary text-[20pt]">i am,</p>
				<p className="text-red-dark text-[36pt]">Rindho Ananta<br />Samat</p>
				<p className="text-dark-primary text-[36pt]">
					<span className="font-bold" ref={typedRef} /> Developer
				</p>
			</div>
		</Container>
	)
}

export default Brief
