import type { AppProps } from 'next/app'
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout'
import '~/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../../apolloClient'

const App = ({ Component, pageProps }: AppProps) => (
	<ApolloProvider client={client}>
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	</ApolloProvider>
)

export default App
