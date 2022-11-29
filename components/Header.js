import Link from 'next/link'
import Image from 'next/image'

function Header() {
 return <div>
  <nav className="layout-header">
   <ul className="header-container ">
    <li><Link href="/"><Image src='/homepage.png'
     alt="Picture of homepage"
     width={23} height={20}
    /> 主頁</Link></li>
    <li className='booklist'><Link href='/BookForKid'>兒童圖書</Link></li>
    <li className='booklist'><Link href='/Literature'>文學小說</Link></li>
    <li className='booklist'><Link href='/Finance'>商業理財</Link></li>
    <li className='booklist'><Link href='/Art'>藝術設計</Link></li>
    <li className='booklist'><Link href='/Human'>人文社科</Link></li>
    <li className='booklist'><Link href='/Psycho'>心理勵志</Link></li>
    <li className='booklist'><Link href='/Lang'>語言學習及學生教材</Link></li>
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