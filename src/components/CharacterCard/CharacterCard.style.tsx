import styled from 'styled-components'
import Image from 'next/image'

export const CharacterCardBase = styled.div`
	width: 100%;
	box-shadow: 0px 2px 4px 0px #00000024;
`

export const CharacterImage = styled(Image)`
	width: 100%;
	height: 232px;
`

export const Info = styled.div`
	padding: 12px 16px;
`

export const Title = styled.div`
	font-size: 20px;
	font-weight: 500;
	line-height: 30px;
`

export const Description = styled.div`
	font-size: 16px;
	font-weight: 500;
	line-height: 30px;
`