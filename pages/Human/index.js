import Link from 'next/link'
import { useRouter } from 'next/router'
import Book from '../../json/humanBook'
const BookArray = Book.Books


export default function Human() {

  return <div className='bookContainer'>{
    BookArray.map((book) => {
      return (
        <div className="bookDisplay">
          <Link href={'/Human/' + book.id}><img src={`/${book.img}.jpg`} width={300} height={350} className="bookImage" /></Link>
          <Link href={'/Human/' + book.id}> <div className='bookTitle'>{book.name}</div></Link>
          <div className='bookAuthor'>{book.author}</div>
          <div className='bookPrice'>現價: HK$ {book.price}.00</div>
        </div>)
    })

  }</div>
}

