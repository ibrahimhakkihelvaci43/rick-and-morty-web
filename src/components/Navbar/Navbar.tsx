import { useEffect, useState } from 'react'
import { Content, NavbarBase, StyledIcon, Header, StyledLink, StyledImage } from './Navbar.style'
import { useRouter } from 'next/router'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const links = [
		{
			label: 'Characters',
			href: '/',
		},
		{
			label: 'Locations',
			href: '/Locations',
		},
		{
			label: 'Episodes',
			href: '/Episodes',
		},
	]

	const onClickItem = (href: string) => {
		router.push(href)
		setIsOpen(false)
	}

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
				<StyledImage onClick={() => router.push('/')} src="/images/logo.png" width={46} height={49} alt="logo" />
				<StyledIcon data-testid="menu-icon" onClick={() => setIsOpen(!isOpen)} />
			</Header>
			{isOpen && (
				<Content>
					{links.map((link, index) => (
						<StyledLink role="link" key={index} onClick={() => onClickItem(link.href)}>
							{link.label}
						</StyledLink>
					))}
				</Content>
			)}
		</NavbarBase>
	)
}

export default Navbar
