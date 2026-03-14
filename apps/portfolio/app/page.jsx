import Brief from '@/components/features/Slides/Brief'
import Profile from '@/components/features/Slides/Profile'
import Education from '@/components/features/Slides/Education'

/**
 * Home page — renders the three main portfolio slides in order.
 *
 * @returns {JSX.Element}
 */
const Page = () => {
	return (
		<>
			<Brief />
			<Profile />
			<Education />
		</>
	)
}

export default Page
