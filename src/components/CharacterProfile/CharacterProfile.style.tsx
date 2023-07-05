import styled from 'styled-components'
import Image from 'next/image'

export const CharacterProfileBase = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
`

export const StyledImage = styled(Image)`
	border-radius: 150px;
	border: 5px solid #f2f2f7;
	height: 100px;
	width: 100px;
`

export const Name = styled.div`
	color: #081f32;
	font-size: 32px;
	font-weight: 400;
`
