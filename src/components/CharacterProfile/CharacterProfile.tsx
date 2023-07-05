import { CharacterProfileBase, Name, StyledImage } from './CharacterProfile.style'
import { ICharacterProfile } from './CharacterProfile.types'

const CharacterProfile = ({ name, imageUrl }: ICharacterProfile) => {
	return (
		<CharacterProfileBase>
			<StyledImage width={148} height={148} src={imageUrl} alt="character-image" />
			<Name>{name}</Name>
		</CharacterProfileBase>
	)
}

export default CharacterProfile
