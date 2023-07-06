import CharacterInfoSection from './CharacterInfoSection'
import { render, screen } from '@testing-library/react'
import props from './CharacterInfoSection.testprops'
import mockRouter from 'next-router-mock'

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

test('navigates to href', () => {
	render(<CharacterInfoSection {...props} />)

	for (const item of props.items) {
		if (item.href) {
			screen.getByText(item.title).click()
			expect(mockRouter).toMatchObject({
				pathname: item.href,
			})
		}
	}
})
