import { ButtonBase, Label } from './Button.style'
import { IButton } from './Button.types'

const Button = ({ label, prefix, onClick }: IButton) => {
	return (
		<ButtonBase onClick={onClick}>
			{prefix}
			<Label>{label}</Label>
		</ButtonBase>
	)
}

export default Button
