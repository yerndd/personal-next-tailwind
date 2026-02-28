'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const typedArray = [
	'Fullstack',
	'React',
	'Next.js',
	'Vue.js',
	'Nuxt',
	'Spring',
	'Express'
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
		<section id="brief" className="rnd-container h-[100vh]">
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, harum?</p>
			<div>
				<span ref={typedRef} /> Developer
			</div>
		</section>
	)
}

export default Brief