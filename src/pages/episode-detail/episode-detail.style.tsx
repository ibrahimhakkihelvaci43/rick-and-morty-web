import styled from 'styled-components'

export const LocationDetailBase = styled.div`
	width: 100%;
`

export const Content = styled.div`
	width: 100%;
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	margin-top: 29px;
`

export const SectionTitle = styled.div`
	color: #8e8e93;
	font-size: 20px;
	font-weight: 500;
	line-height: 30px;
	margin-bottom: 16px;
`

export const Characters = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media (min-width: 750px) {
		flex-direction: row;
		flex-wrap: wrap;

		> div {
			width: calc(50% - 24px);
		}
	}
`
