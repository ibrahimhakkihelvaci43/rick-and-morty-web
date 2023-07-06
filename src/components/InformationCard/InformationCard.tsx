import { Description, ExtraInfo, InformationCardBase, Title } from './InformationCard.style'
import { IInformationCard } from './InformationCard.types'

const InformationCard = ({ title, description, extraValue }: IInformationCard) => {
	return (
		<InformationCardBase>
			<Title>{title}</Title>
			<Description>{description}</Description>
			{extraValue && <ExtraInfo>{extraValue}</ExtraInfo>}
		</InformationCardBase>
	)
}

export default InformationCard
