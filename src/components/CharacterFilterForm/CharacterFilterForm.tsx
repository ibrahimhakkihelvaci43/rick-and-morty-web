import Button from '../Button/Button'
import Select from '../Select/Select'
import { ISelectItem } from '../Select/Select.types'
import { CharacterFilterFormBase, Form } from './CharacterFilterForm.style'
import { ICharacterFilterForm, ICharacterFilterFormData } from './CharacterFilterForm.types'
import { useState } from 'react'
import Input from '../Input/Input'

const CharacterFilterForm = ({ values, genders, situations, onSubmit }: ICharacterFilterForm) => {
	const [formData, setFormData] = useState<ICharacterFilterFormData>(
		values || {
			species: '',
			gender: null,
			status: null,
		},
	)

	const onChange = (name: string, value: ISelectItem | string) => {
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const onSubmitForm = () => {
		onSubmit(formData)
	}

	return (
		<CharacterFilterFormBase>
			<Form>
				<Input defaultValue={values?.species} placeholder="Species" onChange={(value) => onChange('species', value)} />
				<Select
					value={values?.gender}
					placeholder="Gender"
					items={genders}
					onClick={(value) => onChange('gender', value)}
				/>
				<Select
					value={values?.status}
					placeholder="Status"
					items={situations}
					onClick={(value) => onChange('status', value)}
				/>
			</Form>
			<Button label="APPLY" onClick={onSubmitForm} />
		</CharacterFilterFormBase>
	)
}

export default CharacterFilterForm
