export interface ISelect {
	placeholder: string
	items: { label: string; value: string }[]
	onClick: (value: string) => void
}
