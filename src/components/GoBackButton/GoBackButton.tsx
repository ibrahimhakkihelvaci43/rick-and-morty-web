import { GoBackButtonBase, Label } from './GoBackButton.style'
import ArrowBack from '~/assets/icons/ArrowBack'
import { useRouter } from 'next/router'

const GoBackButton = () => {
	const router = useRouter()

	return (
		<GoBackButtonBase onClick={() => router.back()}>
			<ArrowBack />
			<Label>Go Back</Label>
		</GoBackButtonBase>
	)
}

export default GoBackButton
