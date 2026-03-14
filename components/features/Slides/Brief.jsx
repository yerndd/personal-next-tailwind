'use client'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

/**
 * Rotating developer role strings displayed in the typing animation.
 * @type {string[]}
 */
const typedArray = [
	'Fullstack',
	'React',
	'Vue.js',
	'Express',
	'Spring'
]

/**
 * Brief intro slide — the first section of the portfolio.
 * Displays a profile photo and an animated typing effect
 * cycling through developer roles using Typed.js.
 *
 * @returns {JSX.Element}
 */
const Brief = () => {
	/** @type {React.RefObject<HTMLSpanElement>} */
	const typedRef = useRef()

	useEffect(() => {
		const typed = new Typed(typedRef.current, {
			strings: typedArray,
			typeSpeed: 80,
			backSpeed: 30,
			backDelay: 1000,
			loop: true
		})

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
