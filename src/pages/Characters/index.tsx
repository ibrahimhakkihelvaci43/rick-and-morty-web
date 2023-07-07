import { CharactersBase, Content, StyledImage } from './Characters.style'
import PageHeader from '~/components/PageHeader/PageHeader'
import CharacterCard from '~/components/CharacterCard/CharacterCard'
import useScrollEnd from '~/utils/useScrollToEnd'
import Modal from '~/components/Modal/Modal'
import CharacterFilterForm from '~/components/CharacterFilterForm/CharacterFilterForm'
import { useState } from 'react'

const Characters = () => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
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

	const handleScrollEnd = () => {
		console.log('useScrollEnd')
	}

	useScrollEnd(handleScrollEnd)

	return (
		<CharactersBase>
			<PageHeader
				image={<StyledImage src="/images/RickAndMortyLogo.png" width={312} height={104} alt="rick-and-morty-logo" />}
				onChangeSearch={() => {}}
				onClickAdvancedFilters={() => setIsFilterModalOpen(true)}
			/>
			<Content>
				{items.map((item, index) => (
					<CharacterCard key={index} {...item} />
				))}
			</Content>
			<Modal title="Filtres" isOpen={isFilterModalOpen} onCloseModal={() => setIsFilterModalOpen(false)}>
				<CharacterFilterForm
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
					genders={[
						{
							label: 'Male',
							value: 'male',
						},
						{
							label: 'Female',
							value: 'female',
						},
					]}
					situations={[
						{
							label: 'Alive',
							value: 'alive',
						},
						{
							label: 'Dead',
							value: 'dead',
						},
					]}
					onSubmit={() => {}}
				/>
			</Modal>
		</CharactersBase>
	)
}

export default Characters
