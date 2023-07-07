import { validateForm } from './validateForm'

test('should return no errors if all fields are filled', () => {
	const formData = {
		type: 'species',
		gender: 'male',
		status: 'active',
	}

	const { hasError, errorMessages } = validateForm(formData)

	expect(hasError).toBe(false)
	expect(errorMessages).toEqual({})
})

test('should return errors if any field is missing', () => {
	const formData = {
		type: 'species',
		gender: null,
		status: '',
	}

	const { hasError, errorMessages } = validateForm(formData)

	expect(hasError).toBe(true)
	expect(errorMessages).toEqual({
		gender: 'Please select a gender.',
		status: 'Please select a status.',
	})
})
