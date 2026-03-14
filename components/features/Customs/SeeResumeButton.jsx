'use client'
import Button from '@/components/ui/Button'

/**
 * Button that opens the resume PDF in a new browser tab.
 * Marked as a client component since it uses a browser API (`window.open`).
 *
 * @returns {JSX.Element}
 */
const SeeResumeButton = () => {
	/** Opens `/resume.pdf` in a new tab */
	const buttonClicked = () => window.open('/resume.pdf', '_blank')

	return (
		<Button
			variant="red"
			onClick={buttonClicked}
		>
			See Resume
		</Button>
	)
}

export default SeeResumeButton
