import styles from '../styles/Register.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Register() {





 return <div className>
  <div className={styles.left}>
   <Link href="/"><div>登入</div>
   </Link><img src="/arrow.png" className={styles.arrow} />
   <div>登入會員</div></div>
  <div className={styles.registerBox}>
   <div className={styles.title}><div className={styles.titleLeft}> 註冊</div></div>
   <div className={styles.account}><div className={styles.redStar}>*</div>帳號名稱</div>
   <input className={styles.typeAccount} type="text"></input>
   <div className={styles.password}><div className={styles.redStar}>*</div>密碼</div>
   <input className={styles.typePassword} type="password" placeholder='6~24位英文及數字混合'></input>
   <input className={styles.typePassword} type="password" placeholder='再次確認密碼'></input>
   <button className={styles.register}>註冊</button>
  </div>

 </div>
}