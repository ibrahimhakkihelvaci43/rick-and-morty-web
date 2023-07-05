import Head from 'next/head'
import Select from '~/components/Select/Select'
import SelectProps from '~/components/Select/Select.testprops'

const Home = () => (
	<>
		 <Select {...SelectProps} onClick={value => console.log('value', value)} />
	</>
)

export default Home
