import CharacterFilterForm from './CharacterFilterForm'
import { render } from '@testing-library/react'
import props from './CharacterFilterForm.testprops'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders elements corretly', () => {
	render(<CharacterFilterForm {...props} />)
})

test('shows error messages', async () => {
	render(<CharacterFilterForm {...props} />)
	await userEvent.click(screen.getByRole('button'))

	expect(screen.getByText('Please select a type.')).toBeInTheDocument()
	expect(screen.getByText('Please select a gender.')).toBeInTheDocument()
	expect(screen.getByText('Please select a status.')).toBeInTheDocument()
})

test('calls onSubmit func', async () => {
	const onSubmit = jest.fn()
	render(<CharacterFilterForm {...props} onSubmit={onSubmit} />)

	await userEvent.click(screen.getByText(/species/i))
	await userEvent.click(screen.getByText(props.species[0].label))

	await userEvent.click(screen.getByText(/gender/i))
	await userEvent.click(screen.getByText(props.genders[0].label))

	await userEvent.click(screen.getByText(/status/i))
	await userEvent.click(screen.getByText(props.situations[0].label))

	await userEvent.click(screen.getByRole('button'))

	expect(onSubmit).toHaveBeenCalledWith({
		type: props.species[0],
		gender: props.genders[0],
		status: props.situations[0],  
	})
})
