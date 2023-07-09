import { ICharacterFilterForm } from './CharacterFilterForm.types'

const CharacterFilterFormProps: ICharacterFilterForm = {
	genders: [
		{
			label: 'Male',
			value: 'male',
		},
		{
			label: 'Female',
			value: 'female',
		},
	],
	situations: [
		{
			label: 'Alive',
			value: 'alive',
		},
		{
			label: 'Dead',
			value: 'dead',
		},
	],

	onSubmit: (data) => {
		console.log(data)
	},
}
export default CharacterFilterFormProps
