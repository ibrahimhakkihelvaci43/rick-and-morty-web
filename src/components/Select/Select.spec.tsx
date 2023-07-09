import Select from './Select'
import { render } from '@testing-library/react'
import props from './Select.testprops'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

test('renders Select', () => {
	render(<Select {...props} />)
})

test('opens menu when clicked', async () => {
	render(<Select {...props} />)
	await userEvent.click(screen.getByRole('select'))
	expect(screen.getByRole('list')).toBeInTheDocument()
})

test('calls function when list item is clicked', async () => {
	const onClick = jest.fn()
	render(<Select {...props} onClick={onClick} />)

	await userEvent.click(screen.getByRole('select'))
	await userEvent.click(screen.getAllByRole('listitem')[0])

	expect(onClick).toHaveBeenCalledWith(props.items[0].value)
})

test('when click on element, placeholder changes', async () => {
	render(<Select {...props} />)

	await userEvent.click(screen.getByRole('select'))
	await userEvent.click(screen.getAllByRole('listitem')[0])

	expect(screen.getByText(props.items[0].label)).toBeInTheDocument()
})
