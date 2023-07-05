import { useState } from 'react'
import { SelectBase, Icon, Content, Label, List, ListItem } from './Select.style'
import { ISelect } from './Select.types'
import ArrowDown from '~/assets/icons/ArrowDown'
import ArrowUp from '~/assets/icons/ArrowUp'

const Select = ({ placeholder, items, onClick }: ISelect) => {
	const [isActive, setIsActive] = useState(false)

	const onClickItem = (value: string) => {
		setIsActive(false)
		onClick(value)
		console.log(value)
	}

	return (
		<SelectBase role='select' onClick={() => setIsActive(!isActive)}>
			<Label>{placeholder}</Label>
			<Icon>{isActive ? <ArrowUp /> : <ArrowDown />}</Icon>
			{isActive && (
				<Content>
					<List>
						{items.map((item, index) => (
							<ListItem key={index} onClick={() => onClickItem(item.value)}>
								{item.label}
							</ListItem>
						))}
					</List>
				</Content>
			)}
		</SelectBase>
	)
}

export default Select
