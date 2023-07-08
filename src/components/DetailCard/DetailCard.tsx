import { DetailCardBase, Title, Details, Detail, DetailTitle, DetailDescription } from './DetailCard.style'
import { IDetailCard } from './DetailCard.types'

const DetailCard = ({ title, details }: IDetailCard) => {
	return (
		<DetailCardBase>
			<Title>{title}</Title>
			<Details>
				{details.map((detail, index) => (
					<Detail key={index}>
						<DetailTitle>{detail.label}</DetailTitle>
						<DetailDescription>{detail.value}</DetailDescription>
					</Detail>
				))}
			</Details>
		</DetailCardBase>
	)
}

export default DetailCard
