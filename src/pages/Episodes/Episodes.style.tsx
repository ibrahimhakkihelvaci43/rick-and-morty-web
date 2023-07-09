import styled from 'styled-components'
import Image from 'next/image'

export const EpisodesBase = styled.div`
	width: 100%;
`

export const Content = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media (min-width: 750px) {
		flex-direction: row;
		flex-wrap: wrap;

		> div {
			flex: calc(50% - 24px);
		}
	}
`

export const StyledImage = styled(Image)`
	margin: 0 auto;
`



export const Loading = styled.div`
	width: 100%;
	margin-top: 24px;
	display: flex;
	justify-content: center;
`
