import { ISelect, ISelectItem } from '../Select/Select.types'

export interface ILocationsFilterForm {
	species: { label: string; value: string }[]
	dimensions: { label: string; value: string }[]
	onSubmit: (formData: IFormData) => void
}

export interface IFormData {
	type: ISelectItem | null
	dimension: ISelectItem | null
}
