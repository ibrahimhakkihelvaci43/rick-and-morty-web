import { ISelect, ISelectItem } from '../Select/Select.types'

export interface ICharacterFilterForm {
	defaultFormData?: ICharacterFilterFormData
	genders: { label: string; value: string }[]
	situations: { label: string; value: string }[]
	values?: ICharacterFilterFormData
	onSubmit: (formData: ICharacterFilterFormData) => void
}

export interface ICharacterFilterFormData {
	species?: string
	gender: string | null
	status: string | null
}
