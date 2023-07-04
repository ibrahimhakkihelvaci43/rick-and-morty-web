import Button from './Button'
import { render } from '@testing-library/react'
import props from './Button.testprops'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import FilterList from '~/assets/icons/FilterList'

test('renders button', () => {
	render(<Button {...props} />)
})

test('calls function when button is clicked', async () => {
	const onClick = jest.fn()
	render(<Button {...props} onClick={onClick} />)

	await userEvent.click(screen.getByRole('button'))

	expect(onClick).toHaveBeenCalled()
})

test('renders prefix element', async () => {
	render(<Button {...props} prefix={<FilterList />} />)

	expect(screen.getByRole('img')).toBeInTheDocument()
})
