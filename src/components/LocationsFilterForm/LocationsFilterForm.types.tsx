export interface ILocationsFilterForm {
	values?: ILocationsFilterFormData
	onSubmit: (formData: ILocationsFilterFormData) => void
}

export interface ILocationsFilterFormData {
	type?: string
	dimension?: string
}
