import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return <SessionProvider>
    <Head><title>BookShop</title></Head>
    <Header />
    <Component {...pageProps} />
  </SessionProvider>
}

export default MyApp
