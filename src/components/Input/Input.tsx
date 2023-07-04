import { InputBase, StyledInput } from './Input.style'
import { IInput } from './Input.types'

const Input = ({ prefix, placeholder, onChange }: IInput) => {
	return (
		<InputBase>
			{prefix}
			<StyledInput placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
		</InputBase>
	)
}

export default Input
