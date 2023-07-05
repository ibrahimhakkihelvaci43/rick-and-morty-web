import { ModalBase, StyledIcon, Header, Title, Content } from './Modal.style'
import { IModal } from './Modal.types'

const Modal = ({ children, title, isOpen, onClickClose }: IModal) => {
	return isOpen ? (
		<ModalBase>
			<Header>
				<Title>{title}</Title>
				<StyledIcon onClick={onClickClose} />
			</Header>
			<Content>{children}</Content>
		</ModalBase>
	) : null
}

export default Modal
