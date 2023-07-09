import { useRouter } from 'next/router'
import { CharacterCardBase, CharacterImage, Info, Title, Description } from './CharacterCard.style'
import { ICharacterCard } from './CharacterCard.types'

const CharacterCard = ({ id, title, description, imageUrl }: ICharacterCard) => {
	const router = useRouter()

	const navigateToDetail = () => {
		router.push(`/character-detail/${id}`)
	}

	return (
		<CharacterCardBase onClick={navigateToDetail}>
			<CharacterImage src={imageUrl} width={100} height={232} alt="character-image" />
			<Info>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Info>
		</CharacterCardBase>
	)
}

export default CharacterCard
