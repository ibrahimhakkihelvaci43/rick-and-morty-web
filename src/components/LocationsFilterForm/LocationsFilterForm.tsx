import Button from '../Button/Button'
import { LocationsFilterFormBase, Form } from './LocationsFilterForm.style'
import { ILocationsFilterForm, ILocationsFilterFormData } from './LocationsFilterForm.types'
import { useState } from 'react'
import Input from '../Input/Input'

const LocationsFilterForm = ({ values, onSubmit }: ILocationsFilterForm) => {
	const [formData, setFormData] = useState<ILocationsFilterFormData>(
		values || {
			type: '',
			dimension: '',
		},
	)

	const onChange = (name: string, value: string) => {
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const onSubmitForm = () => {
		onSubmit(formData)
	}

	return (
		<LocationsFilterFormBase>
			<Form>
				<Input defaultValue={values?.type} placeholder="Species" onChange={(value) => onChange('type', value)} />
				<Input
					defaultValue={values?.dimension}
					placeholder="Dimension"
					onChange={(value) => onChange('dimension', value)}
				/>
			</Form>
			<Button label="APPLY" onClick={onSubmitForm} />
		</LocationsFilterFormBase>
	)
}

export default LocationsFilterForm
