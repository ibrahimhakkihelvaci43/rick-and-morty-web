import { CharactersBase, Content, Loading, StyledImage } from './Characters.style'
import PageHeader from '~/components/PageHeader/PageHeader'
import CharacterCard from '~/components/CharacterCard/CharacterCard'
import useScrollEnd from '~/utils/useScrollToEnd'
import Modal from '~/components/Modal/Modal'
import CharacterFilterForm from '~/components/CharacterFilterForm/CharacterFilterForm'
import { useState } from 'react'
import { Character, GetCharactersDocument } from '~/generated/graphql'
import { useLazyQuery } from '@apollo/client'
import MoonLoader from 'react-spinners/MoonLoader'
import { ICharacterFilterFormData } from '~/components/CharacterFilterForm/CharacterFilterForm.types'

interface IFilterData extends ICharacterFilterFormData {
	name?: string
}

const Characters = ({ characters }: { characters: Character[] }) => {
	const [charactersData, setCharactersData] = useState(characters)
	const [getMoreCharacter, { loading }] = useLazyQuery(GetCharactersDocument)
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
	const [page, setPage] = useState(2)
	const [filter, setFilter] = useState({} as IFilterData)

	const onFilter = async (values: ICharacterFilterFormData) => {
		const filters = { ...filter, species: values.species, gender: values.gender, status: values.status }

		setFilter(filters)

		const { data } = await getMoreCharacter({
			variables: {
				page: 1,
				...filters,
			},
		})

		setPage(2)

		if (data && data.characters) {
			setCharactersData(data.characters.results ?? [])
		}

		setIsFilterModalOpen(false)
	}

	const onFilterByName = async (name: string) => {
		const filters = { ...filter, name }

		setFilter({ ...filter, name })
		const { data } = await getMoreCharacter({
			variables: {
				page: 1,
				...filters,
			},
		})

		setPage(2)

		if (data && data.characters) {
			setCharactersData(data.characters.results ?? [])
		}
	}

	const handleScrollEnd = async () => {
		const { data } = await getMoreCharacter({
			variables: { page, ...filter },
		})

		if (data && data.characters) {
			setCharactersData((prevCharacters) => [...prevCharacters, ...(data.characters.results ?? [])])
			setPage((prevPage) => prevPage + 1)
		}
	}

	useScrollEnd(handleScrollEnd)

	return (
		<CharactersBase>
			<PageHeader
				image={<StyledImage src="/images/RickAndMortyLogo.png" width={312} height={104} alt="rick-and-morty-logo" />}
				onChangeSearch={onFilterByName}
				onClickAdvancedFilters={() => setIsFilterModalOpen(true)}
			/>
			<Content>
				{charactersData.map((character, index) => (
					<CharacterCard
						key={index}
						id={character.id ?? ''}
						title={character.name ?? ''}
						imageUrl={character.image ?? ''}
						description={character.species ?? ''}
					/>
				))}
				{loading && (
					<Loading>
						<MoonLoader size={30} />
					</Loading>
				)}
			</Content>

			<Modal title="Filtres" isOpen={isFilterModalOpen} onCloseModal={() => setIsFilterModalOpen(false)}>
				<CharacterFilterForm
					values={filter}
					genders={[
						{
							label: 'No Filter',
							value: '',
						},
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
							label: 'No Filter',
							value: '',
						},
						{
							label: 'Alive',
							value: 'alive',
						},
						{
							label: 'Dead',
							value: 'dead',
						},
						{
							label: 'Unknown',
							value: 'unknown',
						},
					]}
					onSubmit={onFilter}
				/>
			</Modal>
		</CharactersBase>
	)
}

export default Characters
