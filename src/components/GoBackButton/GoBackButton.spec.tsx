import GoBackButton from './GoBackButton'
import { render } from '@testing-library/react'

jest.mock('next/router', () => require('next-router-mock'))

test('renders GoBackButton', () => {
	render(<GoBackButton />)
})
