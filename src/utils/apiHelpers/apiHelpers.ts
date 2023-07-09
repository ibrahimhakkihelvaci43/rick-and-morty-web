import { LazyQueryExecFunction, OperationVariables } from '@apollo/client'
import { Dispatch, SetStateAction } from 'react'

type DefaultProps = {
	filter: Object
	queryFunction: LazyQueryExecFunction<any, OperationVariables>
	setData: Dispatch<SetStateAction<any[]>>
	setPage: Dispatch<SetStateAction<number>>
	dataTitle: string
}

type FilterByName = DefaultProps & {
	name: string
	setFilter: Dispatch<SetStateAction<any>>
}

type FilterByProps = DefaultProps & {
	newFilters: Object
	setFilter: Dispatch<SetStateAction<any>>
}

type ScrollEnd = DefaultProps & {
	page: number
}

const filterByName = async ({ filter, queryFunction, setFilter, setData, setPage, dataTitle, name }: FilterByName) => {
	const filters = { ...filter, name }
	setFilter({ ...filter, name })
	const { data } = await queryFunction({
		variables: {
			page: 1,
			...filters,
		},
	})

	setPage(2)

	if (data && data[dataTitle]) {
		setData(data[dataTitle].results ?? [])
	}
}

const filterByProps = async ({
	newFilters,
	filter,
	setFilter,
	queryFunction,
	setPage,
	setData,
	dataTitle,
}: FilterByProps) => {
	const filters = { ...filter, ...newFilters }

	setFilter(filters)

	const { data } = await queryFunction({
		variables: {
			page: 1,
			...filters,
		},
	})

	setPage(2)

	if (data && data[dataTitle]) {
		setData(data[dataTitle]?.results ?? [])
	}
}
const scrollEnd = async ({ queryFunction, page, filter, setData, setPage, dataTitle }: ScrollEnd) => {
	const { data } = await queryFunction({
		variables: { page, ...filter },
	})

	if (data && data[dataTitle].results.length !== 0) {
		setData((prevLocations) => [...prevLocations, ...(data[dataTitle].results ?? [])])
		setPage((prevPage) => prevPage + 1)
	}
}

export { filterByName, filterByProps, scrollEnd }
