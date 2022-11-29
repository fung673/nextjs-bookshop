import Link from 'next/link'
import { useRouter } from 'next/router'
import Book from '../../json/Book'

const BookArray = Book.Books


export default function Art() {

 const router = useRouter()
 return <div className='bookContainer'>{
  BookArray.map((book) => {
   return (
    <Link href={'/Art/' + book.id} className="bookDisplay"><img src={`/${book.img}.jpg`} width={300} height={350} />{book.name}{book.author}</Link>)
  })

 }</div>
}

