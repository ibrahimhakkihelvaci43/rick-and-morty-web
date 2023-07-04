import Input from './Input'
import { render } from '@testing-library/react'
import props from './Input.testprops'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import Search from '~/assets/icons/Search'

test('renders Input', () => {
	render(<Input {...props} />)
})

test('calls the function when something is typed', async () => {
	const onChange = jest.fn()
	render(<Input {...props} onChange={onChange} />)

	const input = screen.getByRole('textbox')
	await userEvent.type(input, 'testvalue')

	expect(onChange).toHaveBeenCalledWith('testvalue')
})


test('renders prefix element', async () => {
	render(<Input {...props} prefix={<Search />} />)

	expect(screen.getByRole('img')).toBeInTheDocument()
})
