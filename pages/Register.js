import styles from '../styles/Register.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import writeUserData from '../firebase'
import { getDatabase, ref, onValue } from "firebase/database";
import Header from '../components/Header'
const db = getDatabase();
const dbRef = ref(db, '/users/');



export default function Register(props) {
 const [login, setLogin] = useState(false)
 const router = useRouter()
 const [formData, setFormData] = useState({
  userID: "",
  password: "",
  passwordConfirm: ""

 })



 function handleChange(event) {
  const { name, value } = event.target
  setFormData(prev => ({ ...prev, [name]: value }))
 }
 function handleSumbit(event) {
  const date = Date.now()
  console.log(typeof date)
  event.preventDefault()
  if (!formData.userID) { alert('請輸入帳號名稱') }
  else if (formData.userID.length < 6) { alert('帳號名稱需大於6個字') }
  else if (formData.password.length <= 6) { alert('密碼需多於6位數') }
  else if (formData.password !== formData.passwordConfirm) { alert('密碼不一致') }
  else if (formData.userID && (formData.password === formData.passwordConfirm && (formData.password.length > 6))) {
   router.push('/')
   alert('成功登入')
   writeUserData(date, formData.userID, formData.password)
   setLogin(true)
  }
 }


 onValue(dbRef, list => {
  console.log(list.val());
 });


 return <div className>
  <div className={styles.left}>
   <Link href="/"><div>登入</div>
   </Link><img src="/arrow.png" className={styles.arrow} />
   <div>登入會員</div></div>
  <div className={styles.registerBox}>
   <div className={styles.title}><div className={styles.titleLeft}> 註冊</div></div>
   <div className={styles.account}><div className={styles.redStar}>*</div>帳號名稱</div>
   <input className={styles.typeAccount} type="text" name="userID" onChange={handleChange} value={formData.userID}></input>
   <div className={styles.password}><div className={styles.redStar}>*</div>密碼</div>
   <input className={styles.typePassword} type="password" placeholder='6~24位英文及數字混合' name="password"
    onChange={handleChange} value={formData.password}></input>
   <input className={styles.typePassword} type="password" placeholder='再次確認密碼' name="passwordConfirm"
    onChange={handleChange} value={formData.passwordConfirm}></input>
   <button className={styles.register} onClick={handleSumbit}>註冊</button>
  </div>

 </div>
}