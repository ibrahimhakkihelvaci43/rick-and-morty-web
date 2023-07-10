import { ILocationsFilterForm } from './LocationsFilterForm.types'

const LocationsFilterFormProps: ILocationsFilterForm = {
	onSubmit: (data) => {
		console.log(data)
	},
}
export default LocationsFilterFormProps
