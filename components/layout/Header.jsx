import Image from 'next/image'
import Link from 'next/link'
import Logo from '@assets/img/logo.png'

const Header = () => {
	return (
		<header id='header'>
			<nav className='container mx-auto flex items-center justify-center px-4 py-4'>
				<Link href='/' className='text-xl font-bold'>
					<Image 
						id='header-image'
						src={Logo} 
						alt='RND Logo'
						priority
						quality={90}
						placeholder='blur'
					/>
				</Link>
			</nav>
		</header>
	)
}

export default Header
