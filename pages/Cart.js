import React, { useContext } from 'react'
import { CartContext } from "../components/CartContext"
import { useState, useEffect } from 'react'
import styles from '../styles/cart.module.css'


export default function Cart() {
 const { cartItems, setCartItems } = useContext(CartContext)

 function clearCart() { setCartItems([]) }

 function clearBook(ab) {
  const oldList = [...cartItems]
  var splice
  console.log(ab)
  for (var i = 0; i < oldList.length; i++) {
   if (ab === oldList[i].name) {
    const index = oldList.indexOf(oldList[i])
    splice = oldList.splice(index, 1)
    console.log(oldList)
   }
  } setCartItems(oldList)
 }

 function addAmount(ab) {
  const oldList = [...cartItems]
  for (var i = 0; i < oldList.length; i++) {
   if (ab === oldList[i].name) {
    oldList[i].Amount = oldList[i].Amount + 1
    console.log(oldList[i])
   }
  } setCartItems(oldList)
 }

 function minusAmount(ab) {
  const oldList = [...cartItems]
  for (var i = 0; i < oldList.length; i++) {
   if (ab === oldList[i].name) {
    oldList[i].Amount = oldList[i].Amount - 1
    console.log(oldList[i])
   }
  } setCartItems(oldList)
 }



 return <div className={styles.main}>
  <div className={styles.container}><div className={styles.title}>商品資訊</div>
   <div className={styles.books}>{cartItems.map((item) => {
    return (<div className={styles.eachBook} key={item.id}>
     <div className={styles.bookName}>{item.Id}{item.name}</div >
     <div className={styles.bookAmount}>
      <button onClick={() => addAmount(item.name)}>+</button>
      數目{item.Amount}
      <button onClick={() => minusAmount(item.name)}>-</button>
      <button onClick={() => clearBook(item.name)}>移除</button></div >
    </div >)
   })
   }</div>
   <button onClick={clearCart} className={styles.button}>清空購物車</button>
  </div>
 </div >
}