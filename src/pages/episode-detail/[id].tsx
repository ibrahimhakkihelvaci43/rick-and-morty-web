import { LocationDetailBase, Content, SectionTitle } from './episode-detail.style'
import DetailCard from '~/components/DetailCard/DetailCard'
import CharacterCard from '~/components/CharacterCard/CharacterCard'

const LocationDetail = () => {
	const items = [
		{
			title: 'Rick Sanchez',
			description: 'Human',
			imageUrl: '/images/RickSanchez.png',
		},
		{
			title: 'Rick Sanchez',
			description: 'Human',
			imageUrl: '/images/RickSanchez.png',
		},
		{
			title: 'Rick Sanchez',
			description: 'Human',
			imageUrl: '/images/RickSanchez.png',
		},
		{
			title: 'Rick Sanchez',
			description: 'Human',
			imageUrl: '/images/RickSanchez.png',
		},
		{
			title: 'Rick Sanchez',
			description: 'Human',
			imageUrl: '/images/RickSanchez.png',
		},
		{
			title: 'Rick Sanchez',
			description: 'Human',
			imageUrl: '/images/RickSanchez.png',
		},
	]

	return (
		<LocationDetailBase>
			<DetailCard
				title="Earth (Replacement Dimension)"
				details={[
					{
						label: 'Episode',
						value: 'S01E01',
					},
					{
						label: 'Date',
						value: 'December 2, 2013',
					},
				]}
			/>
			<Content>
				<SectionTitle>Residents</SectionTitle>

				{items.map((item, index) => (
					<CharacterCard key={index} {...item} />
				))}
			</Content>
		</LocationDetailBase>
	)
}

export default LocationDetail
