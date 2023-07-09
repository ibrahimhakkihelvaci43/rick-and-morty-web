import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'

it('renders location detail page with data', async () => {
	const { render } = await getPage({
		route: '/location-detail/1',
	})

	render()

	expect(screen.getByText('Earth (C-137)')).toBeInTheDocument()
	expect(screen.getByText('Planet')).toBeInTheDocument()
	expect(screen.getByText('Dimension C-137')).toBeInTheDocument()
    expect(screen.getAllByAltText('character-image')).toHaveLength(27)
})
