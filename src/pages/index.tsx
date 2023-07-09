import Characters from './Characters'

import client from '../../apollo-client'
import { GetCharactersDocument, GetCharactersQuery } from '../generated/graphql'
export const getServerSideProps = async (): Promise<{
	props: any
}> => {
	const { data } = await client.query<GetCharactersQuery>({
		query: GetCharactersDocument,
		variables: {
			page: 1,
		},
	})

	return {
		props: {
			characters: data.characters?.results || [],
		},
	}
}

export default Characters
