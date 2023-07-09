import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

it('renders locatons page with data', async () => {
	const { render } = await getPage({
		route: '/episodes',
	})

	render()

	expect(screen.getAllByTestId('information-card')).toHaveLength(20)
})

it('filters by name', async () => {
	const { render } = await getPage({
		route: '/episodes',
	})

	render()

 	await userEvent.type(screen.getByPlaceholderText(/filter by name.../i), 'Lawnmower Dog')
  
	expect(screen.getAllByTestId('information-card')).toHaveLength(1)
})


it('filters by name', async () => {
	const { render } = await getPage({
		route: '/locations',
	})

	render()

 	await userEvent.type(screen.getByPlaceholderText(/filter by name.../i), 'Abadango')
  
	expect(screen.getAllByTestId('information-card')).toHaveLength(1)
})
