import styled from 'styled-components'
import NavigateNext from '~/assets/icons/NavigateNext'

export const InformationCardBase = styled.div`
	margin: 50px;
	width: 312px;
	height: 128px;
	border-radius: 4px;
	background-color: #fafafa;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 4px 0px rgba(0, 0, 0, 0.12),
		0px 1px 5px 0px rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const Title = styled.div`
	color: rgba(0, 0, 0, 0.87);
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 30px;
`

export const Description = styled.div`
	color: rgba(0, 0, 0, 0.6);
	font-size: 16px;
	font-weight: 500;
	line-height: 30px;
`

export const ExtraInfo = styled.div`
	color: #000;
	font-size: 16px;
	font-weight: 500;
	line-height: 30px;
`
