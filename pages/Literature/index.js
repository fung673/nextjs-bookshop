import Link from 'next/link'
import { useRouter } from 'next/router'
import Book from '../../json/literatureBook'
const BookArray = Book.Books


export default function Literature() {

 return <div className='bookContainer'>{
  BookArray.map((book) => {
   return (
    <Link href={'/Literature/' + book.id} className="bookDisplay">
     <img src={`/${book.img}.jpg`} width={300} height={350} className="bookImage" />
     <div className='bookTitle'>{book.name}</div>
     <div className='bookAuthor'>{book.author}</div>
     <div className='bookPrice'>現價: HK{book.price}.00</div>
    </Link>)
  })

 }</div>
}

