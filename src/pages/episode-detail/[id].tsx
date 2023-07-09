import { LocationDetailBase, Content, SectionTitle, Characters } from './episode-detail.style'
import DetailCard from '~/components/DetailCard/DetailCard'
import CharacterCard from '~/components/CharacterCard/CharacterCard'
import { GetServerSideProps } from 'next/types'
import client from '../../../apollo-client'
import { Episode, GetEpisodeByIdDocument, GetEpisodeByIdQuery } from '~/generated/graphql'
import formatDate from '~/utils/formatDate/formatDate'

const LocationDetail = ({ episode }: { episode: Episode }) => {
	const { name, air_date, characters } = episode
	return (
		<LocationDetailBase>
			<DetailCard
				title={name ?? ''}
				details={[
					{
						label: 'Episode',
						value: episode.episode ?? '',
					},
					{
						label: 'Date',
						value: formatDate(air_date ?? ''),
					},
				]}
			/>
			{characters && characters.length > 0 && (
				<Content>
					<SectionTitle>Cast</SectionTitle>

					<Characters>
						{characters.map((item, index) => (
							<CharacterCard
								key={index}
								id={item?.id ?? ''}
								title={item?.name ?? ''}
								imageUrl={item?.image ?? ''}
								description={item?.type ?? ''}
							/>
						))}
					</Characters>
				</Content>
			)}
		</LocationDetailBase>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query

	const { data } = await client.query<GetEpisodeByIdQuery>({
		query: GetEpisodeByIdDocument,
		variables: {
			id: Number(id),
		},
	})

	return {
		props: {
			episode: data.episode || [],
		},
	}
}

export default LocationDetail
