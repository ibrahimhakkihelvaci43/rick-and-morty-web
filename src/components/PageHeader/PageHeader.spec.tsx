import PageHeader from './PageHeader'
import { render } from '@testing-library/react'
import props from './PageHeader.testprops'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

test('renders PageHeader', () => {
	render(<PageHeader {...props} />)
})

test('button displays if there is onClickAdvancedFilters func ', () => {
	render(<PageHeader {...props} onClickAdvancedFilters={() => {}} />)

	expect(screen.getByRole('button')).toBeInTheDocument()
})

test('onClickAdvancedFilters function is calls if the button is clicked', async () => {
	const onClickAdvancedFilters = jest.fn()
	render(<PageHeader {...props} onClickAdvancedFilters={onClickAdvancedFilters} />)

	await userEvent.click(screen.getByRole('button'))
	expect(onClickAdvancedFilters).toHaveBeenCalled()
})

test('calls the function when something is typed', async () => {
	const onChangeSearch = jest.fn()
	render(<PageHeader {...props} onChangeSearch={onChangeSearch} />)

	const input = screen.getByRole('textbox')
	await userEvent.type(input, 'testvalue')

	expect(onChangeSearch).toHaveBeenCalledWith('testvalue')
})
