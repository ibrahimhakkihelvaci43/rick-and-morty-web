import { ICharacterInfoSection } from './CharacterInfoSection.types'

const CharacterInfoSectionProps: ICharacterInfoSection = {
	title: 'Character Info',
	items: [
		{
			title: 'Name',
			value: 'John Doe',
		},
		{
			title: 'Gender',
			value: 'Male',
			extraValue: 'December 2, 2013',
		},
		{
			title: 'Specie',
			value: 'Human',
			href: '/',
		},
	],
}
export default CharacterInfoSectionProps
