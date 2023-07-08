import DetailCard from './DetailCard'
import { render } from '@testing-library/react'
import props from './DetailCard.testprops'
import { screen } from '@testing-library/react'

test('renders elements corretly', () => {
	render(<DetailCard {...props} />)

	expect(screen.getByText(props.title)).toBeInTheDocument()

	for (let i = 0; i < props.details.length; i++) {
		expect(screen.getByText(props.details[i].label)).toBeInTheDocument()
		expect(screen.getByText(props.details[i].value)).toBeInTheDocument()
	}
})
