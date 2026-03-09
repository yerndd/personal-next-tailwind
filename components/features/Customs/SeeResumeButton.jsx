'use client'
import Button from '@/components/ui/Button'

const SeeResumeButton = () => {
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