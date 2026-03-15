import { Container } from 'rnd-ui'
import SeeResumeButton from '../Customs/SeeResumeButton'

/** Date of birth — used to compute age at render time */
const DOB = '2000-11-08'

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

/** Pre-computed age — stable for the lifetime of the module */
const age = getAge(DOB)

/**
 * Profile slide — displays personal info, bio, and contact details.
 *
 * @returns {JSX.Element}
 */
const Profile = () => {
	return (
		<Container
			id="profile"
			className="flex"
			big
			padded
		>
			<div className="w-1/3 px-10 pt-[42dvh]">
				<SeeResumeButton />
			</div>
			<div className="w-2/3 text-base">
				<Container
					border="dark"
					className="px-3 py-2 mb-2"
				>
					<div className="text-2xl">
						<span className="font-bold">R</span>indho{' '}
						<span className="font-bold">A</span>nanta{' '}
						<span className="font-bold">S</span>amat{' '}
						<span className="text-red-dark">(He/Him)</span>
					</div>
					<div className="text-orange-dark">Fullstack Web Developer</div>
					<div className="text-justify">
						I am a knowledgeable and skilled software development professional offering advanced abilities in wide range of programming languages, including Node.js and PHP. I am passionate to learn new things and result oriented person.
					</div>
				</Container>
				<Container
					border="orange"
					className="px-3 py-2 mb-2 flex"
				>
					<div className="w-1/3">Hobby</div>
					<div className="w-2/3">Gaming, Learning</div>
				</Container>
				<Container
					border="green"
					className="px-3 py-2 mb-2 flex"
				>
					<div className="w-1/3">Date of Birth</div>
					<div className="w-2/3">November 8<sup>th</sup> 2000 ({age} y.o)</div>
				</Container>
				<Container
					border="blue"
					className="px-3 py-2 mb-2 flex"
				>
					<div className="w-1/3">Location</div>
					<div className="w-2/3">West Jakarta, Jakarta, Indonesia</div>
				</Container>
				<Container
					border="red"
					className="px-3 py-2 mb-2 flex"
				>
					<div className="w-1/3">Phone</div>
					<div className="w-2/3">+62 819 1010 4411</div>
				</Container>
				<Container
					border="dark"
					className="px-3 py-2 mb-2 flex"
				>
					<div className="w-1/3">Email</div>
					<div className="w-2/3">
						<a
							href="mailto:rindho_samat@rnd-app.com"
							className="text-blue-dark"
						>
							rindho_samat@rnd-app.com
						</a>
					</div>
				</Container>
			</div>
		</Container>
	)
}

export default Profile
