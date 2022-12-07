import React, { useContext } from 'react'
import { CartContext } from "../components/CartContext"
import { useState } from 'react'


export default function Cart() {
 const { cartItems, setCartItems } = useContext(CartContext)
 function clearCart() { setCartItems([]) }

 return <div>
  {cartItems.map((item) => {
   return (
    <div>書本 {item.name}, 數目{item.Amount} </div >
   )
  })}
  <button onClick={clearCart}>清空購物車</button>
 </div >
}