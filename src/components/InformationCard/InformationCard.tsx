import { Description, ExtraInfo, InformationCardBase, Title } from './InformationCard.style'
import { IInformationCard } from './InformationCard.types'

const InformationCard = ({ title, description, extraValue, onClick }: IInformationCard) => {
	return (
		<InformationCardBase data-testid="information-card"  onClick={onClick}> 
			<Title>{title}</Title>
			<Description>{description}</Description>
			{extraValue && <ExtraInfo>{extraValue}</ExtraInfo>}
		</InformationCardBase>
	)
}

export default InformationCard
