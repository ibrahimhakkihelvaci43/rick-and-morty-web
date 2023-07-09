import { useEffect, useState } from 'react'
import { SelectBase, Icon, Content, Label, List, ListItem, ErrorMessage } from './Select.style'
import { ISelectItem, ISelect } from './Select.types'
import ArrowDown from '~/assets/icons/ArrowDown'
import ArrowUp from '~/assets/icons/ArrowUp'
import OutsideClickHandler from 'react-outside-click-handler'

const Select = ({ value, placeholder, items, errorMessage, onClick }: ISelect) => {
	const [isActive, setIsActive] = useState(false)
	const [selectedItem, setSelectedItem] = useState<string | null>(value || null)

	const onClickItem = (item: ISelectItem) => {
		setIsActive(false)
		onClick(item.value)
		setSelectedItem(item.value)
	}

	return (
		<OutsideClickHandler
			onOutsideClick={() => {
				setIsActive(false)
			}}
		>
			<SelectBase role="select" onClick={() => setIsActive(!isActive)}>
				<Label>{selectedItem ? items.find((item) => item.value === selectedItem)?.label : placeholder}</Label>
				<Icon>{isActive ? <ArrowUp /> : <ArrowDown />}</Icon>
				{isActive && (
					<Content>
						<List>
							{items.map((item, index) => (
								<ListItem key={index} onClick={() => onClickItem(item)}>
									{item.label}
								</ListItem>
							))}
						</List>
					</Content>
				)}
			</SelectBase>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</OutsideClickHandler>
	)
}

export default Select
