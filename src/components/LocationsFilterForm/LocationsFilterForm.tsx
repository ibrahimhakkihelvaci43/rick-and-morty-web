import { IErrorMessages, validateForm } from '~/utils/validateForm'
import Button from '../Button/Button'
import Select from '../Select/Select'
import { ISelectItem } from '../Select/Select.types'
import { LocationsFilterFormBase, Form } from './LocationsFilterForm.style'
import { ILocationsFilterForm, IFormData } from './LocationsFilterForm.types'
import { useState } from 'react'

const LocationsFilterForm = ({ species, dimensions, onSubmit }: ILocationsFilterForm) => {
	const [formData, setFormData] = useState<IFormData>({
		type: null,
		dimension: null,
	})

	const [errorMessages, setErrorMessages] = useState<IErrorMessages>({
		type: null,
		dimension: null,
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
		<LocationsFilterFormBase>
			<Form>
				<Select
					placeholder="Species"
					items={species}
					errorMessage={errorMessages.type}
					onClick={(value) => onChange('type', value)}
				/>
				<Select
					placeholder="Dimension"
					items={dimensions}
					errorMessage={errorMessages.dimension}
					onClick={(value) => onChange('dimension', value)}
				/>
			</Form>
			<Button label="APPLY" onClick={onSubmitForm} />
		</LocationsFilterFormBase>
	)
}

export default LocationsFilterForm
