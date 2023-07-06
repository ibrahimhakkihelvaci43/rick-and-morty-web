import InformationCard from './InformationCard'
import { render, screen } from '@testing-library/react'
import props from './InformationCard.testprops'

test('renders InformationCard', () => {
	render(<InformationCard {...props} />)
})

test('renders items correctly', () => {
	render(<InformationCard {...props} />)

	expect(screen.getByText(props.title)).toBeInTheDocument()
	expect(screen.getByText(props.description)).toBeInTheDocument()
	expect(screen.getByText(props.extraValue)).toBeInTheDocument()
})
