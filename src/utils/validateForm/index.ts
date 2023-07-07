interface IFormData {
	[key: string]: any
}

export interface IErrorMessages {
	[key: string]: string | null
}

interface IValidationResult {
	hasError: boolean
	errorMessages: IErrorMessages
}

export const validateForm = (formData: IFormData): IValidationResult => {
	let hasError = false
	const errorMessages: IErrorMessages = {}

	for (const key in formData) {
		if (!formData[key]) {
			errorMessages[key] = `Please select a ${key}.`
			hasError = true
		}
	}

	return { hasError, errorMessages }
}
