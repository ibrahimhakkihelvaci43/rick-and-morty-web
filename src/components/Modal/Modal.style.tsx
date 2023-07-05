import styled from 'styled-components'
import Close from '~/assets/icons/Close'

export const ModalBase = styled.div`
	min-width: 312px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 4px 0px rgba(0, 0, 0, 0.12),
		0px 1px 5px 0px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	padding: 16px 16px 19px 16px;
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Title = styled.div`
	color: rgba(0, 0, 0, 0.87);
	font-size: 20px;
	font-weight: 500;
	line-height: 30px;
`

export const StyledIcon = styled(Close)`
	cursor: pointer;
`

export const Content = styled.div`
	margin-top: 16px;
`
