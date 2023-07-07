import styled from 'styled-components'

export const SelectBase = styled.div`
	width: 100%;
	height: 56px;
	border: 1px solid #00000080;
	border-radius: 8px;
	position: relative;
	cursor: pointer;
`

export const Icon = styled.div`
	position: absolute;
	right: 14px;
	top: 14px;
`

export const Content = styled.div`
	width: 100%;
	position: absolute;
	top: calc(100% + 8px);
	box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
	border-radius: 8px;
	background-color: #fff;
	z-index: 999;
`

export const Label = styled.div`
	padding: 12px;
	color: rgba(0, 0, 0, 0.6);
	font-size: 16px;
	font-weight: 500;
	line-height: 30px;
`

export const List = styled.ul`
	list-style: none;
	padding: 4px 0;
`

export const ListItem = styled.li`
	padding: 12px 16px;

	&:hover {
		background-color: whitesmoke;
	}
`

export const ErrorMessage = styled.ul`
	color: #ff4545;
	margin-top: 4px;
`
