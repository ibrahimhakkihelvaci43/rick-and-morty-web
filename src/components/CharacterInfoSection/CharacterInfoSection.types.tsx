export interface ICharacterInfoSection {
	title: string
	items: {
		title: string
		value: string
		extraValue?: string
		href?: string
	}[]
}
