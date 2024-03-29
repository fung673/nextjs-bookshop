import styles from '../styles/login.module.css'
import Link from 'next/link'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase'
import { useRouter } from 'next/router'
import { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';

export default function login() {
 const { login, setLogin } = useContext(AuthContext)
 const router = useRouter()
 const [user, setUser] = useState(
  {
   email: "",
   password: ""
  }
 )
 function handleChange(event) {
  const { name, value } = event.target
  setUser(prev => ({ ...prev, [name]: value }))
  console.log(user)
 }

 const handleLogin = async () => {
  try {
   await signInWithEmailAndPassword(auth, user.email, user.password)
   setLogin(true)
   console.log(login)
   router.push('/')
   alert('成功登入')

  }
  catch (error) {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(error)
   console.log(errorCode)
   if (errorCode == "auth/user-not-found") {
    alert("User Not Found")
   }
   else if (errorCode == "auth/wrong-password") {
    alert("Wrong Password")
   }
   else if (errorCode == 'auth/invalid-email') {
    alert('Email Not Found')
   }
  };
 }




 return <div className={styles.loginPage}>
  <div className={styles.left}>
   <Link href="/"><div>登入</div>
   </Link><img src="/arrow.png" className={styles.arrow} />
   <div>登入會員</div></div>
  <div className={styles.loginBox}>
   <div className={styles.title}>
    <div className={styles.titleLeft}> 登入會員</div> <div className={styles.titleRight}>還不是會員嗎？<Link className={styles.register} href='/Register'>註冊會員</Link></div>
   </div>
   <div className={styles.userBox}>
    <div className={styles.account}>電郵地址</div>
    <input className={styles.typeAccount} type="text" onChange={handleChange} name="email" value={user.email} />
    <div className={styles.password}>密碼</div>
    <input className={styles.typePassword} type="password" onChange={handleChange} name="password" value={user.password} />
   </div>
   <button className={styles.login} onClick={handleLogin}>登入</button>
   <Link href='/api/auth/signin' className={styles.googleLogin}><img src='/google.png' className={styles.googleIcon} /> 使用Google登入</Link>
  </div>

 </div>
}