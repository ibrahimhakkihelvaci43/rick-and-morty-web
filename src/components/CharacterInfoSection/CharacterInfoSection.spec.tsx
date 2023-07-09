import CharacterInfoSection from './CharacterInfoSection'
import { render, screen } from '@testing-library/react'
import props from './CharacterInfoSection.testprops'
import mockRouter from 'next-router-mock'
import userEvent from '@testing-library/user-event'

jest.mock('next/router', () => require('next-router-mock'))

test('renders CharacterInfoSection', () => {
	render(<CharacterInfoSection {...props} />)
})

test('renders title', () => {
	render(<CharacterInfoSection {...props} />)

	expect(screen.getByText(props.title)).toBeInTheDocument()
})

test('renders items correctly', () => {
	render(<CharacterInfoSection {...props} />)

	for (const item of props.items) {
		expect(screen.getByText(item.title)).toBeInTheDocument()
		expect(screen.getByText(item.value)).toBeInTheDocument()
	}
})

test('navigates to href', async() => {
	render(<CharacterInfoSection {...props} />)

	for (const item of props.items) {
		if (item.href) {
			await userEvent.click(screen.getByText(item.title))
			expect(mockRouter).toMatchObject({
				pathname: item.href,
			})
		}
	}
})
