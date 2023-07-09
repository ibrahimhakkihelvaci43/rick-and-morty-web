import {
	CharacterInfoSectionBase,
	Content,
	ListItem,
	Title,
	ListItemTitle,
	ListItemValue,
	StyledIcon,
	ExtraValue,
} from './CharacterInfoSection.style'
import { ICharacterInfoSection } from './CharacterInfoSection.types'
import { useRouter } from 'next/router'

const CharacterInfoSection = ({ title, items }: ICharacterInfoSection) => {
	const router = useRouter()

	const navigateToPage = (href: string) => {
		router.push(href)
	}
	return (
		<CharacterInfoSectionBase>
			<Title>{title}</Title>
			<Content>
				{items.map((item, index) => (
					<ListItem
						data-testid="character-info-section-list-item"
						key={index}
						onClick={() => (item.href ? navigateToPage(item.href) : null)}
						isLink={!!item.href}
					>
						<ListItemTitle>{item.title}</ListItemTitle>
						<ListItemValue>{item.value}</ListItemValue>
						{item.href && <StyledIcon />}
						{item.extraValue && <ExtraValue>{item.extraValue}</ExtraValue>}
					</ListItem>
				))}
			</Content>
		</CharacterInfoSectionBase>
	)
}

export default CharacterInfoSection
