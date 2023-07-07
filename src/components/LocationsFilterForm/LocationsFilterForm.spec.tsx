import LocationsFilterForm from './LocationsFilterForm'
import { render } from '@testing-library/react'
import props from './LocationsFilterForm.testprops'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders LocationsFilterForm', () => {
	render(<LocationsFilterForm {...props} />)
})

test('shows error messages', async () => {
	render(<LocationsFilterForm {...props} />)
	await userEvent.click(screen.getByRole('button'))

	expect(screen.getByText('Please select a type.')).toBeInTheDocument()
	expect(screen.getByText('Please select a dimension.')).toBeInTheDocument()
})

test('calls onSubmit func', async () => {
	const onSubmit = jest.fn()
	render(<LocationsFilterForm {...props} onSubmit={onSubmit} />)

	await userEvent.click(screen.getByText(/species/i))
	await userEvent.click(screen.getByText(props.species[0].label))

	await userEvent.click(screen.getByText(/dimension/i))
	await userEvent.click(screen.getByText(props.dimensions[0].label))

	await userEvent.click(screen.getByRole('button'))

	expect(onSubmit).toHaveBeenCalledWith({
		type: props.species[0],
		dimension: props.dimensions[0],
	})
})
