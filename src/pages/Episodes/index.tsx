import { EpisodesBase, Content, StyledImage } from './Episodes.style'
import PageHeader from '~/components/PageHeader/PageHeader'
import useScrollEnd from '~/utils/useScrollToEnd'
import InformationCard from '~/components/InformationCard/InformationCard'

const Episodes = () => {
	const items = [
		{
			title: 'Title',
			description: 'Description',
		},

		{
			title: 'Title',
			description: 'Description',
		},

		{
			title: 'Title',
			description: 'Description',
		},

		{
			title: 'Title',
			description: 'Description',
		},

		{
			title: 'Title',
			description: 'Description',
		},
	]

	const handleScrollEnd = () => {
		console.log('useScrollEnd')
	}

	useScrollEnd(handleScrollEnd)

	return (
		<EpisodesBase>
			<PageHeader
				image={<StyledImage src="/images/Episodes.png" width={174} height={136} alt="episodes" />}
				onChangeSearch={() => {}}
			/>
			<Content>
				{items.map((item, index) => (
					<InformationCard key={index} {...item} />
				))}
			</Content>
		</EpisodesBase>
	)
}

export default Episodes
