import React, { useContext } from 'react'
import { CartContext } from "../components/CartContext"
import { useState, useEffect } from 'react'
import styles from '../styles/cart.module.css'


export default function Cart() {
 const { cartItems, setCartItems } = useContext(CartContext)
 function clearCart() { setCartItems([]) }

 function clearBook() {
  const newList = cartItems.slice(1)
  setCartItems(newList)
 }

 return <div className={styles.main}>
  <div className={styles.container}><div className={styles.title}>商品資訊</div>
   <div className={styles.books}>{cartItems.map((item) => {
    return (<div className={styles.eachBook}>
     <div className={styles.bookName}>{item.name}</div >
     <div className={styles.bookAmount}> 數目{item.Amount} <button onClick={clearBook}>移除</button></div >
    </div >)
   })
   }</div>
   <button onClick={clearCart} className={styles.button}>清空購物車</button>
  </div>
 </div >
}