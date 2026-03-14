'use client'
import { Button } from 'rnd-ui'

/** Path to the resume PDF served from the public directory */
const RESUME_PATH = '/resume.pdf'

/**
 * Button that opens the resume PDF in a new browser tab.
 *
 * @returns {JSX.Element}
 */
const SeeResumeButton = () => {
	const handleClick = () => window.open(RESUME_PATH, '_blank')

	return (
		<Button
			variant="red"
			onClick={handleClick}
		>
			See Resume
		</Button>
	)
}

export default SeeResumeButton
