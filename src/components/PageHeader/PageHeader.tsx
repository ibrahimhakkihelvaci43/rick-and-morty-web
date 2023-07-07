import Image from 'next/image'
import { PageHeaderBase, Filters } from './PageHeader.style'
import { IPageHeader } from './PageHeader.types'
import Input from '../Input/Input'
import Search from '~/assets/icons/Search'
import Button from '../Button/Button'
import FilterList from '~/assets/icons/FilterList'

const PageHeader = ({
	image,
	inputPlaceHolder = 'Filter by name...',
	onChangeSearch,
	onClickAdvancedFilters,
}: IPageHeader) => {
	return (
		<PageHeaderBase>
			{image}
			<Filters>
				<Input placeholder={inputPlaceHolder} prefix={<Search />} onChange={onChangeSearch} />
				{onClickAdvancedFilters && (
					<Button label="ADVANCED FILTERS" prefix={<FilterList />} onClick={onClickAdvancedFilters} />
				)}
			</Filters>
		</PageHeaderBase>
	)
}

export default PageHeader
