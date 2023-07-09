import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'

test('renders episode detail page with data', async () => {
	const { render } = await getPage({
		route: '/episode-detail/1',
	})

	render()

	expect(screen.getByText('S01E01')).toBeInTheDocument()
	expect(screen.getByText('Pilot')).toBeInTheDocument()
	expect(screen.getByText('December 2, 2013')).toBeInTheDocument()
	expect(screen.getAllByAltText('character-image')).toHaveLength(19)

})
