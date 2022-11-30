import Link from 'next/link'
import { useRouter } from 'next/router'
import Book from '../../json/kidBook'
const BookArray = Book.Books

function test() {
 alert('work')
}

export default function BookForKid() {

 return <div className='bookContainer'>{
  BookArray.map((book) => {
   return (
    <Link href={'/BookForKid/' + book.id} className="bookDisplay">
     <img src={`/${book.img}.jpg`} width={300} height={350} className="bookImage" />
     <div className='bookTitle'>{book.name}</div>
     <div className='bookAuthor'>{book.author}</div>
     <div className='bookPrice'>現價: HK{book.price}.00</div>
    </Link>
   )
  })

 }</div>
}

