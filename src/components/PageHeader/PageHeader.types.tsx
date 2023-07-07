import { IInput } from '../Input/Input.types'

export interface IPageHeader {
	image: React.ReactNode
	inputPlaceHolder?: string
	onChangeSearch: (value: string) => void
	onClickAdvancedFilters?: () => void
}
