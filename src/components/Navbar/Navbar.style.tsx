import Link from 'next/link'
import styled from 'styled-components'
import Menu from '~/assets/icons/Menu'

export const NavbarBase = styled.div`
	width: 100%;
	box-shadow: 2px 0px 8px 2px rgba(0, 0, 0, 0.1);
	height: 60px;
	position: sticky;
	top: 0;
	background-color: #fff;
`

export const Header = styled.div`
	padding: 6px 18px 6px 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const StyledIcon = styled(Menu)`
	cursor: pointer;
`

export const Content = styled.div`
	height: calc(100vh - 60px);
	width: 100%;
	position: absolute;
	top: calc(60px);
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	padding-top: 48px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 46px;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
	font-size: 24px;
	font-weight: 500;
	line-height: 30px;
`
