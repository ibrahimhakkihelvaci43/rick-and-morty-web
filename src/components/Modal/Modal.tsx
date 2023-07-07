import { ModalBase, StyledIcon, Header, Title, Content, Overlay } from './Modal.style'
import { IModal } from './Modal.types'
import { useEffect } from 'react'

const Modal = ({ children, title, isOpen, onCloseModal }: IModal) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return isOpen ? (
		<>
			<Overlay onClick={onCloseModal} />
			<ModalBase>
				<Header>
					<Title>{title}</Title>
					<StyledIcon onClick={onCloseModal} />
				</Header>
				<Content>{children}</Content>
			</ModalBase>
		</>
	) : null
}

export default Modal
