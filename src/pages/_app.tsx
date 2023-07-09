import type { AppProps } from 'next/app'
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout'
import '~/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../../apollo-client'
import GlobalStyle from '../globalStyles'

const App = ({ Component, pageProps }: AppProps) => (
	<ApolloProvider client={client}>
		<GlobalStyle />
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	</ApolloProvider>
)

export default App
