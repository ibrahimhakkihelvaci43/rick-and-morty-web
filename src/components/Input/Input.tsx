import { useState } from 'react'
import { InputBase, StyledInput } from './Input.style'
import { IInput } from './Input.types'

const Input = ({ prefix, placeholder, defaultValue, onChange }: IInput) => {
	const [value, setValue] = useState<string>(defaultValue || '')
	return (
		<InputBase>
			{prefix}
			<StyledInput
				value={value}
				placeholder={placeholder}
				onChange={(e) => {
					setValue(e.target.value)
					onChange(e.target.value)
				}}
			/>
		</InputBase>
	)
}

export default Input
