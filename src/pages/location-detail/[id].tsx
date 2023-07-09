import { LocationDetailBase, Content, SectionTitle, Residents } from './locations-detail.style'
import DetailCard from '~/components/DetailCard/DetailCard'
import CharacterCard from '~/components/CharacterCard/CharacterCard'
import { GetServerSideProps } from 'next/types'
import client from '../../../apollo-client'
import { GetLocationByIdDocument, GetLocationByIdQuery, Location } from '~/generated/graphql'

const LocationDetail = ({ location }: { location: Location }) => {
	const { name, type, dimension, residents } = location

	return (
		<LocationDetailBase>
			<DetailCard
				title={name ?? ''}
				details={[
					{
						label: 'Type',
						value: type ?? '',
					},
					{
						label: 'Dimension',
						value: dimension ?? '',
					},
				]}
			/>

			{residents && residents.length > 0 && (
				<Content>
					<SectionTitle>Residents</SectionTitle>
					<Residents>
						{residents.map((item, index) => (
							<CharacterCard
								key={index}
								id={item?.id ?? ''}
								imageUrl={item?.image ?? ''}
								title={item?.name ?? ''}
								description={item?.type ?? ''}
							/>
						))}
					</Residents>
				</Content>
			)}
		</LocationDetailBase>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query

	const { data } = await client.query<GetLocationByIdQuery>({
		query: GetLocationByIdDocument,
		variables: {
			id: Number(id),
		},
	})

	return {
		props: {
			location: data.location || [],
		},
	}
}

export default LocationDetail
