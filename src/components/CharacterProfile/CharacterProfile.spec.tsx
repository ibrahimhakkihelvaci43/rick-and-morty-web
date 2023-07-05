import CharacterProfile from './CharacterProfile'
import { render } from '@testing-library/react'
import props from './CharacterProfile.testprops'
import { screen } from '@testing-library/react'

test('renders elements corretly', () => {
	render(<CharacterProfile {...props} />)

	expect(screen.getByText(/rick sanchez/i)).toBeInTheDocument()
	expect(screen.getByRole('img')).toBeInTheDocument()
})
