'use client'
import { useState, useEffect } from 'react'

/**
 * Animates text character by character, like a typewriter.
 *
 * @param {string} [text=''] - The full text to type out
 * @param {number} [speed=40] - Milliseconds per character
 * @param {boolean} [start=true] - Whether to start typing immediately
 * @returns {{ displayed: string, isDone: boolean }}
 */
const useTypewriter = (text = '', speed = 40, start = true) => {
	const [displayed, setDisplayed] = useState('')
	const [isDone, setIsDone] = useState(false)

	useEffect(() => {
		if (!start || !text) {
			setDisplayed('')
			setIsDone(!text)
			return
		}

		setDisplayed('')
		setIsDone(false)

		let index = 0
		const interval = setInterval(() => {
			index++
			setDisplayed(text.slice(0, index))
			if (index >= text.length) {
				clearInterval(interval)
				setIsDone(true)
			}
		}, speed)

		return () => clearInterval(interval)
	}, [text, speed, start])

	return { displayed, isDone }
}

export default useTypewriter
