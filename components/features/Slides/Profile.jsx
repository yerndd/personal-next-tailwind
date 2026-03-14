import Container from '@/components/ui/Container'
import SeeResumeButton from '../Customs/SeeResumeButton'

/**
 * Calculates the current age from a date of birth string.
 *
 * @param {string} dob - Date of birth in `YYYY-MM-DD` format
 * @returns {number} Current age in years
 */
const getAge = (dob) => {
	const ageDate = new Date(Date.now() - new Date(dob).getTime())
	return ageDate.getUTCFullYear() - 1970
}

/**
 * Profile slide section.
 * Displays personal info including name, role, bio, and contact details.
 * Also renders the resume download button.
 *
 * @returns {JSX.Element}
 */
const Profile = () => {
	const age = getAge('2000-11-08')

	return (
		<Container id="profile" className="flex" big padded>
			<div className="w-1/3 px-10 pt-[42dvh]">
				<SeeResumeButton />
			</div>
			<div className="w-2/3 text-base">
				<Container border="dark" className="px-3 py-2 mb-2">
					<div className="text-2xl">
						Rindho Ananta Samat
						<span className="text-red-dark">
							(He/Him)
						</span>
					</div>
					<div className="text-orange-dark">
						Fullstack Web Developer
					</div>
					<div className="text-justify">
						I am a knowledgeable and skilled software development professional offering advanced abilities in wide range of programming languages, including Node.js and PHP. I am passionate to learn new things and result oriented person.
					</div>
				</Container>
				<Container border="orange" className="px-3 py-2 mb-2 flex">
					<div className="w-1/3">Hobby</div>
					<div className="w-2/3">Gaming, Learning</div>
				</Container>
				<Container border="green" className="px-3 py-2 mb-2 flex">
					<div className="w-1/3">Date of Birth</div>
					<div className="w-2/3">November 8<sup>th</sup> 2000 ({age} y.o)</div>
				</Container>
				<Container border="red" className="px-3 py-2 mb-2 flex">
					<div className="w-1/3">Location</div>
					<div className="w-2/3">West Jakarta, Jakarta, Indonesia</div>
				</Container>
				<Container border="blue" className="px-3 py-2 mb-2 flex">
					<div className="w-1/3">Phone</div>
					<div className="w-2/3">+62 819 1010 4411</div>
				</Container>
				<Container border="dark" className="px-3 py-2 mb-2 flex">
					<div className="w-1/3">Email</div>
					<div className="w-2/3">
						<a href="mailto:rindho_samat@rnd-app.com" className="text-blue-dark">
							rindho_samat@rnd-app.com
						</a>
					</div>
				</Container>
			</div>
		</Container>
	)
}

export default Profile
