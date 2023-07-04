import CharacterCard from './CharacterCard'
import { render } from '@testing-library/react'
import props from './CharacterCard.testprops'
import { screen } from '@testing-library/react'

test('renders elements corretly', () => {
	render(<CharacterCard {...props} />)

	expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument()
	expect(screen.getByText(/Human/i)).toBeInTheDocument()
	expect(screen.getByRole('img')).toBeInTheDocument()
})
