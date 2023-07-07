export interface ISelect {
	placeholder: string
	items: ISelectItem[]
	errorMessage?: string | null
	onClick: (value: ISelectItem) => void
}

export interface ISelectItem {
	label: string
	value: string
}
