import { EpisodesBase, Content, StyledImage, Loading } from './episodes.style'
import PageHeader from '~/components/PageHeader/PageHeader'
import useScrollEnd from '~/utils/useScrollToEnd'
import InformationCard from '~/components/InformationCard/InformationCard'
import { GetServerSideProps } from 'next/types'
import { Episode, GetEpisodesDocument, GetEpisodesQuery } from '~/generated/graphql'
import client from '../../../apollo-client'
import formatDate from '~/utils/formatDate/formatDate'
import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import MoonLoader from 'react-spinners/MoonLoader'
import { useRouter } from 'next/router'

const Episodes = ({ episodes }: { episodes: Episode[] }) => {
	const router = useRouter()
	const [episodesData, setEpisodesData] = useState(episodes)
	const [getMoreEpisode, { loading }] = useLazyQuery(GetEpisodesDocument)
	const [page, setPage] = useState(2)
	const [filter, setFilter] = useState({
		name: '',
	})

	const onFilterByName = async (name: string) => {
		const filters = { ...filter, name }

		setFilter({ ...filter, name })
		const { data } = await getMoreEpisode({
			variables: {
				page: 1,
				...filters,
			},
		})

		setPage(2)

		if (data && data.episodes) {
			setEpisodesData(data.episodes.results ?? [])
		}
	}

	const navigateToDetail = (id: string) => {
		router.push(`/episode-detail/${id}`)
	}

	const handleScrollEnd = async () => {
		const { data } = await getMoreEpisode({
			variables: { page, ...filter },
		})

		if (data && data.episodes) {
			setEpisodesData((prevEpisodes) => [...prevEpisodes, ...(data.episodes.results ?? [])])
			setPage((prevPage) => prevPage + 1)
		}
	}

	useScrollEnd(handleScrollEnd)

	return (
		<EpisodesBase>
			<PageHeader
				image={<StyledImage src="/images/Episodes.png" width={174} height={136} alt="episodes" />}
				onChangeSearch={onFilterByName}
			/>
			<Content>
				{episodesData.map((item, index) => (
					<InformationCard
						key={index}
						title={item.name ?? ''}
						description={formatDate(item.air_date ?? '')}
						extraValue={item.episode ?? ''}
						onClick={() => navigateToDetail(item.id ?? '')}
					/>
				))}
				{loading && (
					<Loading>
						<MoonLoader size={30} />
					</Loading>
				)}
			</Content>
		</EpisodesBase>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await client.query<GetEpisodesQuery>({
		query: GetEpisodesDocument,
		variables: {
			page: 1,
		},
	})

	return {
		props: {
			episodes: data.episodes?.results || [],
		},
	}
}

export default Episodes
