import React, { useContext } from 'react'
import { CartContext } from "../components/CartContext"
import { useState, useEffect } from 'react'
import styles from '../styles/cart.module.css'
import { useRouter } from 'next/router'


export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext)
  const router = useRouter()

  function checkOut() {
    router.push('/checkout')
  }

  function clearCart() {
    if (confirm("是否要清空購物車")) { setCartItems([]) }
    else { }
  }


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
      if (ab === oldList[i].name && oldList[i].Amount < 10) {
        oldList[i].Amount = oldList[i].Amount + 1
        console.log(oldList[i])
      }
    } setCartItems(oldList)
  }

  function minusAmount(ab) {
    const oldList = [...cartItems]
    for (var i = 0; i < oldList.length; i++) {
      if (ab === oldList[i].name && oldList[i].Amount > 0) {
        oldList[i].Amount = oldList[i].Amount - 1
        console.log(oldList[i])
      }
    } setCartItems(oldList)
  }

  function multiple(a, b) {
    return a * b
  }

  var amountPrice = cartItems.map((item) => { return multiple(item.Amount, item.price) })
  const sum = amountPrice.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);


  return <div className={styles.main}>
    <div className={styles.container}><div className={styles.title}>商品資訊</div>
      <div className={styles.books}>{cartItems.map((item) => {
        return (<div className={styles.eachBook} key={item.id}>
          <div className={styles.bookName}>{item.Id}{item.name}</div >
          <div className={styles.bookAmount}>
            <button className={styles.minusButton} onClick={() => minusAmount(item.name)}>-</button>
            <div className={styles.amount}>{item.Amount}</div>
            <button className={styles.addButton} onClick={() => addAmount(item.name)}>+</button>
            <div className={styles.price}>${multiple(item.Amount, item.price)}.00</div>
            <button className={styles.clearCart} onClick={() => clearBook(item.name)}>移除</button></div >
        </div >)
      })
      }</div>
      <div className={styles.bottom}>
        <button onClick={clearCart} className={styles.button}>清空購物車</button>
        <div><div className={styles.totalContainer}>總計: ${sum}.00</div></div>
        <button onClick={checkOut} className={styles.button}>前往結賬</button>
      </div>
    </div>
  </div >
}