'use client'
import Button from '@/components/ui/Button'

/** Path to the resume PDF served from the public directory */
const RESUME_PATH = '/resume.pdf'

/**
 * Button that opens the resume PDF in a new browser tab.
 * Marked as a client component since it uses a browser API (`window.open`).
 *
 * @returns {JSX.Element}
 */
const SeeResumeButton = () => {
	/** Opens the resume PDF in a new tab */
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
