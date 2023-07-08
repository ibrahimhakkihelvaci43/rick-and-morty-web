import { LocationDetailBase, Content, SectionTitle } from './locations-detail.style'
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
						label: 'Type',
						value: 'Planet',
					},
					{
						label: 'Dimension',
						value: 'Replacement Dimension',
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
