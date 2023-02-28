import React from "react";
import { CartContext } from "../components/CartContext"
import styles from '../styles/checkout.module.css'
import { useContext } from "react";
import { useState } from "react";

export default function Checkout() {
 const { cartItems, setCartItems } = useContext(CartContext)
 const [data, setData] = useState({
  Name: "",
  Email: "",
  Mobile: "",
  Address: ""

 })

 function multiple(a, b) {
  return a * b
 }
 var amountPrice = cartItems.map((item) => { return multiple(item.Amount, item.price) })
 const sum = amountPrice.reduce((accumulator, value) => {
  return accumulator + value;
 }, 0);

 const handleChange = (event) => {
  const { name, value } = event.target
  setData(prev => ({ ...prev, [name]: value }))
  console.log(data)
 }


 function checkInfo() {
  for (const key in data) {
   if (data[key] == "") {
    alert(`${key} is missing`)
    console.log(data[key])
    return -1
   }
  } alert("成功下單")
 }

 return <div className={styles.main}>
  <div className={styles.left}>
   <h2 className={styles.title}>結帳</h2>
   <div className={styles.list}>
    <input className={styles.input} placeholder=" Name *" name="Name" onChange={handleChange} />
    <input className={styles.input} placeholder=" Email *" name="Email" onChange={handleChange} />
    <input className={styles.input} placeholder=" Mobile *" name="Mobile" onChange={handleChange} />
    <textarea className={styles.input2} placeholder=" Address *" name="Address" onChange={handleChange} />
    <button className={styles.button} onClick={checkInfo}>下單</button>
   </div>
  </div>
  <div className={styles.right}><div className={styles.orderSummary}>
   <div className={styles.header}>訂單撰要</div>
   <div className={styles.subTotal}><div>總金額</div><div className={styles.subTotalFee}>${sum}</div></div>
   <div className={styles.deliveryFee}>運費</div>
   <div className={styles.Total}><div>總金額</div><div className={styles.TotalFee}>HKD ${sum}</div></div>
  </div>
   <div className={styles.header2}>
    <div className={styles.header2Left}>商品</div>
    <div className={styles.header2Right}><div className={styles.header2RightLeft}>數量</div><div className={styles.header2RightRight}>小計</div></div>
   </div>
   {cartItems.map((item) => {
    return (<div className={styles.eachBook} key={item.id}>
     <div className={styles.bookName}>{item.Id}{item.name}</div >
     <div className={styles.bookAmount}>
      <div className={styles.amount}>數目{item.Amount}</div><div className={styles.price}>${multiple(item.Amount, item.price)}.00</div></div >

    </div >)
   })
   }
  </div>
 </div>
} 