import Link from 'next/link'
import { useRouter } from 'next/router'
import Book from '../../json/langBook'
const BookArray = Book.Books


export default function Lang() {

 return <div className='bookContainer'>{
  BookArray.map((book) => {
   return (
    <Link href={'/Lang/' + book.id} className="bookDisplay">
     <img src={`/${book.img}.jpg`} width={300} height={350} className="bookImage" />
     <div className='bookTitle'>{book.name}</div>
     <div className='bookAuthor'>{book.author}</div>
     <div className='bookPrice'>現價: HK{book.price}.00</div>
    </Link>)
  })

 }</div>
}

