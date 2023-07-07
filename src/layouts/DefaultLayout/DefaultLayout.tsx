import Navbar from '~/components/Navbar/Navbar'
import { DefaultLayoutBase, Container } from './DefaultLayout.style'
import { IDefaultLayout } from './DefaultLayout.types'

const DefaultLayout = ({ children }: IDefaultLayout) => {
	return (
		<DefaultLayoutBase>
			<Navbar />
			<Container>{children}</Container>
		</DefaultLayoutBase>
	)
}

export default DefaultLayout
