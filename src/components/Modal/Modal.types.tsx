export interface IModal {
	isOpen: boolean
	title: string
	children: React.ReactNode
	onCloseModal: () => void
}
