'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Brief = () => {
	const typedRef = useRef()

	useEffect(() => {
		const typed = new Typed(typedRef.current, {
			strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
			typeSpeed: 50,
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
			<span ref={typedRef} />
		</section>
	)
}

export default Brief