import Navbar from '~/components/Navbar/Navbar'
import { DefaultLayoutBase, Container } from './DefaultLayout.style'
import { IDefaultLayout } from './DefaultLayout.types'
import GoBackButton from '~/components/GoBackButton/GoBackButton'
import { useRouter } from 'next/router'

const DefaultLayout = ({ children }: IDefaultLayout) => {
	const router = useRouter()
	const isDetailPage = router.asPath.split('/').length > 2

	return (
		<DefaultLayoutBase>
			<Navbar />
			{isDetailPage && <GoBackButton />}
			<Container>{children}</Container>
		</DefaultLayoutBase>
	)
}

export default DefaultLayout
