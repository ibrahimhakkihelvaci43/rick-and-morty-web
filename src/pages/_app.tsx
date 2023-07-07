import type { AppProps } from 'next/app'
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout'
import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
    <DefaultLayout>
        <Component {...pageProps} />
    </DefaultLayout>
)

export default App
