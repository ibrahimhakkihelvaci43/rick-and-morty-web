import { LocationsBase, Content, StyledImage, Loading } from './locations.style'
import PageHeader from '~/components/PageHeader/PageHeader'
import useScrollEnd from '~/utils/useScrollToEnd'
import Modal from '~/components/Modal/Modal'
import { useState } from 'react'
import InformationCard from '~/components/InformationCard/InformationCard'
import LocationsFilterForm from '~/components/LocationsFilterForm/LocationsFilterForm'

import client from '../../../apollo-client'
import { GetLocationsDocument, GetLocationsQuery, Location } from '../../generated/graphql'
import { GetServerSideProps } from 'next/types'
import { useLazyQuery } from '@apollo/client'
import { ILocationsFilterFormData } from '~/components/LocationsFilterForm/LocationsFilterForm.types'
import MoonLoader from 'react-spinners/MoonLoader'
import { useRouter } from 'next/router'

interface IFilterData extends ILocationsFilterFormData {
	name?: string
}

const Locations = ({ locations }: { locations: Location[] }) => {
	const router = useRouter()

	const [locationsData, setLocationsData] = useState(locations)
	const [getMoreLocation, { loading }] = useLazyQuery(GetLocationsDocument)
	const [page, setPage] = useState(2)
	const [filter, setFilter] = useState({} as IFilterData)
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

	const onFilter = async (values: ILocationsFilterFormData) => {
		const filters = { ...filter, type: values.type, dimension: values.dimension }

		setFilter(filters)

		const { data } = await getMoreLocation({
			variables: {
				page: 1,
				...filters,
			},
		})

		setPage(2)

		if (data && data.locations) {
			setLocationsData(data.locations?.results ?? [])
		}

		setIsFilterModalOpen(false)
	}

	const onFilterByName = async (name: string) => {
		const filters = { ...filter, name }
		setFilter({ ...filter, name })
		const { data } = await getMoreLocation({
			variables: {
				page: 1,
				...filters,
			},
		})

		setPage(2)

		if (data && data.locations) {
			setLocationsData(data.locations.results ?? [])
		}
	}

	const navigateToDetail = (id: string) => {
		router.push(`/location-detail/${id}`)
	}

	const handleScrollEnd = async () => {
		const { data } = await getMoreLocation({
			variables: { page, ...filter },
		})

		if (data && data.locations) {
			setLocationsData((prevLocations) => [...prevLocations, ...(data.locations.results ?? [])])
			setPage((prevPage) => prevPage + 1)
		}
	}

	useScrollEnd(handleScrollEnd)

	return (
		<LocationsBase>
			<PageHeader
				image={<StyledImage src="/images/Locations.png" width={174} height={136} alt="locations" />}
				onChangeSearch={onFilterByName}
				onClickAdvancedFilters={() => setIsFilterModalOpen(true)}
			/>
			<Content>
				{locationsData.map((item, index) => (
					<InformationCard key={index} title={item.name ?? ''} description={item.type ?? ''} onClick={() => navigateToDetail(item.id ?? '')} />
				))}
				{loading && (
					<Loading>
						<MoonLoader size={30} />
					</Loading>
				)}
			</Content>
			<Modal title="Filtres" isOpen={isFilterModalOpen} onCloseModal={() => setIsFilterModalOpen(false)}>
				<LocationsFilterForm values={filter} onSubmit={onFilter} />
			</Modal>
		</LocationsBase>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { data } = await client.query<GetLocationsQuery>({
		query: GetLocationsDocument,
		variables: {
			page: 1,
		},
	})

	return {
		props: {
			locations: data.locations?.results || [],
		},
	}
}

export default Locations
