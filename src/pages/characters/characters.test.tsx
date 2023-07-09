import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders locatons page with data', async () => {
	const { render } = await getPage({
		route: '/',
	})

	render()

	expect(screen.getAllByAltText('character-image')).toHaveLength(20)
})

test('fetches the filtered data', async () => {
	const { render } = await getPage({
		route: '/',
	})

	render()

	await userEvent.click(screen.getByRole('button', { name: /ADVANCED FILTERS/i }))
	await userEvent.type(screen.getByPlaceholderText(/species/i), 'Human')
	await userEvent.click(screen.getByText(/gender/i))
	await userEvent.click(screen.getByText('Male'))
	await userEvent.click(screen.getByText(/status/i))
	await userEvent.click(screen.getByText(/alive/i))
	await userEvent.click(screen.getByRole('button', { name: /APPLY/i }))

	expect(screen.getAllByAltText('character-image')).toHaveLength(20)
})

test('filters by name', async () => {
	const { render } = await getPage({
		route: '/',
	})

	render()

	await userEvent.type(screen.getByPlaceholderText(/filter by name.../i), 'Morty Smith')

	expect(screen.getAllByAltText('character-image')).toHaveLength(1)
})
