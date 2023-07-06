import Head from 'next/head'
import CharacterInfoSection from '~/components/CharacterInfoSection/CharacterInfoSection'
import CharacterInfoSectionProps from '~/components/CharacterInfoSection/CharacterInfoSection.testprops'
import Select from '~/components/Select/Select'
import SelectProps from '~/components/Select/Select.testprops'

const Home = () => (
	<>
		<CharacterInfoSection {...CharacterInfoSectionProps} />
	</>
)

export default Home
