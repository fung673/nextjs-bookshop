import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'
import { SessionProvider } from "next-auth/react"
import { CartContext } from '../components/CartContext'
import { AuthContext } from '../components/AuthContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([])
  const [login, setLogin] = useState(false)
  console.log(login)
  return <SessionProvider>
    <Head><title>BookShop</title></Head>
    <AuthContext.Provider value={{ login, setLogin }}>
      <Header />
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Component {...pageProps} cartItems={cartItems} setCartItems={setCartItems} />
      </CartContext.Provider>
    </AuthContext.Provider>
  </SessionProvider>

}

export default MyApp
