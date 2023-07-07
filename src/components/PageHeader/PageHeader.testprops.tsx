import { IPageHeader } from './PageHeader.types'
import Image from 'next/image'

const PageHeaderProps: IPageHeader = {
	image: <Image src="/images/RickAndMortyLogo.png" width={312} height={104} alt="rick-and-morty-logo" />,
	onChangeSearch: () => {},
}
export default PageHeaderProps
