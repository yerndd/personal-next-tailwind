'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const typedArray = [
	'Fullstack',
	'React',
	'Vue.js',
	'Express',
	'Spring'
]

const Brief = () => {
	const typedRef = useRef()

	useEffect(() => {
		const typed = new Typed(typedRef.current, {
			strings: typedArray,
			typeSpeed: 80,
			backSpeed: 30,
			backDelay: 1000,
			loop: true
		})

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy()
		}
	}, [])

	return (
		<section id="brief" className="rnd-container flex items-center">
			<div className="w-1/3 relative h-full">
				<Image
					src="/img/profile.png"
					alt="RND Profile"
					width={500}
					height={500}
					priority
					quality={100}
					className="px-2"
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
		</section>
	)
}

export default Brief