import { CharacterCardBase, CharacterImage, Info, Title, Description } from './CharacterCard.style'
import { ICharacterCard } from './CharacterCard.types'

const CharacterCard = ({ title, description, imageUrl }: ICharacterCard) => {
	return (
		<CharacterCardBase>
			<CharacterImage src={imageUrl} width={100} height={232} alt="character-image" />
			<Info>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Info>
		</CharacterCardBase>
	)
}

export default CharacterCard
