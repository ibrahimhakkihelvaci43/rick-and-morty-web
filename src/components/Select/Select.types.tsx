export interface ISelect {
	value?: string | null
	placeholder: string
	items: ISelectItem[]
	errorMessage?: string | null
	onClick: (value: string) => void
}

export interface ISelectItem {
	label: string
	value: string
}
