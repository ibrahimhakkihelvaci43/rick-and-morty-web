export interface IModal {
	isOpen: boolean
	title: string
	children: React.ReactNode
	onClickClose: () => void
}
