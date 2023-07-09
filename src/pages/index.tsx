import Characters from './Characters'

import client from '../../apollo-client'
import { GetCharactersDocument, GetCharactersQuery } from '../generated/graphql'
import { GetServerSideProps } from 'next/types'

export const getServerSideProps: GetServerSideProps = async (context) => {
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
