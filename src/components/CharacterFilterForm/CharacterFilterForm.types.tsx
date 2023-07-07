import { ISelect, ISelectItem } from '../Select/Select.types'

export interface ICharacterFilterForm {
	species: { label: string; value: string }[]
	genders: { label: string; value: string }[]
	situations: { label: string; value: string }[]
	onSubmit: (formData: IFormData) => void
}

export interface IFormData {
	type: ISelectItem | null
	gender: ISelectItem | null
	status: ISelectItem | null
}
