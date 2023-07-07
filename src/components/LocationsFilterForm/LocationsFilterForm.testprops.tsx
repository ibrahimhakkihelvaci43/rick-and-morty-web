import { ILocationsFilterForm } from './LocationsFilterForm.types'

const LocationsFilterFormProps: ILocationsFilterForm = {
	species: [
		{
			label: 'Human',
			value: 'human',
		},
		{
			label: 'Alien',
			value: 'alien',
		},
	],
	dimensions: [
		{
			label: 'Dimension C-137',
			value: 'Dimension C-137',
		},
		{
			label: 'Post-Apocalyptic Dimension',
			value: 'Post-Apocalyptic Dimension',
		},
	],
	onSubmit: (data) => {
		console.log(data)
	},
}
export default LocationsFilterFormProps
