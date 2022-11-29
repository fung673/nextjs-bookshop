import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


function Header() {
 const router = useRouter()
 const path = router.route
 return <div>
  <nav className="layout-header">
   <ul className="header-container ">
    <li><Link href="/"><Image src='/homepage.png'
     alt="Picture of homepage"
     width={23} height={20}
    /> 主頁</Link></li>
    <li className='booklist'>{path === '/BookForKid' ? <Link href='/BookForKid' className='underline'>兒童圖書</Link>
     : <Link href='/BookForKid'>兒童圖書</Link>}</li>
    <li className='booklist'>{path === '/Literature' ? <Link href='/Literature' className='underline'>文學小說</Link> : <Link href='/Literature'>文學小說</Link>}</li>
    <li className='booklist'>{path === '/Finance' ? <Link href='/Finance' className='underline'>商業理財</Link> : <Link href='/Finance'>商業理財</Link>}</li>
    <li className='booklist'>{path === '/Art' ? <Link href='/Art' className='underline'>藝術設計</Link> : <Link href='/Art'>藝術設計</Link>}</li>
    <li className='booklist'>{path === '/Human' ? <Link href='/Human' className='underline'>人文社科</Link> : <Link href='/Human'>人文社科</Link>}</li>
    <li className='booklist'>{path === '/Psycho' ? <Link href='/Psycho' className='underline'>心理勵志</Link> : <Link href='/Psycho'>心理勵志</Link>}</li>
    <li className='booklist'>{path === '/Lang' ? <Link href='/Lang' className='underline'>語言學習及學生教材</Link> : <Link href='/Lang'>語言學習及學生教材</Link>}</li>
    <li><Link href="/"><img src='/shoppingCart.png'
     alt="Picture of shoppingCart" className='resizeShoppingCart'
    /> 購物車</Link></li>
    <li><Link href="/"><img src='/Login.png'
     alt="Picture of shoppingCart" className='resizeLogin'
    /> 會員登入</Link></li>
   </ul>
  </nav>
 </div>
}

export default Header