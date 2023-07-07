import { IErrorMessages, validateForm } from '~/utils/validateForm'
import Button from '../Button/Button'
import Select from '../Select/Select'
import { ISelectItem } from '../Select/Select.types'
import { CharacterFilterFormBase, Form } from './CharacterFilterForm.style'
import { ICharacterFilterForm, IFormData } from './CharacterFilterForm.types'
import { useEffect, useState } from 'react'

const CharacterFilterForm = ({ species, genders, situations, onSubmit }: ICharacterFilterForm) => {
	const [formData, setFormData] = useState<IFormData>({
		type: null,
		gender: null,
		status: null,
	})

	const [errorMessages, setErrorMessages] = useState<IErrorMessages>({
		type: null,
		gender: null,
		status: null,
	})

	const onChange = (name: string, value: ISelectItem) => {
		setFormData({
			...formData,
			[name]: value,
		})

		setErrorMessages({
			...errorMessages,
			[name]: null,
		})
	}

	const onSubmitForm = () => {
		const { hasError, errorMessages } = validateForm(formData)

		if (!hasError) {
			onSubmit(formData)
		} else {
			setErrorMessages(errorMessages)
		}
	}

	return (
		<CharacterFilterFormBase>
			<Form>
				<Select
					placeholder="Species"
					items={species}
					errorMessage={errorMessages.type}
					onClick={(value) => onChange('type', value)}
				/>
				<Select
					placeholder="Gender"
					items={genders}
					errorMessage={errorMessages.gender}
					onClick={(value) => onChange('gender', value)}
				/>
				<Select
					placeholder="Status"
					items={situations}
					errorMessage={errorMessages.status}
					onClick={(value) => onChange('status', value)}
				/>
			</Form>
			<Button label="APPLY" onClick={onSubmitForm} />
		</CharacterFilterFormBase>
	)
}

export default CharacterFilterForm
