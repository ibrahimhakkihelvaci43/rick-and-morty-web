import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('renders locatons page with data', async () => {
	const { render } = await getPage({
		route: '/locations',
	})

	render()

	expect(screen.getAllByTestId('information-card')).toHaveLength(20)
})

test('fetches the filtered data', async () => {
	const { render } = await getPage({
		route: '/locations',
	})

	render()

	await userEvent.click(screen.getByRole('button', { name: /ADVANCED FILTERS/i }))
	await userEvent.type(screen.getByPlaceholderText(/species/i), 'Planet')
	await userEvent.click(screen.getByRole('button', { name: /APPLY/i }))

	expect(screen.getAllByTestId('information-card')).toHaveLength(2)
})



test('filters by name', async () => {
	const { render } = await getPage({
		route: '/locations',
	})

	render()

 	await userEvent.type(screen.getByPlaceholderText(/filter by name.../i), 'Abadango')
  
	expect(screen.getAllByTestId('information-card')).toHaveLength(1)
})
