import React from "react";
import { CartContext } from "../components/CartContext"
import styles from '../styles/checkout.module.css'
import { useContext } from "react";

export default function Checkout() {
 const { cartItems, setCartItems } = useContext(CartContext)




 return <div className={styles.main}>
  <div className={styles.left}>
   <h2 className={styles.title}>結賑</h2>
   <div className={styles.list}>
    <input className={styles.input} placeholder=" Name *" />
    <input className={styles.input} placeholder=" Email *" />
    <input className={styles.input} placeholder=" Mobile *" />
    <textarea className={styles.input2} placeholder=" Address *" />
   </div>
  </div>
  <div className={styles.right}><div className={styles.orderSummary}>
   <div className={styles.header}>訂單撰要</div>
   <div className={styles.subTotal}>項目總金額</div>
   <div className={styles.deliveryFee}>運費</div>
   <div className={styles.Total}>總金額</div>
  </div>
   {cartItems.map((item) => {
    return (<div className={styles.eachBook} key={item.id}>
     <div className={styles.bookName}>{item.Id}{item.name}</div >
     <div className={styles.bookAmount}>
      <button className={styles.minusButton} onClick={() => minusAmount(item.name)}>-</button>
      <div className={styles.amount}>數目{item.Amount}</div></div >
    </div >)
   })
   }
  </div>
 </div>
} 