import styled from 'styled-components'
import NavigateNext from '~/assets/icons/NavigateNext'

export const CharacterInfoSectionBase = styled.div``

export const Title = styled.div`
	color: #8e8e93;
	font-size: 20px;
	font-weight: 500;
	line-height: 30px;
`

export const Content = styled.div`
	margin-top: 13px;
	padding: 0 16px;
`

export const ListItem = styled.div<{isLink?: boolean}>`
	margin-top: 13px;
	border-bottom: 1px solid rgba(33, 33, 33, 0.08);
	position: relative;
	cursor:   ${(props) => (props.isLink ? 'pointer' : 'unset')};
`

export const ListItemTitle = styled.div`
	color: #081f32;
	font-size: 20px;
	font-weight: 500;
	line-height: 30px;
`

export const ListItemValue = styled.div`
	color: #6e798c;
	font-size: 14px;
	font-weight: 500;
	line-height: 30px;
`

export const ExtraValue = styled.div`
	color: #8e8e93;
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 8px;
`

export const StyledIcon = styled(NavigateNext)`
	position: absolute;
	top: 16px;
	right: 16px;
	cursor: pointer;
`
