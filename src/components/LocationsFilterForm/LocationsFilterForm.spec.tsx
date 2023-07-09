import LocationsFilterForm from './LocationsFilterForm'
import { render } from '@testing-library/react'
import props from './LocationsFilterForm.testprops'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders LocationsFilterForm', () => {
	render(<LocationsFilterForm {...props} />)
})

test('calls onSubmit func', async () => {
	const onSubmit = jest.fn()
	render(<LocationsFilterForm {...props} onSubmit={onSubmit} />)

	await userEvent.type(screen.getByPlaceholderText(/species/i), 'testvalue')
	await userEvent.type(screen.getByPlaceholderText(/dimension/i), 'testvalue1')

	await userEvent.click(screen.getByRole('button'))
})
