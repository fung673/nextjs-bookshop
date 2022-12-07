import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'
import { SessionProvider } from "next-auth/react"
import { CartContext } from '../components/CartContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([])
  return <SessionProvider>
    <Head><title>BookShop</title></Head>
    <Header />
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Component {...pageProps} cartItems={cartItems} setCartItems={setCartItems} />
    </CartContext.Provider>
  </SessionProvider>

}

export default MyApp
