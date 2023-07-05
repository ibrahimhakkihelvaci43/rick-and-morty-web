import { useEffect, useState } from 'react'
import { Content, NavbarBase, StyledIcon, Header, StyledLink } from './Navbar.style'
import Image from 'next/image'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const links = [
		{
			label: 'Characters',
			href: '/',
		},
		{
			label: 'Locations',
			href: '/locations',
		},
		{
			label: 'Episodes',
			href: '/episodes',
		},
	]

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return (
		<NavbarBase>
			<Header>
				<Image src="/images/logo.png" width={46} height={49} alt="logo" />
				<StyledIcon data-testid="menu-icon" onClick={() => setIsOpen(!isOpen)} />
			</Header>
			{isOpen && (
				<Content>
					{links.map((link, index) => (
						<StyledLink key={index} href={link.href}>
							{link.label}
						</StyledLink>
					))}
				</Content>
			)}
		</NavbarBase>
	)
}

export default Navbar
