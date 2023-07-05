import { ISelect } from './Select.types'

const SelectProps: ISelect = {
	placeholder: 'Species',
	items: [
		{ label: 'Javascript', value: 'js' },
		{ label: 'Typescript', value: 'ts' },
		{ label: 'Python', value: 'py' },
		{ label: 'Java', value: 'java' },
	],
	onClick: (value: string) => console.log(value),
}
export default SelectProps
