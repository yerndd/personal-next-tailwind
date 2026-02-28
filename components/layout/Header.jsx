import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header id="header">
			<nav className="container mx-auto flex items-center justify-center px-4 py-4">
				<Link href="/" className="text-xl font-bold">
					<div className="relative w-[4vw] h-[4vw]">
						<Image 
							id="header-image"
							src="/img/logo.png"
							alt="RND Logo"
							fill
							priority
							quality={90}
							className="object-contain"
						/>
					</div>
				</Link>
			</nav>
		</header>
	)
}

export default Header
