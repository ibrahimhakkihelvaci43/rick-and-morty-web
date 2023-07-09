export interface ILocationsFilterForm {
	values?: ILocationsFilterFormData
	onSubmit: (formData: ILocationsFilterFormData) => void
}

export interface ILocationsFilterFormData {
	species?: string
	dimension?: string
}
