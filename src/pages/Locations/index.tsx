import { LocationsBase, Content, StyledImage } from './Locations.style'
import PageHeader from '~/components/PageHeader/PageHeader'
import useScrollEnd from '~/utils/useScrollToEnd'
import Modal from '~/components/Modal/Modal'
import { useState } from 'react'
import InformationCard from '~/components/InformationCard/InformationCard'
import LocationsFilterForm from '~/components/LocationsFilterForm/LocationsFilterForm'

const Locations = () => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
	const items = [
		{
			title: 'Title',
			description: 'Description',
		},

		{
			title: 'Title',
			description: 'Description',
		},

		{
			title: 'Title',
			description: 'Description',
		},

		{
			title: 'Title',
			description: 'Description',
		},

		{
			title: 'Title',
			description: 'Description',
		},
	]

	const handleScrollEnd = () => {
		console.log('useScrollEnd')
	}

	useScrollEnd(handleScrollEnd)

	return (
		<LocationsBase>
			<PageHeader
				image={<StyledImage src="/images/Locations.png" width={174} height={136} alt="locations" />}
				onChangeSearch={() => {}}
				onClickAdvancedFilters={() => setIsFilterModalOpen(true)}
			/>
			<Content>
				{items.map((item, index) => (
					<InformationCard key={index} {...item} />
				))}
			</Content>
			<Modal title="Filtres" isOpen={isFilterModalOpen} onCloseModal={() => setIsFilterModalOpen(false)}>
				<LocationsFilterForm
					species={[
						{
							label: 'Human',
							value: 'human',
						},
						{
							label: 'Alien',
							value: 'alien',
						},
					]}
					dimensions={[
						{
							label: 'Dimension C-137',
							value: 'Dimension C-137',
						},
						{
							label: 'Post-Apocalyptic Dimension',
							value: 'Post-Apocalyptic Dimension',
						},
					]}
					onSubmit={() => {}}
				/>
			</Modal>
		</LocationsBase>
	)
}

export default Locations
