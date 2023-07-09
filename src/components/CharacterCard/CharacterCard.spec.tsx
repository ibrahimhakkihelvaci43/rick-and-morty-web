import CharacterCard from './CharacterCard'
import { render } from '@testing-library/react'
import props from './CharacterCard.testprops'
import { screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import userEvent from '@testing-library/user-event'

jest.mock('next/router', () => require('next-router-mock'))
test('renders elements corretly', () => {
	render(<CharacterCard {...props} />)

	expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument()
	expect(screen.getByText(/Human/i)).toBeInTheDocument()
	expect(screen.getByRole('img')).toBeInTheDocument()
})

test('navigates to detail when is clicked', async () => {
	render(<CharacterCard {...props} />)
	await userEvent.click(screen.getByRole('img'))
	expect(mockRouter).toMatchObject({ pathname: '/character-detail/1' })
})
