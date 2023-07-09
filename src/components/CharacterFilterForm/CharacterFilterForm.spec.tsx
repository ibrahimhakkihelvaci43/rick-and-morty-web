import CharacterFilterForm from './CharacterFilterForm'
import { render } from '@testing-library/react'
import props from './CharacterFilterForm.testprops'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders CharacterFilterForm', () => {
	render(<CharacterFilterForm {...props} />)
})

test('calls onSubmit func', async () => {
	const onSubmit = jest.fn()
	render(<CharacterFilterForm {...props} onSubmit={onSubmit} />)

	const input = screen.getByRole('textbox')
	await userEvent.type(input, 'testvalue')

	await userEvent.click(screen.getByText(/gender/i))
	await userEvent.click(screen.getByText(props.genders[0].label))

	await userEvent.click(screen.getByText(/status/i))
	await userEvent.click(screen.getByText(props.situations[0].label))

	await userEvent.click(screen.getByRole('button'))

	expect(onSubmit).toHaveBeenCalledWith({
		species: 'testvalue',
		gender: props.genders[0].value,
		status: props.situations[0].value,
	})
})
 