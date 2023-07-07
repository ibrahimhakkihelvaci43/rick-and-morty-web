import Modal from './Modal'
import { render } from '@testing-library/react'
import props from './Modal.testprops'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

test('renders Modal', () => {
	render(<Modal {...props} />)
})

test('if isOpen prop is false, the modal is not visible', () => {
	render(<Modal {...props} isOpen={false} />)

	expect(screen.queryByText(/title/i)).not.toBeInTheDocument()
})

test('if isOpen prop is true, the modal is not visible', () => {
	render(<Modal {...props} isOpen={true} />)

	expect(screen.queryByText(/title/i)).toBeInTheDocument()
})

test('when the cross icon is pressed, onClickClose function is called', async () => {
	const onCloseModal = jest.fn()
	render(<Modal {...props} isOpen={true} onCloseModal={onCloseModal} />)

	await userEvent.click(screen.getByRole('img'))
	expect(onCloseModal).toHaveBeenCalled()
})
