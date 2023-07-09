import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'

it('renders character detail page with data', async () => {
	const { render } = await getPage({
		route: '/character-detail/1',
	})

	render()

	expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
	expect(screen.getByText('Male')).toBeInTheDocument()
	expect(screen.getByText('Alive')).toBeInTheDocument()
	expect(screen.getByText('Human')).toBeInTheDocument()
	expect(screen.getAllByTestId('character-info-section-list-item')).toHaveLength(57)
})
