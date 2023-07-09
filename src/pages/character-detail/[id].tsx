import CharacterInfoSection from '~/components/CharacterInfoSection/CharacterInfoSection'
import { CharacterDetailBase, Content } from './character-detail.style'
import CharacterProfile from '~/components/CharacterProfile/CharacterProfile'
import { Character, GetCharacterByIdDocument, GetCharacterByIdQuery } from '~/generated/graphql'
import client from '../../../apollo-client'
import { GetServerSideProps } from 'next/types'
import formatDate from '~/utils/formatDate/formatDate'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query

	const { data } = await client.query<GetCharacterByIdQuery>({
		query: GetCharacterByIdDocument,
		variables: {
			id: Number(id),
		},
	})

	return {
		props: {
			character: data.character || [],
		},
	}
}

const CharacterDetail = ({ character }: { character: Character }) => {
	const { name, gender, species, created, status, type, location, episode } = character
	console.log(character)
	return (
		<CharacterDetailBase>
			<CharacterProfile name={character.name ?? ''} imageUrl={character.image ?? ''} />
			<Content>
				<CharacterInfoSection
					title="Character Info"
					items={[
						{
							title: 'Gender',
							value: gender ?? '',
						},
						{
							title: 'Status',
							value: status ?? '',
						},
						{
							title: 'Specie',
							value: species ?? '',
						},
						{
							title: 'Origin',
							value: character.origin?.name ?? '',
						},
						{
							title: 'Type',
							value: type ?? '',
						},
						{
							title: 'Location',
							value: location?.name ?? '',
						},
					]}
				/>

				{episode && (
					<CharacterInfoSection
						title="Episodes"
						items={
							episode?.map((item) => ({
								title: item?.episode ?? '',
								value: item?.name ?? '',
								extraValue: formatDate(item?.air_date ?? ''),
								href: '/',
							})) ?? []
						}
					/>
				)}
			</Content>
		</CharacterDetailBase>
	)
}

export default CharacterDetail
