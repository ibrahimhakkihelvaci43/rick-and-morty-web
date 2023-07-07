import { InputBase, StyledInput } from './Input.style'
import { IInput } from './Input.types'

const Input = ({ prefix, placeholder, value, onChange }: IInput) => {
	return (
		<InputBase>
			{prefix}
			<StyledInput value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
		</InputBase>
	)
}

export default Input
