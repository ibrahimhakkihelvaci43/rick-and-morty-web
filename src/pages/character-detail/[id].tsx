import CharacterInfoSection from '~/components/CharacterInfoSection/CharacterInfoSection'
import { CharacterDetailBase, Content } from './character-detail.style'
import CharacterProfile from '~/components/CharacterProfile/CharacterProfile'

const CharacterDetail = () => {
	return (
		<CharacterDetailBase>
			<CharacterProfile name="Rick Sanchez" imageUrl="/images/RickSanchez.png" />
			<Content>
				<CharacterInfoSection
					title="Character Info"
					items={[
						{
							title: 'Name',
							value: 'John Doe',
						},
						{
							title: 'Gender',
							value: 'Male',
							extraValue: 'December 2, 2013',
						},
						{
							title: 'Specie',
							value: 'Human',
							href: '/',
						},
					]}
				/>

				<CharacterInfoSection
					title="Episodes"
					items={[
						{
							title: 'Name',
							value: 'John Doe',
							extraValue: 'December 2, 2013',
							href: '/',
						},
						{
							title: 'Gender',
							value: 'Male',
							extraValue: 'December 2, 2013',
							href: '/',
						},
						{
							title: 'Specie',
							value: 'Human',
							href: '/',
							extraValue: 'December 2, 2013',
						},
					]}
				/>
			</Content>
		</CharacterDetailBase>
	)
}

export default CharacterDetail
