import Navbar from './Navbar'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

test('renders Navbar', () => {
	render(<Navbar />)
})

test('opens menu when icon is clicked', async () => {
	render(<Navbar />)

	await userEvent.click(screen.getByTestId('menu-icon'))

	expect(screen.getAllByRole('link')).toHaveLength(3)
})
