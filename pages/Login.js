import styles from '../styles/login.module.css'
import Link from 'next/link'
export default function login() {






 return <div className={styles.loginPage}>
  <div className={styles.left}>
   <Link href="/"><div>登入</div>
   </Link><img src="/arrow.png" className={styles.arrow} />
   <div>登入會員</div></div>
  <div className={styles.loginBox}>
   <div className={styles.title}>
    <div className={styles.titleLeft}> 登入會員</div> <div className={styles.titleRight}>還不是會員嗎？<Link className={styles.register} href='/Register'>註冊會員</Link></div>
   </div>
   <div className={styles.account}>帳號</div>
   <input className={styles.typeAccount} type="text"></input>
   <div className={styles.password}>密碼</div>
   <input className={styles.typePassword} type="password"></input>
   <button className={styles.login} >登入</button>
   <Link href='/api/auth/signin' className={styles.googleLogin}><img src='/google.png' className={styles.googleIcon} /> 使用Google登入</Link>
  </div>

 </div>
}