import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head><title>NewBookShop</title></Head>
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp
